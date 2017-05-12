<!--
title: "Uninstalling TeamServer"
description: "Instructions for removing TeamServer."
tags: "troubleshoot setup EOP Uninstall TeamSerer installer remove"
-->

## About Uninstallation
In the event that you ever need to remove TeamServer from one of your servers, we have provided basic instructions allowing you to safely and cleanly remove the installation.

## Running The Uninstallation Script
Each installation comes with a script for safely uninstalling the TeamServer, plus all embedded components such as Java, Tomcat and MySQL. The script is packaged within the root directory of the TeamServer installation. On Unix, the file is an executable script labeled *uninstall*. On Windows, a command file is packaged in the installation directory called *uninstall.cmd*. 

We recommend the following before performing the uninstallation process:

* Create a backup of MySQL using the database backup tool provided with TeamServer
* Shut down TeamServer using either the Windows or Unix service script

### Running The Uninstaller On Windows
1. Open the Windows explorer
2. Navigate to the Contrast installation directory
3. Click on the file *uninstall.exe* and run either as an Administrator or simply run if not installed as an Administrator
4. Follow the prompts to perform uninstallation

### Running The Installer On Linux
1. Open a Linux console
2. Change directory (cd) to the Contrast installation directory
3. Execute the command ```uninstall```
4. Follow the prompts to perform uninstallation

## Some Files Will Remain
The vast majority of files will be deleted when performing an uninstall. However, a few key files will be left on the system. These can be manually deleted by the administrator. 

>**Note:** The uninstaller will **not** delete the following:

* The Contrast Home directory
* The Contrast DATA directory
* The Contrast LOGS directory
* The Contrast MYSQL directory
