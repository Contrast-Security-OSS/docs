
<!--
title: "Contrast Proxy Agent Configuration"
description: "Configuration instructions for the Contrast Proxy agent"
tags: "installation agent proxy nginx configuration settings"
-->

Configure the following items for the Proxy agent:
* The communication link between Contrast-Service and the Contrast UI
* The NGINX service enabling the agent to inspect traffic to certain endpoints

## Configure the Contrast-Service

Contrast-Service is controlled by the configuration file located at */etc/contrast/webserver/contrast_security.yaml*.

This YAML file controls how the Proxy agent is represented to the Contrast application (and shown in the UI). The default configuration installed with the contrast-service Linux package has most necessary items filled in; however, you must add the location of the Contrast application and API key. You must also configure how you want your agent represented to the Contrast application. 

* **server**:
  * **name**: Override the reported server name. <br> Example: `test-server-1`
  * **path**: Override the reported server path.
  * **type**: Override the reported server type.  <br> Example: `Proxy`
  * **environment**: Override the reported server environment. <br> Example: `development`


You can find the information for following configuration properties in [Your Account](user-account.html#profile) in the Contrast UI.  

* **contrast**:
  * **user_name**: Set the user name used to communicate with the Contrast UI. It is used to calculate the Authorization header.
  * **service_key**: Set the service key needed to communicate with the Contrast UI. It is used to calculate the Authorization header. 
  * **api_key**: Set the API key needed to communicate with the Contrast UI.
  * **url**: Set the URL for the Contrast UI.  <br> Example: *https://app.contrastsecurity.com/Contrast*

If this configuration has an issue or incorrect values, the contrast-service fails to connect to Contrast. You can troubleshoot the failed connection result at */var/log/contrast/service.log*.

## Configure the NGINX Service 

The Proxy agent is configured within the NGINX configuration files located at */etc/nginx/*. You must add the Proxy agent module as well as the configuration properties that enable the agent for certain endpoints to the */etc/nginx/nginx.conf* file.

The following example is for the agent-specific configuration within the NGINX configuration files.

**Example:**

``` /etc/nginx/nginx.conf:
    
    load_module modules/ngx_http_contrast_connector_module.so;

    events {
      worker_connections 1024;
    }

    http {

      contrast on;
      contrast_debug off;
      contrast_unix_socket "/run/contrast-service.sock";

      error_log logs/error.log debug;

      server {
        listen 80;
        server_name localhost;

        # sample static site config
        location / {
          autoindex on;
          index index.html index.html;
          contrast_app_name "APP_NAME_A";
        }

        # sample reverse proxy config
        location /app {
          rewrite /MY_APP/(.*) /$1 break;
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_pass http://127.0.0.1:4567;
          contrast_app_name "APP_NAME_B";
        }
      }
    }
```

The important parts to note are the `load_module` directive at the top, which loads the Proxy agent into NGINX, and the various `contrast_*` directives. You can place the `contrast_*` directives at the `http`, `server` or `location` context in a [NGINX configuration](http://nginx.org/en/docs/beginners_guide.html#conf_structure). The individual directives are explained below.

* **contrast**: Turn the loaded agent on or off. Value options are `on` or `off`. <br> Default: `off` 
* **contrast_debug**: Turn debug logging on or off. Value options are `on` or `off`. <br> Default: `off` 
* **contrast_unix_socket**: Specify the the Unix domain socket file path. This must agree with the location at which the Contrast Service has configured it. Values must be formatted as a string. <br> Default: `/run/contrast-service.sock`
* **contrast_app_name**: Set the application name for the agent as it appears in the Contrast UI. Values must be formatted as a string. 
* **contrast_analyze_response_body**: Turn on response body processing in the NGINX module. Processing response bodies can slow NGINX significantly and use more resources on the system. Value options are `on` or `off`. <br> Default: `off` 
