<!--
title: "Adding An Application"
description: "Instructions on how to add an application"
tags: "TeamServer user application adding"
-->


You can access the **Add Application Wizard** from any page by clicking the button in the top navigation.

<a href="assets/images/KB3-f03_1.png" rel="lightbox" title="Add Application Button"><img class="thumbnail" src="assets/images/KB3-f03_1.png"/></a>
<BR>

## Step 1: Download the Agent

After choosing a language, you can customize your settings by checking the box for **Custom Agent Profile** before downloading the agent. Choose a name for your profile and, if desired, configure HTTP Proxy settings by checking **Use HTTP Proxy**. Once one or more custom profiles are created, you can select them from the dropdown or click **Manage Profiles** to copy, rename and delete saved profiles. 

<a href="assets/images/KB3-f03_2.png" rel="lightbox" title="Custom Profile"><img class="thumbnail" src="assets/images/KB3-f03_2.png"/></a>

<a href="assets/images/KB3-f03_6.png" rel="lightbox" title="Manage Profiles"><img class="thumbnail" src="assets/images/KB3-f03_6.png"/></a>


## Step 2: Install on Your Server

Select your container to view the installation instructions for the specific language and container you selected. For more information, go to the [Installation overview article](installation-setup.html#setup-overview).

<a href="assets/images/KB3-f03_3.gif" rel="lightbox" title="Container Selection"><img class="thumbnail" src="assets/images/KB3-f03_3.gif"/></a>

### Choose an access control group

To determine users' access to an application, you can specify the access control group to which an application will belong before initial startup. Use the appropriate workflow for your language to set the group name in the agent configuration for your application. 

For **Java**, add the system property `contrast.app.group` to make your new startup command. Example:

```
-Dcontrast.group="Contrast Testing" -javaagent:/path/to/contrast.jar
```


For **Node.js**, there are two options. 

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

When Contrast recognizes the group you named, it automatically associates the application with that group, and allows all group members to access the application with the role determined by the group. If a user specifies a group that doesn't exist or isn't set by an Admin to allow this function, Contrast ignores the group association but still onboards the application. You can then add the application to a group using the standard workflow. 

Learn more by reading how to [Create](admin-onboardteam.html#group) and [Manage Access Groups](admin-manageorgs.html#access).

## Step 3: Restart Your Server

Before you begin browsing an application, it's important to restart your server. The wizard additional includes this step to guarentee that you don't forget. 

<a href="assets/images/KB3-f03_4.png" rel="lightbox" title="Restart Server"><img class="thumbnail" src="assets/images/KB3-f03_4.png"/></a>


## Step 4: Browse Your Application

To confirm that your agent was correctly installed, Contrast displays reported information from the server. Once you see these updates, you can complete the wizard, and begin browsing directly from the **Application Overview** page. 

<a href="assets/images/KB3-f03_5.png" rel="lightbox" title="Browse Application"><img class="thumbnail" src="assets/images/KB3-f03_5.png"/></a>


