<!--
title: ".Net Agent Installation"
description: "Installing the Contrast .NET Agent."
tags: "configuration installation agent .Net"
-->
## System Requirements

### Minimum
* .NET Framework 4.5.1 present
* 2 CPU
* 4 GB memory 

(Note that Contrast 3.3.1 required .NET 4.5.2 but this requirement was reduced to 4.5.1 in Contrast 3.3.2)

### Recommended 
* .NET Framework 4.5.1 present
* 4+ CPU
* 8+ GB memory  

## Before Beginning Installation

Confirm the following:
* You have administrative access to the web server and the server is supported by Contrast
* There is a deployed application to be analyzed and the web application [technology](user_netinstall.html#supp) is supported by Contrast
* The server meets the minimum system requirements (see above)
* Contrast will be the only profiler present
* IIS can be restarted
* The web server has network connectivity with TeamServer

You are now ready to install the Contrast .NET Agent.



## Installation 
To install the Contrast .NET Agent, follow these steps:

1. Log in to the Contrast TeamServer and select **Add an Application**. 
2. Select the **.NET Agent** and click **Download Agent**. This will download a zip archive file (e.g. ***ContrastSetup_3.2.5.zip***). Note that you may need to specify proxy authentication information required by your network here before downloading the agent.
3. Extract the archive on the web server and run ***ContrastSetup.exe***. This will install the .NET Agent. 
4. To start analyzing an application, simply point your browser to the web application and use the web application as you normally would: click on links, submit forms using normal data, etc.  The .NET Contrast Agent’s sensors will gather information about the application’s security, architecture, and libraries. The results of the Agent’s analysis can be viewed on Contrast Team Server.

## Silent/Headless Installation 
The Contrast .NET Agent installer supports the command line options below. These options are "silent" and will not present the installer's user interface.

* Install: ```ContrastSetup.exe -s -norestart```

* Install and Do Not Start the Contrast.NET Tray Application: ```ContrastSetup.exe -s -norestart StartTray=0```

* Uninstall: ```ContrastSetup.exe -uninstall -s -norestart```

* Repair: ```ContrastSetup.exe -s -repair```


## Customize Configuration

You may wish to customize the behavior of the .NET Agent to better suit your needs.

* [Configure Proxy, Performance, Logging, and Analysis](user_netconfig.html#config)

* [Exclude Applications from Analysis](user_netconfig.html#pool)

* [Customize the Server Name](user_netconfig.html#servers)

* [Customize Application Names](user_netconfig.html#apps)

Lastly, if you encounter any difficulties using the .NET Agent you can check out our **Troubleshooting** resources.
