<!--
title: "Unable To Create New Native Thread" Error In Contrast Server"
description: "Explanation of the "unable to create new native thread" error"
tags: "troubleshoot setup FAQ TeamServer native thread"
-->

If you're seeing an error in your ***/opt/Contrast/contrast-error.log*** that's similar to the example below, you might be bumping up against the thread limit set by your operating system.

```
SEVERE: Servlet.service() for servlet [spring] in context with path [/Contrast] threw exception 
[Request processing failed; nested exception is java.util.concurrent.ExecutionException: 
java.lang.OutOfMemoryError: unable to create new native thread] with root cause
java.lang.OutOfMemoryError: unable to create new native thread
 at java.lang.Thread.start0(Native Method)
 at java.lang.Thread.start(Thread.java:714)
```

To address this issue, increase the number of threads that the Contrast user can start in your */etc/security/limits.d/90-nproc.conf* file.

>**Note:** To modify a system configuration file, you must have root access or the ability to sudo. Consult your System Administrator for additional details.

You can add the line `<contrast-username>     soft        nproc         unlimited` to the end of the file and restart the contrast-server using the command `sudo service contrast-server restart`.
