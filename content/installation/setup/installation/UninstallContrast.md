<!--
title: "Uninstalling TeamServer"
description: "Instructions for removing TeamServer."
tags: "installation setup EOP Uninstall TeamSerer installer remove"
-->

## About Uninstallation
The following instructions will help you remove the Contrast application from one of your servers safely and cleanly.

## Run the Script
Each installation comes with a script for safely uninstalling Contrast plus all embedded components such as Java, Tomcat and MySQL. The script is packaged within the root directory of the Contrast installation. On Unix, the file is an executable script labeled *uninstall*. On Windows, a command file is packaged in the installation directory called *uninstall.cmd*. 

Contrast recommends that you do the following before performing the uninstallation process:

* Create a backup of MySQL using the database backup tool provided with Contrast.
* Shut down Contrast using either the Windows or Unix service script.

To run the uninstaller on **Windows**:

* Open the Windows Explorer.
* Navigate to the Contrast installation directory.
* Click on the file *uninstall.exe* and run. If you ran the installation as an Administrator, run this in the same manner.
* Follow the prompts to perform uninstallation.

Running the uninstaller on **Linux**:
* Open a Linux console.
* Change directory (`cd`) to the Contrast installation directory.
* Execute the command `uninstall`.
* Follow the prompts to perform uninstallation.

## Some Files Will Remain

You'll delete the vast majority of files when performing an uninstallation. However, a few key files are left on the system.

>**Note:** The uninstaller won't delete the following files:
* The Contrast Home directory
* The Contrast DATA directory
* The Contrast LOGS directory
* The Contrast MYSQL directory

An Administrator can delete these files manually. 