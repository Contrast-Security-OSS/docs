# Starting the services

The Webserver Agent ties into the local system's service management tools. For recent debian-based systems, this will be systemd.

The Contrast-Service is managed via:

    sudo systemctl enable contrast-service
    sudo systemctl restart contrast-service
    sudo systemctl status contrast-service

The NGINX service via:

    sudo systemctl enable nginx
    sudo systemctl restart nginx
    sudo systemctl status nginx


Once those services are running, the Webserver Agent will now protect apps through the NGINX server. If this is a new application for TeamServer, you will need to configure the application-specific settings in TeamServer to enforce app protection as you want.