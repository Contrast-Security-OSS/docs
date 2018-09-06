<!--
title: "Upgrade the Contrast Application"
description: "Instructions for upgrading the Contrast application for EOP."
tags: "Admin EOP maintenance upgrade install installation backup"
-->

Contrast releases patches and upgrades as part of the embedded Enterprise-on-Premises (EOP) installer file, which customers can download from the [Contrast Hub](https://hub.contrastsecurity.com). The installer intelligently determines that a previous version of Contrast exists on a given system. Customers can choose to run the updater portion of the process, or run an installation in a separate location. If a previous installation exists, customers must configure a parallel installation to run on separate ports.

## Before You Start

The installer, or "updater", attempts to create a database backup as part of the upgrade process. Customers can choose to create their own backups by following the instructions in the detailed article to [Create a MySQL Backup](installation-setup.html#setup-mysql). Contrast strongly recommends that you create a backup, and that you store the backup file on a separate file system or drive to avoid any issues with restoration. Contrast also recommends that you consider backing up **all** configuration files located at *$CONTRAST_HOME/data/conf*.

You should also consider using Contrast's System Announcement feature to inform end-users that their system is being upgraded during a particular time. To start sending out announcements, log into the Contrast UI as a SuperAdmin user, and go to the **user menu > System Settings > System Messages tab**. 

## Perform the Upgrade 

The Contrast application should be running when you start the installation process. Agents will continue to send trace and library messages during this time. When the application initiates a shutdown on its own, the agents defer sending messages until the application can be reached.

The upgrade process is nearly identical to the original process to [install the Contrast application](installation-setupinstall.html#install); however, the administrator performing the upgrade is asked whether to update an existing installation or perform a new installation. You should choose to **update an existing installation**. 

The upgrade should perform a database backup initially. Depending on the size of the EOP database, this process can take a few seconds to a few minutes. During this operation, the application should be accessible to agents and end users. 

The update then deploys a new file system under the installation directory. This primarily consists of deploying the *Contrast.war* file directory to the *$CONTRAST_HOME/webapps* directory. The application won't be accessible while the file system is updated.

Once a successful file system update is complete, the application starts up. While the application is starting up, administrators can follow along in the [log files](installation-setupconfig.html#log) - *migration.log* and *contrast.log*, specifically. Log entries are written for both file system and database updates in a sequential manner.

> **Note:** Configuration files and database components aren't updated until the initial startup step.

## Verify the Upgrade

The first indicator of a successful update is when the Contrast application is accessible by either logging into the UI or an API request. The version number is listed in the UI under the **user menu > Settings**. 

Contrast recommends that you review the contents of the *migration.log* immediately after the upgrade. This log will reveal any issues experienced as part of the update process.

> **Note:** In the minutes after the upgrade, deployed agents might attempt to update to the latest agent version. These agents won't reflect their own update until each has restarted and established contact with the Contrast application.


