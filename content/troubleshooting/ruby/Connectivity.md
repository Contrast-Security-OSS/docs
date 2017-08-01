<!--
title: "Troubleshooting Connectivity to TeamServer"
description: "Notes on Communication between Application and Service and between Service and TeamServer"
tags: "ruby on rails connectivitiy agent service teamserver"
-->

## Connectivity

For performance reasons the Ruby agent middleware that runs within your application sends its findings to a locally running service which is responseible for collating and bundling that information before sending it to TeamServer. 

### Agent to Service

The Contrast Security ruby service is an executable that must be running to allow communcation between the protected application and TeamServer. It can be added to an init or serivce script or run manually.

If the Contrast ruby agent and ruby service are *not* sharing the same configuration file, ensure that the `host` and `port` fields in the `service` section of the respective `contrast_security.yaml` files are identical. 

### Service to TeamServer

The service must authenticate itself with TeamServer on startup. Verify that the credentials in the `teamserver` section of the `contrast_security.yaml` file that the service is using are correct.  If you believe that the credentials are correct but the service is unable to authenticate against TeamServer, contact your account administrator and ensure that your account has the correct permissions.


