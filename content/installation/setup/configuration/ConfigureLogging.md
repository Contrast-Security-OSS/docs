<!--
title: "Configuring Logging with TeamServer"
description: "Guidelines for configuring logging within TeamServer using the log4j2.xml property file"
tags: "installation setup configuration EOP logging log4j"
-->

## About Logging 
Contrast uses a universally accepted logging framework called [Log4j](http://logging.apache.org/log4j/2.x/). Administrators like you should become familiar with configuring logging thresholds and controlling log file destinations, as well as an overview of each log available in Contrast.

## Log Files

You can find Contrast logs under the *$CONTRAST_HOME/logs* directory. The table below provides a comprehensive overview of the primary log files in Contrast.

| File Name       | Description                                                                                                                                                                                                                                          |
|---------------------|-------------------------------------------------------------------------------------------------------------|
| Audit.log           | The audit log captures information about user sessions such as:  <ul><li>Logging in and out of the application </li><li>Impersonating another user</li><li>Switching organizations</li><li>Accessing the administrator portal</li><li>Changes to the configuration and settings of Contrast by a SuperAdmin account</li><li>User account service issues (locked accounts, password changed, etc.)</li><li> Deleting traces </li><li>Changes to a license or an expired license notification</li><li>API Key changes</li>|
| Contrast.log        | The *contrast.log* is the equivalent of Tomcat's *stdout* or *console log*. Most key events happening inside Contrast are logged to this file for informational or debugging purposes. This includes information about applications, servers, libraries, traces and users. This log file also stores Java stack traces for debugging purposes when a server exception takes place.                                                                                                                              |
| Migration.log       | The *migration.log* contains a summary of all database migrations that occur against the Contrast application between updates. The log file references the version of Contrast, as well as the migration script that ran. The status of the script is also provided in the log message.                                                                                  |
| Security-events.log | Formerly the *esapi.log*; this log file is used for capturing key events from Contrast, such as the loading of a given property file.                                                                                                           |


## Configure Log Settings

A very basic log setting is available in the SuperAdmin interface by navigating to **System Settings** and then choosing **Log Level**. From this location, an EOP administrator can change the logging from informational to any of the following options: ```FATAL```, ```ERROR```, ```WARNING```, ```INFO```, ```DEBUG``` and ```TRACE```. A detailed review of log settings for Log4j can be found [here](http://logging.apache.org/log4j/2.x/manual/customloglevels.html).

### Changing the XML File

The configurable XML file that's used to host the Log4j configuration is packaged in the Contrast application. Find this file under *$CONTRAST_HOME/data/conf*. 

Contrast recommends that you only make changes to the *log4j2.xml* file under the direction and support of a Contrast engineer. If a you change the file, it's important to syntactically review the file to ensure the formatting is correct. You should also be aware that a server restart isn't required if changes are entered correctly. The first parameter of the file below is a monitor interval that refreshes the settings based on the variable defined. By default, Contrast checks every 60 seconds and refreshes the logging configuration.

````
<Configuration monitorInterval="60">
````

The sections below describe the file components and how to make use of the file for increased or decreased logging purposes.

#### About Appenders

For a comprehensive introduction to Appenders and delivering *LogEvents*, refer to the [Log4j documentation](https://logging.apache.org/log4j/2.x/manual/appenders.html). Contrast predominantly makes use of the [Rolling File Appender](https://logging.apache.org/log4j/2.x/manual/appenders.html#RollingFileAppender), which is an *OutputStreamAppender* that writes to the file named in the *fileName* parameter, and rolls the file over according to the *TriggeringPolicy* and the *RolloverPolicy*. 

In the example below, we show the Appenders for our *contrast.log*. This example is a daily appender which has a 1GB max file size policy and no more than 15 files of rollover. This Appender also compresses the file and rename it daily.

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
#### Log levels
The logger section of the file defines which Java packages should log to a specific Appender and at a given log level. Below is a summary of each level in ascending order, including the reasons why an Administrator may set it. 

| Log Level | Description  |
|-----------|-----------------------------------------------------------------------------------------------------------------------|
| Debug     | Helps the developer debug the application. Level of the message logged is focused on providing support to an application developer.                  |
| Info      | Gives the *progress* and *chosen state* information. This level is useful for the end user.   |
| Warn      | Gives a warning about an unexpected event to the user. The messages coming out of this level may not halt the progress of the system.           |
| Error     | Gives information about a serious error that needs to be addressed and may result in an unstable state. |
| Trace     | Gives more detailed information than the ```DEBUG``` level.  |




