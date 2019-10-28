<!--
title: "Contrast Integration for Azure DevOps" 
description: "Extension to integrate Contrast in your deployment workflow"
tags: "tools azure devops integration extension deployment"
-->


Use the the Azure DevOps extension to integrate Contrast with your deployment workflow. The following instructions guide you through the steps to set up and configure the extension for your Contrast instance. 

## Before You Start 

Before you begin to set up the extension, make sure that you have the privileges to install a Microsoft extension. If you lack the necessary privileges, you can [request the extension](https://docs.microsoft.com/en-us/azure/devops/marketplace/request-extensions?view=azure-devops-2019) for a project.

## Setup and Configuration

### Step one

* Follow [Microsoft's instructions](https://docs.microsoft.com/en-us/azure/devops/marketplace/install-extension?view=azure-devops-2019) to install the Contrast extension, **Contrast Integration**. 

### Step two

* Go to your [Project Settings](https://docs.microsoft.com/en-us/azure/devops/project/navigation/go-to-service-page?view=azure-devops#open-project-settings) at the bottom of you side bar. You'll need to be part of the Project administration group or have enough permissions to alter the settings.

* In the **Pipelines** section of the settings menu, select **Service connections**.

 <a href="assets/images/AzureDevOps_connection_settings.png" rel="lightbox" title="Service Connection Settings"><img class="thumbnail" src="assets/images/AzureDevOps_service_connection_settings.png"/></a>

### Step three

* Click over the **+ New Service connection** button (shown in the image in the previous step), and select **Contrast Server Connection**.
* Complete all the fields with the required data. You can find the values for all the fields in the Contrast UI by going to the [**user menu > Your Account > Profile** page](user-account.html#profile).

<a href="assets/images/AzureDevOps_service_connection.png" rel="lightbox" title="Service Connection fields"><img class="thumbnail" src="assets/images/AzureDevOps_service_connection.png"/></a>

> **Note:** Your **Contrast URL** should not include */Contrast* at the end; only the host is required.

## Configuration for Task

> **Note:** This task can be used in only an agentless job

### Step one - Enter Edit mode
The task can be used in a Build or Release pipeline

#### Release Pipeline

* Enter **Edit** mode for the release pipeline you wish to add the task.
* Select a stage for which you wish to add the task

<a href="assets/images/AzureDevOps_release_choose_stage.png"></a>

#### Build Pipeline

* Enter **Edit** mode for the build pipeline you wish to add the task.

### Step two - add the task

* Now that you are in edit mode for a Release Pipeline or Build Pipeline, click on the ellipsis (**...**) menu and add an agentless job.

<a href="assets/images/AzureDevOps_add_agentless_job.png"></a>

* Click on the **+** button next to you agentless job and add the **Verify application vulnerabilities** task.

<a href="assets/images/AzureDevOps_add_task.png"></a>

### Step three - configure the task

* You can use the **Allowed Status** and **Build Number** fields to filter your results from Contrast, leave them blank if you don't want to filter. The values set in these fields will be validated against the conditions you configure in the following fields.

<a href="assets/images/AzureDevOps_gate_part2.png" rel="lightbox" title="Azure DevOps Gate Part 2"><img class="thumbnail" src="assets/images/AzureDevOps_gate_part2.png"/></a>

* Proceed to your severity counters, where you must set the maximum number of vulnerabilities allowed per severity. If your selected application has more vulnerabilities than allowed for that severity level, your task will fail.

<a href="assets/images/AzureDevOps_gate_part3.png" rel="lightbox" title="Azure DevOps Gate Part 3"><img class="thumbnail" src="assets/images/AzureDevOps_gate_part3.png"/></a>

### Step four - set job dependency
> For **Build Pipelines** - If you would like to prevent the execution of a job if the task fails, you must set the job to depend on the agentless job that includes the Contrast task.
* Select the job you want to prevent from executing.
* In the **Dependencies** section, add the agentless job.

<a href="assets/images/AzureDevOps_set_dependency.png" rel="lightbox" title="Azure DevOps Gate Part 3"><img class="thumbnail" src="assets/images/AzureDevOps_gate_part3.png"/></a>




