
<!--
title: "Command Line Options for the .NET Agent Installer"
description: "Use command line options for the Contrast .NET agent installer."
tags: "installation agent .NET windows silent unattended installer"
-->

Use the command line to access additional options supported by the .NET agent installer.

## Command Line Operations

The .NET agent can be installed using the Windows UI, and uninstalled or repaired using standard Windows features including the Programs and Features Control Panel, Powershell, etc. However, you may want to use the .NET agent installer to perform these actions instead for certain scenarios such as automated scripting.

### Attended

- Install: `ContrastSetup.exe`
- Uninstall: `ContrastSetup.exe -uninstall`
- Repair: `ContrastSetup.exe -repair`

### Unattended or silent

- Install: `ContrastSetup.exe -s -norestart`
- Uninstall: `ContrastSetup.exe -uninstall -s -norestart`
- Repair: `ContrastSetup.exe -repair -s -norestart`

## Custom Installation

The .NET agent installer supports several additional options that are accessible when you use the command line for installation. Supported options are shown in the following table.

| Option | Description | Example |
|--|--|--|
| `StartTray` | When set to `0`, this option suppresses the start of the Tray application when agent installation is completed. This is recommended when installing the agent on Windows Server Core instances. The default is `1`. | `StartTray=0` |
| `PathToYaml` | This option specifies a custom YAML configuration file. The default is the *contrast_security.yaml* file located relative to the installer's location. | `PathToYaml=c:\contrast_security.yaml` |
| `SERVICE_STARTUP_TYPE_MANUAL` | This option **must** be provided when installing, upgrading and repairing the agent. If set to `1`, this option sets the Contrast service startup type to Manual. The default is `0` (Automatic Delayed Start). | `SERVICE_STARTUP_TYPE_MANUAL=1` |
| `SUPPRESS_SERVICE_START` | This option **must** be provided when installing, upgrading and repairing the agent. If set to `1`, this option suppresses automatically starting the service. The default is `0`. | `SUPPRESS_SERVICE_START=1` |

### Example

To install the .NET agent using scripts, the following command is commonly used:

`ContrastSetup.exe -s -norestart StartTray=0 PathToYaml=C:\Temp\custom.yaml`

This command installs the .NET agent in silent and unattended mode, suppresses the start of the Tray application and use a custom path to the YAML configuration file.
