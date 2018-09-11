<!--
title: "Contrast Service Configuration"
description: "Configuring the Contrast Service"
tags: "installation service configuration"
-->

The Contrast Service uses a YAML file to update the service behavior.

## Load Path

The configuration file is always called *contrast_security.yaml* no matter where it's located. The Contrast Service loads the configuration YAML from the following paths in order of precedence:

1. The current working directory (e.g., *./contrast_security.yaml*)
2. An application specific configuration directory (e.g. *./config/contrast_security.yaml* for Ruby on Rails, *./settings/contrast_security.yaml* for Django)
3. Within the server's *etc/contrast* directory (e.g., */etc/contrast/contrast_security.yaml*)
4. Within the server's *etc* directory (e.g., */etc/contrast_security.yaml*)

## General Configuration Options

The configuration YAML consists of four sections. The agent and service may share a common configuration file, but only some options and sections are applicable to each process.

* `contrast`: Options for locating and communicating with the Dashboard of the Contrast interface. If using separate configuration files for the agents and service, the options for connecting with Contrast UI should be defined for the service.
  * `url`: URL to connect to the Contrast application
  * `api_key`: Organization's API key
  * `service_key`: Service Key of Organization
  * `user_name`: Username of user in TeamServer
* `agent`: Options for communicating between agent and the service
    * `service`:
      * `host`: Location the agent uses to communicate with the service (e.g., localhost)
      * `port`: Port the agent uses to communicate with the service (e.g., 30555)
      * `socket`: For the webserver agent only, the path of the unix socket to communicate with the web server (e.g. /run/contrast-security.sock)
      * `logger`:
        * `path`: Filename of the Contrast Security log file for the service (*contrast_service.log*)
        * `level`: Level of logging detail for the logger (DEBUG, INFO, WARN, ERROR) 
        * `progname`: Name to identify the process with the service log (Contrast Service)
* `server`: Information about the server on which the web application is hosted
  * `name`: Name under which to register the server in the Contrast application 
  * `environment`: Environment as which applications on this server should register themselves on the Contrast application (Development)
  * `tags`: Comma-delimited list of tags for this server
