
<!--
title: "Linux Package Distribution"
description: "How to use Contrast's Linux repository"
tags: "installation linux package repo distribution"
-->

## About Linux Package Distribution

Some of Contrast's products, including the [Proxy agent](installation-proxy.html#proxy-install), are distributed through Linux packages. This makes installation and updates very easy and familiar as it utilizes the Linux packaging and distribution system. 

To use the Contrast package repository, you must configure your package management system to include the appropriate reference. While most Contrast packages are tied to the specific Linux distribution you're using, some are applicable to any distribution. The following steps for **Ubuntu** and **RedHat/CentOS** users configure both distribution points; once configured, you will have access to all our Linux-packaged products.

**This is a one-time configuration step.** Once it's done, you're connected to the Contrast software distribution pipeline, and can solely manage it through your distribution's package manager. If you already completed this step, the appropriate repository definition file will be present:

* **Ubuntu/Debian:** */etc/apt/sources.list.d/contrast.list*

* **Centos/Redhat:** */etc/yum.repos.d/contrast.repo* 

> **Note:** Some Linux package managers need a public GPG key that's used to verify the signed packages from our repository; this is included in the configuration steps, if it's applicable to your system.

## Ubuntu

To verify which version of Ubuntu you're running, run `cat /etc/os-release`. Once you determine your Ubuntu version, copy and paste one of the following scripts to your command line to set up the appropriate Linux repository for your version.

### Ubuntu 18.04: bionic

```
curl https://contrastsecurity.jfrog.io/contrastsecurity/api/gpg/key/public | sudo apt-key add -
echo "deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-public/ bionic contrast" | sudo tee /etc/apt/sources.list.d/contrast.list
echo "deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-public/ all contrast" | sudo tee -a /etc/apt/sources.list.d/contrast.list
sudo apt-get update

```
### Ubuntu 16.04: xenial

```
curl https://contrastsecurity.jfrog.io/contrastsecurity/api/gpg/key/public | sudo apt-key add -
echo "deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-public/ xenial contrast" | sudo tee /etc/apt/sources.list.d/contrast.list
echo "deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-public/ all contrast" | sudo tee -a /etc/apt/sources.list.d/contrast.list
sudo apt-get update

```

### Ubuntu 14.04: trusty

```
curl https://contrastsecurity.jfrog.io/contrastsecurity/api/gpg/key/public | sudo apt-key add -
echo "deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-public/ trusty contrast" | sudo tee /etc/apt/sources.list.d/contrast.list
echo "deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-public/ all contrast" | sudo tee -a /etc/apt/sources.list.d/contrast.list
sudo apt-get update

```

## RedHat/CentOS

For Red Hat Enterprise Linux (RHEL) and CentOS versions 5, 6 and 7, copy and paste the following single script into your shell to configure your RedHat-based system for Contrast's package repository. 

```
sudo tee /etc/yum.repos.d/contrast.repo <<-"EOF"
[contrast]
name=Contrast centos-$releasever repo
baseurl=https://contrastsecurity.jfrog.io/contrastsecurity/rpm-public/centos-$releasever/
gpgcheck=0
enabled=1
EOF

```
