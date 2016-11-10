<!--
title: "Configuring Single Sign-On (SSO)"
description: "TeamServer can be configured to utilize Single Sign On Authentication"
tags: "SSO Single Sign-On configuration authentication"
-->

## Getting Started

Single Sign-On (SSO) is an authentication service that allows access to multiple applications using one set of credentials. Contrast can now be configured to use this service.

Authentication happens via an **Identity Provider (IdP)**. You may use either your own generic IdP or one of many popular third-party providers, such as [Okta](https://www.okta.com/), [OneLogin](https://www.onelogin.com/) or [Ping Identity](https://www.pingidentity.com/en.html), to name a few. 

<!-- DAN: Something about SAML 2.0 Specification? (including link) -->

To get started you'll need to set up an identity provider (if you don't use one already). You will then provide your metadata, either via an XML file or directly using a **Metadata URL** in order to connect to Contrast.


---

## EOP

For Enterprise-On-Premises customers, Single Sign-On is configured at the System level by the SuperAdmin.

### Notes About Switching to SSO

If a System Admin decides to set up SSO, it is important to note the following:

Contrast does not support user provisioning, therefore all users must have an existing account in TeamServer before switching the authentication method. Additionally, if users are identified with a user ID rather than an email address, those accounts won’t automatically transfer over to the SSO configuration and will need to be recreated.

<!-- DAN: "Maybe something more like 'an existing account or one created in TeamServer before...' Accounts can be created with SSO auth mode." NEED CLARIFICATION -->

### Setup 

* From the **Authentication** tab in System Settings, Select **Change Authentication Method**.

<a href="assets/images/SSOChangeAuth.png" rel="lightbox" title="Changing Authentication Method"><img class="thumbnail" src="assets/images/SSOChangeAuth.png"/></a>

* You may receive a warning dialog regarding the implications of changing authentication - please read it carefully before proceeding.

<a href="assets/images/SSOWarning.png" rel="lightbox" title="Warning Dialog"><img class="thumbnail" src="assets/images/SSOWarning.png"/></a>

* Select **Single Sign-On** in Step 1 of the setup wizard.
* In Step 2, use the provided information to set up Contrast with your identity provider.  
* Provide a name for your identity provider as well as the associated metadata in order to connect to Contrast
* Test the configuration using the Test button. If an error occurs, a debug log will be provided for troubleshooting.
* Once successfully tested, click **Finish** and then restart TeamServer to apply the changes.

<a href="assets/images/SSOConfig.png" rel="lightbox" title="Single Sign-On Configuration"><img class="thumbnail" src="assets/images/SSOConfig.png"/></a>

<a href="assets/images/SSOConfigRestart.png" rel="lightbox" title="Restart TeamServer to Apply Authentication Changes"><img class="thumbnail" src="assets/images/SSOConfigRestart.png"/></a>

>**NOTE:** Should you need to edit your configuration later, you may do so inline within the Authentication tab; however, you must re-test and restart TeamServer to apply the changes.


---

## SaaS 

For SaaS customers, the Contrast System Administrator will configure authentication; however, Organization Administrators may be granted the ability to override these settings. In this case, the override will only allow an organization to switch to using Single Sign-On.


### Notes About Switching to SSO

If an Org Admin decides to set up SSO, it is important to note the following:

Contrast does not support user provisioning, therefore all users must have an existing account in TeamServer before switching the authentication method. Additionally, if users are identified with a user ID rather than an email address, those accounts won’t automatically transfer over to the SSO configuration and will need to be recreated.

### Setup 

* From the **Single Sign-On** tab in Org Settings, click **Get Started**

<a href="assets/images/SSOOrgSettings.png" rel="lightbox" title="Single Sign-On Onboarding - Org Settings"><img class="thumbnail" src="assets/images/SSOOrgSettings.png"/></a>

* You may receive a warning dialog regarding the implications of changing authentication - please read it carefully before proceeding.
* Use the provided information to set up Contrast with your identity provider
* Provide a name for your identity provider as well as the associated metadata in order to connect to Contrast
* Test the configuration using the Test button. If an error occurs, a debug log will be provided for troubleshooting.
* Once successfully tested, click **Finish** and then restart TeamServer to apply the changes.

>**NOTE:** Should you need to edit your SSO configuration later, you may do so inline within the Single Sign-On tab; however, you must re-test and restart TeamServer to apply the changes.

To return the organization back to the default LDAP configuration, simply select **Revert to Contrast-Managed Authentication** and confirm. These settings are controlled by the Contrast SuperAdmin and no configuration is necessary.


---

## Using SSO

From the user perspective, Single Sign-On is simple and will only make a slight difference in the login process.

**Logging In**
If SSO is configured there will be a checkbox on the Contrast login page. Checking it will disable the password input field, as all that is required is an email address. 

<a href="assets/images/SSOLogin.png" rel="lightbox" title="SSO Login"><img class="thumbnail" src="assets/images/SSOLogin.png"/></a>

From here the user's email is verified with the configured IdP and once matched up, directs to the IdP login page. At this point the user will submit their full SSO credentials and once successfully authenticated, will be logged in and directed back to the TeamServer dashboard. If a user tries to sign in using SSO but does not have an account in TeamServer, an error message will appear on the login screen, informing them that their administrator has yet to create their account.

>**NOTE:** If Two-Step Verification is active for a user, that login process will occur *after* successful SSO authentication. See [Two-Step Verification](admin_tsconfig.html#tsv) for more information.

<!--
**Logging Out**
During IdP configuration, a logout landing page may be designated. This is simply a neutral place to direct users after logging out of their application(s). In the case that no page is specified, users will be directed to a default Contrast logout landing page.-->

### Troubleshooting SAML Connectivity
You may potentially run into an issue connecting to the metadata provider when using a metadata url. If that is the case, please try configuring SAML by unchecking "I have access to the metadata URL" and paste the IDP's metadata XML into the text box instead. 

<!-- DAN: Anything else re: troubleshooting a bad configuration? -->
