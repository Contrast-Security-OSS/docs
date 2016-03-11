<!--
title: "Using The .NET Contrast Tray"
description: "Guide to using the .NET Contrast Tray"
tags: "configuration tray agent .Net"
-->

The **.NET Contrast Tray** is a Windows system tray application (***ContrastTray.exe***) that displays high-level information about the health of the agent. The following annotated screenshot demonstrates an example of a healthy agent.

<a href="assets/images/KB3-e09_1.jpg" rel="lightbox" title="Healthy Agent"><img class="thumbnail" src="assets/images/KB3-e09_1.jpg"/></a>

>**Note:** The Contrast Tray is not required to be running in order to analyze applications with Contrast; the Contrast Tray exists only to provide status information about the agent. This information can be useful when verifying that the agent is behaving as expected (especially when the agent is first installed).

#### Contrast Tray Status Indicators

* **Contrast.NET Service** displays a green light when the Contrast Service has been installed correctly and is running
* **TeamServer Communication** displays a green light when the Contrast Service can communicate with [TeamServer](https://app.contrastsecurity.com). The most common error causing TeamServer communication to fail is incorrect proxy settings.


#### Contrast Tray Tabs

* The **IIS** tab displays a list of all web applications running on the IIS server (within application pools that use the integrated pipeline). The name displayed matches the alias used by IIS to identify the application. The **URLs** column displays the number of unique URLs (not including the query string) for the application that the agent has observed. The **Last Activity** column displays the time of the last request analyzed by the agent for that application.

    >**Note:** This tab is only displayed if IIS is installed

* The **IIS Express** tab displays a list of all web appliations set up to run on IIS Express.

    >**Note:** This tab is only displayed if IIS Express is installed

* The **Console** tab includes status and error messages that may be useful for troubleshooting problems with the Contrast.NET Agent

## Contrast Tray States

### Starting

#### Action Required

None. Wait for the agent to start.

<a href="assets/images/KB3-e09_2.jpg" rel="lightbox" title="Waiting For The Agent To Start"><img class="thumbnail" src="assets/images/KB3-e09_2.jpg"/></a>

### Started

#### Action Required

Start using web applications on the server to have the agent analyze those applications.

<a href="assets/images/KB3-e09_3.jpg" rel="lightbox" title="Application Analysis When Started"><img class="thumbnail" src="assets/images/KB3-e09_3.jpg"/></a>

***Contrast Tray*** *after the agent has started and before a web application has been visited*


### Stopping

#### Action Required

None. Wait for the agent to stop.

<a href="assets/images/KB3-e09_4.jpg" rel="lightbox" title="Waiting For The Agent To Stop"><img class="thumbnail" src="assets/images/KB3-e09_4.jpg"/></a>


### Stopped

#### Action Required

Start the agent. After the agent has started, browse to and use web applications to have the agent analyze those applications.

<a href="assets/images/KB3-e09_5.jpg" rel="lightbox" title="Application Analysis When Stopped"><img class="thumbnail" src="assets/images/KB3-e09_5.jpg"/></a>


### Error

#### Action Required

Follow the prompt provided by the notification bubble. In this particular example, the agent cannot connect to TeamServer. The user may need to review network and firewall settings to ensure the agent can connect to TeamServer. The user may also need to review and correct the TeamServer proxy settings in Contrast Service's configuration file: ***C:\Program Files\Contrast.NET\DotnetAgentService.exe.config***

<a href="assets/images/KB3-e09_6.jpg" rel="lightbox" title="Start Error"><img class="thumbnail" src="assets/images/KB3-e09_6.jpg"/></a>

### Installation Error

#### Action Required

Uninstall the agent. Ensure that your user has appropriate permissions to install software on the server. Run the agent installer again.

<a href="assets/images/KB3-e09_7.jpg" rel="lightbox" title="Installation Error"><img class="thumbnail" src="assets/images/KB3-e09_7.jpg"/></a>


## See Also

[Using Contrast With IIS Express](user_netinstall.html#iis)
