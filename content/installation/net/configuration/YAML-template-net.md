<!--
title: "YAML configuration template for the .NET agent "
description: "YAML file template for configuring .NET agent properties"
tags: "installation net agent YAML configuration rules properties"
-->

Go to the [YAML Properties](installation-netconfig.html#net-yaml) article for more information about this template.

```yaml
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

  # Set the version of the TLS protocol the agent uses to communicate with the
  # Contrast UI. The .NET agent default behavior is (SecurityProtocolType.Tls
  # | SecurityProtocolType.Tls11 | SecurityProtocolType.Tls12).
  # tls_versions: (tls|tls11|tls12)

  # ============================================================================
  # api.certificate
  # Use the following properties for communication
  # with the Contrast UI using certificates.
  # ============================================================================
  certificate:

    # If set to `false`, the agent will ignore the
    # certificate configuration in this section.
    # enable: true

    # Determine the location from which the agent loads a client certificate. Value options include `File` or `Store`
    # certificate_location: 

    # Set the absolute path to the client certificate's .CER file for communication with Contrast UI. 
    # The `certificate_location` property must be set to `File`.
    # cer_file: 

    # Specify the name of certificate store to open. The `certificate_location` property must be set to `Store`.
    # Value options include `AuthRoot`, `CertificateAuthority`, `My`, `Root`, `TrustedPeople`, or `TrustedPublisher`.
    # store_name: 

    # Specify the location of the certificate store. The `certificate_location` property must be set to `Store`.
    # Value options include `CurrentUser` or `LocalMachine`.
    # store_location: 

    # Specify the type of value the agent uses to find the certificate in the collection of certificates from the certificate store.
    # The `certificate_location` property must be set to `Store`.
    # Value options include `FindByIssuerDistinguishedName`, `FindByIssuerName`, `FindBySerialNumber`, `FindBySubjectDistinguishedName`, `FindBySubjectKeyIdentifier`, `FindBySubjectName`, or `FindByThumbprint`.
    # find_type: 

    # Specify the value the agent uses in combination with `find_type` to find a certification in the certificate store.
    # Note: The agent will use the first certificate from the certificate store that matches this search criteria.
    # find_value: 

  # ============================================================================
  # api.proxy
  # Use the following properties for communication
  # with the Contrast UI over a proxy.
  # ============================================================================
  proxy:

    # Add a property value to determine if the agent should communicate with
    # the Contrast UI over a proxy. If a property value is not present, the
    # presence of a valid proxy host and port determines enabled status.
    # enable: NEEDS_TO_BE_SET

    # Set the URL of the proxy server.
    # url: NEEDS_TO_BE_SET

    # Set the proxy user.
    # user: NEEDS_TO_BE_SET

    # Set the proxy password.
    # pass: NEEDS_TO_BE_SET

    # Set the proxy authentication type. Value
    # options are `NTLM`, `Digest`, and `Basic`.
    # auth_type: NEEDS_TO_BE_SET

# ==============================================================================
# agent
# Use the properties in this section to control the way and frequency
# with which the agent communicates to logs and the Contrast UI.
# ==============================================================================
agent:

  # ============================================================================
  # agent.auto_update
  # ============================================================================
  auto_update:

    # Set to `true` for the agent to automatically upgrade to newer versions.
    # enable: true

    # Set the frequency with which the agent checks for updates.
    # Valid values are `daily` for every 24 hours and on
    # startup, or `startup` for *only* when service starts up.
    # checks: daily

  # ============================================================================
  # agent.logger
  # Define the following properties to set logging values.
  # If the following properties are not defined, the
  # agent uses the logging values from the Contrast UI.
  # ============================================================================
  logger:

    # Set the the log output level. Valid options are
    # `ERROR`, `WARN`, `INFO`, `DEBUG`, and `TRACE`.
    # level: ERROR

  # ============================================================================
  # agent.security_logger
  # Define the following properties to set security
  # logging values. If not defined, the agent uses the
  # security logging (CEF) values from the Contrast UI.
  # ============================================================================
  security_logger:

    # Set the log level for security logging. Valid options
    # are `ERROR`, `WARN`, `INFO`, `DEBUG`, and `TRACE`.
    # level: ERROR

    # Specify if connection should be encrypted or plaintext.
    # Value options are `ENCRYPTED` or `UNENCRYPTED`.
    # connection_type: NEEDS_TO_BE_SET

    # ==========================================================================
    # agent.security_logger.syslog
    # Define the following properties to set Syslog values. If the properties
    # are not defined, the agent uses the Syslog values from the Contrast UI.
    # ==========================================================================
    syslog:

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
  # agent.dotnet
  # The following properties apply to any .NET agent-wide configurations.
  # ============================================================================
  dotnet:

    # Set a list of application pool names that the agent does not instrument
    # or analyze. Names must be formatted as a comma-separated list.
    # app_pool_blacklist: NEEDS_TO_BE_SET

    # Set a list of application pool names that the agent
    # instruments or analyzes. If set, other application pools
    # are ignored. Whitelist takes precedence over blacklist.
    # Names must be formatted as a comma-separated list.
    # app_pool_whitelist: NEEDS_TO_BE_SET

    # Enable instrumentation and analysis of application pools targeting CLR2.
    # enable_clr2_analysis: true

    # Enable an experimental profiler chaining feature to allow Contrast
    # to work alongside other tools that use the CLR Profiling API.
    # enable_chaining: false

    # Indicate that the agent should produce a report
    # that summarizes application hosting on the server
    # (e.g., CLR versions, bitness or pipeline modes).
    # enable_dvnr: true

    # Indicate that the agent should allow CLR
    # optimizations of JIT-compiled methods.
    # enable_instrumentation_optimizations: true

    # Indicate that the agent should allow the CLR to
    # inline methods that are not instrumented by Contrast.
    # enable_jit_inlining: true

    # Indicate that the agent should automatically restart IIS to
    # apply certain configuration changes (e.g., app_pool_blacklist).
    # restart_iis_on_config_change: true

    # Indicate that the agent should not check
    # for other profilers before starting.
    # skip_profiler_check: false

    # Valid values are `full` or `web`. `Full` indicates instrumenting all
    # threading operations to fully follow dataflow. `Web` indicates following
    # dataflow only through built-in sync and async web operations, but not
    # user-managed threads/tasks. Using `web` can improve agent performance.
    # thread_analysis: full

    # Responses for request paths (e.g., HttpRequest.Path)
    # that match this regex are not analyzed. See
    # https://docs.contrastsecurity.com/troubleshooting-netissues.html#zero
    # for more information.
    # web_module_whitelist: WebResource.axd

# ==============================================================================
# inventory
# Use the properties in this section to override the inventory features.
# ==============================================================================
inventory:

  # Set to `false` to disable inventory features in the agent.
  # enable: true

  # Apply a list of labels to libraries. Labels must be foratted
  # as a comma-delimited list. \n Example - label1, label2, label3
  # tags: NEEDS_TO_BE_SET

# ==============================================================================
# assess
# Use the properties in this section to control Assess.
# ==============================================================================
assess:

  # Include this property to determine if the Assess
  # feature should be enabled. If this property is not
  # present, the decision is delegated to the Contrast UI.
  # enable: true

  # Control the values captured by Assess vulnerability events. `Full`
  # captures most values by calling ToString on objects, which can
  # provide more info but causes increased memory usage. `Minimal`
  # has better performance as it only captures String type objects
  # as strings and uses type name for other object type values.
  # event_detail: minimal

  # Apply a list of labels to vulnerabilities and
  # preflight messages. Labels must be formatted as a
  # comma-delimited list. \n Example - label1, label2, label3
  # tags: NEEDS_TO_BE_SET

  # Value options are `ALL`, `SOME`, or `NONE`.
  # stacktraces: ALL

  # ============================================================================
  # assess.sampling
  # Use the following properties to control sampling in the agent.
  # ============================================================================
  sampling:

    # Set to `false` to disable sampling.
    # enable: true

    # This property indicates the number of requests
    # to analyze in each window before sampling begins.
    # baseline: 5

    # This property indicates that every *nth*
    # request after the baseline is analyzed.
    # request_frequency: 10

    # This property indicates the duration for which a sample set is valid.
    # window_ms: 180_000

  # ============================================================================
  # assess.rules
  # Use the following properties to control simple rule configurations.
  # ============================================================================
  rules:

    # Define a list of Assess rules to disable in the agent.
    # The rules must be formatted as a comma-delimited list.
    #  
    # Example - Set "reflected-xss,sql-injection" to disable
    # the reflected-xss rule and the sql-injection rule.
    # disabled_rules: NEEDS_TO_BE_SET

# ==============================================================================
# protect
# Use the properties in this section to override Protect features.
# ==============================================================================
protect:

  # Use the properties in this section to determine if the
  # Protect feature should be enabled. If this property is not
  # present, the decision is delegated to the Contrast UI.
  # enable: true

  # ============================================================================
  # protect.analysis_cache
  # Use the properties in this section to control the behavior of the
  # cache used to store the results of analysis for duplicate inputs.
  # ============================================================================
  # analysis_cache:

    # Set to `false` to disable the use of the analysis cache.
    # enable: true

  # ============================================================================
  # protect.rules
  # Use the following properties to set simple rule configurations.
  # ============================================================================
  rules:

    # Define a list of Protect rules to disable in the agent.
    # The rules must be formatted as a comma-delimited list.
    # disabled_rules: NEEDS_TO_BE_SET

    # ==========================================================================
    # protect.rules.bot-blocker
    # Use the following properties to configure
    # if and how the agent blocks bots.
    # ==========================================================================
    bot-blocker:

      # Set to `true` for the agent to block known bots.
      # enable: false

    # ==========================================================================
    # protect.rules.sql-injection
    # Use the following properties to override a specific
    # Protect rule. The key is the rule ID in the
    # Contrast UI with dashes replaced by underscores.
    # ==========================================================================
    sql-injection:

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
    cmd-injection:

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
    path-traversal:

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
    method-tampering:

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
    reflected-xss:

      # Set the mode of the rule. Value options are
      # `monitor`, `block`, `block_at_perimeter`, or `off`.
      #  
      # Note - If a setting says, "if blocking is enabled",
      # the setting can be `block` or `block_at_perimeter`.
      # mode: monitor

    # ==========================================================================
    # protect.rules.untrusted-deserialization
    # Use the following properties to configure how
    # the untrusted deserialization scripting rule works.
    # ==========================================================================
    untrusted-deserialization:

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
    xxe:

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
application:

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
server:

  # Override the reported server name.
  # name: test-server-1

  # Override the reported server environment.
  # environment: development

  # Apply a list of labels to the server. Labels
  # must be formatted as a comma-delimited list.
  # Example - label1,label2,label3
  # tags: NEEDS_TO_BE_SET

```
