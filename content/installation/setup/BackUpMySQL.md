<!--
title: "Taking Backups of Contrast's MySQL Database"
description: "Instructions for using Contrast's MySQL database backup tool."
tags: "EOP MySQL administration backup database ESAPI"
-->

## Get Started

As an EOP administrator, you can configure Contrast to automatically create a MySQL backup of the database on a regularly scheduled basis. During installation, you're prompted that you can make a backup of the database; and, if you want to do so, you can define a time and location for storing it. Most customers configure backups during installation. However, if you decide to skip over this step, you can configure Contrast post-installation to schedule database backups. 

>**Note:** EOP administrators can also run a packaged tool to back up the database.

## Use the Encrypted Properties Editor
You can find Contrast database settings in *$CONTRAST_HOME/data/conf/database.properties*. This file is encrypted by default and requires use of the [encrypted property editor](installation-setupconfig.html#encrypt) to identify database settings. The example below shows that database backups are enabled, scheduled and have a specific location. You can edit these properties if any specific settings need to change.

```bash
contrast@TeamServer:~/contrast/bin$ ./edit-properties -e ../data/esapi/ -f ../data/conf/database.properties

database.bk.time                                  : 4:0:0
database.bk.enabled                               : true
database.bk.dir                                   : /mnt/backups/mysql/contrast
```

## Manual Database Backups
You may want to take fresh backups of your MySQL system prior to an upgrade to capture any data created or changed since the last scheduled backup. In order to take backups, the user executing the script must have permission to run the script. (This is typically the owner of the installation for a Contrast, Root or a Windows Administrator account.) Contrast must be up and running, and MySQL needs to be available. Finally, the database backup location `database.bk.dir` must be configured.

The tool to take a backup is an interactive script. You must run it from a command line for both Linux and Windows.

To run on **Linux**:

````
$CONTRAST_HOME/bin/backup_db.sh
````

To run on **Windows**:

````
$CONTRAST_HOME\bin\backup_db.cmd
````


## Restore Database Backups

If you need to restore a database backup, Contrast provides the necessary steps to reliably perform this operation. Database restoration should be performed by a MySQL Database Administrator.

* Using the [encrypted property editor](installation-setupconfig.html#encrypt), identify the MySQL database settings.
* Shut down Contrast.
* Start up MySQL individually using the MySQL service packaged with Contrast <br/>
* Connect to MySQL
	* On Linux: ```./mysql -h <jdbc.host> -P <jdbc.port> -u <jdbc.user> -p <jdbc.schema>```<br/>
	* On Windows: ```mysql -h <jdbc.host> -P <jdbc.port> -u <jdbc.user> -p <jdbc.schema>```
* Drop the Contrast database with ```drop database <jdbc.schema>;```.
* Create the Contrast database with ```create database <jdbc.schema>;```.
* Grant permissions to the Contrast user with ```GRANT ALL PRIVILEGES ON *.* to 'contrast'@'%';```.
* Exit from MySQL.
* Restore the MySQL backup.
	* Restore on Linux: `./mysql -h <jdbc.host> -P <jdbc.port> -u <jdbc.user> -p <jdbc.schema> < <backup_location>/<backup_filename>`
	* Restore on Windows: `mysql -h <jdbc.host> -P <jdbc.port> -u <jdbc.user> -p <jdbc.schema> < <backup_location>/<backup_filename>`
* Shut down MySQL.
* Restart the fully restored Contrast and MySQL together.

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


