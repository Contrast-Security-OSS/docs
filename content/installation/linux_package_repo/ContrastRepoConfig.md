Some of Contrast's products are distributed via Linux packages. This makes installing and staying up to date very easy and familiar as it utilizes the linux packaging and distribution system. In order to use our package repository you have to configure your package management system to include a reference to our package repo.

Some of our packages are tied to the specific Linux distribution you are using and some are applicable to any distribution. This document will configure both distribution points so once configured, you will have access to all our Linux-packaged products.

This is a one-time configuration step. Once its done, you'll be connected to the Contrast software distribution pipeline and can solely manage it via your distribution's package manager. Some Linux package managers need a public GPG key that will be used to verify the signed packages from our repository.  We'll show this in the configuration steps if its applicable to your system.

### Ubuntu

You can find which version of Ubuntu you are running by running:

```
cat /etc/os-release

```

Once you determine your Ubuntu version, copy and paste one of the scripts below to your command line to set up the linux repo for your version of Ubuntu.

#### Ubuntu 18.04: bionic

```
curl https://contrastsecurity.jfrog.io/contrastsecurity/api/gpg/key/public | sudo apt-key add -
sudo echo "deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-public/ bionic contrast" | sudo tee /etc/apt/sources.list.d/contrast.list
sudo echo "deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-public/ all contrast" | sudo tee -a /etc/apt/sources.list.d/contrast.list
sudo apt-get update

```
#### Ubuntu 16.04: xenial

```
curl https://contrastsecurity.jfrog.io/contrastsecurity/api/gpg/key/public | sudo apt-key add -
sudo echo "deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-public/ xenial contrast" | sudo tee /etc/apt/sources.list.d/contrast.list
sudo echo "deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-public/ all contrast" | sudo tee -a /etc/apt/sources.list.d/contrast.list
sudo apt-get update

```

#### Ubuntu 14.04: trusty

```
curl https://contrastsecurity.jfrog.io/contrastsecurity/api/gpg/key/public | sudo apt-key add -
sudo echo "deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-public/ trusty contrast" | sudo tee /etc/apt/sources.list.d/contrast.list
sudo echo "deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-public/ all contrast" | sudo tee -a /etc/apt/sources.list.d/contrast.list
sudo apt-get update

```

### RedHat/CentOS

For Red Hat Enterprise Linux (RHEL) and CentOS versions 5, 6 and 7, the following single script will configure your RedHat-based system for our package repository. Please copy and paste it into your shell.

```
sudo tee /etc/yum.repos.d/contrast.repo <<-"EOF"
[contrast]
name=Contrast centos-$releasever repo
baseurl=https://contrastsecurity.jfrog.io/contrastsecurity/rpm-public/centos-$releasever/
gpgcheck=0
enabled=1
EOF

```
