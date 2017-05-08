<!--
title: ".NET Agent Overview"
description: "Overview of the .NET agent"
tags: "installation configuration overview agent .Net"
-->

## Usage

The **Contrast.NET Agent** analyzes the behavior of .NET web applications running on IIS as users interact with these applications.

To start analyzing an application, install the .NET agent, and then simply point your browser to the web application and use it as you normally would: click on links, submit forms using normal data, etc. The .NET agent's sensors will gather information about the application's security, architecture and libraries. The results of the agent's analysis can be viewed on [Contrast TeamServer](https://app.contrastsecurity.com).


## .NET Agent Components

The .NET agent consists of several key components:

* **Contrast Service** (***DotnetAgentService.exe***) is a background Windows service that is responsible for adding **sensors** to IIS and web applications, receiving information from these sensors, and sending this information to the Contrast TeamServer. The Contrast Service also performs some passive analysis of applications when starting, such as analyzing an application's configuration for potential vulnerabilities. The Contrast Service starts automatically when Windows starts.

* Various **Sensors** are added to IIS and web applications on the server by the Contrast Service. These sensors gather vulnerability, library, technology and other information and send it to the Contrast Service. Note that the agent's sensors can only collect information when the Contrast Service is running **and** an ASP .NET application is actively being used.

* **Contrast Tray** (***ContrastTray.exe***) is a Windows system tray application that displays high-level information about the health of the agent. The Contrast Tray does not perform any analysis and does not need to be run; it only displays information for agent users that are logged into the server where the agent is installed.


## More Information

* [.NET Agent Supported Technologies](installation_net.html#supported)

* [Starting And Stopping The .NET Agent](troubleshooting_net.html#start)

* [Using The .NET Contrast Tray](installation_nettray.html#guide)

* [.NET Agent Configuration](installation_netconfig.html#config)

* [Getting .NET Agent Logs](troubleshooting_net.html#logs)
