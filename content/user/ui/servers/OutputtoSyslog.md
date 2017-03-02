<!--
title: "Output to Syslog"
description: "Overview of how to send protection events to Syslog"
tags: "Protection Syslog Output"
-->

This feature allows you to send security logs to a remote Syslog server in addition to Contrast's security log. By sending logs to Syslog, you no longer have to check Contrast logs. Please note that this is only available for Java clients. 

**Note: The following instructions are written in the context that Protect mode is on for the servers to which you're applying this featuer. If Protection is off - either in the row menu or for all selections of a batch action - relevant actions are disabled and hovering over them in the menu.**


## Servers Grid

In the Servers tab in Contrast, select the server(s) in the grid menu to which you'd like to apply Output to Syslog actions. In the dropdown menu, select **Enable Output to Syslog**. You must have enabled Output to Syslog to see the **Edit** or **Disable** actions.

<a href="assets/images/SyslogServersGridMenu.png" rel="lightbox" title="Servers grid menu"><img class="thumbnail" src="assets/images/SyslogServersGridMenu.png"/></a>

###Configure output to Syslog

If you choose the **Enable Output to Syslog** action from the row menu, you're brought directly to the **Configure Output to Syslog** dialog. 

* If defaults have been set in **Organization Settings** > **Servers**, those values are shown here. 
* If you change these values, a link to restore the organization defaults appears. 
* If there is no organization default, the fields are blank. 
* If there is a previous configuration other than the organization default, those values are saved and shown with the option to restore the organization defaults. 
* If no organization default exists, there is a checkbox to set the current configuraton as the default. (This option is only available to Organization Admins.)

You can toggle through the severity badges to define severity levels for each. The defaults are:

    "1 - Alert" for Exploited
    "4 - Warning" for Blocked
    "5 - Notice" for Probed

The icon for a protected server with Output to Syslog configured uses 'fa-shield' (#808080) with 'fa-long-arrow-right' (#0DA1A9) superimposed. By hovering over this icon, you see the tooltip text including the location of where protection events are output.

##Batch Actions

Selecting the shield icon in the batch action menu above the grid reveals the **Protection Licensing and Output** menu, which also offers the Enable, Edit and Disable Output to Syslog actions. These actions are only functional when at least one of the selected servers is eligible, and the action is only applied to the eligible selection(s).

When **Apply Protection License** is selected to one or more servers, the Upgrade License dialog includes a checkbox to **Enable Output to Syslog**. 
* If checked, the workflow proceeds to the Output Configuration dialog.
* If a default configuration is set up on the **Organization Settings** > **Servers** page, the values default to that.

If any of the selected servers have previous Syslog configurations when you choose the **Enable Output to Syslog** action from the batch action menu, a dialog appears. You may then decide to whether to keep the existing configurations and set up the remaining servers, or to (re)configure all. If there are no previous configurations, you are taken straight to the Configuration dialog. If an organization default exists, the values will default to that.

## Server Settings

The Server Settings dialog includes a checkbox to configure Output to Syslog. Checking the box expands the dialog to show configuration, which includes the ability to restore or set up organization defaults.

## Organization Settings

Organization settings act as the default configuration for all new servers.

## Setting up Syslog

You may have to enable remote logging so that your Syslog can receive outside messages. <!-- Where? -->
