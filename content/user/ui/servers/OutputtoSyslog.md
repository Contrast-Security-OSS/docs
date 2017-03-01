<!--
title: "Output to Syslog"
description: "Overview of how to send protection events to Syslog"
tags: "Protection Syslog Output"
-->

## Servers Grid

**Row menu:** Add Enable/Disable and Edit Output to Syslog actions to the **Row** menu. Protection must be on to Enable and Output to Syslog must be enabled to show the Edit or Disable actions. <!-- - see mockups -->

**Batch Actions:** The License menu includes the Enable, Edit and Disable Output to Syslog options as well. License and Output actions are separated by a horizontal rule in the menu. When hovering over the shield icon in batch actions, the tooltip reads "Protection Licensing and Output".

Note that you follow our "smart application" paradigm where actions are only functional when at least one selection is eligible, and the action is only be applied to the eligible selection(s).

If Protection is off - either in the row menu or for all selections of a batch action - relevant actions are disabled. Hovering over them in the menu generates a tooltip stating "You must first apply a Protection license in order to enable output to Syslog."

When **Apply Protection License** is selected (batch or row), the Upgrade License dialog includes a checkbox to **Enable Output to Syslog**. If checked, the workflow proceeds to the Output Configuration dialog. If a default configuration is set up on the Org Settings > Servers page, then values default to that.

If any of the selected servers have previous Syslog configurations when you choose the **Enable Output to Syslog** action from the batch action menu, a dialog appears. You may then decide to whether to keep the existing configurations and set up the remaining servers, or to (re)configure all. If there are no previous configurationss, you are taken straight to the Configuration dialog. If an organiation default exists, then values will default to that.

If you choose the **Enable Output to Syslog** action from the row menu, you're brought directly to the Configuration dialog. If defaults have been set in Organization Settings > Servers, those values are shown here. If the user changes these values, a link to restore the organization defaults appears. If there is no organization default, the fields will be blank. If there is a previous configuration different than the organization default, those values will be saved and shown with the option to restore the organization defaults. If no organization default exists, there is a checkbox to set them using the chosen configuration. (Note: this option is only available to Organization Admins).

You can toggle through the severity badges to define severity levels for each. Defaults are:

    "1 - Alert" for Exploited
    "4 - Warning" for Blocked
    "5 - Notice" for Probed

The new icon for a protected server with Output to Syslog configured uses 'fa-shield' (#808080) with 'fa-long-arrow-right' (#0DA1A9) superimposed. <!-- We can discuss this icon further at the time of implementation - i.e. whether or not we can superimpose the two individual icons or if need to create a custom combined icon. -->

By hovering over this icon, you see the tooltip text including the location of where protection events are output. <!-- (see mockup) -->

## Server Settings

The Server Settings dialog includes a checkbox to configure Output to Syslog. This active only if Protection is turned on; otherwise, it's shown as disabled.

Checking the box expands the dialog to show configuration, which works as described in the previous section including the ability to restore or set up organization defaults.

## Organization Settings

Organization settings act as the default configuration for all new servers.

## Agent Communication

There is going to have to be something on the backend that recognizes when to trigger the Enable Output dialog, and to ensure that the ‘previous configurations’ are truly unique to the org default.

Make sure that Restore and Set organization default will work for a batch action as well (in the config dialog). --> Will be covered as part of a test case

## Setting up Syslog

You may have to enable remote logging so that your Syslog can receive outside messages.
