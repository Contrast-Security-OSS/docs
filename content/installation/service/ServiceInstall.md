<!-- 
title: "Contrast Service Installation"
description: "Installing Contrast Service"
tags: "contrast service agent installation"
-->

The Contrast Service is packaged with the Ruby and Python agents, and runs automatically when an instrumented Ruby on Rails, Flask or Django application starts. 

## Installation with System Package Manager

You may install the Contrast Service on Linux using system package managers. Unlike the service executable packaged with the [Ruby](installation-ruby.html#ruby-overview) and [Python](installation-python.html#python-overview) agents, the Contrast Service installed by system package managers isn't preconfigured with connection parameters. Instead, you must [configure](installation-service.html#service-config) the service with a YAML configuration file.

### Ubuntu-Based Systems

#### Install the Contrast Service

To install the Contrast Server for Ubuntu-based systems, complete the following steps. 

* Configure your system to retrieve from the correct Debian repository. Get the `CODENAME` for your Ubuntu release. 

```
grep VERSION_CODENAME /etc/os-release 
```

* Update the command below with the `CODENAME`, and run the commands.

```
curl https://contrastsecurity.jfrog.io/contrastsecurity/api/gpg/key/public | sudo apt-key add -
echo "deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-public/ CODENAME contrast" | sudo tee /etc/apt/sources.list.d/contrastc.list
```

* Once you've finished configuration, install the Contrast Service.

```
sudo apt-get update && sudo apt-get install contrast-service
```

* Edit the */etc/contrast/contrast_security.yaml* file to configure Contrast Service to connect to the Contrast UI.

### Red Hat-Based Systems

#### Install the Contrast Service

Complete the following steps to install the Contrast Service for Red Hat Enterprise Linux (RHEL) and CentOS versions 5, 6 and 7.

* To install Contrast Service from Contrast's Yum repository, configure your system to use the repository.

```
OSREL=$(rpmquery -E "%{rhel}")
sudo -E tee /etc/yum.repos.d/contrast.repo << EOF
[contrast]
name=contrast repo
baseurl=https://contrastsecurity.jfrog.io/contrastsecurity/rpm-public/centos-$OSREL/
gpgcheck=0
enabled=1
EOF
```

* Once you've finished configuration, install the Contrast Service.

```
yum install contrast-service
```

* Edit the */etc/contrast/contrast_security.yaml* file to configure the Contrast Service to connect to the Contrast UI.

## Remove the Service

If you need to uninstall the Contrast Service, use the appropriate command for each package. 

* To remove the `contrast-service` package, run `apt-get remove contrast-service` or `yum remove contrast-service`. 

