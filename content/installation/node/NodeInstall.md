<!--
title: "Node.js Agent Installation"
description: "Installing the Node.js Agent"
tags: "NodeJS agent installation"
-->

## Installation
After downloading from your account, install the agent from your application's root directory as follows:
``` sh
npm install node_contrast-#.#.#.tar.gz
```
This will add the agent to your *node_modules* folder without creating an entry in the dependencies list of your *package.json*.

## Setup
When you download the Node agent, you will also be directed to download a configuration file. By default, the agent looks for this configuration file in your application's root directory and expects the file to be called *contrast.json*.
The minimum required *contrast.json* setup should look like this:
``` javascript
{
    "apiKey":"api_key",
    "user": {
        "id":"<contrast_id>",
        "serviceKey":"<contrast_serviceKey>"
    },
    "uri":"https://app.contrastsecurity.com"
}
```

---

 Property                | Description
------------------------ | ------------
apiKey                   | Organization's API key
id                       | Contrast user account ID (In most cases, this is your login ID)
serviceKey               | Contrast user account service key
uri                      | Address of the TeamServer installation you would like your agent to report to

---

The API key and service key can be retrieved within the dropdown menu on your user name (upper right). Navigate to **Organization Settings** and then select **API** in the left column.

For a full list of configuration options that can be placed in this file, see [Node Agent Configuration](installation_node.html#config).

## Running The Agent
First, add the following script to your application's *package.json*:

``` javascript
"scripts": {
	"contrast": "node-contrast <app-main>.js",
	"start": ...,
	"test": ...
}
```

Then, the agent can be run with ```npm run contrast```. This npm script can be changed to include other runtime configurations, such as an alternate configuration file location. For more information, see [Node Agent Configuration](installation_node.html#config).
