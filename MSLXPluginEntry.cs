using MSLX.SDK;

namespace MSLX.Plugin.Sakura.Frp;

public class MSLXPluginEntry : IPlugin
{
    public string Id => "mslx-plugin-sakura-frp"; 
    public string Name => "SakuraFrp 官版Frpc";
    public string Description => "快捷将SakuraFrp隧道添加到MSLX的服务端实例中，解决MSLX原生隧道不支持自定义frpc客户端导致无法使用上游的新特性问题。";
    public string Version => "1.0";
    public string Icon => "https://www.natfrp.com/favicon.ico";
    public string MinSDKVersion => "1.4.4";
    public string Developer => "luluxiaoyu";
    public string AuthorUrl => "https://github.com/luluxiaoyu";
    public string PluginUrl => "https://mslx-plugins.mslmc.net/plugins/mslx-plugin-sakura-frp";

    public async void OnLoad()
    {
        SDK.MSLX.Logger.Info("SakuraFrp 官版Frpc 插件载入中···");
        
        // ===== 下载器调用示例 ===== 
        SDK.MSLX.Logger.Info("准备下载文件...");
        string targetPath = Path.Combine(this.Config().GetDataPath(), "server.jar");
        if (File.Exists(targetPath))
        {
            return;
        }

        var result = await SDK.MSLX.Downloader.DownloadFileAsync(
            "https://bmclapi2.bangbang93.com/forge/download?mcversion=26.1.2&version=64.0.8&category=installer&format=jar", 
            targetPath,
            (progress, speed) => 
            {
                SDK.MSLX.Logger.Debug($"\r下载中: {progress:0.0}% [{speed}]"); 
            });

        if (result.Success)
        {
            SDK.MSLX.Logger.Info("下载完成，可以开始搞事情了！");
        }
        else
        {
            SDK.MSLX.Logger.Error($"下载失败: {result.ErrorMessage}");
        }
        
    }

    public void OnUnload() {
        SDK.MSLX.Logger.Info("SakuraFrp 官版Frpc 插件卸载成功~");
    }
}