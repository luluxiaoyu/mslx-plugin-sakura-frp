using System.Runtime.InteropServices;
using MSLX.SDK;
using Newtonsoft.Json.Linq;

namespace MSLX.Plugin.Sakura.Frp;

public class MSLXPluginEntry : IPlugin
{
    public string Id => "mslx-plugin-sakura-frp"; 
    public string Name => "SakuraFrp 官版Frpc";
    public string Description => "快捷将SakuraFrp隧道添加到MSLX的服务端实例中，解决MSLX原生隧道不支持自定义frpc客户端导致无法使用上游的新特性问题。";
    public string Version => "1.0.1";
    public string Icon => "https://www.natfrp.com/favicon.ico";
    public string MinSDKVersion => "1.4.4";
    public string Developer => "luluxiaoyu";
    public string AuthorUrl => "https://github.com/luluxiaoyu";
    public string PluginUrl => "https://mslx-plugins.mslmc.net/plugins/mslx-plugin-sakura-frp";
    
    public static MSLXPluginEntry Instance { get; private set; }

    public async void OnLoad()
    {
        Instance = this;
        SDK.MSLX.Logger.Info("SakuraFrp 官版Frpc 插件载入中···");
        await InitializeFrpcAsync();
    }

    public void OnUnload() {
        SDK.MSLX.Logger.Info("SakuraFrp 官版Frpc 插件卸载成功~");
    }
    
    private async Task InitializeFrpcAsync()
    {
        string platformKey = GetPlatformKey();
        if (string.IsNullOrEmpty(platformKey))
        {
            SDK.MSLX.Logger.Error("未能识别当前系统平台或架构，放弃下载 frpc。");
            return;
        }

        string dataPath = this.Config().GetDataPath();
        string ext = RuntimeInformation.IsOSPlatform(OSPlatform.Windows) ? ".exe" : "";
        
        if (!Directory.Exists(dataPath))
        {
            Directory.CreateDirectory(dataPath);
        }
        
        string searchPattern = $"frpc_*_{platformKey}{ext}";
        string[] existingFiles = Directory.GetFiles(dataPath, searchPattern);
        
        if (existingFiles.Length > 0)
        {
            string localFile = Path.GetFileName(existingFiles[0]);
            SDK.MSLX.Logger.Info($"检测到本地已存在核心 [{localFile}]，跳过下载。");
            return;
        }

        SDK.MSLX.Logger.Info($"未检测到本地 sakura frpc 核心 ({platformKey})，准备获取最新列表...");
        
        var response = await SDK.MSLX.Http.GetAsync("https://www.natfrp.com/cgi/v4/system/clients");
        
        if (!response.IsSuccessStatusCode)
        {
            SDK.MSLX.Logger.Error($"获取 SakuraFrp 客户端列表失败, 状态码: {response.StatusCode}");
            return;
        }

        try
        {
            JObject root = JObject.Parse(response.Content ?? "{}");
            var frpcNode = root["frpc"];
            if (frpcNode == null)
            {
                SDK.MSLX.Logger.Error("API 返回数据中未包含 frpc 节点。");
                return;
            }
            
            string version = frpcNode["ver"]?.ToString() ?? "unknown";
            
            var targetArch = frpcNode["archs"]?[platformKey];
            if (targetArch == null)
            {
                SDK.MSLX.Logger.Error($"SakuraFrp 官方暂未提供 {platformKey} 平台的 frpc 客户端。");
                return;
            }

            string downloadUrl = targetArch["url"]?.ToString() ?? "";
            if (string.IsNullOrEmpty(downloadUrl))
            {
                SDK.MSLX.Logger.Error($"未找到 {platformKey} 平台的下载链接。");
                return;
            }
            
            string fileName = $"frpc_{version}_{platformKey}{ext}";
            string targetPath = Path.Combine(dataPath, fileName);

            SDK.MSLX.Logger.Info($"开始下载 frpc 核心, 版本: {version}...");
            var result = await SDK.MSLX.Downloader.DownloadFileAsync(
                downloadUrl, 
                targetPath,
                (progress, speed) => 
                {
                    SDK.MSLX.Logger.Debug($"\r[frpc 下载] 进度: {progress:0.0}% | 速度: {speed}"); 
                });

            if (result.Success)
            {
                SDK.MSLX.Logger.Info($"frpc 核心下载成功！保存至: {fileName}");
                
                // 可执行权限
                if (!RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
                {
                    SDK.MSLX.Logger.Info("正在为 Unix 核心赋予执行权限...");
                    System.Diagnostics.Process.Start("chmod", $"+x \"{targetPath}\"")?.WaitForExit();
                }
            }
            else
            {
                SDK.MSLX.Logger.Error($"frpc 核心下载失败: {result.ErrorMessage}");
            }
        }
        catch (System.Exception ex)
        {
            SDK.MSLX.Logger.Error($"解析或初始化 frpc 核心时发生异常: {ex.Message}");
        }
    }
    
    private string GetPlatformKey()
    {
        string os = null;
        if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows)) os = "windows";
        else if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux)) os = "linux";
        else if (RuntimeInformation.IsOSPlatform(OSPlatform.OSX)) os = "darwin";
        else if (RuntimeInformation.IsOSPlatform(OSPlatform.Create("FREEBSD"))) os = "freebsd";

        string arch = RuntimeInformation.OSArchitecture switch
        {
            Architecture.X64 => "amd64",
            Architecture.X86 => "386",
            Architecture.Arm64 => "arm64",
            Architecture.Arm => "armv7",
            _ => null
        };

        if (os == null || arch == null) return null;
        return $"{os}_{arch}";
    }
}