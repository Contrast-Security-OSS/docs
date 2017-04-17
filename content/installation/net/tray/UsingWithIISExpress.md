<!--
title: "Using Contrast With IIS Express"
description: "Guide to using IIS Express"
tags: "installation tray configuration IIS express agent .Net"
-->

Analyzing IIS Express with Contrast is performed using the **Contrast.NET Tray**. If installed, the tray will have a tab for IIS Express.

>**Note:** All instances of IIS Express running in the user's session will be closed when the **Contrast.NET Tray** is started.

## Applications

The **IIS Express** tab will show all the applications that have previously been started in IIS Express. Selecting an application from the list will reveal details in the form below, such as application pool, physical path, process ID (PID) and last activity.

<a href="assets/images/KB3-e01_1.jpg" rel="lightbox" title="IIS Express Tab"><img class="thumbnail" src="assets/images/KB3-e01_1.jpg"/></a>

## Starting An Application With Contrast

To start an application, click the **Start** link in its row. This will start a new IIS Express process with the Contrast agent attached and open a browser to the local URL. The Contrast icon for the row will darken and the PID will be updated. The default **IIS Express Tray** will also appear, showing the application is running.

<a href="assets/images/KB3-e01_2.jpg" rel="lightbox" title="Updated IIS Express Tab"><img class="thumbnail" src="assets/images/KB3-e01_2.jpg"/></a>


## Stopping An Application

To stop an application, click the **Stop** link in its row. This will close the IIS Express instance for that application. If this was the only application running under IIS Express, the default **IIS Express Tray** will also close.

>**Note:** Exiting the **Contrast.NET Tray** will close running instances of IIS Express.


## Troubleshooting

If an application is missing from the application list:

* Check the IIS Express ***config*** file to ensure the application is configured: ```%Documents%\IISExpress\config\applicationhost.config```
* Confirm the physical path listed in the configuration is valid and accessible

If there are no applications listed in the application list:

* Confirm the IIS Express configuration file exists and is valid: ```%Documents%\IISExpress\config\applicationhost.config```
* For each application, confirm the physical path is valid and accessible

If using Visual Studio 2015 and you don't see your application in the list:

* See [Visual Studio 2015 IIS Express Configuration](troubleshooting_netinstall.html#vs)
