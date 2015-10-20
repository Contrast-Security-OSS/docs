<!--
title: "Getting Contrast Java Agent Logs"
description: "How to get Java agent logs"
-->

You can ask Contrast to log verbose information by passing a custom system property, ```-Dcontrast.log=/path/to/log.txt``` to the server process.

This switch will put Contrast into debug mode and log all output to the log file specified as the system property value. The log file will start with some messages that look similar to this:

<a href="assets/images/KB1-d11.png" rel="lightbox" title="Log File"><img class="thumbnail" src="assets/images/KB1-d11.png"/></a>

Of course the goal is to never need this. However, if you do, feel free to use the output to [file a bug report](mailto:bugs@contrastsecurity.com).
