<!--
  title: "System Requirements",
  description: "Minimum system requirements for running the EOP TeamServer",
  tags: "setup EOP requirements installation sizing libraries libaio"
-->

## Prepare for the Installation
The Contrast application for Enterprise on Premises (EOP) includes a Tomcat servlet container, a MySQL database instance and an Oracle Hotspot Java Virtual Machine. All of these components are embedded within the installation binary and deployed to a single server as part of the Contrast architecture. You should prepare the following prior to installing the application:

* System with adequate compute and memory resources based on guidance from our [sizing recommendations](installation-setup.html#size)
* Adherence to the system requirements specified below
* Installation of the MySQL run-time libraries (Linux Only)

## System Requirements

| Category            | Minimum   | Recommended | Description |
| :------------------ | :-------- | :---------- | :---------- |
| **OS Architecture** | 64-bit | 64-bit | Due to memory requirements, the Contrast application can **only** run on 64-bit architectures. |
| **Operating System** | <ul><li>Microsoft Windows 2008 R2 64-bit</li> <li>Ubuntu 12.04 LTS</li><li>Centos 6</li></ul> | <ul><li>Microsoft Windows 2012 R2  </li><li>  Ubuntu 14.04 LTS </li><li> Centos 7</li></ul>| Any modern Operating System **should** run Contrast. Contrast officially supports the following: <ul><li>Ubuntu Linux </li><li> Debian Linux </li><li> Redhat Enterprise Linux </li><li> Centos Linux </li><li> Windows Server 2008 R2 64-bit </li><li> Windows 2012 R2 </li> |
| **Java** | 1.7.0_80  | 1.7.0_80 or greater | |
| **MySQL** | 5.6.28 | 5.6.33 | MySQL versions 5.7 and higher are currently **not** supported |

## MySQL Shared Libraries
To run Contrast, you must preconfigure your base operating system on Linux with a shared library for running MySQL. Depending on which flavor of Linux you deployed with Contrast, follow the installation options below:

Customers running **Centos** or **RHL**:

````
[contrast@myserver ~]# yum install libaio 
````

Customers running **Ubuntu** or **Debian**:

````
[contrast@myserver ~]# apt-get install libaio1 libaio-dev
````

