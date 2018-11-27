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

After this stage, you're ready to [configure](installation-proxy.html#proxy-config) the software.

<!-- ## Installation from Source

The Proxy agent is constructed as a module that plugs into NGINX. It can be compiled statically into NGINX or as an NGINX dynamic module. The software and documentation for building from source is available at: https://github.com/Contrast-Security-OSS/nginx-contrast-connector and https://github.com/Contrast-Security-OSS/nginx-contrast-connector/blob/master/BUILD_FROM_SOURCES.md -->

## Air-gapped users

Users that are not connected to the Internet will need to import our linux packages to their internal network since their package manager will not reach them. To import them, you should go directly to the location where our packages are hosted for your packaging system and download the newest versions from there. Here is a dependency listing of what you will need:

	contrast-server -> contrast-modsecurity
	contrast-webserver-agent-nginx -> nginx

Download the newest version of each of those four packages and import them to your network. Distro-specific instructions follow. After importing and installing the packages, you can move to the [configure](installation-proxy.html#proxy-config) 

### Centos/Redhat
	
The repo files are located at
	https://contrastsecurity.jfrog.io/contrastsecurity/rpm-public/.

Select the folder of your distro and the files are presented for download.

They can be installed via:

```
sudo yum install contrast-modsecurity-<version>.rpm
sudo yum isntall contrast-service-<version>.rpm
sudo yum install nginx-<version>.rpm
sudo yum install contrast-webserver-agent-nginx-<version>.rpm
```
 
### Ubuntu:

The repo files are located at 
	https://contrastsecurity.jfrog.io/contrastsecurity/debian-public/pool/

The ubuntu deb repo organizes all of its various distro files in the same directory. The distro of each package is embeded at the end of the package filename. Download the latest package of the four mentioned above for your particular distro and import them to your network.

They can be installed via:

```
sudo dpkg -i contrast-modsecurity-<version>.deb
sudo dpkg -i contrast-service-<version>.deb
sudo dpkg -i nginx-<version>.deb
sudo dpkg -i contrast-webserver-agent-nginx-<version>.deb
```

