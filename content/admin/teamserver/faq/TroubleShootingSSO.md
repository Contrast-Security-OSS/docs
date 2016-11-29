<!--
title: "Troubleshooting Single Sign-On"
description: "Trouble setting up single sign-on/SAML"
tags: "saml sso idenity-provider"
-->

## Troubleshooting SAML Connectivity
You may potentially run into an issue connecting to your identity provider if using a metadata URL with an HTTPS certificate from an authority we don't directly support (such as a self-signed certificate). If that is the case, please try configuring SAML by unchecking "I have access to the metadata URL" and paste the IDP's metadata XML into the text box instead. 

