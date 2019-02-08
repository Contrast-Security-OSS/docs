<!--
title: "Troubleshooting Connectivity to the Contrast application"
description: "Notes on Contrast compatibility with other agents"
tags: "node agent appdynamics newrelic compatibility connectivity"
-->

## Common Errors

**Unable to register server with TeamServer. Contrast will not report findings. (302).**

Check the credentials in *contrast_security.yaml*. This message is typically a result of incorrect credentials. If you're sure the credentials are correct, contact your account administrator and ensure that your account has the correct permissions.

**Contrast was unable to connect to TeamServer. Continuing without instrumentation.**

This occurs if the agent couldn't communicate with the Contrast application at all. Check to make sure that the `api.url` field in *contrast_security.yaml* is correct. It should be in the format `https://app.contrastsecurity.com`. There is no need to specify the */Contrast/* route.

**This application is unwanted by TeamServer and no findings will be reported. Make sure the application is unarchived.**

As is evident from the warning message, this typically occurs when the application you're using has been [archived](user-appsmanage.html#overview) in the Contrast UI. If the application is unarchived, or you think the archived application should register differently in the Contrast application, there may simply be a name conflict. Try running with `--application.name <name>` to specify a unique name, which will resolve the conflict.

## Set Up Proxies

Sometimes it's necessary to proxy all communication between the agent and the Contrast application. To do this, run the agent with `--api.proxy.enable true` and `--api.proxy.url <proxy_url>`. Any communication to Contrast will be sent via the proxy server specified in the URL.
