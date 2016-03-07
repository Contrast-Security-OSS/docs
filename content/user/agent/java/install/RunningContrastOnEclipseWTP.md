<!--
title: "Running Contrast on an Eclipse WTP Application"
description: "Overview of the process for installation of Contrast on an application using Eclipse WTP"
tags: "java agent installation Eclipse"
-->

This document will outline the process for installing Contrast on an application using the Eclipse IDE, running any application server from the Web Tools Platform (WTP) plugin.

## Prerequisites

Download the Contrast plugin (***contrast.jar***) from the Contrast site.

## Instructions

1. Double click on the server the application runs on in the **Servers** tab
2. Hit the **Open launch configuration** link

<a href="assets/images/KB2-f02_1.gif" rel="lightbox" title="Servers Tab"><img class="thumbnail" src="assets/images/KB2-f02_1.gif"/></a>

<a href="assets/images/KB2-f02_2.gif" rel="lightbox" title="Open Launch Configuration"><img class="thumbnail" src="assets/images/KB2-f02_2.gif"/></a>

3. Select the **Arguments** tab
4. Enter the ```-javaagent:/your/path/to/contrast.jar``` in **VM Options**

<a href="assets/images/KB2-f02_3.png" rel="lightbox" title="VM Options"><img class="thumbnail" src="assets/images/KB2-f02_3.png"/></a>

5. Hit **Apply** and then **Ok**
6. Start the **Server**

<a href="assets/images/KB2-f02_4.gif" rel="lightbox" title="Start The Server"><img class="thumbnail" src="assets/images/KB2-f02_4.gif"/></a>

7. A Contrast startup message should appear in the **Server** console (allow 1-2 minutes extra time for server startup)

<a href="assets/images/KB2-f02_5.gif" rel="lightbox" title="Startup Message"><img class="thumbnail" src="assets/images/KB2-f02_5.gif"/></a>

8. Navigate to your application, and allow an extra minute for it to start up

As an alternative to modifying your existing Run Configuration, you could create a new server, i.e. **Apache Tomcat 6.x with Contrast**, and add the Contrast JVM parameters to it as shown above.
