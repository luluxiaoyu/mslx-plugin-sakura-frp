using System.Runtime.InteropServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MSLX.Plugin.Sakura.Frp.Models;
using MSLX.SDK;
using MSLX.SDK.Models;
using Newtonsoft.Json.Linq;

namespace MSLX.Plugin.Sakura.Frp.Controllers
{
    [ApiController]
    [Route("api/plugins/mslx-plugin-sakura-frp/frp")]
    [Authorize(Roles = "admin")]
    public class FrpController : ControllerBase
    {
        [HttpPost("config")]
        public IActionResult CreateFrpConfig([FromBody] CreateConfigDto request)
        {
            if (string.IsNullOrWhiteSpace(request?.Config))
            {
                return BadRequest(new ApiResponse<object>
                {
                    Code = 400,
                    Message = "配置文件内容不能为空"
                });
            }

            try
            {
                string dataPath = MSLXPluginEntry.Instance.Config().GetDataPath();
                if (!Directory.Exists(dataPath))
                {
                    Directory.CreateDirectory(dataPath);
                }
                
                long timestamp = DateTimeOffset.UtcNow.ToUnixTimeSeconds();
                string instanceDirPath = Path.Combine(dataPath, timestamp.ToString());
                if (!Directory.Exists(instanceDirPath))
                {
                    Directory.CreateDirectory(instanceDirPath);
                }
                
                string configFileName = "config.ini";
                string configFullPath = Path.Combine(instanceDirPath, configFileName);

                System.IO.File.WriteAllText(configFullPath, request.Config);
                
                string platformKey = GetPlatformKey();
                string ext = RuntimeInformation.IsOSPlatform(OSPlatform.Windows) ? ".exe" : "";
                string searchPattern = $"frpc_*_{platformKey}{ext}";

                string[] existingFiles = Directory.GetFiles(dataPath, searchPattern);
                string exeFullPath;
                
                if (existingFiles.Length > 0)
                {
                    exeFullPath = existingFiles[0];
                }
                else
                {
                    return StatusCode(500, new ApiResponse<object>
                    {
                        Code = 500,
                        Message = $"未找到适用于当前平台 ({platformKey}) 的 SakuraFrp 核心文件，请尝试重启面板或重新加载插件以触发自动下载。"
                    });
                }
                
                string startCommand = $"\"{exeFullPath}\" -c \"{configFullPath}\"";

                return Ok(new ApiResponse<object>()
                {
                    Code = 200,
                    Message = "配置文件创建成功",
                    Data = new JObject() {
                        ["configName"] = configFileName,
                        ["configPath"] = configFullPath,
                        ["instancePath"] = instanceDirPath,
                        ["startCommand"] = startCommand
                    }
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ApiResponse<object>
                {
                    Code = 500,
                    Message = $"配置文件创建失败: {ex.Message}"
                });
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

            return $"{os}_{arch}";
        }
    }
}