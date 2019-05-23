To set up the yum repository for RHEL/CentOS, create the file named
/etc/yum.repos.d/contrast.repo with the following contents:

    [contrast]
    name=contrast repo
    baseurl=https://contrastsecurity.jfrog.io/contrastsecurity/rpm-public/centos-OSRELEASE/
    gpgcheck=0
    enabled=1

Replace “OSRELEASE” with "5", “6”, or “7” for 5.x, 6.x, or 7.x versions
respectively. Our centos package repository can serve RHEL clients too, so use
that same OS name if if you are on a RHEL distro.

Once the Contrast repository is configured as above, the Contrast agent can be installed via:

    sudo yum install contrast-java-agent


