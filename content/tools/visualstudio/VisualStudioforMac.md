<!--
title: "Use Contrast for Visual Studio for Mac"
description: "Instructions for downloading and installing Contrast for Visual Studio for Mac"
tags: "tools ide plugins visual studio mac download install"
-->

## About the Visual Studio for Mac Plugin

Contrast provides visibility of vulnerabilities in your applications, and protects your applications against attacks. For applications deployed with the Contrast agent, you can access vulnerability information directly within your Visual Studio for Mac IDE. You're directed to the line of code inside Visual Studio for Mac, and can view more details in the Contrast Security pad, which allows you to provide application security feedback to developers right at the time of development for faster remediation.

### Supported systems 

Visual Studio for Mac versions: 

* 8.3.0 and later

## Setup and Configuration

From the Contrast [distribution repository](https://github.com/Contrast-Security-OSS/contrast-vsmac-plugin-distro/releases/), download the Visual Studio for Mac plugin file (.mpack). 

In Visual Studio for Mac, navigate to **Visual Studio** and click **Extensions**. Click **Install from file...** and select the downloaded .mpack file. Allow the plugin to install, and restart the IDE.

Open the Contrast view by going to **View** > **Pads** > **Contrast**. Click **Configure** and add your **Contrast URL**, **Username**, **Service Key**, **API Key** and **Organization ID** in the given fields.

<a href="assets/images/VSforMac_credentials.png" rel="lightbox" title="Configure Contrast for Visual Studio for Mac"><img class="thumbnail" src="assets/images/VSforMac_credentials.png"/></a>

Click **Test Connection** to test your connection with Contrast. If the connection is successful, click **Save**. Visual Studio for Mac is configured to get vulnerability information from Contrast.

## Find Vulnerabilities

In the Contrast view, click the magnifying glass and select an application. After you select the application, the plugin loads vulnerabilities that Contrast has found for the application. Under each section, vulnerabilities are ordered by severity and then by status. Click on a vulnerability to see more information about it.

<a href="assets/images/VSforMac_vulnlist.png" rel="lightbox" title="Find Vulnerabilities in Contrast for Visual Studio for Mac"><img class="thumbnail" src="assets/images/VSforMac_vulnlist.png"/></a>

When you click on a vulnerability, you can choose to see general or more detailed information. The General Information section includes severity, application, status, and history. The Details section includes information pulled from Contrast, such as vulnerability details, notes, and discussion.

<a href="assets/images/VSforMac_vulndetail.png" rel="lightbox" title="See vulnerability details in Contrast for Visual Studio for Mac"><img class="thumbnail" src="assets/images/VSforMac_vulndetail.png"/></a>

If you cannot see your vulnerabilities list, click **Refresh**. To clear all selected filters, click the broom button. This also applies for Server and Application lists.