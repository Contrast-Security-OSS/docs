<!--
title: "Use Contrast for Visual Studio"
description: "Instructions for downloading and installing Contrast for Visual Studio"
tags: "tools ide plugins visual studio download install"
-->


## About Contrast for Visual Studio

Contrast provides visibility of vulnerabilities in your applications, and protects your applications against attacks. For applications deployed with the Contrast agent, you can access vulnerability information directly within your Visual Studio IDE. You're directed to the line of code inside Visual Studio, and can view more details in the Contrast application, which allows you to provide application security feedback to developers right at the time of development for faster remediation.

### Supported systems 

Visual Studio versions:

* 2017 (15.0+)

## Setup and Configuration

### Step one

* Go to **Tools** and select **Extensions and Updates**. 
* In the new window, select **Online** from the left navigation panel.
* Search for "Contrast", and click **Download**.
* Once the download is finished, restart the IDE.

<a href="assets/images/VS_ext_extensions_window.png" rel="lightbox" title="Install Contrast for Visual Studio"><img class="thumbnail" src="assets/images/VS_ext_extensions_window.png"/></a>

### Step two

* Open your IDE options to configure connection settings by going to **Tools** and selecting **Options**. Search 
for "Contrast Security" in the left navigation panel. 
* You can also use the search box in the top right corner by searching for "Contrast Security" and 
choosing the **Contrast Security - Connection** option.

### Step three

* In the **Contrast Connection** form, add your **Contrast URL**, **Username**, **Service Key**, **API Key** and **Organization UUID** in the given fields. (To find your [keys](user-account.html#profile) and other Contrast account information in the Contrast UI, go to the **user menu > Your Account > Profile**.)

> **Note:** The API key must belong to the organization you want to have access or you'll get Unauthorized errors. This will lock your account after many failed attempts.


<a href="assets/images/VS-connection.png" rel="lightbox" title="Navigate to add-ons"><img class="thumbnail" src="assets/images/VS-connection.png"/></a>

* Once you complete these fields, select the **Add** button. (Visual Studio automatically tests the connection as it attempts to retrieve the organization from Contrast.)

* Select the correct organization in the **Organizations** field, and click **Okay**.

Well done! Visual Studio is configured to get vulnerability information from Contrast. 

## Find Vulnerabilities

Open the Contrast view by going to **View > Other Windows > Contrast Security Integration**. You can also search for "Contrast Security Integration" in the search box in the main view. This view in Visual Studio shows a list of all the vulnerabilities from Contrast.

<a href="assets/images/VS_ext_contrast_view.png" rel="lightbox" title="Find vulnerabilities in Visual Studio"><img class="thumbnail" src="assets/images/VS_ext_contrast_view.png"/></a>

To filter the list, click the **Filter** button (funnel icon) at the top-left corner of the page. In the window that appears, choose from multiple filters, including servers, applications, severity levels, states and last detected dates. 

<a href="assets/images/VS_ext_filters.png" rel="lightbox" title="Filter vulnerabilities "><img class="thumbnail" src="assets/images/VS_ext_filters.png"/></a>

If you can't see your vulnerabilities list, click the Refresh button. To clear all selected filters, click the Broom button. This also applies for Server and Application lists. 

> **Note:** If you can't see your vulnerabilities even after refreshing the list, you must filter your vulnerabilities. You must repeat this  process after selecting a different organization in the Connection settings so that filters and vulnerabilities are refreshed correctly.

Under the **Actions** column, you can use the button on the left (magnifier glass icon) to see more information about the vulnerability. You can use the button to the right (browser link icon) to go to the Vulnerability page in the Contrast application.

