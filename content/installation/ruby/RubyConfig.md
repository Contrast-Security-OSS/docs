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
3. Within the server's *etc* directory (e.g., */etc/contrast_security.yaml*)

## Ruby Service and Ruby Agent

Configuration files for Ruby on Rails applications are usually stored in the *./config* directory of the application. The Ruby service can share the application's configuration file if the service's working directory is also the base directory of the Rails application. Both the agent and the service use the *./config/contrast_security.yaml* path; however, this isn't required. The Ruby service can run from any other directory on the server - in which case, it should have its own copy of the configuration file.  

### Tagging

The Ruby agent and service support the full array for tagging messages to the Contrast server. To apply these tags, you must update your configuration files in either the agent or the service. Tags in the configuration are comma-separated alphanumeric strings. Each tag will be attached to a corresponding message from the agent or service, depending which field is set.

For **server** tags, update the configuration of the service. If there isn’t one, add a top-level `server` field to the *contrast_security.yaml* file. Under that heading, add a `tags` field, which you may set to any comma-separated alphanumeric string.

For **application** tags, update the configuration of the agent. If there isn’t one, add a top-level `application` field to the *contrast_security.yaml* file. Under that heading, add a `tags` field, which you may set to any comma-separated alphanumeric string. 
 
For **library** tags, update the configuration of the agent. If there isn’t one, add a top-level `inventory` field to the *contrast_security.yaml* file. Under that heading, add a `tags` field, which you may set to any comma-separated alphanumeric string. 

See the **General Configuration Options** section for more information. 

<!-- omit until assess is released 
For Trace tags, update the configuration of the agent. If there isn’t one, add a top-level `assess` field to the *contrast_security.yaml* file. Under that heading, add a `tags` field, which you may set to any comma-separated alphanumeric string.  
-->


## General Configuration Options

The configuration YAML consists of four sections. The agent and service may share a common configuration file, but only some options and sections are applicable to each process.

* `contrast`: Options for locating and communicating with the Contrast interface Dashboard
  * `enable`: This is assumed to be *true*. If set to *false* the agent will not apply agent rules to the client application.
  * `url`: URL to connect to the Contrast application
  * `api_key`: Organization's API key
  * `service_key`:  Service Key of Organization
  * `user_name`: Username of user in TeamServer
* `agent`: Options for communicating between the agent and the service
  * `logger`:
    * `path`: Filename of the Contrast Security log file for the agent (*contrast_agent.log*)
    * `level`: Level of logging details (DEBUG, INFO, WARN, ERROR)
    * `progname`: Name used to identify the process within the log file (Contrast Agent)
  * `cef_logger`:
    * `path`: Name of the log file to which the CEF events are written (*security.log*)
    * `level`: Level of the CEF logging details (DEBUG, INFO, WARN, ERROR)
  * `service`: Options for the running service, including how the agent can locate it
    * `enable`: This is assumed to be *true*. If set to *false* the agent will not attempt to start or restart the Contrast Service. The service may be started using the rake task: `rake contrast:service:start`.
    * `logger`:
      * `path`: Filename of the Contrast Security log file for the service (*contrast_service.log*)
      * `level`: Level of logging detail for the logger (DEBUG, INFO, WARN, ERROR) 
      * `progname`: Name to identify the process with the service log (Contrast Service)
    * `host`: Location the agent uses to communicate with the service (e.g., localhost)
    * `port`: Port the agent uses to communicate with the service (e.g., 30555)
* `application`: Information about the application that is being protected by the Ruby agent
  * `name`: Name under which to register the application in the Contrast application. If not provided, the Rails application name is used instead.
  * `tags`: Comma-delimited list of tags for this application
  * `group`: Group name for this application
* `server`: Information about the server on which the web application is hosted
  * `name`: Name under which to register the server in the Contrast application 
  * `environment`: Environment as which applications on this server should register themselves on the Contrast application (Development); this does not affect servers that already exist in Contrast
  * `tags`: Comma-delimited list of tags for this server
* `inventory`
  * `tags`: Comma-delimited list of tags for this library
