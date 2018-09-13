<!-- 
title: "Contrast Webserver Agent Installation"
description: "Installing Contrast Webserver Agent"
tags: "contrast service webserver agent installation"
-->

## Installation with System Package Manager

The Contrast Webserver Agent may be installed on Linux using system package managers. 

### Ubuntu-Based Systems

#### Install the Contrast Webserver Agent

To install the Contrast Webserver Agent (consisting of the Contrast Module for NGINX and the Contrast Service) for Ubuntu-based systems, complete the following steps. 

* Configure your system to Contrast's distribution agnostic Debian repository. 

```
curl https://contrastsecurity.jfrog.io/contrastsecurity/api/gpg/key/public | sudo apt-key add -
echo "deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-staging/ all contrast" | sudo tee /etc/apt/sources.list.d/contrast-staging-all.list
```

* Once you've finished configuration, install the Contrast Service and the Contrast NGINX Module with NGINX.

```
sudo apt-get update 
sudo apt-get install contrast-service
sudo apt-get install nginx-module-contrast
```

* Edit the */etc/contrast/contrast_security.yaml* file to configure Contrast Service to connect to the Contrast UI.

### Red Hat-Based Systems

#### Install the Contrast Service

Complete the following steps to install the Contrast Webserver Agent (consisting of the Contrast Module for NGINX and the Contrast Service) for Red Hat Enterprise Linux (RHEL) and CentOS versions 5, 6 and 7.

* To install Java agent from Contrast's Yum repository, configure your system to use the repository.

```
OSREL=$(rpmquery -E "%{rhel}")
sudo -E tee /etc/yum.repos.d/contrast.repo << EOF
[contrast]
name=contrast repo
baseurl=https://contrastsecurity.jfrog.io/contrastsecurity/rpm-staging/centos-$OSREL/
gpgcheck=0
enabled=1
EOF
```

* Once you've finished configuration, install the Contrast Service.

```
yum install contrast-service
yum install nginx-module-contrast
```

* Edit the */etc/contrast/contrast_security.yaml* file to configure the Contrast Service to connect to the Contrast UI.

## Remove the Service

If you need to uninstall the Java agent, use the appropriate command for each package. 

* To remove the `contrast-service` package, run `apt-get remove contrast-service` or `yum remove contrast-service`. 

