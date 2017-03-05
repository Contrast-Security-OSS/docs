<!--
title: "Output to Syslog"
description: "Overview of how to send protection events to Syslog"
tags: "Protection Syslog Output"
-->

This feature allows Java clients to send security logs to a remote Syslog server in addition to the Contrast security log. By sending logs to Syslog, you no longer have to monitor Contrast logs. 

> **Note:** The following instructions are written in the context that a Protection license has already been applied to the server(s) on which you would like to enable Syslog output. If a Protection license has been applied, a shield icon will appear beside the server name. If no license has been applied, Syslog actions will be disabled in the row menu of an individual server, or ignored for all non-licensed selections within a batch action.

## Organization Settings

Organization settings act as the default configuration for all new servers. You can set these by choosing **Organization Settings** in the User menu and then **Servers** in the sidebar. Select the checkbox to **Enable output of Protection events to Syslog**, which expands the dialog, and then enter your desired settings.

You can toggle through the severity badges to define severity levels for each. The defaults are:

* **1 - Alert** for Exploited
* **4 - Warning** for Blocked
* **5 - Notice** for Probed


## Servers Grid

From the main **Servers** page, you may enable and configure Syslog output either to individual servers, or to multiple servers at one time (see the Batch Actions section later in this article). To apply to an individual server, select **Enable Output to Syslog** within its row dropdown menu. Note that once Syslog has been enabled, **Edit** and **Disable** actions will also be available.

<a href="assets/images/SyslogServersGridMenu.png" rel="lightbox" title="Individual server row menu"><img class="thumbnail" src="assets/images/SyslogServersGridMenu.png"/></a>

###Configure output to Syslog

If you choose the **Enable Output to Syslog** action, the workflow proceeds directly to a configuration dialog. 

<a href="assets/images/SyslogConfigureOutput.png" rel="lightbox" title="Configure Output to Syslog"><img class="thumbnail" src="assets/images/SyslogConfigureOutput.png"/></a>

* If Syslog defaults have been set in **Organization Settings**, those values are pre-populated here. 
* If you change the organization default values, a link to restore them appears. 
* If there is no organization default, fields are either blank or default to the first selection of dropdown menu. 
* If there is a previous configuration other than the organization default, those values are saved and shown with the option to restore the organization defaults. 
* If no organization default exists, there is a checkbox to set the current configuration as the default. (This option is only available to Organization administrators.)

When Syslog output is enabled on a server, the shield icon next to the server name is updated to include a blue arrow. Hovering over this icon produces a tooltip with the output location of protection events. 

<a href="assets/images/SyslogProtectLicenseTooltip.png" rel="lightbox" title="Protection License/Syslog tooltip"><img class="thumbnail" src="assets/images/SyslogProtectLicenseTooltip.png"/></a>

##Batch Actions

Selecting one or more servers within the Servers grid will enable the batch action menus, including **Protection Licensing and Output**. Here you will also find the **Enable**, **Edit** and **Disable Output to Syslog** actions. These actions are only functional when at least one of the selected servers is eligible, and the action is only applied to the eligible selection(s).

Licensing is also controlled within this menu, and when you select **Apply Protection License** for one or more servers, the Upgrade License dialog includes a checkbox to **Enable output of Protection events to Syslog**. 
* If checked, the workflow proceeds to the configuration dialog.
* If a default configuration is set via **Organization Settings**, those default values are pre-populated into the dialog fields.

When you choose the **Enable Output to Syslog** action from the batch action menu, a dialog appears if any of the selected servers have previous Syslog configurations. You may then decide whether to keep the existing configurations and set up the remaining servers, or to (re)configure all. 
* If there are no previous configurations, you're taken straight to the configuration dialog. 
* If an organization default exists, those default values are pre-populated into the dialog fields.

## Server Settings

You may access an individual server's settings either from its row dropdown menu in the grid, or from the **Server Settings** icon in the top right of that server's Overview page. The Server Settings dialog includes a checkbox to **Enable output of Protection events to Syslog**. Checking the box expands the dialog to show the configuration, where you can create server-specific Syslog properties, as well as restore or set up organization defaults for Syslog.

<a href="assets/images/SyslogServerSettings.png" rel="lightbox" title="Server Settings expanded to show Syslog configuration"><img class="thumbnail" src="assets/images/SyslogServerSettings.png"/></a>


> **Note:** You may have to enable remote logging so that your Syslog can receive outside messages. 
