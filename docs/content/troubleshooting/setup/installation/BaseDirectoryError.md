<!--
title: "I receive an error that BASE_DIRECTORY must be set"
description: "Explanation of BASE_DIRECTORY error"
tags: "troubleshoot setup FAQ BaseDirectory"
-->

If you receive an error that BASE_DIRECTORY must be set when you try to start Contrast, it's an indication that you have a *CATALINA_HOME* directory already set in your system environment. Some products that use Tomcat require you to set this directory in the environment; but, unfortunately, it steps on our startup scripts.

The simplest way to resolve this error is to edit the *CONTRAST_HOME/server/bin/start-teamserver.sh* file, and set the *CATALINA_HOME* to Contrast's Tomcat directory by adding:

```sh
# Address hard-coded environment variable for CATALINA_HOME - Set this directory to your 
# $CONTRAST_HOME/server directory
set CATALINA_HOME=/opt/contrast/server
```
