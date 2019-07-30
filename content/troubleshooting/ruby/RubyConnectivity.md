<!--
title: "Troubleshooting Connectivity to TeamServer"
description: "Notes on Communication between Application and Service and between Service and Contrast UI"
tags: "ruby on rails connectivity agent service teamserver"
-->

## Connectivity

For performance reasons, the Ruby agent that runs within your application sends its findings to a locally running
service, which is responsible for collecting and bundling that information before sending it to the Contrast UI. If
either the agent-to-service or service-to-Contrast communication link is broken, the agent won't be able to get updated
configuration information from Contrast or send application analytics for you to view.

### Agent to Service

The communication service is an executable that must be running to allow communication between the instrumented
application and the Contrast UI. The Ruby agent will manage this service for you by spawning a child process on
application startup. Note: in multi-process applications, only a single service will be started.

If the Ruby agent and communication service are **not** sharing the same configuration file, ensure that the `host` and
`port` or `socket` fields in the `service` section of the respective `contrast_security.yaml` files are identical. More
information on these configuration can be found in the [Ruby agent configuration](installation-rubyconfig.html).

### Service to Contrast

The service must authenticate itself with the Contrast UI on startup. Verify that the credentials are correct in the
`api` section of the `contrast_security.yaml` file that the service is using. If you believe that the credentials are
correct but the service is unable to authenticate against Contrast, contact your account administrator and make sure
that your account has the correct permissions. 

If you have issues with communication that you cannot resolve after verifying authentication and connectivity between
the host on which the application runs and the Contrast UI, please 
[file a bug report](mailto:bugs@contrastsecurity.com).


