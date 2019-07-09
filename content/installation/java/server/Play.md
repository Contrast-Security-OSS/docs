<!--
title: "Installing on Play"
description: "Agent installation using the Play framework"
tags: "java agent installation Play"
-->

## Before You Start 

[Download and install the Java agent](installation-javastandard.html) from Contrast.

## Run Contrast from the Command Line 

Play makes the process to add JVM options to the application's JVM a little different than standard Java options syntax. For Play to pass the options properly, they must be prepended with *-J*. As a result, you must add the following line to your Play startup command. Of course, you'll have to substitute the path to *contrast.jar* and the server for your environment.

``` 
-J-javaagent:${DOWNLOADS}/contrast.jar
```

## Run Contrast from a Script 

If you run Play from a script calling the Play activator, amend the command as shown:

```
activator -J-javaagent:${DOWNLOADS}/contrast.jar ${YOUR_JVM_OPTIONS} ${YOUR_PLAY_OPTIONS} run
```

## Run Contrast with JAVA_OPTS

Older versions of Play have a known defect where they don't properly pass through the *-J* options. 
To work around this, Contrast recommends that you set `JAVA_OPTS` in the command line before calling activator: 

```
JAVA_OPTS="-javaagent:${DOWNLOADS}/contrast.jar $JAVA_OPTS" ./activator run
```
