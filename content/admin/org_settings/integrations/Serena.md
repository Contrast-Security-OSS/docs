<!--
title: "Serena Business Manager Integration"
description: "Integrating SBM with Contrast"
tags: "Admin organization settings integrations serena business manager"
-->

## Prerequisites

* Serena (SBM) account credentials (username and password)
* A running SBM instance accessible via HTTP to Contrast
* A project to associate the application instrumented by Contrast

## Setting up the SBM Integration

1. Log in to the Contrast with an **Organization Administrator** account
2. From the user dropdown menu, select **Organization Settings**
3. Select the **Integrations** tab in the left navigation
4. Click **Connect** in the Serena Business Management row

<a href="assets/images/KB3-f04_5.png" rel="lightbox" title="Serena Integration"><img class="thumbnail" src="assets/images/KB3-f04_5.png"/></a>

Option | Description
------ | -----------
**Name** | A name for the bugtracker entry. It will be displayed when sending findings to bugtrackers.
**Username** | The username for the account connected to the SBM instance
**Password** | The password for the username specified
**Host** | The URL to the SBM instance
**Application** | The application you would like to map to an SBM instance
**Project ID** | The SBM Project ID to associate with this application


Once you have configured the Serena integration properties, you can verify communication via the **Test** button. This will ensure that Contrast can communicate and authenticate with the Serena instance as well as verify the existence of the specified **Project**.

