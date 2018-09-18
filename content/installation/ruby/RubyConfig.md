<!-- 
title: "Ruby Agent Configuration"
description: "Configuring the Ruby Agent and Service"
tags: "installation ruby on rails agent service configuration"
-->

The Ruby agent and service use a YAML file to alter the agent behavior. 

## Load Path

The configuration file is called *contrast_security.yaml* wherever it's located. The Ruby agent and service load the configuration YAML from the following paths in order of precedence:

1. The current working directory (e.g., *./contrast_security.yaml*)
2. A subdirectory called *config*, which is the default for Ruby on Rails applications (e.g., *./config/contrast_security.yaml*)
3. Within the server's *etc/contrast* directory (e.g. */etc/contrast/contrast_security.yaml*)
3. Within the server's *etc* directory (e.g., */etc/contrast_security.yaml*)

Go to the Ruby [YAML Template](installation-rubyconfig.html#ruby-template) for fully formatted properties that you can copy and use in your own configuration files.

## Service Configuration

The Ruby agent launches an executable on startup that also needs access to the configuration files. Since the service is generally launched by the Ruby agent process, it has access to the same configuration file as the agent. However, if the service is started independently, it will attempt to use the same load path described above for its configuration file. 

In other words, the service can share the application's configuration file, if (as is usually the case) the service's working directory is also the base directory of the Rails application. Both the agent and the service use the *./config/contrast_security.yaml* path. 

### Tagging

The Ruby agent supports the full array of tagging messages to the Contrast server. To apply these tags, you must update your configuration files. Tags in the configuration are comma-separated alphanumeric strings. Each tag will be attached to a corresponding message from the agent or service, depending which field is set. To see the appropriate properties for **server**, **application**, and **library** tags, go the given sections below. 

<!-- omit until assess is released 
For Trace tags, update the configuration of the agent. If there isn’t one, add a top-level `assess` field to the *contrast_security.yaml* file. Under that heading, add a `tags` field, which you may set to any comma-separated alphanumeric string.  
-->

## Configuration Options

### Contrast UI properties

Use the properties in this section to connect the agent to the Contrast UI.

* **contrast**: 
  * **enable**: Only set this property if you want to turn off Contrast. Set to `true` to turn the agent on; set to `false` to turn the agent off.
  * **url**: Set the URL for the Contrast UI. **Required.** <br> Example: *https://app.contrastsecurity.com/Contrast*
  * **api_key**: Set the API key needed to communicate with the Contrast UI. **Required.**
  * **service_key**: Set the service key needed to communicate with the Contrast UI. It is used to calculate the Authorization header. **Required.**
  * **user_name**: Set the user name used to communicate with the Contrast UI. It is used to calculate the Authorization header. **Required.**
  * **last_config_path**: Set the path to which the agent should store the currently used configuration from the Contrast UI. <br> Example: *./tmp/config*

### Contrast agent properties

#### Logger

Define the following properties to set logging values. If these properties aren't defined, the agent uses the logging values from the Contrast UI.

* **agent**: Options for communicating between the agent and the service
  * **logger**:
    * **path**: Enable diagnostic logging by setting a path to a log file. While diagnostic logging hurts performance, it generates useful information for debugging Contrast. The value set here is the location to which the agent saves log output. If no log file exists at this location, the agent creates a file. <br> Example - */opt/Contrast/contrast.log* creates a log in the */opt/Contrast* directory, and rotates it automatically as needed.
    * **level**: Set the the log output level. Value options are `OFF`, `FATAL`, `ERROR`, `WARN`, `INFO`, `DEBUG`, `TRACE`, and `ALL`.
    * **progname**: Override the name of the process the agents uses in logs. <br> Example: Contrast Agent
    * **metrics**: Set to `true` for the agent to tag logs with "!AM!" for the metrics tool.

#### Security logger

Define the following properties to set security logging values. If not defined, the agent uses the security logging (CEF) values from the Contrast UI.

  * **security_logger**:
    * **path**: Enable diagnostic logging by setting a path to a log file. While diagnostic logging hurts performance, it generates useful information for debugging Contrast. The value set here is the location to which the agent saves log output. If no log file exists at this location, the agent creates a file. <br> Example: */opt/Contrast/contrast.log* creates a log in the */opt/Contrast* directory, and rotates it automatically as needed.
    * **level**: Set the the log output level. Value options are `OFF`, `FATAL`, `ERROR`, `WARN`, `INFO`, `DEBUG`, `TRACE`, and `ALL`.
    * **roll_daily**: Change the Contrast logger from a file-sized based rolling scheme to a date-based rolling scheme. At midnight server time, the log from the previous day log is renamed to *file_name.yyyy-MM-dd*. You must set this flag to use the backups and size flags. <br> Note: This scheme does not have a size limit; manual log pruning is required. <br> Example: `false`
    * **roll_size**: Set the roll size for log files unless `agent.logger.roll_daily=true`. <br> Example: `100M`
    * **backups**: Set the number of backup files to keep. <br> Example: `10`

##### Syslog 

Define the following properties to set Syslog values. If the properties aren't defined, the agent uses the Syslog values from the Contrast UI.

  * **syslog**:
    * **enable**: Set to `true` to enable Syslog logging.
    * **ip**: Set the IP address of the Syslog server to which the agent should send messages.
    * **port**: Set the port of the Syslog server to which the agent should send messages.
    * **facility**: Set the facility code of the messages the agent sends to Syslog.
    * **severity_exploited**: Set the log level of Exploited attacks. Value options are `ALERT`, `CRITICAL`, `ERROR`, `WARNING`, `NOTICE`, `INFO`, and `DEBUG`.
    * **severity_blocked**: Set the log level of Blocked attacks. Value options are `ALERT`, `CRITICAL`, `ERROR`, `WARNING`, `NOTICE`, `INFO`, and `DEBUG`.
    * **severity_probed**: Set the log level of Probed attacks. Value options are `ALERT`, `CRITICAL`, `ERROR`, `WARNING`, `NOTICE`, `INFO`, and `DEBUG`.


#### Service

The following properties are used by the Contrast Service.

* **service**: 
  * **enable**: Set to `false` to disallow the service to be started, and effectively disable the agent, if read by the service. If the agent reads this property, it disallows service auto-start.
  * **socket**: If this property is defined, the service is listening on a Unix socket at the defined path. <br> Example: /tmp/service.sock
  * **host**: Set the the hostname or IP address of the Contrast service to which the Contrast agent should report. **Required.** <br> Example: `localhost`
  * **port**: Set the the port of the Contrast service to which the Contrast agent should report. **Required.** <br> Example: `30555`
    
##### Logger

The following properties are used by the logger in the Contrast service. If the properties are not defined, the service uses the logging values from the Contrast UI.

  * **logger**:
    * **path**: Set the location to which the Contrast service saves log output. If no log file exists at this location, the service creates one. <br> Example: */opt/Contrast/contrast_service.log* will create a log in the */opt/Contrast* directory.
    * **level**: Set the the log output level. Options are `OFF`, `FATAL`, `ERROR`, `WARN`, `INFO`, `DEBUG`, `TRACE`, and `ALL`.
    * **progname**: Override the name of the process used in logs. <br> Example: Contrast Service


<!-- ### Ruby-specific properties

The following configuration options allow you to fine-tune the Ruby agent.

* `ruby`: Options specific to the Ruby agent
  * `analyze_inventory_async`: If set to `true`, this wraps the initial inventory message in a thread which may speed up the response time on the first request after startup. 
 -->

### Inventory properties 

Use the properties in this section to override the inventory features.

For **library** tags, update the configuration of the agent. If there isn’t one, add a top-level `inventory` field to the *contrast_security.yaml* file. Under that heading, add a `tags` field, which you may set to any comma-separated alphanumeric string. 

* **inventory**:
  * **enable**: Set to `false` to disable Inventory features in the agent.
  * **tags**: Apply a list of labels to libraries. Labels must be formatted as a comma-delimited list. <br> Example: `label1, label2, label3`

### Contrast Assess properties

Use the properties in this section to control Assess.

* **assess**:
  * **enable**: Include this property to determine if the Assess feature should be enabled. If this property is not present, the decision is delegated to the Contrast UI. <br> Example: `true`
  * **tags**: Apply a list of labels to vulnerabilities and preflight messages. Labels must be formatted as a comma-delimited list. Example: `label1, label2, label3`
  * **samplings**:
    * **enable**: Set to `false` to disable sampling.
    * **baseline**: This property indicates how many requests to analyze in each window before sampling begins. <br> Example: `5`
    * **request_frequency**: This property indicates that every *nth* request after the baseline is analyzed. <br> Example: `10`
    * **window_ms**: This property indicates the duration for which a sample set is valid. <br> Example: `180_000`
  * **rules**:
    * **disabled_rules**: Define a list of Assess rules to disable in the agent. The rules must be formatted as a comma-delimited list. <br> Example: Set "reflected-xss,sql-injection" to disable the reflected-xss rule and the sql-injection rule.


### Contrast Protect properties

Use the properties in this section to override Protect features.

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

Use the properties in this section for the application(s) hosting each agent.

For **application** tags, update the configuration of the agent. If there isn’t one, add a top-level `application` field to the *contrast_security.yaml* file. Under that heading, add a `tags` field, which you may set to any comma-separated alphanumeric string. 

* application:
  * **name**: Override the reported application name. If not provided, the agent finds an appropriate application name.
  * **path**: Override the reported application path.
  * **group**: Add the name of the application group with which this application should be associated in the Contrast UI.  
  * **code**: Add the application code this application should use in the Contrast UI.
  * **version**: Override the reported application version.
  * **tags**: Apply labels to an application. Labels must be formatted as a comma-delimited list. <br> Example: `label1,label2,label3`
  * **metadata**: Define a set of key=value pairs (which conforms to RFC 2253) for specifying user-defined metadata associated with the application. The set must be formatted as a comma-delimited list of `key=value` pairs. <br> Example: "business-unit=accounting, office=Baltimore"

### Server properties

Use the properties in this section to set metadata for the server hosting each agent.

For **server** tags, update the configuration of the service. If there isn’t one, add a top-level `server` field to the *contrast_security.yaml* file. Under that heading, add a `tags` field, which you may set to any comma-separated alphanumeric string.

* **server**:
  * **name**: Override the reported server name. <br> Example: `test-server-1`
  * **path:** Override the reported server path.
  * **type:** Override the reported server type.
  * **build:** Override the reported server build.
  * **version:** Override the reported server version.
  * **environment**: Override the reported server environment. <br> Example: `development`
  * **tags**: Apply a list of labels to the server. Labels must be formatted as a comma-delimited list. <br> Example: `label1,label2,label3`
   


