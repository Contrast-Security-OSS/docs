<!--
title: "Installing the Crawler Micro-Service"
description: "Guidelines for installing and configuring the Crawler Micro-Service"
tags: "crawler installation Microservice sizing fontconfig PhantomJS"
-->

## Getting Started
For more information about the Contrast Crawler Micro-Service [click here](admin_crawlconfig.html#overview).

## System Requirements
Please see TeamServer and Crawler [Sizing Recommendations](admin_tsinstall.html#size). The Crawler specification can be found via the C1 configuration option.
* Micro-service
 * The recommended sizing for crawler instances is 2 CPUs and 2GB RAM with 1GB disk space that's dedicated for temporary crawler record storage during execution. The minimum is 1 CPU and 2GB RAM.
 * Oracle JDK/JRE 7+
 * For Linux platforms, installation of the fontconfig library and required fonts for your web applications
* TeamServer
 * At least 1GB of disk space dedicated for the Crawler records. More space is needed depending on the size of your Web application and the number of historical records archived.

## Installing the Crawler Micro-Service
Crawling can take significant amount of CPU time and JVM heap for an extended period. To avoid exhausting TeamServer's server resource, Contrast's crawl feature requires deployment of a micro-service that executes crawling outside the TeamServer's JVM or physical/virtual machine. Multiple micro-service instances can be deployed in order to process more than one scheduled crawl executions simultaneously. It is recommended to start with a single Crawler installation until additional capacity and testing resources are needed.
 
* Provision a crawler micro-service server (i.e. Linux or Windows 64-bit). Note this can be a virtual server or bare metal server. It is recommended to run on a different server from TeamServer.
* Linux deployments should verify installation of the Fontconfig library and fonts that display the characters on the target web application. Refer to the "Installing fontconfig library" section if the library is not installed. Fontconfig is a library used to configure and customize font access. Run the command below to determine whether the Fontconfig library has been installed.

````
ldconfig -p | grep fontconfig
````

* Download the latest version of the Crawler installation binary from [Contrast's Hub](https://hub.contrastsecurity.com/)
* Run the installer and follow the installation wizard. The installation defaults should be suitable.
* The Super admin username is typically: contrast_superadmin@yourdomain.com
* The Api Key, as well as the Service Key are located in the Super Admin api screen
* Log in as super admin.
* Click settings in the top nav bar.
* Click Rest Api on left nav bar.
* Start service

<a href="assets/images/KB2-l01_2.png" rel="lightbox" title="Service &amp; API Keys"><img class="thumbnail" src="assets/images/KB2-l01_2.png"/></a>

* Linux: sudo /etc/init.d/contrast-crawler start
* Windows: Start contrast-crawler service via Services window
* Verify that the micro-service is running in the **TeamServer Admin portal > Settings > Crawler**

## Installing SSL Certificate
Please make sure that the appropriate SSL certificate is installed on the JRE when Crawler is configured to communicate to TeamServer over HTTPS.

## Installing Fontconfig library
See examples of installing fontconfig library for Ubuntu and CentOS below.

If the crawl record screenshots contain fonts that are not readable like below, you need to install proper fonts that can display the characters your web application presents. This is often related to foreign language characters that are not installed on the OS by default.

<a href="assets/images/KB2-l01_3.png" rel="lightbox" title="Unreadable Fonts"><img class="thumbnail" src="assets/images/KB2-l01_3.png"/></a>

## Ubuntu and Debian

````
# Install with apt-get
sudo apt-get install -y libfontconfig
 
# Install with dpkg
wget https://mirror.hmc.edu/debian/pool/main/f/fontconfig/fontconfig-config_2.11.0-6.3_all.deb -nv
wget https://mirrors.mediatemple.net/debian/pool/main/f/fonts-dejavu/fonts-dejavu-core_2.34-1_all.deb -nv
wget https://mirrors.mediatemple.net/debian/pool/main/f/fontconfig/libfontconfig1_2.11.0-6.3_amd64.deb -nv
sudo dpkg -i *.deb
````

## CentOS or RHL

````
# Install with yum
yum -y install fontconfig
# An example for installing a font package
yum -y install urw-fonts
 
# Install with RPM
wget ftp://mirror.switch.ch/pool/4/mirror/scientificlinux/7.0/x86_64/os/Packages/fontconfig-2.10.95-7.el7.x86_64.rpm -nv
wget ftp://mirror.switch.ch/pool/4/mirror/scientificlinux/7.0/x86_64/os/Packages/fontpackages-filesystem-1.44-8.el7.noarch.rpm -nv
sudo rpm -ivh *.rpm
````
