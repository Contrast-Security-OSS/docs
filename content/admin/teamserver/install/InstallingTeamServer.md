<!--
title: "Installing TeamServer"
description: "Installation instructions for running the TeamServer installer."
-->

## Gathering Information
Prior to installing Contrast TeamServer you should download and fill out the information worksheets in the Attachments section at the bottom of this article. Preparing this information will greatly reduce configuration errors.

> **NOTE:** If installing on Linux, make sure you have installed the required MySQL shared libraries. See "Preparing for the Installation" in [System Requirements](admin_tsinstall.html#system).

## Running The Installation
It is possible to run the installation as a regular user, however we recommend installation to your system as a *privileged* user.  This means if you are on Windows, you can right-click the installer and select **Run As Administrator** and if you are on Linux, use the ```sudo``` command to launch the installer.

Once you have launched the installer, you will be presented with several questions. You can use the information in the worksheets to answer these questions as you step through the installation.  More advanced configuration options are available within that application after startup when managing your account.  

> **NOTE:** Pay particularly close attention to the value used for the TeamServer URL. This is the URL that client agents will use to communicate back to the TeamServer. We make our best attempt to determine the hostname and pre-populate this value, but if the provided hostname is not resolvable by clients on the network, they won't be able to communicate back to the server.

After the installation is complete, the TeamServer will perform its initial configuration (this includes performing any required update tasks if you are upgrading your version of Contrast).

## Passing Arguments To The Installer
You can customize the behavior of the TeamServer installer by providing arguments when you run the installation script. This allows you to perform actions such as force console mode or perform an unattended installation.

| Command Line Argument | Description |
|-----------------------|-------------|
| -h -help              | Shows help for common command-line arguments. |
| -c                    | Forces the installation to run in Console Mode. |
| -q                    | Executes the installer in Unattended Mode. |
| -g                    | Forces the installation to run in GUI Mode. (Windows Only) |
| -console              | If the installer is executed in Unattended Mode and the ```-console``` argument is passed on Windows, a second console will be displayed showing the output of the installer.|
| -overwrite            | Forces the installer to overwrite all files in Unattended Mode regardless of the overwrite policy specified in the installer. *CAUTION:* This can cause your configuration to be overwritten back to default values. |
| -dir                  | Only valid in Unattended Mode. Specifies the directory where TeamServer should be installed. |
| -Dinstall4j.debug     | By default, the installer catches all exceptions, creates a *crash log* and informs the user about the location of that log file. This might be inconvenient when debugging an installer, so this system property switches off the default mechanism and exceptions are printed to ```stderr```. |
| -Dinstall4j.keepLog=true -Dinstall4j.alternativeLogfile=[path] | The installer creates a log file prefixed ```i4j_log``` for all installations and uninstallation in your *temp* directory. This log file can be helpful for debugging purposes. If your installer contains an "Install files" action and terminates successfully, the log file is copied to *[installation dir]/.install4j/installation.log*. Otherwise it will be deleted after the installer or uninstaller terminates by default. When using the ```-Dinstall4j.keepLog=true``` option, the log file won't be deleted. With the ```-Dinstall4j.alternativeLogfile=[path]``` option, the log file will be copied to the file specified with ```[path]```. This should be an absolute path name. Note that both options have no effect if the log file has already been copied to the installation directory. |
| -varfile (filename)   | Specifies a variable-file to be used. When installing in Unattended Mode, this allows you to provide customizations to the default values set by the installer. |
| --skip-preflight      | Skips preflight checks (current user is root, dependencies present). If using this parameter, it must be the first parameter passed on the command line. |

## Logging In For The First Time
The first time you access the TeamServer, you will be able to log in using the same credentials used when signing up for your Contrast Hub account. The login page is located at ***/Contrast***. It is recommended that you change the administrator password after you've installed and configured TeamServer.

> Your Superadmin Username: contrast_superadmin@your-email-domain.com

> Default Superadmin Password: default1!

## Attachments

Information wWorksheets:

* [Network](https://docs.contrastsecurity.com/assets/attachments/CONTRAST-WS-EOP-Network.pdf)
* [Auth.](https://docs.contrastsecurity.com/assets/attachments/CONTRAST-WS-EOP-Auth.pdf)
* [Misc.](https://docs.contrastsecurity.com/assets/attachments/CONTRAST-WS-EOP-Misc.pdf)
