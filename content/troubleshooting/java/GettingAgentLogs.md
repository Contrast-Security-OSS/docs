<!--
title: "Get Contrast Java Agent Logs"
description: "How to get Java agent logs"
tags: "troubleshoot java agent logs"
-->

You can ask Contrast to log verbose information by passing a custom system property to the server process: `-Dcontrast.log=/path/to/log.txt -Dcontrast.level=DEBUG -Dcontrast.log.daily=true`.

## How It Works

These JVM options put Contrast into debug mode and log all output to the log file specified as the system property value. It also prevents the log from rolling over into multiple files. The log file starts with some messages that look similar to this:

<a href="assets/images/KB1-d11.png" rel="lightbox" title="Log File"><img class="thumbnail" src="assets/images/KB1-d11.png"/></a>

The verbose logs allow our Customer Support team to diagnose any issues you may encounter. When you [file a bug report](mailto:bugs@contrastsecurity.com), please submit diagnostic logs.
