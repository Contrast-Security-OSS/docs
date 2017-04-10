<!--
title: "Configuring Single Sign-On (SSO)"
description: "TeamServer can be configured to utilize Single Sign On Authentication"
tags: "SSO Single Sign-On configuration authentication"
-->

## Getting Started

Single Sign On (SSO) is an authentication service that allows access to multiple applications using one set of credentials. You can configure Contrast to use this service with a SAML 2.0 supported provider. 

For more on the SAML 2.0 specification, read [this article](https://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf).

Authentication happens through an **identity provider (IdP)**. You may use your own generic IdP or one of many popular third-party providers, such as [Okta](https://www.okta.com/), [OneLogin](https://www.onelogin.com/) or [Ping Identity](https://www.pingidentity.com/en.html).

To get started, set up an IdP (if you don't use one already), and then provide your metadata to connect to Contrast via an XML file or a **Metadata URL**.


---

## EOP

For Enterprise-On-Premises (EOP) customers, SSO is configured at the System level by the SuperAdmin.

###Switching to SSO

If a System Admin decides to set up SSO, it's important to note the following:

Contrast doesn't support user provisioning; therefore, users must have an existing account in Contrast before authenticating with SSO. Additionally, if users are identified with a user ID rather than an email address, those accounts don’t automatically transfer over to the SSO configuration and must be recreated. 

### Before You Get Started
Contrast doesn't provide keys for SAML authentication. If you enable SSO without providing private keys, you're only able to perform IDP-initiated logins.

You need to generate your own self-signed key using the Java Keytool:
```keytool -genkeypair -alias some-alias -keypass changeit -keystore samlKeystore.jks```

Use the [Encrypted Editor](admin_tsconfig.html#encrypt) to modify *saml.properties* and update the values to the keystore you created in the step above. 

 ```
 authenticator.saml.keystore.path                  : /path/to/samlKeystore.jks
 authenticator.saml.keystore.default.key           : some-alias
 authenticator.saml.keystore.passwordMap           : some-alias=changeit
 authenticator.saml.keystore.password              : changeit
```
 
Once you make the changes, restart Contrast so that it picks up the new keystore. 

### Setup 

* From the **Authentication** tab in System Settings, Select **Change Authentication Method**.

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

>**NOTE:** You can edit your configuration later within the Authentication tab; however, you must retest and restart Contrast to apply the changes.

####Public and secret nodes

If [SuperAdmin was disabled](https://docs.contrastsecurity.com/admin_tsconfig.html#access) during installation, you're provided with two sets of metadata: one for the public node and one for the secret node. You need to set up the configuration for both in the UI. 

<a href="assets/images/Configure-SAML-identity-provider.png" rel="lightbox" title="Configure your SAML Identity Provider"><img class="thumbnail" src="assets/images/Configure-SAML-identity-provider.png"/></a>

---

## SaaS 

For SaaS customers, the Contrast System Administrator configures authentication; however, Organization Administrators may be granted the ability to override these settings. In this case, the override only allows an organization to switch to using SSO.


### Switching to SSO

If an Org Admin decides to set up SSO, it's important to note the following:

Contrast doesn't support user provisioning; therefore, all users must have an existing account in Contrast before authenticating with SSO. Also, if users are identified with a user ID rather than an email address, those accounts don’t automatically transfer over to the SSO configuration and must be recreated.

### Setup 

* From the **Single Sign-On** tab in Org Settings, click **Get Started**

<a href="assets/images/SSOOrgSettings.png" rel="lightbox" title="Single Sign-On Onboarding - Org Settings"><img class="thumbnail" src="assets/images/SSOOrgSettings.png"/></a>

* You may receive a warning dialog regarding the implications of changing authentication. Please read it carefully before proceeding.
* Use the provided information to set up Contrast with your IdP.
* Provide a name for your IdP as well as the associated metadata to connect to Contrast.
* Test the configuration by clicking the **Test** button. If an error occurs, Contrast provides a debug log for troubleshooting. This test only validates the metadata and Contrast's ability to connect to the IdP.  
* Once the test is successfull, click **Finish**.
* Open a **new** browser window, private browsing session or Incognito window and attempt the SSO login with your account. If you're unsuccessful, go back to the browser in which you're still logged in, disable SSO for the Organization and then contact Support. 

>**NOTE:** You can edit your SSO configuration later within the SSO tab.

To return the organization back to the default configuration, select **Revert to Contrast-Managed Authentication** and confirm the change. The Contrast SuperAdmin controls these settings and no configuration is necessary.

---

## Using SSO

From the user perspective, Single Sign-On is simple and only makes a slight difference in the login process.

**Logging In**
If SSO is configured there is a checkbox on the Contrast login page. Checking it disables the password input field, as all that is required is an email address. 

<a href="assets/images/SSOLogin.png" rel="lightbox" title="SSO Login"><img class="thumbnail" src="assets/images/SSOLogin.png"/></a>

From here, the user's email is verified with the configured IdP and once matched up, directs to the IdP login page. At this point the user will submit their full SSO credentials and once successfully authenticated, will be logged in and directed back to the TeamServer dashboard. If a user tries to sign in using SSO but does not have an account in TeamServer, an error message will appear on the login screen, informing them that their administrator has yet to create their account.

>**NOTE:** If Two-Step Verification is active for a user, that login process occurs *after* successful SSO authentication. See [Two-Step Verification](admin_tsconfig.html#tsv) for more information. 


[Troubleshooting SSO](admin_tsfaq.html#sso)

<!--
**Logging Out**
During IdP configuration, a logout landing page may be designated. This is simply a neutral place to direct users after logging out of their application(s). In the case that no page is specified, users will be directed to a default Contrast logout landing page.-->
