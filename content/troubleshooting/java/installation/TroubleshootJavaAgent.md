<!--
title: "Troubleshooting the Agent"
description: "Troubleshooting guide for the agent installation process."
tags: "java agent troubleshoot installation guide"
-->

## Scenario: I see "-javaagent failed, missing ZIP or bad..." error when starting up 
This means that you set up the ```-javaagent``` switch properly, but used an incorrect path for ***contrast.jar***. We recommend using a fully qualified path while setting up the switch to prevent any relative path confusion, i.e.:

````
[joe@localhost /~#] set JAVA_OPTS=$JAVA_OPTS -noverify -javaagent:../contrast.jar 
# Bad! Relative path may be interpreted incorrectly by the launcher.
````

Using fully-qualified paths fixes everything:

````
[joe@localhost /~#] set JAVA_OPTS=$JAVA_OPTS -noverify -javaagent:/usr/share/java/lib/contrast.jar 
# Good! Everyone sees this path the same.
````

If it still fails, double check the path to the ***contrast.jar*** file correctly and make sure the user running the server has the correct filesystem privileges to read the file and its parent directory.

## Scenario: I don't see Contrast messages in my console at startup.

When you start your application server with Contrast, the first thing you should see is a few startup messages from Contrast printed to standard out. There are only a couple reasons this could happen:

**The server has not had the JVM options set correctly.**
The vast majority of the time, this is the issue. Look at the Installation Guide for specific instructions on how to add JVM options to your server startup script or run configuration. Sometimes, users will add Contrast options to the server's startup script which isn't used by their launcher.

**The server or application is redirecting standard output.**
Confirm that Contrast messages are appearing with the rest of the redirected output.

If these steps don't help, consult your application server, IDE or launcher documentation on setting the server's JVM options. The same steps for adding memory (via the -Xmx switch) can be used to add the Java agent. 

## Scenario: My server doesn't appear on the Contrast site
Are you sure the Engine was installed correctly? Here's a checklist of common fixes for this issue:
* Did you add the JVM parameters to your container's startup file, run configuration or ```JAVA_OPTS``` as was shown in installation documents?
* Did you add some extra PermGen (```-XX:PermGen=128m``` or more) and heap space (```-Xmx768m``` or more) in case it needs more memory?
* Did you see the Contrast messages in the console when you started up the server? What about server startup messages?

There are a few network-related reasons why your server wouldn't appear on Contrast's installation wizard, even if Contrast was installed correctly. Assuming you've seen the Contrast and server's startup messages in your console on startup, consider the following options.

**Your network requires a HTTP proxy to access Contrast's site**
If you need to configure an HTTP proxy to reach the Internet in your web browser, it's very likely Contrast will also require an HTTP proxy. To add an one off HTTP proxy, select "Advanced Configuration" and then "Use HTTP Proxy"in the Agent download screen. Fill out values for the HTTP proxy host and port. These values should be supplied by your network administrators. Finally, download and install Contrast as per the normal instructions.

**Your network firewall doesn't allow outbound HTTP connections to Contrast's site**
Work with your network administrators to allow the server on which the Agent is running to create outbound HTTP requests to the Contrast TeamServer from which you obtained said Agent. For SaaS users, this is *app.contrastsecurity.com* on port 443.

**You're suffering from the Windows and Java7 IPv6 bug**
Starting with Java 7, the behavior of the IP stack is to utilize [IPv6 addresses](http://docs.oracle.com/javase/7/docs/api/java/net/doc-files/net-properties.html) if available. On [Windows](http://bugs.java.com/bugdatabase/view_bug.do?bug_id=7095419), this causes problems with Java machines attempting to make connections out and results in inexplicable "PermissionDenied" exceptions. To fix, this, add ```-Djava.net.preferIPv4Stack=true``` to your JVM options.

The Contrast engine ships with a diagnostic tool that can be run by passing the "diagnostic" argument to ***contrast.jar***. This may help you identify your problem area.

````
$ java -jar contrast.jar diagnostic 
*** Contrast Engine (version 1.X) 
[!] Attempting to connect to the Contrast TeamServer at http://localhost:19080/Contrast (No proxy). 
[+] Looking up http://localhost:19080/Contrast 
        Couldn't resolve host 
[-] Client cannot resolve the Contrast TeamServer. A proxy or DNS change may be needed. 
[+] Issuing HTTP request to Contrast... 
        Executing request... 
        Reading response [200] 
        Response size = 3215 
        Snippet: <!doctype html> <!--[if gt IE 8]><!--> <html class="no-js"> 
[+] Client can connect directly to the Contrast TeamServer. No proxy needed.
````

You can also customize the diagnostic test and quickly test out different proxy and NTLM configurations by setting the following System properties:
* proxy.host - the proxy hostname or IP address.
* proxy.port - the proxy port (usually 80 or 8080).
* proxy.auth - one of "none", "basic", "digest" or "ntlm".
* proxy.user - your proxy user name, if authentication is needed. For NTLM proxies, this is usually DOMAIN\username.
* proxy.pass - your proxy password, if authentication is needed.
* contrast.teamserver.url - a different URL than that supplied by the TeamServer at time of download

## Scenario: I see OutOfMemoryError, PermGen or other unexplained stack traces

If you're running into unexplained OutOfMemoryErrors, NoClassDefFoundErrors that seem to reference Contrast code, PermGen problems, the following may explain what's happening:
* You need to add more PermGen (-XX:MaxPermSize=128m or more) and/or heap space (-Xmx768m or more).
* You're running an unsupported container or version.
* An unsupported OSGi container within your application is causing class loading issues with Contrast.

If you have enough memory, are running a supported container, and aren't doing any class visibility funkiness, send us some details at bugs@contrastsecurity.com.
