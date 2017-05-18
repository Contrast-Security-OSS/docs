<!--
title: "Installation on Bluemix"
description: "Installing Bluemix for Node.js"
tags: "Bluemix NodeJS agent installation"
-->

Use the Contrast agent to instrument Node applications deployed on IBM Bluemix. The following steps walk you through the installation process.

* Download the Node.js agent from Contrast. The latest version is **nodecontrast-0.9.0.tgz**.

* Download the *contrast.json* file from Contrast.

* In the *contrast.json* file, you have the option to configure the name of the server to which this application will report. (Contrast recommends that you do this step to avoid creating duplicate servers in the application.) To configure the server name as "BluemixNodeServer" in Contrast, add ```"servername":"BluemixNodeServer"```.

	* Other options to customize the Node agent can be found in the [Configuration article](installation-node.html#node-config). 

* Create a folder named *contrast* in your application’s root directory.

* Move the *node-contrast-<version>.tgz* and the *contrast.json* files into the *contrast* folder.

* In the application’s *package.json* file, create a new script. For a startup script named *index.js*, add the following line:

```
"bluemix-with-contrast": "npm install /home/vcap/app/contrast/node-contrast-
0.9.0.tgz && node-contrast -c /home/vcap/app/contrast/contrast.json index.js",
```

* Since Bluemix runs the start script by default, you must change the start command to point to the ```bluemix-with-contrast``` line given in the previous step.

```
"start":"npm run bluemix-with-contrast"
Now the scripts section of the package.json should look like the following:
"scripts": {
"bluemix-with-contrast": "npm install /home/vcap/app/contrast/node-contrast-
0.9.0.tgz && node-contrast -c /home/vcap/app/contrast/contrast.json index.js",
"start":"npm run bluemix-with-contrast”
},
```

* Push the application to Bluemix using ```cf push <application name> -t 180```.

Once the the deploy is finished, you should see the application in Contrast.