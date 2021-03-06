<!--
title: "Contrast .NET Agent Web API and OWIN Installation"
description: "Contrast .NET agent Web API and OWIN Installation"
tags: "installation agent .NET web api owin"
-->

The .NET agent supports analysis of Web API applications that are 'self-hosted' with the 'Open Web Interface for .NET' (OWIN) in the 2 modes outlined below.

Note: We don't support Web API applications hosted in the IIS integrated pipeline using the SystemWeb HttpModule or those deployed via an 'OWIN Host'.

Both deployment modes below require that the Agent has already been installed by following the steps in [Installation for Windows
](https://docs.contrastsecurity.com/installation-netinstall.html#net-windows).

## WebAPI hosted by OWIN deployed as a command line application

Once the Agent is installed, you need to set the following environment variables before running the command line application that is being used to self-host OWIN:

| Environment variable       | Value                       |
| -------------------------- | --------------------------- |
| COR_ENABLE_PROFILING       | 1                           |
| COR_PROFILER               | {EFEB8EE0-6D39-4347-A5FE-4D0C88BC5BC1}   |
| COR_PROFILER_PATH_32       | C:\Program Files\Contrast\dotnet\ContrastProfiler-32.dll   |
| COR_PROFILER_PATH_64       | C:\Program Files\Contrast\dotnet\ContrastProfiler-64.dll   |
| CONTRAST\_\_AGENT\_\_DOTNET\_\_CONTAINER   | true                        |

Note that 'COR_PROFILER_PATH_32/COR_PROFILER_PATH_64' must match the installation directory chosen during the install of the .NET Framework Agent.

## WebAPI hosted by OWIN deployed as a Windows service

Install the service that contains the WebAPI application. Note the name of the service.

Set the required environment variables. Environment variables that are unique for each service can be set under that service's registry key. The service's registry key can be found at:  
HKLM\SYSTEM\CurrentControlSet\Services\YourServiceName

Under the service's registry key, create a REG_MULTI_SZ value called `Environment`. Then add the environment variables and values below. Note that each environment variable key/value pair must be separated by a new line. If there is already an `Environment` value, add the new values below the existing values.

| Environment variable       | Value                       |
| -------------------------- | --------------------------- |
| COR_ENABLE_PROFILING       | 1                           |
| COR_PROFILER               | {EFEB8EE0-6D39-4347-A5FE-4D0C88BC5BC1}   |
| COR_PROFILER_PATH_32       | C:\Program Files\Contrast\dotnet\ContrastProfiler-32.dll   |
| COR_PROFILER_PATH_64       | C:\Program Files\Contrast\dotnet\ContrastProfiler-64.dll   |
| CONTRAST_CONFIG_PATH       | C:\ProgramData\contrast\dotnet\contrast_security.yaml   |

Note that 'COR_PROFILER_PATH_32/COR_PROFILER_PATH_64' must match the installation directory chosen during the install of the .NET Framework Agent.

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
