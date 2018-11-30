<!--
title: "YAML configuration template for the Java agent "
description: "YAML file template for configuring the Java agent"
tags: "installation java agent YAML configuration rules properties"
-->

Go to the [YAML Properties](installation-javaconfig.html#java-yaml) article for more information about this template. 


```
#===============================================================================
# Use the properties in this YAML file to configure a Contrast agent.
# Go to https://docs.contrastsecurity.com/ to determine the order of precedence
# for configuration values.
#===============================================================================


# Only set this property if you want to turn off Contrast. Set to `true` to turn he agent on; set to `false` to turn the agent off.
# enable: true

#================================================================================
# Api
# Use the properties in this section to connect the agent to the Contrast UI.
#================================================================================
api:

  # ********************** REQUIRED **********************
  # Set the URL for the Contrast UI.
  url: https://app.contrastsecurity.com/Contrast

  # ********************** REQUIRED **********************
  # Set the API key needed to communicate with the Contrast UI.
  api_key: NEEDS_TO_BE_SET

  # ********************** REQUIRED **********************
  # Set the service key needed to communicate with the Contrast UI. It is used to calculate the Authorization header.
  service_key: NEEDS_TO_BE_SET

  # ********************** REQUIRED **********************
  # Set the user name used to communicate with the Contrast UI. It is used to calculate the Authorization header.
  user_name: NEEDS_TO_BE_SET

  #======================================================================================
  # Proxy
  # Use the following properties for communication with the Contrast UI over a proxy.
  #======================================================================================
  # proxy:

    # Add a property value to determine if the agent should communicate with the Contrast UI over a proxy. If a property value is not present, the presence of a valid proxy host and port determines enabled status.
    # enable: NEEDS_TO_BE_SET

    # Set the proxy host. It must be set with port and scheme.
    # host: localhost

    # Set the proxy port. It must be set with host and scheme.
    # port: 1234

    # Set the proxy scheme (e.g., `http` or `https`). It must be set with host and port.
    # scheme: http

    # Set this property as an alternate for `scheme://host:port`. It takes precedence over the other settings, if specified; however, an error will be thrown if both the URL and individual properties are set.
    # url: NEEDS_TO_BE_SET

    # Set the proxy user.
    # user: NEEDS_TO_BE_SET

    # Set the proxy password.
    # pass: NEEDS_TO_BE_SET

    # Set the proxy authentication type. Value options are `NTLM`, `Digest`, and `Basic`.
    # auth_type: NEEDS_TO_BE_SET

#=======================================================================================================================================
# Agent
# Use the properties in this section to control the way and frequency with which the agent communicates to logs and the Contrast UI.
#=======================================================================================================================================
# agent:

  # Set how long to run the agent before shutting down itself (in milliseconds). A negative value disables scheduled shutdown.
  # shutdown_time_ms: NEEDS_TO_BE_SET

  # Enable to deinstrumentation classes on shutdown. If this is not enabled, the agent disables sensors on shutdown, but leaves instrumentation.
  # deinstrument_on_shutdown: NEEDS_TO_BE_SET

  #================================================================================================================================================================
  # Logger
  # Define the following properties to set logging values. If the following properties are not defined, the agent uses the logging values from the Contrast UI.
  #================================================================================================================================================================
  # logger:

    # Enable diagnostic logging by setting a path to a log file. While diagnostic logging hurts performance, it generates useful information for debugging Contrast. The value set here is the location to which the agent saves log output. If no log file exists at this location, the agent creates a file. 
    #  Example - */opt/Contrast/contrast.log* creates a log in the */opt/Contrast* directory, and rotates it automatically as needed.
    # path: ./contrast_agent.log

    # Set the the log output level. Valid options are `ERROR`, `WARN`, `INFO`, `DEBUG`, and `TRACE`.
    # level: ERROR

    # Set to `true` to log to STDOUT. Set to `false` for the agent to suppress output to STDOUT.
    # stdout: NEEDS_TO_BE_SET

    # Set to `true` to log to STDERR.
    # stderr: NEEDS_TO_BE_SET

    # Change the Contrast logger from a file-sized based rolling scheme to a date-based rolling scheme. At midnight server time, the log from the previous day log is renamed to *file_name.yyyy-MM-dd*. Note - this scheme does not have a size limit; manual log pruning is required. You must set this flag to use the backups and size flags.
    # roll_daily: false

    # Set the roll size for log files unless `agent.logger.roll_daily=true`.
    # roll_size: 100M

    # Set the number of backup files to keep.
    # backups: 10

  #===========================================================================================================================================================
  # Security_logger
  # Define the following properties to set security logging values. If not defined, the agent uses the security logging (CEF) values from the Contrast UI.
  #===========================================================================================================================================================
  # security_logger:

    # Set the file to which the agent logs security events.
    # path: /.contrast/security.log

    # Set the log level for security logging. Valid options are `ERROR`, `WARN`, `INFO`, `DEBUG`, and `TRACE`.
    # level: ERROR

    # Change the Contrast security logger from a file-sized based rolling scheme to a date-based rolling scheme. At midnight server time, the log from the previous day is renamed to *file_name.yyyy-MM-dd*. Note - this scheme does not have a size limit; manual log pruning will be required. This flag must be set to use the backups and size flags. Value options are `true` or `false`.
    # roll_daily: NEEDS_TO_BE_SET

    # Specify the file size cap (in MB) of each log file.
    # roll_size: NEEDS_TO_BE_SET

    # Specify the number of backup logs that the agent will create before Contrast cleans up the oldest file. A value of `0` means that no backups are created, and the log is truncated when it reaches its size cap. 
    #  Note - this property must be used with `agent.security_logger.roll_daily=false`; otherwise, Contrast continues to log daily and disregard this limit.
    # backups: NEEDS_TO_BE_SET

    #====================================================================================================================================================
    # Syslog
    # Define the following properties to set Syslog values. If the properties are not defined, the agent uses the Syslog values from the Contrast UI.
    #====================================================================================================================================================
    # syslog:

      # Set to `true` to enable Syslog logging.
      # enable: NEEDS_TO_BE_SET

      # Set the IP address of the Syslog server to which the agent should send messages.
      # ip: NEEDS_TO_BE_SET

      # Set the port of the Syslog server to which the agent should send messages.
      # port: NEEDS_TO_BE_SET

      # Set the facility code of the messages the agent sends to Syslog.
      # facility: NEEDS_TO_BE_SET

      # Set the log level of Exploited attacks. Value options are `ALERT`, `CRITICAL`, `ERROR`, `WARNING`, `NOTICE`, `INFO`, and `DEBUG`.
      # severity_exploited: NEEDS_TO_BE_SET

      # Set the log level of Blocked attacks. Value options are `ALERT`, `CRITICAL`, `ERROR`, `WARNING`, `NOTICE`, `INFO`, and `DEBUG`.
      # severity_blocked: NEEDS_TO_BE_SET

      # Set the log level of Probed attacks. Value options are `ALERT`, `CRITICAL`, `ERROR`, `WARNING`, `NOTICE`, `INFO`, and `DEBUG`.
      # severity_probed: NEEDS_TO_BE_SET

  #==========================================================================
  # Java
  # The following properties apply to any Java agent-wide configurations.
  #==========================================================================
  # java:

    # Configure the Java agent to skip its application discovery algorithm, and instead associate all libraries, vulnerabilities, and web traffic to a single application with the name specified by this property. This configuration is preferred when deploying Java SE applications with embedded web servers (e.g., applications built with Spring Boot, Dropwizard, and embedded Jetty). When used with an application server, this configuration associates all web traffic with the single, standalone application, including web traffic handled by application server-hosted endpoints that would not be associated with a discovered application otherwise. 
    #  Note - This settings takes preferences over the `application.name` setting.
    # standalone_app_name: NEEDS_TO_BE_SET

#===========================================================================
# Inventory
# Use the properties in this section to override the inventory features.
#===========================================================================
# inventory:

  # Set to `false` to disable inventory features in the agent.
  # enable: true

  # Define a list of directories where libraries are stored. Directories must be formatted as a semicolon-delimited list. \n Example - path1;path2;path3
  # library_dirs: NEEDS_TO_BE_SET

  # Set the maximum archive unpacking depth when analyzing libraries.
  # library_depth: 10

  # Set to `false` to disable inventory features in the agent.
  # prune_package_details: true

  # Apply a list of labels to libraries. Labels must be foratted as a comma-delimited list. \n Example - label1, label2, label3
  # tags: NEEDS_TO_BE_SET

#==========================================================
# Assess
# Use the properties in this section to control Assess.
#==========================================================
# assess:

  # Include this property to determine if the Assess feature should be enabled. If this property is not present, the decision is delegated to the Contrast UI.
  # enable: true

  # Apply a list of labels to vulnerabilities and preflight messages. Labels must be formatted as a comma-delimited list. \n Example - label1, label2, label3
  # tags: NEEDS_TO_BE_SET

  #===================================================================
  # Sampling
  # Use the following properties to control sampling in the agent.
  #===================================================================
  # sampling:

    # Set to `false` to disable sampling.
    # enable: true

    # This property indicates how many requests to analyze in each window before sampling begins.
    # baseline: 5

    # This property indicates that every *nth* request after the baseline is analyzed.
    # request_frequency: 10

    # This property indicates the duration for which a sample set is valid.
    # window_ms: 180_000

  #========================================================================
  # Rules
  # Use the following properties to control simple rule configurations.
  #========================================================================
  # rules:

    # Define a list of Assess rules to disable in the agent. The rules must be formatted as a comma-delimited list. 
    #  Example - Set "reflected-xss,sql-injection" to disable the reflected-xss rule and the sql-injection rule.
    # disabled_rules: NEEDS_TO_BE_SET

#=====================================================================
# Protect
# Use the properties in this section to override Protect features.
#=====================================================================
# protect:

  # Use the properties in this section to determine if the Protect feature should be enabled. If this property is not present, the decision is delegated to the Contrast UI.
  # enable: true

  #====================================================================
  # Rules
  # Use the following properties to set simple rule configurations.
  #====================================================================
  # rules:

    # Define a list of Protect rules to disable in the agent. The rules must be formatted as a comma-delimited list.
    # disabled_rules: NEEDS_TO_BE_SET

    #================================================================================
    # Bot-blocker
    # Use the following properties to configure if and how the agent blocks bots.
    #================================================================================
    # bot-blocker:

      # Set to `true` for the agent to block known bots.
      # enable: false

    #=====================================================================================================================================================
    # Sql-injection
    # Use the following properties to override a specific Protect rule. The key is the rule ID in the Contrast UI with dashes replaced by underscores.
    #=====================================================================================================================================================
    # sql-injection:

      # Set the mode of the rule. Value options are `monitor`, `block`, `block_at_perimeter`, or off. 
      #  Note - If a setting says, "if blocking is enabled", the setting can be `block` or `block_at_perimeter`.
      # mode: monitor

    #====================================================================================
    # Cmd-injection
    # Use the following properties to configure how the command injection rule works.
    #====================================================================================
    # cmd-injection:

      # Set the mode of the rule. Value options are `monitor`, `block`, `block_at_perimeter`, or `off`. 
      #  Note - If a setting says, "if blocking is enabled", the setting can be `block` or `block_at_perimeter`.
      # mode: monitor

    #=================================================================================
    # Path-traversal
    # Use the following properties to configure how the path traversal rule works.
    #=================================================================================
    # path-traversal:

      # Set the mode of the rule. Value options are `monitor`, `block`, `block_at_perimeter`, or `off`. 
      #  Note - If a setting says, "if blocking is enabled", the setting can be `block` or `block_at_perimeter`.
      # mode: monitor

    #===================================================================================
    # Method-tampering
    # Use the following properties to configure how the method tampering rule works.
    #===================================================================================
    # method-tampering:

      # Set the mode of the rule. Value options are `monitor`, `block`, `block_at_perimeter`, or `off`. 
      #  Note - If a setting says, "if blocking is enabled", the setting can be `block` or `block_at_perimeter`.
      # mode: monitor

    #=================================================================================================
    # Reflected-xss
    # Use the following properties to configure how the reflected cross-site scripting rule works.
    #=================================================================================================
    # reflected-xss:

      # Set the mode of the rule. Value options are `monitor`, `block`, `block_at_perimeter`, or `off`. 
      #  Note - If a setting says, "if blocking is enabled", the setting can be `block` or `block_at_perimeter`.
      # mode: monitor

    #=================================================================================
    # Xxe
    # Use the following properties to configure how the XML external entity works.
    #=================================================================================
    # xxe:

      # Set the mode of the rule. Value options are `monitor`, `block`, `block_at_perimeter`, or `off`. 
      #  Note - If a setting says, "if blocking is enabled", the setting can be `block` or `block_at_perimeter`.
      # mode: monitor

    #=============================================================================================
    # Csrf
    # Use the following properties to configure how the cross-site request forgery rule works.
    #=============================================================================================
    # csrf:

      # Set the mode of the rule. Value options are `monitor`, `block`, `block_at_perimeter`, or `off`. 
      #  Note - If a setting says, "if blocking is enabled", the setting can be `block` or `block_at_perimeter`.
      # mode: monitor

#==================================================================================
# Application
# Use the properties in this section for the application(s) hosting this agent.
#==================================================================================
# application:

  # Override the reported application name. 
  #  Note - On Java systems where multiple, distinct applications may be served by a single process, this configuration causes the agent to report all discovered applications as one application with the given name.
  # name: NEEDS_TO_BE_SET

  # Override the reported application path.
  # path: NEEDS_TO_BE_SET

  # Add the name of the application group with which this application should be associated in the Contrast UI.
  # group: NEEDS_TO_BE_SET

  # Add the application code this application should use in the Contrast UI.
  # code: NEEDS_TO_BE_SET

  # Override the reported application version.
  # version: NEEDS_TO_BE_SET

  # Apply labels to an application. Labels must be formatted as a comma-delimited list. 
  #  Example - label1,label2,label3
  # tags: NEEDS_TO_BE_SET

  # Define a set of key=value pairs (which conforms to RFC 2253) for specifying user-defined metadata associated with the application. The set must be formatted as a comma-delimited list of `key=value` pairs. 
  #  Example - "business-unit=accounting, office=Baltimore"
  # metadata: NEEDS_TO_BE_SET

#==========================================================================================
# Server
# Use the properties in this section to set metadata For the server hosting this agent.
#==========================================================================================
# server:

  # Override the reported server name.
  # name: test-server-1

  # Override the reported server path.
  # path: NEEDS_TO_BE_SET

  # Override the reported server type.
  # type: NEEDS_TO_BE_SET

  # Override the reported server build.
  # build: NEEDS_TO_BE_SET

  # Override the reported server version.
  # version: NEEDS_TO_BE_SET

  # Override the reported server environment.
  # environment: development

  # Apply a list of labels to the server. Labels must be formatted as a comma-delimited list. 
  #  Example - label1,label2,label3 
  # tags: NEEDS_TO_BE_SET

```
