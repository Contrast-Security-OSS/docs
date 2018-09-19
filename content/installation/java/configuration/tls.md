<!--
title: "Configuring Java agent TLS"
description: "Contrast Java agent uses a secure TLS connection to communicate with the Contrast UI. Users may configure the TLS connection to better fit their network security profile"
tags: "installation configuration java agent tls ssl pki certificate cert key authentication" 
-->

## Java agent TLS Connection

The Contrast Java agent uses a secure TLS connection to communicate with the Contrast UI. Contrast hosted systems (e.g. app.contrastsecurity.com) use strong TLSv1.2 connections and certificates signed by industry standard certificate authorities. However, Users running their own Enterprise On-Premise Contrast services may need to configure the Contrast Java agent to use enterprise certificate authorities and may wish the Java agent to send client certificates in the TLS handshake.

## Configuring TLS

The Contrast Java agent uses the standard [Java Cryptography Architecture](https://docs.oracle.com/javase/8/docs/technotes/guides/security/crypto/CryptoSpec.html) for configuring TLS. Specifically, the Java agent uses the system's "TLS" [SSContext](https://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#SSLContext). What this means for most users is that the certificates trusted by the agent can be adjusted using the standard `javax.net.ssl.trustStore` system properties, and the certificate the agent sends when the TLS server requests a client certificate can be adjusted using the standard `javax.net.ssl.keyStore` system properties.

The following example configures the Contrast Java agent to use a custom key store and trust store.

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

