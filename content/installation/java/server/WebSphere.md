<!--
title: "Configure Contrast on WebSphere"
description: "JBoss5 and higher agent configuration process using Windows or startup script"
tags: "java agent configuration websphere IBM"
-->

## Before You Start 

[Download and install the Java agent](installation-javastandard.html) from Contrast before proceeding with the following instructions.

## Add Contrast with WebSphere

If you launch WebSphere yourself, you must add Contrast's JVM parameter to the *server.xml* file in your cell directory: 

```
${WEBSPHERE_DIR}\AppServer\profiles\AppSrv01\config\cells\<CellName>\nodes\<NodeName>\servers\server1\server.xml

<jvmEntries genericJvmArguments="-javaagent:${DOWNLOADS}/contrast.jar -Xshareclasses:none -Xmx512m">
   ...
</jvmEntries>
```

Of course, you need to substitute the path to *contrast.jar* and your WebSphere server for your environment.

## Add Contrast with the WebSphere Administration Console

You can also add Contrast through the WebSphere administration console. The following instructions from the [Websphere support site](http://www-01.ibm.com/support/docview.wss?uid=swg21417365) are for WebSphere 8.0/8.5. These instructions are also available on the [Websphere support site](http://www-01.ibm.com/support/docview.wss?uid=swg21417365) for other versions. 

### Application Server

<ol>
<li> In the Administration Console, select **Servers** </li>
<li> Expand **Server Type** and select **WebSphere application servers** </li>
<li> Click on the name of your server </li>
<li> Expand **Java and Process Management** and select **Process Definition**. </li>
<li> Under the **Additional Properties** section, click **Java Virtual Machine**. </li>
<li> Scroll down and locate the textbox for Generic JVM arguments. </li>
</ol>

### Node Agent

<ol>
<li> In the **Administration Console**, select **System Administration** </li>
<li> Select **Node agents** </li>
<li> Choose which *nodeagent* to edit </li>
<li> In the **Server Infrastructure** section, expand **Java and Process Management** and select **Process Definition**. </li>
<li> Under the **Additional Properties** section, click **Java Virtual Machine**. </li>
<li> Scroll down and locate the textbox for Generic JVM arguments. </li>
</ol>

### Deployment Manager

<ol>
<li> In the **Administration Console**, select **System Administration** </li>
<li> Select **Deployment manager** </li>
<li> In the **Server Infrastructure** section, expand **Java and Process Management** and select **Process Definition**. </li>
<li> Under the **Additional Properties** section, click **Java Virtual Machine**. </li>
<li> Scroll down and locate the textbox for Generic JVM arguments. </li>
<li> Add this text to the Generic JVM arguments, as noted in the screenshot below: </li>
</ol>

````
-javaagent:${DOWNLOADS}/contrast.jar -Xshareclasses:none
````

<a href="assets/images/KB2-e01.png" rel="lightbox" title="Generic JVM Arguments"><img class="thumbnail" src="assets/images/KB2-e01.png"/></a>

> **Notes:** 
 * IBM J9 doesn't allow the Java Instrumentation API to alter core Java classes when using the [Shared Classes](http://www.ibm.com/developerworks/library/j-ibmjava4/index.html) feature. You must disable this feature by specifying `-Xshareclasses:none` in your JVM parameters, as shown above. 
 * Similarly, if `-Dcom.ibm.oti.shared.enabled=true` is set, you may also run into problems in older J9 JREs.

