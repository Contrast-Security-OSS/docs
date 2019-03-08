<!--
title: "Getting Contrast Java Agent Logs"
description: "How to get Java agent logs"
tags: "troubleshoot java agent logs"
-->

You can ask Contrast to log verbose information by passing a custom system property, `-Dcontrast.agent.logger.path -Dcontrast.agent.logger.level=debug -Dcontrast.agent.logger.roll_daily` to the server process.

These JVM options put Contrast into debug mode and log all output to the log file specified as the system property value. It also prevents the log from rolling over into multiple files. The log file will start with some messages that look similar to this:

<a href="assets/images/KB1-d11.png" rel="lightbox" title="Log File"><img class="thumbnail" src="assets/images/KB1-d11.png"/></a>

These verbose logs allow our support team to diagnose any issues you may encounter. Please submit diagnostic logs when [filing a bug report](mailto:support@contrastsecurity.com).
