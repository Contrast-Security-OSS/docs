<!--
title: "Configuring Logging with TeamServer"
description: "Guidelines for configuring logging within TeamServer using the log4j2.xml property file"
-->

## Getting Started
Contrast uses a universally known logging service from the Apache Foundation called [log4j](http://logging.apache.org/log4j/2.x/).

## Where Does Contrast TeamServer Store Logs
The TeamServer logs can be found under the $CONTRAST_HOME/logs directory. The table below provides a comprehensive overview of the primary log files that can be found in the TeamServer.

| Log File Name       | Description of the Log                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Audit.log           | The audit log captures information about user sessions such as:  * Logging in and out of the application. * Impersonating another user. * Switching organizations. * Accessing the administrator portal. * Changes to the configuration and settings of the TeamServer by a SuperAdmin account. * User account service issues (locked accounts, password changed, etc.) * Deleting traces * Changes to a license or an expired license notification. * API Key changes. |
| Contrast.log        | The contrast.log is the equivalent of Tomcat's stdout or console log. Most if not all key events happening inside of TeamServer will be logged to this file for informational or debugging purposes. This includes information about applications, servers, libraries, traces and users. This log file will also store Java stack traces for debugging purposes when a server exception takes place.                                                                    |
| Migration.log       | The migration.log contains a summary of all database migrations that occur against the TeamServer between updates. The log file will reference the version of the TeamServer, as well as the migration script that ran. The status of the script will also be provided in the log message.                                                                                                                                                                              |
| Security-events.log | The security-events.log was formally the esapi.log. This log file is used for capturing key events from the TeamServer such as the loading of a given property file.                                                                                                                                                                                                                                                                                                    |

## Configuring Logging Settings
A very basic log setting can be found within the TeamServer user interface as the SuperAdmin by navigating the System Settings and then choosing Log Level. From this location in the user interface, an EOP administrator of TeamServer can change the logging from informational to any of the following options: FATAL, ERROR, WARNING, INFO, DEBUG and TRACE. A detailed review of log settings for log4j can be found [here](http://logging.apache.org/log4j/2.x/manual/customloglevels.html).

### Changing the Log4J2.xml File
Packaged within the TeamServer is a configurable xml file used to host our log4j configuration. This file can be found under $CONTRAST_HOME/data/conf. The sections below describe the file components and how to make use of the file for increased or decreased logging purposes.

#### About Changing the File
Contrast recommends that customers only make changes to the log4j2.xml file under the direction and support of a Contrast engineer. If a customer does change the file, it's important to syntatically review the file to ensure formatting is correct. In addition, customers should be aware that a server restart is not required for changes to this file when changes are entered correctly. The first parameter of the file seen below is a monitor interval that refreshes the settings based on the variable defined. By default TeamServer will check every 60 seconds and refresh the logging configuration.

````
<Configuration monitorInterval="60">
````

#### Understanding the Appenders Section


#### Understanding the Logger Section

