<!-- 
title: "Python Agent Configuration"
description: "Configuring the Python Agent and Service"
tags: "installation python django flask pyramid agent service configuration"
-->

The Python agent and Contrast Service use a YAML file to alter the agent behavior. 

## Load Path

The configuration file is always called *contrast_security.yaml* no matter where it's located. The Python agent loads the configuration YAML from the following paths in order of precedence:

1. The current working directory (e.g., *./contrast_security.yaml*)
2. Within the server's *etc/contrast* directory (e.g., */etc/contrast/contrast_security.yaml*)
3. Within the server's *etc* directory (e.g., */etc/contrast_security.yaml*)

## General Configuration Options

The configuration YAML consists of four sections. The agent and service may share a common configuration file, but only some options and sections are applicable to each process.

* `contrast`: Options for locating and communicating with the Dashboard of the Contrast interface
  * `url`: URL to connect to the Contrast application
  * `api_key`: API key of the organization
  * `service_key`:  Service Key of the organization. It is used to calculate the Authorization header.
  * `user_name`: Username of user in the Contrast application
* `agent`: Options for communicating between the agent and the service
  * `logger`:
    * `path`: Filename of the Contrast Security log file for the agent (*contrast_agent.log*)
    * `level`: Level of logging details (DEBUG, INFO, WARN, ERROR)
    * `progname`: Name used to identify the process within the log file (Contrast Agent)
  * `security_logger`:
    * `path`: Name of the log file to which the security events are written (*security.log*)
    * `level`: Level of the security logging details (DEBUG, INFO, WARN, ERROR)
  * `service`: Options for the running service, including how the agent can locate it
    * `host`: Location the agent uses to communicate with the service (e.g., localhost)
    * `port`: Port the agent uses to communicate with the service (e.g., 30555)
    * `logger`:
      * `path`: Filename of the Contrast Security log file for the service (*contrast_service.log*)
      * `level`: Level of logging detail for the logger (DEBUG, INFO, WARN, ERROR) 
      * `progname`: Name to identify the process with the service log (Contrast Service)
* `application`: Information about the application that is being protected by the Python agent
  * `name`: Name under which to register the application in the Contrast application. If not provided, the agent finds an appropriate application name.
  * `group`: Group name for this application
  * `tags`: Comma-delimited list of tags for this application
  * `metadata`: Comma-delimited list of key=value pairs (which conforms to RFC 2253) for specifying metadata associated with the application. 
* `server`: Information about the server on which the web application is hosted
  * `name`: Name under which to register the server in the Contrast application 
  * `environment`: Environment as which applications on this server should register themselves on the Contrast application (Development); this does not affect servers that already exist in Contrast
  * `tags`: Comma-delimited list of tags for this server


