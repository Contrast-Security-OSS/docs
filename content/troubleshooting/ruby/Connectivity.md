<!--
title: "Troubleshooting Connectivity to TeamServer"
description: "Notes on Communication between Application and Service and between Service and TeamServer"
tags: "ruby on rails connectivitiy agent service teamserver"
-->

## Connectivity

For performance reasons, the Ruby agent that runs within your application sends its findings to a locally running service, which is responsible for collecting and bundling that information before sending it to Contrast. If either the agent-to-service or service-to-Contrast communcation link is broken, the agent won't be able to get updated configuration information from Contrast or send findings for you to view.

### Agent to Service

The Ruby service is an executable that must be running to allow communcation between the protected application and the Contrast application. It can be added to an *init* or service script, or run manually.

If the Ruby agent and service are **not** sharing the same configuration file, ensure that the `host` and `port` fields in the `service` section of the respective `contrast_security.yaml` files are identical. 

### Service to Contrast

The service must authenticate itself with the Contrast application on startup. Verify that the credentials are correct in the `teamserver` section of the `contrast_security.yaml` file that the service is using. If you believe that the credentials are correct but the service is unable to authenticate against Contrast, contact your account administrator and make sure that your account has the correct permissions.


