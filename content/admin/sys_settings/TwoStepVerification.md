<!--
title: "Two-Step Verification"
description: "Overview and instructions for using the TSV feature"
tags: "Admin system settings Two Step Verification TSV Multi Factor Authorization Security Backup Codes Google Authenticator"
-->

## How it Works 

Two-step verification (TSV) uses an auto-generated Time-Based One-Time Password Algorithm (TOTP) security token to add an extra layer of protection beyond your username and password. You can access TSV codes with your Contrast-associated email address, or by using the Google Authenticator mobile application that's available on the following devices:

* [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en)
* [iPhone](https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8)
* [Blackberry](https://appworld.blackberry.com/webstore/content/29401059/?lang=en&countrycode=US)

## Administrator Set Up

TSV is controlled at three levels: System, Organization and User. The System Administrator can enable or disable the feature using a radio buttin by going to **System Settings > Security > Two-Step Verification**.  

<a href="assets/images/Security-two-step.png" rel="lightbox" title="Two-step verification configuration"><img class="thumbnail" src="assets/images/Security-two-step.png"/></a>

Use the radio button choose if users are required to to set up TSV. If users are required to set up TSV, a lock icon indicates changes may not be made. If users aren't required to set up TSV, the Organization Administrator can toggle the feature on or off. If TSV is on, the Administrator may choose whether or not to require TSV for users. This configuration decision results in two potential workflows for the user as described below.

> **Note:** If a user belongs to multiple organizations, their default organization determines their TSV settings.

Check the boxes for **Google Authenticator** or **Email**

## User Onboarding

### Required setup 

If TSV is enabled and required, the user is onboarded the next time they login.

<a href="assets/images/TSVOnboardReq.png" rel="lightbox" title="Required Onboarding"><img class="thumbnail" src="assets/images/TSVOnboardReq.png"/></a>

The user receives a message explaining that their administrator requires TSV. The user can click the link to **Learn More** about two-step verification, why it's needed and how it works. The user can also go directly to the setup process by clicking the button to **Get Started**. 

### Optional setup

If TSV is enabled but not required, the user is prompted to begin onboarding the next time that they login; however, they can choose to opt out of the process by clicking the **No Thanks** link. The user won't receive this prompt at future logins.

<a href="assets/images/TSVOnboardOpt.png" rel="lightbox" title="Optional Onboarding"><img class="thumbnail" src="assets/images/TSVOnboardOpt.png"/></a>

## User Setup

To begin setup, choose how you would like to receive codes.  If you select email, your Contrast-associated email will automatically be used. You will then be sent a verification code to enter on the following screen.  

If you select Google Authenticator, you will be given a QR code with further instructions.  You may scan the QR code provided, or enter a code manually. You may also use the provided dropdown to select the device type.  This is a quick way to identify where you've set up TSV.  You will then use the Google Authenticator app to obtain a verification code and validate your device.

Before completing TSV setup, you will be given the opportunity to download a set of backup codes in the form of a .txt file, which will provide a means for logging in should you ever encounter an error or get locked out.  It is very important that these codes be downloaded and saved in a secure place!

## Reconfiguring Notification Methods

Should you change your mind about how you wish to receive verification codes, you may reconfigure this in **My Account > Two-Step Verification**.

<a href="assets/images/TSVUserSettings.png" rel="lightbox" title="User Settings"><img class="thumbnail" src="assets/images/TSVUserSettings.png"/></a>

> **Note:** When changing notification type, the token will change as soon as a new selection is made, therefore saving is not necessary and a new set of backup codes will be issued immediately.




