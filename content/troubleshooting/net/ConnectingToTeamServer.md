<!--
title: "The .NET Agent Can't Connect to Contrast"
description: "Troubleshooting guide for .NET agent issues"
tags: "troubleshoot Contrast interface agent installation .NET"
-->

## Issue

* The .NET agent doesn't start successfully.
* The Contrast Tray and/or .NET agent logs report errors when connecting to the Contrast application: 

    >*Contrast .NET service failed to start. Contrast .NET cannot connect to TeamServer at: [https://app.contrastsecurity.com](https://app.contrastsecurity.com). The remote name could not be resolved:* ***app.contrastsecurity.com***

* Data from a server with the installed agent doesn't appear in the Contrast interface.

## Solution

* Open the .NET agent's configuration file, *contrast_security.yaml*, which is located in the agent's data directory (i.e., *C:/ProgramData/Contrast/dotnet*).

* Verify that the `api.url` value (e.g., [https://app.contrastsecurity.com/Contrast](https://app.contrastsecurity.com/Contrast)) can be reached from a normal web browser on the server. If the URL can't be reached, you should review the network path and related settings between the server and the Contrast application.

* Verify proxy settings. If a normal web browser can connect to Contrast but the agent can't, the agent might be missing the proxy settings required by your network environment. You can configure a proxy using the `api.proxy.url`, `api.proxy.user`, `api.proxy.pass` and `api.proxy.auth_type` values in the [configuration](installation-netconfig.html) file.

* Verify that the API key (`api.api_key`) is correct. If the above settings are correct, the API key used by your organization might have changed. Follow these [directions](admin-systemsettings.html#apikey) to view your current API Key.

