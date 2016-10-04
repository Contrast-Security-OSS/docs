<!--
title: "Configuring Java Runtime Environment"
description: "Guidelines for configuring the JRE of Contrast TeamServer"
tags: "Java JRE EOP"
-->

## Change JRE 
During the installation process, allow the user to select an embedded JRE or use a pre-installed JRE. As with all software there are new releases of java and you may want to use these versions. 

In the *$CONTRAST_HOME* directory there is an .install4j directory. Open `pref_jre.cfg` with a text editor and ddd the complete path to the new Java home you would like to use. Example: 

```
C:\Program Files\Java\jre7
```
