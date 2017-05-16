<!--
title: "ColdFusion"
description: "ColdFusion installation process"
tags: "java agent installation coldfusion admin"
-->


## Getting Started
To monitor ColdFusion applications that run on a Tomcat server, like in the default ColdFusion 10 configuration, follow the normal instructions for [Installing Contrast on Tomcat](installation-javainstall.html#tomcat)

## ColdFusion Admin
The easiest way to install Contrast is in the ColdFusion Administrator. These instructions work in any environment supporting ColdFusion, including IIS.

* Expand Server Settings and hit **Java and JVM** 

* Under **JVM Arguments**, enter ```-javaagent:/path/to/contrast.jar```. This path to the ***contrast.jar*** can be an absolute or relative path. We recommend absolute as its easier to get correct.

> **Note:** the ```-Dcontrast.timeout``` property in this example is not necessary, but can be used in networks with poor connectivity.

<a href="assets/images/KB2-i03.jpg" rel="lightbox" title="JVM Arguments"><img class="thumbnail" src="assets/images/KB2-i03.jpg"/></a>

* Once configured to use the Contrast agent, you need to restart your ColdFusion server. Restarting the server that ColdFusion is running in, like IIS or Tomcat may not result in ColdFusion itself restarting. To do this, we recommend you stop the ColdFusion server using *$CF_HOME\bin\cfstop.bat* (or its equivalent if not in Windows), and then starting the ColdFusion server again using: *$CF_HOME\bin\cfstart.bat*.

* To confirm that the Contrast agent is working properly, when you run ***cfstart.bat***, you should see entries like these in your console:

````
C:\ColdFusion9\bin>cfstart.bat
[ContrastEngine] Thu Apr 10 21:03:39 EDT 2014 Starting Contrast (build 2.7.0-20140405-0133) Pat. 8,458,789 B2
...
[ContrastEngine] Thu Apr 10 21:03:42 EDT 2014 Initializing Contrast. This could take a few minutes...
[ContrastEngine] Thu Apr 10 21:03:56 EDT 2014 Starting JVM...
Starting Macromedia JRun 4.0 (Build 108858), coldfusion server
````

* If you do not see `Starting Contrast` when you first run ***cfstart.bat*** then you likely have a configuration error in your ```javaagent``` setup for Contrast. 

* If for some reason you want to disable Contrast, but the Administrator interface won't start, you can remove the flag directly inside ***$CF_HOME/bin/jvm.config*** (CF 9) or ***$CF_HOME/runtime/bin/config*** (CF 10) and search for ```javaagent```. 


