<!--
title: "Two-Step Verification"
description: "Overview and instructions for using the TSV feature"
-->

## Overview

Contrast takes security seriously, including when it comes to your Contrast account.  Two-step verification uses an auto-generated TOTP (Time-based One-Time Password algorithm) security token to add an extra layer of protection beyond your username and password.

You can access two-step verification codes via your Contrast-associated email address, or by using the Google Authenticator mobile application, available on the following devices:

[Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en)
<br/>
[iPhone](https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8)
<br/>
[Blackberry](https://appworld.blackberry.com/webstore/content/29401059/?lang=en&countrycode=US)


## Getting Started

Two-step verification (TSV) is controlled at three hierarchical levels: System, Organization and User.  The System administrator can Enable or Disable the feature, as well as choose whether or not individual organizations may override this setting.  

**System Settings > Security > Two-Step Verification**
<br/>
<a href="assets/images/TSVSystemEnabledOverrideOff.png" rel="lightbox" title="System Settings"><img class="thumbnail" src="assets/images/TSVSystemEnabledOverrideOff.png"/></a>

If override is not enabled, then the system setting will carry down through the remaining levels. A lock icon will indicate that changes may not be made. 

**Org Settings > Security > Two-Step Verification**
<br/>
<a href="assets/images/TSVOrgLocked.png" rel="lightbox" title="Locked Organization Settings"><img class="thumbnail" src="assets/images/TSVOrgLocked.png"/></a>

If override IS enabled, then the Organization administrator may choose to toggle the feature ON or OFF.  If ON, they can also choose whether or not to require two-step verification for users.

<a href="assets/images/TSVOrgEnabledRequired.png" rel="lightbox" title="Organization Settings"><img class="thumbnail" src="assets/images/TSVOrgEnabledRequired.png"/></a>

This results in two potential flows for the user, described below.


## Required Use Case

If TSV is enabled and required, the user will be onboarded as follows upon login:

<a href="assets/images/TSVOnboardReq.png" rel="lightbox" title="Required Onboarding"><img class="thumbnail" src="assets/images/TSVOnboardReq.png"/></a>

A message explains that their administrator is requiring TSV.  If they are unfamiliar with it they have the option to first learn more, including what two-step verification is, why they need it, and how it works. Otherwise they can just begin the setup process.

## Optional Use Case

If TSV is enabled and **not** required, the user will still be onboarded upon login, although they may choose to opt out at this time and are directed to where they may set up the feature later.  This onboarding will only show once in order to make them aware that TSV is available.

<a href="assets/images/TSVOnboardOpt.png" rel="lightbox" title="Optional Onboarding"><img class="thumbnail" src="assets/images/TSVOnboardOpt.png"/></a>

> **Note:** If a user belongs to multiple organizations, then their default organization will determine their TSV settings.


## Setup

Setting up two-step verification is simple.  First, choose how you would like to receive codes.  If you select Email, your Contrast-associated email will automatically be used.  You will then be sent a verification code to enter on the following screen.  

If you select Google Authenticator, you will be given a setup code and further instructions.  You can scan the QR code provided, or enter a code manually. You can also use the provided dropdown to select your device type.  This is simply a quick way to identify where you've set up TSV.  You will then use the app to obtain a verification code and validate your device.

Before completing setup, you will be given a set of backup codes, which will provide a means for logging in should you ever encounter an error or get locked out.  It is very important that these codes be saved and kept in a secure place!

<a href="assets/images/TSVBackupCodes.png" rel="lightbox" title="Backup Codes"><img class="thumbnail" src="assets/images/TSVBackupCodes.png"/></a>


## Reconfiguring Notification Methods

Should you change your mind about how you wish to receive verification codes, you may reconfigure this in **My Account > Two-Step Verification**.

<a href="assets/images/TSVUserSettings.png" rel="lightbox" title="User Settings"><img class="thumbnail" src="assets/images/TSVUserSettings.png"/></a>

> **Note:** When changing notification type, the token will change as soon as a new selection is made, therefore saving is not necessary and a new set of backup codes will be issued immediately.


## Backup Methods & Troubleshooting

If for some reason after implementing TSV you encounter an error and cannot successfully receive a verification code via your chosen method, you have the option to receive a temporary code via email by clicking the **Can't Sign In?** link from the second step of the login process. Temporary codes will be valid for five minutes. Alternatively, a backup code may be used.  If email is already the chosen notification method, you should contact your administrator to investigate potential issues with email settings.

<a href="assets/images/TSVCantSignIn.png" rel="lightbox" title="Initiate A Temporary Verification Code"><img class="thumbnail" src="assets/images/TSVCantSignIn.png"/></a>

## Reset Device

If having issues with Google Authenticator, one way in which you can troubleshoot is to try manually resetting your device by clicking the **Reset Device** link in User Settings.  This will clear all data for the current device and require resetting Google Authenticator, whether with the same device or a new one.

<a href="assets/images/TSVResetDevice.png" rel="lightbox" title="Resetting Your Device in User Settings"><img class="thumbnail" src="assets/images/TSVResetDevice.png"/></a>


## Trusted Device

Coming soon...

