<!--
title: "Contrast Integration for Azure DevOps" 
description: "Extension to integrate Contrast in your deployment flow"
tags: "tools AzureDevOps Integration plugins"
-->

## Azure DevOps Extension

### About Contrast Integration for Azure DevOps
Integrate Contrast in your deployment flow.

### Setup and Configuration

#### Step one
* Given that you have enough privileges to install an extension, follow the instructions from [Microsoft site](https://docs.microsoft.com/en-us/azure/devops/marketplace/install-extension?view=azure-devops-2019) to install our extension: **Contrast Integration**. In case you lack the necessary privileges you can request the extension as specified [here](https://docs.microsoft.com/en-us/azure/devops/marketplace/request-extensions?view=azure-devops-2019) to some project or organization administrator.

#### Step two
* Go to your project settings by clicking on the button at the bottom of you side bar.

 <a href="assets/images/AzureDevOps_sidebar.png" rel="lightbox" title="Azure DevOps Sidebar"><img class="thumbnail" src="assets/images/AzureDevOps_sidebar.png"/></a>

* In the *Pipelines* section of the settings select the *Service connections* option.

 <a href="assets/images/AzureDevOps_connection_settings.png" rel="lightbox" title="Service Connection Settings"><img class="thumbnail" src="assets/images/AzureDevOps_connection_settings.png"/></a>

#### Step three
* Click over the **+ New Service connection** button and select _Contrast Server Connection_.
* Fill all the fields with the required data. All fields data can be found in _user menu_ > _Your Account_ > _Profile_ in the _Preferences_ section at the bottom.

<a href="assets/images/AzureDevOps_service_connection.png" rel="lightbox" title="Service Connection fields"><img class="thumbnail" src="assets/images/AzureDevOps_service_connection.png"/></a>

> Note: Your *Contrast URL* should not include '/Contrast' part at the end. Only the host is required.

### Configuration for Release Gate

#### Step one
* Given that you have at least one Service Connection, enter on _Edit_ mode for the Release pipeline you wish to include the gate.
* Select a Pre or Post deployment condition.
* Enable the Gates section if you haven't already and click on the **+ Add** button to select **Verify application vulnerabilities** option.

#### Step two
* Select a _Service Connection_ from the **Contrast Service Connecion** field. If you don't have one already, then click over the *+ New* button and proceed as in the step three for Setup and Configuration. You can also click on the **Manage** option to go to the Service connections settings in your **Project Settings**.
* Now select one of your applications from the **Application** dropdown. This will enable more fields for configurating the gate.

<a href="assets/images/AzureDevOps_gate_part1.png" rel="lightbox" title="Azure DevOps Gate Part 1"><img class="thumbnail" src="assets/images/AzureDevOps_gate_part1.png"/></a>

#### Step three
* The **Allowed Status** and **Build Number** fields can be used to filter your results from Contrast. Based on what you set on this fields it will be used to be validated against the conditions you configure in the following fields.

<a href="assets/images/AzureDevOps_gate_part2.png" rel="lightbox" title="Azure DevOps Gate Part 2"><img class="thumbnail" src="assets/images/AzureDevOps_gate_part2.png"/></a>

* Proceed to set your severity counters. Each field is the maximum amount allowed of vulnerabilities per severity. If your selected application has vulnerabilities with severity above any of these counters, your gate will fail.

<a href="assets/images/AzureDevOps_gate_part3.png" rel="lightbox" title="Azure DevOps Gate Part 3"><img class="thumbnail" src="assets/images/AzureDevOps_gate_part3.png"/></a>

> Note: Remember that your gates evaluation settings will affect all the gates on the current stage for the pre or post deployment conditions.
