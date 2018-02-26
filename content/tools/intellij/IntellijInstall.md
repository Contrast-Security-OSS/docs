<!--
title: "Downloading Contrast for IntelliJ"
description: "Instructions for Downloading and Installing Contrast for IntelliJ"
tags: "tools IntelliJ Download Installation"
-->

## Setup and Configuration

### Step one

* Download the Contrast plugin by clicking on **File**, **Settings**, **Plugins**, **Browse Repositories...**. 
* Search for “Contrast Security”.
* Click **Install**. 

<a href="assets/images/IntelliJ-plugin-install.png" rel="lightbox" title="Install Contrast for IntelliJ"><img class="thumbnail" src="assets/images/IntelliJ-plugin-install.png"/></a>

### Step two

* Once you install the Contrast plugin for IntelliJ IDEA, configure it by going to **File**, **Settings**, **Contrast**. To find the keys in the Contrast application, go to the "Your Account" page.
* Add teamserver url, username, and service key.
* Click on "Test Connection" button.
* Add a new organization by clicking on "Add" button.
* Enter the API key and click on "Retrieve organizations" button.
* Choose an organization.
* Once the plugin is configured, click on refresh button in Contrast tool window to update the list of vulnerabilities.

<a href="assets/images/IntelliJ-plugin-preferences.png" rel="lightbox" title="Configure Contrast for IntelliJ"><img class="thumbnail" src="assets/images/IntelliJ-plugin-preferences.png"/></a>

Well done! IntelliJ is configured to get vulnerability information from Contrast. 

## Find Vulnerabilities

The Vulnerabilities view in IntelliJ shows a list of all the vulnerabilities from Contrast. You can sort and filter them.

<a href="assets/images/IntelliJ-plugin-filter.png" rel="lightbox" title="Filter Vulnerabilities"><img class="thumbnail" src="assets/images/IntelliJ-plugin-filter.png"/></a>

To sort vulnerabilities, click on the column header.

For more information, double-click on vulnerability.

<a href="assets/images/IntelliJ-plugin-details-view.png" rel="lightbox" title="View vulnerability details"><img class="thumbnail" src="assets/images/IntelliJ-plugin-details-view.png"/></a>
