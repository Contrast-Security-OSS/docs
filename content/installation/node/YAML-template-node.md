<!--
title: "YAML configuration template for the Node agent "
description: "YAML file template for configuring Node agent properties"
tags: "installation node agent YAML configuration rules properties"
-->

Go to the Node [YAML Properties](installation-nodeconfig.html#node-yaml) article for more information about this template.

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

  # Set the default request timeout.
  # timeout_ms: NEEDS_TO_BE_SET

  # ============================================================================
  # api.certificate
  # Use the following properties for communication
  # with the Contrast UI using certificates.
  # ============================================================================
  # certificate:

    # If set to `false`, the agent will ignore the
    # certificate configuration in this section.
    # enable: true

    # Allows the agent to communicate data, even if Contrast's cert
    # can't be verified against supplied list of CAs.
    # ingnore_cert_errors: NEEDS_TO_BE_SET

    # Set the absolute or relative path to a CA for communication
    # with the Contrast UI using a self-signed certificate.
    # ca_file: NEEDS_TO_BE_SET

    # Set the absolute or relative path to the Certificate
    # PEM file for communication with the Contrast UI.
    # cert_file: NEEDS_TO_BE_SET

    # Set the absolute or relative path to the Key PEM
    # file for communication with the Contrast UI.
    # key_file: NEEDS_TO_BE_SET

    # If the Key file requires a password, it can be set here or in
    # the matching ENV value (`CONTRAST__CERTIFICATE__KEY_PASSWORD`).
    # key_password: NEEDS_TO_BE_SET

  # ============================================================================
  # api.proxy
  # Use the following properties for communication
  # with the Contrast UI over a proxy.
  # ============================================================================
  # proxy:

    # Add a property value to determine if the agent should communicate with
    # the Contrast UI over a proxy. If a property value is not present, the
    # presence of a valid proxy host and port determines enabled status.
    # enable: NEEDS_TO_BE_SET

    # Set this property as an alternate for `scheme://host:port`. It takes
    # precedence over the other settings, if specified; however, an error
    # will be thrown if both the URL and individual properties are set.
    # url: NEEDS_TO_BE_SET

# ==============================================================================
# agent
# Use the properties in this section to control the way and frequency
# with which the agent communicates to logs and the Contrast UI.
# ==============================================================================
# agent:

  # Set to limit the length of Error stack traces to a specified number.
  # stack_trace_limit: 10

  # ============================================================================
  # agent.auto_update
  # TODO
  # ============================================================================
  # auto_update:

    # Set to `true` for the agent to automatically upgrade to newer versions.
    # enable: true

    # Set the location to which to save the
    # agent artifact before installation.
    # path: /tmp/contrast/

    # Set the length of time to wait before aborting the auto-update attempt.
    # timeout_ms: NEEDS_TO_BE_SET

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

    # Set to `false` for the agent to always create a
    # new log file instead of appending and rolling.
    # append: true

    # Set to `true` to log to STDOUT. Set to `false`
    # for the agent to suppress output to STDOUT.
    # stdout: NEEDS_TO_BE_SET

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

  # ============================================================================
  # agent.heap_dump
  # The following properties are used to trigger heap dumps from within
  # the agent to snapshot the behavior of instrumented applications.
  # ============================================================================
  # heap_dump:

    # Set to `true` for the agent to automatically
    # take heap dumps of the instrumented application.
    # enable: false

    # Set the location to which to save the heap dump files. If relative,
    # the path is determined based on the process' working directory.
    # path: contrast_heap_dumps

    # Set the amount of time to wait, in milliseconds, after
    # agent startup to begin taking heap dumps.
    # delay_ms: 10_000

    # Set the amount of time to wait, in milliseconds, between each heap dump.
    # window_ms: 10_000

    # Set the number of heap dumps to take before disabling this feature.
    # count: 5

  # ============================================================================
  # agent.node
  # The following properties apply to any Node configurations.
  # ============================================================================
  # node:

    # Set the location of the application's *package.json* file.
    # app_root: NEEDS_TO_BE_SET

# ==============================================================================
# inventory
# Use the properties in this section to override the inventory features.
# ==============================================================================
# inventory:

  # Apply a list of labels to libraries. Labels must be foratted
  # as a comma-delimited list. \n Example - label1, label2, label3
  # tags: NEEDS_TO_BE_SET

# ==============================================================================
# assess
# Use the properties in this section to control Assess.
# ==============================================================================
# assess:

  # Include this property to determine if the Assess
  # feature should be enabled. If this property is not
  # present, the decision is delegated to the Contrast UI.
  # enable: true

  # Apply a list of labels to vulnerabilities and
  # preflight messages. Labels must be formatted as a
  # comma-delimited list. \n Example - label1, label2, label3
  # tags: NEEDS_TO_BE_SET

  # ============================================================================
  # assess.sampling
  # Use the following properties to control sampling in the agent.
  # ============================================================================
  # sampling:

    # Set to `false` to disable sampling.
    # enable: true

    # This property indicates the number of requests
    # to analyze in each window before sampling begins.
    # baseline: 5

# ==============================================================================
# protect
# Use the properties in this section to override Protect features.
# ==============================================================================
# protect: {}

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

  # Add the application code this application should use in the Contrast UI.
  # Example - "the-coolest-node-app"
  # code: NEEDS_TO_BE_SET

  # Override the reported application path.
  # path: NEEDS_TO_BE_SET

  # Add the name of the application group with which this
  # application should be associated in the Contrast UI.
  # group: NEEDS_TO_BE_SET

  # Override the reported application version.
  # version: NEEDS_TO_BE_SET

  # Pass arguments to the underlying application.
  # args: NEEDS_TO_BE_SET

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
