<!-- 
title: "Python Agent Configuration Template"
description: "Template for Python Agent and Service configuration"
tags: "installation python django flask pyramid agent service configuration"
-->

Go to the Python [Configuration Properties](installation-pythonconfig.html#python-config) article for more information about this template.

```
# ==============================================================================
# Use the properties in this YAML file to configure a
# Contrast agent. Go to https://docs.contrastsecurity.com/ to
# determine the order of precedence for configuration values.
# ==============================================================================


# Only set this property if you want to turn off Contrast. Set to
# `true` to turn the agent on; set to `false` to turn the agent off.
# enable: true

# ==============================================================================
# api
# Use the properties in this section to connect the agent to the Contrast UI.
# ==============================================================================
api:

  # ********************** REQUIRED **********************
  # Set the URL for the Contrast UI.
  url: https://app.contrastsecurity.com/Contrast

  # ********************** REQUIRED **********************
  # Set the API key needed to communicate with the Contrast UI.
  api_key: NEEDS_TO_BE_SET

  # ********************** REQUIRED **********************
  # Set the service key needed to communicate with the Contrast
  # UI. It is used to calculate the Authorization header.
  service_key: NEEDS_TO_BE_SET

  # ********************** REQUIRED **********************
  # Set the user name used to communicate with the Contrast
  # UI. It is used to calculate the Authorization header.
  user_name: NEEDS_TO_BE_SET

  # Set the path to which the agent should store the
  # currently used configuration from the Contrast UI.
  # last_config_path: ./tmp/config

  # ============================================================================
  # api.certificate
  # Use the following properties for communication
  # with the Contrast UI using certificates.
  # ============================================================================
  # certificate:

    # If set to `false`, the agent will ignore the
    # certificate configuration in this section.
    # enable: true

    # Set the absolute or relative path to a CA for communication
    # with the Contrast UI using a self-signed certificate.
    # ca_file: NEEDS_TO_BE_SET

    # Set the absolute or relative path to the Certificate
    # PEM file for communication with the Contrast UI.
    # cert_file: NEEDS_TO_BE_SET

    # Set the absolute or relative path to the Key PEM
    # file for communication with the Contrast UI.
    # key_file: NEEDS_TO_BE_SET

# ==============================================================================
# agent
# Use the properties in this section to control the way and frequency
# with which the agent communicates to logs and the Contrast UI.
# ==============================================================================
agent:

  # ============================================================================
  # agent.logger
  # Define the following properties to set logging values.
  # If the following properties are not defined, the
  # agent uses the logging values from the Contrast UI.
  # ============================================================================
  # logger:

    # Enable diagnostic logging by setting a path to a log file.
    # While diagnostic logging hurts performance, it generates
    # useful information for debugging Contrast. The value set here
    # is the location to which the agent saves log output. If no
    # log file exists at this location, the agent creates a file.
    #  
    # Example - */opt/Contrast/contrast.log* creates a log in the
    # */opt/Contrast* directory, and rotates it automatically as needed.
    # path: ./contrast_agent.log

    # Set the the log output level. Valid options are
    # `ERROR`, `WARN`, `INFO`, `DEBUG`, and `TRACE`.
    # level: ERROR

    # Override the name of the process the agents uses in logs.
    # progname: Contrast Agent

  # ============================================================================
  # agent.security_logger
  # Define the following properties to set security
  # logging values. If not defined, the agent uses the
  # security logging (CEF) values from the Contrast UI.
  # ============================================================================
  # security_logger:

    # Set the file to which the agent logs security events.
    # path: /.contrast/security.log

    # Set the log level for security logging. Valid options
    # are `ERROR`, `WARN`, `INFO`, `DEBUG`, and `TRACE`.
    # level: ERROR

    # Change the Contrast security logger from a file-sized based rolling
    # scheme to a date-based rolling scheme. At midnight server time,
    # the log from the previous day is renamed to *file_name.yyyy-MM-dd*.
    # Note - this scheme does not have a size limit; manual log
    # pruning will be required. This flag must be set to use the
    # backups and size flags. Value options are `true` or `false`.
    # roll_daily: NEEDS_TO_BE_SET

    # Specify the file size cap (in MB) of each log file.
    # roll_size: NEEDS_TO_BE_SET

    # Specify the number of backup logs that the agent will create before
    # Contrast cleans up the oldest file. A value of `0` means that no backups
    # are created, and the log is truncated when it reaches its size cap.
    #  
    # Note - this property must be used with
    # `agent.security_logger.roll_daily=false`; otherwise,
    # Contrast continues to log daily and disregard this limit.
    # backups: NEEDS_TO_BE_SET

    # ==========================================================================
    # agent.security_logger.syslog
    # Define the following properties to set Syslog values. If the properties
    # are not defined, the agent uses the Syslog values from the Contrast UI.
    # ==========================================================================
    # syslog:

      # Set to `true` to enable Syslog logging.
      # enable: NEEDS_TO_BE_SET

      # Set the IP address of the Syslog server
      # to which the agent should send messages.
      # ip: NEEDS_TO_BE_SET

      # Set the port of the Syslog server to
      # which the agent should send messages.
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

  # ============================================================================
  # agent.service
  # The following properties are used by the Contrast Service.
  # ============================================================================
  service:

    # Set to `false` to disallow the service to be started, and
    # effectively disable the agent, if read by the service. If the
    # agent reads this property, it disallows service auto-start.
    # enable: true

    # If this property is defined, the service is
    # listening on a Unix socket at the defined path.
    # socket: /tmp/service.sock

    # ********************** REQUIRED **********************
    # Set the the hostname or IP address of the Contrast
    # service to which the Contrast agent should report.
    host: localhost

    # ********************** REQUIRED **********************
    # Set the the port of the Contrast service
    # to which the Contrast agent should report.
    port: 30555

    # ==========================================================================
    # agent.service.logger
    # The following properties are used by the logger in the
    # Contrast service. If the properties are not defined, the
    # service uses the logging values from the Contrast UI.
    # ==========================================================================
    # logger:

      # Set the location to which the Contrast service saves log output.
      # If no log file exists at this location, the service creates one.
      #  
      # Example - */opt/Contrast/contrast_service.log* will
      # create a log in the */opt/Contrast* directory.
      # path: ./contrast_service.log

      # Set the the log output level. Options are `OFF`, `FATAL`,
      # `ERROR`, `WARN`, `INFO`, `DEBUG`, `TRACE`, and `ALL`.
      # level: ERROR

  # ============================================================================
  # agent.python
  # The following properties apply to any Python agent-wide configurations.
  # ============================================================================
  # python: {}

# ==============================================================================
# inventory
# Use the properties in this section to override the inventory features.
# ==============================================================================
# inventory:

  # Set to `false` to disable inventory features in the agent.
  # enable: true

  # Apply a list of labels to libraries. Labels must be foratted
  # as a comma-delimited list. \n Example - label1, label2, label3
  # tags: NEEDS_TO_BE_SET

# ==============================================================================
# protect
# Use the properties in this section to override Protect features.
# ==============================================================================
# protect:

  # Use the properties in this section to determine if the
  # Protect feature should be enabled. If this property is not
  # present, the decision is delegated to the Contrast UI.
  # enable: true

  # ============================================================================
  # protect.rules
  # Use the following properties to set simple rule configurations.
  # ============================================================================
  # rules:

    # Define a list of Protect rules to disable in the agent.
    # The rules must be formatted as a comma-delimited list.
    # disabled_rules: NEEDS_TO_BE_SET

    # ==========================================================================
    # protect.rules.bot-blocker
    # Use the following properties to configure
    # if and how the agent blocks bots.
    # ==========================================================================
    # bot-blocker:

      # Set to `true` for the agent to block known bots.
      # enable: false

    # ==========================================================================
    # protect.rules.sql-injection
    # Use the following properties to override a specific
    # Protect rule. The key is the rule ID in the
    # Contrast UI with dashes replaced by underscores.
    # ==========================================================================
    # sql-injection:

      # Set the mode of the rule. Value options are
      # `monitor`, `block`, `block_at_perimeter`, or off.
      #  
      # Note - If a setting says, "if blocking is enabled",
      # the setting can be `block` or `block_at_perimeter`.
      # mode: monitor

    # ==========================================================================
    # protect.rules.cmd-injection
    # Use the following properties to configure
    # how the command injection rule works.
    # ==========================================================================
    # cmd-injection:

      # Set the mode of the rule. Value options are
      # `monitor`, `block`, `block_at_perimeter`, or `off`.
      #  
      # Note - If a setting says, "if blocking is enabled",
      # the setting can be `block` or `block_at_perimeter`.
      # mode: monitor

    # ==========================================================================
    # protect.rules.path-traversal
    # Use the following properties to configure
    # how the path traversal rule works.
    # ==========================================================================
    # path-traversal:

      # Set the mode of the rule. Value options are
      # `monitor`, `block`, `block_at_perimeter`, or `off`.
      #  
      # Note - If a setting says, "if blocking is enabled",
      # the setting can be `block` or `block_at_perimeter`.
      # mode: monitor

    # ==========================================================================
    # protect.rules.method-tampering
    # Use the following properties to configure
    # how the method tampering rule works.
    # ==========================================================================
    # method-tampering:

      # Set the mode of the rule. Value options are
      # `monitor`, `block`, `block_at_perimeter`, or `off`.
      #  
      # Note - If a setting says, "if blocking is enabled",
      # the setting can be `block` or `block_at_perimeter`.
      # mode: monitor

    # ==========================================================================
    # protect.rules.reflected-xss
    # Use the following properties to configure how
    # the reflected cross-site scripting rule works.
    # ==========================================================================
    # reflected-xss:

      # Set the mode of the rule. Value options are
      # `monitor`, `block`, `block_at_perimeter`, or `off`.
      #  
      # Note - If a setting says, "if blocking is enabled",
      # the setting can be `block` or `block_at_perimeter`.
      # mode: monitor

    # ==========================================================================
    # protect.rules.xxe
    # Use the following properties to configure
    # how the XML external entity works.
    # ==========================================================================
    # xxe:

      # Set the mode of the rule. Value options are
      # `monitor`, `block`, `block_at_perimeter`, or `off`.
      #  
      # Note - If a setting says, "if blocking is enabled",
      # the setting can be `block` or `block_at_perimeter`.
      # mode: monitor

# ==============================================================================
# application
# Use the properties in this section for
# the application(s) hosting this agent.
# ==============================================================================
# application:

  # Override the reported application name.
  #  
  # Note - On Java systems where multiple, distinct applications may be
  # served by a single process, this configuration causes the agent to report
  # all discovered applications as one application with the given name.
  # name: NEEDS_TO_BE_SET

  # Override the reported application path.
  # path: NEEDS_TO_BE_SET

  # Add the name of the application group with which this
  # application should be associated in the Contrast UI.
  # group: NEEDS_TO_BE_SET

  # Add the application code this application should use in the Contrast UI.
  # code: NEEDS_TO_BE_SET

  # Override the reported application version.
  # version: NEEDS_TO_BE_SET

  # Apply labels to an application. Labels must
  # be formatted as a comma-delimited list.
  # Example - label1,label2,label3
  # tags: NEEDS_TO_BE_SET

  # Define a set of key=value pairs (which conforms to RFC 2253) for
  # specifying user-defined metadata associated with the application. The
  # set must be formatted as a comma-delimited list of `key=value` pairs.
  # Example - "business-unit=accounting, office=Baltimore"
  # metadata: NEEDS_TO_BE_SET

# ==============================================================================
# server
# Use the properties in this section to set
# metadata for the server hosting this agent.
# ==============================================================================
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

  # Apply a list of labels to the server. Labels
  # must be formatted as a comma-delimited list.
  # Example - label1,label2,label3
  # tags: NEEDS_TO_BE_SET

```
