<!--
title: "Install the Contrast Proxy Agent"
description: "Installation instructions for the Contrast Proxy agent"
tags: "installation agent proxy nginx linux package source"
-->

The Contrast Proxy agent is available for installation from a Linux package repository. 

## Prerequisites

The Proxy agent targets the official Stable NGINX server. You must install their official package as a dependency for Contrast's Proxy agent module. If you have a distro's NGINX package installed, you must remove it in favor of the official NGINX distributed package.

You can find and install the required NGINX package from Contrast's package repository. If you want to obtain it from NGINX directly, use their [instructions](http://nginx.org/en/linux_packages.html) to configure your system to pull from the official NGINX repository. 

> **Note:** NGINX also offers a Mainline distribution option. It's configured differently than, and not interchangeable for, the Stable distribution that's required for the Proxy agent. 

You must also ensure that your system is properly configured with the [Contrast Linux package repository](installation-setup.html#linux).

## Install from Linux Packages

Use the following commands to install the Proxy agent.

**Debian/Ubuntu:**

```
 sudo apt-get update
 sudo apt-get install contrast-webserver-agent-nginx contrast-service
```

**RedHat/Centos:**

```
 sudo yum install contrast-webserver-agent-nginx contrast-service
```

After this stage, you're ready to [configure](installation-proxy.html#proxy-config) the software.

<!-- ## Installation from Source

The Proxy agent is constructed as a module that plugs into NGINX. It can be compiled statically into NGINX or as an NGINX dynamic module. The software and documentation for building from source is available at: https://github.com/Contrast-Security-OSS/nginx-contrast-connector and https://github.com/Contrast-Security-OSS/nginx-contrast-connector/blob/master/BUILD_FROM_SOURCES.md -->

## Air-Gapped Users

Users that aren't connected to the internet must import Contrast's Linux packages to their internal network since their package manager doesn't reach them. Many organizations have automated import and synchronization procedures for keeping up to date with repositories on the internet disconnected from their air-gapped network. You should ensure your organization doesn't already have an import process that can help with this process. But, regardless of your situation, the following information for manually obtaining the packages is helpful for completing installation.

To manually import the packages, you must go directly to the location where Contrast hosts packages for your packaging system, and download the newest versions. A dependency listing of what you will need:

	contrast-server -> contrast-modsecurity
	contrast-webserver-agent-nginx -> nginx

The following distro-specific instructions walk you through the process to download the newest version of each of the four packages and import them to your network. After importing and installing the packages, you can move to [configuration](installation-proxy.html#proxy-config). 


### Redhat/Centos
	
The repository files are located at *https://contrastsecurity.jfrog.io/contrastsecurity/rpm-public/*. Once you select the folder of your distro, the files are ready for download. You can install them with the following commands:

```
sudo yum install contrast-modsecurity-<version>.rpm
sudo yum install contrast-service-<version>.rpm
sudo yum install nginx-<version>.rpm
sudo yum install contrast-webserver-agent-nginx-<version>.rpm
```
 
### Debian/Ubuntu

The repository files are located at *https://contrastsecurity.jfrog.io/contrastsecurity/debian-public/pool/*. The Debian/Ubuntu repository organizes all of its various distro files in the same directory. 

The distro of each package is embedded at the end of the package filename. Download the latest package of the four mentioned above for your particular distro, and import them to your network. You can install them with the following commands:

```
sudo dpkg -i contrast-modsecurity-<version>.deb
sudo dpkg -i contrast-service-<version>.deb
sudo dpkg -i nginx-<version>.deb
sudo dpkg -i contrast-webserver-agent-nginx-<version>.deb
```

