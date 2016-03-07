<!--
title: "Installing Contrast on WebSphere"
description: "JBoss5 and higher agent installation process using Windows or startup script"
tags: "java agent installation websphere IBM"
-->

## Getting Started
If you launch WebSphere yourself, you'll have to add Contrast's JVM parameter to the ***server.xml*** file in your cell directory, i.e. 

```
${WEBSPHERE_DIR}\AppServer\profiles\AppSrv01\config\cells\<CellName>\nodes\<NodeName>\servers\server1\server.xml

<jvmEntries genericJvmArguments="-javaagent:${DOWNLOADS}/contrast.jar -Xshareclasses:none -Xmx512m">
   ...
</jvmEntries>
```

Of course, you'll have to substitute the path to ***contrast.jar*** and your WebSphere server for your environment.

## Installing Contrast through the WebSphere Administration Console
You can also install Contrast through the WebSphere administration console. These instructions are for WebSphere 8.0/8.5 - instructions for other versions are included in the link below.

The following steps are from the [Websphere support site](http://www-01.ibm.com/support/docview.wss?uid=swg21417365) (includes documentation for other versions):

### Application Server
* In the Administration Console select **Servers**
* Expand **Server Type** and select **WebSphere application servers**
* Click on the name of your server
* Expand **Java and Process Management** and select **Process Definition**.
* Under the **Additional Properties** section, click **Java Virtual Machine**.
* Scroll down and locate the textbox for Generic JVM arguments.

### Node Agent
* In the **Administration Console**, select **System Administration**
* Select **Node agents**
* Choose which *nodeagent* to edit
* In the **Server Infrastructure** section, expand **Java and Process Management** and select **Process Definition**.
* Under the **Additional Properties** section, click **Java Virtual Machine**.
* Scroll down and locate the textbox for Generic JVM arguments.

### Deployment Manager
* In the **Administration Console**, select **System Administration**
* Select **Deployment manager**
* In the **Server Infrastructure** section, expand **Java and Process Management** and select **Process Definition**.
* Under the **Additional Properties** section, click **Java Virtual Machine**.
* Scroll down and locate the textbox for Generic JVM arguments.
* Add this text to the Generic JVM arguments, as noted in the screenshot below: 

````
-javaagent:${DOWNLOADS}/contrast.jar -Xshareclasses:none
````

<a href="assets/images/KB2-e01.png" rel="lightbox" title="Generic JVM Arguments"><img class="thumbnail" src="assets/images/KB2-e01.png"/></a>

Note that IBM J9 does not allow the Java Instrumentation API to alter core Java classes when using the [Shared Classes](http://www.ibm.com/developerworks/library/j-ibmjava4/index.html) feature, so this must be disabled by specifying ```-Xshareclasses:none``` in your JVM parameters, as shown above.

