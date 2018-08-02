<!--
title: "ActiveMQ Persistent Store Full"
description: "ActiveMQ Disk Persistence"
tags: "troubleshoot setup FAQ activemq disk disc full"
-->

If you're seeing errors in your log file related to a **queue**, it's likely that the storage of your ActiveMQ database is causing the problem. You might observe any of the following in your *contrast.log* file:

* "Failed to page in more queue" messages
* `queue://queue.activity.app`
* `Queue.java`
* A link to http://activemq.apache.org/producer-flow-control.html
* Any reference to **ActiveMQ** with `ERROR` log level
* "Failed to page in more queue messages" `java.lang.NegativeArraySizeException` thrown by `activemq.broker`
* "Failed to fill batch" caused by `NegativeArraySizeException`.
* "Problem retrieving message for browse" thrown by `Queue.java:1117`

When the disk first fills up, you might start to see error messages in *contrast.log* every 30 seconds. Example error message:

```
Main:store:queue://queue/activity.app:store) ... percentUsage=102% ... Persistent store is Full, 100% of SOME#. Stopping producer
```

At this point, you should check to see why Contrast thinks that your disk is full. It's likely that ActiveMQ surpassed its allotted storage; but, in some cases, your disk could be full.  

Before clearing any files, stop the Contrast process, and then begin the process of clearing out unnecessary files. If you see these ActiveMQ errors, you can resolve this in just a few steps:

* Confirm the Contrast isn't running.
* Navigate to *$CONTRAST_HOME/data/activemq*.
* Delete everything in this folder (both the data and index folders).
* Start Contrast.
