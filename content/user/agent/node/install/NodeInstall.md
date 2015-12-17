<!--
title: "Node.js Agent Installation"
description: "Installing the Node.js Agent"
-->

## Installation
After downloading the agent from your account, install the agent from your application's root directory as follows:
``` sh
npm install -g node_contrast-#.#.#.tar.gz
```
This will add the agent to your ```node_modules``` folder without creating an entry in the dependencies list of your ```package.json```.

## Setup
Unlike the other agents, the node agent requires you to have set up a configuration file before running it for the first time. By default, the agent looks for this configuration file in your application's root directory and expects the file to be called ```contrast.json```.
The minimum required contrast.json setup should look like this:
``` javascript
{
    "apiKey":"api_key",
    "user": {
        "id":"<contrast_id>",
        "key":"<contrast_apiKey>"
    },
    "uri":"http://app.contrastsecurity.com"
}
```
 Property               | Description 
------------------------|------------
apiKey     | organization's API key     
id         | Contrast user account's ID. In most cases, this is your login ID
key        | Contrast user account's service key
uri        | the address of the TeamServer installation you would like your agent to report to

The API key and service key can be retrieved by navigating to the dropdown menu on your user name (upper right) > Organization Settings > API (left column).

For a full list of configuration options that can be placed in this file, see [Node Agent Configuration](user_nodeconfig.html#props).

## Running the agent
After installation, the agent can be run with ```node-contrast <app-main>.js```.

If you prefer to run your app with npm, you can add a run script to your application's ```package.json```.

``` javascript
"scripts": {
	"contrast": "node-contrast <app-main>.js",
	"start": ...,
	"test": ...
}
```

Then, the agent can simply be run with ```npm run contrast```. This npm script can be changed to include other runtime configurations, such as an alternate configuration file location. For more information, see [Node Agent Configuration](user_nodeconfig#props).
