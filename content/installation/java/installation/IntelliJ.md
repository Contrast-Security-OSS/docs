<!--
title: "Running Contrast on an IntelliJ Application"
description: "Overview of the process for installation of Contrast on an application using IntelliJ"
tags: "java agent installation IntelliJ IDE"
-->


This document will outline the process for installing Contrast on an application using IntelliJ IDE's supported application servers.

##Prerequisites

Download the Contrast plugin (***contrast.jar***) from the Contrast site.

##Instructions
<ol>
<li> Click on **Run** in the application toolbar then click on the **Edit Configuration** menu item from the dropdown</li>
<li> Select the IntelliJ Server configuration instance</li>
<li> Select the **Server** tab and enter the Contrast launcher string in **VM Options**: ```-javaagent:${DOWNLOADS}/contrast.jar -noverify``` 
</li>

<br>
<a href="assets/images/KB2-f04_1.png" rel="lightbox" title="Edit Configuration"><img class="thumbnail" src="assets/images/KB2-f04_1.png"/></a>

<a href="assets/images/KB2-f04_2.png" rel="lightbox" title="VM Options"><img class="thumbnail" src="assets/images/KB2-f04_2.png"/></a>

<li> Hit **Apply** and then **Ok** </li>
<li> Start the **Server** </li>
<li> A Contrast startup message should appear in the **Server** console. (Allow 1-2 extra minutes for server startup.) </li>

<br>
<a href="assets/images/KB2-f04_3.png" rel="lightbox" title="Startup Message"><img class="thumbnail" src="assets/images/KB2-f04_3.png"/></a>

<li> Navigate to your application and allow an extra minute for it to start up. </li>
</ol>

## More Information

[Running Contrast on GlassFish with IntelliJ](installation_javainstall.html#glass)
