<!-- 
title: "Ruby Agent Configuration"
description: "Configurint the Ruby Agent and Service"
tags: "installation ruby on rails agent service configuration"
-->

The Ruby agent and service use a YAML file to alter the agent behavior. 

## Load Path

The configuration file is called *contrast_security.yaml* wherever it's located. The Ruby agent and service load the configuration YAML from the following paths in order of precedence:

1. The current working directory (e.g., *./contrast_security.yaml*)
2. A subdirectory called *config*, which is the default for Ruby on Rails applications (e.g., *./config/contrast_security.yaml*)
3. Within the server's *etc* directory (e.g., */etc/contrast_security.yaml*)

## General Configuration Options

The configuration YAML consists of four sections. The agent and service may share a common configuration file, but only some options and sections are applicable to each process.

* `teamserver`: Options for locating and communicating with the Contrast interface Dashboard
  * `user_name`: 
  * `service_key`: 
  * `api_key`: Organization's API key
  * `url`: URL to connect to the Contrast application
* `service`: Options for the running service, including how the agent can locate it
  * `logger`:
    * `path`: Filename of the Contrast Security log file for the service (*contrast_service.log*)
    * `level`: Level of logging detail for the logger (DEBUG, INFO, WARN, ERROR) 
    * `progname`: Name to identify the process with the service log (Contrast Service)
  * `host`: Location the agent uses to communicate with the service (e.g., localhost)
  * `port`: Port the agent uses to communicate with the service (e.g., 30555)
* `server`: Information about the server on which the web application is hosted
  * `name`: Name under which to register the server in the Contrast application 
  * `environment`: Environment as which applications on this server should register themselves on the Contrast application (Development)
* `application`: Information about the application that is being protected by the Ruby agent
  * `name`: Name under which to register the application in the Contrast application. If not provided, the Rails application name is used instead.
  * `logger`:
    * `path`: Filename of the Contrast Security log file for the agent (*contrast_agent.log*)
    * `level`: Level of logging details (DEBUG, INFO, WARN, ERROR)
    * `progname`: Name used to identify the process within the log file (Contrast Agent)
  * `cef_logger`:
    * `path`: Name of the log file to which the CEF events are written (*security.log*)
    * `level`: Level of the CEF logging details (DEBUG, INFO, WARN, ERROR)

