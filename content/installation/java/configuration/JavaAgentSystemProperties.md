<!--
title: "Java Agent System Properties"
description: "Overview of java agent system properties"
tags: "installation java agent configuration system properties"
-->

## General Properties
You can generate a list of these properties directly from the command line using the Contrast Agent jar. To do so, execute the following: `java -jar path/to/contrast.jar properties`. 

This markdown file could be generated directly from the command line. To do so, execute the following: `java -jar contrast.jar properties --generate-markdown --write-to-file=/path/to/file.md`.

You can combine the above command with tools like *grep* to search for commands, for example:
`java -jar path/to/contrast.jar properties | grep -A5 "proxy"` would yield a list of proxy-related properties.

For an agent to send up its environment to Contrast, add this JVM option: `-Dcontrast.env=<environment>`. For example, to tell Contrast that an agent is part of the QA environment, add `-Dcontrast.env=qa`.

|Property|Description|
|-|-|
| contrast.activity | boolean to enable/disable the Contrast activity thread<br>**DEFAULT VALUE:** true</br> |
| contrast.app.activity.period | Contrast app activity thread polling period in milliseconds<br>**DEFAULT VALUE:** 30000 (30 seconds, in milliseconds)</br> |
| contrast.app.features | JSON from disk to use for app<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.app.update.period | Contrast app update thread polling period in milliseconds<br>**DEFAULT VALUE:** 5000 (5 seconds, in milliseconds)</br> |
| contrast.appupdate | boolean to enable/disable threads that sends updates about applications to Team Server<br>**DEFAULT VALUE:** true</br> |
| contrast.auto.license.assessment | boolean to allow Contrast to license an application on creation<br>**DEFAULT VALUE:** false</br> |
| contrast.auto.license.protection | boolean to allow Contrast to license a server on creation<br>**DEFAULT VALUE:** false</br> |
| contrast.classpath.libs | Determines whether or not Contrast will track usage of libraries listed in the environment's *java.class.path* property. This should only be on in J2SE/desktop situations.<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.cloneinput | boolean to enable/disable cloning of tracked objects<br>**DEFAULT VALUE:** true</br> |
| contrast.container | manually override the web app container name/id<br>**DEFAULT VALUE:** detected by the Java Agent</br> |
| contrast.dbinspection | boolean to enable/disable DB inspection when analyzing application architecture<br>**DEFAULT VALUE:** true</br> |
| contrast.deepclone | boolean to enable/disable cloning of leaf nodes in object graphs of deserialized objects<br>**DEFAULT VALUE:** false</br> |
| contrast.dir | This value can override the default Contrast working directory<br>**DEFAULT VALUE:** ${HOME}/.contrast of the user account the application runs under.</br> |
| contrast.duplicate.delay | The period for which duplicate traces, based on Contrast hashing methods, will be supressed (in milliseconds)<br>**DEFAULT VALUE:** 5000</br> |
| contrast.enable.auto.update | If false, Contrast will not contact TeamServer to see if an updated version is available. This check occurs before contrast.forceupdate<br>**DEFAULT VALUE:** true</br> |
| contrast.enabled | Determines whether or not Contrast will monitor the JVM. You can use this feature to quickly turn Contrast on or off without removing the *-javaagent* flag.<br>**DEFAULT VALUE:** true</br> |
| contrast.external.lib.dir | semi-colon delimited list of directories where external libraries are stored; used during library analysis<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.forceupdate | If true, Contrast will replace itself with the latest version available on TeamServer, without checking version number. This check occurs after contrast.enable.auto.update<br>**DEFAULT VALUE:** false</br> |
| contrast.inject.browseragent | manually override name of browser agent<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.j2ee.context.discovery | boolean to enable/disable J2EE context discovery<br>**DEFAULT VALUE:** true</br> |
| contrast.mode | assess: data flow analysis, defend: defend features, inventory: library catalog and analysis, all: all features; Note when this property is enabled, the Agent will ignore all customizations from TeamServer.<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.nested.libs.depth | max archive unpacking depth when analyzing libraries<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.noteamserver.enable | boolean to enable/disable Contrast to start up without access to TeamServer<br>**DEFAULT VALUE:** false</br> |
| contrast.override.appname | sets the application name; this name will be reported to TeamServer<br>**DEFAULT VALUE:** determined by scanning web.xml</br> |
| contrast.override.appversion | sets the application version; this version will be reported to TeamServer<br>**DEFAULT VALUE:** determined by scanning web.xml</br> |
| contrast.path | Contrast "working directory" override<br>**DEFAULT VALUE:** the "current" folder, according to the container</br> |
| contrast.poll.features | boolean to enable/disable Features polling thread<br>**DEFAULT VALUE:** true</br> |
| contrast.properties | location of file containing Java properties style key, value pairs. <br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.redos.characcess.limit | The number of character accesses that can occur when processing a regular expression before blocking occurs<br>**DEFAULT VALUE:** 3000000</br> |
| contrast.reporting.period | Polling period for spooling reports, like traces, app updates (in milliseconds)<br>**DEFAULT VALUE:** 3000 (3 seconds, in milliseconds)</br> |
| contrast.rootapp | This value can override (or provide one if none exist) a display name for the app running at the root context. This may be needed for Contrast to collect analytics on the application.<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.scanresponses | boolean to enable/disable scanning of HTTP responses<br>**DEFAULT VALUE:** true</br> |
| contrast.server | Overrides name of the server displayed in the Contrast TeamServer. Includes any valid path characters, e.g. *myserver-1/myapp* or *john_dev*.<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.server.activity.period | Polling period for TeamServer polling thread (in milliseconds)<br>**DEFAULT VALUE:** 30000 (30 seconds, in milliseconds)</br> |
| contrast.stacks.maxdepth | max stack depth to include in reported findings<br>**DEFAULT VALUE:** 75</br> |
| contrast.standalone.appname | Indicates the application is a standalone app with the provided name<br>**DEFAULT VALUE:** none, must be set</br> |
| contrast.supporter.jackson.interning | Controls whether or not String interning is disabled in Jackson. The default value is true.<br>**DEFAULT VALUE:** true</br> |
| contrast.supporter.minidevjson | boolean to enable/disable net.minidev.json support<br>**DEFAULT VALUE:** true</br> |
| contrast.teamserver.channel.pause.period | The amount of time to pause agent to TeamServer communication when a bad response code is received<br>**DEFAULT VALUE:** 900000 (15 minutes in milliseconds)</br> |
| contrast.teamserver.url | This value will override the TeamServer URL that's packaged with the agent. This can be useful for networks that proxy the information.<br>**DEFAULT VALUE:** stored in the contrast.config file packaged in contrast.jar</br> |
| contrast.telemetry.dir | Location for Contrast telemetry output<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.timeout | This value can override the default timeout (in seconds) for communicating with TeamServer.<br>**DEFAULT VALUE:** 10</br> |
| contrast.useconfig | use the contrast.config file packaged in another contrast.jar<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.user.packages | A comma-separated list of packages that Contrast should deeply scan for SMAP information, vulnerabilities, and other app-related analysis<br>**DEFAULT VALUE:** none</br> |
| contrast.websphere.shared.libs | Location of shared library directory on WebSphere<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| csrf.allowed.filewrite.suffixes | A comma-separated list of allowed file suffixes which CSRF won't consider as evidence of state change<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| csrf.allowed.urls | Set the path to a file containing line-separated URLs patterns which don't require CSRF tokens<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| csrf.protected.urls | Set the path to a file containing line-separated URLs patterns which require CSRF tokens<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| felix.bundles.path | Set to override default location of Felix bundles directory<br>**DEFAULT VALUE:** ./sling/felix</br> |

## Logging
By default, diagnostic logging is enabled, but set to the INFO level. It uses a rolling file appender scheme to keep up to 1 GB of logs on the File System, broken up into 10MB log files. Logging has a small performance impact, but generates useful information for debugging Contrast. To change how this logging functions, you can adjust the following System properties.

### Assessment Mode
|Property|Description|
|-|-|
| contrast.level | Log output level<br>**DEFAULT VALUE:** info</br> |
| contrast.log | Enable *diagnostic logging*. This hurts performance, but generates useful information for debugging Contrast. The value set here will be the location to which log output is saved. If no log file exists at this location, one will be created. For instance, */opt/Contrast/contrast.log* will create a log in the */opt/Contrast* directory and rotate it automatically as needed.<br>**DEFAULT VALUE:** ${HOME}/.contrast/logs/contrast.log</br> |
| contrast.log.backups | Specify the number of "backup" logs that will be created before Contrast will clean up the oldest file. This value has a cap of 100, meaning no more than 100 log files can be stored on the file system at one time. A value of 0 here means that no backups will be created and the log will simply be truncated when it reaches its size cap.<br>**DEFAULT VALUE:** 100</br> |
| contrast.log.daily | Change the Contrast logger from a file sized based rolling scheme to a date based rolling scheme. At midnight serve time, the previous day's log will be renamed to file_name.yyyy-MM-dd. Note, this scheme does not have a size limit, so manual log pruning will be required. This flag must be set to use the backups and size flags.<br>**DEFAULT VALUE:** true</br> |
| contrast.log.size | Specify the file size cap, in MB, of each log file. This value has a cap of 10, meaning no more than 10MB will be logged to a single file.<br>**DEFAULT VALUE:** 10</br> |

### Defend Mode
|Property|Description|
|-|-|
| contrast.security.log.backups | Specify the number of "backup" logs that will be created before Contrast will clean up the oldest file. This value has a cap of 100, meaning no more than 100 log files can be stored on the file system at one time. A value of 0 here means that no backups will be created and the log will simply be truncated when it reaches its size cap.<br>**DEFAULT VALUE:** false</br> |
| contrast.security.log.daily | Change the Contrast security logger from a file sized based rolling scheme to a date based rolling scheme. At midnight server time, the previous day's log will be renamed to file_name.yyyy-MM-dd. Note, this scheme does not have a size limit, so manual log pruning will be required. This flag must be set to use the backups and size flags.<br>**DEFAULT VALUE:** true</br> |
| contrast.security.log.file | The file to which logging of security events will occur. By default, this file is located at <working_directory>/security.log.<br>**DEFAULT VALUE:** ${HOME}/.contrast/logs/security-events.log</br> |
| contrast.security.log.level | Set the log level for security logging. Values include: trace, debug, info, warn, error, fatal, off. Setting this to off will disable security logging.<br>**DEFAULT VALUE:** info</br> |
| contrast.security.log.size | Specify the file size cap, in MB, of each log file. This value has a cap of 10, meaning no more than 10MB will be logged to a single file. By default, this value is '10'.<br>**DEFAULT VALUE:** 10</br> |

### Diagnostics
|Property|Description|
|-|-|
| contrast.assess.autodetect.controls | boolean to enable/disable detecting security sensors<br>**DEFAULT VALUE:** true</br> |
| contrast.assess.secondorder.canary | A value that will be fed by attack testing tools in order to test stored XSS or other second-order injection attacks to be detected coming out of databases<br>**DEFAULT VALUE:** null (disabled)</br> |
| contrast.savebytecode | Save the *before/after bytecode* of classes where sensors have been added.<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.saveresults | controls when Contrast findings are saved locally<br>**DEFAULT VALUE:** never</br> |
| contrast.scoped.jarverifier | controls whether the JarInputStream verifier is disabled during our scoped operations<br>**DEFAULT VALUE:** false</br> |

### Proxy Settings
|Property|Description|
|-|-|
| contrast.proxy.protocol | Proxy protocol, e.g. http, https<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| proxy.auth | Override authentication type for Proxy<br>**DEFAULT VALUE:** configured system property</br> |
| proxy.fingerprint | Override Fingerprint for Proxy<br>**DEFAULT VALUE:** configured system property</br> |
| proxy.host | Override Host for Proxy<br>**DEFAULT VALUE:** configured system property</br> |
| proxy.pass | Override Password for Proxy<br>**DEFAULT VALUE:** configured system property</br> |
| proxy.port | Override Port for Proxy<br>**DEFAULT VALUE:** configured system property</br> |
| proxy.user | Override User for Proxy<br>**DEFAULT VALUE:** configured system property</br> |

### Performance
|Property|Description|
|-|-|
| contrast.assess.threshold.entries | The maximum number of vulnerabilities per rule type that can be discovered within a period defined by contrast.assess.threshold.period<br>**DEFAULT VALUE:** 100</br> |
| contrast.assess.threshold.period | The period, in seconds, in which a maximum number of vulnerabilities per rule type can be discovered<br>**DEFAULT VALUE:** 60 (seconds)</br> |
| contrast.blacklist | path to file that lists blacklisted classes<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.cache.hierarchy | boolean to enable/disable hierarchy cache<br>**DEFAULT VALUE:** true</br> |
| contrast.concurrent.requests | average number of concurrent users logged into the application at any one time<br>**DEFAULT VALUE:** 20</br> |
| contrast.hierarchy.rebuild | boolean to trigger rebuilding/resetting the hierarchy cache<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.hierarchy.update | boolean to trigger updating the hierarchy cache<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.http.analysis.parameters | boolean to enable/disable analysis of HTTP parameters<br>**DEFAULT VALUE:** true</br> |
| contrast.j2ee.classcache | boolean to enable/disable caching of instrumented classes<br>**DEFAULT VALUE:** true</br> |
| contrast.preflight.open | Typically, the Contrast Agent uses a preflight hashing mechanism to avoid duplicate reporting, reducing load on TeamServer. Occasionally, this process can be overwhelmed, and TeamServer cannot reply quickly enough. In this case, in order to avoid losing any vulnerability data, the Agent will send any reports that are being filtered by preflight. While TeamServer can usually recover and resume preflight, it sometimes falls behind (for instance if the application being monitored is placed under a load test). To ensure that TeamServer has a chance to catch up, you can set this flag to false; however, it is worth noting that doing so may result in lost vulnerability information as all reports will be disregarded.<br>**DEFAULT VALUE:** false</br> |
| contrast.sampling | Enable and configure *sampling mode*. By default, just placing this flag will result in a *baseline* (how many times a request should be analyzed before it is considered sampled) and *frequency* (how often after the baseline has been established should new samples be taken) of **5** and a *sampling window* (how long the baseline is valid, in seconds) of **180 seconds**. This means that after the same request has been seen five times in 180 seconds, it will only be analyzed every subsequent fifth time. You can customize this further by setting the value to "#,#,#". In this case, the baseline will be set to the first number, the frequency second, and the window third. Note that if you choose to customize any value, you must provide all three inputs.<br>**DEFAULT VALUE:** Not used if flag is not specified. If just the flag is specified (without the values): 5,5,180</br> |

### Policy
|Property|Description|
|-|-|
| contrast.policy | If you set this value to a file or URL, Contrast will use it in addition to the pre-packaged security policy. This means that rules from both the standard Contrast policy and your custom policy will be used, with conflicts being resolved in favor of the external policy, i.e. if two sources have the same ID, one in the internal policy and one in the external, the external source will be used.<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.policy.overrides | Same functionality as contrast.policy, but policies listed here have a higher priority, meaning that conflicts will be resolved in favor of the overrides policy, i.e. if two sources have the same ID, one in the policy and one in the override, the override source will be used. <br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.policy.standalone | If you set this value to a file or URL, Contrast will use it instead of the pre-packaged security policy. For more information about rule customization, please contact your account manager.<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.rules.jar | If you set this value to a .jar file or URL, Contrast will load the rules from it (Java 6+ only)<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |

### Rules Configuration
|Property|Description|
|-|-|
| contrast.assess.hashing.includeurl | Set to "true" to factor in request URL when computing hash for reported finding<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.deadzones | boolean to enable/disable loading of deadzones from policy<br>**DEFAULT VALUE:** true</br> |
| contrast.disabledrules | list of disabled rule ids<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.disabledsources | list of disabled source ids<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.dynamicsources | boolean to enable/disable loading of dynamic sources from policy<br>**DEFAULT VALUE:** true</br> |
| contrast.identitytags | boolean to enable/disable identity tags<br>**DEFAULT VALUE:** true</br> |
| contrast.propagators | boolean enable/disable loading of propagators from policy<br>**DEFAULT VALUE:** true</br> |
| contrast.rules | boolean to enable/disable loading of rules from policy<br>**DEFAULT VALUE:** true</br> |
| contrast.sources | boolean to enable/disable loading of sources from policy<br>**DEFAULT VALUE:** true</br> |
| contrast.tags | boolean to enable/disable loading of tags from policy<br>**DEFAULT VALUE:** true</br> |
| contrast.validator.scopes | boolean to enable/disable loading of validator-scopes<br>**DEFAULT VALUE:** true</br> |
| contrast.validators | boolean to enable/disable loading of validators from policy<br>**DEFAULT VALUE:** true</br> |
| web.session.timeout | Overrides the maximum "safe" value of <session-timeout> detected in the web.xml file. The default value is 30 (minutes).<br>**DEFAULT VALUE:** 30</br> |

### Defend Mode Configuration
|Property|Description|
|-|-|
| contrast.cmdinjection.keywords | File path to overriding Command Injection keywords file<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.cmdinjection.patterns | Location of Command Injection patterns file<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.defend.api.bodyread | boolean to enable/disable whether API request bodies should be scanned for attacks if no known deserializers are in use<br>**DEFAULT VALUE:** true</br> |
| contrast.defend.blocked.samples | Max number of detailed reports generated for blocked attacks detected during a reporting period<br>**DEFAULT VALUE:** 25</br> |
| contrast.defend.csrf.token.name | the name of the CSRF token HTTP parameter<br>**DEFAULT VALUE:** cs_csrf_tkn</br> |
| contrast.defend.exploited.samples | Max number of detailed reports generated for exploited attacks during a reporting period<br>**DEFAULT VALUE:** 100</br> |
| contrast.defend.ineffective.samples | Max number of detailed reports generated for ineffective attacks detected during a<br>**DEFAULT VALUE:** 50</br> |
| contrast.defend.paddingoracle.threshold | Minimum number of padding errors to be observed during a reporting period in order to be classfied as malicious<br>**DEFAULT VALUE:** 25</br> |
| contrast.defend.patterns | File path to overriding RASP patterns file (used when Contrast is in DEFEND mode)<br>**DEFAULT VALUE:** uses patterns embedded in the agent</br> |
| contrast.defend.telemetry.dir | File path to RASP telemetry directory (used when Contrast is in DEFEND mode)<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.sqlinjection.keywords | File path to overriding SQL Injection keywords file<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.sqlinjection.patterns | Location of SQL Injection patterns file<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.xss.keywords | File path to overriding XSS keywords file<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |
| contrast.xss.patterns | Location of XSS patterns file<br>**DEFAULT VALUE:** not used; this property must be set in order to be active</br> |

## Updates

>**Note:** These options only apply to the Java 1.6 agent

|Parameter|Description|
|-|-|
| contrast.forceupdate |  If you set this value to *true*, Contrast will download the latest available agent from whatever TeamServer the current agent was downloaded from. This feature is useful if you've changed the configuration of the agent and want to ensure that all current agents pick up this change. By default, the agent will smart update on application server restart, downloading a new agent from TeamServer if the TeamServer has been upgraded since the last time the application server was started. |

## More Information

* [An Application Is Not Appearing In The List](troubleshooting-setup.html#missing)

* [Getting Java Agent Logs](troubleshooting-java.html#java-logs)

* [Java Agent Bytecode Changes](installation-javaconfig.html#bytecode)

* [Clearing the Java Agent Cache](troubleshooting-java.html#cache)

* [Sampling](admin-orgsettings.html#org-server)


