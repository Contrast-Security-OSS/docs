<!-- 
title: "Python Agent Configuration"
description: "Configuring the Python Agent and Service"
tags: "installation python django flask pyramid agent service configuration"
-->

The Python agent and Contrast Service use a YAML file to alter the agent behavior. Go to the Python [YAML Template](installation-pythonconfig.html#python-template) for fully formatted properties that you can copy and use in your own configuration files.

## Order of Precedence

The configuration file is named *contrast_security.yaml* or *contrast_security.yml* no matter where it's located. The Python agent loads the configuration YAML from the following paths in order of precedence:

1. Any path saved in the environment variable `CONTRAST_CONFIG_PATH`
2. The settings directory within the current directory (e.g., *./settings/contrast_security.yaml*)
3. The current working directory (e.g., *./contrast_security.yaml*)
4. Within the server's *etc/contrast/python* directory (e.g., */etc/contrast/python/contrast_security.yaml*)
5. Within the server's *etc/contrast* directory (e.g., */etc/contrast/contrast_security.yaml*)

The agent and service may share a common configuration file, but only some options and sections are applicable to each process.

## Configuration Options

### Enable the agent 

* **enable**: Only set this property if you want to turn off Contrast. Set to `true` to turn the agent on; set to `false` to turn the agent off.

### Contrast UI properties

Use the properties in this section to connect the agent to the Contrast UI.

* **api**: 
  * **url**: Set the URL for the Contrast UI. **Required.** <br> Example: *https://app.contrastsecurity.com/Contrast*
  * **api_key**: Set the API key needed to communicate with the Contrast UI. **Required.**
  * **service_key**: Set the service key needed to communicate with the Contrast UI. It is used to calculate the Authorization header. **Required.**
  * **user_name**: Set the user name used to communicate with the Contrast UI. It is used to calculate the Authorization header. **Required.**
  * **last_config_path**: Set the path to which the agent should store the currently used configuration from the Contrast UI. <br> Example: *./tmp/config*


#### Certificate 

Use the following properties for communication with the Contrast UI using certificates.

  * **certificate**: 
    * **enable**: If set to `false`, the agent ignores the certificate configuration in this section.
    * **ca_file**: Set the absolute or relative path to a CA for communication with the Contrast UI using a self-signed certificate.
    * **cert_file**: PSet the absolute or relative path to the Certificate PEM file for communication with the Contrast UI.
    * **key_file**: Set the absolute or relative path to the Key PEM file for communication with the Contrast UI.

### Contrast agent properties

All properties in this section must be put under the `agent` node, as shown in the [YAML template](installation-pythonconfig.html#python-template).

#### Logger

Define the following properties to set logging values. If these properties aren't defined, the agent uses the logging values from the Contrast UI.

* **agent**: Options for communicating between the agent and the service
  * **logger**:
    * **path**: Enable diagnostic logging by setting a path to a log file. While diagnostic logging hurts performance, it generates useful information for debugging Contrast. The value set here is the location to which the agent saves log output. If no log file exists at this location, the agent creates a file. <br> Example - */opt/Contrast/contrast.log* creates a log in the */opt/Contrast* directory, and rotates it automatically as needed.
    * **level**: Set the the log output level. Value options are `ERROR`, `WARN`, `INFO`, and `DEBUG`.
    * **progname**: Set the name the agent uses to identify the process within the log file <br> Example: Contrast Agent

#### Security logger

Define the following properties to set security logging values. If not defined, the agent uses the security logging (CEF) values from the Contrast UI.

  * **security_logger**:
    * **path**: Enable diagnostic logging by setting a path to a log file. While diagnostic logging hurts performance, it generates useful information for debugging Contrast. The value set here is the location to which the agent saves log output. If no log file exists at this location, the agent creates a file. <br> Example: */opt/Contrast/contrast.log* creates a log in the */opt/Contrast* directory, and rotates it automatically as needed.
    * **level**: Set the log level for security logging. Valid options are `ERROR`, `WARN`, `INFO`, `DEBUG`, and `TRACE`.
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
    * **level**: Set the the log output level. Value options are `ERROR`, `WARN`, `INFO`, and `DEBUG`.
    * **progname**: Set the name the agent uses to identify the process within the service log file <br> Example: Contrast Agent


### Inventory properties 

Use the properties in this section to override the inventory features.

* **inventory**:
  * **enable**: Set to `false` to disable Inventory features in the agent.
  * **tags**: Apply a list of labels to libraries. Labels must be formatted as a comma-delimited list. <br> Example: `label1, label2, label3`


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

* **application**:
  * **name**: Override the reported application name. <br> Note: On Java systems where multiple, distinct applications may be served by a single process, this configuration causes the agent to report all discovered applications as one application with the given name.
  * **path**: 
  * **group**: Add the name of the application group with which this application should be associated in the Contrast UI.  
  * **code**: Add the application code this application should use in the Contrast UI.
  * **version**: Override the reported application version.
  * **tags**: Apply labels to an application. Labels must be formatted as a comma-delimited list. <br> Example: `label1,label2,label3`
   * **metadata**: Define a set of key=value pairs (which conforms to RFC 2253) for specifying user-defined metadata associated with the application. The set must be formatted as a comma-delimited list of `key=value` pairs. <br> Example: "business-unit=accounting, office=Baltimore"

### Server properties

Use the properties in this section to set metadata for the server hosting each agent.

* **server**:
  * **name**: Override the reported server name. <br> Example: `test-server-1`
  * **path:** Override the reported server path.
  * **type:** Override the reported server type.
  * **build:** Override the reported server build.
  * **version:** Override the reported server version.
  * **environment**: Override the reported server environment. <br> Example: `development`
  * **tags**: Apply a list of labels to the server. Labels must be formatted as a comma-delimited list. <br> Example: `label1,label2,label3`
   
