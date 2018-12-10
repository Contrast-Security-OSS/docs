<!--
title: "Configuring Contrast as a Distributed Deployment"
description: "Instructions for configuring Contrast in a distributed fashion."
tags: "installation setup EOP distributed configuration database scalability"
-->

## About Distributed Configuration

This guide is for Enterprise-On-Premises (EOP) administrators who want to move away from the bundled, self-contained Contrast configuration in favor of a distributed configuration, in which the database and application server are deployed on separate servers. Customers who fit this profile are likely running with 100 or more connected agents, seeking greater performance and scalability, and require additional administration and management by an EOP administrator. (These configurations are introduced in Contrast 3.3.2.) Contrast simplified the configuration of the application for EOP administrators to run their own installations of Tomcat, Java and MySQL, as long as they conform to our version requirements.

> **Note:** While the following instructions guide you through the setup and configuration of additional software, be aware that you're responsible for the monitoring and durability of this software. If you're familiar with installing and administering MySQL and Tomcat, the process is easy to set up and maintain. 

EOP customers typically install and update the Contrast application by downloading the installer/updater artifact from the [Contrast Hub](https://hub.contrastsecurity.com). This artifact is an executable file that includes all the necessary software and components to install, upgrade and run Contrast. The Contrast application is designed for all embedded components and storage to reside on a single server in a very basic, monolithic configuration.

  
## Before You Get Started

Before you get started configuring a distributed Contrast application, make sure to read through the entire document and complete the following steps before distributing the configuration:

* Previous installation of Contrast EOP using the provided installer artifact from Hub 
* Successful backup(s) and exports of the Contrast database
* Installation, configuration and administration of MySQL
* Installation, configuration and administration of Tomcat
* Installation, configuration and administration of Java

If you need to go back and set up Contrast again, [click here](installation-setupinstall.html#download).  

## Deploy the Distributed Configuration 

There are two steps for deploying a distributed Contrast configuration:

* Step 1: Database (MySQL)
* Step 2: Application Server (Tomcat)

Contrast provides several code samples using [Ansible](https://www.ansible.com/), an automation framework, as well as Ubuntu that you can use as a starting point for your own configuration. While you may need to make some slight changes to these scripts to run against other operating systems, rest assured that the configuration runs on all platforms supported by Contrast.

## Step 1: Separate the Database

With a few changes, you can utilize an external MySQL database - an open-source database that runs on both Windows and Linux - with your existing EOP installation. Complete the following steps:

* Install and configure MySQL 5.6 on database server host. Contrast recommends 5.6.28.  
* Create maintenance window for Contrast downtime.
* [Back up the embedded MySQL Database](installation-setup.html#setup-mysql).
* [Restore the database](installation-setup.html#setup-mysql) to an external MySQL database.
* [Update the Contrast configuration](admin-eopupgrade.html#contrast) to use the new external database host.
* Restart your Contrast application and end the maintenance window.

### Install and configure the MySQL Server

Contrast recommends running the application with MySQL 5.6.28; however, it works with other versions of MySQL 5.6.x on Windows and Linux as well. Contrast also recommend working with your Operations and/or Database team to ensure a secure and durable installation.  

> **Note:** Go to the [Github repository](https://github.com/Contrast-Security-OSS/ctdc/blob/master/mysql.yml) for a snippet of Ansible that you can use to install the latest MySQL 5.6 on Ubuntu 14.04.   

You can download the *gpg* keyfile and additional information from the [MySQL documentation](http://dev.mysql.com/doc/refman/5.6/en/checking-gpg-signature.html). Contrast changes the bind address to "*" above for illustration, but recommends binding your MySQL server to the IP of your application server. Contrast recommend creating a user and grants that offer access to only the Contrast schema and limited to the host IP address or subnet. 

### Take a backup of MySQL

To back up your database, you can use the embedded tool with your EOP installation: 

```
$CONTRAST_HOME/bin/backup_db.sh
```

Move this backup to the external MySQL database host and make a note of the path.

### Restore the database

Before you restore to your external database host, make sure that you created your schema, user and correct grants. You can use this sample command to import a local MySQL backup:

```
$ mysql -u username –p database_name < /path/to/backup.sql
```

For more information on this process, see the article to [Create a MySQL Backup](installation-setup.html#setup-mysql).


### Update the Contrast database configuration

You can edit your database configuration through the SuperAdmin portal or the properties editor. If you already shutdown Contrast for the maintenance window, you must use the encrypted property editor. Either of these changes requires you to restart of Contrast.

* Log in to the Contrast application.
* Assume SuperAdmin role.
* Choose **System Settings** in the user menu. 
* Select the **Database** tab.
* Fill in the property values for your external database host. **Make sure to adjust the port to match your external database. For new installations, MySQL runs on 3306.**

#### Encrypted Property Editor

Use the [encrypted property editor](installation-setupconfig.html#encrypt) to change your database properties to access your new host. Follow the instructions in the tool to update:

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

### Restart Contrast

Use the following sets of commands to restart Contrast. 

This command is slightly different if you chose the non-root installation:

```
$ sudo service contrast-server restart
```

At this point, it's helpful to tail the server logs:

```
$ tail -f $CONTRAST_HOME/logs/server.log
```

And then the application logs:

```
$ tail -f $CONTRAST_HOME/logs/contrast.log
```

If Contrast starts successfully, you will see this message in the *server.log*:

```
190116 21.22.15,703 {} {} {} INFO  (ConnectionTester.java:50) Received code 200 from TeamServer
190116 21.22.15,707 {} {} {} INFO  (ConnectionTester.java:60) Server start has been verified
190116 21.22.15,709 {} {} {} INFO  (Server.java:319) Contrast TeamServer Ready - Took 208323ms
```

## Step 2: The Application Server

Before you begin, it's important that you work with the Contrast Support team and have access to the Contrast *WAR* file before beginning this process. If the DNS name of your installation is going to change, you must update `teamserver.url` in the *general.properties* file to reflect the new hostname. This also impacts agents that have already been deployed.

The following steps outline the process to migrate Contrast to your own Tomcat instance:

* Collect configuration and license from the Contrast application. 
* Install Tomcat 7 and Java on your new application server.
* Prepare and configure the application server.
* Restart Tomcat.

> **Notes:** 
 * Contrast uses Ubuntu and Ansible here as examples only. This software also runs on supported versions of Windows and Linux.
 * Visit Contrast's [Github repository](https://github.com/Contrast-Security-OSS/ctdc/blob/master/appserver.yml) for a snippet of Ansible that you can use to install the latest versions of Tomcat 7 and Java 7 on Ubuntu 14.04. 
 

### Collect configuration from Contrast

In the example below, Contrast was installed at path `/usr/local/contrast`. Gather the following files: 

* data/agents/
* data/conf/
* data/esapi/
* data/.contrast
* data/.initialized
* data/cache/
* data/contrast.lic
* webapp/Contrast.war

The following commands compresses necessary artifacts into your user's home directory:

```
$ cd /usr/local/contrast
$ tar -czvf ~/ctdc.tar.gz data/agents data/conf data/contrast.lic data/esapi/ data/cache/ data/.initialized data/.contrast webapp/Contrast.war
```

### Install Tomcat and Java

This process varies based on your operating system. You must install:

* Tomcat 7 (Contrast recommends Tomcat 7.0.61)
* Supported versions of Java, as shown in [System Requirements](installation-setup.html#contrast-reqs)

### Prepare and configure the application server

#### Set *contrast-data*

The first thing you need to decide is the location of your *contrast-data*. In the example above, you created a folder inside */opt/* named "contrast-data", but this could be anywhere. Contrast wants to make sure that this volume is large enough for log files, caches and ActiveMQ persistence. Contrast recommends making this a separate volume to handle growth without impacting your overall system.

Create your *contrast-data* folder:

```
$ mkdir /opt/contrast-data
```

#### Transfer and unzip configuration and license

Next, the configuration and data files you compressed on your running Contrast application need to be unarchived into the *contrast-data* directory of your new server.  

As a test, run a command.

```
$ ls /opt/contrast-data/conf  
```

There should be files named *general.properties* and *database.properties* among several others. To be sure that you don't have any issues, adjust the permissions on the *contrast-data* directory.

```
$ chown -R tomcat7:tomcat7 /opt/contrast-data
```

#### JAVA_OPTS

Now, it's time to set your JAVA_OPTS. You must set the `contrast.home` and `contrast.data.dir` to the location where you have unzipped the archive.  


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

Every distribution is different for setting `JAVA_OPTS`. Please refer to the documentation for your distributions for best practices.


#### Deploy the WAR

In the compressed archive, Contrast includes the *Contrast.war* from your EOP installation. Going forward, Contrast will deliver a *WAR*-only artifact for faster updates and software iterations. This *WAR* file will be accessible from Hub for download purposes.  

Symlink, copy or move the *WAR* into the Tomcat *webapps* directory. The path for the default Ubuntu installation is used below. **Yours may be different.**


```
$ sudo ln -s /opt/contrast-data/webapp/Contrast.war /var/lib/tomcat7/webapps/Contrast.war
```

or

```
$ cp /opt/contrast-data/webapp/Contrast.war /var/lib/tomcat7/webapps/Contrast.war
```

Once the *WAR* is deployed, you should be able to start your newly configured and distributed Contrast application. If you run into any problems, please let Contrast's Technical Support team know right away.

## More Information

* [Load Balancing with nginx](http://blogs.mulesoft.com/dev/tomcat-tcat-server/load-balancing-apache-tomcat-with-nginx/)
* [Using nginx as a Load Balancer and for SSL Handoff](http://spin.atomicobject.com/2013/07/08/nginx-load-balancing-reverse-proxy-updated/)
* [Memcache session manager](https://github.com/magro/memcached-session-manager)

If you're planning to explore a distributed configuration of Contrast, please contrast our [Technical Support Team](https://support.contrastsecurity.com). They would love to hear from you and keep track of your progress. 


