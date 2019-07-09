<!--
title: "Running Contrast on a NetBeans Application"
description: "Overview of the process to configure Contrast on an application using the NetBeans IDE with JBoss"
tags: "java agent configuration NetBeans IDE JBose"
-->


Use the following instructions to add Contrast to an application using the NetBeans IDE with JBoss.

## Before You Start 

[Download and install the Java agent](installation-javastandard.html) from Contrast.

## Configuration

<ol> 
<li> Open the NetBeans project. </li>
<li> Select **Tools > Servers**. </li>
<li> Select the server to which you want to add Contrast (e.g., JBoss), and click on the **Platform** tab. </li>
<br>
<a href="assets/images/KB2-f03_1.png" rel="lightbox" title="Platform Tab"><img class="thumbnail" src="assets/images/KB2-f03_1.png"/></a>

<li> Add Contrast's JVM options to the **VM Options** field: `-javaagent:${DOWNLOADS}/contrast.jar` </li>
<br>
<a href="assets/images/KB2-f03_2.png" rel="lightbox" title="VM Options"><img class="thumbnail" src="assets/images/KB2-f03_2.png"/></a>

<li> Select **Run > Run Main Project**, or right-click on the project and select **Run**. </li>
<br>
<a href="assets/images/KB2-f03_3.png" rel="lightbox" title="Run Project"><img class="thumbnail" src="assets/images/KB2-f03_3.png"/></a>

<li> A Contrast startup message should appear in the **Server** console. (Allow one to two extra minutes for server startup.) </li>
<br>
<a href="assets/images/KB2-f03_4.png" rel="lightbox" title="Startup Message"><img class="thumbnail" src="assets/images/KB2-f03_4.png"/></a>

<li> Navigate to your application, and allow an extra minute for it to start up. </li>
</ol>

## More Information

[Run Contrast on GlassFish with NetBeans](installation-javaserver.html#glass)
