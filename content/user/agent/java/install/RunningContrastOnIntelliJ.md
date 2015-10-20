<!--
title: "Running Contrast on an IntelliJ Application"
description: "Overview of the process for installation of Contrast on an application using IntelliJ"
-->

This document will outline the process for installing Contrast on an application using IntelliJ IDE's supported application servers.

##Prerequisites

Download the Contrast plugin (***contrast.jar***) from the Contrast site.

##Instructions

1. Click on **Run** in the application toolbar then click on the **Edit Configuration** menu item from the dropdown
2. Select the IntelliJ Server configuration instance
3. Select the **Server** tab and enter the Contrast launcher string in **VM Options**
```sh
-javaagent:${DOWNLOADS}/contrast.jar -noverify
```

<a href="assets/images/KB2-f04_1.png" rel="lightbox" title="Edit Configuration"><img class="thumbnail" src="assets/images/KB2-f04_1.png"/></a>

<a href="assets/images/KB2-f04_2.png" rel="lightbox" title="VM Options"><img class="thumbnail" src="assets/images/KB2-f04_2.png"/></a>

4. Hit **Apply** and then **Ok**
5. Start the **Server**
6. A Contrast startup message should appear in the **Server** console (allow 1-2 minutes extra time for server startup)

<a href="assets/images/KB2-f04_3.png" rel="lightbox" title="Startup Message"><img class="thumbnail" src="assets/images/KB2-f04_3.png"/></a>

7. Navigate to your application, and allow an extra minute for it to start up

## See Also

[Running Contrast on GlassFish with IntelliJ](user_javainstall.html#glassintellij)
