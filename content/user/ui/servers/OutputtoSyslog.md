<!--
title: "RASP Output to Syslog"
description: "Overview of how to send protection events to Syslog"
tags: "Protection Syslog Output"
-->

Potential temporary location: User > Contrast UI > Settings ?


## Servers Grid

Row menu: Add Enable/Disable and Edit Output to Syslog actions to the Row menu. (Note: Protection must be ON to Enable, and Output to Syslog must be enabled to show the Edit or Disable actions - see mockups)

Batch Actions: The License menu will now include the Enable, Edit and Disable Output to Syslog options as well. License and Output actions will be separated by a horizontal rule in the menu.
When hovering over the shield icon in batch actions, the tooltip will now read "Protection Licensing and Output"

Note that we will follow our "smart application" paradigm here where actions are only functional when at least one selection is eligible, and the action will only be applied to the eligible selection(s)

If Protection is OFF (either in the row menu or for ALL selections of a batch action), relevant actions will be disabled and hovering over them in the menu will generate a tooltip stating "You must first apply a Protection license in order to enable output to Syslog."

When "Apply Protection License" is selected (batch or row), the Upgrade License dialog will now include a checkbox to Enable Output to Syslog along with this action. If checked, the workflow will proceed to the Output Configuration dialog. If a default configuration has been set up on the Org Settings > Servers page, then values will default to that.

Choosing the "Enable Output..." action from the batch action menu will bring up a dialog if any of the selected servers have previous Syslog configurations. The user may then decide to whether to keep the existing configs and set up the remaining servers, or to (re)configure all. If there are no previous configs, then the user is taken straight to the Configuration dialog. If an org default exists then values will default to that.

Choosing the "Enable Output..." action from the row menu will bring the user straight to the Configuration dialog. If defaults have been set in Org Settings > Servers, then those values will be shown here. If the user changes these values, a link to restore the org defaults will appear. If there is no org default then the fields will be blank. If there is a previous configuration different than the org default, those values will be saved and shown, with the option to restore the org defaults. If no org default has been defined there will be a checkbox to set them here using the chosen configuration. (Note, this option is only available to Org Admins).

You can toggle through the severity badges to define severity levels for each. Defaults are:
    "1 - Alert" for Exploited
    "4 - Warning" for Blocked
    "5 - Notice" for Probed

Success message will follow standard conventions as shown in the mockup.

New icon for a protected server with output to Syslog configured uses 'fa-shield' (#808080) with 'fa-long-arrow-right' (#0DA1A9) superimposed. We can discuss this icon further at the time of implementation - i.e. whether or not we can superimpose the two individual icons or if need to create a custom combined icon.

Hovering over this icon will show the same tooltip text as the regular Protect icon would, but will also include the location of where protection events are being output (see mockup).

## Server Settings

The Server Settings dialog has been cleaned up and now also includes the checkbox to configure output to Syslog (active only if Protection is turned ON; otherwise is shown as disabled with a tooltip)

Checking the box will expand the dialog to show configuration, which will work as described in the previous section (including the ability to restore or set up Org defaults)

## Organization Settings

Settings here will follow what's outlined above and will act as the default configuration for all new servers.

## Agent Communication

There is going to have to be something on the backend that recognizes when to trigger the Enable Output dialog, and to ensure that the ‘previous configurations’ are truly unique to the org default.

Make sure that Restore and Set org default will work for a batch action as well (in the config dialog). --> Will be covered as part of a test case

## Setting up Syslog

You may have to enable remote logging, so your Syslog can receive outside messages.
