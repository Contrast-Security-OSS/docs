Some of Contrast's products are distributed via Linux packages. This makes
installing and staying up to date very easy. In order to use our package repo
you have to configure your package management system to include a reference to
our package repo. The instructions for doing this are below:

Some of our packages are tied to the specific Linux distribution you are using;
For Ubuntu, this could be one of 'bionic', 'xenial', or 'trusty'.  The
instructions will show you how to get this information and then use it to
configure the right package repo for your system.  This is a one-time
configuration.  Once its done, you'll be connected to the software distribution
pipeline and can solely manage it via your distribution's package manager.

### Debian/Ubuntu


* Configure your system to retrieve from the correct Debian repository. Get the `CODENAME` for your Ubuntu/Debian release. 

```
grep VERSION_CODENAME /etc/os-release 
```

* Update the command below with the `CODENAME`, and run the commands.

```
curl https://contrastsecurity.jfrog.io/contrastsecurity/api/gpg/key/public | sudo apt-key add -
echo "deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-public/ CODENAME contrast" | sudo tee /etc/apt/sources.list.d/contrast.list
```

* Once you've finished configuration, update your local package cache

```
sudo apt-get update
```

### RedHat/CentOS

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

