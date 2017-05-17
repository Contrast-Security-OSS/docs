<!--
title: "Configuring TeamServer To Use ZooKeeper"
description: "Instructions for configuring TeamServer to use ZooKeeper as the single source of truth"
tags: "EOP distributed configuration made easy with ZooKeeper"
-->

## About ZooKeeper and TeamServer
This guide is for enterprise-on-premises (EOP) administrators who are looking to move to a distributed setup of Contrast and want to use ZooKeeper as their configuration management. 

Although it guides you through the setup and configuration of additional software, please be aware you're responsible for the monitoring, backups and durability of ZooKeeper. Also, check back often for updates. All code that we have shared here is also available in our GitHub [repo](https://github.com/Contrast-Security-OSS/docs). Feel free to submit a Pull Request if you have suggestions or find any incorrect instructions!

# Before You Get Started
Make sure you have a working installation of ZooKeeper that can be accessible from Contrast nodes. To test the connectivity from Contrast, log into that node, and run a ```telnet``` command and send ```ruok```.

```
telnet localhost 2181
Trying ::1...
Connected to localhost.
Escape character is '^]'.
ruok
imokConnection closed by foreign host.
```

In this case, ZooKeeper responds with ```imok```. You can also use other [four letter words](https://zookeeper.apache.org/doc/r3.1.2/zookeeperAdmin.html#sc_zkCommands) as ZooKeeper commands. 

> **Note:** Keep in mind that since ZooKeeper is accessible through the network, anyone who has access to the ZooKeeper node can view your Contrast settings. You can address this by allowing only specified Contrast/Administrator nodes to access the ZooKeeper node.
 
## Step 1: Shutdown TeamServer
Stop Contrast from running. In Linux, you can do this by running ```contrast-server stop```. Find more info [here](https://docs.contrastsecurity.com/admin_tsinstall.html#run) regarding how to stop Contrast.

## Step 2: Enable ZooKeeper
Update ```zookeeper.properties```'s enable flag to ```true```.
```
zookeeper.enabled=true
zookeeper.connection.string=127.0.0.1:2181
zookeeper.retry.max.attempts=20
zookeeper.retry.delay=10
zookeeper.character.encoding=UTF-8
```

### Step 3: Start TeamServer Up
Stop TeamServer from running. In linux this can be achieved by running ```contrast-server start``` more info can be 
found [here regarding how to start](https://docs.contrastsecurity.com/admin_tsinstall.html#run).

On start up TeamServer will check ZooKeeper and upload it's current configurations. 
Note: If you are running a distributed set of nodes only start up one node at a time. 

