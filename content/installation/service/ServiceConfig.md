<!--
title: "Contrast Service Configuration"
description: "Configuring the Contrast Service"
tags: "installation service configuration"
-->

The Contrast Service uses a YAML file to update the service behavior.

## Load Path

The configuration file is titled *contrast_security.yaml* no matter where it's located. The Contrast Service loads the configuration YAML from the following paths in order of precedence:

1. The current working directory (e.g., *./contrast_security.yaml*)
2. An application-specific configuration directory (e.g., *./config/contrast_security.yaml* for Ruby on Rails or *./settings/contrast_security.yaml* for Django)
3. Within the server's *etc/contrast/webserver* (e.g., */etc/contrast/webserver/contrast_security.yaml*) when being used for the webserver agent
4. Within the server's *etc/contrast* directory (e.g., */etc/contrast/contrast_security.yaml*)
5. Within the server's *etc* directory (e.g., */etc/contrast_security.yaml*)

## General Configuration Options

The configuration YAML consists of four sections. The agent and Service may share a common configuration file, but only some options and sections are applicable to each process.

* `contrast`: Use the properties in this section to connect the agent to the Contrast UI. If you're using separate configuration files for the agents and service, you should define the options for connecting with Contrast UI for the Service.
  * `url`: Set the URL for the Contrast UI.
  * `api_key`: Set the API key needed to communicate with the Contrast UI.
  * `service_key`: Set the service key needed to communicate with the Contrast UI. It is used to calculate the Authorization header.
  * `user_name`: Set the user name used to communicate with the Contrast UI. It is used to calculate the Authorization header.
* `agent`: Use the properties in this section to control the way and frequency with which the agent communicates to logs and the Contrast UI.
    * `service`:
      * `host`: Set the the hostname or IP address of the Contrast Service to which the Contrast agent should report. <br> Example: `localhost`
      * `port`: Set the the port of the Contrast Service to which the Contrast agent should report. <br> Example: `30555`
      * `socket`: For the **Webserver agent** only: If this property is defined the service will listen on a Unix domain socket at the defined path. If this option is used, then `host` and `port` options do not apply and they should not be defined. <br> Example: */run/contrast-service.sock*
      * `logger`:
        * `path`: Set the location to which the Contrast Service saves log output. If no log file exists at this location, the Service creates one. <br> Example: */opt/Contrast/contrast_service.log* will create a log in the */opt/Contrast* directory.
        * `level`: Set the the log output level. Options are `OFF`, `FATAL`, `ERROR`, `WARN`, `INFO`, `DEBUG`, `TRACE`, and `ALL`.
        * `progname`: Override the name of the process used in logs. <br> Example: Contrast Service
* `server`: Use the properties in this section to set metadata for the server hosting this agent. <br> Example: `test-server-1`
  * `name`: Override the reported server name.
  * `environment`: Override the reported server environment. <br> Example: `development`
  * `tags`: Apply a list of labels to the server. Labels must be formatted as a comma-delimited list. <br> Example: label1,label2,label3 

