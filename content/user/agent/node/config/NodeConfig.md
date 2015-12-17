<!--
title: "Node.js Agent Configuration"
description: "Configuring the Node.js Agent"
-->

Configuration options can be used to alter Contrast's behavior. They can all be appended to your startup command (e.g: ```node-contrast server.js --mute --policy foo.json```). With the exception of ```--configFile```, they can all be added to your contrast.json file as well:
``` javascript
{
    "apiKey":"api_key",
    "user": {
        "id":"<contrast_id>",
        "key":"<contrast_apiKey>"
    },
    "uri":"http://app.contrastsecurity.com",
	"mute": true,
	"policy": "foo.json"
}
```

## General Configuration Options
 Parameter               | Description
-------------------------|-------------
-h, --help               | print available configuration options
-n, --appname &lt;name&gt;     | name for the app if not present in package.json
--rejectunauthorized     | the server will reject any connection which isn't authorized with the list of supplied CAs
-u, --uri &lt;uri&gt;          | uri to connect to TeamServer on if different from contrast.json
--apikey &lt;key&gt;           | organization's API key if different from contrast.json
--http-timeout &lt;time&gt;    | http timeout value in milliseconds (default 10000)
-c, --configFile &lt;path&gt;  | set config file location. defaults to ./contrast.json
--mute                   | the Contrast agent will not print anything to standard out
--policy &lt;path&gt;          | custom policy file

## Logging
To prevent crowding stdout, INFO level statements are not logged to the console unless the environment variable ```DEBUG``` is set to include the contrast namespace, as follows:
```DEBUG=contrast:*```
Additionally, the namespace can be manipulated to show and hide certain paths. If, for instance, you only wish to see statements within the namespaces ```contrast:hooks``` and ```contrast:http```, you can set the environment variable as ```DEBUG=contrast:hooks,contrast:http```. If you wish to hide certain namespaces, prepend a ```-```, as in ```DEBUG=contrast:*,-contrast:hooks```.

Additionally, by default, the agent logs to &lt;app_root&gt;/node-contrast.log. For performance reasons, verbose logging options are disabled. The following configuration options allow you to modify how the agent handles file logging.

 Parameter               | Description
-------------------------|-------------
--logFile &lt;path&gt;   | specify where contrast should put your log file if different from location in contrast.json
--showrewrite            | show file names as they are handled by rewrite (with DEBUG=)
--dataflowLogging        | enable verbose propagation logging
--debug                  | enable debug level logging

## Debugging Options
The following configuration options are for debugging purposes and should usually be left off. Turning them on can result in undesired behaviors and loss of functionality.

 Parameter               | Description
-------------------------|-------------
--nodataflow             | disable Contrast instrumentation/rewrite
--nopropagation          | disable Contrast propagators
--norewrite              | disable Contrast rewrite
--skip_buffer_overload   | skip the overload of the core Buffer constructor.
