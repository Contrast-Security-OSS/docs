<!--
title: "Configuring Contrast as a Distributed Deployment"
description: "Instructions for configuring TeamServer in a distributed fashion by separating the application/container from the database."
tags: "EOP distributed configuration database scalability"
-->

## Who Should Read this Document
This guide is for enterprise on premise (EOP) administrators, who want to move away from the bundled, self-contained Contrast configuration in favor of a distributed configuration in which the database and application server are deployed on separate servers. Most customers will not have this need of configuring a distributed TeamServer. Customers who fit this profile are likely running with 100 or more connected agents and are seeking greater performance and scalability. 

## About Distributing the Contrast Configuration
EOP customers typically install and update the Contrast TeamServer by downloading the installer/updater artifact from the [Contrast Hub](https://hub.contrastsecurity.com). Instructions can be found [here](admin_tsinstall.html#install).

Some customers have a need to run in a more advanced configuration. We've written this document for those customers opting for a slightly more advanced configuration that will require additional administration and management by an EOP administrator. We have simplified the configuration of TeamServer for EOP administrators to run their own installations of Tomcat, Java and MySQL, as long as they conform to our version requirements.

This documentation will guide you through the setup and configuration of additional software but please be aware you will be responsible for the monitoring and durability of additional software.  That being said, if you are familiar with installing and administering Tomcat and MySQL the process is straightforward to setup and maintain.

Also, check back often for updates. As always please feel free to submit a Pull Request if you have suggestions or find any instructions incorrect.   

## Before You Get Started
Before you get started with configuring a distributed TeamServer, make sure to read through the entire document. We've made several assumptions, which we list below. Make sure these assumptions hold true so that you don't run into an issue with your TeamServer. The following assumptions have been made prior to distributing the configuration:

* Previous successful installation of Contrast EOP with a distributed [database configuration](TODO LINK)
* Successful backup(s) and exports of the TeamServer database.

## Collect Configuration from Current TeamServer
In the example below, Contrast has been installed at path `/usr/local/contrast`.  You will need to gather the following:
* data/conf/
* data/esapi/
* data/.contrast
* data/.initialized
* data/contrast.lic

This code will compress necessary artifacts into your user's home directory.
```
$ cd /usr/local/contrast
$ tar -czvf ~/ctdc.tar.gz data/conf data/contrast.lic data/esapi/ data/.initialized data/.contrast
```

## Running The Installation
It is possible to run the installation as a regular user, however we recommend installation to your system as a *privileged* user.  This means if you are on Windows, you can right-click the installer and select **Run As Administrator** and if you are on Linux, use the ```sudo``` command to launch the installer.

Once you have launched the installer, you will be presented with several questions. Please select the "Application Server Only" once prompted about a "Full Install" or a "Application Server Only". Provide the installer the compressed file you created in the previous section and follow the onscreen steps.

> **NOTE:** Pay particularly close attention to the value used for the TeamServer URL. This is the URL that client agents will use to communicate back to the TeamServer. We make our best attempt to determine the hostname and pre-populate this value, but if the provided hostname is not resolvable by clients on the network, they won't be able to communicate back to the server.

After the installation is complete, the TeamServer will perform its initial configuration and can take up to 10 minutes to fully start up. You can check the status of start up by watching `server.log` and `contrast.log` in `/usr/local/contrast/logs`. Once the server has started successfully you will see something similar to the following in `server.log`:
```
260916 20.18.25,837 {} {} {} INFO  (Server.java:303) Contrast TeamServer Ready - Took 119305ms
```
