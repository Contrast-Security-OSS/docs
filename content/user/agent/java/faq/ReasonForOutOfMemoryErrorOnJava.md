<!--
title: "Reason For "OutOfMemoryError" When Running Contrast Java Agent"
description: "Explanation for the OutOfMemoryError"
-->

#### Contrast needs some of its own memory. Bump it up a bit!

Contrast keeps some metadata, but not a lot. Maybe the JVM is already close to its heap size limit? Adding another 32MB should be more than enough for Contrast. If you think we're doing something wrong, [send us a heap dump](mailto:bugs@contrastsecurity.com) and we'll gladly take a look!

## See Also

[How The Java Agent Affects App Performance](user_javafaq.html#perf)

