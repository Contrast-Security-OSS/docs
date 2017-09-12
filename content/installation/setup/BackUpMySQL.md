<!--
title: "Taking Backups of Contrast's MySQL Database"
description: "Instructions for using Contrast's MySQL database backup tool."
tags: "EOP MySQL administration backup database ESAPI"
-->

## Get Started
Contrast can be configured to automatically create a MySQL backup of the database on a regular, scheduled basis. During installation, EOP administrators are prompted as to whether or not they would like to make a backup of the database and if so, they can define a time as well as a location to store it. Most customers, if not all, configure backups during installation. In the event that the administrator decides to skip over this step, Contrast can be configured post-installation to schedule database backups. In addition, EOP administrators have the ability to run a packaged tool to back up the database.

## Using The Encrypted Properties Editor For Database Settings
The Contrast database settings can be found in *$CONTRAST_HOME/data/conf/database.properties*. This file is encrypted by default and requires use of the [encrypted property editor](installation-setupconfig.html#encrypt) to identify database settings. The example below shows that database backups are enabled, scheduled and have a specific location. These properties can be edited if any specific settings need to change.

```bash
contrast@TeamServer:~/contrast/bin$ ./edit-properties -e ../data/esapi/ -f ../data/conf/database.properties

database.bk.time                                  : 4:0:0
database.bk.enabled                               : true
database.bk.dir                                   : /mnt/backups/mysql/contrast
```

## Manually Taking Database Backups
Sometimes EOP administrators want to take fresh backups of their MySQL system. Often this happens prior to an upgrade to capture any data created or changed since the last scheduled backup. In order to take backups, the user executing the script must have permission to run the script. This is typically the owner of the installation for a Contrast, Root or a Windows Administrator account. In addition, Contrast must be up and running - specifically, MySQL needs to be available. Finally, the database backup location ```database.bk.dir``` must be configured.

The tool to take a backup is an interactive script. It must be run from a command line for both Linux and Windows.

To run on **Linux**:

````
$CONTRAST_HOME/bin/backup_db.sh
````

To run on **Windows**:

````
$CONTRAST_HOME\bin\backup_db.cmd
````


## Restore Database Backups
In the event of needing to restore a database backup, we have provided the necessary steps to reliably perform this operation below. Database restoration should be performed by a MySQL Database Administrator.

* Using the [encrypted property editor](installation-setupconfig.html#encrypt), identify the MySQL database settings
* Shut down the TeamServer gracefully
* Start up MySQL individually by using the MySQL service packaged with the TeamServer <br/>
On Linux: ```./mysql -h <jdbc.host> -P <jdbc.port> -u <jdbc.user> -p <jdbc.schema>```<br/>
On Windows: ```mysql -h <jdbc.host> -P <jdbc.port> -u <jdbc.user> -p <jdbc.schema>```
* Drop the Contrast database via ```drop database <jdbc.schema>;```
* Create the Contrast database via ```create database <jdbc.schema>;```
* Grant permissions to the Contrast user via ```GRANT ALL PRIVILEGES ON *.* to 'contrast'@'%';```
* Exit from MySQL
* Restore the MySQL backup
	* Restore on Linux: ```./mysql -h <jdbc.host> -P <jdbc.port> -u <jdbc.user> -p <jdbc.schema> < <backup_location>/<backup_filename>```
	* Restore on Windows: ```mysql -h <jdbc.host> -P <jdbc.port> -u <jdbc.user> -p <jdbc.schema> < <backup_location>/<backup_filename>```
* Shut down MySQL
* Restart TeamServer and MySQL together, fully restored

## Disable Automated Backups

Automated backups are scheduled through `crontab` on Linux and `schtasks` on Windows. To disable automated
backups, follow the instructions for your installation.

### Linux

To disable backups on Linux, complete the following steps: 

* Switch to the user which was used to install Contrast and run `crontab -l`. This lists the job, and should result in `0 2 * * * /usr/local/contrast/bin/backup-db.sh`.
* Run `crontab -e` to delete a single backup.
* Run `crontab -r` to delete all backup(s). 

> **Note:** The `-r` option deletes everything, so be careful when using it. The `-e` option allows edits with Vim.

### Windows

To disable backups on Windows, use Task Scheduler to disable or delete `ContrastBackup`.


