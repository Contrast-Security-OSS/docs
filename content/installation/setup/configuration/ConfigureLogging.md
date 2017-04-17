<!--
title: "Configuring Logging with TeamServer"
description: "Guidelines for configuring logging within TeamServer using the log4j2.xml property file"
tags: "installation setup configuration EOP logging log4j"
-->

## Getting Started
Contrast uses a universally accepted logging framework called [log4j](http://logging.apache.org/log4j/2.x/). This document is designed to help TeamServer administrators become familiar with configuring logging thresholds and controlling log file destinations. It will also serve as an overview of each log available for review within the TeamServer.

## Where Does Contrast TeamServer Store Logs?
The TeamServer logs can be found under the *$CONTRAST_HOME/logs* directory. The table below provides a comprehensive overview of the primary log files that can be found in the TeamServer.

| Log File Name       | Description of the Log                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Audit.log           | The audit log captures information about user sessions such as:  <ul><li>Logging in and out of the application </li><li>Impersonating another user</li><li>Switching organizations</li><li>Accessing the administrator portal</li><li>Changes to the configuration and settings of the TeamServer by a SuperAdmin account</li><li>User account service issues (locked accounts, password changed, etc.)</li><li> Deleting traces </li><li>Changes to a license or an expired license notification</li><li>API Key changes</li>|
| Contrast.log        | The *contrast.log* is the equivalent of Tomcat's *stdout* or *console log*. Most, if not all, key events happening inside of TeamServer will be logged to this file for informational or debugging purposes. This includes information about applications, servers, libraries, traces and users. This log file will also store Java stack traces for debugging purposes when a server exception takes place.                                                                    |
| Migration.log       | The *migration.log* contains a summary of all database migrations that occur against the TeamServer between updates. The log file will reference the version of the TeamServer, as well as the migration script that ran. The status of the script will also be provided in the log message.                                                                                                                                                                              |
| Security-events.log | The *security-events.log* was formally the *esapi.log*. This log file is used for capturing key events from the TeamServer such as the loading of a given property file.                                                                                                                                                                                                                                                                                                    |
<br/>
## Configuring Logging Settings
A very basic log setting can be found within the SuperAdmin user interface by navigating to **System Settings** and then choosing **Log Level**. From this location in the user interface, an EOP administrator of TeamServer can change the logging from informational to any of the following options: ```FATAL```, ```ERROR```, ```WARNING```, ```INFO```, ```DEBUG``` and ```TRACE```. A detailed review of log settings for **log4j** can be found [here](http://logging.apache.org/log4j/2.x/manual/customloglevels.html).

### Changing The "Log4J2.xml" File
Packaged within the TeamServer is a configurable xml file used to host our log4j configuration. This file can be found under *$CONTRAST_HOME/data/conf*. The sections below describe the file components and how to make use of the file for increased or decreased logging purposes.

#### About Changing The File
Contrast recommends that customers only make changes to the *log4j2.xml* file under the direction and support of a Contrast engineer. If a customer does change the file, it's important to syntactically review the file to ensure formatting is correct. In addition, customers should be aware that a server restart is not required if changes are entered correctly. The first parameter of the file seen below is a monitor interval that refreshes the settings based on the variable defined. By default, TeamServer will check every 60 seconds and refresh the logging configuration.

````
<Configuration monitorInterval="60">
````
<br/>
#### Understanding The Appenders Section
Appenders are responsible for delivering *LogEvents* to their destination. Every Appender must implement the Appender interface. Most Appenders will extend *AbstractAppender*, which adds Lifecycle and Filterable support. **Lifecycle** allows components to finish initialization after configuration has completed, and to perform cleanup during shutdown. **Filterable** allows the component to have filters attached to it, which are evaluated during event processing.

Appenders are primarily responsible for writing the event data to the target destination. In most cases they delegate responsibility for formatting the event to a layout. Some appenders wrap other appenders so that they can modify the *LogEvent*, handle a failure in an Appender, route the event to a subordinate Appender based on advanced Filter criteria, or provide similar functionality that does not directly format the event for viewing.

Contrast predominantly makes use of the [Rolling File Appender](https://logging.apache.org/log4j/2.x/manual/appenders.html). The *RollingFileAppender* is an *OutputStreamAppender* that writes to the file named in the *fileName* parameter and rolls the file over according to the *TriggeringPolicy* and the *RolloverPolicy*. 

In the example below, we show the appenders for our *contrast.log*. This example is a daily appender which has a 1GB max file size policy and no more than 15 files of rollover. This appender will also compress the file and rename it daily.

````
       <RollingFile name="DAILY" fileName="${contrast.logs.dir}/logs/contrast.log"
                     filePattern="${contrast.logs.dir}/logs/contrast.%d.%i.log.gz" immediateFlush="true">
            <PatternLayout>
                <Pattern>%d{ddMMyy HH.mm.ss,SSS} {%X{session.id}} {%X{user.name}} {%X{remote.addr}} %-5p (%F:%L) %m%n
                </Pattern>
            </PatternLayout>
            <Policies>
                <TimeBasedTriggeringPolicy/>
                <SizeBasedTriggeringPolicy size="1 GB"/>
            </Policies>
            <DefaultRolloverStrategy max="15"/>
        </RollingFile>
````

<br/>
#### Understanding The Logger Section
The logger section of the file defines which Java packages should log to a specific appender and at a given log level. Below is a summary of each level as well as why an individual administrator may set it. 

| Log Level | Description                                                                                                                                                      |
|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Debug     | Helps the developer debug the application. Level of the message logged will be focused on providing support to an application developer.                  |
| Info      | Gives the *progress* and *chosen state* information. This level will generally be useful for the end user and is one level higher than ```DEBUG```.   |
| Warn      | Gives a warning about an unexpected event to the user. The messages coming out of this level may not halt the progress of the system.           |
| Error     | Gives information about a serious error which needs to be addressed and may result in an unstable state. This level is one level higher than ```WARN```. |
| Trace     | Gives more detailed information than the ```DEBUG``` level and sits at the top of the hierarchy.                                                             |
