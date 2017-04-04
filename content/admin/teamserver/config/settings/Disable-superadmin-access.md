<!--
title: "Disable SuperAdmin Access for EOP Nodes"
description: "EOP guide for disabling SuperAdmin accounts"
tags: "SuperAdmin EOP disable permissions"
-->

The following steps lead you through the process of disabling SuperAdmin access from Enterprise-on-Premises (EOP) nodes that are accessible to general users.  

## Disable Access for Specific EOP Nodes

To disable SuperAdmin access from generally accessible nodes, begin by running Contrast in a [distributed setup](https://docs.contrastsecurity.com/admin_tsinstall.html#dist) as a new installation. You'll only be prompted to disable SuperAdmin if you're installing as an *application-only installation*; a full installation won't have this option.

If you already have a distributed Contrast setup, add `-Dsuper.admin.disabled=(false or true)` to `$CONTRAST_HOME/bin/contrast-server.vmoptions`. If false, the node allows SuperAdmin logins. If true, the node doesn't allow SuperAdmin logins. 

>**Note:** Contrast supports one secret node for each installation.

## Disable Access for SAML 

To disable SuperAdmin access for a Security Assertion Markup Language (SAML) authentication setup, configure Contrast as two different applications in your identity provider: one for the publicly accessible address and one for the secret node's address. Update the URL in the `SAML.properties` on the secret node and then restart Contrast. 

Example:

```
authenticator.saml.secret.url : http://secret.internal.contrast.com/Contrast
authenticator.saml.keystore.path : /path/to/jks.jks
authenticator.saml.keystore.default.key : default_keystore
authenticator.saml.keystore.passwordMap : keystore=password
authenticator.saml.keystore.password : keystore_password
authenticator.saml.url : http://app.public.contrastsecurity.com/Contrast

```