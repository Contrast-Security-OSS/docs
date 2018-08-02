<!--
title: "VictorOps Integration"
description: "Integrating VictorOps with Contrast"
tags: "Admin organization settings integrations victorops"
-->

Set up an integration with with VictorOps incident management to receive attack notifications from Contrast. 

## Setup

In the **Integrations** page, click **Connect** in the VictorOps row. In the **VictorOps Connection** page, complete the following fields.

<a href="assets/images/VictorOps-integration-setup.png" rel="lightbox" title="Set up your VictorOps integration"><img class="thumbnail" src="assets/images/VictorOps-integration-setup.png"/></a>

* **Name:** The name for the integration entry, which is displayed in notifications from Contrast.
* **Message Type:** Use the dropdown menu to choose the behavior of the alert. The default selection is "Critical". For more information about message types, see the [VictorOps documentation on incident fields](https://help.victorops.com/knowledge-base/incident-fields-glossary/).
* **URL:** You can generate the URL in VictorOps through a REST API endpoint. To get a URL or more information, see the [VictorOps documentation on the REST endpoint](https://help.victorops.com/knowledge-base/victorops-restendpoint-integration/).

Once you complete the fields, click **Test connection**. This process may take a few minutes, depending on the number of your VictorOps projects. The test verifies that Contrast can reach the VictorOps instance and that the specified user can log in.

Once a connection is made, click in the multiselect field to choose the **Applications** for which you want to send notifications. The default selection is "All Applications". 
