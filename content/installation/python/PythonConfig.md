<!-- 
title: "Python Agent Configuration"
description: "Configuring the Python Agent and Service"
tags: "installation python django flask pyramid agent service configuration"
-->

The Python agent and Contrast Service use a YAML file to alter the agent behavior. 

## Load Path

The configuration file is always called *contrast_security.yaml* no matter where it's located. The Python agent loads the configuration YAML from the following paths in order of precedence:

1. The current working directory (e.g., *./contrast_security.yaml*)
2. Within the server's *etc/contrast* directory (e.g., */etc/contrast/contrast_security.yaml*)
3. Within the server's *etc* directory (e.g., */etc/contrast_security.yaml*)

## General Configuration Options

The configuration YAML consists of four sections. The agent and service may share a common configuration file, but only some options and sections are applicable to each process.

* `contrast`: Options for locating and communicating with the Dashboard of the Contrast interface
  * `url`: URL to connect to the Contrast application
  * `api_key`: API key of the organization
  * `service_key`:  Service Key of the organization. It is used to calculate the Authorization header.
  * `user_name`: Username of user in the Contrast application
* `agent`: Options for communicating between the agent and the service
  * `logger`:
    * `path`: Filename of the Contrast Security log file for the agent (*contrast_agent.log*)
    * `level`: Level of logging details (DEBUG, INFO, WARN, ERROR)
    * `progname`: Name used to identify the process within the log file (Contrast Agent)
  * `security_logger`:
    * `path`: Name of the log file to which the security events are written (*security.log*)
    * `level`: Level of the security logging details (DEBUG, INFO, WARN, ERROR)
  * `service`: Options for the running service, including how the agent can locate it
    * `host`: Location the agent uses to communicate with the service (e.g., localhost)
    * `port`: Port the agent uses to communicate with the service (e.g., 30555)
    * `logger`:
      * `path`: Filename of the Contrast Security log file for the service (*contrast_service.log*)
      * `level`: Level of logging detail for the logger (DEBUG, INFO, WARN, ERROR) 
      * `progname`: Name to identify the process with the service log (Contrast Service)
* `application`: Information about the application that is being protected by the Python agent
  * `name`: Name under which to register the application in the Contrast application. If not provided, the agent finds an appropriate application name.
  * `group`: Group name for this application
  * `tags`: Comma-delimited list of tags for this application
  * `metadata`: Comma-delimited list of key=value pairs (which conforms to RFC 2253) for specifying metadata associated with the application. 
* `server`: Information about the server on which the web application is hosted
  * `name`: Name under which to register the server in the Contrast application 
  * `environment`: Environment as which applications on this server should register themselves on the Contrast application (Development); this does not affect servers that already exist in Contrast
  * `tags`: Comma-delimited list of tags for this server


## Complete Configuration Options

````yaml
#  
#  Use the properties in this YAML file to configure a Contrast agent. Go to 
#  https://docs.contrastsecurity.com/ to determine the order of precedence 
#  for configuration values. 
#  

# Contrast
# Use the properties in this section to connect the agent to the Contrast UI.
contrast:

  # Only set this property if you want to turn off Contrast. Set to `true` 
  # to turn the agent on; set to `false` to turn the agent off.
  # enable: true

  # Set the URL for the Contrast UI.
  url: https://app.contrastsecurity.com/Contrast

  # Set the API key needed to communicate with the Contrast UI.
  api_key: NEEDS_TO_BE_SET

  # Set the service key needed to communicate with the Contrast UI. It is used 
  # to calculate the Authorization header.
  service_key: NEEDS_TO_BE_SET

  # Set the user name used to communicate with the Contrast UI. It is used to 
  # calculate the Authorization header.
  user_name: NEEDS_TO_BE_SET

# Agent
# Use the properties in this section to control the way and frequency with 
# which the agent communicates to logs and the Contrast UI.
agent:

  # Logger
  # Define the following properties to set logging values. If the following 
  # properties are not defined, the agent uses the logging values from the 
  # Contrast UI.
  # logger:

    # The value set here is the location to which the agent saves log output. 
    # If no log file exists at this location, the agent creates a file. 
    # Example - */opt/Contrast/contrast.log* creates a log in the 
    # */opt/Contrast* directory, and rotates it automatically as needed.
    # path: ./contrast_agent.log

    # Set the the log output level. Value options are `ERROR`, `WARN`, `INFO`, `DEBUG`.
    # level: ERROR

    # Override the name of the process the agents uses in logs.
    # progname: Contrast Agent

    # Set to `true` for the agent to tag logs with \"!AM!\" for the metrics tool.
    # metrics: true

  # Security_logger
  # Define the following properties to set security logging values. If not 
  # defined, the agent uses the security logging (CEF) values from the Contrast UI.
  # security_logger:

    # Set the file to which the agent logs security events.
    # path: /.contrast/security.log

    # Set the log level for security logging. Value options are `OFF`, `FATAL`, 
    # `ERROR`, `WARN`, `INFO`, `DEBUG`, `TRACE`, and `ALL`. Set this property 
    # to `OFF` to disable security logging.
    # level: NEEDS_TO_BE_SET

    # Syslog
    # Define the following properties to set Syslog values. If the properties are 
    # not defined, the agent uses the Syslog values from the Contrast UI.
    # syslog:

      # Set to `true` to enable Syslog logging.
      # enable: NEEDS_TO_BE_SET

      # Set the IP address of the Syslog server to which the agent should send 
      # messages.
      # ip: NEEDS_TO_BE_SET

      # Set the port of the Syslog server to which the agent should send 
      # messages.
      # port: NEEDS_TO_BE_SET

      # Set the facility code of the messages the agent sends to Syslog.
      # facility: NEEDS_TO_BE_SET

      # Set the log level of Exploited attacks. Value options are `ALERT`, 
      # `CRITICAL`, `ERROR`, `WARNING`, `NOTICE`, `INFO`, and `DEBUG`.
      # severity_exploited: NEEDS_TO_BE_SET

      # Set the log level of Blocked attacks. Value options are `ALERT`, 
      # `CRITICAL`, `ERROR`, `WARNING`, `NOTICE`, `INFO`, and `DEBUG`.
      # severity_blocked: NEEDS_TO_BE_SET

      # Set the log level of Probed attacks. Value options are `ALERT`, 
      # `CRITICAL`, `ERROR`, `WARNING`, `NOTICE`, `INFO`, and `DEBUG`.
      # severity_probed: NEEDS_TO_BE_SET

  # Service
  # The following properties are used by the Contrast Service.
  service:

    # Set to `false` to disallow the service to be started, and effectively 
    # disable the agent, if read by the service. If the agent reads this 
    # property, it disallows service auto-start.
    # enable: true

    # If this property is defined, the service is listening on a Unix socket 
    # at the defined path. Only supported by the webserver agent.
    # socket: /tmp/service.sock

    # Set the the hostname or IP address of the Contrast service to which the 
    # Contrast agent should report.
    host: localhost

    # Set the the port of the Contrast service to which the Contrast agent 
    # should report.
    port: 30555

    # Logger
    # The following properties are used by the logger in the Contrast service. 
    # If the properties are not defined, the service uses the logging values 
    # from the Contrast UI.
    # logger:

      # Set the location to which the Contrast service saves log output. If no 
      # log file exists at this location, the service creates one. 
      #  Example -  */opt/Contrast/contrast_service.log* will create a log in 
      #  the */opt/Contrast* directory.
      # path: ./contrast_service.log

      # Set the the log output level. Options are `ERROR`, `WARN`, `INFO`, `DEBUG`.
      # level: ERROR

      # Override the name of the process used in logs.
      # progname: Contrast Service

# Inventory
# Use the properties in this section to override the inventory features.
# inventory:

  # Set to `false` to disable inventory features in the agent.
  # enable: true

  # Apply a list of labels to libraries. Labels must be foratted as a 
  # comma-delimited list. \n Example - label1, label2, label3
  # tags: NEEDS_TO_BE_SET

# Protect
# Use the properties in this section to override Protect features.
# protect:

  # Use the properties in this section to determine if the Protect feature should be 
  # enabled. If this property is not present, the decision is delegated to the Contrast UI.
  # enable: true

  # Rules
  # Use the following properties to set simple rule configurations.
  # rules:

    # Define a list of Protect rules to disable in the agent. The rules must be 
    # formatted as a comma-delimited list.
    # disabled_rules: NEEDS_TO_BE_SET

# Application
# Use the properties in this section for the application(s) hosting this agent.
# application:

  # Override the reported application name.
  # name: NEEDS_TO_BE_SET

  # Override the reported application path.
  # path: NEEDS_TO_BE_SET

  # Add the name of the application group with which this application should be 
  # associated in the Contrast UI.
  # group: NEEDS_TO_BE_SET

  # Add the application code this application should use in the Contrast UI.
  # code: NEEDS_TO_BE_SET

  # Override the reported application version.
  # version: NEEDS_TO_BE_SET

  # Apply labels to an application. Labels must be formatted as a comma-delimited 
  # list. 
  #  Example - label1,label2,label3
  # tags: NEEDS_TO_BE_SET

  # Define a set of key=value pairs (which conforms to RFC 2253) for specifying 
  # user-defined metadata associated with the application. The set must be 
  # formatted as a comma-delimited list of `key=value` pairs. 
  #  Example - "business-unit=accounting, office=Baltimore"
  # metadata: NEEDS_TO_BE_SET

# Server
# Use the properties in this section to set metadata For the server hosting this 
# agent.
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

  # Apply a list of labels to the server. Labels must be formatted as a 
  # comma-delimited list. 
  #  Example - label1,label2,label3 
  # tags: NEEDS_TO_BE_SET


````
