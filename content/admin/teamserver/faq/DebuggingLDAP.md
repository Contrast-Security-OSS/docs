<!--
title: "Debugging the Configuration of Active Directory or LDAP authentication services."
description: "Debugging the Configuration of Active Directory or LDAP authentication services."
-->

## Who Should Read this Article
Enterprise On Premise customers configuring an LDAP service or Microsoft Active Directory running into setup and configuration issues should read this article and apply the logging configuration provided in the section below. Configuration of a directory service can be challenging for TeamServer administrators. As noted in the [configuration guide](https://docs.contrastsecurity.com/admin_tsconfig.html), there are many pieces of information needed for basic connectivity, as well as dependencies for configuration. Many customers find this administrative task to be the hardest part of the setup of TeamServer and therefore, we provide a quick and simple way to assist with the debugging process.

## How to Debug a Directory Service Setup
If you haven't read our article about [logging in TeamServer](https://docs.contrastsecurity.com/admin_tsconfig.html#log), please review the article. Prior knowledge of changing the log configuration and levels is assumed for this effort. 

Turning on additional logging about directory services is a simple, one line change to the log4j2.xml file located in $CONTRAST_HOME/data/conf directory. Change directories either through a Unix command prompt or Windows Explorer window. The file can be edited in real-time and should not require a TeamServer restart. Locate the section referrencing "Logger" and add the following line below. TeamServer will pick-up the change and begin writing log messages to the contrast.log.

```json
<Logger name="com.aspectsecurity.contrast.teamserver.service.ldap" level="TRACE"></Logger>
```

## Reviewing the Log Messages
Once the setting has taken effect, TeamServer will start sending directory service log messages to the contrast.log file. We suggest you attempt to step through the configuration of either LDAP or Active Directory as the SuperAdmin credentialed user after this setting has been added. The most common reasons for LDAP or Active Directory issues:

* Account information for connecting to a directory service is incorrect.
* Users assumed to be in a DN do not actually exist.
* Lookup fields such as mail or userID are not correctly populated.
* The sub-tree of a DN is not searchable.
* Required fields such as First Name, Last Name and Email are missing.
