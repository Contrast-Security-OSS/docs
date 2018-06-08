<!--
title: "Common Java Keytool Commands"
description: "Common Keytool commands and workflows"
tags: "Admin system settings configuration SSL EOP tools keytool openssl"
-->

If SSL is part of your Enterprise-on-Premises deployment, SystemAdmins may find the following commands and introductory principles to be useful. 

There are three workflows in which Contrast users typically add SSL:

* Setting up Contrast UI HTTPS
* Integrating with [LDAP](installation-setupauth.html#ldap) or [Active Directory](installation-setupauth.html#ad) where you see `ldaps://`
* Securing communication between agents and the Contrast application

The following examples are intended to help describe workflows in which SSL could be used, as well as the possible commands for implementation and debugging.

## Keytool

### Create a KeyStore And KeyPair

The following command will create a new KeyStore (if one doesn't exist), KeyPair and an alias called "`teamserver`.

```
keytool -genkeypair \
        -alias teamserver \
        -keyalg RSA \
        -keystore contrast.jks
```

When running this command, you will be prompted for information to identify yourself and your organization. This command requires a password that you will need for future integrations.

Sample Output:

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

The directory after this command would show:

```
$ ls
contrast.jks
```

### Create a CSR 

Your certificate authority (CA) needs a certificate signing request (CSR) from you to create a SSL certificate.

```
keytool -certreq \
        -alias teamserver \
        -file teamserver.csr \
        -keystore contrast.jks
```

After this command, the directory would show:

```
$ ls
contrast.jks	teamserver.csr
```

You can now share the *teamserver.csr* with your CA. In response, they should send you a signed SSL certificate to use in your environment.  

## Import a CA Certificate 

When importing root and intermediate certificates, you will need to be aware of a small change to the `-alias` and `-file` options. As a general rule, most purchased SSL certificates will be recognized as valid because their root CA is already part of the default KeyStore. However, the default will change with your distribution and Java version. You can find the default KeyStore at *$JAVA_HOME/jre/lib/security/cacerts*.  

To view the contents of this KeyStore, use:

```
$ keytool -keystore cacerts -list
Enter keystore password:
```

If you're using an internal CA, you must obtain root and intermediate certificates to verify the chain of trust through the KeyStores on both sides of the connection.  

**Root certificate:**

```
keytool -import \
        -trustcacerts
        -alias root
        -file my-root-cert.crt
        -keystore contrast.jks
```

**Intermediate:**

```
keytool -import \
        -trustcacerts
        -alias intermediate
        -file my-intermediate-cert.crt
        -keystore contrast.jks
```

**Signed:**

The alias used is the same in all of the previous examples, specifically for CSR. The *my-ca-signed-cert.crt* is what you should receive in response to a CSR.  

It's very important that this Signed Certificate is imported to the alias that matches the private key used to create the CSR.

```
keytool -import \
        -trustcacerts
        -alias teamserver
        -file my-ca-signed-cert.crt
        -keystore contrast.jks
```


## List KeyStore Contents

When debugging your KeyStore and client connections, it's helpful to match fingerprints between client and server.

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

Your Keystore contains 1 entry

teamserver, May 6, 2016, PrivateKeyEntry,
Certificate fingerprint (SHA1): 5C:23:48:BF:80:2D:AE:78:57:8C:BE:45:C4:39:BA:A8:D8:77:70:D8
```

To list them verbosely:

```
keytool -list \
          -v \
          -keystore contrast.jks
```

## Export Certificate from Your KeyStore

```
keytool -export
        -alias teamserver
        -file teamserver.crt
        -keystore contrast.jks
```

## Delete An Alias from Your KeyStore

```
keytool -delete \
        -alias teamserver \
        -keystore contrast.jks
```

## Rename an Alias in Your KeyStore

```
keytool -changealias \
        -alias teamserver \
        -destalias contrast-teamserver \
        -keystore contrast.jks
```

## Change Your KeyStore Password

```
keytool -storepasswd \
        -keystore contrast.jks
```
