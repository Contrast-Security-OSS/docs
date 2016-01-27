<!--
title: "Uninstalling TeamServer"
description: "Instructions for removing TeamServer."
-->

## About Uninstallation
In the event that you ever need to remove TeamServer from one of your servers, we have provide a very basic set of instructions to run to safely and cleanly remove the installation.

## Running The Uninstallation Script
Each installation of TeamServer comes with a script for safely uninstalling the TeamServer, plus all embedded components such as Java, Tomcat and MySQL. The script is packaged in the root directory of the installation of TeamServer. On Unix, the file is an executable script labeled uniinstall. On Windows, a command file is packaged in the installation directory called uninstall.cmd. 

We recommend the following before performing the uninstallation process:

* Take a backup of MySQL using the database backup tool provided with TeamServer.
* Shutdown TeamServer using either the Window's service or the Unix service script.

### Running the Uninstaller on Windows
* Open the Windows explorer
* Navigate to the Contrast installation directory
* Click on the file ```uninstall.exe``` and run either as an Administrator or simply run if not installed as an Administrator
* Follow the prompts to perform uninstallation

### Running the Installer on Linux
* Open a linux console
* Change directory (cd) to the Contrast installation directory
* Execute the command ```uninstall```
* Follow the prompts to perform uninstallation

## Some Files Will Remain
The vast majority of files will be deleted when performing an uninstall. However, a few key files will be left on the file system after uninstall. These can be manually deleted by the administrator. The uninstaller will *NOT* delete the following:

* The Contrast Home directory
* The Contrast DATA directory
* The Contrast LOGS directory
* The Contrast MYSQL directory
