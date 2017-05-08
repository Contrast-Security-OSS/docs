<!--
title: "Running Contrast on a NetBeans Application"
description: "Overview of the process for installation of Contrast on an application using the NetBeans IDE with JBoss"
tags: "java agent installation NetBeans IDE JBose"
-->


This document outlines the process for installing Contrast on an application using the NetBeans IDE with JBoss.

## Prerequisites

Download the Contrast plugin (***contrast.jar***) from the Contrast site.

## Instructions

1. Open the NetBeans project
2. Select **Tools > Servers**
3. Select the server you wish to add Contrast to (in this example, **JBoss**), and click on the **Platform** tab

<a href="assets/images/KB2-f03_1.png" rel="lightbox" title="Platform Tab"><img class="thumbnail" src="assets/images/KB2-f03_1.png"/></a>

4. Add Contrast's JVM options to the **VM Options** field

```sh
-javaagent:${DOWNLOADS}/contrast.jar
```

<a href="assets/images/KB2-f03_2.png" rel="lightbox" title="VM Options"><img class="thumbnail" src="assets/images/KB2-f03_2.png"/></a>

5. Select **Run > Run Main Project** or right-click on the project and select **Run**

<a href="assets/images/KB2-f03_3.png" rel="lightbox" title="Run Project"><img class="thumbnail" src="assets/images/KB2-f03_3.png"/></a>

6. A Contrast startup message should appear in the **Server** console (allow 1-2 minutes extra time for server startup)

<a href="assets/images/KB2-f03_4.png" rel="lightbox" title="Startup Message"><img class="thumbnail" src="assets/images/KB2-f03_4.png"/></a>

7. Navigate to your application, and allow an extra minute for it to start up

## More Information

[Running Contrast on GlassFish with NetBeans](installation_javainstall.html#glass)
