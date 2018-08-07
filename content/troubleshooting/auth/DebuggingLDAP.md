<!--
title: "Debug the Configuration of Active Directory or LDAP authentication services."
description: "Debug the Configuration of Active Directory or LDAP authentication services."
tags: "troubleshoot authentication Debug LDAP AD logging"
-->

## Common Issues 

The most common reasons for LDAP or Microsoft Active Directory (AD) issues:

* Account information for connecting to a directory service isn't correct.
* Users assumed to be in a DN don't exist.
* Lookup fields such as mail or userID aren't correctly populated.
* The sub-tree of a DN isn't searchable.
* Required fields such as First Name, Last Name and Email are missing.

Enterprise-on-Premises (EOP) customers configuring an LDAP service or AD may also run into setup and configuration issues, which you can resolve by logging configuration guidance. 

## AD and LDAP Configurations

Configuring a directory service can be challenging for Contrast administrators. As noted in the [configuration guide](installation-setupconfig.html#ts), there are many pieces of information needed for basic connectivity, as well as dependencies for configuration. Many customers find this administrative task to be the most challenging part of Contrast setup.

### Debug a directory service setup

Before starting the debugging process, review the article on [logging](installation-setupconfig.html#log) to get up to speed on changing the log configuration and levels.

Turning on additional logging about directory services is a simple, one-line change to the *log4j2.xml* file located in *$CONTRAST_HOME/data/conf* directory. Change directories through a Unix command prompt or Windows Explorer window. You can edit the file in real-time, and shouldn't have to restart Contrast. Locate the section referrencing `Logger`, and add the line below. Contrast picks up the change and begin writing log messages to the *contrast.log*.

```json
<Logger name="com.aspectsecurity.contrast.teamserver.service.ldap" level="TRACE"></Logger>
```

### Review log messages

Once the setting takes effect, Contrast begins sending directory service log messages to the *contrast.log* file. Contrast recommends that you walk through the configuration of either LDAP or AD as a SuperAdmin after this setting is added. 

