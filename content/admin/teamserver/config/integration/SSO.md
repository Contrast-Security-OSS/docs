<!--
title: "Configuring Single Sign-On (SSO)"
description: "TeamServer can be configured to utilize Single Sign On Authentication"
tags: "SSO Single Sign-On configuration authentication"
-->

## Getting Started

Single Sign On (SSO) is a type of authentication service that allows access to multiple applications using one set of credentials. Contrast can now be configured to use this service.

Authentication happens via an **Identity Provider (IdP)**. You may use either a generic IdP or one of many existing third-party providers, such as Okta, OneLogin or Ping Identity, to name a few. <!--(Which IdP's do we want to mention? Add hyperlinks?)-->

To get started you'll need to set up an identify provider (if you don't use one already). From the provider you will then obtain a **Metadata URL** (or other parameters) in order to connect Contrast.

<!-- Demonstrate setup process with Okta/third-party IDP here? -->

<!-- INSERT EXPLANATION OF GENERIC METHOD HERE. 
How to set up, requirements, difference from third-party, etc.
For generic, we will prompt for specific info in the setup wizard. Generic IDPs (for example, IBM has one) use SAML 2.0 standards but might not use a metadata URL. List the parameters you will need instead. -->


## EOP

For Enterprise-On-Premises customers, Single Sign-On is configured at the System level by the SuperAdmin.

### Notes About Switching to SSO

It is important to note that switching to SSO may have an impact depending on which authentication method you are currently using.

**If you currently use a Database configuration:**
All users must have an existing account in TeamServer before switching the authentication method. 

**If you currently use an LDAP or Active Directory configuration:**
All users must have an existing account in TeamServer before switching the authentication method. Additionally, if users are identified with a User ID rather than an email address, those accounts won’t automatically transfer over to the SSO configuration and will need to be recreated.

### Setup 

**Using Third-Party IDP:**

* From the **Authentication** tab in System Settings, Select **Change Authentication Method**.
* You may receive a warning dialog regarding the implications of changing authentication - please read it carefully before proceeding.
* Select **Single Sign-On** in Step 1 of the setup wizard.
* In Step 2, use the provided information to set up Contrast with your identity provider.  
* Provide the name of your identity provider as well as their associated metadata URL in order to connect to Contrast.
* Test the configuration using the Test button. If an error occurs, a debug log will be provided for troubleshooting.
* Once successfully tested, click **Finish** and then restart TeamServer to apply the changes.

>**NOTE:** Should you need to edit your configuration later, you may do so inline within the Authentication tab; however, you must re-test and restart TeamServer to apply the changes.

**Using Generic IDP:**

<!-- List steps that are different -->


## SaaS 

For SaaS customers, the Contrast System Administrator will configure LDAP authentication; however, Organization Administrators may be granted the ability to override these settings. In this case, the override will only allow the organization to switch to using Single Sign On in place of LDAP.

### Notes About Switching to SSO

If an Org Admin decides to override the authentication configuration, it is important to note the following:

All users must have an existing account in TeamServer before switching the authentication method. Additionally, if users are identified with a User ID rather than an email address, those accounts won’t automatically transfer over to the SSO configuration and will need to be recreated.

### Setup 

**Using Third-Party IDP:**

* From the **Single Sign-On** tab in Org Settings, click **Get Started**
* You may receive a warning dialog regarding the implications of changing authentication - please read it carefully before proceeding.
* Use the provided information to set up Contrast with your identity provider
* Provide the name of your identity provider as well as their associated metadata URL in order to connect to Contrast
* Test the configuration using the Test button. If an error occurs, a debug log will be provided for troubleshooting.
* Once successfully tested, click **Finish** and then restart TeamServer to apply the changes.

>**NOTE:** Should you need to edit your SSO configuration later, you may do so inline within the Single Sign-On tab; however, you must re-test and restart TeamServer to apply the changes.

To return the organization back to the default LDAP configuration, simply select **Revert to Contrast-Managed Authentication** and confirm. These settings are controlled by the Contrast SuperAdmin and no configuration is necessary.


**Using Generic IDP:**

<!-- List steps that are different -->


## Using SSO

From the user perspective, single sign-on is simple and will only make a slight difference in the login process.

**Logging In**
If SSO is configured there will be a checkbox on the Contrast login page. Checking it will disable the password input field, as all that is required is an email address. From here the user's email is verified with the configured IdP and once matched up, directs to the IdP login page. At this point the user will submit their full SSO credentials and once successfully authenticated, will be logged in and directed back to the TeamServer dashboard. 

>**NOTE:** If Two-Step Verification is active for a user, that login process will occur *after* successful SSO authentication. See [Two-Step Verification](admin_tsconfig.html#tsv)for more information.

**Logging Out**
During IdP configuration, a logout landing page may be designated. This is simply a neutral place to direct users after logging out of their application(s). In the case that no page is specified, users will be directed to a default Contrast logout landing page.

If a user tries to sign in using SSO but does not have an account in TeamServer, an error message will appear on the login screen, informing them that their administrator has yet to create their account.

