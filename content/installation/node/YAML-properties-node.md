<!--
title: "YAML configuration properties for the Node agent "
description: "Instructions for configuring Node agent properties via YAML file"
tags: "installation node agent YAML configuration rules properties"
-->

Contrast supports YAML-based configuration for the Node agent. This allows you to store configuration on disk that you can override with environment variables or command-line arguments. Go to the [Node YAML Template](installation-nodeconfig.html#node-template) for fully formatted properties that you can copy and use in your own configuration files.

> **Note:** While all Contrast agents share the same property formatting in YAML configuration files, each agent must use its specified file.

## Order of Precedence

Configuration values use the following order of precedence:

1. Corporate rule (e.g., expired license overrides `assess.enable`)
2. Command line value
3. Specific environmental variable
4. Generic environment variable value
5. User configuration file value
6. Contrast UI value
7. Default value

## Load Path

The agent expects that the *contrast_security.yaml* configuration file exists in the application's root directory (where the *package.json* file usually resides). If you want to change the location of the file, provide the agent with the new location using one of the following methods:

* Pass a CLI option `--configFile <location>`
* Set the `CONTRAST_CONFIG` environment variable

## Configuration Options

### Enable the agent

* **enable**: Only set this property if you want to turn off Contrast. Set to `true` to turn the agent on; set to `false` to turn the agent off.

### Contrast UI properties

Use the properties in this section to connect the Node agent to the Contrast UI. The proxy settings allow the agent to communicate with the Contrast UI over a proxy.

* **api**:
  * **url**: Set the URL for the Contrast UI. <br> Example: https://app.contrastsecurity.com/Contrast. **Required.**
  * **api_key**: Set the API key needed to communicate with the Contrast UI. **Required.**
  * **service_key**: Set the service key needed to communicate with the Contrast UI. It is used to calculate the Authorization header. **Required.**
  * **user_name**: Set the user name used to communicate with the Contrast UI. It is used to calculate the Authorization header. **Required.**
  * **timeout_ms**: Set the default request timeout.

#### Certificate

Use the following properties for communication with the Contrast UI using certificates.

  * **certificate**
    * **enable**: Set to `false` for the agent to ignore the certificate configuration in this section.
    * **ignore_cert_errors**: Allows the agent to communicate data, even if Contrast's cert can't be verified against supplied list of CAs.
    * **ca_file**: Set the absolute or relative path to a CA for communication with Contrast UI using a self-signed certificate.
    * **cert_file**: Set the absolute or relative path to the Certificate PEM file for communication with Contrast UI.
    * **key_file**: Set the absolute or relative path to the Key PEM file for communication with Contrast UI.
    * **key_password**: Set the password for the Key file, if required.

#### Proxy

Use the following properties for communication with the Contrast UI over a proxy.

  * **proxy**:
    * **enable**: Add a property value to determine if the agent should communicate with the Contrast UI over a proxy. If a property value is not present, the presence of a valid proxy host and port determines enabled status. Value options are `true` or `false`
    * **url**: Set this property as an alternate for `scheme://host:port`. It takes precedence over the other settings, if specified; however, an error will be thrown if both the URL and individual properties are set.

### Contrast agent properties

Use the properties in this section to control the way and frequency with which the Node agent communicates to logs and to the Contrast UI.
If these values are not set, the agent will use the values set in the Contrast UI.

All properties in this section must be put under the `agent` node, as shown in the [YAML template](installation-nodeconfig.html#node-template).


* **agent**:

  * **auto_update**:
    * **enable**: Set to `true` for the agent to automatically upgrade to newer versions.
    * **path:** Set the location to which to save the agent artifact before installation. <br> Example: */tmp/contrast/*
    * **timeout_ms**: Set the length of time to wait before aborting the auto-update attempt.


#### Diagnostic logging

Use the properties in this section to control diagnostic logging. These logs allow us to diagnose any issues you may be having with the agent.


  * **logger**:
    * **path**: Enable diagnostic logging by setting a path to a log file. While diagnostic logging hurts performance, it generates useful information for debugging Contrast. The value set here is the location to which the agent saves log output. If the path starts with `/dev/`, it doesn't create a rotated file. If no log file exists at this location, the agent creates a file. <br> Example: */opt/Contrast/contrast.log* creates a log in the */opt/Contrast* directory, and rotates it automatically as needed.
    * **level**: Set the the log output level. Value options are `ERROR`, `WARN`, `INFO`, `DEBUG`, and `TRACE`.
    * **append**: Set to `false` for the agent to always create a new log file instead of appending and rolling.
    * **stdout**: Set to `false` for the agent to suppress output to STDOUT.


#### Security logging

Use the properties in this section to control security logging. These logs allow you to watch Protect as it monitors and blocks attacks against your application. They are written to the specified file in the Common Event Format (CEF). The Syslog settings allow you to send security logs to remote servers.

  * **security_logger**:
    * **path**: Set the file to which the agent logs security events. <br> Example: */.contrast/security.log*
    * **level**: Set the log level for security logging. Valid options are `ERROR`, `WARN`, `INFO`, `DEBUG`, and `TRACE`.

#### Heap dumps

The following properties are used to trigger heap dumps from within the agent to snapshot the behavior of instrumented applications.

  * **enable**: Set to `true` for the agent to automatically take heap dumps of the instrumented application.

  * **path**: Set the location to which to save the heap dump files. If relative, the path is determined based on the process' working directory. <br> Example: *contrast_heap_dumps*

  * **delay_ms**: Set the amount of time to wait, in milliseconds, after agent startup to begin taking heap dumps. <br> Example: `10_000`

  * **window_ms**: Set the amount of time to wait, in milliseconds, between each heap dump. <br> Example: `10_000`

  * **count**: Set the number of heap dumps to take before disabling this feature. <br> Example: `5`

#### Agent-specific properties

The following properties apply to any Node.js configurations.

  * **node**:
    * **app_root**: Explicitly set the location of the application's *package.json* file.
    * **stack_trace_limit**: Set the limit for lengths of stack traces.

### Inventory properties

Use the properties in this section to control inventory features in the Node agent.

  * **inventory**:
    * **analyze_libraries**: Set to `false` for the agent to not read or report library data.
    * **tags**: Apply a list of labels to libraries. Labels must be formatted as a comma-delimited list. <br> Example: `label1, label2, label3`


### Contrast Assess properties

Use the properties in this section to control Assess in the Node agent. The sampling settings allow you to control which requests the agent tracks and which it ignores. The rules setting allows you to control which Assess rules are disabled.

> **Note:** If you need a complete list of rules, use the **Support** widget in OpenDocs to contact Contrast's Customer Support team.


* **assess**:

  * **enable**: Include this property to determine if the Assess feature should be enabled. If this property is not present, the decision is delegated to the Contrast UI. <br> Example: `true`
  * **tags**: Apply a list of labels to vulnerabilities and preflight messages. Labels must be formatted as a comma-delimited list. Example: `label1, label2, label3`

  * **samplings**:
    * **enable**: Set to `false` to disable sampling.
    * **baseline**: This property indicates the number of requests to analyze in each window before sampling begins. <br> Example: `5`


### Contrast Protect properties

Use the properties in this section to control Protect features and rules.

* **protect**:

  * **samples**:
    * **blocked**: Set the maximum number of Blocked events that the agent reports (per report cycle). <br> Example: `25`
	* **blocked_at_perimeter**: Set the maximum number of Blocked-at-Perimeter events that the agent reports (per report cycle).
	* **exploited**: Set the maximum number of Effective that the agent reports (per report cycle).
	* **ineffective**: Set the maximum number of Ineffective events that the agent reports (per report cycle).

### Application properties

Use the properties in this section to control the application(s) hosting this agent.

* application:
  * **code**: Add the application code this application should use in the Contrast UI.
  * **name**: Override the reported application name. <br> Note: On Java systems where multiple, distinct applications may be served by a single process, this configuration causes the agent to report all discovered applications as one application with the given name.
  * **path**: Override the reported application path.
  * **group**: Add the name of the application group with which this application should be associated in the Contrast UI.
  * **version**: Override the reported application version.
  * **args**: Pass arguments to the underlying application.
  * **tags**: Apply labels to an application. Labels must be formatted as a comma-delimited list. <br> Example: `label1,label2,label3`
  * **metadata**: Define a set of `key=value` pairs (which conforms to RFC 2253) for specifying user-defined metadata associated with the application. The set must be formatted as a comma-delimited list of `key=value` pairs. <br> Example: "business-unit=accounting, office=Baltimore"

### Server properties

Use the properties in this section to set metadata for the server hosting this agent.

* **server**:

  * **name**: Override the reported server name. <br> Example: `test-server-1`
  * **path**: Override the reported server path.
  * **type**: Override the reported server type.
  * **build**: Override the reported server build.
  * **version**: Override the reported server version.
  * **environment**: Override the reported server environment. <br> Example: `development`
  * **tags**: Apply a list of labels to the server. Labels must be formatted as a comma-delimited list. <br> Example: `label1,label2,label3`

