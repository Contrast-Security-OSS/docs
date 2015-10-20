<!--
title: "Running Contrast on GlassFish with IntelliJ"
description: "Agent configuration using the GlassFish IntelliJ IDE"
-->

## Prerequisites
This document will outline the process for installing Contrast on an application using the IntelliJ IDE, running GlassFish. Prerequisites
Download the Contrast plugin (***contrast.jar***) from the Contrast site.

### Instructions
* On the menu bar, click the **Start/Run** icon next to the GlassFish service
* Wait for the server to finish launching

<a href="assets/images/KB2-c03_1.png" rel="lightbox" title="Launch Server"><img class="thumbnail" src="assets/images/KB2-c03_1.png"/></a>

* Navigate to the GlassFish Server Administration Console (usually http://localhost:4848/)
* After the console has finished loading, Select ***Configurations > server-config***
* Select **JVM Settings**

<a href="assets/images/KB2-c03_2.png" rel="lightbox" title="Server Administration Console: Configurations"><img class="thumbnail" src="assets/images/KB2-c03_2.png"/></a>

<a href="assets/images/KB2-c03_3.png" rel="lightbox" title="JVM Settings"><img class="thumbnail" src="assets/images/KB2-c03_3.png"/></a>

* Select the tab for **Profiler**
* Add the Name **Contrast**
* Add the following JVM Options:

````

-javaagent:${DOWNLOADS}/contrast.jar
````
* Select **Save**

<a href="assets/images/KB2-c03_4.png" rel="lightbox" title="Profiler Tab"><img class="thumbnail" src="assets/images/KB2-c03_4.png"/></a>

<a href="assets/images/KB2-c03_5.png" rel="lightbox" title="Profiler Name"><img class="thumbnail" src="assets/images/KB2-c03_5.png"/></a>

<a href="assets/images/KB2-c03_6.png" rel="lightbox" title="Save JVM Options"><img class="thumbnail" src="assets/images/KB2-c03_6.png"/></a>

* Click on the **Start/Run** icon next to the GlassFish service trom the top menu bar and select **Restart Server**
* A Contrast startup message should appear in the GlassFish server log Console (allow 1-2 minutes extra time for server startup).

<a href="assets/images/KB2-c03_7.png" rel="lightbox" title="Restart Server"><img class="thumbnail" src="assets/images/KB2-c03_7.png"/></a>

<a href="assets/images/KB2-c03_8.png" rel="lightbox" title="Startup Message"><img class="thumbnail" src="assets/images/KB2-c03_8.png"/></a>

* After GlassFish has finished the startup process, IntelliJ will open a new web browser.
* Navigate to your application, and allow an extra minute for it to start up.
