<!--
title: "Adding An Application"
description: "Instructions on how to add an application"
tags: "TeamServer user application adding"
-->

Add an application to your organization by completing the following steps. 

## Step 1: Download the agent

You can access the **Add Agent** wizard from any page by clicking the button in the top navigation.

<a href="assets/images/Add-agent-button.png" rel="lightbox" title="Click the button to Add Agent"><img class="thumbnail" src="assets/images/Add-agent-button.png"/></a>

After choosing a language, you can customize your settings by checking the box for **Custom Agent Profile** before downloading the agent. Choose a name for your profile and, if desired, configure HTTP Proxy settings by checking **Use HTTP Proxy**. Once one or more custom profiles are created, you can select them from the dropdown or click **Manage Profiles** to copy, rename and delete saved profiles. 

<a href="assets/images/KB3-f03_2.png" rel="lightbox" title="Custom Profile"><img class="thumbnail" src="assets/images/KB3-f03_2.png"/></a>

<a href="assets/images/KB3-f03_6.png" rel="lightbox" title="Manage Profiles"><img class="thumbnail" src="assets/images/KB3-f03_6.png"/></a>


## Step 2: Install on your server

Select your container to view the installation instructions for the specific language and container you selected. For more information, go to the [Installation overview article](installation-setup.html#setup-overview).

<a href="assets/images/KB3-f03_3.gif" rel="lightbox" title="Container Selection"><img class="thumbnail" src="assets/images/KB3-f03_3.gif"/></a>

### Choose an access control group

To determine users' access to an application, you can specify the access control group to which an application will belong before initial startup. Use the appropriate workflow for your language to set the group name in the agent configuration for your application.

When Contrast recognizes the group you named, it automatically associates the application with that group, and allows all group members to access the application with the role determined by the group. If a user specifies a group that doesn't exist or isn't set by an Admin to allow this function, Contrast ignores the group association but still onboards the application. You can then add the application to a group using the standard workflow. 

Learn more by reading how to [Create](admin-onboardteam.html#group) and [Manage Access Groups](admin-manageorgs.html#access).

#### Agent configurations 

For **Java**, add the system property `contrast.group` to make your new startup command. Example:

```
-Dcontrast.group="Contrast Testing" -javaagent:/path/to/contrast.jar
```

For **.Net**, you can configure group access at the application or server level. 

* To add the individual application to the group, add the `Contrast.AppGroup` property to the `appSettings` group in the application's *web.config* file. 
* To add all applications on a server to a group, add `Contrast.AppGroup` to the *DotnetAgentService.exe.config* file for the agent server.   

For **Node.js**, you can choose from two configuration methods. 

* You can add `"appGroup":"groupname"` to the *contrast.json* file. Example:

```
{
	"apiKey": "foobar123",
	"user": {
		"id": "joe",
		"serviceKey": "1234"
	},
	"uri": "http://app.contrastsecurity.com",
	"appGroup": "insertGroupNameHere"
}
```

* You can also add `--appGroup "groupname"` to command line arguments or the `npm command` in your *package.json* file. Examples:

```
node-contrast index.js --appGroup groupName
```
```
npm run contrast -- --appGroup groupName
```

For **Ruby**, add the `group` field to the `application` section of the *contrast_security.yaml* file from Contrast. Example configuration for the group `Contrast Testing`: 

```
application:
   group: Contrast Testing
```

## Step 3: Restart your server

Before you begin browsing an application, it's important to restart your server. The wizard includes this step to guarantee that you don't forget. 

<a href="assets/images/KB3-f03_4.png" rel="lightbox" title="Restart Server"><img class="thumbnail" src="assets/images/KB3-f03_4.png"/></a>


## Step 4: Browse your application

To confirm that your agent was correctly installed, Contrast displays reported information from the server. Once you see these updates, you can complete the wizard, and begin browsing directly from the **Application Overview** page. 

<a href="assets/images/KB3-f03_5.png" rel="lightbox" title="Browse Application"><img class="thumbnail" src="assets/images/KB3-f03_5.png"/></a>

> **Note:** Each application in the same organization must have an unique name. If multiple applications have the same name, Contrast incrementally appends each instance of the display name [e.g., App1, App1 (1), App1 (2)]. 



