<!--
title: "Multi-factor Authentication"
description: "Overview and instructions for using the MFA feature"
tags: "Admin system settings Two Step Verification MFA Multi Factor Authorization Security Backup Codes Google Authenticator"
-->

Multi-factor Authentication (MFA) uses an auto-generated Time-Based One-Time Password Algorithm (TOTP) security token to add an extra layer of protection on top of your username and password. You can access MFA codes with your Contrast-associated email address, or by using the Google Authenticator mobile application that's available on the following devices:

* [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en)
* [iPhone](https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8)
* [Blackberry](https://appworld.blackberry.com/webstore/content/29401059/?lang=en&countrycode=US)

## Administrator Set Up

MFA is controlled at three levels: System, Organization and User. 

The System Administrator can enable or disable the feature using a radio button by going to **System Settings > Security > Multi-factor Authentication**. If MFA is on, the Organization Administrator may choose whether or not to require MFA for users. If you'd like to allow an Organization Admin to override this choice, check the box to **Allow organization override**.

Organization Administrators can go to **Organization Settings > Security > Multi-factor Authentication section**, and use the radio button to require users to set up MFA. If users are required to set up MFA, a lock icon indicates that users can't make changes. If users aren't required to set up MFA, the user can toggle the feature on or off. 

<a href="assets/images/Security-mfa.png" rel="lightbox" title="Multi-factor Authentication configuration"><img class="thumbnail" src="assets/images/Security-mfa.png"/></a>

> **Note:** If a user belongs to multiple organizations, their default organization determines their MFA settings.

Check the box for **Google Authenticator** or **Email** to set your notification method. 

## User Onboarding

### Required setup 

If MFA is enabled and required, the user is onboarded the next time they login.

<a href="assets/images/MFAOnboardReq.png" rel="lightbox" title="Required Onboarding"><img class="thumbnail" src="assets/images/MFAOnboardReq.png"/></a>

The user receives a message explaining that their administrator requires MFA. The user can click the link to **Learn More** about multi-factor authentication, why it's needed and how it works. The user can also go directly to the setup process by clicking the button to **Get Started**. 

### Optional setup

If MFA is enabled but not required, the user is prompted to begin onboarding the next time that they login; however, they can choose to opt out of the process by clicking the **No Thanks** link. The user won't receive this prompt at future logins.

<a href="assets/images/MFAOnboardOpt.png" rel="lightbox" title="Optional Onboarding"><img class="thumbnail" src="assets/images/MFAOnboardOpt.png"/></a>

To learn more about user setup process, go to the [Login and Password article](user-account.html#loginpwd).




