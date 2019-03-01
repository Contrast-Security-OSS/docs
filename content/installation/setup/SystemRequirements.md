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
| **Operating System** | <ul><li>Microsoft Windows 2012 R2</li> <li>Ubuntu 12.04 LTS</li><li>Centos 6</li></ul> | <ul><li>Microsoft Windows 2012 R2  </li><li>  Ubuntu 14.04 LTS </li><li> Centos 7</li></ul>| Any modern Operating System **should** run Contrast. Contrast officially supports the following: <ul><li>Ubuntu Linux </li><li> Debian Linux </li><li> Redhat Enterprise Linux </li><li> Centos Linux </li><li> Windows 2012 R2 </li> |
| **Java** | 1.8 | 1.8 | |
| **MySQL** | 5.7 | 5.7.23 | Contrast currently runs 5.7.23 in AWS. Contrast doesn't anticipate any issues if you run a different build of MySQL 5.7; if you do experience an issue, please open a Support ticket.  MySQL versions 8 and higher are currently **not** supported |

## MySQL Shared Libraries
To run Contrast, you must preconfigure your base operating system with a shared library for running MySQL. Depending on which operating system you deployed with Contrast, follow the installation options below:

Customers running **Centos** or **RHL**:

````
[contrast@myserver ~]# yum install libaio 
````

Customers running **Ubuntu** or **Debian**:

````
[contrast@myserver ~]# apt-get install libaio1 libaio-dev
````

Customers running **Windows** will need [Visual C++ Redistributable Packages for Visual Studio 2013](https://www.microsoft.com/en-us/download/details.aspx?id=40784). MySQL added this as a requirement as part of the [MySQL 5.7.18 release](https://dev.mysql.com/doc/relnotes/mysql/5.7/en/news-5-7-18.html#mysqld-5-7-18-packaging).
