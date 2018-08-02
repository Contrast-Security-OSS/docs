<!--
title: "Configuring Contrast To Use ZooKeeper"
description: "Instructions for configuring TeamServer to use ZooKeeper as the single source of truth"
tags: "installation EOP distributed configuration ZooKeeper"
-->

## About ZooKeeper and Contrast
This guide is for enterprise-on-premises (EOP) administrators who are looking to move to a distributed setup of Contrast and want to use ZooKeeper as their configuration management. 

> **Note:** While the following steps guide you through the setup and configuration of additional software, keep in mind that you're responsible for the monitoring, backup and durability of ZooKeeper. 

All code that's shared here is also available in our GitHub repo, so check back often for updates. You can also submit a Pull Request if you have suggestions or find any bugs in the instructions.

## Before You Get Started
Make sure you have a working installation of ZooKeeper that can be accessed from Contrast nodes. To test the connectivity from Contrast, log into that node, run a ```telnet``` command and send ```ruok```.

```
telnet localhost 2181
Trying ::1...
Connected to localhost.
Escape character is '^]'.
ruok
imokConnection closed by foreign host.
```

In this case, ZooKeeper responds with ```imok```. You can also use other [four letter words](https://zookeeper.apache.org/doc/r3.1.2/zookeeperAdmin.html#sc_zkCommands) as ZooKeeper commands. 

> **Note:** ZooKeeper is accessible through the network; as a result, anyone who has access to the ZooKeeper node can view your Contrast settings. You can address this by allowing only specified Contrast/Administrator nodes to access the ZooKeeper node.

## Configuration 
 
### Step One: Shut down Contrast
In Linux, stop Contrast by running ```contrast-server stop```. For more information about how to stop Contrast, refer to [this article](installation-setup.html#run).

### Step Two: Enable ZooKeeper
Update the enable flag for ```zookeeper.properties``` to ```true```.

```
zookeeper.enabled=true
zookeeper.connection.string=127.0.0.1:2181
zookeeper.retry.max.attempts=20
zookeeper.retry.delay=10
zookeeper.character.encoding=UTF-8
```

### Step Three: Restart Contrast
In Linux, restart Contrast by running ```contrast-server start```. Find more information [in this article](installation-setup.html#run) about how to restart Contrast. 

On startup, Contrast checks ZooKeeper and uploads its current configurations. 

> **Note:** If you're running a distributed set of nodes only, start up one node at a time. 




