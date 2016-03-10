<!--
title: "Installing on Play"
description: "Agent installation using the Play framework"
-->


## Running Contrast From The Command Line With Activator
Play makes adding JVM options to the application's JVM a little different than standard Java options syntax.
In order for Play to pass the option properly, they must be prepended with ***-J***. As such, you'll need to add the following line to your Play startup command:

``` 
-J-javaagent:${DOWNLOADS}/contrast.jar
```

Of course, you'll have to substitute the path to *contrast.jar* and the server for your environment.

## Running Contrast From A Script With Activator
If you run Play from a script calling the Play activator, simply amend the command as follows:

```
activator -J-javaagent:${DOWNLOADS}/contrast.jar ${YOUR_JVM_OPTIONS} ${YOUR_PLAY_OPTIONS} run
```

## Running Contrast With JAVA_OPTS
Older versions of Play have a known defect where they do not properly pass through the ***-J*** options. 
In order to work around this, it is recommended that you set ***JAVA_OPTS*** in the command line before calling activator: 

```
JAVA_OPTS="-javaagent:${DOWNLOADS}/contrast.jar $JAVA_OPTS" ./activator run
```