<!-- 
title: "Ruby Agent Configuration"
description: "Configurint the Ruby Agent and Service"
tags: "installation ruby on rails agent service configuration"
-->

The ruby agent and service uses a YAML file to alter the agent behavior. 

## Load Path
The configuration file is assumed to be called `contrast_security.yaml` wherever it is located. 
The ruby agent and service load the configuration yaml from the following paths in order of precedence:

1. The current working directory (e.g. `./contrast_security.yaml`)
2. A subdirectory called `config` which is the default for Ruby on Rails applications (e.g. `./config/contrast_security.yaml`)
3. Within in the server's `etc` directory (e.g. `/etc/contrast_security.yaml`)

## General Configuration Options

The configuration yaml consists of four sections. The agent and service may share a common configuration file but only some options and sections are applicable to each process.

* `teamserver`: options for locating and communication with the TeamServer dashboard
  * `user_name`: 
  * `service_key`: 
  * `api_key`: Organization's API key
  * `url`: The URL to connect to TeamServer
* `service`: options for the running service including how the agent can locate it
  * `logger`:
    * `path`: (contrast_service.log) The filename of the Contrast Security log file for the service
    * `level`: (DEBUG, INFO, WARN, ERROR) The level of logging detail for the logger
    * `progname`: (Contrast Service) Name to identify the process with the service log
  * `host`: The location that the agent will use to communicate with the service (e.g. localhost)
  * `port`: The port on which the agent will use to communicate with the service (e.g. 30555)
* `server`: information about the server that the web application is hosted on 
  * `name`: Name to register the server under in TeamServer
  * `environment`: (development) The environment applications on this server should register themselves as on TeamServer
* `application`: information about the application that is being protected by the ruby agent
  * `name`: Name to register the application udner in TeamServer. If not provided, the Rails application name is used instead
  * `logger`:
    * `path`: (contrast_agent.log) The filename of the Contrast Security log file for the agent
    * `level`: (DEBUG, INFO, WARN, ERROR) The level of logging details
    * `progname`: (Contrast Agent) Name to identify the process within the log file
  * `cef_logger`:
    * `path`: (security.log) The name of the log file that CEF events will be written to
    * `level`: (DEBUG, INFO, WARN, ERROR) The level of the CEF logging details

