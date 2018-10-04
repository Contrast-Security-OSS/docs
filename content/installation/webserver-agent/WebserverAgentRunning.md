# Starting the services

The Webserver Agent ties into the local system's service management tools. For
recent debian-based systems, this will be systemd.

The Contrast-Service is managed via:

    sudo systemctl start contrast-service
    sudo systemctl status contrast-service

The NGINX service via:

    sudo systemctl start nginx
    sudo systemctl status nginx


Once those services are running, the Webserver Agent will now protect
apps through the NGINX server.

_XXX: do I need any sort of link to TeamServer configuration for enabling
rules, block(p), etc...???_
