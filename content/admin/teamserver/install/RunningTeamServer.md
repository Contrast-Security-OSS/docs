<!--
title: "Running TeamServer"
description: "Instructions for starting/stopping TeamServer"
-->

## The TeamServer Service
 
### Running on Windows
In windows, TeamServer is installed as a system service. You can start/stop the service through the Windows Service Manager application.

### Running on Linux
The TeamServer daemon is registered as an ```init.d``` daemon. Starting and stopping the server should be done via invoking:

````
/etc/init.d/contrast-server <start|stop|restart|status>
````
or 
````
service contrast-server <start|stop|restart|status>
````

## Updating Java Options
If you are instructed to, or would like to change the JVM settings for your Contrast Server instance, you can open the file ***$CONTRAST_HOME/bin/contrast-server.vmoptions***

This file contains standard JVM parameters that are passed to the underlying virtual machine when the Contrast Server process starts. For instance, if you would like to update the server to allow more heap memory usage, you could update the -Xmx setting to a different value.

## Contrast Logs
Contrast has several logs, and depending on what information you are looking for will determine which log you will want to look in. The different logs, and their purpose is captured in the table below:

| Log File            | Description                                                 |
|---------------------|-------------------------------------------------------------|
| audit.log           | Logs audit events such as successful/failed login attempts. |
| console.log         | Default application event log.                              |
| contrast-error.log  | Logs messages printed to stderr.                            |
| contrast-stdout.log | Logs messages printed to stdout.                            |
| contrast.log        | Primary application log.                                    |
| esapi.log           | Captures security events.                                   |
| windward.log        | Captures reporting server events.                           |

## Contrast Tools
Contrast comes with various utilities that can be run from the command-line to assist with performing maintenance, managing encrypted properties files, and performing backups of the database.

##  The Encrypted Properties Editor
Occasionally, you may find it necessary to access the values of the encrypted properties files outside of the application configuration UI, or perhaps to automate the updating of some property (automated bind password rotation for example). Using the encrypted properties editor is a powerful way to perform these types of operations.

The encrypted properties editor binary is located at ***$CONTRAST_HOME/bin/edit-properties***. In it's most basic form, an interactive property editor, invoking it is as simple as providing the path to your ESAPI configuration and the file you would like to work on.

````
$CONTRAST_HOME/bin/edit-properties -e $CONTRAST_HOME/data/esapi -f $CONTRAST_HOME/data/conf/ad.properties
````

This will open an interactive application that will allow you to update the values of properties.
You can also retrieve the unencrypted value of a property (say for a shell script to backup the database) by passing another parameter to the tool.

````
$CONTRAST_HOME/bin/edit-properties \
   -e $CONTRAST_HOME/data/esapi \
   -f $CONTRAST_HOME/data/conf/database.properties \ 
   -p jdbc.username \
   -o
````

And you can even update the value of a property in the file by passing a different set of arguments:

````
$CONTRAST_HOME/bin/edit-properties \
   -e $CONTRAST_HOME/data/esapi \
   -f $CONTRAST_HOME/data/conf/database.properties \ 
   -p jdbc.username \
   -v joe.blow \
   -c "Updating JDBC Password"
````
You can get help by executing edit-properties with no arguments:
````
$ bin/edit-properties
usage: property-editor
 -c,--comment <text>      The comment for the top of the file
 -e,--esapi <path>        The path to the ESAPI.properties file
 -f,--targetFile <file>   The properties file to edit
 -o,--print-value         Print out the value of the property and exit
 -p,--property <name>     The name of the property to set
 -v,--value <val>         The value of the property
````

## Run a Manual Backup of the Database
Although Contrast's Installer allows you to create a scheduled daily backup of your database, from time to time you may find yourself needing to perform a manual backup of the database. Luckily, accomplishing this task is extremely simple!

**NOTE: DATABASE BACKUP WILL ONLY WORK WHEN THE SERVER IS RUNNING**

### Linux
````
$CONTRAST_HOME/bin/backup_db.sh
````

### Windows
````
$CONTRAST_HOME\bin\backup_db.cmd
````

## The Database Anonymizer
Under certain circumstances Contrast Support personnel may request a copy of your database to troubleshoot issues, or you may find yourself wanting to present information from your database in an anonymized format. In these cases, you may find the database anonymizer an invaluable tool. 

Using the tool is simple, simply pass the required information into the ***$CONTRAST_HOME/bin/db-anonymizer***.

**NOTE: DO NOT RUN THIS TOOL AGAINST YOUR PRODUCTION DATABASE, IT MODIFIES THE DATA CONTAINED IN THAT DATABASE. YOU CAN CREATE A BACKUP OF YOUR DATABASE AND RESTORE INTO A NEW TEMPORARY DATABASE IN YOUR OWN MYSQL 5.6 SERVER TO ANONYMIZE.**

````
$ bin/db-anonymizer -db contrast_anon -e data/esapi -p secretpassword -port 3306 -url localhost -u contrast
````


