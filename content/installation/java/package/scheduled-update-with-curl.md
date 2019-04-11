<!--
title: "Schedule Java agent Updates with curl"
description: "How to use cron and curl to schedule Java agent updates from Maven Central"
tags: "java agent deployment maven central cron curl auto-update update"
-->

Some users prefer to keep their Contrast Java agent software up to date with the latest version automatically. Linux users can schedule Java agent updates from Maven Central using common Linux tools `cron` and `curl`. This example demonstrates configuring scheduled Java agent job on an Ubuntu 18.04 Linux host.

If you prefer to follow along with this tutorial, you can use [Vagrant](https://www.vagrantup.com/) to create a new Ubuntu 18.04 virtual machine.

```console
vagrant init ubuntu/bionic64
```

```console
vagrant up
```

```console
vagrant ssh
```

## Step 1 - Install Contrast

Create a shared directory for Contrast software

```console
sudo mkdir -p /opt/contrast
```

Create a script for installing the latest Java agent in the `/etc/cron.daily` directory. Scripts in this directory will execute once daily, so every day the host will update the latest Java agent.

Using `tee` to create this script, press `CTRL+D` when you've finished typing all lines of the script

```console
$ sudo tee -a /etc/cron.daily/install-latest-contrast-agent > /dev/null
#!/bin/bash -u

CONTRAST_DIRECTORY=/opt/contrast
CONTRAST_FILE_NAME=contrast-agent.jar

curl --fail --silent --location "https://repository.sonatype.org/service/local/artifact/maven/redirect?r=central-proxy&g=com.contrastsecurity&a=contrast-agent&v=LATEST" -o /tmp/$CONTRAST_FILE_NAME
if [ $? -ne 0 ]; then
    echo "Failed to download Contrast Java agent" >&2
    exit 1
fi
mv /tmp/$CONTRAST_FILE_NAME $CONTRAST_DIRECTORY/$CONTRAST_FILE_NAME
```

Set the execute bit on the new script file

```console
sudo chmod +x /etc/cron.daily/install-latest-contrast-agent
```

Test the script by executing it then verifying that the file exists using `stat`

```console
$ sudo /etc/cron.daily/install-latest-contrast-agent
$ stat /opt/contrast/contrast-agent.jar
stat /opt/contrast/contrast-agent.jar
  File: /opt/contrast/contrast-agent.jar
  Size: 10568283        Blocks: 20648      IO Block: 4096   regular file
Device: 801h/2049d      Inode: 256034      Links: 1
Access: (0644/-rw-r--r--)  Uid: (    0/    root)   Gid: (    0/    root)
Access: 2019-04-11 02:02:01.265775928 +0000
Modify: 2019-04-11 02:24:47.849796936 +0000
Change: 2019-04-11 02:24:47.849796936 +0000
 Birth: -
```

## Step 2 - Configure Contrast

As in this example, when Contrast is installed on a Linux host, users typically want Contrast enabled web applications on the host to share basic configuration parameters such as those required for connecting to Contrast UI. By convention, Contrast will look for configuratoin in a YAML file at path `/etc/contrast/java/contrast_securtiy.yaml` on Linux hosts.

First, create the `/etc/contrast/java` directory.

```console
sudo mkdir -p /etc/contrast/java
```

Next, obtain the following four Contrast UI connection parameters from Contrast UI:

1. Contrast URL
1. Your Contrast API key
1. The agent username for your Contrast organization
1. The service key for your Contrast organization's agent user

The Contrast URL is `https://app.contrastsecurity.com/Contrast` or the URL of your on-premises or private cloud instance. The other three properties can be obtained from the Contrast UI in the **API** section of the **Organization Settings** page.

Using `tee` to create the config file, press `CTRL+D` when you've finished typing all lines of the configuration file. Replace `<contrast_url>`, `<your_api_key>`, `<agent_user_name>` and `<agent_user_service_key>` with the values you obtained from the Contrast UI.

```console
$ sudo tee -a /etc/contrast/java/contrast_securtiy.yaml > /dev/null
api:
  url: <contrast_url>
  api_key: <your_api_key>
  user_name: <agent_user_name>
  service_key: <agent_user_service_key>
```

## Step 3 - Verify Contrast Installation

Verify that Contrast is installed and properly configured by running a diagnostic test. The host will need Java installed to execute the diagnostic test.

```console
sudo apt install --yes openjdk-11-jre-headless
```

Finally, execute the Java agent's diagnostic test to verify that the agent is installed correctly and can communicate with Contrast UI using the configuration parameters from `/etc/contrast/java/contrast_security.yaml`.

```console
$ java -jar /opt/contrast/contrast-agent.jar diagnostic
*** Contrast Agent (version 3.6.3-SNAPSHOT)
[!] Attempting to connect to the Contrast TeamServer at https://apptwo.contrastsecurity.com/Contrast (No proxy).
[!] Attempting to resolve domain: apptwo.contrastsecurity.com
        Resolved domain apptwo.contrastsecurity.com to IP Address 52.200.215.12
[+] Client successfully resolved the DNS of the Contrast TeamServer. No proxy needed.
[!] Issuing HTTP request to Contrast...
        Executing request...
        Reading response [200]
        Response size = 4209
        Snippet: <!doctype html> <!--[if gt IE 8]><!--> <html class="no-js" i
[+] Client can connect directly to the Contrast TeamServer. No proxy needed.
```
