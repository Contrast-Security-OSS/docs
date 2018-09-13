<!--
title: "YAML configuration properties for the Java agent "
description: "Instructions for configuring Java agent properties via YAML file"
tags: "installation java agent YAML configuration rules properties"
-->

Contrast supports YAML-based configuration for the Java agent. This allows you to store configuration 
on disk and override that configuration with environment variable and CLI args if necessary.

> **Note:** While property formatting in YAML configuration files is shared by all Contrast agents, each agent must use its specified file. 

Configuration values use the following order of precedence: 

1. Corporate rule (e.g., expired license overrides `assess.enable`)
1. System property value
1. Environment variable value
1. User configuration file value <!-- TODO , for the java agent this includes the 
                                      legacy file and the YAMl file. Should we specify both or just not mention the 
                                      legacy file (which no one should be using anymore, I think.-->
1. Contrast UI value
1. Default value


<!-- Other use and file location info. This will be done after CONTRAST-26125  -->

All the YAML properties below can also be set as system properties. Derive the system property key
from the YAML by joining every node with a '.' until reach the bottom property. For instance,
if you wish to override 
```yaml
contrast: 
  enable: true
```
you can do so by setting `contrast.enable=false` as a system property.


## Contrast UI Properties
Use the properties in this section to connect the agent to the Contrast UI.

The proxy settings allow the agent to communicate with the Contrast UI over a proxy.

```yaml
contrast:

  # Only set this property if you want to turn off Contrast. Set to `true` to turn the agent on; set to `false` to turn the agent off.
  enable: true

  # ********************** REQUIRED **********************
  # Set the URL for the Contrast UI.
  url: https://app.contrastsecurity.com/Contrast

  # ********************** REQUIRED **********************
  # Set the API key needed to communicate with the Contrast UI.
  api_key:

  # ********************** REQUIRED **********************
  # Set the service key needed to communicate with the Contrast UI. It is used to calculate the Authorization header.
  service_key:

  # ********************** REQUIRED **********************
  # Set the user name used to communicate with the Contrast UI. It is used to calculate the Authorization header.
  user_name:
  
  proxy:

    # Add a property value to determine if the agent should communicate with the Contrast UI over a proxy. If a property value is not present, the presence of a valid proxy host and port determines enabled status. Value options are `true` or `false`.
    enable:

    # Set the proxy host. It must be set with port and scheme.
    host:

    # Set the proxy port. It must be set with host and scheme.
    port:

    # Set the proxy scheme (e.g., `http` or `https`). It must be set with host and port.
    scheme:

    # Set this property as an alternate for `scheme://host:port`. It takes precedence over the other settings, if specified; however, an error will be thrown if both the URI and individual properties are set.
    url:

    # Set the proxy user.
    user:

    # Set the proxy password.
    pass:

    # Set the proxy authentication type. Value options are `NTLM`, `Digest`, and `Basic`.
    auth_type:
```

## Contrast Agent Properties

Use the properties in this section to control the way and frequency with which the agent communicates to logs and to the Contrast UI.
If these values are not set, the agent will use the values set in the Contrast UI.


### Diagnostic Logging

Use the properties in this section to control diagnostic logging. These logs allow us to diagnose any issues you
may be having with the agent.
<!-- Maybe a question for Jenny, should we include the 'agent' node here? -->
```yaml
agent:

  logger:
  
      # Enable diagnostic logging by setting a path to a log file. This hurts performance, but generates useful information for debugging Contrast. The value set here will be the location to which log output is saved. If no log file exists at this location, one will be created. For instance, /opt/Contrast/contrast.log*will create a log in the /opt/Contrast directory and rotate it automatically as needed. By default, this file is located at ${HOME}/.contrast/contrast.log
      path:
  
      # Set the log output level. Options are OFF, FATAL, ERROR, WARN, INFO, DEBUG, TRACE, and ALL.
      level:
  
      # Set to `true` Change the Contrast logger from a file sized based rolling scheme to a date based rolling scheme. At midnight server time, the previous day's log will be renamed to file_name.yyyy-MM-dd. Note, this scheme does not have a size limit, so manual log pruning will be required. This flag must be set to use the backups and size flags.
      roll_daily:
  
      # Roll size for log files unless agent.logger.roll_daily=true
      roll_size:
  
      # Number of backup files to keep
      backups:
```


### Security Logging
Use the properties in this section to control security logging. These logs allow you to watch Protect as it monitors
and blocks attacks against your application. They are written to the specified file in the Common
Event Format (CEF).

The Syslog settings allow you to send security logs to remote servers.

```yaml
agent:

  security_logger:
  
    # The file to which logging of security events will occur. By default, this file is located at ${HOME}/.contrast/security.log.
    path:
  
    # Set the log level for security logging. Options are OFF, FATAL, ERROR, WARN, INFO, DEBUG, TRACE, and ALL. Setting this to OFF will disable security logging.",
    level:
  
    # Change the Contrast security logger from a file sized based rolling scheme to a date based rolling scheme. At midnight server time, the previous day's log will be renamed to file_name.yyyy-MM-dd. Note, this scheme does not have a size limit, so manual log pruning will be required. This flag must be set to use the backups and size flags. The options are true or false.
    roll_daily:
  
    # Specify the file size cap, in MB, of each log file.
    roll_size:
  
    # Specify the number of "backup" logs that will be created before Contrast will clean up the oldest file. A value of 0 here means that no backups will be created, and the log will simply be truncated when it reaches its size cap. Note, this property must be used with agent.security_logger.roll_daily=false, or we will continue to log daily and disregard this limit.
    backups:
  
    syslog:
  
      # If true, enable Syslog logging.
      enable:
  
      # Set IP address of the Syslog server to which we should send messages.
      ip:
  
      # Set port of the Syslog server to which we should send messages.
      port:
  
      # Set facility code of the messages we are sending to Syslog.
      facility:
  
      # Set the log level of exploited attacks. Options are ALERT, CRITICAL, ERROR, WARNING, NOTICE, INFO, DEBUG.
      severity_exploited:
  
      # Set the log level of blocked attacks. Options are ALERT, CRITICAL, ERROR, WARNING, NOTICE, INFO, DEBUG.
      severity_blocked:
  
      # Set the log level of probed attacks. Options are ALERT, CRITICAL, ERROR, WARNING, NOTICE, INFO, DEBUG.
      severity_probed:
```


### Agent-Specific Properties
<!-- That work will be done in CONTRAST-26166 -->

Words here...

Properties formatted as list/grid


## Inventory Properties

Use the properties in this section to control Inventory features in the agent.

```yaml
inventory:

  # Set to `false` to disable Inventory features in the agent.
  enable:

  # Define a list of directories where libraries are stored. Directories must be formatted as a semicolon-delimited list. e.g. path1;path2;path3
  library_dirs:

  # Set the maximum archive unpacking depth when analyzing libraries.
  library_depth:

  # Set to `false` to disable Inventory features in the agent.
  prune_package_details:

  # Apply a list of labels to libraries. Labels must be formatted as a comma-delimited list. e.g. label1, label2, label3
  tags:
```


## Contrast Assess Properties

Use the properties in this section to control Assess in the agent. 

The sampling settings allow you to control which requests the agent tracks and which it ignores.

The rules setting allows you to control which Assess rules are disabled. Contact Contrast support
for a complete list of rules 

```yaml
assess:

  # Include this property to determine if the Assess feature should be enabled. If this property is not present, the decision is delegated to the Contrast UI.
  enable:

  # Apply a list of labels to vulnerabilities and preflight messages. Labels must be formatted as a comma-delimited list. e.g. label1, label2, label3
  tags:

  # Value options are `ALL`, `SOME`, or `NONE`.
  stacktraces:

  sampling:

    # Set to `false` to disable sampling.
    enable:

    # This property indicates how many requests to analyze in each window before sampling begins. e.g. 5
    baseline:

    # This property indicates that every *nth* request after the baseline is analyzed. e.g. 10
    request_frequency:

    # This property indicates the duration for which a sample set is valid. e.g. 180_000
    window_ms:

  rules:

    # Define a list of Assess rules to disable in the agent. The rules must be formatted as a comma-delimited list. 
    #  Example - Set "rule-1,rule-2" to disable rule 1 and rule 2.
    disabled_rules:
```
Properties formatted as list/grid


## Contrast Protect Properties

Use the properties in this section to control Protect features.

Contact Contrast support if you wish to control individual Protect rules.
```yaml
protect:

  # Use the properties in this section to determine if the Protect feature should be enabled. If this property is not present, the decision is delegated to the Contrast UI.
  enable:
```

## Application Properties

Use the properties in this section to control the application(s) hosting this agent.

```yaml
application:

  # Override the reported application name. 
  name:

  # Override the reported application path. 
  path:

  # Add the name of the application group this application should be associated with in the Contrast UI.
  group:

  # Add the application code this application should use in the Contrast UI.
  code:

  # Override the reported application version. 
  version:

  # Apply labels to an application. Labels must be formatted as a comma-delimited list. e.g. label1, label2, label3
  tags:

  # Define a set of key=value pairs (which conforms to RFC 2253) for specifying user-defined metadata associated with the application. The set must be formatted as a comma-delimited list of `key=value` pairs. 
  #  Example - "business-unit=accounting, office=Baltimore"
  metadata: 
```

## Server Properties 

Use the properties in this section to set metadata for the server hosting this agent.

```yaml
server:

  # Override the reported server name. 
  name:

  # Override the reported server path. 
  path:

  # Override the reported server type. 
  type:

  # Override the reported server build. 
  build:

  # Override the reported server version.
  version:

  # Set the name of the environment this server should be associated with in the Contrast UI.
  environment:

  # Apply a list of labels to the server. Labels must be formatted as a comma-delimited list. e.g. label1, label2, label3 
  tags: label1,label2,label3
```
