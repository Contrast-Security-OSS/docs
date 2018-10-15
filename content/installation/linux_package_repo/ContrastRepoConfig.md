Some of Contrast's products are distributed via Linux packages. This makes installing and staying up to date very easy and familiar as it utilizes the linux packaging and distribution system. In order to use our package repo you have to configure your package management system to include a reference to our package repo.

Some of our packages are tied to the specific Linux distribution you are using and some are applicable to any distribution. This document will configure both distribution points so once configured, you will have access to all our Linux-packaged products.

This is a one-time configuration step. Once its done, you'll be connected to the software distribution pipeline and can solely manage it via your distribution's package manager. Some Linux package managers need a public GPG key that will be used to verify the signed packages from our repo.  We'll show this in the configuration steps if its applicable to your system

### Debian/Ubuntu

Debian-based distributions are identified by their codename.  Codenames for Ubuntu versions are:

	* Ubuntu 18.04: bionic
	* Ubuntu 16.04: xenial
	* Ubuntu 14.04: trusty

* First install the public key we use to sign our packages.

```
curl https://contrastsecurity.jfrog.io/contrastsecurity/api/gpg/key/public | sudo apt-key add -
```

* Next, add the package repos. Be sure to replace the `CODENAME` below with your distros actual codename. This can be found in ```/etc/os-release```. Create the file ```/apt/sources.list.d/contrast.list``` with your favorite editor and add the content below to it:

```
deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-public/ CODENAME contrast
deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-public/ all contrast
```

* Once the data above is written to the file, you will have access to both our distro-specific packages and distro-agnostic packages. You should update your local package cache with the command below and you'll be ready to start installing Contrast software packages.

```
sudo apt-get update
```

### RedHat/CentOS

Complete the following steps to install the Contrast Service for Red Hat Enterprise Linux (RHEL) and CentOS versions 5, 6 and 7.

* The Contrast repositories for RHEL/Centos can be added by creating the file, ```/etc/yum.repos.d/contrast.repo```, and adding the following data to it with your favorite text editor:

```
[contrast]
name=Contrast centos-$releasever repo
baseurl=https://contrastsecurity.jfrog.io/contrastsecurity/rpm-public/centos-$releasever/
gpgcheck=0
enabled=1
```



