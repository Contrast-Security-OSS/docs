<!--
title: "Troubleshooting the Installation"
description: "Common issues encountered by customers while installing the TeamServer EOP."
-->

## Corrupt Binary
````
gunzip: sfx_archive.tar.gz: not in gzip format
````

If you see this error, something went wrong during the transfer process of the installer. The easiest way to confirm this is to calculate the MD5 of the installer you are attempting to run and compare it to the MD5 hash listed on our Hub site. Most likely this occurred if the file was transferred in ASCII mode instead of binary mode, especially if SCP/SFTP was used. You should transfer the file again, this time explicitly specifying binary mode. 

## Failed Migration Due to Access Restrictions

````
Error on rename ... (Errcode: 13)
````

If you see this error, this means a migration has failed during TeamServer startup. Most likely, this is due to the current user having insufficient privileges to modify files in the directory in which Contrast was installed. You will have to uninstall Contrast and delete the remaining data files and then either elevate the user's permissions in the installation directory or choose a new directory where the user has full privileges. While it is uncommon, Administrator users can encounter this problem if there are extra file restrictions put in place by your organization.

## Superadmin Configuration Unaccessible in 3.1.3
There is a known bug in Contrast EOP 3.1.3 which causes the Superadmin Configuration UI to become inaccessible. To resolve this issue, you must create an empty file in the filesystem at ***$CONTRAST_HOME/data/conf/support.properties***. 

## Multiple contrast-server jars
There is a known issue in contrast 3.1.1 - 3.1.3 where the contrast-server binary is not replaced during the upgrade process. This could cause classloading issues in the server which cause functionality to become unpredictable. To resolve this issue, simply remove the older jars from the ***$CONTRAST_HOME/lib*** directory that start with contrast-server-3.1. There should only be a single contrast-server version in that directory. After removing the files, a restart will be necessary.

## Database Backup gives error "ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/tmp/mysql.sock' (2)"
In some fresh vanilla installations of Redhat or CentOS it is possible that the server will have an unresolvable hostname. During the installation process we detect the hostname for the server to set configuration parameters for how to connect to the database (coincidentally, this is also the logic that builds the TeamServer URL); for example a default CentOS 5.6 installation will set its hostname to ```centos.localdomain```, however a corresponding entry is not added to the ***/etc/hosts*** file. If the hostname is unresolvable the system will default to ```localhost``` which works for other areas of the system, however the automated backup uses the **mysqldump** tool which associates the ```localhost``` hostname with a file socket connection as opposed to a network socket connection. To resolve this error you need to set the database hostname to either a resolvable hostname or the IP address assigned to the server. This can be done using the encrypted properties editor tool that ships with the product.

````
$ cd $CONTRAST_HOME 
$ bin/edit-properties -e data/esapi -f data/conf/database.properties 
````

Once you are in the properties editor you can type the name of the property that you would like to change - in this case we want to update the value of the ```jdbc.host``` to the new hostname or IP address assigned to the server. Once you have updated this value hit **Q** to quit out of the tool, and select **Y** to save, then enter a comment for your change. You can verify the backup functions by running the ***$CONTRAST_HOME/bin/db-backup.sh*** script manually (as the *contrast_service* user, or whatever user you designated during installation).

````
$ cd $CONTRAST_HOME
sudo -u contrast_service /opt/Contrast/bin/backup-db.sh
Reading Database Configuration
Ensuring Database Connectivity: Up
Backing up Schema: contrast to /opt/Contrast/data/backups/db/contrast.20150223.sql
````

## Service Won't Start Due to Missing sudo/su
It is possible that on some flavors of linux the ```sudo``` and/or ```su``` commands will not be available; for instance on the default installation of Amazon Linux within AWS the default is to use the ```runuser``` command, which is not currently an option during the installation. While we make our best effort to support as many environments as possible with our Enterprise On-Premises offering, we unfortunately can't predict every possible scenario and test it internally. However, the good news is that this is a simple issue to resolve! You can resolve this issue by either installing sudo or su on your target server, or if that is not an option; you can edit the ***$CONTRAST_HOME/bin/contrast-server.initd*** script directly and update it to reflect your environment. 

## Can't Find Your Problem?
Didn't find what you were looking for? Please submit a ticket to [Support](https://support.contrastsecurity.com/anonymous_requests/new) with a description of the issue and the steps that caused it to occur plus any logs or screenshots you can and we will address your issue as soon as possible. 
