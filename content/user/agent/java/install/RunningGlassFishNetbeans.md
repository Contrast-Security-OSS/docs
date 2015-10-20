<!--
title: "Running Contrast on GlassFish with NetBeans"
description: "Agent configuration using the GlassFish NetBeans IDE"
-->

## Prerequisites
Download the Contrast plugin (***contrast.jar***) from the Contrast site.

### Instructions
* Select the **Services** Tab
* Under **Servers** right click on the GlassFish Server and select **Start**
* Wait for the server to finish launching

<a href="assets/images/KB2-c02_1.png" rel="lightbox" title="Services Tab"><img class="thumbnail" src="assets/images/KB2-c02_1.png"/></a>

<a href="assets/images/KB2-c02_2.png" rel="lightbox" title="Start GlassFish Server"><img class="thumbnail" src="assets/images/KB2-c02_2.png"/></a>

<a href="assets/images/KB2-c02_3.png" rel="lightbox" title="Server Launched"><img class="thumbnail" src="assets/images/KB2-c02_3.png"/></a>

* Navigate to the GlassFish Server Administration Console (usually http://localhost:4848/)
* After the console has finished loading, Select ***Configurations > server-config***
* Select **JVM Settings**

<a href="assets/images/KB2-c02_4.png" rel="lightbox" title="GlassFish Server Admin Console"><img class="thumbnail" src="assets/images/KB2-c02_4.png"/></a>

<a href="assets/images/KB2-c02_5.png" rel="lightbox" title="Configurations"><img class="thumbnail" src="assets/images/KB2-c02_5.png"/></a>

<a href="assets/images/KB2-c02_6.png" rel="lightbox" title="JVM Settings"><img class="thumbnail" src="assets/images/KB2-c02_6.png"/></a>

* Select the tab for **JVM Options**
* Add the following JVM options:

````

-javaagent:${DOWNLOADS}/contrast.jar
````
* Select **Save**

<a href="assets/images/KB2-c02_7.png" rel="lightbox" title="JVM Options Tab"><img class="thumbnail" src="assets/images/KB2-c02_7.png"/></a>

<a href="assets/images/KB2-c02_8.png" rel="lightbox" title="Add JM Options"><img class="thumbnail" src="assets/images/KB2-c02_8.png"/></a>

* In NetBeans, right click on the GlassFish Server and select **Stop**
* After the server has finished shutting down, right click on the project and select **Run**
* A Contrast startup message should appear in the GlassFish server log Console (allow 1-2 minutes extra time for server startup).

<a href="assets/images/KB2-c02_9.png" rel="lightbox" title="Stop GlassFish Server"><img class="thumbnail" src="assets/images/KB2-c02_9.png"/></a>

<a href="assets/images/KB2-c02_10.png" rel="lightbox" title="Run Project"><img class="thumbnail" src="assets/images/KB2-c02_10.png"/></a>

<a href="assets/images/KB2-c02_11.png" rel="lightbox" title="Startup Message"><img class="thumbnail" src="assets/images/KB2-c02_11.png"/></a>


* After GlassFish has finished the startup process, NetBeans will switch to the HTTP Server Monitor mode and open a new web browser.
* Navigate to your application, and allow an extra minute for it to start up.
