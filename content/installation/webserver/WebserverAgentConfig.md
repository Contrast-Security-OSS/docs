

The items that must be configured are:
* The communication link between Contrast-Service and TeamServer
* The NGINX service enabling the Agent to inspect traffic to certain endpoints

## Configure the Contrast Service

_XXX: config location is moving to /etc/contrast/webserver/contrast-security.yaml_

Contrast-Service is controlled by the configuration located at `/etc/contrast/contrast_security.yaml`. This is the Contrast Common Config format that most agents utilize.  _XXX: link to a general common config document_

This file will control how the Webserver is represented to TeamServer. The default configuration installed with the contrast-service linux package has most necessary items filled in however you will need to edit it with your TeamServer location and API key. You will also need to configure how you want your agent represented to TeamServer

    server:
      name: YOUR_SERVER_NAME
      path: /
      type: Proxy
      environment: development

The other section that needs your specific config in this file is:

    contrast:
      user_name: YOUR_CONTRAST_USERNAME
      service_key: YOUR_CONTRAST_SERVICE_KEY
      api_key: YOUR_CONTRAST_API_KEY
      url: http://YOUR_TEAMSERVER_LOCATION/Contrast

_XXX: where do I point someone if they are confused as to where to get these item?_
_XXX: give the user a way to test their configuration is working wrt to TeamServer?_

## Configure NGINX 

The Webserver agent is configured within the NGINX configuration files located at */etc/nginx*. <!-- Configuring NGINX as a reverse proxy or web server is out of scope for this document. --> The following guides you through details for the agent-specific configuration within the NGINX configuration files.

The */etc/nginx.conf* ___ should have the Webserver agent module added to it along with the configuration items enabling the agent for certain endpoints in the *nginx.conf*.

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

The important parts to note are the `load_module` directive at the top, which is loading the Webserver agent into NGINX, and the various `contrast_*` directives. You can place the `contrast_*` directives at the "main", "server" or "location" level in an [NGINX configuration](http://nginx.org/en/docs/beginners_guide.html#conf_structure). The individual directives are explained below. 

* `contrast`: Turns the loaded agent on or off. Value options are `on` or `off`. (The default value is `off`.) 
* `contrast_debug`: Turns debug logging on or off. Value options are `on` or `off`. (The default value is `off`.)
* `contrast_unix_socket`: Specifies the the Unix domain socket file path. This must agree with the location at which the Contrast Service has configured it. Values must be formatted as a string. 
* `contrast_app_name`: Application name for the agent as it appears in the Contrast UI. Values must be formatted as a string. 

