<!--
title: "Configuring TeamServer for HTTPS"
description: "Guidelines for configure HTTPS for TeamServer"
tags: "Admin system settings configuration SSL EOP proxy"
-->

## Background

By default, Contrast uses HTTP for UI and agent connections. This may not be a big deal in some organizations; in others, you may find that you need to add or replace HTTP with HTTPS for both UI and agent traffic. There are two ways to accomplish this requirement.

* **Reverse proxy method:** Use a standard web server, such as Apache HTTPD or NGINX, in front of the Contrast server configured to reverse proxy requests using Contrast's AJP connector. 

* **Contrast HTTPS connector:** Configure Contrast to listen to HTTPS connections on a port that you specify.

Each method has its own benefits. Providing the option to use either method allows Contrast to fit in with many different organization security policies and architectures. 

## Reverse Proxy Method

To use AJP with a reverse proxy, you must ensure that the Contrast server is configured to listen for connections using the AJP protocol. To verify this setting, open the *$CONTRAST_HOME/data/conf/server.properties* file in your text editor and ensure that the following options are set.

````
ajp.enabled=true
ajp.port=8009
ajp.secretRequired=true|false
ajp.secret=somesecret
````
You can configure the `ajp.port` setting to reflect the port on which you'd like the server to listen for incoming connections. In some cases, you might want to also disable the `http.enabled` and `https.enabled` options.

The `ajp.secret` setting can be configured with a non-null, non-zero length value. This is not required if `secretRequired` is configured to `false`. Request workers are required to have the secret keyword; otherwise, the requests are rejected. The workers must provide a matching value, or the request will be rejected regardless of the setting of `secretRequired`.

After updating the *server.properties* file, restart the Contrast server service for the changes to take effect. 

### Configure the front-end server

Refer to your server's documentation for instructions on how to configure it to use AJP. Also refer to the following links for Apache and NGINX instructions. 

* [Apache mod_proxy_ajp configuration](http://httpd.apache.org/docs/2.2/mod/mod_proxy_ajp.html)
* [NGINX proxy AJP configuration](http://webapp.org.ua/sysadmin/setting-up-nginx-ssl-reverse-proxy-for-tomcat/)

## Contrast HTTPS Connector

Configuring Contrast to use a HTTPS connector is a straight-forward process. These instructions are written in the context that you have a certificate to use. The certificate can be CA signed or self signed. 

To begin, import your certificate into a new Java KeyStore (JKS) for use by Contrast. If you already have a KeyStore, you can skip this step and place it in the *$CONTRAST_HOME/data/conf/ssl* directory.

> **Note:** All commands used in this guide should be run in a command shell with administrative privileges from the directory in which Contrast was installed.

### Generate a self-signed certificate and KeyStore for SSL termination

This is the quickest and easiest method for generating the proper certificate and KeyStore. The following command prompts you for information about your organization and then generates a KeyStore with a self-signed certificate. 

````
$ jre/bin/keytool -genkey -keyalg RSA -alias contrast-server -keystore data/conf/ssl/contrast-server.jks -validity 365 -keysize 2048
````

Contrast recommends using this method over generating certificates with OpenSSL. For more complicated SSL configurations, Contrast recommends using a reverse proxy. The following section walks you through enabling SSL in the Contrast server. 

### Import SSL certificates verified by third-party providers

To begin, generate a new KeyStore.

````
$ jre/bin/keytool -genkey -alias contrast-server -keystore data/conf/ssl/contrast-server.jks
````
Once it's created, import your server's certificate into the new KeyStore.

````
$ jre/bin/keytool -import -keystore data/conf/ssl/contrast-server.jks -storepass <keystore password> \
  -file <path to certificate> -alias <server hostname>
````
You may also need to import intermediate CA certifications into the KeyStore. (See your CA's documentation to verify that this is the case.) For a private CA server, you need any intermediate certificates and the root CA certificate in the KeyStore.

````
$ jre/bin/keytool -import -trustcacerts -alias <ca-name> -storepass <keystore password> \
  -file <path to ca or intermediate certificate>
````

> **Note:** In order for the Contrast UI to use the SSL Certificate, the certificate can't be protected with a passphrase.

### Enable and configure HTTPS in the Contrast server

Once KeyStore setup is complete, open the *$CONTRAST_HOME/data/conf/server.properties* file in your text editor, and update the following properties.

````
https.enabled=true
https.port=<port to listen for https connections on>
https.keystore.file=<full path to jks created above>
https.keystore.pass=<password for the jks created above>
https.keystore.alias=<hostname of the server>
````

You may find it useful to set the `http.enabled` and `ajp.enabled` options to `false` to ensure that only connections made over HTTPS are allowed to the Contrast server.

After updating the `server.properties`, restart the Contrast server service, and ensure that it's now listening on the HTTPS port you configured.

## Agent Configuration

If you switch from HTTP to HTTPS, update the server to tell future Contrast agents that they should connect back using HTTPS instead of HTTP.

Open the *$CONTRAST_HOME/data/conf/general.properties* file, and change the value of the `teamserver.url` property to reflect your change. Agents must be updated manually the first time after you make this change. Future updates to the agent will be automatic.

> **Note:** The Contrast .NET agent needs additional configuration to connect to a Contrast application using a self-signed certificate.

