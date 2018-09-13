<!--
title: "YAML configuration properties for the Java agent "
description: "Instructions for configuring Java agent properties via YAML file"
tags: "installation java agent YAML configuration rules properties"
-->

Contrast supports YAML-based configuration for the Java agent. This allows you to store configuration on disk and override that configuration with environment variable and CLI args, if necessary.

> **Note:** While property formatting in YAML configuration files is shared by all Contrast agents, each agent must use its specified file. 

Configuration values use the following order of precedence: 

1. Corporate rule (e.g., expired license overrides `assess.enable`)
1. System property value
1. Environment variable value
1. User configuration file value 
<!-- TODO , for the java agent this includes the legacy file and the YAMl file. Should we specify both or just not mention the legacy file (which no one should be using anymore, I think.-->
1. Contrast UI value
1. Default value

<!-- Other use and file location info. This will be done after CONTRAST-26125  -->

You can also set all of the following YAML properties as system properties. Derive the system property key from the YAML by joining every node with a "." until you reach the bottom property. 

> **Example:** If you want to override the `contrast` property, as given below, you can set `-Dcontrast.enable=false` as a system property.
  * contrast: 
    * enable: `true`


## Contrast UI Properties

Use the properties in this section to connect the Java agent to the Contrast UI. The proxy settings allow the agent to communicate with the Contrast UI over a proxy.


* **contrast**: 

  * **enable**: Only set this property if you want to turn off Contrast. Set to `true` to turn the agent on; set to `false` to turn the agent off.
  * **url**: Set the URL for the Contrast UI. <br> Example: https://app.contrastsecurity.com/Contrast. **Required.** 
  * **api_key**: Set the API key needed to communicate with the Contrast UI. **Required.**
  * **service_key**: Set the service key needed to communicate with the Contrast UI. It is used to calculate the Authorization header. **Required.**
  * **user_name**: Set the user name used to communicate with the Contrast UI. It is used to calculate the Authorization header. **Required.**

  * **proxy**:
    * **enable**: Add a property value to determine if the agent should communicate with the Contrast UI over a proxy. If a property value is not present, the presence of a valid proxy host and port determines enabled status. Value options are `true` or `false`
    * **host**: Set the proxy host. It must be set with port and scheme. <br> Example: `localhost`
    * **port**: Set the proxy port. It must be set with host and scheme. <br> Example: `1234`
    * **scheme**: Set the proxy scheme. It must be set with host and port. <br> Example: `http` or `https`
    * **url**: Set as an alternate for `scheme://host:port`. It takes precedence over the other settings, if specified; however, an error will be thrown if both the URI and individual properties are set.
    * **user**: Set the proxy user.
    * **pass**: Set the proxy password.
    * **auth_type**: Set the proxy authentication type. Value options are `NTLM`, `Digest`, and `Basic`.


## Contrast Agent Properties

Use the properties in this section to control the way and frequency with which the Java agent communicates to logs and to the Contrast UI.
If these values are not set, the agent will use the values set in the Contrast UI.

### Diagnostic Logging

Use the properties in this section to control diagnostic logging. These logs allow us to diagnose any issues you may be having with the agent.

<!-- Maybe a question for Jenny, should we include the 'agent' node here? -->

* **agent**:

  * **logger**:
    * **path**: Enable diagnostic logging by setting a path to a log file. While diagnostic logging hurts performance, it generates useful information for debugging Contrast. The value set here is the location to which the agent saves log output. If no log file exists at this location, the agent creates a file. <br> Example: */opt/Contrast/contrast.log* creates a log in the */opt/Contrast* directory, and rotates it automatically as needed.
    * **level**: Set the the log output level. Value options are `OFF`, `FATAL`, `ERROR`, `WARN`, `INFO`, `DEBUG`, `TRACE`, and `ALL`.
    * **roll_daily**: Change the Contrast logger from a file-sized based rolling scheme to a date-based rolling scheme. At midnight server time, the log from the previous day log is renamed to *file_name.yyyy-MM-dd*. You must set this flag to use the backups and size flags. <br> Note: This scheme does not have a size limit; manual log pruning is required. <br> Example: `false`
    * **roll_size**: Set the roll size for log files unless `agent.logger.roll_daily=true`. <br> Example: `100M`
    * **backups**: Set the number of backup files to keep. <br> Example: `10`

### Security Logging

Use the properties in this section to control security logging. These logs allow you to watch Protect as it monitors and blocks attacks against your application. They are written to the specified file in the Common Event Format (CEF). The Syslog settings allow you to send security logs to remote servers.


  * **security_logger**:
    * **path**: Set the file to which the agent logs security events. <br> Example: */.contrast/security.log*
    * **level**: Set the log level for security logging. Value options are `OFF`, `FATAL`, `ERROR`, `WARN`, `INFO`, `DEBUG`, `TRACE`, and `ALL`. Set this property to `OFF` to disable security logging.
    * **roll_daily**: Change the Contrast security logger from a file-sized based rolling scheme to a date-based rolling scheme. At midnight server time, the log from the previous day is renamed to *file_name.yyyy-MM-dd*. This flag must be set to use the backups and size flags. Value options are `true` or `false`. <br> Note: This scheme does not have a size limit; manual log pruning will be required.
    * **roll_size**: Specify the file size cap (in MB) of each log file.
    * **backups**: Specify the number of backup logs that the agent will create before Contrast cleans up the oldest file. A value of `0` means that no backups are created, and the log is truncated when it reaches its size cap. <br> Note: This property must be used with `agent.security_logger.roll_daily=false`; otherwise, Contrast continues to log daily and disregard this limit.

    * **syslog**:
      * **enable**: Set to `true` to enable Syslog logging.
      * **ip**: Set the IP address of the Syslog server to which the agent should send messages.
      * **port**: Set the port of the Syslog server to which the agent should send messages.
      * **facility**: Set the facility code of the messages the agent sends to Syslog.
      * **severity_exploited**: Set the log level of Exploited attacks. Value options are `ALERT`, `CRITICAL`, `ERROR`, `WARNING`, `NOTICE`, `INFO`, and `DEBUG`.
      * **severity_blocked**: Set the log level of Blocked attacks. Value options are `ALERT`, `CRITICAL`, `ERROR`, `WARNING`, `NOTICE`, `INFO`, and `DEBUG`.
      * **severity_probed**: Set the log level of Probed attacks. Value options are `ALERT`, `CRITICAL`, `ERROR`, `WARNING`, `NOTICE`, `INFO`, and `DEBUG`.


<!-- ### Agent-Specific Properties

That work will be done in CONTRAST-26166

Words here...

Properties formatted as list/grid -->


## Inventory Properties

Use the properties in this section to control inventory features in the Java agent.

* **inventory**:
  * **enable**: Set to `false` to disable Inventory features in the agent.
  * **library_dirs**: Define a list of directories where libraries are stored. Directories must be formatted as a semicolon-delimited list. <br> Example: `path1;path2;path3`
  * **library_depth**: Set the maximum archive unpacking depth when analyzing libraries. <br> Example: `10`
  * **prune_package_details**: Set to `false` to disable Inventory features in the agent. 
  * **tags**: Apply a list of labels to libraries. Labels must be formatted as a comma-delimited list. <br> Example: `label1, label2, label3`

## Contrast Assess Properties

Use the properties in this section to control Assess in the Java agent. The sampling settings allow you to control which requests the agent tracks and which it ignores. The rules setting allows you to control which Assess rules are disabled. 

> **Note:** If you need a complete list of rules, use the **Support** widget in OpenDocs to contact Contrast's Customer Support team.  


* **assess**:

  * **enable**: Include this property to determine if the Assess feature should be enabled. If this property is not present, the decision is delegated to the Contrast UI. <br> Example: `true`
  * **tags**: Apply a list of labels to vulnerabilities and preflight messages. Labels must be formatted as a comma-delimited list. Example: `label1, label2, label3`
  * **stacktraces**: Value options are `ALL`, `SOME`, or `NONE`.

  * **samplings**:
    * **enable**: Set to `false` to disable sampling.
    * **baseline**: This property indicates how many requests to analyze in each window before sampling begins. <br> Example: `5`
    * **request_frequency**: This property indicates that every *nth* request after the baseline is analyzed. <br> Example: `10`
    * **window_ms**: This property indicates the duration for which a sample set is valid. <br> Example: `180_000`

  * **rules**:
    * **disabled_rules**: Define a list of Assess rules to disable in the agent. The rules must be formatted as a comma-delimited list. <br> Example: Set "reflected-xss,sql-injection" to disable the reflected-xss rule and the sql-injection rule.


## Contrast Protect Properties

Use the properties in this section to control Protect features and rules.

* **protect**:
  * **enable**: Use the properties in this section to determine if the Protect feature should be enabled. If this property is not present, the decision is delegated to the Contrast UI. <br> Example: `true`

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

    
## Application Properties

Use the properties in this section to control the application(s) hosting this agent.

* application:
  * **name**: Override the reported application name.
  * **path**: Override the reported application path.
  * **group**: Add the name of the application group with which this application should be associated in the Contrast UI.
  * **code**: Add the application code this application should use in the Contrast UI.
  * **version**: Override the reported application version.
  * **tags**: Apply labels to an application. Labels must be formatted as a comma-delimited list. <br> Example: `label1,label2,label3`
  * **metadata**: Define a set of key=value pairs (which conforms to RFC 2253) for specifying user-defined metadata associated with the application. The set must be formatted as a comma-delimited list of `key=value` pairs. <br> Example: "business-unit=accounting, office=Baltimore"

## Server Properties 

Use the properties in this section to set metadata for the server hosting this agent.

* **server**:

  * **name**: Override the reported server name. <br> Example: `test-server-1`
  * **build**: Override the reported server build.
  * **version**: Override the reported server version.
  * **environment**: Override the reported server environment. <br> Example: `development`
  * **tags**: Apply a list of labels to the server. Labels must be formatted as a comma-delimited list. <br> Example: `label1,label2,label3`

