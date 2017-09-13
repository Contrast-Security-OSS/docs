<!--
title: "Reason For "OutOfMemoryError" When Running Contrast Java Agent"
description: "Explanation for the OutOfMemoryError"
tags: "troubleshoot java agent memory"
-->

#### If it's a PermGen error - maybe Contrast needs some more of its own PermGen memory. Bump it up a bit!

Older versions of Java had separate area for permanent memory use called PermGen.

Contrast keeps some metadata, but not a lot. Maybe the JVM is already close to its PermGen limit? Adding another 32MB should be more than enough for Contrast. If you think we're doing something wrong, [send us a heap dump](mailto:bugs@contrastsecurity.com) and we'll gladly take a look!

#### If it's an OutOfMemoryError - maybe Contrast needs some more heap memory. Bump it up a bit!

Contrast Protect product requires practically no extra memory. Unless you're already close to the heap limit, no additions should be necessary. At the maximum, an extra 128MB should be added.

Contrast Assess requires more memory to record the analytics necessary to tell a complete vulnerability story. We suggest using 2x the maximum heap usage during typical usage. The minimum required is 1.75x. So, if you normally run with 128MB of memory, run with 256MB!

If you're still experiencing memory problems after adding the necessary memory, [send us a heap dump](mailto:bugs@contrastsecurity.com) and we'll gladly take a look!

## More Information

[How The Java Agent Affects App Performance](troubleshooting-javaapp.html#effect)

