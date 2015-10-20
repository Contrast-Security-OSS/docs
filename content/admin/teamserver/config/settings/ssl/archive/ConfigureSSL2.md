<!--
title: "Configuring SSL"
description: "Configuring SSL"
-->

## Import an existing certificate 
* Acquire certificate, private key and ca bundle (if needed)
* Create a new Java KeyStore with the ca bundle 
````
keytool -import -alias root -keystore contrast.jks -trustcacerts -file <ca_bundle_file>
````
* Convert your certificate and key to pkcs12 format using openssl
````
openssl pkcs12 -export -in <certificate_file> -inkey <private_key_file> -out contrast.p12 -name "<alias>"
````
* When it asks your for a destination keystore password, be sure to enter one as the next step fails (due to keytool functionality) if you try to import a p12 keystore with no password.
* Import your p12 keystore into the Java KeyStore you created in Step 1.
*keytool -importkeystore -srckeystore contrast.p12 -srcstoretype PKCS12 -destkeystore contrast.jks*
* Copy the contrast.jks file to ***$CONTRAST_HOME/data/conf/ssl***
*  Open the ***$CONTRAST_HOME/data/conf/server.properties*** file in a text editor such as notepad or nano
*  Enable SSL by setting the ```https.enabled``` property
````
https.enabled=true
````
* Configure the SSL port you would like your server to listen on (Standard 8443)
````
https.port=8443
````
* Enter the path to your contrast.jks file generated above
````
https.keystore.file=/opt/Contrast/data/conf/ssl/contrast.jks
````
* Enter the password you created your Java KeyStore with
````
https.keystore.pass=$ecretP45S
````
* Enter the alias of your certificate (hostname)
````
https.keystore.alias=contrast.yourdomain.com
````
*  Restart Contrast TeamServer

 * Linux 
````
service contrast-server restart
````
 * Windows
````
Start -> Services
Select Contrast Server
Click restart 
````
