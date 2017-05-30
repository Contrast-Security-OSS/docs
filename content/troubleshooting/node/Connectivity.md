<!--
title: "Troubleshooting Connectivity to Teamserver"
description: "Notes on Contrast compatibility with other agents"
tags: "node agent appdynamics newrelic compatibility connectivity"
-->

## Common Errors

**Unable to register server with TeamServer. Contrast will not report findings. (302).**

Check the credentials in *contrast.json*. This message is typically a result of incorrect credentials. If you're sure the credentials are correct, contact your account administrator and ensure that your account has the correct permissions.

**Contrast was unable to connect to TeamServer. Continuing without instrumentation.**

This occurs if the agent could not communicate with TeamServer at all. Check to make sure that the ```uri``` field in *contrast.json* is correct. It should be of the format ```http://localhost:19080```. There is no need to specify the */Contrast/* route.

**This application is unwanted by TeamServer and no findings will be reported. Make sure the application is unarchived.**

As is evident from the warning message, this typically occurs when the application you're using has been archived in TeamServer. If the application is unarchived, or you think the archived application should register differently in TeamServer, there may simply be a name conflict; try running with ```--appname <name>``` to specify a unique name, which will resolve the conflict.

## Setting Up Proxies

Sometimes it is necessary to proxy all communication between the agent and TeamServer. To do this, run the agent with the ```--httpProxy <proxy_url>``` option. Any communication to TeamServer will be sent via the proxy server specified in the url.
