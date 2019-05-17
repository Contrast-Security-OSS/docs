#Remove any staging files from previous runs of the container
if(Test-Path "C:\run") {
    Remove-Item -Recurse -Force "C:\run"
}
# Create staging folder for contrast files
New-Item "C:\run\" -ItemType Directory -ErrorAction SilentlyContinue > $null

# Download the latest contrast agent assemblies from Nuget.org
Invoke-WebRequest "https://www.nuget.org/api/v2/package/Contrast.NET.Azure.AppService/" -OutFile c:\run\contrastAgent.zip
Expand-Archive C:\run\contrastAgent.zip -DestinationPath c:\run\contrastAgent

# Copy the config yaml
New-Item "C:\run\config" -ItemType Directory -ErrorAction SilentlyContinue > $null
Copy-Item -Path C:\shared\contrast_security.yaml -Destination C:\run\config\contrast_security.yaml -Force

##### Set Required settings
$env:COR_ENABLE_PROFILING = "1"
$env:COR_PROFILER = "{EFEB8EE0-6D39-4347-A5FE-4D0C88BC5BC1}"
$env:COR_PROFILER_PATH_32 = "C:\run\contrastAgent\content\contrastsecurity\ContrastProfiler-32.dll"
$env:COR_PROFILER_PATH_64 = "C:\run\contrastAgent\content\contrastsecurity\ContrastProfiler-64.dll"
$env:AGENT__DOTNET__CONTAINER = "true"

#### Contrast Configuration
# Set path to config file. Remove if not using the yaml file, or if the yaml is in the default location (C:\ProgramData\contrast\dotnet\contrast_security.yaml)
$env:CONTRAST_CONFIG_PATH = "C:\run\config\contrast_security.yaml"

# Alternately you can also use environment variables instead of configuration yaml file.
# They can be set here or passed in with "docker run -e"
# For example contrast.url becomes CONTRAST__URL. More documentation: https://docs.contrastsecurity.com/installation-netconfig.html#environment-variables

# Minimum required settings for Contrast authentication:
#$env:CONTRAST__URL = "https://app.contrastsecurity.com"
#$env:CONTRAST__USER_NAME = "my_user_name"
#$env:CONTRAST__SERVICE_KEY = "service_key"
#$env:CONTRAST__API_KEY = "api_key"

# Microsoft's ServiceMonitor process will start IIS and promote these environment variables to the
# DefaultAppPool process.  If not using ServiceMonitor, use a different method to include the environment variables in your application process
C:\ServiceMonitor.exe w3svc
