<!--
title: "Troubleshooting Installation"
description: "Common issues encountered by customers while installing Contrast EOP."
tags: "troubleshoot setup FAQ EOP installation migration flyway"
-->

## Corrupt Binary

````
gunzip: sfx_archive.tar.gz: not in gzip format
````

If you see this error, something went wrong during the transfer process of the installer. The easiest way to confirm this is to calculate the MD5 of the installer you're attempting to run, and compare it to the MD5 hash listed on our Hub site. Most likely this occurred if the file was transferred in ASCII mode instead of binary mode, particularly if SCP/SFTP was used. 

### Solution

To resolve the issue, transfer the file again, and explicitly specifying binary mode. 

## Failed Migration Due to Access Restrictions

````
Error on rename ... (Errcode: 13)
````

If you see this error, a migration failed during Contrast startup. The failure was most likely caused by the current user having insufficient privileges to modify files in the directory in which Contrast was installed. 

### Solution

To resolve the issue, uninstall Contrast and delete the remaining data files. You can then either elevate the user's permissions in the installation directory or choose a new directory where the user has full privileges. While it's uncommon, Administrator users can encounter this problem if there are extra file restrictions put in place by your organization.

## Superadmin Configuration Unaccessible in 3.1.3

There is a known bug in Contrast EOP 3.1.3 that makes the Superadmin configuration interface inaccessible. 

### Solution

To resolve this issue, you must create an empty file in the filesystem at *$CONTRAST_HOME/data/conf/support.properties*. 

## Multiple contrast-server JARs

There is a known issue in contrast 3.1.1 - 3.1.3 where the *contrast-server* binary isn't replaced during the upgrade process. This could cause classloading issues in the server which cause functionality to become unpredictable. 

### Solution

To resolve this issue, remove the older JARs from the *$CONTRAST_HOME/lib* directory that start with *contrast-server-3.1*. There should only be a single *contrast-server* version in that directory. After removing the files, restart Contrast.

## Database Backup Gives Error 

```
ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/tmp/mysql.sock' (2)
```

In some fresh vanilla installations of Redhat or CentOS, the server could have an unresolvable hostname. During the installation process, Contrast detects the hostname for the server to set configuration parameters for how to connect to the database. 

>** Example:** A default CentOS 5.6 installation sets its hostname to `centos.localdomain`, but a corresponding entry isn't added to the */etc/hosts* file. 

If the hostname is unresolvable, the system defaults to `localhost`, which works for other areas of the system. However, the automated backup uses the *mysqldump* tool that associates the `localhost` hostname with a file socket connection instead of a network socket connection. 

### Solution

To resolve this error, set the database hostname to either a resolvable hostname or the IP address assigned to the server. This can be done using the encrypted properties editor tool that ships with the product.

````
$ cd $CONTRAST_HOME 
$ bin/edit-properties -e data/esapi -f data/conf/database.properties 
````

Once you're in the properties editor, type the name of the property that you would like to change. In this case, you want to update the value of the `jdbc.host` to the new hostname or IP address assigned to the server. Once you update this value, hit **Q** to quit out of the tool, select **Y** to save, then enter a comment for your change. You can verify the backup functions by running the ***$CONTRAST_HOME/bin/db-backup.sh*** script manually (as the *contrast_service* user, or whatever user you designated during installation).

````
$ cd $CONTRAST_HOME
sudo -u contrast_service /opt/Contrast/bin/backup-db.sh
Reading Database Configuration
Ensuring Database Connectivity: Up
Backing up Schema: contrast to /opt/Contrast/data/backups/db/contrast.20150223.sql
````

## Service Won't Start Due to Missing sudo/su

The *sudo* and/or *su* commands might not be available on some flavors of Linux. However, this is a simple issue to resolve.

For example, the `runuser` command is the default on the default installation of Amazon Linux within AWS, but it isn't an option during the installation. While Contrast makes an  effort to support as many environments as possible with our Enterprise On-Premises (EOP) product, it's impossible to predict every potential scenario and test it internally. 

### Solution

You can resolve this issue by either installing *sudo* or *su* on your target server. If that's not an option, you can edit the *$CONTRAST_HOME/bin/contrast-server.initd* script directly and update it to reflect your environment. 

## Can't Find Your Problem?

If you have an issue that these answers don't solve, submit a ticket to the [Support team](https://support.contrastsecurity.com/anonymous_requests/new) with a description of the issue, the steps that caused it to occur, and any logs or screenshots that you have. The team will address your issue as soon as possible. 


