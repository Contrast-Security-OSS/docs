<!--
title: "Security API Keys"
description: "About article for the TeamServer API Keys"
tags: "security API keys configuration administration"
-->

## Getting Started
When you download the Contrast JVM plugin (also called the "Engine"), it comes pre-fitted with a set of randomly generated credentials for your user that don't involve the password you login with. When the plugin communicates with the Contrast site, it authenticates using these credentials. This makes the authentication look something like this:
 
<a href="assets/images/KB4-a04_1.png" rel="lightbox" title="Default Authentication"><img class="thumbnail" src="assets/images/KB4-a04_1.png"/></a>

## Why use an API key?
We asked ourselves, however, what would happen if a bad guy get a hold of an Engine? We wanted to be able to handle a sort of "key rotation" in these situations. To add another layer of security we added a "organizational API key" that customers can enable and manage on their own. Even in this situation, a bad guy won't be able to submit forged or malicious data to your organization, because their organizational API key is wrong. With the API key enabled, the authentication looks more like this:

<a href="assets/images/KB4-a04_2.png" rel="lightbox" title="Organizational API Key"><img class="thumbnail" src="assets/images/KB4-a04_2.png"/></a>

## Enabling and Changing an API key
To enable or change an API key, go to Settings menu option and select API. From this screen you'll be able to inspect the current API key and update it to a new value.
