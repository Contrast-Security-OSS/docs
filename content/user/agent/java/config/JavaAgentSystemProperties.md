<!--
title: "Java Agent System Properties"
description: "How to tweak system properties to alter Contrast's behavior"
-->
You can generate a list of these properties directly from the command line using the Contrast Agent jar. To do so, execute the following: **java -jar path/to/contrast.jar properties**

You can combine the above command with tools like *grep* to search for commands, for example:
**java -jar path/to/contrast.jar properties | grep -A5 "proxy"** would yield a list of proxy-related properties.

## General Properties
The following [System Properties](http://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html) can be used to alter Contrast's behavior.  All options are prefixed with **-D** and no space, e.g. **-Dcontrast.property=value**.

| Parameter               | Description                                                                                                                                                                                                                                                                      |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| contrast.appname        | Specify the name of a standalone or desktop application.<br>**DEFAULT VALUE:** determined by scanning web.xml                                                                                                                                                                                                                        |
| contrast.dir            | This value can override the default Contrast working directory. Important: the account the application server (JVM process) runs under must have read and write access to the directory.<br>**DEFAULT VALUE:** $USER_HOME/.contrast of the user account the application runs under.                                                                                                                                   |
| contrast.enabled        | Determines whether or not Contrast will monitor the JVM. You can use this feature to quickly turn Contrast on or off without removing the *-javaagent* flag.<BR>**DEFAULT VALUE:** *true*. Setting it to a value of *false* will prevent Contrast from instrumenting the server. |
| contrast.rootapp        | This value can override (or provide one if none exist) a display name for the app running at the root context. This may be needed for Contrast to collect analytics on the application.                                                                                          |
| contrast.server         | Overrides name of the server displayed in the Contrast TeamServer. Includes any valid path characters, e.g. *myserver-1/myapp* or *john_dev*.                                                                                                                                    |
| contrast.teamserver.url | This value will override the TeamServer URL that's packaged with the agent. This can be useful for networks that proxy the information.<br>**DEFAULT VALUE:** stored in the contrast.config file packaged in contrast.jar                                                                                                                                           |
| contrast.timeout        | This value can override the default timeout (in seconds) for communicating with TeamServer.<br>**DEFAULT VALUE:** 10                                                                                                                                                           |
| contrast.classpath.libs | Determines whether or not Contrast will track usage of libraries listed in the environment's *java.class.path* property. The default value is *false*.                                                                                                                           |
| contrast.useconfig      | Use to load configuration from another Contrast agent jar file e.g. *-Dcontrast.useconfig="path/to/another/contrast.jar"*                                                                                                                                                        |
| contrast.activity | boolean to enable/disable the Contrast activity thread<br>**DEFAULT VALUE:** true |
| contrast.app.activity.period | Contrast app activity thread polling period in milliseconds<br>**DEFAULT VALUE:** 30000 (30 seconds, in milliseconds) |
| contrast.appupdate | boolean to enable/disable threads that sends updates about applications to Team Server<br>**DEFAULT VALUE:** true |
| contrast.nested.libs.depth | max archive unpacking depth when analyzing libraries<br>**DEFAULT VALUE:** not used; this property must be set in order to be active |
| contrast.external.lib.dir | semi-colon delimited list of directories where external libraries are stored; used during library analysis<br>**DEFAULT VALUE:** not used; this property must be set in order to be active |
| contrast.container | manually override the web app container name/id<br>**DEFAULT VALUE:** detected by the Java Agent |
| contrast.inject.browseragent | manually override name of browser agent<br>**DEFAULT VALUE:** not used; this property must be set in order to be active |
| contrast.websphere.shared.libs | Location of shared library directory on WebSphere<br>**DEFAULT VALUE:** not used; this property must be set in order to be active |
| contrast.reporting.period | Polling period for spooling reports, like traces, app updates (in milliseconds)<br>**DEFAULT VALUE:** 3000 (3 seconds, in milliseconds) |


## Logging
By default, diagnostic logging is enabled, but set to the INFO level. It uses a rolling file appender scheme to keep up to 1 GB of logs on the File System, broken up into 10MB log files. Logging has a small performance impact, but generates useful information for debugging Contrast. To change how this logging functions, you can adjust the following System properties.

### Assessment Mode
| Parameter               | Description                                                                                                                                                                                                                                                                      |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| contrast.log | Enable *diagnostic logging*. This hurts performance, but generates useful information for debugging Contrast. The value set here will be the location to which log output is saved. If no log file exists at this location, one will be created (refer to contrast.dir above for location details). For instance, */opt/Contrast/contrast.log* will create a log in the */opt/Contrast* directory and rotate it automatically as needed.|
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
| contrast.savebytecode | Save the *before/after bytecode* of classes where sensors have been added.<br>**DEFAULT VALUE:** not used; this property must be set in order to be active|
| contrast.saveresults | controls when Contrast findings are saved locally<br>**DEFAULT VALUE:** never |
| contrast.assess.autodetect.controls | boolean to enable/disable detecting security sensors (default false)<br>**DEFAULT VALUE:** not used; this property must be set in order to be active |


## Performance

| Parameter               | Description                                                                                                                                                                                                                                                                      |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| contrast.clear | Don't use any previous *security analysis cache*. This artificially extends startup time, but may help with conflicts when multiple app servers are running on the same host. The analysis cache was removed in **Version 2.7.3**.
| contrast.blacklist | If you set this value to a readable file, Contrast will read it for a list of class names (one per line, in the format *org.example.Foo*) that will not be analyzed for security sensors. This can help improve startup time if enough classes can be put into the blacklist.
| contrast.sampling | Enable and configure *sampling mode*. By default, just placing this flag will result in a *baseline* (how many times a request should be analyzed before it is considered sampled) and *frequency* (how often after the baseline has been established should new samples be taken) of **5** and a *sampling window* (how long the baseline is valid, in seconds) of **180 seconds**. This means that after the same request has been seen five times in 180 seconds, it will only be analyzed every subsequent fifth time. You can customize this further by setting the value to "#,#,#". In this case, the baseline will be set to the first number, the frequency second, and the window third. Note that if you choose to customize any value, you must provide all three inputs.
| contrast.savestacks | Configure Contrast's collecting of stacktraces. The default value is *all*, but can be overriden to *some* or *none*. Reducing the amount of stacktraces collected can offer a performance improvement, but makes understanding individual events in a vulnerability trace harder to identify in the code. |
| contrast.cache.hierarchy | boolean to enable/disable hierarchy cache<br>**DEFAULT VALUE:** true |
| contrast.hierarchy.rebuild | boolean to trigger rebuilding/resetting the hierarchy cache<br>**DEFAULT VALUE:** not used; this property must be set in order to be active |
| contrast.hierarchy.update | boolean to trigger updating the hierarchy cache<br>**DEFAULT VALUE:** not used; this property must be set in order to be active |
| contrast.cloneinput | boolean to enable/disable cloning of tracked objects<br>**DEFAULT VALUE:** true |
| contrast.http.analysis.parameters | boolean to enable/disable analysis of HTTP parameters<br>**DEFAULT VALUE:** true |
| contrast.j2ee.classcache | boolean to enable/disable caching of instrumented classes<br>**DEFAULT VALUE:** true |


## Policy

| Parameter               | Description                                                                                                                                                                                                                                                                      |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| contrast.policy | If you set this value to a file or URL, Contrast will use it in addition to the pre-packaged security policy. This means that rules from both the standard Contrast policy and your custom policy will be used, with conflicts being resolved in favor of the external policy, i.e. if two sources have the same ID, one in the internal policy and one in the external, the external source will be used. |
|contrast.policy.overrides |Same functionality as contrast.policy, but policies listed here have a higher priority, meaning that conflicts will be resolved in favor of the overrides policy, i.e. if two sources have the same ID, one in the policy and one in the override, the override source will be used.  |
|contrast.policy.standalone | If you set this value to a file or URL, Contrast will use it instead of the pre-packaged security policy. For more information about rule customization, please contact your account manager. |


## Rules configuration
| Parameter | Description |
|-----------|-------------|
| contrast.blacklist | path to file that lists blacklisted classes<br>**DEFAULT VALUE:** not used; this property must be set in order to be active |
| contrast.disabledrules | list of disabled rule ids<br>**DEFAULT VALUE:** not used; this property must be set in order to be active |
| contrast.disabledsources | list of disabled source ids<br>**DEFAULT VALUE:** not used; this property must be set in order to be active |
| contrast.deadzones | boolean to enable/disable loading of deadzones from policy<br>**DEFAULT VALUE:** true |
| contrast.sources | boolean to enable/disable loading of sources from policy<br>**DEFAULT VALUE:** true |
| contrast.propagators | boolean enable/disable loading of propagators from policy<br>**DEFAULT VALUE:** true |
| contrast.tags | boolean to enable/disable loading of tags from policy<br>**DEFAULT VALUE:** true |
| contrast.rules | boolean to enable/disable loading of rules from policy<br>**DEFAULT VALUE:** true |
| contrast.validators | boolean to enable/disable loading of validators from policy<br>**DEFAULT VALUE:** true |
| contrast.validator.scopes | boolean to enable/disable loading of validator-scopes<br>**DEFAULT VALUE:** true |
| contrast.properties | boolean to enable/disable loading of properties from the policy file<br>**DEFAULT VALUE:** true |
| web.session.timeout | Overrides the maximum "safe" value of <session-timeout> detected in the web.xml file. The default value is 30 (minutes).<br>**DEFAULT VALUE:** 30 |
| contrast.identitytags | boolean to enable/disable identity tags<br>**DEFAULT VALUE:** true |
| contrast.assess.hashing.includeurl | Set to "true" to factor in request URL when computing hash for reported finding<br>**DEFAULT VALUE:** not used; this property must be set in order to be active |


## Defend Mode Configuration
| Parameter | Description |
|-----------|-------------|
| contrast.defend.patterns | File path to overriding RASP patterns file (used when Contrast is in DEFEND mode)<br>**DEFAULT VALUE:** uses patterns embedded in the agent |
| contrast.defend.telemetry.dir | File path to RASP telemetry directory (used when Contrast is in DEFEND mode)<br>**DEFAULT VALUE:** not used; this property must be set in order to be active |
| contrast.xss.keywords | File path to overriding xss keywords file<br>**DEFAULT VALUE:** not used; this property must be set in order to be active |
| contrast.xss.patterns | Location of xss patterns file<br>**DEFAULT VALUE:** not used; this property must be set in order to be active |
| contrast.defend.ineffective.samples | Max number of detailed reports generated for ineffective attacks detected during a<br>**DEFAULT VALUE:** 50 |
| contrast.defend.blocked.samples | Max number of detailed reports generated for blocked attacks detected during a reporting period<br>**DEFAULT VALUE:** 25 |
| contrast.defend.exploited.samples | Max number of detailed reports generated for exploited attacks during a reporting period<br>**DEFAULT VALUE:** 100 |


## Framework and Architecture Support
| Parameter | Description |
|-----------|-------------|
| contrast.supporter.apache.file.uploader | boolean enable/disable support of Apache Commons fileupload library<br>**DEFAULT VALUE:** true |
| contrast.supporter.apache | boolean to enable/disable support/instrumentation of Apache HTTP libraries<br>**DEFAULT VALUE:** true |
| contrast.supporter.coldfusion | boolean to enable/disable support for ColdFusion applications<br>**DEFAULT VALUE:** true |
| contrast.supporter.coverity | boolean to enable/disable instrumentation of Coverity<br>**DEFAULT VALUE:** true |
| contrast.supporter.concurrency | boolean to enable/disable instrumentation of Java Concurrency classes<br>**DEFAULT VALUE:** true |
| contrast.supporter.dropwizard | boolean to enable/disable support for DropWizard applications<br>**DEFAULT VALUE:** true |
| contrast.supporter.diskjar | boolean to enable/disable scanning of standalone application jars<br>**DEFAULT VALUE:** true |
| contrast.supporter.dwr | boolean to enable/disable DWR support<br>**DEFAULT VALUE:** true |
| contrast.supporter.esapi | boolean to enable/disable instrumentation of ESAPI classes<br>**DEFAULT VALUE:** true |
| contrast.supporter.freemarker | boolean to enable/disable Freemarker support<br>**DEFAULT VALUE:** true |
| contrast.supporter.grizzly | boolean to enable/disable Grizzly support<br>**DEFAULT VALUE:** true |
| contrast.supporter.groovy | boolean to enable/disable Groovy support<br>**DEFAULT VALUE:** true |
| contrast.supporter.jboss | boolean to enable/disable JBoss support<br>**DEFAULT VALUE:** true |
| contrast.supporter.j2ee | boolean to enable/disable instrumentation of standard J2EE servlet classes<br>**DEFAULT VALUE:** true |
| contrast.supporter.jackson | boolean to enable/disable Jackson support<br>**DEFAULT VALUE:** true |
| contrast.supporter.javax | boolean to enable/disable Javax support<br>**DEFAULT VALUE:** true |
| contrast.supporter.jersey | boolean to enable/disable Jersey support<br>**DEFAULT VALUE:** true |
| contrast.supporter.kryo | boolean to enable/disable Kryo support<br>**DEFAULT VALUE:** true |
| contrast.supporter.mustache | boolean to enable/disable Mustache support<br>**DEFAULT VALUE:** true |
| contrast.supporter.netty | boolean to enable/disable Netty support<br>**DEFAULT VALUE:** true |
| contrast.supporter.osgi | boolean to enable/disable OSGi support<br>**DEFAULT VALUE:** true |
| contrast.supporter.play | boolean to enable/disable Play support<br>**DEFAULT VALUE:** true |
| contrast.supporter.seam | boolean to enable/disable SEAM support<br>**DEFAULT VALUE:** true |
| contrast.supporter.smap | boolean to enable/disable SMAP support<br>**DEFAULT VALUE:** true |
| contrast.supporter.springboot | boolean to enable/disable Springboot support<br>**DEFAULT VALUE:** true |
| contrast.supporter.spring | boolean to enable/disable Spring support<br>**DEFAULT VALUE:** true |
| contrast.supporter.struts | boolean to enable/disable Struts support<br>**DEFAULT VALUE:** true |
| contrast.supporter.tomcat | boolean to enable/disable Tomcat support<br>**DEFAULT VALUE:** true |
| contrast.supporter.vertx | boolean to enable/disable Vert.x support<br>**DEFAULT VALUE:** true |
| contrast.supporter.websphere | boolean to enable/disable WebSphere support<br>**DEFAULT VALUE:** true |
| contrast.supporter.cxf | boolean to enable/disable cxf support<br>**DEFAULT VALUE:** true |
| contrast.supporter.poi | boolean to enable/disable POI support<br>**DEFAULT VALUE:** true |
| contrast.supporter.xstream | boolean to enable/disable XStream support<br>**DEFAULT VALUE:** true |
| contrast.dbinspection | boolean to enable/disable DB inspection when analyzing application architecture<br>**DEFAULT VALUE:** true |
| contrast.jmx | boolean to enable/disable jmx support<br>**DEFAULT VALUE:** false |
| contrast.j2ee.context.discovery | boolean to enable/disable J2EE context discovery<br>**DEFAULT VALUE:** true |
| contrast.scanresponses | boolean to enable/disable scanning of HTTP responses<br>**DEFAULT VALUE:** true |


## Proxy Settings
| Parameter | Description |
|-----------|-------------|
| contrast.proxy.protocol | Proxy protocol, e.g. http, https<br>**DEFAULT VALUE:** not used; this property must be set in order to be active |
| proxy.auth | Override authentication type for Proxy<br>**DEFAULT VALUE:** configured system property |
| proxy.fingerprint | Override Fingerprint for Proxy<br>**DEFAULT VALUE:** configured system property |
| proxy.host | Override Host for Proxy<br>**DEFAULT VALUE:** configured system property |
| proxy.port | Override Port for Proxy<br>**DEFAULT VALUE:** configured system property |
| proxy.user | Override User for Proxy<br>**DEFAULT VALUE:** configured system property |
| proxy.pass | Override Password for Proxy<br>**DEFAULT VALUE:** configured system property |


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
