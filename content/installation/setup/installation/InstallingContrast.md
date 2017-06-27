<!--
title: "Installing TeamServer"
description: "Installation instructions for running the TeamServer installer."
tags: "setup EOP installation installer TeamServer Install4J Logging"
-->

## Gather Information

Prior to installing the Contrast application, you should download and fill out the information worksheets at the bottom of this article. Preparing this information greatly reduces configuration errors.

> **Note:** If installing on Linux, make sure you installed the required MySQL shared libraries. See the section on **Preparing for the Installation** in [System Requirements](installation-setup.html#contrast-reqs) for more information.

## Run the Installation

It's possible to run the installation as a regular user; however, Contrast recommends that you complete the process as a **privileged user**. On Windows, you can right-click on the installer and select **Run As Administrator**. On Linux, use the ```sudo``` command to launch the installer.

Once you launch the installer, you're presented with several questions. You can use the information in the worksheets to answer these questions as you step through the installation. More advanced configuration options are available within the application  when managing your account after startup. If you're using a distributed setup for the Contrast application, you should use a distributed MySQL instance during setup. 

> **Note:** Pay close attention to the value used for the Contrast application URL. This is the URL that client agents use to communicate back to the application. Contrast makes the best attempt to determine the hostname and prepopulate this value; but, if the provided hostname isn't resolvable by clients on the network, they won't be able to communicate back to the server.

After the installation is complete, Contrast performs its initial configuration. If you're upgrading your version of Contrast, this includes performing any required update tasks.

## Customize the Installer

Customize the behavior of the Contrast application installer by providing arguments when you run the installation script. This allows you to perform actions such as force console mode or perform an unattended installation.

| Command Line Argument | Description |
|-----------------------|-------------|
| -h -help              | Shows help for common command line arguments. |
| -c                    | Forces the installation to run in Console Mode. |
| -q                    | Executes the installer in Unattended Mode. |
| -g                    | Forces the installation to run in GUI Mode. (Windows Only) |
| -console              | If the installer is executed in Unattended Mode and the ```-console``` argument is passed on Windows, a second console shows the output of the installer.|
| -overwrite            | Forces the installer to overwrite all files in Unattended Mode regardless of the overwrite policy specified in the installer. **Caution:** This can cause your configuration to be overwritten back to default values. |
| -dir                  | Only valid in Unattended Mode; specifies the directory where Contrast should be installed. |
| -Dinstall4j.debug     | By default, the installer catches all exceptions, creates a *crash log* and informs the user about the location of that log file. This might be inconvenient when debugging an installer; so, this system property switches off the default mechanism, and exceptions are printed to ```stderr```. |
| -Dinstall4j.keepLog=true -Dinstall4j.alternativeLogfile=[path] | The installer creates a log file prefixed ```i4j_log``` for all installations and uninstallation in your *temp* directory. This log file can be helpful for debugging purposes. If your installer contains an **Install files** action and terminates successfully, the log file is copied to *[installation dir]/.install4j/installation.log*. Otherwise, the file is deleted after the installer or uninstaller terminates by default. <br> When using the ```-Dinstall4j.keepLog=true``` option, the log file won't be deleted. With the ```-Dinstall4j.alternativeLogfile=[path]``` option, the log file is copied to the file specified with ```[path]```. This should be an absolute path name. Neither option has any effect if the log file has already been copied to the installation directory. |
| -varfile (filename)   | Specifies a variable-file to be used. When installing in Unattended Mode, this allows you to provide customizations to the default values set by the installer. |
| --skip-preflight      | Skips preflight checks (current user is root, dependencies present). If using this parameter, it must be the first parameter passed on the command line. |

## Log In to Contrast

The first time you access the Contrast application, you can log in using the same credentials you used when signing up for your Contrast Hub account. The login page is located at ***/Contrast***. Contrast recommends that you change the administrator password after you've installed and configured the application.

* **Your SuperAdmin username:** contrast_superadmin@your-email-domain.com

* **Default SuperAdmin password:** default1!

## More Information

Information Worksheets:

* [Network](https://docs.contrastsecurity.com/assets/attachments/CONTRAST-WS-EOP-Network.pdf)
* [Auth.](https://docs.contrastsecurity.com/assets/attachments/CONTRAST-WS-EOP-Auth.pdf)
* [Misc.](https://docs.contrastsecurity.com/assets/attachments/CONTRAST-WS-EOP-Misc.pdf)
