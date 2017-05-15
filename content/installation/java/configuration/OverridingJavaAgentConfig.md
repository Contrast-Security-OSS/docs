<!--
title: "Overriding Configuration Options With The Java Agent"
description: "Overriding Java agent configuration"
tags: "installation java agent configuration override"
-->

If you'd like to override configuration options in your agent, you can run with a custom configuration. To start, let's copy the configuration that's shipped with the agent. The following [JAR](http://docs.oracle.com/javase/7/docs/technotes/tools/windows/jar.html) command will copy the configuration file out of an agent that's been downloaded from the Contrast site:

```
user:tomcat majordomo$ jar -xf contrast.jar contrast.config
```

Now that you have a ***contrast.config*** file, which is just XML, you can edit it like any other file. However, to tell the agent to use this configuration file, we have to modify our ```-javaagent``` line to point to it, as shown here:

```
export JAVA_OPTS="$JAVAOPTS -javaagent:/tomcat6/contrast.jar=/tomcat6/contrast.config"
```

The following marked-up ***contrast.config*** file shows what can be controlled here:

```
<?xml version="1.0"?>
<contrast>
   <id/> <!-- Used to 'id' this agent, if such a need exists. -->
   <log level="error" console="false"/> <!-- The level is one of the standard log4j levels. -->
   <global-key>demo</global-key> <!-- Your organization's API Key. Needed for talking to the REST API. -->

   <user>
     <id>contrast_admin</id> <-- Your username. -->
     <key>demo</key> <!-- Your service key, which is needed for talking to the REST API. -->
   </user>

   <!-- 
   Where Contrast results are reported. You can add the following attributes to the 'url' element in order
   to ask Contrast to use a proxy:
      - proxyHost (just the hostname or IP)
      - proxyPort
      - proxyUser
      - proxyPassword
      - proxyAuthenticationType (one of NTLM, Digest or Basic)
    --> 
   <url>https://app.contrastsecurity.com/Contrast/s/</url>
   <local-results mode="never"/> <!-- Results can be captured locally with "error" or "always". -->
   <plugins>
      <!-- The contents of this area shouldn't be altered. -->
   </plugins>
   <capture-stacktraces>ALL</capture-stacktraces> <!-- Set to SOME or NONE to gain performance boosts. -->

   <!--
   Setting 'enabled' to true in the sampling section tells Contrast to skip analysis of redundant of URIs
   after some baseline samples have been collected.
   -->
   <sampling>
      <enabled>false</enabled>
      <baseline>5</baseline>
      <request-frequency>10</request-frequency>
      <response-frequency>50</response-frequency>
      <window>180</window>
    </sampling>
</contrast>
```
