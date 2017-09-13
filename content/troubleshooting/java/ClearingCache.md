<!--
title: "How to clear your agent cache"
description: "Troubleshooting the Java Agent Cache"
tags: "troubleshoot java agent clear cache"
-->

## About the Agent Cache

There are two Java agents: the Launcher agent and the Standalone agent. The Launcher agent automatically updates itself when the server being monitored starts up. The agent cache is a directory used by this agent to store the latest agent in this automatic update process. The name of this directory is `agents`, and it lives inside the Contrast home directory. 
 
## Clear the Agent Cache

Enterprise-on-Premises (EOP) customers transitioning from one Contrast interface to another, or a user who has agent issues and wants to hit the **Reset** button, should clear the agent cache.
 
You can find the agent cache directory in the agent output on startup:

````
[ContrastLauncher] Tue Feb 24 11:23:19 EST 2015 Using /Users/jdoe/tomcat7/temp/.contrast/agents for storage. 
````

> **Note:** If you don't see a line like this, either you aren't using a Launcher agent or the location is different in your server. 

To clear the cache, delete the contents of this directory. 
