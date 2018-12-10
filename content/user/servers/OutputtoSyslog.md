<!--
title: "Output to Syslog"
description: "Overview of how to send protection events to Syslog"
tags: "user server Protection Syslog Output"
-->

This feature allows you to send security logs to a remote Syslog server in addition to the Contrast Security log. By sending logs to Syslog, you no longer have to monitor Contrast logs. 

> **Notes:** 
 * The following instructions are written in the context that a Protect license is applied to the server(s) on which you would like to enable Syslog output. 
 * You may have to enable remote logging so that your Syslog can receive outside messages. 

## Default Server Settings

Organization settings act as the default configuration for all new servers. To set up or edit default server settings, go to the **User menu > Organization Settings > Servers tab**. In the configuration form, select the checkbox to **Enable output of Protect events to Syslog**, which reveals additional fields, and then enter the appropriate settings.

For more information on creating server configurations in Organization Settings, go to [Server Defaults](admin-orgsettings.html#org-server). 

## Enable Output to Syslog 

From the **Servers** page, you can enable and configure Syslog output to an individual server or multiple servers at one time. 

### Individual server 

To enable Syslog on an individual server, hover over the grid row, and select the **Server Settings** icon. 

<a href="assets/images/Server-settings-grid.png" rel="lightbox" title="Enable Syslog for a server in Server Settings"><img class="thumbnail" src="assets/images/Server-settings-grid.png"/></a>

In the **Server Settings** dialog, check the box to **Enable output of Protect events to Syslog**. If Syslog defaults have been set for the server environment in **Organization Settings**, the values are prepopulated in the fields that appear. Once you save the settings, Syslog is enabled on the server.

### Multiple servers

To enable Syslog on multiple servers, use the check marks to select the servers, and select the **Server Settings** icon in the action bar. 

> **Note:** If one or more of the selected servers is not eligible to have Syslog enabled, Syslog is only enabled on the servers that are eligible. 

In the **Bulk Server Settings** dialog, click the **Edit** link to enable the option to send Protect events to Syslog. Select the checkbox to **Send output of Protect events to Syslog**, and complete the fields that appear. Once you complete all required fields and save the settings, Syslog is enabled on the selected servers. 

<a href="assets/images/Bulk-server-settings.png" rel="lightbox" title="Enable Syslog for multiple servers"><img class="thumbnail" src="assets/images/Bulk-server-settings.png"/></a>

> **Note:** If all selected servers are in the same environment, and Syslog defaults are set for that environment in **Organization Settings**, the values are prepopulated in the fields that appear. If eligible servers selected are in different environments, you can choose to use the default settings for the applicable servers or manually configure the settings for all servers. 

## Enabled Servers

When Syslog is enabled, the server has a gray arrow icon beside its name in the grid. Hover over the icon to see the output location of Protect events.

<a href="assets/images/Output-to-syslog.png" rel="lightbox" title="Output to Syslog enabled"><img class="thumbnail" src="assets/images/Output-to-syslog.png"/></a>

To edit server settings, repeat the steps above to update the values in the appropriate configuration form, and save your changes. 


