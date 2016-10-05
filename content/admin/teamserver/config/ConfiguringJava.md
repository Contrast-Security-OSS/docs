<!--
title: "Configuring Java Runtime Environment"
description: "Guidelines for configuring the JRE of Contrast TeamServer"
tags: "Java JRE EOP"
-->

## Changing The JRE
During the installation process, Contrast provides the option to use either an embedded JRE or a pre-installed JRE. As with all software, there are new releases of Java and these may be preferred. 

Within the *$CONTRAST_HOME* directory there is an *.install4j* directory. Open `pref_jre.cfg` with a text editor and add the complete path to the Java version you would like to use. Example: 

```
C:\Program Files\Java\jre7
```
