<!--
title: "My server appears on the Contrast site, but my application does not."
description: "Troubleshooting the on-boarding of an application agent."
-->

## Scenario: Your application hasn't been browsed to yet.
Contrast won't "see" your application until it gets used. You must visit the application after you start up your server successfully with Contrast. Once it does get accessed, Contrast will spend a few seconds analyzing it. You may notice a pause when you first access your application as this analysis is taking place. It shouldn't take very long - even big applications should take less than a minute.

## Scenario: Your application is running on an unsupported container.
Contrast is only officially supported on the following containers:
* Tomcat 5, 6, 7, 8
* Jetty 6, 7, 8, 9
* JBoss 5.1, 6.1, 7, 7.1
* GlassFish 3
* WebSphere 6.0, 7.0, 8.5
* WebLogic 9, 10g, 11c, 12c
* IIS 6+ 
