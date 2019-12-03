<!--
title: "Download the Java Agent from the Contrast Debian Repository"
description: "Downloading the Java agent from our Debian Repository"
tags: "installation Java agent download debian ubuntu apt"
-->

Debian Linux users may install the Contrast Java agent using the Contrast Debian repository.

* Use the following commands to configure your system to retrieve packages:

```console
curl https://pkg.contrastsecurity.com/api/gpg/key/public | sudo apt-key add -
echo "deb https://pkg.contrastsecurity.com/debian-public/ all contrast" | sudo tee /etc/apt/sources.list.d/contrast-all.list
```

* Once you've finished configuration, install the Contrast Java agent:

```console
sudo apt-get update && sudo apt-get install contrast-java-agent
```

* The Contrast Java agent jar is now installed at `/opt/contrast/contrast-agent.jar`.

Although the *jar* file you can [download from the Contrast UI](installation-javastandard.html#contrast-ui) is preconfigured with connection parameters, you must provide Contrast connection parameters using the agent [configuration properties](installation-javaconfig.html) when using the *contrast-agent.jar* from the Debian repository.
