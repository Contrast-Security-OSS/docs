<!--
title: "GlassFish"
description: "Agent configuration using the GlassFish container"
tags: "java agent configuration glassfish intellij netbeans"
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

<a href="assets/images/KB2-c03_1.png" rel="lightbox" title="Launch server"><img class="thumbnail" src="assets/images/KB2-c03_1.png"/></a>

* Navigate to the GlassFish Server Administration Console (usually *http://localhost:4848/*).
* After the console has finished loading, select **Configurations > server-config**.
* Select **JVM Settings**.

<a href="assets/images/KB2-c03_4.png" rel="lightbox" title="Profiler tab"><img class="thumbnail" src="assets/images/KB2-c03_4.png"/></a>

* Select the tab for **Profiler**. 
* Add the name "Contrast".
* Add the following JVM options:

```
-javaagent:${DOWNLOADS}/contrast.jar
```

* Select **Save**.

<a href="assets/images/KB2-c03_6.png" rel="lightbox" title="Save JVM options"><img class="thumbnail" src="assets/images/KB2-c03_6.png"/></a>

* Click on the **Start/Run** icon next to the GlassFish service from the top menu bar and select **Restart Server**.

<a href="assets/images/KB2-c03_7.png" rel="lightbox" title="Restart server"><img class="thumbnail" src="assets/images/KB2-c03_7.png"/></a>

A Contrast startup message should appear in the GlassFish server log console. (Allow one to two extra minutes for server startup.)

<a href="assets/images/KB2-c03_8.png" rel="lightbox" title="Startup message"><img class="thumbnail" src="assets/images/KB2-c03_8.png"/></a>

After GlassFish has finished the startup process, IntelliJ will open a new web browser.

* Navigate to your application, and allow an extra minute for it to start up. 

## Run Contrast on GlassFish with NetBeans

The following instructions walk you through the process to add the Contrast Java agent to an application using NetBeans running GlassFish. 

### Instructions

#### GlassFish

* Select the **Services** tab.
* Under **Servers**, right click on the GlassFish Server and select **Start**.
* Wait for the server to finish launching.

<a href="assets/images/KB2-c02_2.png" rel="lightbox" title="Start GlassFish Server"><img class="thumbnail" src="assets/images/KB2-c02_2.png"/></a>

<a href="assets/images/KB2-c02_3.png" rel="lightbox" title="Server Launched"><img class="thumbnail" src="assets/images/KB2-c02_3.png"/></a>

* Navigate to the GlassFish Server Administration Console (usually *http://localhost:4848/*).
* After the console has finished loading, select **Configurations > server-config**.
* Select **JVM Settings**.

<a href="assets/images/KB2-c02_8.png" rel="lightbox" title="Add JVM options"><img class="thumbnail" src="assets/images/KB2-c02_8.png"/></a>

* Select the tab for **JVM Options**.
* Add the following JVM options:

````
-javaagent:${DOWNLOADS}/contrast.jar
````

* Select **Save**.

### NetBeans

* In NetBeans, right click on the GlassFish Server and select **Stop**.

<a href="assets/images/KB2-c02_9.png" rel="lightbox" title="Stop GlassFish server"><img class="thumbnail" src="assets/images/KB2-c02_9.png"/></a>

* After the server has finished shutting down, right click on the project and select **Run**.

<a href="assets/images/KB2-c02_10.png" rel="lightbox" title="Run project"><img class="thumbnail" src="assets/images/KB2-c02_10.png"/></a>

A Contrast startup message should appear in the GlassFish server log console. (Allow one to two extra minutes for server startup.)

<a href="assets/images/KB2-c02_11.png" rel="lightbox" title="Startup M=message"><img class="thumbnail" src="assets/images/KB2-c02_11.png"/></a>

After GlassFish has finished the startup process, NetBeans will switch to the HTTP Server Monitor mode and open a new web browser. 

* Navigate to your application, and allow an extra minute for it to start up.

