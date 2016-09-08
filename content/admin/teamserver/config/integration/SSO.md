<!--
title: "Configuring Single Sign-On (SSO)"
description: "TeamServer can be configured to utilize Single Sign On Authentication"
tags: "SSO Single Sign-On configuration authentication"
-->

## Getting Started

Intro paragraph?

Which SAML identity provider are you working with (existing or need to create new?) Reference providers? Link to them? 

New Relic
SumoLogic
PagerDuty
AppDynamics
Splunk
ZenDesk
Okta

What You'll Need:
Name of current Identity Provider
Metadata URL from current ID Provider (for MVP this is all we are requiring)
To Set up an ID Provider in Step 2 (if not using one already)


## EOP

System level (SuperAdmin only)

### Notes About Switching to SSO
DB>SAML
Should work without problem

LDAP/AD>SAML
If user doesn’t exist or using ID instead of email, account won’t work - Warn admin that if username is not an email, those accounts won’t be active in SAML - will have to recreate those accounts

### Setup 

General notes:

* From Auth tab, Select Change Auth Method, confirm warning (?) and select SSO in Step 1
* Contrast info for ID provider is located in Step 2 of Setup (Give an example of setup process with Okta?) Input name and metadata URL
* Test Config button / Debug log
* Restart to apply changes
* Editing config from Auth tab


## SaaS

System (Contrast admin) with Org Override, so to customer, Org Level admins

### Notes About Switching to SSO
LDAP/AD>SAML
If user doesn’t exist or using ID instead of email, account won’t work - Warn admin that if username is not an email, those accounts won’t be active in SAML - will have to recreate those accounts

### Setup 

General notes:

* From SSO tab, click Get Started and confirm warning 
* Contrast info for ID provider is located here (Give an example of setup process with Okta?) Input name and metadata URL
* Test Config button / Debug log
* Restart to apply changes
* Editing config from SSO tab
* Switch back to LDAP option (no config, goes back to default and shows Onboarding screen again)


## Using SSO
(For Users)

Process of logging in, logout landing page, etc.
