<!--
title: "Security API Keys"
description: "About article for the TeamServer API Keys"
tags: "Admin system settings security API keys configuration"
-->

When you download the Contrast JVM plugin (also called the "Engine"), it comes pre-fitted with a set of randomly generated credentials for your user that don't involve your password. When the plugin communicates with the Contrast site, it authenticates using these credentials. 
 
<a href="assets/images/KB4-a04_1.png" rel="lightbox" title="Default Authentication"><img class="thumbnail" src="assets/images/KB4-a04_1.png"/></a>

## About API Keys

Contrast added another layer of security through an "organizational API key" that you can enable and manage on your own. In the case of a security breach, an unauthorized user can't submit forged or malicious data to your organization because their organizational API key is wrong. With the API key enabled, authentication follows the process shown in the image below.

<a href="assets/images/KB4-a04_2.png" rel="lightbox" title="Organizational API Key"><img class="thumbnail" src="assets/images/KB4-a04_2.png"/></a>

## Enable and Change an API key

To enable or change an API key, go to **Settings** menu option and select **API**. From this screen, you can inspect the current API key and update it to a new value.

