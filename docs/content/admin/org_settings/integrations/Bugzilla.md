<!--
title: "Bugzilla Integration"
description: "Integrating Bugzilla with Contrast"
tags: "Admin organization settings integrations bugzilla"
-->

## Prerequisites

* Bugzilla account credentials (username and password)
* A running Bugzilla application instance accessible via HTTP to Contrast
* A product, component and version to associate the application instrumented by Contrast

## Setting up the Bugzilla Integration

1. Log in to Contrast as an **Organization Administrator**
2. From the user dropdown menu, select **Organization Settings**
3. Select the **Integrations** tab in the left navigation
4. Click **Connect** in the Bugzilla row

<a href="assets/images/KB3-f04_4.png" rel="lightbox" title="Bugzilla Integration"><img class="thumbnail" src="assets/images/KB3-f04_4.png"/></a>

Option | Description
------ | -----------
**Name** | A name for the bugtracker entry. It will be displayed when sending findings to bugtrackers.
**Username** | The username for the account connected with Bugzilla
**Password** | The password for the username specified
**Host** | The URL of the Bugzilla instance
**Application** | The application you would like to map to a Bugzilla product/component
**Product** | The product in Bugzilla to map to the application
**Component** | The component in Bugzilla to map to the application
**Version** | The version in Bugzilla to map to the application
**Priority** | The priority to use when exporting findings to Bugzilla


Once you have configured the Bugzilla integration properties, you can verify communication via the **Test** button. This ensures that Contrast can communicate and authenticate with the Bugzilla instance as well as verify the existence of the specified Product, Component and Version.

