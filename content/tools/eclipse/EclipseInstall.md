<!--
title: "Downloading Contrast for Eclipse"
description: "Instructions for Downloading and Installing Contrast for Eclipse"
tags: "tools Eclipse Download Installation Ubuntu"
-->

## About Contrast for Eclipse

Contrast provides visibility to vulnerabilities in your applications and protects them against attacks. For applications deployed with the Contrast agent, access vulnerability information directly within your Eclipse IDE. You're directed to the line of code inside Eclipse and can view more details in the Contrast console, allowing you to provide application security feedback to developers right at the time of development for faster remediation.

### Supported systems 

Eclipse versions:

* Photon (4.8)
* Oxygen (4.7)
* Neon (4.6)

Operating systems:

* Mac/OS
* Windows

## Setup and Configuration

### Step one

* Download the Contrast plugin from the Eclipse Marketplace by clicking on **Help** and then **Eclipse Marketplace**. 
* Search for “Contrast Security”.
* Click **Install**. 

<a href="assets/images/Eclipse-plugin-install.png" rel="lightbox" title="Install Contrast for Eclipse"><img class="thumbnail" src="assets/images/Eclipse-plugin-install.png"/></a>

### Step two

* Open the **Contrast View** to configure communication to Contrast application. 
* To open and configure the plugin, navigate to **Window** > **Show View** > **Other**. 
* Search for “Contrast”, and add the view that appears in the search.

### Step three

* Once you add the Contrast View, enter your Username, API Key and Service Key in the configuration screen. You can also navigate to the configuration screen by going to **Eclipse Preferences** and searching for "Contrast". 

<a href="assets/images/Eclipse-plugin-preferences.png" rel="lightbox" title="Configure connection settings"><img class="thumbnail" src="assets/images/Eclipse-plugin-preferences.png"/></a>

* To find your keys in the Contrast application, go to the Your Account section and scroll to the bottom.  The Organization ID is available on the API page in Organization Settings (with edit and higher access roles).

### Step four 

* Click the button to **Add** an organization.

Well done! Eclipse is configured to get vulnerability information from Contrast. 

## Find Vulnerabilities

The Vulnerabilities view in Eclipse shows a list of all the vulnerabilities from Contrast. You can sort and filter them.

<a href="assets/images/Eclipse-plugin-vulnerabilities.png" rel="lightbox" title="View a list of vulnerabilities found by Contrast"><img class="thumbnail" src="assets/images/Eclipse-plugin-vulnerabilities.png"/></a>

For more information, double-click the vulnerability title; or, click on the **Go to page** button in the **Contrast Vulnerabilities** tab to go to the Contrast UI.

<a href="assets/images/Eclipse-plugin-vulnerability-details.png" rel="lightbox" title="View vulnerability details"><img class="thumbnail" src="assets/images/Eclipse-plugin-vulnerability-details.png"/></a>



