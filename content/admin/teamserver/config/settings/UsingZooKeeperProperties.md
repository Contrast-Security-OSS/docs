<!--
title: "Configuring TeamServer To Use ZooKeeper"
description: "Instructions for configuring TeamServer to use ZooKeeper as the single source of truth"
tags: "EOP distributed configuration made easy with ZooKeeper"
-->

# Who Should Read this Document
This guide is for enterprise on premise (EOP) administrators, who are looking to move to a distributed setup of TeamServer and would like to use ZooKeeper as their configuration management. 

# About ZooKeeper and TeamServer
This documentation will guide you through the setup and configuration of additional software but please be aware you will be responsible for the monitoring, backups and durability of ZooKeeper. 

Also, check back often for updates. Feel free to submit a Pull Request if you have suggestions or find any instructions incorrect.  All code that we have shared here is also available in our GitHub [repo](https://github.com/Contrast-Security-OSS/docs).   

# Before You Get Started
Please make sure you have a working installation of ZooKeeper that can be accessible from TeamServer nodes. To test the connectivity from TeamServer. Log into that node and run a telnet command and send ```ruok```.
```
telnet localhost 2181
Trying ::1...
Connected to localhost.
Escape character is '^]'.
ruok
imokConnection closed by foreign host.
```

In this case ZooKeeper will respond with ```imok```. There are other four letter words you can [use](https://zookeeper.apache.org/doc/r3.1.2/zookeeperAdmin.html#sc_zkCommands). 

#### Notes
Please keep in mind that since ZooKeeper is accessible via the network anyone that can access the ZooKeeper node can view your Teamserver settings.  This can be address by allowing only specified Teamserver/Administrator nodes to access the ZooKeeper node.
 
## Step 1: Shutdown TeamServer
Stop TeamServer from running. In linux this can be achieved by running ```contrast-server stop``` more info can be 
found [here regarding how to stop](https://docs.contrastsecurity.com/admin_tsinstall.html#run).

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

