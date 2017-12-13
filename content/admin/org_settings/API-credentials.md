<!--
title: "Security API Keys"
description: "About article for the API Keys"
tags: "Admin system settings security API keys configuration"
-->

When you download the Contrast JVM plugin (also called the Engine), it comes pre-fitted with a set of randomly generated credentials for your organization that don't involve the passwords of any users in the organization. When the plugin communicates with the Contrast application, it authenticates using these credentials. 
 
<a href="assets/images/API-credentials-1.png" rel="lightbox" title="Default authentication"><img class="thumbnail" src="assets/images/API-credentials-1.png"/></a>

## How It Works 

Contrast added another layer of security through an organization API key that you can enable and manage on your own. In the case of a security breach, an unauthorized user can't submit forged or malicious data to your organization because their organization API key is wrong. With the API key enabled, authentication follows the process shown in the image below.

<a href="assets/images/API-credentials-2.png" rel="lightbox" title="Organizational API key"><img class="thumbnail" src="assets/images/API-credentials-2.png"/></a>

For more information, read the article [About the Contrast API](tools-api.html#api-about). 

## Organization Keys

Manage organization API keys as an Organization Administrator by going to the **User Menu > Organization Settings > API tab**. A System Administrator can also select an organization and manage API keys by going to the **User Menu > System Settings > API tab**. 

<a href="assets/images/Org-settings-api-keys.png" rel="lightbox" title="Manage API keys in Organization Settings"><img class="thumbnail" src="assets/images/Org-settings-api-keys.png"/></a>

In the REST API section, view the **Organization UUID** and **Agent Username** as well as the **API** and **Agent Service** keys. Rotate the keys by clicking the links provided for each. 

For help with connection issues after rotating service keys, read to the [troubleshooting article](troubleshooting-auth.html#keys). 
