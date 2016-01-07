<!--
title: "Java Agent System Properties"
description: "How to tweak system properties to alter Contrast's behavior"
-->

## General Properties
The following [System Properties](http://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html) can be used to alter Contrast's behavior.  All options are prefixed with **-D** and no space, e.g. **-Dcontrast.property=value**.


| Parameter               | Description                                                                                                                                                                                                                                                                      |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| contrast.appname        | Specify the name of a standalone or desktop application.                                                                                                                                                                                                                         |
| contrast.dir            | This value can override the default Contrast working directory (default: $USER_HOME/.contrast of the user account the application runs under).                                                                                                                                   |
| contrast.enabled        | Determines whether or not Contrast will monitor the JVM. You can use this feature to quickly turn Contrast on or off without removing the *-javaagent* flag. The default value is *true*. Setting it to a value of  *false* will prevent Contrast from instrumenting the server. |
| contrast.rootapp        | This value can override (or provide one if none exist) a display name for the app running at the root context. This may be needed for Contrast to collect analytics on the application.                                                                                          |
| contrast.server         | Overrides name of the server displayed in the Contrast TeamServer. Includes any valid path characters, e.g. *myserver-1/myapp* or *john_dev*.                                                                                                                                    |
| contrast.teamserver.url | This value will override the TeamServer URL that's packaged with the agent. This can be useful for networks that proxy the information.                                                                                                                                          |
| contrast.timeout        | This value can override the default timeout (in seconds) for communicating with TeamServer. The default value is *10*.                                                                                                                                                           |
| contrast.classpath.libs | Determines whether or not Contrast will track usage of libraries listed in the environment's *java.class.path* property. The default value is *false*.                                                                                                                           |
| contrast.useconfig      | Use to load configuration from another Contrast agent jar file e.g. *-Dcontrast.useconfig="path/to/another/contrast.jar"*                                                                                                                                                        |


## Logging
By default, diagnostic logging is enabled, but set to the INFO level. It uses a rolling file appender scheme to keep up to 1 GB of logs on the File System, broken up into 10MB log files. Logging has a small performance impact, but generates useful information for debugging Contrast. To change how this logging functions, you can adjust the following System properties. 

### Assessment Mode
| Parameter               | Description                                                                                                                                                                                                                                                                      |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| contrast.log | Enable *diagnostic logging*. This hurts performance, but generates useful information for debugging Contrast. |
| contrast.level | Set the log level for diagnostic logging. Values include: *trace*, *debug*, *info*, *warn*, *error*, and *fatal*. The default is *info*.|
| contrast.log.daily | Change the Contrast logger from a file sized based rolling scheme to a date based rolling scheme. At midnight serve time, the previous day's log will be renamed to file_name.yyyy-MM-dd. Note, this scheme does not have a size limit, so manual log pruning will be required. Setting this flag overrides the subsequent backups and size flags. By default, this value is 'off'. |
| contrast.log.backups | Specify the number of "backup" logs that will be created before Contrast will clean up the oldest file. This value has a cap of 100, meaning no more than 100 log files can be stored on the file system at one time. A value of 0 here means that no backups will be created and the log will simply be truncated when it reaches its size cap. By default, this value is '100'. |
| contrast.log.size | Specify the file size cap, in MB, of each log file. This value has a cap of 10, meaning no more than 10MB will be logged to a single file. By default, this value is '10'. | 

### Defend Mode
| Parameter               | Description                                                                                                                                                                                                                                                                      |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| contrast.security.log.file | The file to which logging of security events will occur. By default, this file is located at <working_directory>/security.log. |
| contrast.security.log.level | Set the log level for security logging. Values include: trace, debug, info, warn, error, fatal, off. Setting this to off will disable security logging. By default, this value is 'info'. |
| contrast.security.log.daily | Change the Contrast security logger from a file sized based rolling scheme to a date based rolling scheme. At midnight server time, the previous day's log will be renamed to file_name.yyyy-MM-dd. Note, this scheme does not have a size limit, so manual log pruning will be required. Setting this flag overrides the subsequent backups and size flags. By default, this value is 'off'. |
| contrast.security.log.backups | Specify the number of "backup" logs that will be created before Contrast will clean up the oldest file. This value has a cap of 100, meaning no more than 100 log files can be stored on the file system at one time. A value of 0 here means that no backups will be created and the log will simply be truncated when it reaches its size cap. By default, this value is '100'. |
| contrast.security.log.size | Specify the file size cap, in MB, of each log file. This value has a cap of 10, meaning no more than 10MB will be logged to a single file. By default, this value is '10'. |


## Diagnostics

| Parameter               | Description                                                                                                                                                                                                                                                                      |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| contrast.savebytecode | Save the *before/after bytecode* of classes where sensors have been added.|


## Performance
 
| Parameter               | Description                                                                                                                                                                                                                                                                      |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| contrast.clear | Don't use any previous *security analysis cache*. This artificially extends startup time, but may help with conflicts when multiple app servers are running on the same host. The analysis cache was removed in **Version 2.7.3**. 
| contrast.blacklist | If you set this value to a readable file, Contrast will read it for a list of class names (one per line, in the format *org.example.Foo*) that will not be analyzed for security sensors. This can help improve startup time if enough classes can be put into the blacklist.
| contrast.sampling | Enable and configure *sampling mode*. By default, just placing this flag will result in a *baseline* (how many times a request should be analyzed before it is considered sampled) and *frequency* (how often after the baseline has been established should new samples be taken) of **5** and a *sampling window* (how long the baseline is valid, in seconds) of **180 seconds**. This means that after the same request has been seen five times in 180 seconds, it will only be analyzed every subsequent fifth time. You can customize this further by setting the value to "#,#,#". In this case, the baseline will be set to the first number, the frequency second, and the window third. Note that if you choose to customize any value, you must provide all three inputs.
| contrast.savestacks | Configure Contrast's collecting of stacktraces. The default value is *all*, but can be overriden to *some* or *none*. Reducing the amount of stacktraces collected can offer a performance improvement, but makes understanding individual events in a vulnerability trace harder to identify in the code. |


## Policy

| Parameter               | Description                                                                                                                                                                                                                                                                      |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| contrast.policy | If you set this value to a file or URL, Contrast will use it instead of the pre-packaged security policy. For more information about rule customization, please contact your account manager. |


## Updates

>**Note:** These options only apply to the Java 1.6 agent

| Parameter               | Description|
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| contrast.forceupdate |  If you set this value to *true*, Contrast will download the latest available agent from whatever TeamServer the current agent was downloaded from. This feature is useful if you've changed the configuration of the agent and want to ensure that all current agents pick up this change. By default, the agent will smart update on application server restart, downloading a new agent from TeamServer if the TeamServer has been upgraded since the last time the application server was started. |


## See Also

[An Application Is Not Appearing In The List](user_tsfaq.html#list)

[Getting Contrast Java Agent Logs](user_javafaq.html#log)

[Java Agent Bytecode Changes](user_javaconfig.html#bytecode)

[Working With Contrast's Java Agent Cache](user_javaconfig.html#cache)

[Sampling](user_tsfaq.html#sample)
