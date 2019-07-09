<!--
title: "GlassFish"
description: "Agent installation using the GlassFish container"
tags: "java agent installation glassfish intellij netbeans"
-->

## Before You Start

[Download and install the Java agent](installation-javastandard.html) from Contrast.

## Configure GlassFish

If you launch GlassFish yourself, you must add Contrast's JVM parameter to the *domain.xml* file in your domain directory, *${GLASSFISH_DIR}\domains\domain1*.

``` 
<!-- Within the your profile's "java-config" element, add the following lines: -->
<jvm-options>-javaagent:${DOWNLOADS}\contrast.jar</jvm-options>
```

Of course, you need to substitute the path to *contrast.jar* and the GlassFish server for your environment.

## Run Contrast on GlassFish with IntelliJ

The following instructions walk you through the process to add the Contrast Java agent to an application using the IntelliJ IDE running GlassFish. 

### Instructions

* In the menu bar, click the **Start/Run** icon next to the GlassFish service.
* Wait for the server to finish launching. 

<a href="assets/images/KB2-c03_1.png" rel="lightbox" title="Launch Server"><img class="thumbnail" src="assets/images/KB2-c03_1.png"/></a>

* Navigate to the GlassFish Server Administration Console (usually *http://localhost:4848/*).
* After the console has finished loading, select **Configurations > server-config**.
* Select **JVM Settings**.

<a href="assets/images/KB2-c03_2.png" rel="lightbox" title="Server Administration Console: Configurations"><img class="thumbnail" src="assets/images/KB2-c03_2.png"/></a>

<a href="assets/images/KB2-c03_3.png" rel="lightbox" title="JVM Settings"><img class="thumbnail" src="assets/images/KB2-c03_3.png"/></a>

* Select the tab for **Profiler**. 
* Add the name "Contrast".
* Add the following JVM options:

````
-javaagent:${DOWNLOADS}/contrast.jar
````

* Select **Save**.

<a href="assets/images/KB2-c03_4.png" rel="lightbox" title="Profiler Tab"><img class="thumbnail" src="assets/images/KB2-c03_4.png"/></a>

<a href="assets/images/KB2-c03_5.png" rel="lightbox" title="Profiler Name"><img class="thumbnail" src="assets/images/KB2-c03_5.png"/></a>

<a href="assets/images/KB2-c03_6.png" rel="lightbox" title="Save JVM Options"><img class="thumbnail" src="assets/images/KB2-c03_6.png"/></a>

* Click on the **Start/Run** icon next to the GlassFish service from the top menu bar and select **Restart Server**.

A Contrast startup message should appear in the GlassFish server log console. (Allow one to two extra minutes for server startup.)

<a href="assets/images/KB2-c03_7.png" rel="lightbox" title="Restart Server"><img class="thumbnail" src="assets/images/KB2-c03_7.png"/></a>

<a href="assets/images/KB2-c03_8.png" rel="lightbox" title="Startup Message"><img class="thumbnail" src="assets/images/KB2-c03_8.png"/></a>

After GlassFish has finished the startup process, IntelliJ will open a new web browser.

* Navigate to your application, and allow an extra minute for it to start up. 

## Run Contrast on GlassFish with NetBeans

The following instructions walk you through the process to add the Contrast Java agent to an application using the NetBeans IDE running GlassFish. 

### Instructions

* Select the **Services** tab.
* Under **Servers**, right click on the GlassFish Server and select **Start**.
* Wait for the server to finish launching.

<a href="assets/images/KB2-c02_1.png" rel="lightbox" title="Services Tab"><img class="thumbnail" src="assets/images/KB2-c02_1.png"/></a>

<a href="assets/images/KB2-c02_2.png" rel="lightbox" title="Start GlassFish Server"><img class="thumbnail" src="assets/images/KB2-c02_2.png"/></a>

<a href="assets/images/KB2-c02_3.png" rel="lightbox" title="Server Launched"><img class="thumbnail" src="assets/images/KB2-c02_3.png"/></a>

* Navigate to the GlassFish Server Administration Console (usually *http://localhost:4848/*).
* After the console has finished loading, select **Configurations > server-config**.
* Select **JVM Settings**.

<a href="assets/images/KB2-c02_4.png" rel="lightbox" title="GlassFish Server Admin Console"><img class="thumbnail" src="assets/images/KB2-c02_4.png"/></a>

<a href="assets/images/KB2-c02_5.png" rel="lightbox" title="Configurations"><img class="thumbnail" src="assets/images/KB2-c02_5.png"/></a>

<a href="assets/images/KB2-c02_6.png" rel="lightbox" title="JVM Settings"><img class="thumbnail" src="assets/images/KB2-c02_6.png"/></a>

* Select the tab for **JVM Options**.
* Add the following JVM options:

````
-javaagent:${DOWNLOADS}/contrast.jar
````

* Select **Save**.

<a href="assets/images/KB2-c02_7.png" rel="lightbox" title="JVM Options Tab"><img class="thumbnail" src="assets/images/KB2-c02_7.png"/></a>

<a href="assets/images/KB2-c02_8.png" rel="lightbox" title="Add JM Options"><img class="thumbnail" src="assets/images/KB2-c02_8.png"/></a>

* In NetBeans, right click on the GlassFish Server and select **Stop**.
* After the server has finished shutting down, right click on the project and select **Run**.

A Contrast startup message should appear in the GlassFish server log Console. (Allow one to two extra minutes for server startup.)

<a href="assets/images/KB2-c02_9.png" rel="lightbox" title="Stop GlassFish Server"><img class="thumbnail" src="assets/images/KB2-c02_9.png"/></a>

<a href="assets/images/KB2-c02_10.png" rel="lightbox" title="Run Project"><img class="thumbnail" src="assets/images/KB2-c02_10.png"/></a>

<a href="assets/images/KB2-c02_11.png" rel="lightbox" title="Startup Message"><img class="thumbnail" src="assets/images/KB2-c02_11.png"/></a>

After GlassFish has finished the startup process, NetBeans will switch to the HTTP Server Monitor mode and open a new web browser. 

* Navigate to your application, and allow an extra minute for it to start up.


