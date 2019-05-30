<!--
title: "Download the Java Agent from our RPM Repository"
description: "Downloading the Java agent from our RPM Repository"
tags: "installation Java agent download debian ubuntu apt"
-->

RHEL and CentOS users may install the Contrast Java agent using our RPM
repository:

Configure your system to retrieve packages from the Contrast RPM repository

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

Once you've finished configuration, install the Contrast Java agent

```console
sudo yum install contrast-java-agent
```

Although the *jar* file you can [download from the Contrast UI](installation-javastandard.html#contrast-ui) is preconfigured with connection parameters, you must provide Contrast connection parameters using the agent [configuration properties](installation-javaconfig.html) when using the *contrast-agent.jar* from Maven Central.
