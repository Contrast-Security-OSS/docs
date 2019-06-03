<!--
title: "Contrast Integration for Azure DevOps" 
description: "Extension to integrate Contrast in your deployment workflow"
tags: "tools AzureDevOps integration extension deployment"
-->


Integrate Contrast in your deployment workflow with the Azure DevOps extension. The following instructions guide you through the steps to set up and configure the extension for your Contrast instance. 

## Before You Start 

Before you begin to set up the extension, make sure that you have the privileges to install a Microsoft extension. If you lack the necessary privileges, you can [request the extension](https://docs.microsoft.com/en-us/azure/devops/marketplace/request-extensions?view=azure-devops-2019) for a project.

## Setup and Configuration

### Step one

* Follow [Microsoft's instructions](https://docs.microsoft.com/en-us/azure/devops/marketplace/install-extension?view=azure-devops-2019) to install the Contrast extension, **Contrast Integration**. 

### Step two

* Go to your **Project settings** at the bottom of you side bar.

 <a href="assets/images/AzureDevOps_sidebar.png" rel="lightbox" title="Azure DevOps Sidebar"><img class="thumbnail" src="assets/images/AzureDevOps_sidebar.png"/></a>

* In the **Pipelines** section of the settings menu, select **Service connections**.

 <a href="assets/images/AzureDevOps_connection_settings.png" rel="lightbox" title="Service Connection Settings"><img class="thumbnail" src="assets/images/AzureDevOps_service_connection_settings.png"/></a>

### Step three

* Click over the **+ New Service connection** button, and select **Contrast Server Connection**.
* Fill all the fields with the required data. You can find the values for all the fields in the Contrast UI by going to the [**user menu > Your Account > Profile** page](user-account.html#profile).

<a href="assets/images/AzureDevOps_service_connection.png" rel="lightbox" title="Service Connection fields"><img class="thumbnail" src="assets/images/AzureDevOps_service_connection.png"/></a>

> **Note: ** Your **Contrast URL** should not include */Contrast* at the end; only the host is required.

## Configuration for Release Gate

### Step one

* Now that you have at least one Service Connection, enter on _Edit_ mode for the Release pipeline you wish to include the gate.
* Select a Pre or Post deployment condition.
* Enable the Gates section if you haven't already and click on the **+ Add** button to select **Verify application vulnerabilities** option.

### Step two

* Select a **Service Connection** from the **Contrast Service Connection** field. If you don't have one already, then click over the *+ New* button and proceed as in the step three for Setup and Configuration. You can also click on the **Manage** option to go to the Service connections settings in your **Project Settings**.
* Now select one of your applications from the **Application** dropdown. This will enable more fields for configurating the gate.

<a href="assets/images/AzureDevOps_gate_part1.png" rel="lightbox" title="Azure DevOps Gate Part 1"><img class="thumbnail" src="assets/images/AzureDevOps_gate_part1.png"/></a>

### Step three

* The **Allowed Status** and **Build Number** fields can be used to filter your results from Contrast. Based on what you set on this fields it will be used to be validated against the conditions you configure in the following fields.

<a href="assets/images/AzureDevOps_gate_part2.png" rel="lightbox" title="Azure DevOps Gate Part 2"><img class="thumbnail" src="assets/images/AzureDevOps_gate_part2.png"/></a>

* Proceed to set your severity counters. Each field is the maximum amount allowed of vulnerabilities per severity. If your selected application has vulnerabilities with severity above any of these counters, your gate will fail.

<a href="assets/images/AzureDevOps_gate_part3.png" rel="lightbox" title="Azure DevOps Gate Part 3"><img class="thumbnail" src="assets/images/AzureDevOps_gate_part3.png"/></a>

> **Note:** Remember that your gates evaluation settings affect all the gates on the current stage for the pre- or post-deployment conditions.

