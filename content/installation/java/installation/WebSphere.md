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

<ul>
<li> In the Administration Console select **Servers** </li>
<li> Expand **Server Type** and select **WebSphere application servers** </li>
<li> Click on the name of your server </li>
<li> Expand **Java and Process Management** and select **Process Definition**. </li>
<li> Under the **Additional Properties** section, click **Java Virtual Machine**. </li>
<li> Scroll down and locate the textbox for Generic JVM arguments. </li>
</ul>

### Node Agent

<ul>
<li> In the **Administration Console**, select **System Administration** </li>
<li> Select **Node agents** </li>
<li> Choose which *nodeagent* to edit </li>
<li> In the **Server Infrastructure** section, expand **Java and Process Management** and select **Process Definition**. </li>
<li> Under the **Additional Properties** section, click **Java Virtual Machine**. </li>
<li> Scroll down and locate the textbox for Generic JVM arguments. </li>
</ul>

### Deployment Manager

<ul>
<li> In the **Administration Console**, select **System Administration** </li>
<li> Select **Deployment manager** </li>
<li> In the **Server Infrastructure** section, expand **Java and Process Management** and select **Process Definition**. </li>
<li> Under the **Additional Properties** section, click **Java Virtual Machine**. </li>
<li> Scroll down and locate the textbox for Generic JVM arguments. </li>
<li> Add this text to the Generic JVM arguments, as noted in the screenshot below: </li>
</ul>

````
-javaagent:${DOWNLOADS}/contrast.jar -Xshareclasses:none
````

<a href="assets/images/KB2-e01.png" rel="lightbox" title="Generic JVM Arguments"><img class="thumbnail" src="assets/images/KB2-e01.png"/></a>

> **Note:** IBM J9 does not allow the Java Instrumentation API to alter core Java classes when using the [Shared Classes](http://www.ibm.com/developerworks/library/j-ibmjava4/index.html) feature, so this must be disabled by specifying ```-Xshareclasses:none``` in your JVM parameters, as shown above.

