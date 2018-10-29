<!--
title: "Install the Contrast Webserver Agent"
description: "Installation instructions for the Contrast Webserver agent"
tags: "installation agent webserver nginx linux package source"
-->

The Contrast Webserver agent is available by two methods of installation: Linux package (recommended) or source-based.

## Prerequisites 

The Webserver agent targets the official Stable NGINX server. You must install their official package as a dependency for Contrast's Webserver agent module that plugs into it. If you have a distribution's NGINX package installed, you must remove it in favor of the official NGINX distributed package.

You can find and install the required NGINX package from Contrast's package repository. If you want to obtain it from NGINX directly, use their [instructions](http://nginx.org/en/linux_packages.html) to configure your system to pull from the official NGINX repository. 

> **Note:** NGINX also offers a Mainline distribution option. It's configured differently than, and not interchangeable for, the Stable distribution that's required for the Webserver agent. 

You must also ensure that your system is property configured with the [Contrast Linux package repository](ADD LINK TO SHARED DOC).

## Install from Linux Packages

Use the following commands to install the Webserver agent: 

**Debian/Ubuntu users:**

```
 sudo apt-get update
 sudo apt-get install contrast-webserver-agent-nginx contrast-service
```

**RedHat/Centos Users:**

```
 sudo yum install contrast-webserver-agent-nginx contrast-service
```

After this stage, you're ready to [configure](installation-webserver.html#webserver-config) the software.

## Installation from Source

The Webserver agent is constructed as a module that plugs into NGINX. It can be compiled statically into NGINX or as an NGINX dynamic module. The software and documentation for building from source is available at: _XXX: Insert GITHUB link_ and _XXX: Insert GITHUB link to BUILD_FROM_SOURCES.md_.


