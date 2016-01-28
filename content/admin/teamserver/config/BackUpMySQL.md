<!--
title: "Taking Back-Ups of TeamServer's MySQL Database"
description: "Instructions for using TeamServer's MySQL database backup tool."
-->

## Getting Started
TeamServer can be configured to automatically create a MySQL backup of the database on a regular, scheduled basis. During installation, EOP administrators are prompted whether they would like to take a database backup. They can define a time for the back-up and a location to store the back-up the database. Most customers, if not all, configure backups during installation. In the event of skipping over this step, TeamServer can be configured post-installation to schedule database backups. In addition, EOP administrators have the ability to run a packaged tool to backup the database.

## Using the Encrypted Properties Editor for Database Settings
The TeamServer database settings can be found in $CONTRAST_HOME/data/conf/database.properties. This file is encrypted by default and requires use of the [encrypted property editor](https://docs.contrastsecurity.com/admin_tsconfig.html#) to identify database settings. The example below shows that database backups are enabled, scheduled and have a specific location. These properties can be edited if any of these specific settings need to change.

```bash
contrast@TeamServer:~/contrast/bin$ ./edit-properties -o jdbc.port -e ../data/esapi/ -f ../data/conf/database.properties

database.bk.time                                  : 4:0:0
database.bk.enabled                               : true
database.bk.dir                                   : /mnt/backups/mysql/contrast
```

## Manually Taking Database Backups
Sometimes EOP administrators want to take fresh backups of their MySQL system. Often this happens prior to an upgrade to capture any data created or changed since the last scheduled backup. In order to take backups, the user executing the script must have permission to run the script. This is typically the owner of the installation of contrast, root or a Windows Administrator account. In addition, TeamServer must be up and running, specificall MySQL needs to be available. Finally, the database backup location ```database.bk.dir``` must be configured.

The tool to take a back-up is an interactive script. It must be run from a command line for both Linux and Windows.

#### To Run on Linux
````
$CONTRAST_HOME/bin/backup_db.sh
````

#### To Run on Windows
````
$CONTRAST_HOME\bin\backup_db.cmd
````

## Restoring Database Backups
In the event of the need to restore a database backup we have provided steps below to perform this operation. Database restoration should be performed by a MySQL Database Administrator. Follow the steps below to restore a reliable MySQL backup.

* Using the [encrypted property editor](https://docs.contrastsecurity.com/admin_tsconfig.html#), identify the MySQL database settings.
* Shutdown the TeamServer gracefully
* Startup MySQL individually by using the MySQL service packaged with the TeamServer
** On Linux: ```./mysql -h <jdbc.host> -P <jdbc.port> -u <jdbc.user> -p <jdbc.schema>```
** On Windows: ```mysql -h <jdbc.host> -P <jdbc.port> -u <jdbc.user> -p <jdbc.schema>```
* Drop the contrast database via ```drop database <jdbc.schema>;```
* Create the contrast database via ```create database <jdbc.schema>;```
* Grant permissions to the contrast user via ```GRANT ALL PRIVILEGES ON *.* to 'contrast'@'%';```
* Exit from MySQL
* Restore the MySQL backup
** Restore on Linux: ```./mysql -h <jdbc.host> -P <jdbc.port> -u <jdbc.user> -p <jdbc.schema> < <backup_location>/<backup_filename>```
** Restore on Windows: ```mysql -h <jdbc.host> -P <jdbc.port> -u <jdbc.user> -p <jdbc.schema> < <backup_location>/<backup_filename>```
* Shutdown MySQL
* Restart TeamServer and MySQL together fully restored
