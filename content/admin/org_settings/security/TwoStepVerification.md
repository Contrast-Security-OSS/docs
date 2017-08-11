<!--
title: "Two-Step Verification"
description: "Overview and instructions for using the TSV feature"
tags: "Admin system settings Two Step Verification TSV Multi Factor Authorization Security Backup Codes Google Authenticator"
-->

Two-step verification (TSV) uses an auto-generated Time-Based One-Time Password Algorithm (TOTP) security token to add an extra layer of protection on top of your username and password. You can access TSV codes with your Contrast-associated email address, or by using the Google Authenticator mobile application that's available on the following devices:

* [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en)
* [iPhone](https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8)
* [Blackberry](https://appworld.blackberry.com/webstore/content/29401059/?lang=en&countrycode=US)

## Administrator Set Up

TSV is controlled at three levels: System, Organization and User. 

The System Administrator can enable or disable the feature using a radio button by going to **System Settings > Security > Two-Step Verification**. If TSV is on, the Organization Administrator may choose whether or not to require TSV for users. If you'd like to allow an Organization Admin to override this choice, check the box to **Allow organization override**.

Organization Administrators can go to **Organization Settings > Security > Two-Step Verification section**, and use the radio button to require users to set up TSV. If users are required to set up TSV, a lock icon indicates that users can't make changes. If users aren't required to set up TSV, the user can toggle the feature on or off. 

<a href="assets/images/Security-two-step.png" rel="lightbox" title="Two-step verification configuration"><img class="thumbnail" src="assets/images/Security-two-step.png"/></a>

> **Note:** If a user belongs to multiple organizations, their default organization determines their TSV settings.

Check the box for **Google Authenticator** or **Email** to set your notification method.

## User Onboarding

### Required setup 

If TSV is enabled and required, the user is onboarded the next time they login.

<a href="assets/images/TSVOnboardReq.png" rel="lightbox" title="Required Onboarding"><img class="thumbnail" src="assets/images/TSVOnboardReq.png"/></a>

The user receives a message explaining that their administrator requires TSV. The user can click the link to **Learn More** about two-step verification, why it's needed and how it works. The user can also go directly to the setup process by clicking the button to **Get Started**. 

### Optional setup

If TSV is enabled but not required, the user is prompted to begin onboarding the next time that they login; however, they can choose to opt out of the process by clicking the **No Thanks** link. The user won't receive this prompt at future logins.

<a href="assets/images/TSVOnboardOpt.png" rel="lightbox" title="Optional Onboarding"><img class="thumbnail" src="assets/images/TSVOnboardOpt.png"/></a>

To learn more about user setup process, go to the [Login and Password article](user-account.html#loginpwd).




