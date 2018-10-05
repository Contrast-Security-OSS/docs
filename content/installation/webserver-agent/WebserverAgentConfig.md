# Configuration

The items that must be configured are:
* The communication link between Contrast-Service and TeamServer
* The NGINX service enabling the Agent to inspect traffic to certain endpoints

# Configuring Contrast-Service

_XXX: config location is moving to /etc/contrast/webserver/contrast-security.yaml_

Contrast-Service is controlled by the configuration located at `/etc/contrast/contrast_security.yaml`. This is the Contrast Common Config format that most agents utilize.  _XXX: link to a general common config document_

This file will control how the Webserver is represented to TeamServer. The default configuration installed with the contrast-service linux package has most necessary items filled in however you will need to edit it with your TeamServer location and API key. You will also need to configure how you want your agent represented to TeamServer

    server:
      name: YOUR SERVER NAME
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

# Configuring NGINX with the Webserver Agent.

The Webserver Agent is configured within the NGINX configuration files. These are located at `/etc/nginx`.  Configuring NGINX as a reverse proxy or webserver is out of scope for this document. Here we'll explain the Webserver Agent specific configuration within the NGINX configuration files.

The /etc/nginx.conf should have the webserver agent module added to it, and configuration items enabling the webserver agent for certain endpoints in the nginx.conf.

Example /etc/nginx/nginx.conf:
    
    load_module modules/ngx_http_contrast_connector_module.so;

    events {
      worker_connections 1024;
    }

    http {

      contrast on;
      contrast_debug on;
      contrast_unix_socket "/run/contrast-service.sock";

      error_log logs/error.log debug;

      server {
        listen 8888;
        server_name localhost;

        location / {
          autoindex on;
          index index.html index.html;
          contrast_app_name "APP NAME STATIC ENDPOINT";
        }

        location /app {
          rewrite /MY_APP/(.*) /$1 break;
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_pass http://127.0.0.1:4567;
          contrast_app_name "APP NAME DYNAMIC ENDPOINT";
        }
      }
    }

This important parts here are the `load_module` directive at the top which is loading the webserver agent into nginx and the various `contrast_*` directives. The `contrast_*` directives can be placed at the "main", "server", or "location" level in an nginx configuration. http://nginx.org/en/docs/beginners_guide.html#conf_structure

The individual directives are explained below:

    contrast:  [on | off] Turns the loaded agent on or off.
    contrast_debug: [on | off] Turns debug logging on or off.
    contrast_unix_socket: [string] Specifies the the unix domain socket
        filepath. This must agree with where Contrast-Service has it
        configured.
    contrast_app_name: [string] Application Name as represented in TeamServer.


