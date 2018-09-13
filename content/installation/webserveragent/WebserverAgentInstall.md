<!-- 
title: "Contrast Webserver Agent Installation"
description: "Installing Contrast Webserver Agent"
tags: "contrast service webserver agent installation"
-->

## Installation

The Contrast Webserver Agent consists of two components: Contrast Service and an NGINX module. Instructions for installing [Contrast Service](installation-service.html#service-overview) can be located [here](installation-service.html#service-install).

The Contrast Webserver Agent may be built from source to work with NGINX versions 1.10 and above or it can be installed on Linux using system package managers for NGINX 1.12 and 1.14.

### Build From Source

TODO

### Ubuntu-Based Systems

#### Install NGINX and the Contrast Webserver Agent

To install the Contrast Webserver Agent (consisting of NGINX, the Contrast Module for NGINX, and the Contrast Service) for Ubuntu-based systems, complete the following steps. 

* Configure your system to use NGINX from the official NGINX repository by following the instructions here:  http://nginx.org/en/linux_packages.html
* Configure your system to Contrast's distribution agnostic Debian repository. 

```
curl https://contrastsecurity.jfrog.io/contrastsecurity/api/gpg/key/public | sudo apt-key add -
echo "deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-public/ all contrast" | sudo tee /etc/apt/sources.list.d/contrast-public.list
```

* Once you've finished configuration, install the Contrast Service and the Contrast NGINX Module with NGINX.

```
sudo apt-get update 
sudo apt-get install contrast-service
sudo apt-get install contrast-webserver-agent-nginx
```

* Edit the */etc/contrast/contrast_security.yaml* file to configure Contrast Service to connect to the Contrast UI.

### Red Hat-Based Systems

#### Install the Contrast Webserver Agent

Complete the following steps to install the Contrast Webserver Agent (consisting of NGINX, the Contrast Module for NGINX, and the Contrast Service) for Red Hat Enterprise Linux (RHEL) and CentOS versions 5, 6 and 7.

* Configure your system to use NGINX from the official NGINX repository by following the instructions here:  http://nginx.org/en/linux_packages.html
* To install Contrast Webserver Agent from Contrast's Yum repository, configure your system to use the repository.

```
OSREL=$(rpmquery -E "%{rhel}")
sudo -E tee /etc/yum.repos.d/contrast.repo << EOF
[contrast]
name=contrast repo
baseurl=https://contrastsecurity.jfrog.io/contrastsecurity/rpm-publbic/centos-$OSREL/
gpgcheck=0
enabled=1
EOF
```

* Once you've finished configuration, install the Contrast Service.

```
yum install contrast-service
yum install contrast-webserver-agent-nginx
```

* Edit the */etc/contrast/contrast_security.yaml* file to configure the Contrast Service to connect to the Contrast UI.


