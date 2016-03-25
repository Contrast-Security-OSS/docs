<!--
title: "Common Java Keytool Commands"
description: "Common Keytool commands and workflows"
tags: "configuration SSL EOP administration tools keytool openssl"
-->
# Who Should Read this Document
This is an overview of useful commands and introductory principles for a person assuming system administration of Contrast TeamServer EOP where SSL is part of your deployment.  Examples presented below are not presented as a step-by-step document but intended to be helpful to describe workflows where SSL could be used and describe the commands possible for implementation and debugging.

At Contrast, we normally see three workflows where SSL is added:
* Setting up TeamServer UI HTTPS
* Integrating with LDAP or Active Directory where you see `ldaps://`
* Securing communication between agents and TeamServer.

# Keytool

## Create a Keystore and keypair

The command below will create a new keystore (if one does not exist), new keypair, and alias called teamserver.

```
keytool -genkeypair \
        -alias teamserver \
        -keyalg RSA \
        -keystore contrast.jks
```
When running this command, you will be prompted for information to identify yourself and your organization.  This command requires a password that you will need to remember for future integrations.

Example output:
```
Enter keystore password:
Re-enter new password:
What is your first and last name?
  [Unknown]:  john smith
What is the name of your organizational unit?
  [Unknown]:  devteam
What is the name of your organization?
  [Unknown]:  Example, Inc
What is the name of your City or Locality?
  [Unknown]:  New York City
What is the name of your State or Province?
  [Unknown]:  NY
What is the two-letter country code for this unit?
  [Unknown]:  US
Is CN=john smith, OU=devteam, O=Example, Inc, L=New York City, ST=NY, C=US correct?
  [no]:  y
```

Taking a look at the directory after this command would show:
```
$ ls
contrast.jks
```

## Create a CSR for existing Keystore

A certificate signing request (CSR) is what your Certificate Authority needs from you to create a SSL Certificate.
```
keytool -certreq \
        -alias teamserver \
        -file teamserver.csr \
        -keystore contrast.jks
```
Taking a look at the directory after this command would show:
```
$ ls
contrast.jks	teamserver.csr
```
The teamserver.csr can now be shared with your Certificate Authority and in response they should send you a signed SSL certificate for use in your environment.  

##  Import a Signed, Root, or Intermediate CA Certificate into existing keystore

When importing root and intermediate certificates, you will need to be aware of a small change to the `-alias` and `-file` options.

As a general rule, most purchased SSL certificates will be recognized as valid because their Root Certificate Authority is already part of the default keystore.  Keep in mind, this will change with your distribution and Java version.  The default keystore can be found at `$JAVA_HOME/jre/lib/security/cacerts`.  

To view the contents of this keystore:
```
$ keytool -keystore cacerts -list
Enter keystore password:
```  

If you are using an internal CA, then you will need to obtain root and intermediate certificates to verify the chain of trust through the keystores on both sides of the connection.  

### Root Certificate

```
keytool -import \
        -trustcacerts
        -alias root
        -file my-root-cert.crt
        -keystore contrast.jks
```
## Intermediate
```
keytool -import \
        -trustcacerts
        -alias intermediate
        -file my-intermediate-cert.crt
        -keystore contrast.jks
```
## Signed
Notice here that the alias used is the same in all examples above, specifically the Certificate Signing Request example.  The my-ca-signed-cert.crt is what you should receive in response to a CSR.  

It is very important that this Signed Certificate is imported to the alias that matches the private key used to create the CSR.
```
keytool -import \
        -trustcacerts
        -alias teamserver
        -file my-ca-signed-cert.crt
        -keystore contrast.jks
```



## Listing Keystore Contents

When debugging your keystore and client connections, it is helpful to match fingerprints between client and server.

```
keytool -list \
        -keystore contrast.jks
```

Output:
```
$ keytool -list \
>         -keystore contrast.jks
Enter keystore password:

Keystore type: JKS
Keystore provider: SUN

Your keystore contains 1 entry

teamserver, May 6, 2016, PrivateKeyEntry,
Certificate fingerprint (SHA1): 5C:23:48:BF:80:2D:AE:78:57:8C:BE:45:C4:39:BA:A8:D8:77:70:D8
```

To list them verbosely:
```
keytool -list \
          -v \
          -keystore contrast.jks
```

## Export Certificate from your Keystore

```
keytool -export
        -alias teamserver
        -file teamserver.crt
        -keystore contrast.jks
```

## Delete an alias from your keystore

```
keytool -delete \
        -alias teamserver \
        -keystore contrast.jks
```

## Rename an alias in your keystore

```
keytool -changealias \
        -alias teamserver \
        -destalias contrast-teamserver \
        -keystore contrast.jks
```

## Change your keystore password

```
keytool -storepasswd \
        -keystore contrast.jks
```
