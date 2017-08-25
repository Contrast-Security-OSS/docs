<!--
title: "Debug the Configuration of Active Directory or LDAP authentication services."
description: "Debugg the Configuration of Active Directory or LDAP authentication services."
tags: "troubleshoot authentication Debug LDAP AD logging"
-->



The most common reasons for LDAP or Active Directory issues:

* Account information for connecting to a directory service is incorrect.
* Users assumed to be in a DN do not actually exist.
* Lookup fields such as mail or userID are not correctly populated.
* The sub-tree of a DN is not searchable.
* Required fields such as First Name, Last Name and Email are missing.

Enterprise-on-Premises (EOP) customers configuring an LDAP service or Microsoft Active Directory may also run into setup and configuration issues, which can be resolved by logging configuration guidance. 

## Debug Active Directory and LDAP Configurations

Configuring a directory service can be challenging for Contrast administrators. As noted in the [configuration guide](installation-setupconfig.html#ts), there are many pieces of information needed for basic connectivity, as well as dependencies for configuration. Many customers find this administrative task to be the most challenging part of Contrast setup.

## How to Debug a Directory Service Setup

Before beginning the debugging process, review the article on [logging](installation-setupconfig.html#log) so that you're up to speed on changing the log configuration and levels.

Turning on additional logging about directory services is a simple, one line change to the *log4j2.xml* file located in *$CONTRAST_HOME/data/conf* directory. Change directories either through a Unix command prompt or Windows Explorer window. You can edit the file can be real-time and shouldn't have to restart Contrast. Locate the section referrencing "Logger" and add the line below. Contrast will pick up the change and begin writing log messages to the *contrast.log*.

```json
<Logger name="com.aspectsecurity.contrast.teamserver.service.ldap" level="TRACE"></Logger>
```

## Review the Log Messages

Once the setting has taken effect, Contrast begins sending directory service log messages to the *contrast.log* file. Contrast recommends that you walk through the configuration of either LDAP or Active Directory as a SuperAdmin after this setting has been added. 