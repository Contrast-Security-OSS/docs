<!--
title: "Configuring TeamServer for HTTPS"
description: "Guidelines for configure HTTPS for TeamServer"
-->

## Background
By default, Contrast uses HTTP for both UI and Agent connections. In some organizations this may not be a big deal, but in others you may find that you need to add or replace HTTP with HTTPS for both UI and Agent Traffic. There are essentially two ways to accomplish this requirement.

**Reverse Proxy Method** - Use a standard web server such as Apache HTTPD or nginx in front of the Contrast Server configured to reverse proxy requests using Contrast's AJP connector. 

**Contrast HTTPS Connector** - Configure Contrast to listen to HTTPS connections on a port that you specify.
Each method has it's own benefits and providing the option to use either method allows Contrast to fit in with many different organization security policies and architectures. 

## Reverse Proxy Method
To use AJP with a Reverse Proxy, you will need to ensure that the Contrast Server is configured to listen for connections using the AJP protocol. To verify this setting, open the ***$CONTRAST_HOME/data/conf/server.properties*** file in your text editor and ensure that the following options are set.
````
ajp.enabled=true
ajp.port=8009
````
You can, of course configure the ```ajp.port``` setting to reflect the port that you would actually like the server to listen for incoming connections on. In some cases, you may wish to also disable the ```http.enabled``` and ```https.enabled``` options if they are enabled.

After updating the server.properties file you will need to restart the Contrast Server service so the changes take effect. 

### Configuring The Front-End Server
You should refer to your server's documentation for instructions on how to configure it to use AJP. For reference, below you will find links to the instructions for both Apache and nginx. 

* [Apache mod_proxy_ajp configuration](http://httpd.apache.org/docs/2.2/mod/mod_proxy_ajp.html)
* [nginx proxy ajp configuration](http://webapp.org.ua/sysadmin/setting-up-nginx-ssl-reverse-proxy-for-tomcat/)

## Contrast HTTPS Connector
Configuring Contrast to use an HTTPS connector is a straight-forward process. This documentation assumes that you have already either acquired a certificate to use. The certificate can be CA Signed or Self-Signed. 

You will first need to import your certificate into a new Java KeyStore (jks) for use by Contrast. If you already have a KeyStore, you can skip this step and place your keystore in the ***$CONTRAST_HOME/data/conf/ssl*** directory.

All commands used in this guide should be run from the directory where contrast was installed in a command shell with administrative privileges.

### Generating a self-signed certificate and keystore for SSL termination 
This is the quickest and easiest method for generating the proper certificate and keystore. The following command will prompt you for information about your organization and then generate a keystore with a self-signed certificate. 

````
$ jre/bin/keytool -genkey -keyalg RSA -alias contrast-server -keystore data/conf/ssl/contrast-server.jks -validity 365 -keysize 2048
````

We recommend using this method over generating certificates with OpenSSL. For more complicated SSL configurations, we recommend using a reverse proxy.  Continue to enabling SSL in the Contrast Server. 

### Importing SSL certificates verified by third party providers
First, generate a new keystore.
````
$ jre/bin/keytool -genkey -alias contrast-server -keystore data/conf/ssl/contrast-server.jks
````
Once your keystore is created, you can import your server's certificate into the new keystore.
````
$ jre/bin/keytool -import -keystore data/conf/ssl/contrast-server.jks -storepass <keystore password> \
  -file <path to certificate> -alias <server hostname>
````
Additionally, you may need to import Intermediate CA Certs into the Keystore as well (see you CA's documentation to verify this is the case). For a private CA server, you will need any intermediate certificates and the root CA certificate in the keystore.
````
$ jre/bin/keytool -import -trustcacerts -alias <ca-name> -storepass <keystore password> \
  -file <path to ca or intermediate certificate>
````
Continue to enabling SSL in Contrast Server. 

### Enabling and Configuring HTTPS in Contrast Server
Once you have setup your keystore, you will need to open the ***$CONTRAST_HOME/data/conf/server.properties*** file in your favorite text editor and update the following properties.

````
https.enabled=true
https.port=<port to listen for https connections on>
https.keystore.file=<full path to jks created above>
https.keystore.pass=<password for the jks created above>
https.keystore.alias=<hostname of the server>
````

You may also find it useful to ensure that the ```http.enabled``` and ```ajp.enabled``` options are both set to **false** to ensure that only connections made over HTTPS are allowed to the Contrast Server.

After you have updated the ```server.properties```, you can restart the Contrast Server service and ensure that it is now listening on the HTTPS port you've configured.

## Agent Configuration
If you switch from http to https, you will need to update the server to tell future Contrast Agents that they should connect back using https instead of http.
Open the ***$CONTRAST_HOME/data/conf/general.properties*** file and change the value of the teamserver.url property to reflect your change. Agents will need to be manually updated the first time after this change has been made. Future updates to the agent will be automatic.

##Contrast.NET Agent
The Contrast.NET agent needs additional configuration to connect to a TeamServer using a self-signed certificate.
