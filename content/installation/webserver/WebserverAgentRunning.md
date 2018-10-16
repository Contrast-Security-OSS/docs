<!--
title: "Run the Contrast Webserver Agent"
description: "Running the Contrast Webserver agent"
tags: "installation agent webserver nginx run service"
-->

The Webserver agent ties into the local system's service management tools. For recent Debian-based systems, this will be **systemd**.

Manage the Contrast Service with the following commands:

```
 sudo systemctl enable contrast-service
 sudo systemctl restart contrast-service
 sudo systemctl status contrast-service
```

Manage the NGINX service with the following commands:

```
 sudo systemctl enable nginx
 sudo systemctl restart nginx
 sudo systemctl status nginx
```

Once these services are running, the Webserver agent will protect applications through the NGINX server. To enforce specific Protect settings on a new application, configure application-specific [Protect Rules](admin-policymgmt.html#protect) in the Contrast UI.
