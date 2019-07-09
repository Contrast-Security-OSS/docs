<!--
title: "GlassFish"
description: "Agent configuration using the GlassFish container"
tags: "java agent configuration glassfish intellij netbeans"
-->

## Before You Start 

[Download and install the Java agent](installation-javastandard.html) from Contrast.

## Configure GlassFish

If you launch GlassFish yourself, you'll have to add Contrast's JVM parameter to the *domain.xml* file in your domain directory, i.e. ***${GLASSFISH_DIR}\domains\domain1***.

``` 
<!-- Within the your profile's "java-config" element, add the following lines: -->
<jvm-options>-javaagent:${DOWNLOADS}\contrast.jar</jvm-options>
```

Of course, you will need to substitute the path to *contrast.jar* and the GlassFish server for your environment.

## Run Contrast on GlassFish with IntelliJ

This document will outline the process for installing Contrast on an application using the IntelliJ IDE, running GlassFish. 

### Instructions

<ol>
<li> On the menu bar, click the **Start/Run** icon next to the GlassFish service </li>
<li> Wait for the server to finish launching </li>
<br>
<a href="assets/images/KB2-c03_1.png" rel="lightbox" title="Launch Server"><img class="thumbnail" src="assets/images/KB2-c03_1.png"/></a>

<li> Navigate to the GlassFish Server Administration Console (usually http://localhost:4848/) </li>
<li> After the console has finished loading, Select ***Configurations > server-config*** </li>
<li> Select **JVM Settings** </li>
<br>
<a href="assets/images/KB2-c03_2.png" rel="lightbox" title="Server Administration Console: Configurations"><img class="thumbnail" src="assets/images/KB2-c03_2.png"/></a>

<a href="assets/images/KB2-c03_3.png" rel="lightbox" title="JVM Settings"><img class="thumbnail" src="assets/images/KB2-c03_3.png"/></a>

<li> Select the tab for **Profiler** </li>
<li> Add the Name **Contrast** </li>
<li> Add the following JVM Options: ```-javaagent:${DOWNLOADS}/contrast.jar``` </li>

<li> Select **Save** </li>
<br>
<a href="assets/images/KB2-c03_4.png" rel="lightbox" title="Profiler Tab"><img class="thumbnail" src="assets/images/KB2-c03_4.png"/></a>

<a href="assets/images/KB2-c03_5.png" rel="lightbox" title="Profiler Name"><img class="thumbnail" src="assets/images/KB2-c03_5.png"/></a>

<a href="assets/images/KB2-c03_6.png" rel="lightbox" title="Save JVM Options"><img class="thumbnail" src="assets/images/KB2-c03_6.png"/></a>

<li> Click on the **Start/Run** icon next to the GlassFish service trom the top menu bar and select **Restart Server** </li>
<li> A Contrast startup message should appear in the GlassFish server log Console (allow 1-2 minutes extra time for server startup). </li>
<br>
<a href="assets/images/KB2-c03_7.png" rel="lightbox" title="Restart Server"><img class="thumbnail" src="assets/images/KB2-c03_7.png"/></a>

<a href="assets/images/KB2-c03_8.png" rel="lightbox" title="Startup Message"><img class="thumbnail" src="assets/images/KB2-c03_8.png"/></a>

<li> After GlassFish has finished the startup process, IntelliJ will open a new web browser. </li>
<li> Navigate to your application, and allow an extra minute for it to start up. </li>

</ol>


## Run Contrast on GlassFish with NetBeans

### Instructions

<ol>
<li> Select the **Services** Tab </li>
<li> Under **Servers** right click on the GlassFish Server and select **Start** </li>
<li> Wait for the server to finish launching </li>
<br>
<a href="assets/images/KB2-c02_1.png" rel="lightbox" title="Services Tab"><img class="thumbnail" src="assets/images/KB2-c02_1.png"/></a>

<a href="assets/images/KB2-c02_2.png" rel="lightbox" title="Start GlassFish Server"><img class="thumbnail" src="assets/images/KB2-c02_2.png"/></a>

<a href="assets/images/KB2-c02_3.png" rel="lightbox" title="Server Launched"><img class="thumbnail" src="assets/images/KB2-c02_3.png"/></a>

<li> Navigate to the GlassFish Server Administration Console (usually http://localhost:4848/) </li>
<li> After the console has finished loading, Select ***Configurations > server-config*** </li>
<li> Select **JVM Settings** </li>
<br>
<a href="assets/images/KB2-c02_4.png" rel="lightbox" title="GlassFish Server Admin Console"><img class="thumbnail" src="assets/images/KB2-c02_4.png"/></a>
<br>
<a href="assets/images/KB2-c02_5.png" rel="lightbox" title="Configurations"><img class="thumbnail" src="assets/images/KB2-c02_5.png"/></a>

<a href="assets/images/KB2-c02_6.png" rel="lightbox" title="JVM Settings"><img class="thumbnail" src="assets/images/KB2-c02_6.png"/></a>

<li> Select the tab for **JVM Options** </li>
<li> Add the following JVM options: ```-javaagent:${DOWNLOADS}/contrast.jar``` </li>

<li> Select **Save** </li>
<br>
<a href="assets/images/KB2-c02_7.png" rel="lightbox" title="JVM Options Tab"><img class="thumbnail" src="assets/images/KB2-c02_7.png"/></a>

<a href="assets/images/KB2-c02_8.png" rel="lightbox" title="Add JM Options"><img class="thumbnail" src="assets/images/KB2-c02_8.png"/></a>

<li> In NetBeans, right click on the GlassFish Server and select **Stop** </li>
<li> After the server has finished shutting down, right click on the project and select **Run** </li>
<li> A Contrast startup message should appear in the GlassFish server log Console. (Allow 1-2 extra minutes for server startup.) </li>
<br>
<a href="assets/images/KB2-c02_9.png" rel="lightbox" title="Stop GlassFish Server"><img class="thumbnail" src="assets/images/KB2-c02_9.png"/></a>

<a href="assets/images/KB2-c02_10.png" rel="lightbox" title="Run Project"><img class="thumbnail" src="assets/images/KB2-c02_10.png"/></a>

<a href="assets/images/KB2-c02_11.png" rel="lightbox" title="Startup Message"><img class="thumbnail" src="assets/images/KB2-c02_11.png"/></a>


<li> After GlassFish has finished the startup process, NetBeans will switch to the HTTP Server Monitor mode and open a new web browser. </li>
<li> Navigate to your application, and allow an extra minute for it to start up. </li>

</ol>


