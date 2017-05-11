<!--
title: "The .NET Agent Cannot Connect To TeamServer"
description: "Troubleshooting guide for .NET agent issues"
tags: "troubleshoot TeamServer agent installation .Net"
-->

## Symptoms

* The .NET agent does not successfully start
* The *Contrast Tray* and/or .NET agent *logs* report errors when connecting to TeamServer: 

    >*Contrast.NET service failed to start. Contrast.NET cannot connect to TeamServer at: [https://app.contrastsecurity.com](https://app.contrastsecurity.com). The remote name could not be resolved:* ***app.contrastsecurity.com***

* Data from a server with the installed agent does not appear on TeamServer

## How To Solve

1. Open the .NET agent's configuration file, ***ContrastService.exe.config***, which is located in the agent's installation directory (i.e. ***C:/Program Files/Contrast.NET***)
2. Verify that the ```TeamServerUrl``` value (e.g. [https://app.contrastsecurity.com/Contrast](https://app.contrastsecurity.com/Contrast)) can be reached from a normal web browser on the server. If the URL cannot be reached, then you should review the network path and related settings between the server and TeamServer.
3. Verify proxy settings. If a normal web browser can connect to TeamServer but the agent cannot, then the agent may be missing the proxy settings required by your network environment. A proxy can be configured using the ```ProxyAuth```, ```ProxyUser```, ```ProxyPass``` and ```ProxyAddress``` values in the configuration file.
4. Verify that the API Key is correct. If the above settings are correct then the API Key used by the agent may have changed. Follow these *directions* to view your user's current API Key.


## More Information

* [Getting .NET Agent Logs](troubleshooting-net.html#logs)

* [.NET Agent Configuration](installation-netconfig.html#config)


