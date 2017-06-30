<!--
title: "Configuring Single Sign-On (SSO)"
description: "TeamServer can be configured to utilize Single Sign On Authentication"
tags: "installation setup SSO Single Sign-On configuration authentication"
-->

## About Contrast and SSO

Single Sign-On (SSO) is an authentication service that allows access to multiple applications using one set of credentials. You can configure Contrast to use this service with a SAML 2.0 supported provider. 

> **Note:** For more information on the **SAML 2.0 specification**, [read this article](https://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf).

Authentication happens through an **identity provider (IdP)**. You may use your own generic IdP or one of many popular third-party providers, such as [Okta](https://www.okta.com/), [OneLogin](https://www.onelogin.com/) or [Ping Identity](https://www.pingidentity.com/en.html).

To get started, set up an IdP (if you don't use one already), and then provide your metadata to connect to Contrast via an XML file or a **Metadata URL**.

## EOP

For Enterprise-On-Premises (EOP) customers, the SuperAdmin configures SSO at the System level. If a System Admin decides to set up SSO, it's important to note that Contrast doesn't support user provisioning; therefore, users must have an existing account in Contrast before authenticating with SSO. Also, if users are identified with a user ID rather than an email address, those accounts don’t automatically transfer over to the SSO configuration and must be recreated. 

### Get started

Contrast doesn't provide keys for SAML authentication. If you enable SSO without providing private keys, you're only able to perform IdP-initiated logins. You need to generate your own self-signed key using the Java Keytool:

```
keytool -genkeypair -alias some-alias -keypass changeit -keystore samlKeystore.jks
```

Use the [Encrypted Editor](installation-setupconfig.html#encrypt) to modify *saml.properties* and update the values to the keystore you created in the previous step. 

```
 authenticator.saml.keystore.path                  : /path/to/samlKeystore.jks
 authenticator.saml.keystore.default.key           : some-alias
 authenticator.saml.keystore.passwordMap           : some-alias=changeit
 authenticator.saml.keystore.password              : changeit
```
 
Once you make the changes, restart Contrast so that it picks up the new keystore. 

### Configuration 

* From the **Authentication** tab in **System Settings**, select **Change Authentication Method**.

<a href="assets/images/SSOChangeAuth.png" rel="lightbox" title="Changing Authentication Method"><img class="thumbnail" src="assets/images/SSOChangeAuth.png"/></a>

* You may receive a warning regarding the implications of changing authentication. Please read it carefully before proceeding.

<a href="assets/images/SSOWarning.png" rel="lightbox" title="Warning Dialog"><img class="thumbnail" src="assets/images/SSOWarning.png"/></a>

* In Step 1 of the setup wizard, select **Single Sign-On**.
* In Step 2, use the provided information to set up Contrast with your IdP.  
* Provide a name for your IdP as well as the associated metadata to connect to Contrast.
* Test the configuration by clicking the **Test** button. If an error occurs, a Contrast provides a debug log for troubleshooting. This test only validates the metadata and Contrast's ability to connect to the IdP.  
* Once the test is successfull, click **Finish**.
* Restart Contrast to apply the changes.

<a href="assets/images/SSOConfig.png" rel="lightbox" title="Single Sign-On Configuration"><img class="thumbnail" src="assets/images/SSOConfig.png"/></a>

<a href="assets/images/SSOConfigRestart.png" rel="lightbox" title="Restart TeamServer to Apply Authentication Changes"><img class="thumbnail" src="assets/images/SSOConfigRestart.png"/></a>

>**Note:** You can edit your configuration later within the Authentication tab; however, you must retest and restart Contrast to apply the changes.

#### Public and secret nodes

If [SuperAdmin was disabled](installation-setupinstall.html#disable-sa) during installation, you're provided with two sets of metadata: one for the public node and one for the secret node. You need to set up the configuration for both in the Contrast interface. 

<a href="assets/images/Configure-SAML-identity-provider.png" rel="lightbox" title="Configure your SAML Identity Provider"><img class="thumbnail" src="assets/images/Configure-SAML-identity-provider.png"/></a>


## SaaS 

For SaaS customers, the Contrast System Administrator configures authentication; however, an Organization Administrator may be granted the ability to override these settings. In this case, the override only allows an organization to switch to using SSO.

If an OrgAdmin decides to set up SSO, it's important to note that Contrast doesn't support user provisioning; therefore, all users must have an existing account in Contrast before authenticating with SSO. Also, if users are identified with a user ID rather than an email address, those accounts don’t automatically transfer over to the SSO configuration and must be recreated.

### Configuration

* From the ** Sign-On** tab in **Organization Settings**, click **Get Started**.

<a href="assets/images/SSOOrgSettings.png" rel="lightbox" title="Single Sign-On Onboarding - Org Settings"><img class="thumbnail" src="assets/images/SSOOrgSettings.png"/></a>

* You may receive a warning dialog regarding the implications of changing authentication. Please read it carefully before proceeding.
* Use the provided information to set up Contrast with your IdP.
* Provide a name for your IdP as well as the associated metadata to connect to Contrast.
* Test the configuration by clicking the **Test** button. If an error occurs, Contrast provides a debug log for troubleshooting. This test only validates the metadata and Contrast's ability to connect to the IdP.  
* Once the test is successfull, click **Finish**.
* Open a **new** browser window, private browsing session or Incognito window and attempt the SSO login with your account. If you're unsuccessful, go back to the browser in which you're still logged in, disable SSO for the Organization and then contact Support. 

>**Note:** You can edit your SSO configuration later within the SSO tab.

To return the organization back to the default configuration, select **Revert to Contrast-Managed Authentication** and confirm the change. The Contrast SuperAdmin controls these settings and no configuration is necessary.

---

## Use SSO

For a user, SSO makes only a slight change to the login process. If SSO is configured, a checkbox appears on the Contrast login page. Checking it disables the password input field; only an email address is required. 

<a href="assets/images/SSOLogin.png" rel="lightbox" title="SSO Login"><img class="thumbnail" src="assets/images/SSOLogin.png"/></a>

Contrast then verifies your email with the configured IdP, and directs you to the IdP login page. Once you submit your full SSO credentials and are successfully authenticated, you're logged in and directed back to the Contrast dashboard. If you try to sign in using SSO but don't have an account in Contrast, an error message informing you that your administrator must create your account appears on the login screen.

>**Note:** If Two-Step Verification is active for a user, that login process occurs **after** successful SSO authentication. See the artcle on [Two-Step Verification](admin-systemsettings.html#twostep) for more information. 

For more help with connectivity, go to the article on [Troubleshooting SSO](troubleshooting-auth.html#troubleshoot-sso). 

<!--
**Logging Out**
During IdP configuration, a logout landing page may be designated. This is simply a neutral place to direct users after logging out of their application(s). In the case that no page is specified, users will be directed to a default Contrast logout landing page.-->
