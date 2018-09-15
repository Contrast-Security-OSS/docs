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

## Service Configuration

The Ruby agent launches an executable on startup that also needs access to the configuration files. Since the service is generally launched by the Ruby agent process, it has access to the same configuration file as the agent. However, if the service is started independently, it will attempt to use the same load path described above for its configuration file. 

In other words, the service can share the application's configuration file, if (as is usually the case) the service's working directory is also the base directory of the Rails application. Both the agent and the service use the *./config/contrast_security.yaml* path. 

### Tagging

The Ruby agent supports the full array of tagging messages to the Contrast server. To apply these tags, you must update your configuration files. Tags in the configuration are comma-separated alphanumeric strings. Each tag will be attached to a corresponding message from the agent or service, depending which field is set.

For **server** tags, update the configuration of the service. If there isn’t one, add a top-level `server` field to the *contrast_security.yaml* file. Under that heading, add a `tags` field, which you may set to any comma-separated alphanumeric string.

For **application** tags, update the configuration of the agent. If there isn’t one, add a top-level `application` field to the *contrast_security.yaml* file. Under that heading, add a `tags` field, which you may set to any comma-separated alphanumeric string. 
 
For **library** tags, update the configuration of the agent. If there isn’t one, add a top-level `inventory` field to the *contrast_security.yaml* file. Under that heading, add a `tags` field, which you may set to any comma-separated alphanumeric string. 

See the **General Configuration Options** section for more information. 

<!-- omit until assess is released 
For Trace tags, update the configuration of the agent. If there isn’t one, add a top-level `assess` field to the *contrast_security.yaml* file. Under that heading, add a `tags` field, which you may set to any comma-separated alphanumeric string.  
-->


## General Configuration Options

The configuration YAML consists of four sections. The agent and service may share a common configuration file, but only some options and sections are applicable to each process.

* `contrast`: Options for locating and communicating with the Contrast UI Dashboard
  * `enable`: This is assumed to be `true`. If set to `false`, the agent won't apply agent rules to the client application.
  * `url`: URL to connect to the Contrast application
  * `api_key`: API key of the organization
  * `service_key`:  Service Key of the organization. It is used to calculate the Authorization header.
  * `user_name`: Username of user in the Contrast application
* `agent`: Options for communicating between the agent and the service
  * `logger`:
    * `path`: Filename of the Contrast log file for the agent (*contrast_agent.log*)
    * `level`: Level of logging details (DEBUG, INFO, WARN, ERROR)
    * `progname`: Name used to identify the process within the log file (Contrast Agent)
  * `security_logger`:
    * `path`: Name of the log file to which the security events are written (*security.log*)
    * `level`: Level of the security logger details (DEBUG, INFO, WARN, ERROR)
  * `service`: Options for the running service, including how the agent can locate it
    * `enable`: This is assumed to be `true`. If set to `false`, the agent won't attempt to start or restart the Contrast Service. A service instance reading this configuration will shut itself down once this configuration item is read.
    * `host`: Location the agent uses to communicate with the service (e.g., localhost)
    * `port`: Port the agent uses to communicate with the service (e.g., 30555)
    * `logger`:
      * `path`: Filename of the Contrast Security log file for the service (*contrast_service.log*)
      * `level`: Level of logging detail for the logger (DEBUG, INFO, WARN, ERROR) 
      * `progname`: Name to identify the process with the service log (Contrast Service)
* `application`: Information about the application that is being protected by the Ruby agent
  * `name`: Name under which to register the application in the Contrast application. If not provided, the Rails application name is used instead.
  * `group`: Group name for this application
  * `tags`: Comma-delimited list of tags for this application
  * `metadata`: Comma-delimited list of key=value pairs (which conforms to RFC 2253) for specifying metadata associated with the application. 
* `server`: Information about the server on which the web application is hosted
  * `name`: Name under which to register the server in the Contrast application 
  * `environment`: Environment as which applications on this server should register themselves on the Contrast application (Development); this does not affect servers that already exist in Contrast.
  * `tags`: Comma-delimited list of tags for this server
* `inventory`
  * `tags`: Comma-delimited list of tags for this library

## Ruby-Specific Configuration Options

The following configuration options allow you to fine-tune the Ruby agent.

* `ruby`: Options specific to the Ruby agent
  * `analyze_inventory_async`: If set to `true`, this wraps the initial inventory message in a thread which may speed up the response time on the first request after startup. 


