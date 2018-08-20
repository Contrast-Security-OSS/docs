<!--
title: "Java Agent Installation via Package Managers"
description: "Overview of Java agent installation with package managers"
tags: "installation Java agent linux package managers"
-->

## About Installation with System Package Managers

The Contrast Java agent may be installed on Linux using system package managers. Unlike the *jar* file you can download from the Contrast UI, the Contrast Java agent *jar* installed by system package managers isn't preconfigured with connection parameters; instead, you must configure the Java agent using a *yaml* configuration file. <!-- Add YAML [Configuration doc](_________) -->

### The Exec Helper package 

Some System Administrators may also want install the optional Exec Helper package for the Contrast Java agent, which configures the system to always enable Contrast whenever you execute `java`. Instead of a typical Contrast installation that requires users to configure their Java services to include the Contrast Java agent, the `contrast-java-agent-exec-helper` package intercepts all new `java` processes, and automatically configures the process to use Contrast. 

This option is ideal for some scenarios in which Contrast must support legacy infrastructure but your Java application server configuration isn't well understood. However, in most scenarios, administrators want more granular control over their Contrast configurations.

## Ubuntu-Based Systems

### Install the Java agent 

To install the Contrast Java agent for Ubuntu-based systems, complete the following steps. 

* Configure your system to Contrast's distribution agnostic Debian repository. 

```
curl https://contrastsecurity.jfrog.io/contrastsecurity/api/gpg/key/public | sudo apt-key add -
echo "deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-staging/ all contrast" | sudo tee /etc/apt/sources.list.d/contrast-staging.list
```

* Once you've finished configuration, install the Contrast Java agent.

```
sudo apt-get update && sudo apt-get install contrast-java-agent
```

* Edit the */etc/contrast/contrast-java-config.yaml* file to configure Contrast Java agent to connect to the Contrast application. <!-- (Go to the YAML [Configuration doc](_________) for more info.) -->

### Next steps

At this stage, you may either complete the agent installation process by follow the instructions for the [Java application container](installation-javainstall.html) of your choice, or continue on to **Add the Exec Helper** package. 

### Add the Exec Helper  

The Exec Helper package for the Contrast Java agent supports Ubuntu LTS distributions Trusty, Xenial and Bionic. Complete the following steps to install the package. 

* Before you install the package, use the following command to verify that you have already installed the Contrast Java agent. 

```
dpkg -s contrast-java-agent
```

* If it isn't installed, follow the instructions in the **Ubuntu-Based Systems** section to install and configure the `contrast-java-agent` package. 

* To install the Exec Helper from Contrast's Debian repository, configure your system to use the repository tailored for your Ubuntu LTS distribution.

```
curl https://contrastsecurity.jfrog.io/contrastsecurity/api/gpg/key/public | sudo apt-key add -
echo "deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-staging/ $(bash -c '. /etc/lsb-release && echo $DISTRIB_CODENAME') contrast" | sudo tee /etc/apt/sources.list.d/contrast-staging.list
```

* Once you've finished configuration, install the `contrast-java-agent-exec-helper` package.

```
sudo apt-get update && sudo apt-get install contrast-java-agent-exec-helper
```

* Verify that the Contrast Java Exec Helper is installed by executing `java` and confirming that Contrast starts by observing console messages.

```
$ bash -c "java -Dcontrast.stdout=true -version 2>1 | grep Contrast | head -n 1"
[Contrast] Wed Aug 15 17:37:23 UTC 2018 No TeamServer configuration detected. Agent will only be reporting to local listeners (e.g., Eclipse Plugin).
```

* The Exec Helper affects all new shells, as indicated by the `bash -c` in the verification command. Consequently, it will be present in your current shell. Reload your shell to enable the Exec Helper. Restart any `java` services to enable Contrast for those services.

> **Note:** The Exec Helper package expects to find the Contrast Java agent at */opt/contrast/contrast.jar*, where the `contrast-java-agent` package installs it. If the Contrast *jar* file has a different path, use environment variable `CONTRAST_JAVA_AGENT_PATH` to configure `contrast-java-agent-exec-helper`.

#### Logging 

The Exec Helper logs messages to the host's Syslog service using the identifier "Contrast". The Exec Helper uses the "user.warn" and "user.debug" Syslog facility and level, respectively. Use `journalctl` to view the messages (i.e., `journalctl -t Contrast`). Traditional init.v systems, including Ubuntu 14.04, store Syslog messages in the file */var/log/messages* by default instead of the systemd Journal.


## Red Hat-Based Systems

### Install the Java agent 

Complete the following steps to install the Contrast Java agent for Red Hat Enterprise Linux (RHEL) and CentOS versions 5, 6 and 7.

* To install Java agent from Contrast's Yum repository, configure your system to use the repository.

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

* Once you've finished configuration, install the Contrast Java agent.

```
yum install contrast-java-agent
```

* Edit the */etc/contrast/contrast-java-config.yaml* file to configure Contrast Java agent to connect to the Contrast application. <!-- (Go to the YAML [Configuration doc](_________) for more info.) -->

### Next steps

At this stage, you may either complete the agent installation process by follow the instructions for the [Java application container](installation-javainstall.html) of your choice, or continue on to **Add the Exec Helper** package. 

### Add the Exec Helper  

Complete the following steps to install the Exec Helper package. 

* Before you install the package, use the following command to verify that you have already installed the Contrast Java agent.

```
yum list installed contrast-java-agent
```

* If it isn't installed, follow the instructions in the **Red Hat-Based Systems** section to install and configure the `contrast-java-agent` package. 

* As you already configured your system to use the Contrast Yum repository when you installed the `contrast-java-agent` package, you can install the `contrast-java-agent-exec-helper` package.

```
yum install contrast-java-agent-exec-helper
```

* Verify that the Exec Helper is working by executing `java` and confirming that Contrast starts by observing console messages.

```
$ bash -c "java -Dcontrast.stdout=true -version 2>1 | grep Contrast | head -n 1"
[Contrast] Wed Aug 15 17:37:23 UTC 2018 No TeamServer configuration detected. Agent will only be reporting to local listeners (e.g., Eclipse Plugin).
```

* The Contrast Java agent Exec Helper affects all new shells, as indicated by the `bash -c` in the verification command. Consequently, it will be present in your current shell. Reload your shell to enable the Contrast Java agent Exec Helper. Restart any `java` services to enable Contrast for those services.

> **Note:** The Exec Helper package expects to find the Contrast Java agent at */opt/contrast/contrast.jar*, where the `contrast-java-agent` packages installs it. If the Contrast *jar* file has a different path, use environment variable `CONTRAST_JAVA_AGENT_PATH` to configure the `contrast-java-agent-exec-helper`.

#### Logging

The Exec Helper logs messages to the host's Syslog service using the identifier "Contrast". The Exec Helper uses the "user.warn" and "user.debug" Syslog facility and level, respectively. Use `journalctl` to view the messages (i.e., `journalctl -t Contrast`). Traditional init.v systems, including EL6, store Syslog messages in the file */var/log/messages* by default instead of the systemd Journal.

## Remove the Agent

If you need to uninstall the Java agent, use the appropriate command for each package. 

* To remove the `contrast-java-agent` package, run `apt-get remove contrast-java-agent`. 

* To remove the `contrast-java-agent-exec-helper` package, run `apt-get remove contrast-java-agent-exec-helper`. 

## Learn More 

If you're experiencing issues with the Exec Helper package after installation, go to the [troubleshooting article](troubleshooting-javainstall.html#java-exec) for more help with startup, logging and libraries. 
