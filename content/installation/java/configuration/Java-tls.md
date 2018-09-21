<!--
title: "Configuring Java agent TLS"
description: "Users can configure the Java agent's TLS connection to better fit their network security profile"
tags: "installation configuration java agent tls ssl pki certificate cert key authentication" 
-->

## TLS Connection

The Contrast Java agent uses a secure TLS connection to communicate with the Contrast UI. Contrast hosted systems (e.g., *app.contrastsecurity.com*) use strong TLSv1.2 connections and certificates signed by industry standard certificate authorities (CAs). However, users running their own Enterprise-on-Premises (EOP) Contrast services may need to configure the Java agent to use enterprise CAs, and may want the Java agent to send client certificates in the TLS handshake.

## Configuring TLS

The Contrast Java agent uses the standard [Java Cryptography Architecture](https://docs.oracle.com/javase/8/docs/technotes/guides/security/crypto/CryptoSpec.html) for configuring TLS. Specifically, the Java agent uses the system's "TLS" [SSContext](https://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#SSLContext). For most users, this means that you can adjust the certificates trusted by the agent using the standard `javax.net.ssl.trustStore` system properties. You can also adjust the certificate the agent sends when the TLS server requests a client certificate using the standard `javax.net.ssl.keyStore` system properties.

The following example configures the Java agent to use a custom key store and trust store.

```java
java \
  -javaagent:contrast.jar \
  -Djavax.net.ssl.trustStore=/etc/pki/tls/my-enterprise-truststore.p12 \
  -Djavax.net.ssl.trustStorePassword=changeit \
  -Djavax.net.ssl.trustStoreType=PKCS12 \
  -Djavax.net.ssl.keyStore=/etc/pki/tls/server-client-certificate.p12 \
  -Djavax.net.ssl.keyStorePassword=password \
  -Djavax.net.ssl.keyStoreType=PKCS12 \
  -jar my-server.jar
```

