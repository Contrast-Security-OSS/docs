<!--
title: "Configuring TeamServer as a Distributed Deployment"
description: "Instructions for configuring TeamServer in a distributed fashion by separating the application/container from the database."
tags: "installation setup EOP distributed configuration database scalability"
-->

## Who Should Read this Document
This guide is for enterprise on premise (EOP) administrators, who want to move away from the bundled, self-contained TeamServer configuration in favor of a distributed configuration in which the database and application server are deployed on separate servers. Most customers will not have this need of configuring a distributed TeamServer. Customers who fit this profile are likely running with 100 or more connected agents and are seeking greater performance and scalability. 

## About Distributing the TeamServer Configuration
EOP customers typically install and update the Contrast TeamServer by downloading the installer/updater artifact from the [Contrast Hub](https://hub.contrastsecurity.com). This artifact is an executable file and includes all of the necessary software and components to install, upgrade, and run Contrast TeamServer.  The TeamServer is designed for all embedded components and storage to reside on a single server in a very basic, monolithic configuration.

Some customers have a need to run in a more advanced configuration. We've written this document for those customers opting for a slightly more advanced configuration that will require additional administration and management by an EOP administrator. We have simplified the configuration of TeamServer for EOP administrators to run their own installations of Tomcat, Java and MySQL, as long as they conform to our version requirements.

This documentation will guide you through the setup and configuration of additional software but please be aware you will be responsible for the monitoring and durability of additional software.  That being said, if you are familiar with installing and administering Tomcat and MySQL the process is straightforward to setup and maintain.

Also, check back often for updates. Feel free to submit a Pull Request if you have suggestions or find any instructions incorrect.  All code that we have shared here is also available in our GitHub [repo](https://github.com/Contrast-Security-OSS/ctdc).   

## Before You Get Started
Before you get started with configuring a distributed TeamServer, make sure to read through the entire document. We've made several assumptions, which we list below. Make sure these assumptions hold true so that you don't run into an issue with your TeamServer. The following assumptions have been made prior to distributing the configuration:

* Previous installation of TeamServer EOP
* Successful backup(s) and exports of the TeamServer database.
* Installation, configuration and administration of MySQL
* Installation, configuration and administration of Tomcat
* Installation, configuration and administration of Java

We are interested in your progress!  If you are planning to explore Contrast TeamServer Distributed Configuration (CTDC), please contact our [Technical Support Team](https://support.contrastsecurity.com).

## Simple As Two Steps
We have written documentation for deploying a distributed TeamServer in two simple steps:
* Step 1: Database (MySQL)
* Step 2: Application Server (Tomcat)

All documentation assumes that you have previously installed TeamServer using the provided installer artifact from Hub.  If you need to go back and set up TeamServer again [click here](installation-setupinstall.html#download).  

>**Note:** We've provided several code samples using an automation framework called [Ansible](https://www.ansible.com/). Feel free to use our code samples as a starting point for your own configuration. We are also big fans of Ubuntu, which we also use in our examples. We can assure you that the configuration runs on all of our supported platforms. You might have to make some slight changes to our scripts to run against other operating systems.

## Step 1: Separating the Database

With a few changes, it is possible to utilize an external MySQL database with your existing EOP installation.  MySQL is an open source database that runs on both Windows and Linux.  Here is a list of the steps that you will need to complete:

1. Install and Configure MySQL 5.6 on database server host.  We recommend 5.6.28.  
2. Create maintenance window for TeamServer downtime.
3. [Back up the embedded MySQL Database](installation-setup.html#setup-mysql)
4. [Restore the database](installation-setup.html#setup-mysql) to an external MySQL Database
5. Update the TeamServer configuration to utilize the new external database host.
6. Restart your TeamServer and end the maintenance window.

### Installation and Configuration of MySQL Server
We recommend running TeamServer with MySQL 5.6.28 but TeamServer will work with other versions of MySQL 5.6.x on Windows and Linux.  We recommend working with your Operations and/or Database team to ensure a secure and durable installation.  

Below (or [here](https://github.com/Contrast-Security-OSS/ctdc/blob/master/mysql.yml)) is a snippet of Ansible that you could use to install the latest MySQL 5.6 on Ubuntu 14.04.   

```
- hosts: mysql
  sudo: True
  tasks:
  - name: Add MySQL deb repo
    sudo: True
    apt_repository: repo='deb http://repo.mysql.com/apt/ubuntu/ trusty mysql-5.6' state=present

  - name: Accept gpg key
    sudo: True
    apt_key: data="\{{ lookup('file', 'mysql_pubkey.asc') }}" state=present

  - name: apt-get update
    sudo: True
    apt: update_cache=yes

  - name: install mysql packages
    sudo: True
    apt: pkg=\{{ item }} state=latest
    with_items:
      - mysql-server
      - mysql-client
      - python-mysqldb

  - name: Change bind_address = *
    replace: dest=/etc/mysql/my.cnf regexp='127\.0\.0\.1' replace='*'

  - name: Create remote user
    mysql_user: >
      login_user=root
      login_password=
      name=contrast
      host=%
      password=ChAnGeMe
      priv=*.*:ALL,GRANT
      state=present

  - name: Create schema 'contrast'
    mysql_db: name=contrast state=present

  - name: restart mysql
    service: name=mysql state=restarted
```

* The gpg keyfile and additional information can be downloaded from the MySQL documentation [here](http://dev.mysql.com/doc/refman/5.6/en/checking-gpg-signature.html)
* We change the bind address to "*" above but that is only for illustration.  We recommend binding your MySQL server to the IP of your application server.
* As with the bind address, we recommend creating a user and grants that offer access to only the contrast schema and limited to the host IP address or subnet.

### Taking a Backup of MySQL

See [Create a MySQL Backup](installation-setup.html#setup-mysql)

To back up your database, you can use the embedded tool with your EOP installation.  

```
$CONTRAST_HOME/bin/backup_db.sh
```

Please move the backup taken to the external MySQL database host and make a note of the path.

### Restore the Database on external host

Before you restore to your external database host, make sure that you have created your schema, user, and correct grants!    

Here is an example command to import a local MySQL backup:

```
$ mysql -u username –p database_name < /path/to/backup.sql
```

### Update the TeamServer Database Configuration
It is possible to edit your database configuration through the TeamServer SuperAdmin portal in a browser or using the properties editor if you prefer the command line. This obviously assumes the TeamServer is up and running. You will have to opt for the encrypted property editor if you have already shutdown the TeamServer for the maintenance window.  

*Either of these changes will require a restart of your TeamServer*  

#### SuperAdmin Portal
1. Log in to Contrast TeamServer
2. Assume SuperAdmin role
3. Click "System Settings" from the top right drop down menu.
4. Select "Database" from left hand menu.
5. Fill in the property values for your external database host.  *Make sure to adjust the port to match your external database.  For new installations, MySQL runs on 3306.*

#### Encrypted Property Editor
You will need to use the [encrypted property editor](installation-setupconfig.html#encrypt) to change your database properties to access your new host. Follow the instructions in the tool to update:
- jdbc.port
- jdbc.host
- jdbc.pass
- jdbc.url

```
vagrant@eop:~$ cd /usr/local/contrast/bin/
vagrant@eop:/usr/local/contrast/bin$ ./edit-properties -e ../data/esapi/ -f ../data/conf/database.properties
log4j:WARN No appenders could be found for logger (CipherTextSerializer).
log4j:WARN Please initialize the log4j system properly.
log4j:WARN See http://logging.apache.org/log4j/1.2/faq.html#noconfig for more info.
jdbc.type                                         : MYSQL
database.prod.dir                                 : /usr/local/contrast/data/db
jdbc.debug                                        : false
jdbc.pass                                         : fAf5hPAsPV
jdbc.schema                                       : contrast
jdbc.host                                         : eop
database.bk.time                                  : 4:0:0
jdbc.port                                         : 13306
database.bk.enabled                               : true
database.enabled                                  : true
jdbc.url                                          : jdbc:mysql://10.10.10.21:3306/contrast
jdbc.user                                         : contrast
database.bk.dir                                   : /usr/local/contrast/data/backups/db
jdbc.dialect                                      : com.aspectsecurity.contrast.teamserver.persistence.CustomMySQL5Dialect
jdbc.driver                                       : com.mysql.jdbc.Driver
```

Enter the name of the property to edit [q to Quit]:

### Restart TeamServer
This command will be slightly different if you have chosen the non-root installation.
```
$ sudo service contrast-server restart
```

At this point it will be helpful to tail the server logs.

```
$ tail -f $CONTRAST_HOME/logs/server.log
```

And then the application logs.
```
$ tail -f $CONTRAST_HOME/logs/contrast.log
```

If TeamServer starts successfully, you will see this message in the server.log:

```
190116 21.22.15,703 {} {} {} INFO  (ConnectionTester.java:50) Received code 200 from TeamServer
190116 21.22.15,707 {} {} {} INFO  (ConnectionTester.java:60) Server start has been verified
190116 21.22.15,709 {} {} {} INFO  (Server.java:319) Contrast TeamServer Ready - Took 208323ms
```

## Step 2: Application Server
Before you begin, it is important that you work with Contrast Support and have access to the TeamServer WAR file before beginning this process.  

If the DNS name of your installation is going to change, you will need to update `teamserver.url` in the `general.properties` file to reflect the new hostname.  This will also impact agents that have already been deployed.

Here is an outline of the steps it will take to migrate TeamServer to your own Tomcat instance:

1. Collect configuration and license from current TeamServer
2. Install Tomcat7 and Java on your new application server
3. Prepare and Configure application server
4. Restart Tomcat

Below (or [here](https://github.com/Contrast-Security-OSS/ctdc/blob/master/appserver.yml)) is a snippet of Ansible that you could use to install the latest versions of Tomcat 7 and Java 7 on Ubuntu 14.04.  We use Ubuntu and Ansible here as examples only.  This software will run on supported versions of Windows and Linux.

```
- hosts: appserver
  sudo: True
  vars:
    contrast_local_artifact_path: ~/Desktop/byo
    contrast_war: contrast-teamserver-3.2.4.war
    contrast_data_dir: /opt/contrast-data
    eop_config: contrastdata
    filename_extension: tar.gz
    java_opts: "-XX:+UseTLAB -XX:+UseCompressedOops -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:CMSFullGCsBeforeCompaction=1 -XX:+CMSParallelRemarkEnabled -XX:+PrintVMOptions -XX:+PrintCommandLineFlags -Xmx4096m -Xms4096m -server -XX:MaxPermSize=768m -Dcontrast.data.dir=\{{ contrast_data_dir }} -Dcontrast.home=\{{ contrast_data_dir }} -XX:+HeapDumpOnOutOfMemoryError -Xloggc:\{{ contrast_data_dir }}/gc.out"
  tasks:
  - name: Install Tomcat 7 Software
    apt: name=tomcat7 update_cache=yes state=present

  - name: add Java repository to sources
    action: shell add-apt-repository -y ppa:webupd8team/java

  - name: autoaccept license for Java
    action: shell echo oracle-java7-installer shared/accepted-oracle-license-v1-1 select true | sudo /usr/bin/debconf-set-selections

  - name: update apt package cache
    apt: update_cache=yes

  - name: install Java 7 from Oracle via apt
    apt: name=oracle-java7-installer state=latest install_recommends=yes

  - name: set Oracle Java 7 as default JVM
    apt: name=oracle-java7-set-default state=latest install_recommends=yes

  - name: Move local files to virtual machine
    copy: src=\{{ contrast_local_artifact_path }}/\{{ contrast_war }} dest=/opt/ mode=0655 backup=yes

  - name: Create contrast-data directory
    file: path=\{{ contrast_data_dir }} state=directory mode=0755 owner=tomcat7 group=tomcat7 recurse=yes

  - name: Unarchive configuration directory
    unarchive: copy=yes src=\{{ contrast_local_artifact_path}}/\{{ eop_config }}.\{{ filename_extension }} dest=\{{ contrast_data_dir }} owner=tomcat7 group=tomcat7

  - name: Establish Permissions for contrast-data directory
    file: path=\{{ contrast_data_dir }} state=directory mode=0755 owner=tomcat7 group=tomcat7 recurse=yes

  - name: Create symlink to WAR (very important that warname is "Contrast.war")
    file: >
      state=link
      src=/opt/\{{ contrast_war }}
      dest=/var/lib/tomcat7/webapps/Contrast.war
      owner=tomcat7
      group=tomcat7
      force=yes

  - name: Set JAVA_OPTS
    replace: >
      dest=/etc/default/tomcat7
      regexp='JAVA_OPTS="-Djava\.awt\.headless=true -Xmx128m -XX:\+UseConcMarkSweepGC"'
      replace='JAVA_OPTS="\{{ java_opts }}"'

  - name: Mark your license as pre-initialized
    file: path=\{{ contrast_data_dir }}/.initialized state=touch owner=tomcat7 group=tomcat7

  - name: Restart Tomcat 7
    service: name=tomcat7 state=restarted
```

### Collect Configuration from Current TeamServer
In the example below, Contrast has been installed at path `/usr/local/contrast`.  You will need to gather the following:
* data/conf/
* data/esapi/
* data/.contrast
* data/.initialized
* data/cache/
* data/contrast.lic
* webapps/Contrast.war

This code will compress necessary artifacts into your user's home directory.

```
$ cd /usr/local/contrast
$ tar -czvf ~/ctdc.tar.gz data/conf data/contrast.lic data/esapi/ data/cache/ data/.initialized data/.contrast webapps/Contrast.war
```

### Install Tomcat 7 and Java
This process will vary based on your operating system.  You will need to install:
* Tomcat 7. (We recommend tomcat7.0.61)
* Java 7. (We recommend Java 1.7.0_80)

### Prepare and Configure Application Server

#### Set contrast-data
The first thing you will need to decide is the location of your contrast-data.  In the example above, we create a folder inside /opt/ named 'contrast-data' but this could be anywhere.  We want to make sure this volume is large enough for log files, caches, and ActiveMQ persistence.  We recommend making this a separate volume to handle growth without impacting your overall system.

Go ahead and create your contrast-data folder:

```
$ mkdir /opt/contrast-data
```

#### Transfer and Unzip Configuration and License
Next, the configuration and data files you compressed on your running TeamServer need to be unarchived into your contrast-data directory of your new server.  

As a test, let's run a command.

```
$ ls /opt/contrast-data/conf  
```

There should be files named `general.properties`, `database.properties`, and several others.  

To be sure we don't have any issues, let's adjust the permissions on the contrast-data directory

```
$ chown -R tomcat7:tomcat7 /opt/contrast-data
```

#### JAVA_OPTS
Now, it's time to set your JAVA_OPTS.  Here are the options you should set:

```
-XX:+UseTLAB
-XX:+UseCompressedOops
-XX:+UseConcMarkSweepGC
-XX:+UseParNewGC
-XX:CMSFullGCsBeforeCompaction=1
-XX:+CMSParallelRemarkEnabled
-XX:+PrintVMOptions
-XX:+PrintCommandLineFlags
-Xmx4g
-Xms4g
-server
-XX:MaxPermSize=768m
-Dcontrast.data.dir=/opt/contrast-data
-Dcontrast.home=/opt/contrast-data
-XX:+HeapDumpOnOutOfMemoryError
-Xloggc:/opt/contrast-data/gc.out
```


Notice above that you need to set the `contrast.home` and `contrast.data.dir` to the location where you have unzipped the archive above.  

Every distribution is different for setting JAVA_OPTS. Please refer to your distributions documentation for best practices.


#### Deploy the WAR
In our compressed archive, we included the Contrast.war from your EOP installation.  Going forward, Contrast will deliver a war-only artifact for faster updates and software iterations. This war file will be accessible from Hub for download purposes.  

Symlink, Copy, or Move the WAR into the Tomcat webapps directory.  For the default Ubuntu installation, that path is used below.

*Warning: yours may be different.*


```
$ sudo ln -s /opt/contrast-data/Contrast.war /var/lib/tomcat7/webapps/Contrast.war
```

or

```
$ cp /opt/contrast-data/Contrast.war /var/lib/tomcat7/webapps/Contrast.war
```

or

```
$ cp /opt/contrast-data/Contrast.war /var/lib/tomcat7/webapps/Contrast.war
```

Once the WAR is deployed, you should be able to start your newly configured and distributed TeamServer. If you run into any problems, please let our Technical Support team know right away and we will help.

## More Information
Please let us know if you are interested in specific topics below.  We will expand our documentation based on customer demand.

* [Load Balancing with nginx](http://blogs.mulesoft.com/dev/tomcat-tcat-server/load-balancing-apache-tomcat-with-nginx/)
* [Using nginx as a Load Balancer and for SSL Handoff](http://spin.atomicobject.com/2013/07/08/nginx-load-balancing-reverse-proxy-updated/)
* [Memcache session manager](https://github.com/magro/memcached-session-manager)
