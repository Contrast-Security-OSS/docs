<!--
title: "Troubleshooting the on-boarding of an application agent."
description: "An Application Is Not Appearing In The List, or My server appears on the Contrast site, but my application does not."
tags: "troubleshoot setup FAQ TeamServer application on-boarding"
-->

After onboarding, you may not see your application appear in the list. There are a few reasons why this could happen:

## The server on which the app is running hasn't had Contrast successfully installed.
Check out **standard** or file a ticket with the [diagnostic log output file](troubleshooting_java.html#logs) attached to see what's happening. If your server isn't appearing in the Contrast site, check out [Installation Issues](troubleshooting_setupinstallation.html#common) page.

## The app is running at the root context and has no ```<display-name>``` in ***web.xml***.
Contrast needs a name to uniquely identify an application, so if an app runs at the root, it requires a ```<display-name>``` to be set to provide this unique name. You can use the *contrast.rootapp* system property to specify the name of an app running at the root if a ```<display-name>``` can't be added.

## The app has been archived, or an app with the same name and context path has been archived in the past.


If your server appears on the Contrast site, but your application does not:

## Your application hasn't been browsed to yet.
Contrast won't "see" your application until it gets used. You must visit the application after you start up your server successfully with Contrast. Once it does get accessed, Contrast will spend a few seconds analyzing it. You may notice a pause when you first access your application as this analysis is taking place. It shouldn't take very long - even big applications should take less than a minute.

## Your application is running on an unsupported container.
Contrast is only officially supported on the following containers:
* Tomcat 5, 6, 7, 8
* Jetty 6, 7, 8, 9
* JBoss 5.1, 6.1, 7, 7.1
* GlassFish 3
* WebSphere 6.0, 7.0, 8.5
* WebLogic 9, 10g, 11c, 12c
* IIS 6+ 



