<!--
title: "Contrast Integration for Azure DevOps" 
description: "Extension to integrate Contrast in your deployment workflow"
tags: "tools azure devops pipeline integration extension deployment utility"
-->


Use the Azure DevOps extension to integrate Contrast with your deployment workflow. The following instructions guide you through the steps to set up and configure the extension for your Contrast instance. 

## Before You Start 

Before you begin to set up the extension, make sure that you have the privileges to install a Microsoft extension. If you lack the necessary privileges, you can [request the extension](https://docs.microsoft.com/en-us/azure/devops/marketplace/request-extensions?view=azure-devops-2019) for a project.

## Setup and Configuration

Complete the following steps to configure the Contrast extension. 

### Step one: Install the extension 

* Follow [Microsoft's instructions](https://docs.microsoft.com/en-us/azure/devops/marketplace/install-extension?view=azure-devops-2019) to install the Contrast extension, **Contrast Integration**. 

### Step two: Project settings

* Go to your [Project Settings](https://docs.microsoft.com/en-us/azure/devops/project/navigation/go-to-service-page?view=azure-devops#open-project-settings) at the bottom of you side bar. You'll need to be part of the Project administration group or have enough permissions to alter the settings.

* In the **Pipelines** section of the settings menu, select **Service connections**.

 <a href="assets/images/AzureDevOps_connection_settings.png" rel="lightbox" title="Service Connection Settings"><img class="thumbnail" src="assets/images/AzureDevOps_service_connection_settings.png"/></a>

### Step three: Configure the service connection

* Click over the **+ New Service connection** button (shown in the image in the previous step), and select **Contrast Server Connection**.
* Complete all the fields with the required data. You can find the values for all the fields in the Contrast UI by going to the [**user menu > Your Account > Profile** page](user-account.html#profile).

<a href="assets/images/AzureDevOps_service_connection.png" rel="lightbox" title="Service Connection fields"><img class="thumbnail" src="assets/images/AzureDevOps_service_connection.png"/></a>

> **Note:** Your **Contrast URL** should not include */Contrast* at the end; only the host is required.

## Setup and Configuration for a Task

Complete the following steps to configure a task in your Azure DevOps extension. This task can be used in only an **agentless job**.

### Step one: Enter Edit mode

The task can be used in a release or build pipeline. Complete the appropriate steps for the pipeline you're using. 

#### Release Pipeline

* Enter **Edit** mode for the release pipeline you want to add the task by clicking on the Edit button while the pipeline is selected.

<a href="assets/images/AzureDevOps_release_edit.png" rel="lightbox" title="Azure DevOps Build Edit"><img class="thumbnail" src="assets/images/AzureDevOps_release_edit.png"/></a>

* Select a stage for which you want to add the task.

<a href="assets/images/AzureDevOps_release_choose_stage.png" rel="lightbox" title="Azure DevOps Release Choose Stage"><img class="thumbnail" src="assets/images/AzureDevOps_release_choose_stage.png"/></a>

#### Build Pipeline

* Enter **Edit** mode for the build pipeline you want to add the task by clicking on the Edit button while the pipeline is selected.

<a href="assets/images/AzureDevOps_build_edit.png" rel="lightbox" title="Azure DevOps Build Edit"><img class="thumbnail" src="assets/images/AzureDevOps_build_edit.png"/></a>

### Step two: Add the task

* Now that you are in Edit mode for a release pipeline or build pipeline, click on the ellipsis (**...**) menu and select **Add an agentless job**.

<a href="assets/images/AzureDevOps_add_agentless_job.png" rel="lightbox" title="Azure DevOps Add Agentless Job"><img class="thumbnail" src="assets/images/AzureDevOps_add_agentless_job.png"/></a>

* Click on the **+** button next to your agentless job, and add the **Verify application vulnerabilities** task.

<a href="assets/images/AzureDevOps_add_task.png" rel="lightbox" title="Azure DevOps Add Task"><img class="thumbnail" src="assets/images/AzureDevOps_add_task.png"/></a>

### Step three: Choose a connection and application

* Select a **Service Connection** from the **Contrast Service Connection** menu. You can also click on the **Manage** option to go to the **Service connections** settings in your **Project Settings**.
* Select one of your applications from the **Application** menu.

<a href="assets/images/AzureDevOps_connection_and_app.png" rel="lightbox" title="Azure DevOps Connection And Application"><img class="thumbnail" src="assets/images/AzureDevOps_connection_and_app.png"/></a>

### Step four: Configure the task

* Use the **Allowed Status** and **Build Number** fields to filter your results from Contrast; or, leave them blank, if you don't want to filter. The values set in these fields will be validated against the conditions you configure in the following fields.

<a href="assets/images/AzureDevOps_gate_part2.png" rel="lightbox" title="Azure DevOps Gate Part 2"><img class="thumbnail" src="assets/images/AzureDevOps_gate_part2.png"/></a>

* Proceed to your severity counters, where you must set the maximum number of vulnerabilities allowed per severity. If your selected application has more vulnerabilities than allowed for that severity level, your task will fail.

<a href="assets/images/AzureDevOps_gate_part3.png" rel="lightbox" title="Azure DevOps Gate Part 3"><img class="thumbnail" src="assets/images/AzureDevOps_gate_part3.png"/></a>

### Step five: Set job dependency (Build Pipelines only)
> For **Build Pipelines** - If you want to prevent the execution of a job if the task fails, you must set the job to depend on the agentless job that includes the Contrast task.
* Select the job you want to prevent from executing.
* In the **Dependencies** section, add the **Agentless job**.

<a href="assets/images/AzureDevOps_set_dependency.png" rel="lightbox" title="Azure DevOps Set Dependency"><img class="thumbnail" src="assets/images/AzureDevOps_set_dependency.png"/></a>

## Setup and Configuration for a Task as a YAML Build Pipeline

Complete the following steps to configure a task as a YAML build pipeline in your Azure DevOps extension. This task must run in the server pool (`pool: server`). 

### Step one: Enter Edit mode

* Enter **Edit** mode for the YAML build pipeline you wish to add the task.

### Step two: Create a server job

* Under the jobs list, add a new job that runs on the server pool.

**Example:**
```
jobs:
- job: verify_application
  pool: server
  steps:
```

### Step three: Add the task

* Click under the steps list, and then click on the **Show assistant** and search for "Contrast Assess".
* Click on the **Contrast Assess - Application Vulnerability Detection** task.
* Select a **Service Connection** from the **Contrast Service Connection** menu. You can also click on the **Manage** option to go to the **Service connections** settings in your **Project Settings**.
* Select one of your applications from the **Application** menu.

<a href="assets/images/AzureDevOps_yaml_add_task_example.png" rel="lightbox" title="Azure DevOps Set Dependency"><img class="thumbnail" src="assets/images/AzureDevOps_yaml_add_task_example.png"/></a>

* Click **Add**. This will add the task to the steps list.
* Inputs for this task are as follows:

|Key |Description |Example Value|
|:---|:---------:|----:|
|ContrastService | (Required) The service connection to be used to connect to the contrast | 'Contrast Connection' |
|Application |(Required) The application that will be used to evaluate the vulnerabilities conditions |'a123745f-5857-45e4-a278-ddb5012e1996'|
|StatusFilter |(Optional)(Allowed Status) The vulnerability statuses that are included in the evaluation task. Delimited by `,` |'Reported' |
|AppVersionFilter |(Optional)(Build Number) The build number to filter the vulnerabilities results | '0.0.1' |
|CriticalLimit |(Required) The maximum amount of vulnerabilities for the critical severity | '0' |
|HighLimit |(Required) The maximum amount of vulnerabilities for the high severity | '0' |
|MediumLimit |(Required) The maximum amount of vulnerabilities for the medium severity | '0' |
|LowLimit |(Required) The maximum amount of vulnerabilities for the low severity | '0' |
|NoteLimit |(Required) The maximum amount of vulnerabilities for the note severity | '0' |

### Step four: Set job dependency

If you would like to prevent the execution of a job if the task fails, you must set the job to depend on the agentless job that includes the Contrast task.

* Add the `dependsOn: ` property to the job you would like to prevent from executing.

**Example:** In this example, the agentless job that has the Contrast task is called `verify_application`.
```
- job: artifact
  dependsOn: verify_application
  pool:
    name: Azure Pipelines
    vmImage: 'ubuntu-latest'
  steps:
```
