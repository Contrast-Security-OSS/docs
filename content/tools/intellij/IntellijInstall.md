<!--
title: "Use Contrast for IntelliJ"
description: "Instructions for downloading and installing Contrast for IntelliJ"
tags: "tools ide plugins IntelliJ download install"
-->

## Setup and Configuration

### Step one

* Download the Contrast plugin by navigating to **File > Settings > Plugins > Browse Repositories**. 
* Search for “Contrast Security”.
* Click **Install**. 

<a href="assets/images/IntelliJ-plugin-install.png" rel="lightbox" title="Install Contrast for IntelliJ"><img class="thumbnail" src="assets/images/IntelliJ-plugin-install.png"/></a>

### Step two

* Once you install the Contrast plugin for IntelliJ IDEA, configure it by going to **File > Settings > Contrast**. To find your [keys](user-account.html#profile) in the Contrast application, go to the **user menu > Your Account > Profile page**.
* Add the **TeamServer URL**, **Username**, and **Service Key** in the given fields.
* Click the **Test Connection** button.
* Add a new organization by clicking the **Add** button.
* Enter the API key and click the **Retrieve organizations** button.
* Choose an organization.
* Once the plugin is configured, click the refresh button in the Contrast tool window to update the list of vulnerabilities.

<a href="assets/images/IntelliJ-plugin-preferences.png" rel="lightbox" title="Configure Contrast for IntelliJ"><img class="thumbnail" src="assets/images/IntelliJ-plugin-preferences.png"/></a>

Well done! IntelliJ is configured to get vulnerability information from Contrast. 

## Find Vulnerabilities

The Vulnerabilities view in IntelliJ shows a list of all the vulnerabilities from Contrast. To sort vulnerabilities, click on the column header. You can also filter them in the **Set Filters** dialog. 

<a href="assets/images/IntelliJ-plugin-filter.png" rel="lightbox" title="Filter vulnerabilities"><img class="thumbnail" src="assets/images/IntelliJ-plugin-filter.png"/></a>

For more information on a vulnerability, double-click on its entry in the list.

<a href="assets/images/IntelliJ-plugin-details-view.png" rel="lightbox" title="View vulnerability details"><img class="thumbnail" src="assets/images/IntelliJ-plugin-details-view.png"/></a>
