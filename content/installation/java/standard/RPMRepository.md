<!--
title: "Download the Java Agent from our RPM Repository"
description: "Downloading the Java agent from our RPM Repository"
tags: "installation Java agent download redhat centos yum rpm"
-->

Red Hat Enterprise Linux (RHEL) and CentOS users may install the Contrast Java agent using the Contrast RPM repository.

* Use the following commands to configure your system to retrieve packages from the Contrast RPM repository:

```console
OSREL=$(rpmquery -E "%{rhel}")
sudo -E tee /etc/yum.repos.d/contrast.repo << EOF
[contrast]
name=contrast repo
baseurl=https://pkg.contrastsecurity.com/rpm-public/centos-$OSREL/
gpgcheck=0
enabled=1
EOF
```

* Once you've finished configuration, install the Contrast Java agent:

```console
sudo yum install contrast-java-agent
```

* The Contrast Java agent jar is now installed at `/opt/contrast/contrast-agent.jar`.

Although the *jar* file you can [download from the Contrast UI](installation-javastandard.html#contrast-ui) is preconfigured with connection parameters, you must provide Contrast connection parameters using the agent [configuration properties](installation-javaconfig.html) when using the *contrast-agent.jar* from the Contrast RPM repository.
