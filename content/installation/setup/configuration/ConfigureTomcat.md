<!--
title: "Configuring Embedded Tomcat Instance"
description: "Guidelines for configuring the embedded Tomcat instance of TeamServer"
tags: "installation setup configuration Tomcat Java performance tuning hotspot"
-->

## About Tomcat

During the installation process, you set some values for the memory used by the embedded Tomcat server on which Contrast runs. As you add more applications or find more vulnerabilities, you may notice a degradation in performance in the Contrast application. This could be because you're bumping against the maximum memory allowed for this server. Fortunately, you can increase your memory settings.

## Change Settings

As an Administrator, begin stop the Contrast server by running the `contrast-server stop` command. Once the server is completely stopped (*Contrast/logs/contrast-stdout.log* ends with `[MysqldResource] shutdown complete`), you can change its memory settings. In the Contrast bin directory, *c:/Program Files/Contrast/bin* or the default */opt/Contrast/bin*, open a file named *contrast-server.vmoptions*. It should look something like this: 

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

You can update the values for `Xms`, the amount of memory allocated to the server on start, and `Xmx`, the maximum memory the server can use, as well as the `MaxPermSize`. These values can change depending on the memory available on the machine hosting Contrast. Once you make the change, save the file and start Contrast back up using the `contrast-server start` command. 

For more information about JVM tuning, see this [guide](http://www.oracle.com/technetwork/articles/java/vmoptions-jsp-140102.html).
