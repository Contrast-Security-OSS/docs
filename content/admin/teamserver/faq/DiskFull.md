<!--
title: "Debugging the Configuration of Active Directory or LDAP authentication services."
description: "Debugging the Configuration of Active Directory or LDAP authentication services."
tags: "Debug LDAP AD logging"
-->

## Disk Full

### ActiveMQ

If you are seeing errors in your log file related to a **queue**, then it is likely that the storage of your ActiveMQ database is causing the problem.  You may observe any of the following in your *contrast.log* file:

* `Failed to page in more queue messages`
* `queue://queue.activity.app`
* `Queue.java`
* A link to http://activemq.apache.org/producer-flow-control.html
* Any Reference to **ActiveMQ** with ```ERROR``` log level

You can resolve this in just a few steps:

1.  Stop TeamServer
2.  Navigate to *$CONTRAST_HOME/data/activemq*
3.  Delete everything in this folder (both the data and index folders)
4.  Start TeamServer
