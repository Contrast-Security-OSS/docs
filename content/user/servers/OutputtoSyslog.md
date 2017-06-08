<!--
title: "Output to Syslog"
description: "Overview of how to send protection events to Syslog"
tags: "user server Protection Syslog Output"
-->

This feature allows Java clients to send security logs to a remote Syslog server in addition to the Contrast security log. By sending logs to Syslog, you no longer have to monitor Contrast logs. 

> **Note:** The following instructions are written in the context that a Protection license is applied to the server(s) on which you would like to enable Syslog output. If a Protection license is applied, a shield icon appears beside the server name. If no license is applied, Syslog actions are disabled in the row menu of the individual server or ignored for all non-licensed selections within the batch action.

## Organization Settings

Organization settings act as the default configuration for all new servers. You can set these by choosing **Organization Settings** in the User menu and then **Servers** in the sidebar. Select the checkbox to **Enable output of Protection events to Syslog**, which expands the dialog, and then enter your desired settings.

You can toggle through the severity badges to define severity levels for each. The defaults are:

* **1 - Alert** for Exploited
* **4 - Warning** for Blocked
* **5 - Notice** for Probed

For more information, go to the [Server Defaults](admin-orgsettings.html#org-server) article. 

## Servers Grid

From the **Servers** page, you can enable and configure Syslog output to individual servers or to multiple servers at one time. (See the **Batch Actions** section in this article for more information.) For an individual server, select **Enable Output to Syslog** in the row dropdown menu. **Edit** and **Disable** actions are available once Syslog is enabled.

<a href="assets/images/SyslogServersGridMenu.png" rel="lightbox" title="Individual server row menu"><img class="thumbnail" src="assets/images/SyslogServersGridMenu.png"/></a>

###Configure output to Syslog

If you choose the **Enable Output to Syslog** action, the workflow proceeds directly to a configuration dialog. 

<a href="assets/images/SyslogConfigureOutput.png" rel="lightbox" title="Configure Output to Syslog"><img class="thumbnail" src="assets/images/SyslogConfigureOutput.png"/></a>

* If environment or Syslog defaults have been set in **Organization Settings**, those values are prepopulated here. 
* If no organization default exists, there is a checkbox to set the current configuration as the default. (This option is only available to Organization Administrators.)

When Syslog output is enabled on a server, the shield icon next to the server name is updated to include a blue arrow. Hovering over this icon produces a tooltip with the output location of Protection events. 

<a href="assets/images/SyslogProtectLicenseTooltip.png" rel="lightbox" title="Protection License/Syslog tooltip"><img class="thumbnail" src="assets/images/SyslogProtectLicenseTooltip.png"/></a>

##Batch Actions

Selecting one or more servers in the Servers grid enables the **Protection Licensing and Output** menu, which includes the **Enable**, **Edit** and **Disable Output to Syslog** actions. These actions are only functional when at least one of the selected servers is eligible, and the action is only applied to the eligible selection(s).

* If all eligible selections are in the same environment and an environment default was set in **Organization Settings**, the configuration dialog fields are prepopulated with the defaults settings. 
* If the eligible selections are in different environments, you can choose to use the default settings for the applicable servers or manually configure the settings for all servers. 
* If any or all servers are in environments for which no defaults have been set, they must be manually configured.

You can also control licensing within the menu. When you select **Apply Protection License** for one or more servers, the Upgrade License dialog includes a checkbox to **Enable output of Protection events to Syslog**. 

* If checked, the workflow proceeds to the configuration dialog.
* If an environment default configuration was set in **Organization Settings**, those default values are prepopulated into the dialog fields.

<!-- When you choose the **Enable Output to Syslog** action from the menu, a dialog appears if any of the selected servers have previous Syslog configurations. You may then decide whether to keep the existing configurations and set up the remaining servers, or to (re)configure all.  -->

## Server Settings

You can access server settings for an individual server in the row dropdown menu or from the **Server Settings** icon in the top right of the server's Overview page. The Server Settings dialog includes a checkbox to **Enable output of Protection events to Syslog**. Checking the box expands the dialog to show the configuration, where you can create server-specific Syslog properties, as well as restore or set up organization defaults for Syslog.

<a href="assets/images/SyslogServerSettings.png" rel="lightbox" title="Server Settings expanded to show Syslog configuration"><img class="thumbnail" src="assets/images/SyslogServerSettings.png"/></a>


> **Note:** You may have to enable remote logging so that your Syslog can receive outside messages. 
