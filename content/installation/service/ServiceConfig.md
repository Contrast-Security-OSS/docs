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
3. Within the server's *etc/contrast/webserver* (e.g., */etc/contrast/webserver/contrast_security.yaml*) when being used for the Proxy agent
4. Within the server's *etc/contrast* directory (e.g., */etc/contrast/contrast_security.yaml*)
5. Within the server's *etc* directory (e.g., */etc/contrast_security.yaml*)

## General Configuration Options

The configuration YAML consists of four sections. The agent and Service may share a common configuration file, but only some options and sections are applicable to each process.

### Contrast UI properties

Use the properties in this section to connect the agent to the Contrast UI.

* **contrast**: 
  * **url**: Set the URL for the Contrast UI.
  * **api_key**: Set the API key needed to communicate with the Contrast UI.
  * **service_key**: Set the service key needed to communicate with the Contrast UI. It is used to calculate the Authorization header.
  * **user_name**: Set the user name used to communicate with the Contrast UI. It is used to calculate the Authorization header.
  * **certificate**: Allow the use of custom or self-signed certificate authority and certificate files when connecting to the Contrast UI.
    * **ca_file**: When running an Enterprise-on-Premises (EOP) Contrast instance using a self-signed certificate, use this option to provide the path to a custom CA file.
    * **cert_file**: Provide a path to the server's certificate PEM file.
    * **key_file**: Provide a path to the server's key PEM file.

### Contrast agent properties

Use the options in this section to allow the agents to find and communicate with the Contrast Service.

* **agent**: Use the properties in this section to control the way and frequency with which the agent communicates to logs and the Contrast UI.
  * **service**:
    * **host**: Set the the hostname or IP address of the Contrast Service to which the Contrast agent should report. <br> Example: `localhost`
    * **port**: Set the the port of the Contrast Service to which the Contrast agent should report. <br> Example: `30555`
    * **socket**: Set for or the **Proxy agent** only. If this property is defined, the Service is listening on a Unix socket at the defined path. <br> Example: */run/contrast-security.sock*
    * **logger**:
      * **path**: Set the location to which the Contrast Service saves log output. If no log file exists at this location, the Service creates one. <br> Example: */opt/Contrast/contrast_service.log* will create a log in the */opt/Contrast* directory.
      * **level**: Set the the log output level. Value options are `ERROR`, `WARN`, `INFO`, and `DEBUG`.
      * **progname**: Override the name of the process used in logs. <br> Example: Contrast Service

### Server properties

Use the options in this section to override the server information sent to Contrast UI.

* **server**: Use the properties in this section to set metadata for the server hosting this agent. <br> Example: `test-server-1`
  * **name**: Override the reported server name.
  * **environment**: Override the reported server environment. <br> Example: `development`
  * **tags**: Apply a list of labels to the server. Labels must be formatted as a comma-delimited list. <br> Example: `label1,label2,label3`
