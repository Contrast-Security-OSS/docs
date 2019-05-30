<!--
title: "Download the Java Agent from our Debian Repository"
description: "Downloading the Java agent from our Debian Repository"
tags: "installation Java agent download redhat centos yum rpm"
-->

Debian Linux users may install the Contrast Java agent using our Debian repository.

Configure your system to retrieve packages from the Contrast Debian repository

```console
curl https://pkg.contrastsecurity.com/api/gpg/key/public | sudo apt-key add -
echo "deb https://pkg.contrastsecurity.com/debian-public/ all contrast" | sudo tee /etc/apt/sources.list.d/contrast-all.list
```

Once you've finished configuration, install the Contrast Java agent

```console
sudo apt-get update && sudo apt-get install contrast-java-agent
```

Although the *jar* file you can [download from the Contrast UI](installation-javastandard.html#contrast-ui) is preconfigured with connection parameters, you must provide Contrast connection parameters using the agent [configuration properties](installation-javaconfig.html) when using the *contrast-agent.jar* from Maven Central.
