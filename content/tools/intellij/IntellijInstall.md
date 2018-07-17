<!--
title: "Use Contrast for IntelliJ"
description: "Instructions for downloading and installing Contrast for IntelliJ"
tags: "tools ide plugins IntelliJ download install"
-->


## About Contrast for IntelliJ

Contrast provides visibility of vulnerabilities in your applications, and protects your applications against attacks. For applications deployed with the Contrast agent, you can access vulnerability information directly within your IntelliJ IDEA. You're directed to the line of code inside IntelliJ, and can view more details in the Contrast console, which allows you to provide application security feedback to developers right at the time of development for faster remediation.

### Supported systems 

IntelliJ versions:
* 2017.1.5 +


## Setup and Configuration

### Step one

* On **Windows**, download the Contrast plugin by navigating to **File > Settings > Plugins > Browse Repositories**. 
* On **OSX**, download the Contrast plugin by navigating to **Preferences > Plugins > Search in Repositories**. 
* Search for “Contrast Security”.
* Click **Install**. 

<a href="assets/images/IntelliJ-plugin-install.png" rel="lightbox" title="Install Contrast for IntelliJ"><img class="thumbnail" src="assets/images/IntelliJ-plugin-install.png"/></a>

### Step two

* Once you install the Contrast plugin for IntelliJ IDEA, configure it by going to **File > Settings > Contrast**. To find your [keys](user-account.html#profile) in the Contrast application, go to the **user menu > Your Account > Profile page**.
* Add the **TeamServer URL**, **Username**, and **Service Key** in the given fields.
* Add a new organization by clicking the **Add** button.
* Enter the API key and click the **Retrieve organizations** button.
* Choose an organization.
* Click the **Test Connection** button.

>**Note:** An organization must have already been added for the connection to succeed.

* Once the plugin is configured, click the refresh button in the Contrast tool window to update the list of vulnerabilities.

<a href="assets/images/IntelliJ-plugin-preferences.png" rel="lightbox" title="Configure Contrast for IntelliJ"><img class="thumbnail" src="assets/images/IntelliJ-plugin-preferences.png"/></a>

Well done! IntelliJ is configured to get vulnerability information from Contrast. 

## Find Vulnerabilities

The Vulnerabilities view in IntelliJ shows a list of all the vulnerabilities from Contrast. To sort vulnerabilities, click on the column header. 

<a href="assets/images/IntelliJ-column-header.png" rel="lightbox" title="Sort vulnerabilities"><img class="thumbnail" src="assets/images/IntelliJ-column-header.png"/></a>

You can also click on the filter (funnel) icon to open the **Set Filters** dialog. 

<a href="assets/images/IntelliJ-plugin-filter.png" rel="lightbox" title="Filter vulnerabilities in the dialog"><img class="thumbnail" src="assets/images/IntelliJ-plugin-filter.png"/></a>

For more information on a vulnerability, double-click on its entry in the list.

<a href="assets/images/IntelliJ-plugin-details-view.png" rel="lightbox" title="View vulnerability details"><img class="thumbnail" src="assets/images/IntelliJ-plugin-details-view.png"/></a>


