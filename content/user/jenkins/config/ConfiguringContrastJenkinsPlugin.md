<!--
title: "Configuring The Contrast Jenkins Plugin"
description: "Instructions on configuring the Contrast Jenkins Plugin"
tags: "jenkins agent maven teamserver"
-->

Now that you have installed the Contrast Jenkins plugin we need to configure it to TeamServer.

To do so, go the `Configure Settings` Page under `Manage Jenkins`. Here you will a new Contrast TeamServer profiles section.

### Username

This is the username/email for your user in TeamServer.

### Api Key

This is the Api Key for your user in TeamServer. Found under Organization Settings.

### Service Key

This is the Service Key for your user in TeamServer. Found under Organization Settings.

### TeamServer URL

TeamServer URL that the plugin will attempt to communicate with. 
Use app.contrastsecurity.com/Contrast/api if you are a SaaS customer.

### Organization Uuid

Uuid of the organization the user you are configuring is in. You can find this under Organization Settings.

### Application Name *

Name of the application you are wanting to verify the threshold conditions against.

***Note**: This name must be unique. We only check for the first application returned.

Several fields are left hidden to protect your credentials!
