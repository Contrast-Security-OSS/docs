<!--
title: "Adding Bootstrap Speed Enhancements To The Java Agent"
description: "Instructions on adding Bootstrap speed enhancements to the Java agent"
tags: "installation configuration java agent performance bootstrap"
-->

Many of the vulnerabilities Contrast discovers require analyzing the data flow of an application. This data flow analysis involves adding sensors to core classes in the JVM. Much of the runtime performance penalty introduced by those sensors can be avoided by bootstrapping custom versions of these core classes. The changes to these classes are very minimal - in fact, it's just adding a single field. 

To experiment with this new feature, follow the two steps shown below.

## Step 1: Generate a contrast-bootstrap.jar

We have to generate a custom version of your JVM core classes, because we don't know which version of the JVM you're using. You can do this by performing this command with the regular ***contrast.jar*** agent you monitor your applications with.

```
$ java -jar contrast.jar bootstrap
```

This will create a new **JAR**, called ***contrast-bootstrap.jar***, that contains the modified versions of your core classes.

If the JRE that your application runs with isn't the same one used when you call ```java``` from the command line, you can pass the location of the correct JRE as a parameter:

```
$ java -jar contrast.jar bootstrap /path/to/some/other/jre-or-jdk
```


## Step 2: Add a New JVM Argument

To take advantage of the new bootstrap **JAR** you just created, you must add a new JVM argument to the same place you added the initial ```-javaagent``` flag, like this:

```
-Xbootclasspath/p:/path/to/contrast-bootstrap.jar
```

You should see something like this in the console messages:

```
[ContrastEngine] ... Using bootstrapped enhancement! Speed powerup enabled.
```

>**Note:** It is critical that the ***contrast-bootstrap.jar*** be generated for the correct JRE. If the ***contrast-bootstrap.jar*** is generated with the wrong JRE, incompatible classes will be bootstrapped to the JRE and the process will immediately terminate.
