<!--
title: "Uninstalling TeamServer"
description: "Instructions for removing TeamServer."
tags: "troubleshoot setup EOP Uninstall TeamSerer installer remove"
-->

If you ever need to remove Contrast from one of your servers, these basic instructions will help you safely and cleanly remove the installation.

## Run the Script
Each installation comes with a script for safely uninstalling Contrast and all embedded components such as Java, Tomcat and MySQL. The script is packaged in the root directory of the Contrast installation. On Unix, the file is an executable script labeled *uninstall*. On Windows, a command file is packaged in the installation directory called *uninstall.cmd*. 

Contrast recommends that you complete the following steps before beginning the uninstallation process:

* Create a [backup of MySQL](installation-setup.html#setup-mysql) using the database backup tool provided with Contrast.
* Shut down Contrast using either the Windows or Unix service script.

### Windows

To uninstall Contrast on Windows:

1. Open the Windows Explorer.
2. Navigate to the Contrast installation directory.
3. Click on the file *uninstall.exe*. If you installed Contrast as an Administrator, you should also run the file using that role. If not, run the file in your current role.
4. Follow the prompts to complete uninstallation.

### Linux

To uninstall Contrast on Linux:

1. Open a Linux console.
2. Change directory (`cd`) to the *Contrast installation* directory.
3. Execute the command `uninstall`.
4. Follow the prompts to complete uninstallation.

## Some Files Will Remain
You'll delete the vast majority of files during the uninstall. However, a few key files will be left on the system, which an Administrator can manually delete. 

>**Note:** The uninstaller will **not** delete the following:

* The Contrast Home directory
* The Contrast DATA directory
* The Contrast LOGS directory
* The Contrast MYSQL directory
