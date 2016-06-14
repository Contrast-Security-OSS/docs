<!--
title: "Installing The Contrast Maven Plugin"
description: "Instructions on installing the Contrast Maven Plugin"
tags: "jenkins agent maven teamserver"
-->

This section will go over the install of the Contrast Maven plugin with your Java application.

Include the below plugin in your pom.xml under build -> plugins. 

```xml
<plugin>
     <groupId>com.aspectsecurity.contrast</groupId>
     <artifactId>contrast-maven-plugin</artifactId>

      ...
      
</plugin>
```

Now you have successfully installed the Contrast Maven plugin! Time to start verifying your build with our plugin!
