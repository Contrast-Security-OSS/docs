<!--
title: "Install the Java Agent on a Red Hat Host"
description: "How to install the Java agent across all Java processes on a Red Hat host"
tags: "installation Java agent linux package red hat centos rhel exec-helper yum dnf host"
-->

## About Host Installation for RHEL

Red Hat Enterprise Linux (RHEL) and CentOS users may install the Contrast Java agent at the host level using the `contrast-java-agent-exec-helper` package. The Exec Helper configures the RHEL or CentOS host to include the Contrast Java agent on all Java processes on the host.

Instead of a typical Contrast installation that requires users to configure their Java services to include the Contrast Java agent, the `contrast-java-agent-exec-helper` package intercepts all new `java` processes, and automatically configures the process to use Contrast. This option is ideal for some scenarios in which Contrast must support legacy infrastructure but your Java application server configuration isn't well understood. However, in most scenarios, administrators want more granular control over their Contrast configurations.

## Install the Agent with the Exec Helper Package

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

* Once you've finished configuration, install the `contrast-java-agent` and `contrast-java-agent-exec-helper` packages:

```console
sudo yum install contrast-java-agent contrast-java-agent-exec-helper
```

Although the *jar* file you can [download from the Contrast UI](installation-javastandard.html#contrast-ui) is preconfigured with connection parameters, you must provide Contrast connection parameters using the agent [configuration properties](installation-javaconfig.html) when using the *contrast-agent.jar* from the Contrast RPM repository.

* Verify that the Exec Helper is working by executing `java` and confirming that Contrast starts by observing console messages.

```
$ bash -c "java -Dcontrast.stdout=true -version 2>1 | grep Contrast | head -n 1"
[Contrast] Wed Aug 15 17:37:23 UTC 2018 No TeamServer configuration detected. Agent will only be reporting to local listeners (e.g., Eclipse Plugin).
```

* The Contrast Java agent Exec Helper affects all new shells, as indicated by the `bash -c` in the verification command. Consequently, it will not be present in your current shell. Reload your shell to enable the Contrast Java agent Exec Helper. Restart any `java` services to enable Contrast for those services.

> **Note:** The Exec Helper package expects to find the Contrast Java agent at */opt/contrast/contrast.jar*, where the `contrast-java-agent` packages installs it. If the Contrast *jar* file has a different path, use environment variable `CONTRAST_JAVA_AGENT_PATH` to configure the `contrast-java-agent-exec-helper`.

### Logging

The Exec Helper logs messages to the host's Syslog service using the identifier "Contrast". The Exec Helper uses the "user.warn" and "user.debug" Syslog facility and level, respectively. Use `journalctl` to view the messages (i.e., `journalctl -t Contrast`). Traditional init.v systems, including EL6, store Syslog messages in the file */var/log/messages* by default instead of the systemd Journal.

## Uninstall the Agent with the Exec Helper Package

To uninstall the agent from your system, use the following command:

```console
sudo yum remove contrast-java-agent contrast-java-agent-exec-helper
```

## Learn More

If you're experiencing issues with the Exec Helper package after installation, go to the [troubleshooting article](troubleshooting-javainstall.html#java-exec) for more help with startup, logging and libraries.
