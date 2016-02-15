<!--
title: "Upgrading EOP TeamServer"
description: "Instructions for updating an EOP TeamServer with a new version."
-->

## About Upgrading an EOP TeamServer
Contrast releases patches and upgrades as part of the embeded EOP installer file which customers can download from the [Contrast Hub](https://hub.contrastsecurity.com). The installer can intelligently determine that a previous version of Contrast exists on a given system. Customers can choose to run the updater portion of the process. Alternatively, they can choose to run an installation in a separate location. If a previous installation exists, customers will have to configure a parallel installation to run on separate ports.

## Before Running the Updater/Installer
The updater/installer will attempt to take a database backup as part of the process of an upgrade. Customers can choose to take their own backups by following this detailed [article](https://docs.contrastsecurity.com/admin_tsconfig.html#backup). We strongly recommend that customers do take a backup. We recommend that the backup file be stored on a separate file system or drive to avoid any issues with restoration. We also recommend that customers consider backing all configuration files located at $CONTRAST_HOME/data/conf

Customers should consider using the System Announcement feature to inform end-users that their system is being upgraded during a particular time. This feature can be found under the System Settings as a SuperAdmin user. 

## Performing the Upgrade Operation
TeamServer should be running when starting the updater/installation process. Agents will continue to send trace and library messages to TeamServer during this time. When the TeamServer initiates a shutdown on its own, the agents will defer sending messages until the TeamServer can be reached.

The upgrade process is identical to the [installation process](https://docs.contrastsecurity.com/admin_tsinstall.html#install), however the administrator performing the upgrade will be asked whether to update an existing installation or perform a new installation. Customers should choose to update an existing installation. 

The upgrade should perform a database backup initially. Depending on the size of the EOP database, this process can run over the course of a seconds to a few minutes. During this operation, the TeamServer should be accessible to agents and end users. 

Next the update will deploy a new file system under the installation directory. This will primarily consist of deploying the Contrast.war file directory to the $CONTRAST_HOME/webapps directory. TeamServer will not be accessible when the file system is updated.

Assuming the file system update is successful, the TeamServer will startup. What is important to note is that the actual update of configuration files and database components does not happen until the first startup of TeamServer. While TeamServer is starting up, administrators can follow along in the [log files](https://docs.contrastsecurity.com/admin_tsconfig.html#log), specifically the migration.log and the contrast.log files. Log entries are written for both file system and database updates in a sequential manner.

## How to Verify the Upgrade
The first indicator that an update has been successful is that the TeamServer is accessible from either the UI or an API request. The version number will be listed in the User Interface in the settings menu located in the drop-down menu below the user name. 

We also recommend that customers review the contents of the migration.log immediately after the upgrade. This log will reveal any issues experienced as part of the update process.

It's important to note that in the minutes after a TeamServer upgrade, deployed agents may attempt to update to the latest agent version. These agents will not reflect their own update until each agent has restarted and established contact with TeamServer.


