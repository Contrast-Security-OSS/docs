## WebAPI hosted by OWIN deployed as a Windows service

Install the service that contains the WebAPI application. Note the name of the service.

Set the required environment variables. Environment variables that are unique for each service can be set under that service's registry key. The service's registry key can be found at:  
HKLM\SYSTEM\CurrentControlSet\Services\YourServiceName

Under the service's registry key, create a REG_MULTI_SZ value called `Environment`. Then add the environment variables and values below. Note that each environment variable key/value pair must be separated by a new line. If there is already an `Environment` value, add the new values below the existing values. Make sure the COR_PROFILER_PATH_64 and COR_PROFILER_PATH_32 environment variables match the installation directory chosen for the .NET Framework agent.

COR_ENABLE_PROFILING=1  
COR_PROFILER={EFEB8EE0-6D39-4347-A5FE-4D0C88BC5BC1}  
COR_PROFILER_PATH_64=C:\Program Files\Contrast\dotnet\ContrastProfiler-64.dll  
COR_PROFILER_PATH_32=C:\Program Files\Contrast\dotnet\ContrastProfiler-32.dll  
CONTRAST_CONFIG_PATH=C:\ProgramData\contrast\dotnet\contrast_security.yaml  

Once the environment variables are set, the service must be restarted. This will cause the new values to be loaded.

This Powershell script can be used to set the required environment variables.

```
param (
    # Name of the service that it was given at installation.
    [Parameter(Mandatory=$true)]
    [string]
    $ServiceName,

    # Path to the 64-bit Contrast profiler DLL.
    # Defaults to: "C:\Program Files\Contrast\dotnet\ContrastProfiler-64.dll"
    [string]
    $ProfilerPath64 = "C:\Program Files\Contrast\dotnet\ContrastProfiler-64.dll",

    # Path to the 32-bit Contrast profiler DLL.
    # Defaults to: "C:\Program Files\Contrast\dotnet\ContrastProfiler-32.dll"
    [string]
    $ProfilerPath32 = "C:\Program Files\Contrast\dotnet\ContrastProfiler-32.dll",

    # Path to the Contrast agent configuration YAML file.
    # Defaults to: "C:\ProgramData\contrast\dotnet\contrast_security.yaml"
    [string]
    $ConfigYamlPath = "C:\ProgramData\contrast\dotnet\contrast_security.yaml"
)

if (-Not (Test-Path -Path $ProfilerPath64 -PathType Leaf)) {
    Write-Host "Cannot find 64-bit profiler DLL at path `"$ProfilerPath64`"."
    exit 1
}

if (-Not (Test-Path -Path $ConfigYamlPath -PathType Leaf)) {
    Write-Host "Cannot find configuration YAML file at path `"$ConfigYamlPath`"."
    exit 1
}

if (-Not (Test-Path -Path $ProfilerPath32 -PathType Leaf)) {
    Write-Host "Cannot find 32-bit profiler DLL at path `"$ProfilerPath32`"."
    exit 1
}

# Check if there is a service with the specified name installed.
$service = Get-Service -Name $ServiceName -ErrorAction Ignore

if ($null -Eq $service) {
    Write-Host "The service `"$ServiceName`" was not found."
    exit 2
}

# Create value for multiline registry string.
$values = @(
    "COR_ENABLE_PROFILING=1",
    "COR_PROFILER={EFEB8EE0-6D39-4347-A5FE-4D0C88BC5BC1}",
    "COR_PROFILER_PATH_64=$ProfilerPath64",
    "COR_PROFILER_PATH_32=$ProfilerPath32",
    "CONTRAST_CONFIG_PATH=$ConfigYamlPath"
)

$registryKey = "HKLM:\SYSTEM\CurrentControlSet\Services\$ServiceName"

# Check if the Environment value already exists.
$environmentValue = Get-ItemProperty -Path $registryKey -Name "Environment" -ErrorAction Ignore

if ($null -Ne $environmentValue) {
    # Add the Contrast environment variables to the existing variables.
    $existingValues = [System.Collections.ArrayList]@($environmentValue.Environment)
    foreach ($item in $values) {
        $idx = $existingValues.Add($item)
    }
    $values = $existingValues
}

# Set the environment variables for the service.
Set-ItemProperty -Path $registryKey -Type MultiString -Name "Environment" -Value $values

# Restart the service so it picks up the new environment variables.
Restart-Service -Name $ServiceName
```
