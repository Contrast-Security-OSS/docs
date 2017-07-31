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
2. A subdirectory called `config` which is the default for Ruby on Rails applications (e.g. `.config/contrast_security.yaml`)
3. Within in the server's `etc` directory (e.g. `/etc/contrast_security.yaml`)

## General Configuration Options

The configuration yaml consists of four sections. The agent and service may share a common configuration file but only some options and sections are applicable to each process.

* teamserver: options for locating and communication with the TeamServer dashboard
* service: options for the running service including how the agent can locate it
* server: information about the server that the web application is hosted on 
* application: information about the application that is being protected by the ruby agent

