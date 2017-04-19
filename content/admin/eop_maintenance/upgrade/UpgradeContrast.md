<!--
title: "Upgrading EOP TeamServer"
description: "Instructions for updating an EOP TeamServer with a new version."
tags: "Admin EOP maintenance upgrade install installation backup"
-->

## About Upgrading An EOP TeamServer
Contrast releases patches and upgrades as part of the embedded EOP installer file which customers can download from the [Contrast Hub](https://hub.contrastsecurity.com). The installer will intelligently determine that a previous version of Contrast exists on a given system. Customers can choose to run the updater portion of the process or alternatively, run an installation in a separate location. If a previous installation exists, customers will have to configure a parallel installation to run on separate ports.

## Before Running The Updater/Installer
The updater/installer will attempt to create a database backup as part of the upgrade process. Customers can choose to create their own backups by following the instructions in [this detailed article](installation_setup.html#mysql). We strongly recommend that customers **do** create a backup, and that the backup file be stored on a separate file system or drive to avoid any issues with restoration. We also recommend that customers consider backing up **all** configuration files located at *$CONTRAST_HOME/data/conf*.

Customers should consider using the System Announcement feature to inform end-users that their system is being upgraded during a particular time. This feature can be found under **System Settings** as a SuperAdmin user. 

## Performing The Upgrade Operation
TeamServer should be running when starting the updater/installation process. Agents will continue to send trace and library messages during this time. When TeamServer initiates a shutdown on its own, the agents will defer sending messages until TeamServer can be reached.

The upgrade process is identical to the [installation process](installation_setupinstall.html#install); however, the administrator performing the upgrade will be asked whether to update an existing installation or perform a new installation. Customers should choose to update an existing installation. 

The upgrade should perform a database backup initially. Depending on the size of the EOP database, this process can take anywhere from a few seconds to a few minutes. During this operation, the TeamServer should be accessible to agents and end users. 

Next, the update will deploy a new file system under the installation directory. This will primarily consist of deploying the *Contrast.war* file directory to the *$CONTRAST_HOME/webapps* directory. TeamServer will not be accessible while the file system is updated.

Once a successful file system update is complete, TeamServer will start up. It is important to note that the actual update of configuration files and database components does not happen until this initial startup. While TeamServer is starting up, administrators can follow along in the [log files](installation_setupconfig.html#log), specifically *migration.log* and *contrast.log*. Log entries are written for both file system and database updates in a sequential manner.

## How To Verify The Upgrade
The first indicator of a successful update is when TeamServer is accessible from either the User Interface or an API request. The version number will be listed in the UI under **Settings**, located in the drop-down menu below the user name. 

We recommend that customers review the contents of the *migration.log* immediately after the upgrade. This log will reveal any issues experienced as part of the update process.

It's important to note that in the minutes after a TeamServer upgrade, deployed agents may attempt to update to the latest agent version. These agents will not reflect their own update until each has restarted and established contact with TeamServer.


