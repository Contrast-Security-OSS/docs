<!--
title: "Troubleshooting Single Sign-On"
description: "Trouble setting up single sign-on/SAML"
tags: "troubleshoot authentication saml sso identity-provider"
-->

You might run into an issue connecting to your identity provider, if you're using a metadata URL with an HTTPS certificate from an unsupported authority, such as a self-signed certificate. 

## Solution

To resolve the issue, [configure SSO](admin-orgsettings.html#sso-org) by unchecking **I have access to the metadata URL** and pasting the metadata XML for the IDP into the text box. 


