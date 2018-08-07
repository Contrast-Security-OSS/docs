<!--
title: "Java Agent Installation via Host Installer"
description: "Overview of Java agent installation with Host Installer"
tags: "installation Java agent linux Host Installer"
-->

## About Installation via System Package Managers

The Contrast Java agent may be installed using system package managers. Unlike the *jar* file you can download from the Contrast UI, the Contrast Java agent *jar* installed by system package managers isn't preconfigured with connection parameters; as a result, you must configure the Java agent using a [configuration file](installation-javaconfig.html).

### The Exec Helper package 

Some System Administrators may also want install the optional Contrast Java agent Exec Helper package, which configures the system to always enable Contrast whenever you execute `java`. Instead of a typical Contrast installation, which requires users to configure their Java services to include the Contrast Java agent, the `contrast-java-agent-exec-helper` package intercepts all new `java` processes, and automatically configures the process to use Contrast. 

This option is ideal for some scenarios such that Contrast needs to support legacy infrastructure in which Java application server configuration isn't well understood. But, in most scenarios, administrators desire more granular control over their Contrast configurations.

## Ubuntu-Based Systems

To install the Java agent from Contrast's Debian repository, you must start by configuring your system to Contrast's distribution-agnostic Debian repository.

```
curl https://contrastsecurity.jfrog.io/contrastsecurity/api/gpg/key/public | sudo apt-key add -
echo "deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-staging/ all contrast" | sudo tee /etc/apt/sources.list.d/contrast-staging.list
```

You may then install the Contrast Java agent.

```
sudo apt-get update && sudo apt- get install `contrast-java-agent`
```

Finally, you must edit */etc/contrast/contrast-java-config.yaml* to configure Contrast Java agent to connect to the Contrast application. <!-- (See the YAML [Configuration doc](_________) for more info.) -->


### Install the Exec Helper package 

The Exec Helper for the Contrast Java agent supports Ubuntu LTS distributions Trusty, Xenial and Bionic. Before you install the package, use the following command to verify that you have already installed the Contrast Java agent. If it isn't installed, follow instructions above to install and configure the `contrast-java-agent` package. 

```
dpkg -s contrast-java-agent
```

To install the Exec Helper from Contrast's Debian repository, configure your system to use the repository tailored for your Ubuntu LTS distribution.

```
curl https://contrastsecurity.jfrog.io/contrastsecurity/api/gpg/key/public | sudo apt-key add -
echo "deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-staging/ $(bash -c '. /etc/lsb-release && echo $DISTRIB_CODENAME') contrast" | sudo tee /etc/apt/sources.list.d/contrast-staging.list
```

You may then install the `contrast-java-agent-exec-helper` package.

```
sudo apt-get update && sudo apt-get install contrast-java-agent-exec-helper
```

> **Note:** The `contrast-java-agent-exec-helper` package expects to find the Contrast Java agent at */opt/contrast/contrast.jar*, where the `contrast-java-agent` packages installs it. If the Contrast *jar* file has a different path, use environment variable `CONTRAST_JAVA_AGENT_PATH` to configure the `contrast-java-agent-exec-helper`.


## Red Hat-Based Systems

This option is available for Red Hat Enterprise Linux (RHEL) and CentOS versions 5, 6 and 7.

To install Contrast Java agent from Contrast's Yum repository, start by configuring your system to use the repository.

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

You may then install the Contrast Java agent.

```
yum install contrast-java-agent
```

Edit */etc/contrast/contrast-java-config.yaml* to configure Contrast Java agent to connect to the Contrast application. <!-- (see
[Configuration](./installation-javaconfig.html) -->

### Install the Exec Helper package 

Before you install the package, use the following command to verify that you have already installed the Contrast Java agent. If it isn't installed, follow instructions above to install and configure the `contrast-java-agent` package. 

```
yum list installed contrast-java-agent
```

As you already configured your system to use the Contrast Yum repository when you installed the `contrast-java-agent` package, simply install the `contrast-java-agent-exec-helper` package.

```
yum install contrast-java-agent-exec-helper
```

> **Note:** The `contrast-java-agent-exec-helper` package expects to find the Contrast Java agent at */opt/contrast/contrast.jar*, where the `contrast-java-agent` packages installs it. If the Contrast *jar* file has a different path, use environment variable `CONTRAST_JAVA_AGENT_PATH` to configure the `contrast-java-agent-exec-helper`.


## Remove the Agent

If you need to uninstall the Java agent, use the appropriate command for each package. 

* To remove the `contrast-java-agent` package, run `apt-get remove contrast-java-agent`. 

* To remove the `contrast-java-agent-exec-helper` package, run `apt-get remove contrast-java-agent-exec-helper`. 



