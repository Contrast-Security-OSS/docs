<!--
title: "Security API Keys"
description: "About article for the API Keys"
tags: "Admin system settings security API keys configuration"
-->

## How It Works 

When you download the Contrast JVM plugin (also called "the agent"), it comes prefitted with a set of randomly generated credentials for your organization that don't involve the passwords of any users in the organization. When the plugin communicates with the Contrast application, it authenticates using these credentials. 
 
<a href="assets/images/API-credentials-1.png" rel="lightbox" title="Default authentication"><img class="thumbnail" src="assets/images/API-credentials-1.png"/></a>

Contrast added another layer of security through an organization API key that you can manage on your own. In the case of a security breach, an unauthorized user can't submit forged or malicious data to your organization because their organization API key is wrong. Authentication follows the process shown in the image below.

<a href="assets/images/API-credentials-2.png" rel="lightbox" title="Organizational API key"><img class="thumbnail" src="assets/images/API-credentials-2.png"/></a>

## Manage Keys

Manage organization API keys as an Organization Administrator by going to the **User Menu > Organization Settings > API tab**. A System Administrator can also select an organization and manage API keys by going to the **User Menu > System Settings > API tab**. 

<a href="assets/images/Org-API-keys.png" rel="lightbox" title="Manage API keys in Organization Settings"><img class="thumbnail" src="assets/images/Org-API-keys.png"/></a>

In the REST API section, view your **Organization Keys**, including your Organization ID and API key, and your **Agent Keys**, such as your Agent Service key. Rotate your API or Agent Service keys by clicking the links provided for each. You can also click the button to **Generate Sample API Request**. 

## Learn More

For more information, read [About the Contrast API](tools-about.html#api-about). 

To see more examples of API requests, go to the [Contrast API documentation](https://api.contrastsecurity.com/). 

For help with connection issues after rotating service keys, read to the [troubleshooting article](troubleshooting-auth.html#keys). 
