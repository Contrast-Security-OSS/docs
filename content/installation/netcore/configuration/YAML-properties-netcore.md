<!--
title: "YAML configuration for the .NET Core agent "
description: "Instructions and template for configuring .NET Core agent properties via YAML file"
tags: "installation agent .NET Core YAML configuration properties"
-->

Contrast supports YAML-based configuration for the .NET Core agent. This allows you to store configuration on disk that you can override with environment variables or command line arguments. Go to the [.NET Core YAML Template](installation-netcoreconfig.html#netcore-template) for fully formatted properties that you can copy and use in your own configuration files. 

> **Note:** While all Contrast agents share the same property formatting in YAML configuration files, each agent must use its specified file. 

## Load Path

Configuration values use the following order of precedence: 

1. Corporate rule (e.g., expired license overrides `assess.enable`)
2. Specific environmental variable
3. Generic environment variable value
4. User configuration file value
5. Contrast UI value
6. Default value 

The *contrast_security.yaml* file should be placed on the file system using one of the following methods:

* Specify the path to the YAML file with the environment variable `CONTRAST_CONFIG_PATH`.
* Place the *contrast_security.yaml* file in the data directory specified during agent install. (The default location is * %ProgramData%\Contrast\dotnet\*. As a result, the default file path would be *%ProgramData%\Contrast\dotnet\contrast_security.yaml*.)


## Configuration Options

### Contrast UI properties

Use the properties in this section to connect the .NET Core agent to the Contrast UI. The proxy settings allow the agent to communicate with the Contrast UI over a proxy.

* **contrast**: 

  * **enable**: Only set this property if you want to turn off Contrast. Set to `true` to turn the agent on; set to `false` to turn the agent off.
  * **url**: Set the URL for the Contrast UI. <br> Example: https://app.contrastsecurity.com/Contrast. **Required.** 
  * **api_key**: Set the API key needed to communicate with the Contrast UI. **Required.**
  * **service_key**: Set the service key needed to communicate with the Contrast UI. It is used to calculate the Authorization header. **Required.**
  * **user_name**: Set the user name used to communicate with the Contrast UI. It is used to calculate the Authorization header. **Required.**
  * **tls_versions**: The .NET Core agent default behavior is (SecurityProtocolType.Tls | SecurityProtocolType.Tls11 | SecurityProtocolType.Tls12). <br> Example: `tls1|tls2|tls3`

  * **certificate**: 
    * **enable**: If set to `false`, the certificate configuration in this section will be ignored.
  
  * **proxy**:
    * **enable**: Add a property value to determine if the agent should communicate with the Contrast UI over a proxy. If a property value is not present, the presence of a valid proxy host and port determines enabled status. Value options are `true` or `false`
    * **user**: Set the proxy user.
    * **pass**: Set the proxy password.
    * **auth_type**: Set the proxy authentication type. Value options are `NTLM`, `Digest`, and `Basic`.


### Contrast agent properties

Use the properties in this section to control the way and frequency with which the .NET Core agent communicates to logs and to the Contrast UI.
If these values are not set, the agent will use the values set in the Contrast UI.

All properties in this section must be put under the `agent` node, as shown in the [YAML template](installation-netconfig.html#net-template). 

#### Diagnostic logging

Use the properties in this section to control diagnostic logging. These logs allow us to diagnose any issues you may be having with the agent.

<!-- Should we put the higher-level 'agent' bullet in these subsections as well? -->  

  * **logger**:
    * **level**: Set the the log output level. Value options are `OFF`, `FATAL`, `ERROR`, `WARN`, `INFO`, `DEBUG`, `TRACE`, and `ALL`.


#### Security logging

Use the properties in this section to control security logging. These logs allow you to watch Protect as it monitors and blocks attacks against your application. They are written to the specified file in the Common Event Format (CEF). The Syslog settings allow you to send security logs to remote servers.

  * **security_logger**:

    * **syslog**:
      * **enable**: Set to `true` to enable Syslog logging.
      * **ip**: Set the IP address of the Syslog server to which the agent should send messages.
      * **port**: Set the port of the Syslog server to which the agent should send messages.
      * **facility**: Set the facility code of the messages the agent sends to Syslog.
      * **severity_exploited**: Set the log level of Exploited attacks. Value options are `ALERT`, `CRITICAL`, `ERROR`, `WARNING`, `NOTICE`, `INFO`, and `DEBUG`.
      * **severity_blocked**: Set the log level of Blocked attacks. Value options are `ALERT`, `CRITICAL`, `ERROR`, `WARNING`, `NOTICE`, `INFO`, and `DEBUG`.
      * **severity_probed**: Set the log level of Probed attacks. Value options are `ALERT`, `CRITICAL`, `ERROR`, `WARNING`, `NOTICE`, `INFO`, and `DEBUG`.


#### Agent-specific properties

The following properties apply to any .NET Core agent-wide configurations. <!-- More words here... -->

  * **dotnet**:
    * **enable_instrumentation_optimizations**: Indicate that the agent should allow CLR optimizations of JIT-compiled methods. 
    * **enable_jit_inlining**: Indicate that the agent should allow the CLR to inline methods that are not instrumented by Contrast.
    * **skip_profiler_check**: Indicate that the agent should not check for other profilers before starting.
    * **thread_analysis**: Valid values are `full` or `web`. `Full` indicates instrumenting all threading operations to fully follow dataflow. `Web` indicates following dataflow only through built-in sync and async web operations, but not user-managed threads/tasks. Using `web` can improve agent performance.


### Inventory properties

Use the properties in this section to control inventory features in the .NET Core agent.

  * **inventory**:
    * **enable**: Set to `false` to disable Inventory features in the agent.
    * **tags**: Apply a list of labels to libraries. Labels must be formatted as a comma-delimited list. <br> Example: `label1, label2, label3`


### Contrast Assess properties

Use the properties in this section to control Assess in the .NET Core agent. The sampling settings allow you to control which requests the agent tracks and which it ignores. The rules setting allows you to control which Assess rules are disabled. 

> **Note:** If you need a complete list of rules, use the **Support** widget in OpenDocs to contact Contrast's Customer Support team.  


* **assess**:

  * **enable**: Include this property to determine if the Assess feature should be enabled. If this property is not present, the decision is delegated to the Contrast UI. <br> Example: `true`
  * **event_detail**: Control the values captured by Assess vulnerability events. `Full` captures most values by calling ToString on objects, which can provide more info but causes increased memory usage. `Minimal` has better performance as it only captures String type objects as strings and uses type name for other object type values.
  * **tags**: Apply a list of labels to vulnerabilities and preflight messages. Labels must be formatted as a comma-delimited list. Example: `label1, label2, label3`
  * **stacktraces**: Value options are `ALL`, `SOME`, or `NONE`.

  * **samplings**:
    * **enable**: Set to `false` to disable sampling.
    * **baseline**: This property indicates how many requests to analyze in each window before sampling begins. <br> Example: `5`
    * **request_frequency**: This property indicates that every *nth* request after the baseline is analyzed. <br> Example: `10`
    * **window_ms**: This property indicates the duration for which a sample set is valid. <br> Example: `180_000`

  * **rules**:
    * **disabled_rules**: Define a list of Assess rules to disable in the agent. The rules must be formatted as a comma-delimited list. <br> Example: Set "reflected-xss,sql-injection" to disable the reflected-xss rule and the sql-injection rule.


### Contrast Protect properties

Use the properties in this section to control Protect features and rules.

* **protect**:

  * **enable**: Use the properties in this section to determine if the Protect feature should be enabled. If this property is not present, the decision is delegated to the Contrast UI.

  * **rules**:
    * **disabled_rules**: Define a list of Protect rules to disable in the agent. The rules must be formatted as a comma-delimited list.

    * **bot-blocker**: 
      * **enable**: Set to `true` for the agent to block known bots.

    * **sql-injection**:
      * **mode**: Set the mode of the rule. Value options are `monitor`, `block`, `block_at_perimeter`, or `off`. <br> Note: If a setting says, "if blocking is enabled", the setting can be `block` or `block_at_perimeter`.

    * **cmd-injection**:
      * **mode**: Set the mode of the rule. Value options are `monitor`, `block`, `block_at_perimeter`, or `off`. <br> Note: If a setting says, "if blocking is enabled", the setting can be `block` or `block_at_perimeter`.

    * **path-traversal**:
      * **mode**: Set the mode of the rule. Value options are `monitor`, `block`, `block_at_perimeter`, or `off`. <br> Note: If a setting says, "if blocking is enabled", the setting can be `block` or `block_at_perimeter`.

    * **method-tampering**:
      * **mode**: Set the mode of the rule. Value options are `monitor`, `block`, `block_at_perimeter`, or `off`. <br> Note: If a setting says, "if blocking is enabled", the setting can be `block` or `block_at_perimeter`.

    * **reflected-xss**:
      * **mode**: Set the mode of the rule. Value options are `monitor`, `block`, `block_at_perimeter`, or `off`. <br> Note: If a setting says, "if blocking is enabled", the setting can be `block` or `block_at_perimeter`.

    * **xxe**:
      * **mode**: Set the mode of the rule. Value options are `monitor`, `block`, `block_at_perimeter`, or `off`. <br> Note: If a setting says, "if blocking is enabled", the setting can be `block` or `block_at_perimeter`.


### Application properties

Use the properties in this section to control the application(s) hosting this agent.

* application:
  * **group**: Add the name of the application group with which this application should be associated in the Contrast UI.
  * **version**: Override the reported application version.
  * **tags**: Apply labels to an application. Labels must be formatted as a comma-delimited list. <br> Example: `label1,label2,label3`
  * **metadata**: Define a set of key=value pairs (which conforms to RFC 2253) for specifying user-defined metadata associated with the application. The set must be formatted as a comma-delimited list of `key=value` pairs. <br> Example: "business-unit=accounting, office=Baltimore"


### Server properties 

Use the properties in this section to set metadata for the server hosting this agent.

* **server**:

  * **name**: Override the reported server name. <br> Example: `test-server-1`
  * **environment**: Override the reported server environment. <br> Example: `development`
  * **tags**: Apply a list of labels to the server. Labels must be formatted as a comma-delimited list. <br> Example: `label1,label2,label3`



