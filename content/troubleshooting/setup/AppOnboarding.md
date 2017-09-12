<!--
title: "Troubleshooting the onboarding of an application agent."
description: "An application isn't appearing in the list; or, a server appears on the Contrast site, but an application doesn't."
tags: "troubleshoot setup FAQ Contrast ui application on-boarding"
-->

After onboarding, you might not see your application appear in the **Applications** grid. There are a few reasons why this could happen.

## The server and application are displayed incorrectly

* Reason: The server on which the application is running doesn't have Contrast installed.

Check out **standard** or file a ticket with the [diagnostic log output file](troubleshooting-java.html#java-logs) to see what's happening. If your server isn't appearing in the Contrast interface, learn more from the [Installation Issues](troubleshooting-setupinstallation.html#common) page.

* Reason: The application is running at the root context and has no `<display-name>` in *web.xml*.

Contrast needs a name to uniquely identify an application; if an application runs at the root, it requires a `<display-name>` to provide this unique name. You can use the *contrast.rootapp* system property to specify the name of an application running at the root if you can't add a `<display-name>`.

* Reason: The application, or an application with the same name and context path, was archived.

## The server appears in the Contrast interface, but the application doesn't

* Reason: The application hasn't been used yet.

Contrast won't recognize your application until you use it. Visit the application after you successfully start up your server with Contrast. Once it's accessed, Contrast spends a few seconds analyzing it - even big applications should take less than a minute. You may notice a pause when you first access your application as this analysis is taking place.  

* Reason: The application is running on an unsupported container.

Contrast is officially supported on the following containers:
* Tomcat 5, 6, 7, 8
* Jetty 6, 7, 8, 9
* JBoss 5.1, 6.1, 7, 7.1
* GlassFish 3
* WebSphere 6.0, 7.0, 8.5
* WebLogic 9, 10g, 11c, 12c
* IIS 6+ 



