<!--
title: "Schedule Java agent Updates with curl"
description: "How to use cron and curl to schedule Java agent updates from Maven Central"
tags: "java agent deployment maven central cron curl auto-update update"
-->

## About Updates with Maven Central 

Some users like to automatically update their Contrast Java agent software to the latest version. Linux users can schedule Java agent updates from Maven Central using common Linux tools `cron` and `curl`. The following instructions show you how to configure a scheduled Java agent job on an Ubuntu 18.04 Linux host.

> **Note:** Use your preferred editor to create a file with the following contents. The examples provided use `tee` to create the file. 

## Before You Start

If you want to perform each step as you follow along with this guide, you can use [Vagrant](https://www.vagrantup.com/) and [VirtualBox](https://www.virtualbox.org/wiki/Downloads) to create a new Ubuntu 18.04 virtual machine: 

```console
vagrant init ubuntu/bionic64
```

```console
vagrant up
```

```console
vagrant ssh
```

## Step 1: Install Contrast

* Create a shared directory for Contrast software:

```console
sudo mkdir -p /opt/contrast
```

* Create a script for installing the latest Java agent in the */etc/cron.daily* directory. Scripts in this directory execute once daily; as a result, the host updates the latest Java agent each day.

* Use `tee` to create this script. Press `CTRL+D` when you've finished typing all the lines:

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

* Set the execute bit on the new script file:

```console
sudo chmod +x /etc/cron.daily/install-latest-contrast-agent
```

* To test the script, execute it and then verify that the file exists using `stat`:

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

## Step 2: Gather Contrast account information 

The Contrast agent requires some configuration to communicate with the Contrast UI. You'll need to obtain these [four properties](admin-orgsettings.html#apikey) from the Contrast UI:

* The Contrast URL
* Your Contrast API key
* The agent username for your Contrast organization
* The Service key for your Contrast organization's agent user

The Contrast URL is *https://app.contrastsecurity.com/Contrast*, or the URL of your on-premises or private cloud instance. You can find the Contrast URL, your API key and agent username by going to the **user menu > Organization Settings > API tab** in the Contrast UI. You can find your Service key using the link in the **API** tab, or by navigating to the **user menu > Your Account > My Keys section**. 

## Step 3: Configure Contrast

When Contrast is installed on a Linux host, users typically want Contrast-enabled web applications on the host to share basic configuration parameters, such as the ones required to connect to Contrast UI. By convention, Contrast look for configuration in a YAML file at path */etc/contrast/java/contrast_securtiy.yaml* on Linux hosts.

* Create the */etc/contrast/java* directory:

```console
sudo mkdir -p /etc/contrast/java
```

* Use `tee` to create the configuration file. Replace `<contrast_url>`, `<your_api_key>`, `<agent_user_name>` and `<agent_user_service_key>` with the values you obtained from the Contrast UI in the previous step:

```console
$ sudo tee -a /etc/contrast/java/contrast_securtiy.yaml > /dev/null
api:
  url: <contrast_url>
  api_key: <your_api_key>
  user_name: <agent_user_name>
  service_key: <agent_user_service_key>
```
* Press `CTRL+D` when you've finished typing all the lines.

## Step 4: Verify the installation

* Run a diagnostic test to verify that Contrast is installed and properly configured. The host must have Java installed to execute the diagnostic test:

```console
sudo apt install --yes openjdk-11-jre-headless
```

* Finally, execute the Java agent's diagnostic test to verify that the agent is installed correctly and can communicate with Contrast UI using the configuration parameters from */etc/contrast/java/contrast_security.yaml*:

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
