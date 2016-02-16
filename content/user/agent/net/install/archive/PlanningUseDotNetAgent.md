<!--
title: "Getting Started with the .Net Agent"
description: "Planning for the Contrast .NET Agent."
-->

There are a few things to take into consideration when you are planning to use Contrast to analyze your ASP.NET web applications. The following information should help you prepare your environment for the Contrast .NET agent.

## Administrative Access to Web Server with Application(s) to Analyze
You'll need administrative access to the web server in order to install the Contrast .NET Agent. Additionally, the web server should have at least one web application deployed for Contrast to analyze. You'll also want to make sure that the server and application are supported by Contrast; see [.NET Contrast Agent Supported Technologies](user_netinstall.html#supp). Note that the .NET Contrast Agent requires that the machine have .NET Framework 4.0+ installed.  This requirement does not extend to applications to be analyzed; the .NET Contrast Agent can analyze web applications that run on CLR 2.0 (.NET 2.0/3.0/3.5) or CLR 4 (.NET 4.0+).

## Contrast Must Be the Only Profiler 
The Contrast .NET Agent uses the CLR Profiling API to perform data and code flow analysis (i.e. detect SQL-injection, XSS, weak cryptography, etc.) as well as to detect libraries and technologies in use by the application. The Microsoft CLR has a built-in limitation that only one profiler can profile a process. This limitation comes from Microsoft and their implementation of the CLR.  

From Microsoft's documentation: https://msdn.microsoft.com/en-us/library/bb384689(v=vs.110).aspx)

```bash
Only one profiler can profile a process at one time in a given environment. 
You can register two different profilers in different environments, but each must profile separate processes.
```

## Contrast Must Restart IIS 

The Profiling API requires that the profiled process be started WITH the profiler therefore the .NET Agent must restart IIS (and any IIS worker processes) in order to attach the Contrast profiler. This is similar to how other profiling products (e.g. memory or performance profilers) behave. Users do not have to restart IIS manually, Contrast will automatically restart IIS when the agent is installed and whenever the .NET Agent is stopped or started. (Note that while the profiling API does offer the ability to attach to an already running process, this feature is only available in specific scenarios and later versions of the CLR.)

You may wish to change configuration of any web server monitoring tools that raise alarms when IIS is restarted. You may also wish to check IIS-dependent services are restarted appropriately when using Contrast. The .NET Agent restarts IIS by stopping the Windows Process Activation Service (WAS) and then starts any previously running services that are dependent on WAS (such as 'World Wide Web Publishing Service' (w3svc)). In some cases, users have needed to manually configure service dependencies so that WAS-dependent services were restarted with IIS (e.g. MSMQ Listener Adapter). 

## Installation

Before beginning installation, confirm the following:

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

