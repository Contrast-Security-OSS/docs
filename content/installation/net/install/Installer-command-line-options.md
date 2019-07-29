
<!--
title: "Command Line Options for the .NET Agent Installer"
description: "Use command line options for the Contrast .NET agent installer."
tags: "installation agent .NET windows silent unattended installer"
-->

Use the command line to access additional options supported by the .NET agent installer.

## Command Line Operations

The .NET agent installation can be installed using the Windows UI and uninstalled or repaired using standard Windows features (e.g. the Programs and Features Control Panel, Powershell, etc.). However, it may be desirable to use the .NET agent installer to perform these actions instead, for example, in automated scripting scenarios.

**Attended:**
- Install: `ContrastSetup.exe`
- Uninstall: `ContrastSetup.exe -uninstall`
- Repair: `ContrastSetup.exe -repair`

**Unattended/Silent:**
- Install: `ContrastSetup.exe -s -norestart`
- Uninstall: `ContrastSetup.exe -uninstall -s -norestart`
- Repair: `ContrastSetup.exe -repair -s -norestart`

## Custom Installation

The .NET agent installer supports several additional options accessible when installing using the command line. Supported options are shown below:

| Option | Description | Example |
|--|--|--|
| `StartTray` | When set to `0`, suppress starting the Tray application when installation is completed. This is recommended when installing on Windows Server Core instances. Defaults to `1`. | `StartTray=0` |
| `PathToYaml` | Specify a custom YAML configuration file. Defaults to a file called `contrast_security.yaml` located relative to the installer's location. | `PathToYaml=c:\contrast_security.yaml` |
| `SERVICE_STARTUP_TYPE_MANUAL` | When set to `1`, and when installing/upgrading/repairing, set the Contrast service startup type to Manual. This _must_ be provided on installs/upgrades/repairs. Defaults `0` (Automatic Delayed Start). | `SERVICE_STARTUP_TYPE_MANUAL=1` |
| `SUPPRESS_SERVICE_START` | When set to `1`, and when installing/upgrading/repairing, suppress automatically starting the service. This _must_ be provided on installs/upgrades/repairs. Defaults `0`. | `SUPPRESS_SERVICE_START=1` |

For example, to install the .NET agent using scripts the following command is common used:

`ContrastSetup.exe -s -norestart StartTray=0 PathToYaml=C:\Temp\custom.yaml`

This command will install the .NET agent in silent and unattended mode, suppress the start of the Tray application, and use a custom path to the YAML configuration file.
