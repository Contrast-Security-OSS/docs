<!--
title: "ActiveMQ Persistent Store Full"
description: "ActiveMQ Disk Persistence"
tags: "activemq disk disc full"
-->

## Disk Full (ActiveMQ)

If you are seeing errors in your log file related to a **queue**, then it is likely that the storage of your ActiveMQ database is causing the problem.  You may observe any of the following in your *contrast.log* file:

* `Failed to page in more queue messages`
* `queue://queue.activity.app`
* `Queue.java`
* A link to http://activemq.apache.org/producer-flow-control.html
* Any Reference to **ActiveMQ** with ```ERROR``` log level
* "Failed to page in more queue messages" java.lang.NegativeArraySizeException thrown by activemq.broker...
* "Failed to fill batch" - also caused by NegativeArraySizeException.
* "Problem retrieving message for browse" thrown by Queue.java:1117

When the disk first fills up, you might start to see error messages in contrast.log every 30 seconds like: Main:store:queue://queue/activity.app:store) ... percentUsage=102% ... Persistent store is Full, 100% of SOME#. Stopping producer

At this point, you should check to see why TeamServer thinks your disk is full.  It is likely that ActiveMQ has surpassed its allotted storage but in some cases your disk might actually be full.  

Before clearing any files, stop the TeamServer process and then we can begin the process of clearing out unnecessary files.

If you see these ActiveMQ errors, then you can resolve this in just a few steps:

1.  Confirm TeamServer is not running
2.  Navigate to *$CONTRAST_HOME/data/activemq*
3.  Delete everything in this folder (both the data and index folders)
4.  Start TeamServer
