<!--
title: "When I Try To Start TeamServer I Receive An Error That BASE_DIRECTORY Must Be Set"
description: "Explanation of BASE_DIRECTORY error"
tags: "TeamServer BaseDirectory troubleshooting"
-->

## Issue

This is an indication that you have a ***CATALINA_HOME*** directory set already in your system environment. Some products that use Tomcat require this to be set in the environment and unfortunately it steps on our startup scripts.


## Solution

The simplest way to resolve this error is to edit the ***CONTRAST_HOME/server/bin/start-teamserver.sh*** file and set the ***CATALINA_HOME*** to Contrast's Tomcat directory by adding the following:

```sh
# Address hard-coded environment variable for CATALINA_HOME - Set this directory to your 
# $CONTRAST_HOME/server directory
set CATALINA_HOME=/opt/contrast/server
```
