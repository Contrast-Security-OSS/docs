<!--
title: "How to clear your agent cache"
description: "Troubleshooting the Java Agent Cache"
tags: "troubleshoot java agent clear cache"
-->

## What is the agent cache?
There are two Java agents -- the Launcher agent and the Standalone agent. The Launcher agent automatically updates itself when the server being monitored starts up. The agent cache is a directory used by this agent to store the latest agent in this automatic update process. The name of this directory is 'agents', and it lives inside the Contrast home directory. 
 
## Why would I want to clear the agent cache?
Enterprise On Premises (EOP) customers transitioning from one TeamServer to another, or a user with agent issues looking to hit the **Reset** button.
 
## How do I find my agent cache directory?
This directory can be seen in the agent output on startup:

````
[ContrastLauncher] Tue Feb 24 11:23:19 EST 2015 Using /Users/jdoe/tomcat7/temp/.contrast/agents for storage. 
````

If you don't see a line like this, it's possible you're not using a Launcher agent. Notice that the location may be different from server to server.
Delete the contents of this directory to clear the cache. 
