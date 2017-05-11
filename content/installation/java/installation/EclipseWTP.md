<!--
title: "Running Contrast on an Eclipse WTP Application"
description: "Overview of the process for installation of Contrast on an application using Eclipse WTP"
tags: "java agent installation Eclipse"
-->


This document will outline the process for installing Contrast on an application using the Eclipse IDE, running any application server from the Web Tools Platform (WTP) plugin.

## Prerequisites

Download the Contrast plugin (***contrast.jar***) from the Contrast site.

## Instructions
<ol>
<li> Double click on the server the application runs on in the **Servers** tab </li>
<li> Hit the **Open launch configuration** link </li>

<a href="assets/images/KB2-f02_1.gif" rel="lightbox" title="Servers Tab"><img class="thumbnail" src="assets/images/KB2-f02_1.gif"/></a>

<a href="assets/images/KB2-f02_2.gif" rel="lightbox" title="Open Launch Configuration"><img class="thumbnail" src="assets/images/KB2-f02_2.gif"/></a>

<li> Select the **Arguments** tab </li>
<li> Enter the ```-javaagent:/your/path/to/contrast.jar``` in **VM Options** </li>

<a href="assets/images/KB2-f02_3.png" rel="lightbox" title="VM Options"><img class="thumbnail" src="assets/images/KB2-f02_3.png"/></a>

<li> Hit **Apply** and then **Ok** </li>
<li> Start the **Server** </li>

<a href="assets/images/KB2-f02_4.gif" rel="lightbox" title="Start The Server"><img class="thumbnail" src="assets/images/KB2-f02_4.gif"/></a>

<li> A Contrast startup message should appear in the **Server** console (allow 1-2 minutes extra time for server startup) </li>

<a href="assets/images/KB2-f02_5.gif" rel="lightbox" title="Startup Message"><img class="thumbnail" src="assets/images/KB2-f02_5.gif"/></a>

<li> Navigate to your application, and allow an extra minute for it to start up </li>
</ol>

As an alternative to modifying your existing Run Configuration, you could create a new server - i.e., **Apache Tomcat 6.x with Contrast** - and add the Contrast JVM parameters to it as shown above.
