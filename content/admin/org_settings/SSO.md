<!--
title: "Single Sign-On"
description: "Overview of single sign-on authentication"
tags: "Admin Organization settings IP address hostname connect authenticate SSO"
-->

Single Sign-On (SSO) is an authentication service that allows access to multiple applications using one set of credentials. Contrast can now be configured to use this service with a [SAML 2.0 supported provider](https://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf). 

Authentication happens via an **Identity Provider (IdP)**. You may use either your own generic IdP or one of many popular third-party providers, such as [Okta](https://www.okta.com/), [OneLogin](https://www.onelogin.com/) or [Ping Identity](https://www.pingidentity.com/en.html), to name a few. 

## Getting Started
To get started you'll need to set up an identity provider (if you don't use one already). You will then provide your metadata, either via an XML file or directly using a **Metadata URL** in order to connect to Contrast.

Contrast does not provide keys for SAML authentication. If you enable SSO without providing private keys, you will only be able to perform IDP-initiated logins.

You will need to generate your own self-signed key using the Java Keytool:

```
keytool -genkeypair -alias some-alias -keypass changeit -keystore samlKeystore.jks
```

Use the [Encrypted Editor](installation-setupconfig.html#encrypt) to modify *saml.properties* and update the values to the keystore you created in the step above. 

```
 authenticator.saml.keystore.path                  : /path/to/samlKeystore.jks
 authenticator.saml.keystore.default.key           : some-alias
 authenticator.saml.keystore.passwordMap           : some-alias=changeit
 authenticator.saml.keystore.password              : changeit
```
 
Once the changes have been made, reboot TeamServer in order for the new keystore to be picked up. 

## Setup 
For SaaS customers, the Contrast System Administrator will configure authentication; however, Organization Administrators may be granted the ability to override these settings. In this case, the override will only allow an organization to switch to using Single Sign-On.

If an Org Admin decides to set up SSO, it is important to note that Contrast does not support user provisioning, therefore all users must have an existing account in TeamServer before authenticating with SSO. Additionally, if users are identified with a user ID rather than an email address, those accounts won’t automatically transfer over to the SSO configuration and will need to be recreated.

* From the **Single Sign-On** tab in Org Settings, click **Get Started**

<a href="assets/images/SSOOrgSettings.png" rel="lightbox" title="Single Sign-On Onboarding - Org Settings"><img class="thumbnail" src="assets/images/SSOOrgSettings.png"/></a>

* You may receive a warning dialog regarding the implications of changing authentication - please read it carefully before proceeding.
* Use the provided information to set up Contrast with your identity provider
* Provide a name for your identity provider as well as the associated metadata in order to connect to Contrast
* Test the configuration using the **Test** button. If an error occurs, a debug log will be provided for troubleshooting. This test will only validate the metadata and Contrast's ability to connect to the IDP.  
* Once successfully tested, click **Finish**.
* Open a **new** browser window, Private Browsing Session or Incognito window and attempt the SSO login with your account. If you are unsuccessful, go back to the browser where you are still logged in and disable SSO for the Organization, then contact Support. 

>**Note:** Should you need to edit your SSO configuration later, you may do so inline within the Single Sign-On tab.

To return the organization back to the default configuration, simply select **Revert to Contrast-Managed Authentication** and confirm. These settings are controlled by the Contrast SuperAdmin and no configuration is necessary.

