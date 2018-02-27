<!--
title: "Downloading Contrast for Visual Studio"
description: "Instructions for Downloading and Installing Contrast for Visual Studio"
tags: "tools Visual-Studio Download Installation"
-->

## Setup and Configuration

### Step one

#### Download from inside the IDE

* Go to **Tools** > **Extensions and Updates...**
* On the newly open window, click on the Online option from the left panel.
* Search for "Contrast" and click on Download.
* Once done, restart the IDE.

<a href="assets/images/VS_ext_extensions_window.png" rel="lightbox" title="Install Contrast for Eclipse"><img class="thumbnail" src="assets/images/VS_ext_extensions_window.png"/></a>

<a href="assets/images/VS_ext_extension_page.png" rel="lightbox" title="Install Contrast for Eclipse"><img class="thumbnail" src="assets/images/VS_ext_extension_page.png"/></a>

### Step two

* Open your IDE options to configure connection settings by going to **Tools** > **Options**. Search 
for "Contrast Security" option in the left panel. 
* You can also use the search box in the top right corner by searching for "Contrast Security" and 
choosing the **Contrast Security - Connection** option.

### Step three

* Once in the Connection settings, proceed to fill your Contrast URL, username and service key. You 
can find your Service Key at the bottom of your user's Profile.

<a href="assets/images/VS_ext_settings_full.png" rel="lightbox" title="Navigating to add-ons in Bamboo"><img class="thumbnail" src="assets/images/VS_ext_settings_full.png"/></a>

* Add a new organization by clicking on Add button and insert the organization API key. You can find this
key in the **Organizations Settings** > **API** (WARNING: the API key must belong to the organization you 
want to have access or you'll get Unauthorized errors. This will lock your account after many failed
attempts!).
* Click on Load and select the organization for this API key and click on Save.
* If no option is selected after saving, select your previously saved organization.

### Step four 

* You can check the connectivity by clicking on **Test Connection**. You can do this after selecting 
a saved organization or while adding a new one.
* Once you are done. Click on Ok. 

Well done! Visual Studio is configured to get vulnerability information from Contrast. 

## Find Vulnerabilities

If you haven't yet, open the Contrast view by going to **View** > **Other Windows** > **Contrast 
Security Integration**. You can also search for "Contrast Security Integration" in the Search box on 
the main view.

This view in Visual Studio shows a list of all the vulnerabilities from Contrast. You can filter this 
list by Servers, Applications, severity levels, states and Last detected dates. You can open the Filters 
window by clicking on the first button located in the top left corner of this view.

<a href="assets/images/VS_ext_contrast_view.png" rel="lightbox" title="Navigating to add-ons in Bamboo"><img class="thumbnail" src="assets/images/VS_ext_contrast_view.png"/></a>

<a href="assets/images/VS_ext_filters.png" rel="lightbox" title="Navigating to add-ons in Bamboo"><img class="thumbnail" src="assets/images/VS_ext_filters.png"/></a>

If you can't see your vulnerabilities list, just click on the Refresh button. This also applies for 
Server and Application lists. Do note that if you can't see your vulnerabilities even after refreshing 
you will need to first filter your vulnerabilities. This process must be repeated after selecting a 
different organization in the connection settings so filters and vulnerabilities are refreshed correctly.

Under the Actions column, you can use the left button (magnifier glass icon) to see more information 
about the vulnerability. You can use the right button (browser link icon) to see the vulnerability page 
on Contrast.

<a href="assets/images/VS_ext_action_buttons.png" rel="lightbox" title="View vulnerability details"><img class="thumbnail" src="assets/images/VS_ext_action_buttons.png"/></a>
