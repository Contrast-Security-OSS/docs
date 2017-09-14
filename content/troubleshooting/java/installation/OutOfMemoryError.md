<!--
title: "Reason For "OutOfMemoryError" When Running Contrast Java Agent"
description: "Explanation for the OutOfMemoryError"
tags: "troubleshoot java agent memory"
-->

## PermGen Error

Older versions of Java had separate area for permanent memory use called **PermGen**.

Contrast keeps some metadata, but not a lot. If the JVM is already close to its PermGen limit, adding another 32MB should be more than enough for Contrast. 

## OutOfMemoryError
 
Contrast Protect requires almost no extra memory. Unless you're already close to the heap limit, no additions should be necessary. At the maximum, you should add an extra 128MB.

Contrast Assess requires more memory to record the analytics necessary to tell a complete vulnerability story. Contrast suggests using 2x the maximum heap usage during typical Assess usage. The minimum required is 1.75x. (E.g., if you normally run with 128MB of memory, run with 256MB.)

## Other Solutions 

If you still experience memory problems after adding the necessary memory, or think that Contrast is doing something wrong, [send a heap dump](mailto:bugs@contrastsecurity.com). A Contrast team member will gladly take a look! 

## More Information

[How The Java Agent Affects App Performance](troubleshooting-javaapp.html#effect)

