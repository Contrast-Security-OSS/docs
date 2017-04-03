<!--
title: "Disabling SuperAdmin to Other Administrators"
description: "EOP guide for disabling SuperAdmin accounts"
tags: "SuperAdmin EOP disable permissions"
-->


Disabling SuperAdmin access The following steps disable superadmin access from nodes available to general users access 

Disabling SuperAdmin On Specific EOP Nodes

If you run Contrast in a [distributed setup](https://docs.contrastsecurity.com/admin_tsinstall.html#dist) and you have the ability to disable SuperAdmin access from the public nodes. If this is a new install, you'll only be prompted to disable SuperAdmin if you're installing as an application-only installation. A full installation won't have this option.

If you already have a distributed Contrast setup, add `-Dsuper.admin.disabled=(false or true)` to `$CONTRAST_HOME/bin/contrast-server.vmoptions`. If false, the node allows SuperAdmin logins. If true, the node doesn't allow SuperAdmin logins. 

> **Note:** Contrast supports one secret node.

SAML(EOP ONLY)

To disable SuperAdmin for a SAML authenication setup, configure Contrast as two different applications in your identity provider: one for the publicly accessible address and one for the secret node's address. Update the URL in the *SAML.properties* on the secret node and then restart Contrast. 

Example:

```
authenticator.saml.secret.url : http://secret.internal.contrast.com/Contrast
authenticator.saml.keystore.path : /path/to/jks.jks
authenticator.saml.keystore.default.key : default_keystore
authenticator.saml.keystore.passwordMap : keystore=password
authenticator.saml.keystore.password : keystore_password
authenticator.saml.url : http://app.public.contrastsecurity.com/Contrast

```