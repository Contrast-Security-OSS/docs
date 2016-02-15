<!--
title: ".Net Agent Installation"
description: "Installing the Contrast .NET Agent."
-->

## Before Beginning Installation

Confirm the following:

* You have administrative access to the web server and the server is supported by Contrast
* There is a deployed application to be analyzed and the web application technology is supported by Contrast
* The server has at least .NET Framework 4.0 installed
* Contrast will be the only profiler present
* IIS can be restarted
* The web server has network connectivity with TeamServer

Now you're ready to install the Contrast .NET Agent.  Simply log in to the Contrast TeamServer and select **Add an Application**. You can then select the .NET Agent which will download a zip archive file. (Note that you may need to specify proxy authentication information required by your network here before downloading the agent.) Extract the archive on the web server and run ***ContrastSetup.exe***. This will install the .NET Agent. To start analyzing an application, simply point your browser to the web application and use the web application as you normally would: click on links, submit forms using normal data, etc.  The .NET Contrast Agent’s sensors will gather information about the application’s security, architecture, and libraries. The results of the Agent’s analysis can be viewed on Contrast Team Server.

## Customize Configuration

You may wish to customize the behavior of the .NET Agent to better suit your needs.

[Configure Proxy, Performance, Logging, and Analysis](user_netconfig.html#config)

[Exclude Applications from Analysis](user_netconfig.html#pool)

[Customize the Server Name](user_netconfig.html#servers)

[Customize Application Names](user_netconfig.html#apps)

Lastly, if you encounter any difficulties using the .NET Agent you can check out our [Troubleshooting](user_netfaq.html#trouble) resources.
