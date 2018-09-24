<!--
title: "Installation on Bluemix"
description: "Installing Bluemix for Node.js"
tags: "Bluemix NodeJS agent installation"
-->

Use the Contrast agent to instrument Node applications deployed on IBM Bluemix. The following steps walk you through the installation process.

## Download

* Download the Node.js agent from Contrast. 

* Download the *contrast_security.yaml* file from Contrast.

## Setup

* In the *contrast_security.yaml* file, you can configure the name of the server to which this application will report. (Contrast recommends that you complete this step to avoid creating duplicate servers in the application.) To configure the server name as "BluemixNodeServer" in Contrast, add `server.name: BluemixNodeServer`. 

> **Example:**
```yaml
 contrast:
   url: https://app.contrastsecurity.com
   user_name: contrast_user
   api_key: demo
   service_key: demo
 server:
   name: BluemixNodeServer
```

<br> 

> **Note:** To find other options for customizing the Node agent, go to the [Configuration article](installation-node.html#node-config). 

* Create a folder named *contrast* in your application’s root directory.

* Move the *node-contrast-<version>.tgz* and the *contrast_security.yaml* files into the *contrast* folder.

* In the application’s *package.json* file, create a new script. For a startup script named *index.js*, add the following line:

```
"bluemix-with-contrast": "npm install /home/vcap/app/contrast/node-contrast-
x.y.z.tgz && node-contrast index.js -c /home/vcap/app/contrast/contrast_security.yaml",
```

## Run the Agent

* Since Bluemix runs the start script by default, you must change the start command to point to the `bluemix-with-contrast` line given in the previous step.

```
"start":"npm run bluemix-with-contrast"
Now the scripts section of the package.json should look like the following:
"scripts": {
"bluemix-with-contrast": "npm install /home/vcap/app/contrast/node-contrast-
x.y.z.tgz && node-contrast index.js -c /home/vcap/app/contrast/contrast_security.yaml",
"start":"npm run bluemix-with-contrast”
},
```

* Push the application to Bluemix using `cf push <application name> -t 180`.

Once the the deploy is finished, you should see the application in Contrast.

