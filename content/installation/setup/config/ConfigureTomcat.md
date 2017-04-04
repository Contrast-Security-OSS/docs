<!--
title: "Configuring Embedded Tomcat Instance"
description: "Guidelines for configuring the embedded Tomcat instance of TeamServer"
tags: "Tomcat Java performance tuning hotspot"
-->

## Getting Started
During the installation process, we set some values for the memory used by the embedded Tomcat server on which Contrast runs. Over time, as you add more Applications or find more Vulnerabilities, you may notice a degradation in performance in the Contrast web application. This could be because you're bumping against the maximum memory allowed for this server. Fortunately, its fairly straight forward to increase your memory settings.
The first thing you'll need to do is stop the Contrast server by running the "contrast-server stop" command as an administrator. 
Once the server is completely stopped (***Contrast/logs/contrast-stdout.log*** ends with "[MysqldResource] shutdown complete"), you'll be able to change its memory settings. In the Contrast bin directory, ***c:/Program Files/Contrast/bin*** or ***/opt/Contrast/bin*** by default, you'll find a file named ***contrast-server.vmoptions***. When you open it, it should look something like this: 
````
-XX:MaxPermSize=512M
-Xmx4096M
-Xms4096M
-enableassertions
-server
-Djava.net.preferIPv4Stack=true
-XX:+UseTLAB
-XX:+UseCompressedOops
-XX:+UseConcMarkSweepGC
-XX:+UseParNewGC
-XX:CMSFullGCsBeforeCompaction=1
-XX:+CMSParallelRemarkEnabled
-XX:+PrintVMOptions
-XX:+PrintCommandLineFlags
-XX:+HeapDumpOnOutOfMemoryError
-XX:HeapDumpPath=/home/vagrant/contrast/logs
-Djava.awt.headless=true
````
The values that can be updated are **Xms**, the amount of memory allocated to the server on start, and **Xmx**, the maximum memory the server can use, as well as the MaxPermSize. These values can change depending on the memory available on the machine hosting Contrast. Once the change is made simply save the file and start Contrast back up using the ***contrast-server start*** command. For more information about JVM tuning, see this [guide](http://www.oracle.com/technetwork/articles/java/vmoptions-jsp-140102.html).
