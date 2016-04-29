<!--
title: "Using The .NET Contrast Tray"
description: "Guide to using the .NET Contrast Tray"
tags: "configuration tray agent .Net"
-->

The **.NET Contrast Tray** is a Windows system tray application (***ContrastTray.exe***) that displays high-level information about the health of the agent. The following annotated screenshot demonstrates an example of a healthy agent.

<a href="assets/images/UsingTray.png" rel="lightbox" title="Healthy Agent"><img class="thumbnail" src="assets/images/UsingTray.png"/></a>

>**Note:** The Contrast Tray is not required to be running in order to analyze applications with Contrast; the Contrast Tray exists only to provide status information about the agent. This information can be useful when verifying that the agent is behaving as expected (especially when the agent is first installed).

#### Contrast Tray Status Indicators

* **Contrast.NET Service** displays a green light when the Contrast Service has been installed correctly and is running
* **TeamServer Communication** displays a green light when the Contrast Service can communicate with [TeamServer](https://app.contrastsecurity.com). The most common error causing TeamServer communication to fail is incorrect proxy settings.


#### Contrast Tray Tabs

* The **Action** tab provides high-level instructions for using the Contrast.NET Agent; these instructions change based on the agent's state. For example, if the agent is unable to connect to TeamServer then the Action tab will provide details on the error and suggestions on how to resolve the problem. 

* The **IIS** tab displays a list of all web applications running on the IIS server (within application pools that use the integrated pipeline). The name displayed matches the alias used by IIS to identify the application. The **URLs** column displays the number of unique URLs (not including the query string) for the application that the agent has observed. The **Last Activity** column displays the time of the last request analyzed by the agent for that application.

    >**Note:** This tab is only displayed if IIS is installed

* The **IIS AppPools** tab displays a list of all application pools configured on the IIS server. This tab displays each application pool's configuration (architecture, pipeline mode, CLR version, identity) and whether or not applications in that application pool will be analyzed. Application pool analysis is configured using the .NET Agent's [Application Pool Filtering](user_netconfig.html#pool) (The AppPools tab was added in version 3.2.7)

    >**Note:** This tab is only displayed if IIS is installed

* The **IIS Express** tab displays a list of all web appliations set up to run on IIS Express.

    >**Note:** This tab is only displayed if IIS Express is installed

* The **Console** tab includes status and error messages that may be useful for troubleshooting problems with the Contrast.NET Agent


## See Also

[Using Contrast With IIS Express](user_netinstall.html#iis)
