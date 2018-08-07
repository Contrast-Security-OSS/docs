<!--
title: "System Requirements"
description: "System Requirements for the Crawler Micro-Service"
tags: "tools crawler system requirements"
-->

Please see TeamServer and Crawler [Sizing Recommendations](installation-setup.html#size). The Crawler specification can be found via the C1 configuration option.
* Micro-service
 * The recommended sizing for crawler instances is 2 CPUs and 2GB RAM with 1GB disk space that's dedicated for temporary crawler record storage during execution. The minimum is 1 CPU and 2GB RAM.
 * Oracle JDK/JRE 7+
 * For Linux platforms, installation of the fontconfig library and required fonts for your web applications
* TeamServer
 * At least 1GB of disk space dedicated for the Crawler records. More space is needed depending on the size of your Web application and the number of historical records archived.