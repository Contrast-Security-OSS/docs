<!--
title: "Use Contrast for Visual Studio Code"
description: "Instructions for downloading and installing Contrast for Visual Studio Code"
tags: "tools ide plugins visual studio code download install"
-->

## About the Visual Studio Code Plugin

Contrast provides visibility of vulnerabilities in your applications, and protects your applications against attacks. For applications deployed with the Contrast agent, you can access vulnerability information directly within your Visual Studio Code IDE. You're directed to the line of code inside Visual Studio Code, and can view more details in the Contrast application, which allows you to provide application security feedback to developers right at the time of development for faster remediation.

### Supported systems 

Visual Studio Code versions: 

* 1.42.1 and later

## Setup and Configuration

In Visual Studio Code, navigate to the **Extensions** tab and click **Install**. Allow the plugin to install, and restart the IDE. After restarting, click the **Contrast Security** tab to open the Contrast view. To enter your credentials, click the **Settings** gear icon.

<a href="assets/images/VSCode_toolbar.png" rel="lightbox" title="Contrast for Visual Studio Code toolbar"><img class="thumbnail" src="assets/images/VSCode_toolbar.png"/></a>

In **Settings**, select the **Workspace** tab and enter your **API Key**, **Organization ID**, **Contrast URL**, **Authorization Header**, and **Application ID** in the given fields.

> **Note:** An application must be onboarded in Contrast prior to using this plugin. The Application ID can be found in the URL of the application: */Contrast/static/ng/index.html#/organization-id/applications/**applicationID***.

<a href="assets/images/VSCode_settings.png" rel="lightbox" title="Configure Contrast for Visual Studio Code settings"><img class="thumbnail" src="assets/images/VSCode_settings.png"/></a>

Click the **Test Contrast Connection** icon to test your connection with Contrast. If the connection is successful, a response displays “Connected Successfully to Contrast Security.” If the connection is unsuccessful, the message displays “Cannot connect to Contrast Security” and guides you to fix the credentials causing the bad connection. 

## Find Vulnerabilities

Under the Contrast Security view, choose the **Filter Vulnerabilities** tab. Click **Enter** and all vulnerabilities will appear under **Contrast Security**.

Under each section, vulnerabilities are ordered by severity and then by status. Click on a vulnerability to see more information about it. 

The **Last Detected** timestamp and **Status** display automatically. To see detailed information, select **Overview**, **Details**, **HTTP Information**, and **How to Fix**. Once selected, the information appears in the bottom right **Output** tab. 

<a href="assets/images/VSCode_interface.png" rel="lightbox" title="Find Vulnerabilities in Contrast for Visual Studio Code"><img class="thumbnail" src="assets/images/VSCode_interface.png"/></a>

Select **Find this Vulnerability** to go to the line of the code where a vulnerability is found. If the vulnerability cannot be directly located, the **Output** tab indicates it cannot be found.

To see if there are new vulnerabilities, click the **Refresh** icon. **Refresh Problems** reloads the vulnerabilities already present.

To filter the vulnerabilities, navigate to the **Filter Vulnerabilities** tab and select a filter. For example, select the **Detection Date** filter. 

<a href="assets/images/VSCode_detectionfilter.png" rel="lightbox" title="Filter by detection date in Contrast for Visual Studio Code"><img class="thumbnail" src="assets/images/VSCode_detectionfilter.png"/></a>

In the page that follows, choose **Last Detected** or **First Detected**, and then choose **Last Day**, **Last 7 days**, **Last 30 days**, or **Last 12 Months**. 

<a href="assets/images/VSCode_lastdetected.png" rel="lightbox" title="Choose a detection date timeframe in Contrast for Visual Studio Code"><img class="thumbnail" src="assets/images/VSCode_lastdetected.png"/></a>

Use the arrow to go back to the first page. Select additional filtering options or click **Enter** to submit the filtering. To clear the selected filters, choose **Clear Filters** and click **Enter**.