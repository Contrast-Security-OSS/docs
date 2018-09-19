<!--
title: "YAML configuration template for the Node agent "
description: "YAML file template for configuring Node agent properties"
tags: "installation node agent YAML configuration rules properties"
-->

Go to the Node [YAML Properties](installation-nodeconfig.html#node-yaml) article for more information about this template.

```
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

  # Set the absolute or relative path to a CA for communication with Contrast UI using a self-signed certificate.
  # ca_file: path/to/ca

  # Set the default request timeout.
  # timeout_ms: NEEDS_TO_BE_SET

  #======================================================================================
  # Proxy
  # Use the following properties for communication with the Contrast UI over a proxy.
  #======================================================================================
  # proxy:

    # Add a property value to determine if the agent should communicate with the Contrast UI over a proxy. If a property value is not present, the presence of a valid proxy host and port determines enabled status.
    # enable: NEEDS_TO_BE_SET

    # Set this property as an alternate for `scheme://host:port`. It takes precedence over the other settings, if specified; however, an error will be thrown if both the URI and individual properties are set.
    # url: NEEDS_TO_BE_SET

#=======================================================================================================================================
# Agent
# Use the properties in this section to control the way and frequency with which the agent communicates to logs and the Contrast UI.
#=======================================================================================================================================
# agent:

  # Set to limit the length of Error stack traces to a specified number.
  # stack_trace_limit: 10

  #=========
  # Auto_update
  #=========
  # auto_update:

    # Set to `true` for the agent to automatically upgrade to newer versions.
    # enable: true

    # Set the location to which to save the agent artifact before installation.
    # path: /tmp/contrast/

    # Set the length of time to wait before aborting the auto-update attempt.
    # timeout_ms: NEEDS_TO_BE_SET

  #================================================================================================================================================================
  # Logger
  # Define the following properties to set logging values. If the following properties are not defined, the agent uses the logging values from the Contrast UI.
  #================================================================================================================================================================
  # logger:

    # Enable diagnostic logging by setting a path to a log file. While diagnostic logging hurts performance, it generates useful information for debugging Contrast. The value set here is the location to which the agent saves log output. If no log file exists at this location, the agent creates a file. 
    #  Example - */opt/Contrast/contrast.log* creates a log in the */opt/Contrast* directory, and rotates it automatically as needed.
    # path: ./contrast_agent.log

    # Set the the log output level. Value options are `OFF`, `FATAL`, `ERROR`, `WARN`, `INFO`, `DEBUG`, `TRACE`, and `ALL`.
    # level: ERROR

    # Set to `false` for the agent to always create a new log file instead of appending and rolling.
    # append: true

    # Set to `false` for the agent to suppress output to STDOUT.
    # stdout: true

  #===========================================================================================================================================================
  # Security_logger
  # Define the following properties to set security logging values. If not defined, the agent uses the security logging (CEF) values from the Contrast UI.
  #===========================================================================================================================================================
  # security_logger:

    # Set the file to which the agent logs security events.
    # path: /.contrast/security.log

    # Set the log level for security logging. Value options are `OFF`, `FATAL`, `ERROR`, `WARN`, `INFO`, `DEBUG`, `TRACE`, and `ALL`. Set this property to `OFF` to disable security logging.
    # level: NEEDS_TO_BE_SET

  #================================================================================================================================================================
  # Node
  # The following properties apply to any Node.js configurations.
  #================================================================================================================================================================
  # node:

    # Explicitly set the location of the application's *package.json* file.
    # app_root: NEEDS_TO_BE_SET

    # Set the limit for lengths of stack traces.
    # stack_trace_limit:

#===========================================================================
# Inventory
# Use the properties in this section to override the inventory features.
#===========================================================================
# inventory:

  # Set to `false` for the agent to not read or report library data.
  # analyze_libraries: true

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

#=====================================================================
# Protect
# Use the properties in this section to override Protect features.
#=====================================================================
# protect:

  #===================================================================
  # Sampling
  # Use the following properties to control sampling in the agent.
  #===================================================================
  # samples:

    # Set the maximum number of Blocked events that the agent reports (per report cycle). 
    # blocked: 25

    # Set the maximum number of Blocked-at-Perimeter events that the agent reports (per report cycle).
    # blocked_at_perimeter: 25

    # Set the maximum number of Effective that the agent reports (per report cycle).
    # exploited: 100

    # Set the maximum number of Ineffective events that the agent reports (per report cycle).
    # ineffective: 50

#==================================================================================
# Application
# Use the properties in this section for the application(s) hosting this agent.
#==================================================================================
# application:

  # Override the reported application name.
  # name: NEEDS_TO_BE_SET

  # Override the reported application path.
  # path: NEEDS_TO_BE_SET

  # Add the name of the application group with which this application should be associated in the Contrast UI.
  # group: NEEDS_TO_BE_SET

  # Override the reported application version.
  # version: NEEDS_TO_BE_SET

  # Pass arguments to the underlying application.
  # args: NEEDS_TO_BE_SET

  # Apply labels to an application. Labels must be formatted as a comma-delimited list. 
  #  Example - label1,label2,label3
  # tags: NEEDS_TO_BE_SET

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
