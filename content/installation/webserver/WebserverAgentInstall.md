<!--
title: "Install the Contrast Proxy Agent"
description: "Installation instructions for the Contrast Proxy agent"
tags: "installation agent proxy nginx linux package source"
-->

The Contrast Proxy agent is available for installation from a Linux package repository. 

## Prerequisites

The Proxy agent targets the official Stable NGINX server. You must install their official package as a dependency for Contrast's Proxy agent module, which plugs into it. If you have a distro's NGINX package installed, you must remove it in favor of the official NGINX distributed package.

You can find and install the required NGINX package from Contrast's package repository. If you want to obtain it from NGINX directly, use their [instructions](http://nginx.org/en/linux_packages.html) to configure your system to pull from the official NGINX repository. 

> **Note:** NGINX also offers a Mainline distribution option. It's configured differently than, and not interchangeable for, the Stable distribution that's required for the Proxy agent. 

You must also ensure that your system is properly configured with the [Contrast Linux package repository](installation-setup.html#linux).

## Install from Linux Packages

Use the following commands to install the Proxy agent: 

**Debian/Ubuntu users:**

```
 sudo apt-get update
 sudo apt-get install contrast-webserver-agent-nginx contrast-service
```

**RedHat/Centos users:**

```
 sudo yum install contrast-webserver-agent-nginx contrast-service
```

After this stage, you're ready to [configure](installation-webserver.html#webserver-config) the software.

<!-- ## Installation from Source

The Proxy agent is constructed as a module that plugs into NGINX. It can be compiled statically into NGINX or as an NGINX dynamic module. The software and documentation for building from source is available at: https://github.com/Contrast-Security-OSS/nginx-contrast-connector and https://github.com/Contrast-Security-OSS/nginx-contrast-connector/blob/master/BUILD_FROM_SOURCES.md -->


