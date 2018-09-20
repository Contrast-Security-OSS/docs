<!--
title: "Contrast Bamboo Plugin"
description: "Bamboo build plugin using the Contrast Java SDK"
tags: "tools Bamboo SDK Integration Java Continuous Integration"
-->

This plugin adds functionality to Bamboo so that you can configure profiles for connecting to Contrast and verify builds against vulnerability thresholds.

## Installing the Plugin
The first step is to build the plugin. To begin, clone the plugin from our Github [repository](https://github.com/Contrast-Security-OSS/contrast-bamboo-plugin.git).
```bash
git clone https://github.com/Contrast-Security-OSS/contrast-bamboo-plugin.git
cd contrast-bamboo-plugin
mvn package
```

This builds the *contrast-bamboo-plugin-#.#.#-SNAPSHOT.jar* and the *a .obr* file. They can both be found within the *contrast-bamboo-plugin/target* directory of the cloned project.

Once you have built the plugin, you can upload it to your Bamboo instance. Begin by selecting the **Add-Ons** option from the top left settings menu.

<a href="assets/images/Bamboo_Add_On_Option.png" rel="lightbox" title="Navigating to add-ons in Bamboo"><img class="thumbnail" src="assets/images/Bamboo_Add_On_Option.png"/></a>


Then select the **Upload add-on** link.

<a href="assets/images/Bamboo_Upload_Plugin.png" rel="lightbox" title="Uploading an add-on in Bamboo"><img class="thumbnail" src="assets/images/Bamboo_Upload_Plugin.png"/></a>

You should now be prompted to upload a file. Select *contrast-bamboo-plugin-#.#.#-SNAPSHOT.obr*.

After uploading the plugin, you should see it appear under **User Installed Add-Ons**.

<a href="assets/images/Bamboo_Plugin_Uploaded.png" rel="lightbox" title="Successfully uploaded add-on"><img class="thumbnail" src="assets/images/Bamboo_Plugin_Uploaded.png"/></a>

### Creating a Contrast profile
To use the plugin, you should first configure a Contrast profile. To do this, select the **TeamServer Profiles** button under **Add-Ons** within the **Bamboo Administration** dashboard.

<a href="assets/images/Bamboo_TeamServer_Profile.png" rel="lightbox" title="Configuring a Contrast profile in Bamboo"><img class="thumbnail" src="assets/images/Bamboo_TeamServer_Profile.png"/></a>

You'll then be brought to the **Profile Configuration** page. Select the **New Profile** button to see fields for adding a profile. Fill out the form fields according to their labels. The server name that you enter should correspond to a server name on Contrast.

If you are a SaaS customer you do **not** need to enter a Contrast URL. Once you have filled out all the fields, select the **Test Connection** button to verify that your settings are correct.

<a href="assets/images/Bamboo_Add_Profile_Success.png" rel="lightbox" title="Successful configuration"><img class="thumbnail" src="assets/images/Bamboo_Add_Profile_Success.png"/></a>

## Vulnerability Thresholds
The plugin can be added as a task to build jobs to check for vulnerability conditions that you configure. This checks Contrast for the number of vulnerabilities in the applications as well as types of vulnerabilities.

### Configuring vulnerability thresholds
To add a task to a build job, you must either create a new plan or use an existing build plan. For the purpose of these instructions, you'll walk through creating a new build plan.

Select the **Create a New Build Plan** button.

<a href="assets/images/Bamboo_Create_New_Build_Plan.png" rel="lightbox" title="Create a new build plan"><img class="thumbnail" src="assets/images/Bamboo_Create_New_Build_Plan.png"/></a>

You'll now be prompted to give the build plan a project name, plan name and link to the repository host. The project key and plan key is auto-generated.

<a href="assets/images/Bamboo_Configure_Build_Plan.png" rel="lightbox" title="Configure the build plan"><img class="thumbnail" src="assets/images/Bamboo_Configure_Build_Plan.png"/></a>

Once you create the plan, add a task to the build process by clicking the **Add Task** button.

<a href="assets/images/Bamboo_Add_First_Task.png" rel="lightbox" title="Add Contrast task"><img class="thumbnail" src="assets/images/Bamboo_Add_First_Task.png"/></a>

A dialog will appear. Find the **Contrast CI for Assess** task and select it.

<a href="assets/images/Bamboo_Add_Contrast_Task.png" rel="lightbox" title="Vulnerability threshold task"><img class="thumbnail" src="assets/images/Bamboo_Add_Contrast_Task.png"/></a>

The task configuration screen relies on a Contrast profile, which you configured in the previous steps, and an application name. The application name must be on the server that you defined when creating the profile.

The next part of the task configuration is defining conditions for when to fail a build. This involves entering three pieces of data:

* **Threshold Count:** the minimum number of findings required to fail the build.
* **Threshold Severity:** the minimum severity at which to count a finding towards the threshold count.
* **Threshold Vulnerability Type:** the type of finding required to count a finding towards a threshold count.

>**Note:** Using the **Any** option means that any severity or vulnerability type is counted towards the max threshold count.

You can configure multiple conditions for each task by selecting the **Add New Threshold Condition** button.

<a href="assets/images/Bamboo_Task_Definition.png" rel="lightbox" title="Configuring the task"><img class="thumbnail" src="assets/images/Bamboo_Task_Definition.png"/></a>

The last step is to enable the build plan by selecting the checkbox in the bottom left.

<a href="assets/images/Bamboo_Enable_Plan.png" rel="lightbox" title="Enable build plan"><img class="thumbnail" src="assets/images/Bamboo_Enable_Plan.png"/></a>

### Running the build
To run your build for the first time, you'll need to select the **Run** button and then in the dropdown select the **Run Plan** option.

Once the build is finished, you can see if it passed or failed. To view the Contrast task details, look at the logs of the job to which the task is attached. In the following example, this is the default job. As you can see in the logs, the task only found two vulnerabilities that met your conditions, therefore the job passes.

<a href="assets/images/Bamboo_Result_Logs.png" rel="lightbox" title="Bamboo build logs"><img class="thumbnail" src="assets/images/Bamboo_Result_Logs.png"/></a>

You can also see charts of data from the task by clicking the **Contrast Report** tab. This presents the past 10 builds, and charts the severities over build numbers as well as the vulnerability types of build numbers.

<a href="assets/images/Bamboo_Chart_Severity_Trend2.png" rel="lightbox" title="Bamboo severity chart"><img class="thumbnail" src="assets/images/Bamboo_Chart_Severity_Trend2.png"/></a>

<a href="assets/images/Bamboo_Chart_Vulnerability_Trend2.png" rel="lightbox" title="Bamboo vulnerability chart"><img class="thumbnail" src="assets/images/Bamboo_Chart_Vulnerability_Trend2.png"/></a>

