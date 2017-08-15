<!--
title: "Security API Keys"
description: "About article for the TeamServer API Keys"
tags: "Admin system settings security API keys configuration"
-->

When you download the Contrast JVM plugin (also called the Engine), it comes pre-fitted with a set of randomly generated credentials for your user that don't involve your password. When the plugin communicates with the Contrast site, it authenticates using these credentials. 
 
<a href="assets/images/KB4-a04_1.png" rel="lightbox" title="Default Authentication"><img class="thumbnail" src="assets/images/KB4-a04_1.png"/></a>

## How it Works 

Contrast added another layer of security through an "organizational API key" that you can enable and manage on your own. In the case of a security breach, an unauthorized user can't submit forged or malicious data to your organization because their organizational API key is wrong. With the API key enabled, authentication follows the process shown in the image below.

<a href="assets/images/KB4-a04_2.png" rel="lightbox" title="Organizational API Key"><img class="thumbnail" src="assets/images/KB4-a04_2.png"/></a>

## Manage Keys

### Enable and change an API key

Go to the **User menu > Settings > API tab** for details on your current API key. You can also enable your key or update it to a new value.

### Set up policies 

Set policies for Organization API and application keys as a System Administrator by going to the **User Menu > System Settings > Security > Key Management** section. 

<a href="assets/images/Security-key-management.png" rel="lightbox" title="Key Management configuration"><img class="thumbnail" src="assets/images/Security-key-management.png"/></a>

In the **Organization API Key** section, use the number control fields to enter the number of characters required as well as the minimum number of numerals, upper case characters and lower case characters required in the key. Repeat these steps in the **Application Key** section. Check the box at the top of the form if you want to **Mask invalid IPs on login**. 

Click the button to **Save** your selections. 