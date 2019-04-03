<!--
title: "Use the .NET Agent with Contrast and a Self-Signed SSL Certificate"
description: "Use the .NET agent with a Contrast and self-signed SSL certificate"
tags: "configuration SSL certifications agent installation .NET"
-->

By default, the .NET framework doesn't allow SSL connections that can't be validated. If the .NET agent is attempting to connect to Contrast with a self-signed SSL certificate, it could give the following error message:

>"The underlying connection was closed: Could not establish trust relationship for the SSL/TLS secure channel."

There are two configuration changes that allow the .NET agent to connect to Contrast with a self-signed SSL certificate: 

* Install the self-signed certificate as a trusted certificate. 
* Configure the agent to ignore certificate errors. 

Contrast only recommends that you use these solutions for testing purposes in a trusted environment. These changes could allow for man-in-the-middle attacks to intercept or modify data sent from the agent to Contrast. 

## Option One

* Open Internet Explorer (IE) as an **Administrator**.
* Navigate to your instance of the Contrast interface. If IE displays an error message, click **Continue to this website (not recommended)**.
* Click on the **Certificate Error icon (next to the URL) > View Certificate > Details tab > Copy to File**.
* Export the certificate as a **DER encoded binary X.509 (.CER)**.
* Click **Start**, and then **Start Search**. 
* Type **mmc** and then press **Enter**.
* On the **File** menu, click **Add/Remove Snap-in**. 
* Under **Available snap-ins**, click **Certificates** and then **Add**
* Under **This snap-in will always manage certificates for**, click **Computer account** and then **Next**. 
* Click **Local computer** and then **Finish**. 
* If you have no more snap-ins to add to the console, click **OK**. 
* In the console tree, double-click **Certificates**
* Right-click the **Trusted Root Certification Authorities** store.
* Click **Import** to import the certificates. 
* Follow the steps in the **Certificate Import Wizard** using the certificate created in the previous steps. 


## Option Two 

Alternatively, you can configure the agent to trust **any** certificate. You should only use this configuration for testing purposes or in trusted environments.

* In a text editor, open *-%SYSTEMDRIVE%\ProgramData\Contrast\dotnet\contrast_security.yaml*. 
* Set `api.certificate.ignore_cert_errors` to `false`: 

> **Example:** 
 ```
api:
  certificate:
    ignore_cert_errors: false
 ```
