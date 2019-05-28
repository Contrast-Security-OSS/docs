<!--
title: "YAML configuration template for the .NET Core agent "
description: "YAML file template for configuring .NET Core agent properties"
tags: "installation agent .NET Core YAML configuration properties"
-->

Go to the [YAML Properties](installation-netcoreconfig.html#netcore-yaml) article for more information about this template.

```yaml
#================================================================================================================================================================================
#  
#  Use the properties in this YAML file to configure a Contrast agent. Go to https://docs.contrastsecurity.com/ to determine the order of precedence for configuration values. 
#  
#================================================================================================================================================================================


#================================================================================
# Contrast
# Use the properties in this section to connect the agent to the Contrast UI.
#================================================================================
contrast:

  # Only set this property if you want to turn off Contrast. Set to `true` to turn the agent on; set to `false` to turn the agent off.
  # enable: true

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

  # Set the version of the TLS protocol the agent uses to communicate with the Contrast UI. 
  #  The .NET agent default behavior is (SecurityProtocolType.Tls | SecurityProtocolType.Tls11 | SecurityProtocolType.Tls12).
  # tls_versions: tls1|tls2|tls3

  #======================================================================================
  # Proxy
  # Use the following properties for communication with the Contrast UI over a proxy.
  #======================================================================================
  # proxy:

    # Add a property value to determine if the agent should communicate with the Contrast UI over a proxy. If a property value is not present, the presence of a valid proxy host and port determines enabled status.
    # enable: NEEDS_TO_BE_SET

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

  
  #================================================================================================================================================================
  # Logger
  # Define the following properties to set logging values. If the following properties are not defined, the agent uses the logging values from the Contrast UI.
  #================================================================================================================================================================
  # logger:

    # Set the the log output level. Valid options are `ERROR`, `WARN`, `INFO`, `DEBUG`, and `TRACE`.
    # level: ERROR

  #===========================================================================================================================================================
  # Security_logger
  # Define the following properties to set security logging values. If not defined, the agent uses the security logging (CEF) values from the Contrast UI.
  #===========================================================================================================================================================
  # security_logger:

    # Set the log level for security logging. Value options are `OFF`, `FATAL`, `ERROR`, `WARN`, `INFO`, `DEBUG`, `TRACE`, and `ALL`. Set this property to `OFF` to disable security logging.
    # level: NEEDS_TO_BE_SET

    # Specify if connection should be encrypted or plaintext. Value options are `ENCRYPTED` or `UNENCRYPTED`.
    # connection_type: NEEDS_TO_BE_SET

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
      
  #===============================================================================
  # polling
  # The following properties apply to .NET agent communication with Contrast UI
  #===============================================================================
  polling:

    # Set the frequency with which the agent sends application activity to the Contrast UI.  This affects how quickly inventory activity (such route coverage, technologies) and protect activity (attacks, blocks) shows up in Contrast UI.
    app_activity_ms: 30_000

    # Set the the frequency with which the agent sends server updates to the Contrast UI. This also affects how long it takes the agent to pick up changes made in Contrast UI.  
    server_activity_ms: 60_000      

  #==========================================================================
  # Dotnet
  # The following properties apply to any .NET agent-wide configurations.
  #==========================================================================
  # dotnet:

    # Indicate that the agent should allow CLR optimizations of JIT-compiled methods.
    # enable_instrumentation_optimizations: true

    # Indicate that the agent should allow the CLR to inline methods that are not instrumented by Contrast.
    # enable_jit_inlining: true
    
    # Indicate that the agent should not check for other profilers before starting.
    # skip_profiler_check: false

    # Valid values are `full` or `web`. `Full` indicates instrumenting all threading operations to fully follow dataflow. `Web` indicates following dataflow only through built-in sync and async web operations, but not user-managed threads/tasks. Using `web` can improve agent performance.
    # thread_analysis: full

#===========================================================================
# Inventory
# Use the properties in this section to override the inventory features.
#===========================================================================
# inventory:

  # Set to `false` to disable inventory features in the agent.
  # enable: true

  # Apply a list of labels to libraries. Labels must be foratted as a comma-delimited list. \n Example - label1, label2, label3
  # tags: NEEDS_TO_BE_SET

#==========================================================
# Assess
# Use the properties in this section to control Assess.
#==========================================================
# assess:

  # Include this property to determine if the Assess feature should be enabled. If this property is not present, the decision is delegated to the Contrast UI.
  # enable: true

  # Control the values captured by Assess vulnerability events. `Full` captures most values by calling ToString on objects, which can provide more info but causes increased memory usage. `Minimal` has better performance as it only captures String type objects as strings and uses type name for other object type values.
  # event_detail: minimal

  # Apply a list of labels to vulnerabilities and preflight messages. Labels must be formatted as a comma-delimited list. \n Example - label1, label2, label3
  # tags: NEEDS_TO_BE_SET

  # Value options are `ALL`, `SOME`, or `NONE`.
  # stacktraces: ALL

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

#==================================================================================
# Application
# Use the properties in this section for the application(s) hosting this agent.
#==================================================================================
# application:

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

  # Override the reported server environment.
  # environment: development

  # Apply a list of labels to the server. Labels must be formatted as a comma-delimited list. 
  #  Example - label1,label2,label3 
  # tags: NEEDS_TO_BE_SET

```
