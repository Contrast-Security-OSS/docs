<!--
title: "Using The .NET Agent With A TeamServer Using A Self-Signed SSL Certificate"
description: "Instructions on using the .NET agent with a TeamServer and self-signed SSL certificate"
tags: "configuration SSL certifications agent installation .Net"
-->

By default, the .NET framework doesn't allow SSL connections that can't be validated. If the .NET agent is attempting to connect to Contrast with a self-signed SSL certificate, it could give the following error message:

>"The underlying connection was closed: Could not establish trust relationship for the SSL/TLS secure channel."

There are two configuration changes that will allow the .NET agent to connect to Contrast with a self-signed SSL certificate: installing the self-signed certificate as a trusted certificate or configuring the agent to ignore certificate errors. We only recommend these solutions to be used for testing purposes in a trusted environment as these changes could allow for man-in-the-middle attacks to intercept or modify data sent from the agent to Contrast. 

## Install The Self-Signed Certificate As A Trusted Root CA

1. Open Internet Explorer as an **Administrator**
2. Navigate to your instance of TeamServer. If IE displays an error message, click **Continue to this website (not recommended)**
3. Click on the **Certificate Error** icon next to the URL
4. Click **View Certificate**
5. Click the **Details** tab
6. Click **Copy to File**
7. Export the certificate as a **DER encoded binary X.509 (.CER)**
8. Click **Start**, click **Start Search**, type **mmc** and then press **Enter**
9. On the **File** menu, click **Add/Remove Snap-in**
10. Under **Available snap-ins**, click **Certificates** and then **Add**
11. Under **This snap-in will always manage certificates for**, click **Computer account** and then **Next**
12. Click **Local computer** and click **Finish**
13. If you have no more snap-ins to add to the console, click **OK**
14. In the console tree, double-click **Certificates**
15. Right-click the **Trusted Root Certification Authorities** store
16. Click **Import** to import the certificates and follow the steps in the **Certificate Import Wizard** using the certificate created in Step 7


## Add The ```TeamServerValidateCert``` Tag To The Configuration File

Alternatively, the agent can be configured to trust **any** certificate. This configuration should only be used for testing purposes or in trusted environments.

1. In a text editor, open ***-%SYSTEMDRIVE%\Program Files\Contrast.NET\DotnetAgentService.exe.config***
2. In the **appSettings** section, add the ```TeamServerValidateCert``` tag

Example:
```
<?xml version="1.0"?>
<configuration>
 <appSettings>
 <add key="TeamServerUrl" value="*****************"/>
 <add key="TeamServerUserName" value="*******************"/>
 <add key="TeamServerApiKey" value="**************"/>
 <add key="TeamServerServiceKey" value="************"/>
 <add key="TeamServerValidateCert" value="false"/>
```
