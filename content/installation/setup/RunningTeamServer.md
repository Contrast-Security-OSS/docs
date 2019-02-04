<!--
title: "Running TeamServer"
description: "Instructions for starting/stopping TeamServer"
tags: "installation setup TeamServer EOP service windows initd service"
-->

## The Contrast Service

### Running on Windows
In Windows, Contrast is installed as a system service. You can start and stop the service through the Windows Service Manager application.

### Running on Linux

#### Root installation
The Contrast daemon is registered as an ```init.d``` daemon. Starting and stopping the server should be done by invoking:

````
/etc/init.d/contrast-server <start|stop|restart|status>
````
or
````
service contrast-server <start|stop|restart|status>
````
Some versions of Linux such as Red Hat Enterprise Linux (RHEL) use ```systemd``` by default. You find can instructions on setting up a systemd service [here](https://support.contrastsecurity.com/hc/en-us/articles/360020852712-How-to-create-a-systemd-service-for-starting-stopping-the-Contrast-server)

#### Non-root installation
To start the Contrast server independently of the parent shell, execute:

````
nohup /path/to/installation/contrast/bin/contrast-server start >/dev/null 2>1
````

## Update Java Options
If you need to change the Java Virtual Machine (JVM) settings for your Contrast server instance, you can open the file *$CONTRAST_HOME/bin/contrast-server.vmoptions*. This file contains standard JVM parameters that are passed to the underlying virtual machine when the Contrast server process starts. For example, if you want to update the server to allow more heap memory usage, you could update the *-Xmx* setting to a different value.

## Contrast Logs
Contrast has several logs that each store different information. The log files and their purposes are shown in the table below:

| Log File            | Description                                                 |
|---------------------|-------------------------------------------------------------|
| audit.log           | Logs audit events such as successful/failed login attempts |
| console.log         | Default application event log                              |
| contrast-error.log  | Logs messages printed to ```stderr```                          |
| contrast-stdout.log | Logs messages printed to ```stdout```                            |
| contrast.log        | Primary application log                                    |
| esapi.log           | Captures security events                                   |
| windward.log        | Captures reporting server events                           |


## Contrast Tools
Contrast comes with various utilities that you can run from the command line to assist with performing maintenance, managing encrypted properties files and performing backups of the database.

### Encrypted properties editor
You may need to access the values of encrypted properties files outside of the application interface, or automate the updating of some property such as automated bind password rotation. Using the encrypted properties editor is a powerful way to perform these types of operations.

The encrypted properties editor binary is located at *$CONTRAST_HOME/bin/edit-properties*. As an interactive property editor, invoking it is as simple as providing the path to your ESAPI configuration and the file that needs work.

````
$CONTRAST_HOME/bin/edit-properties -e $CONTRAST_HOME/data/esapi -f $CONTRAST_HOME/data/conf/ad.properties
````

This opens an interactive application that allows you to update the values of properties. You can also retrieve the unencrypted value of a property - like a shell script to back up the database - by passing another parameter to the tool:

````
$CONTRAST_HOME/bin/edit-properties \
   -e $CONTRAST_HOME/data/esapi \
   -f $CONTRAST_HOME/data/conf/database.properties \
   -p jdbc.username \
   -o
````

Update the value of a property in the file by passing a different set of arguments:

````
$CONTRAST_HOME/bin/edit-properties \
   -e $CONTRAST_HOME/data/esapi \
   -f $CONTRAST_HOME/data/conf/database.properties \
   -p jdbc.username \
   -v joe.blow \
   -c "Updating JDBC Password"
````

Get help by executing *edit-properties* with no arguments:

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


