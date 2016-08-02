<!--
title: "Node.js Agent Configuration"
description: "Configuring the Node.js Agent"
tags: "NodeJS agent configuration"
-->

Configuration options may be used to alter Contrast's behavior. They can all be appended to your startup command (e.g: ```node-contrast server.js --mute --policy foo.json```). With the exception of ```--configFile```, they can all be added to your *contrast.json* file as well:
``` javascript
{
    "apiKey":"api_key",
    "user": {
        "id":"<account_id>",
        "serviceKey":"<account_serviceKey>"
    },
    "uri":"https://app.contrastsecurity.com",
	"mute": true,
	"policy": "foo.json"
}
```

## General Configuration Options
 Parameter                    | Description
------------------------------| -------------
-h, --help                    | Print available configuration options
-c, --configFile &lt;path&gt; | Set config file location (defaults to *./contrast.json*)
--appname &lt;name&gt;        | Name to register the application to TeamServer with
--servername &lt;name&gt;     | Name to register the server to TeamServer with
--rejectunauthorized          | The server will allow any connection to TeamServer which isn't authorized with the list of supplied CAs
--uri &lt;uri&gt;             | URI to connect to TeamServer if different from *contrast.json*
--apikey &lt;key&gt;          | Organization's API key if different from *contrast.json*
--http-timeout &lt;time&gt;   | HTTP timeout value in milliseconds (default= 10000)
--mute                        | The Contrast agent will not print anything to standard out
--policy &lt;path&gt;         | Custom policy file
--appRoot                     | Set the location of the application's root directory. This should be the location of the *package.json*, if different from the location of the app's entry point
--localonly                   | Disable reporting to TeamServer
--appArgs &lt;args&gt;        | Specify args to pass into the application
--httpProxy &lt;url&gt;       | HTTP proxy url for the agent

## Logging
To prevent crowding *stdout*, INFO level statements are not logged to the console unless the environment variable ```DEBUG``` is set to include the Contrast namespace, as follows:

```
DEBUG=contrast:*
```
Additionally, the namespace can be manipulated to show and hide certain paths. If, for instance, you only wish to see statements within the namespaces ```contrast:hooks``` and ```contrast:http```, you can set the environment variable as ```DEBUG=contrast:hooks,contrast:http```. If you wish to hide certain namespaces, prepend a ```-```, as in ```DEBUG=contrast:*,-contrast:hooks```

Additionally, by default, the agent logs to *<app_root>/node-contrast.log*. For performance reasons, verbose logging options are disabled. The following configuration options allow you to modify how the agent handles file logging:

 Parameter               | Description
-------------------------|-------------
--logFile &lt;path&gt;   | Specify where Contrast should put your log file if different from location in *contrast.json*
--showrewrite            | Log contents of modules that have been rewritten
--dataflowLogging        | Enable verbose propagation logging
--debug                  | Enable debug level logging

## Debugging Options
The following configuration options are for debugging purposes and should usually be left off. Turning them on can result in undesired behaviors and loss of functionality.

 Parameter                                  | Description
--------------------------------------------| -------------
--nopropagation                             | Disable Contrast propagators
--norewrite                                 | Disable Contrast rewrite
--skip_buffer_overload                      | Skip the overload of the core Buffer constructor
--stackTraceLimit &lt;limit&gt;             | Limit for stack trace size
--skipLibs                                  | Do not collect library information
--skipNestedTaint                           | Do not traverse nested properties to look for taint during propagation
--contrastPolicyDisable &lt;policy keys&gt; | Disable certain elements of the policy. This is used by support to quickly disable certain parts of the policy, without the need for a custom policy file
