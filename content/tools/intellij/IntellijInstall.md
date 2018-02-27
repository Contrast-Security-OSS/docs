<!--
title: "Downloading Contrast for Eclipse"
description: "Instructions for Downloading and Installing Contrast for Eclipse"
tags: "tools Eclipse Download Installation Ubuntu"
-->

## Setup and Configuration

### Step one

* Download the Contrast plugin from the Eclipse Marketplace by clicking on **Help** and then **Eclipse Marketplace**. 
* Search for “Contrast Security”.
* Click **Install**. 

<a href="assets/images/Eclipse-plugin-install.png" rel="lightbox" title="Install Contrast for Eclipse"><img class="thumbnail" src="assets/images/Eclipse-plugin-install.png"/></a>

### Step two

* Open the **Contrast View** to configure communication to Contrast application. 
* To open and configure the plugin, navigate to **Window** > **Show View** > **Other**. 
* Search for “Contrast” and add the view that appears in the search. 
* You can also add the Vulnerabilities view to find more details from Contrast. 

### Step three

* Once you add the Contrast View, enter your Username, API Key and Service Key in the configuration screen. You can also navigate to the configuration screen by going to **Eclipse Preferences** and searching for "Contrast". 

<a href="assets/images/Eclipse-plugin-preferences.png" rel="lightbox" title="Navigating to add-ons in Bamboo"><img class="thumbnail" src="assets/images/Eclipse-plugin-preferences.png"/></a>

* To find the keys in the Contrast application, go to the API page in Organization Settings.

### Step four 

* Check the connectivity to Contrast by clicking **Test Connection** and then **OK**. 

Well done! Eclipse is configured to get vulnerability information from Contrast. 

## Find Vulnerabilities

The Vulnerabilities view in Eclipse shows a list of all the vulnerabilities from Contrast. You can sort and filter them by servers or applications.  

<a href="assets/images/Eclipse-plugin-vulnerabilities.png" rel="lightbox" title="Navigating to add-ons in Bamboo"><img class="thumbnail" src="assets/images/Eclipse-plugin-vulnerabilities.png"/></a>

For more information, click the **View Details** link, or click on the **Go to page** button in the Contrast Vulnerabilities tab to go to Contrast.

<a href="assets/images/Eclipse-plugin-vulnerability-details.png" rel="lightbox" title="View vulnerability details"><img class="thumbnail" src="assets/images/Eclipse-plugin-vulnerability-details.png"/></a>



