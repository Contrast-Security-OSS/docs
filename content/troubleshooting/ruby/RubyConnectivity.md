<!--
title: "Troubleshooting Ruby Agent Connectivity to Contrast"
description: "Notes on Communication between the application and service, and between the Service and Contrast UI."
tags: "ruby on rails connectivity agent service ui"
-->

## Connectivity

For performance reasons, the Ruby agent that runs within your application sends its findings to a locally running
service, which is responsible for collecting and bundling that information before sending it to the Contrast UI. If
either the agent-to-service or service-to-Contrast communication link is broken, the agent won't be able to get updated
configuration information from Contrast or send application analytics for you to view.

### Agent to Service

The communication service is an executable that must be running to allow communication between the instrumented
application and the Contrast UI. The Ruby agent manages this service for you by spawning a child process on
application startup. 

> **Note:** In multi-process applications, only a single service is started.

If the Ruby agent and communication service are **not** sharing the same configuration file, ensure that the `host` and
`port` or `socket` fields in the `service` section of the respective *contrast_security.yaml* files are identical. You can find more information on these configurations in the [Ruby agent configuration articles](installation-rubyconfig.html).

### Service to Contrast

The service must authenticate itself with the Contrast UI on startup. Verify that the credentials are correct in the
`api` section of the *contrast_security.yaml* file that the service is using. If you believe that the credentials are
correct but the service is unable to authenticate against Contrast, contact your account administrator and make sure
that your account has the correct permissions. 

If you've verified authentication and connectivity between the host on which the application runs and the Contrast UI, but you still have issues with communication that you can't resolve, [file a bug report](mailto:bugs@contrastsecurity.com).

