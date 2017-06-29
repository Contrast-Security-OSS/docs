<!--
title: "Configuring TeamServer as a Distributed Deployment"
description: "Instructions for configuring TeamServer in a distributed fashion by separating the application/container from the database."
tags: "installation setup EOP distributed configuration database scalability"
-->

## About a Distributed Configuration of Contrast

This guide is for enterprise on premise (EOP) administrators who want to move away from the bundled, self-contained Contrast configuration to a distributed configuration in which the database and application server are deployed on separate servers. Most customers don't need to configure a distributed Contrast application. Customers who fit this profile are usually running with 100 or more connected agents, and seeking greater performance and scalability. 

EOP customers typically install and update the Contrast application by downloading the installer/updater artifact from the [Contrast Hub](https://hub.contrastsecurity.com). This artifact is an executable file that includes all the necessary software and components to install, upgrade and run Contrast. The Contrast application is designed for all embeded components and storage to reside on a single server in a very basic, monolithic configuration.

Some customers need to run in a more advanced configuration. We've written this document for those customers opting for a slightly more advanced configuration that will require additional administration and management by an EOP administrator. We have simplified the configuration of TeamServer for EOP administrators to run their own installations of Tomcat, Java and MySQL, as long as they conform to our version requirements.

This documentation will guide you through the setup and configuration of additional software but please be aware you will be responsible for the monitoring and durability of additional software.  That being said, if you are familiar with installing and administering Tomcat and MySQL the process is straightforward to setup and maintain.

Check back often for updates and feel free to submit a Pull Request if you have suggestions or find any instructions incorrect.  All code that we have shared here is also available in our GitHub [repo](https://github.com/Contrast-Security-OSS/ctdc).   

## Before You Get Started
Before you get started configuring a distributed Contrast application, make sure to read through the entire document and complete the following steps before distributing the configuration:

* Previous installation of Contrast EOP using the provided installer artifact from Hub 
* Successful backup(s) and exports of the Contrast database
* Installation, configuration and administration of MySQL
* Installation, configuration and administration of Tomcat
* Installation, configuration and administration of Java

If you need to go back and set up Contrast again, [click here](installation-setupinstall.html#download).  

## Deploying the Distributed Configuration 

There are two steps for deploying a distributed Contrast configuration:

* Step 1: Database (MySQL)
* Step 2: Application Server (Tomcat)

Contrast provides several code samples using [Ansible](https://www.ansible.com/), an automation framework, as well as Ubuntu that you can use as a starting point for your own configuration. While you may need to make some slight changes to these scripts to run against other operating systems, rest assured that the configuration runs on all platforms supported by Contrast.

## Step 1: Separating the Database

With a few changes, you can utilize an external MySQL database - an open-source database that runs on both Windows and Linux - with your existing EOP installation. You'll need to complete the following steps:

1. Install and configure MySQL 5.6 on database server host.  Contrast recommends 5.6.28.  
2. Create maintenance window for Contrast downtime.
3. [Back up the embedded MySQL Database](installation-setup.html#setup-mysql).
4. [Restore the database](installation-setup.html#setup-mysql) to an external MySQL database.
5. [Update the Contrast configuration](admin-eopupgrade.html#contrast) to use the new external database host.
6. Restart your Contrast application and end the maintenance window.


### Install and configure the MySQL Server

Contrast recommends running the application with MySQL 5.6.28, but it works with other versions of MySQL 5.6.x on Windows and Linux as well. Contrast also recommend working with your Operations and/or Database team to ensure a secure and durable installation.  

Go to the [Github repository](https://github.com/Contrast-Security-OSS/ctdc/blob/master/mysql.yml) for a snippet of Ansible that you can use to install the latest MySQL 5.6 on Ubuntu 14.04.   

* You can download the *gpg* keyfile and additional information from the [MySQL documentation](http://dev.mysql.com/doc/refman/5.6/en/checking-gpg-signature.html)
* Contrast changes the bind address to "*" above for illustration, but recommends binding your MySQL server to the IP of your application server.
* Contrast recommend creating a user and grants that offer access to only the Contrast schema and limited to the host IP address or subnet.

## Take a Backup of MySQL

To back up your database, you can use the embedded tool with your EOP installation.  

```
$CONTRAST_HOME/bin/backup_db.sh
```

Move this backup to the external MySQL database host and make a note of the path.

### Restore the database

Before you restore to your external database host, make sure that you created your schema, user, and correct grants. You can use this sample command to import a local MySQL backup:

```
$ mysql -u username –p database_name < /path/to/backup.sql
```

For more information on this process, see the article to [Create a MySQL Backup](installation-setup.html#setup-mysql).


### Update the Contrast configuration

You can edit your database configuration through the SuperAdmin portal or the properties editor. If you already shutdown Contrast for the maintenance window, you must use the encrypted property editor. Either of these changes requires you to restart of Contrast.

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

If Contrast starts successfully, you will see this message in the server.log:

```
190116 21.22.15,703 {} {} {} INFO  (ConnectionTester.java:50) Received code 200 from TeamServer
190116 21.22.15,707 {} {} {} INFO  (ConnectionTester.java:60) Server start has been verified
190116 21.22.15,709 {} {} {} INFO  (Server.java:319) Contrast TeamServer Ready - Took 208323ms
```


## Step 2: The Application Server

Before you begin, it's important that you work with the Contrast Support team and have access to the Contrast *WAR* file before beginning this process.  

If the DNS name of your installation is going to change, you must update `teamserver.url` in the `general.properties` file to reflect the new hostname. This also impacts agents that have already been deployed.

Here is an outline of the steps it will take to migrate Contrast to your own Tomcat instance:

1. Collect configuration and license from current TeamServer
2. Install Tomcat7 and Java on your new application server
3. Prepare and Configure application server
4. Restart Tomcat

Visit our [Github repository](https://github.com/Contrast-Security-OSS/ctdc/blob/master/appserver.yml) for a snippet of Ansible that you can use to install the latest versions of Tomcat7 and Java7 on Ubuntu 14.04. 

> **Note:** We use Ubuntu and Ansible here as examples only. This software also runs on supported versions of Windows and Linux.

### Collect Configuration from Current TeamServer

In the example below, Contrast has been installed at path `/usr/local/contrast`.  Gather the following files: 

* data/conf/
* data/esapi/
* data/.contrast
* data/.initialized
* data/cache/
* data/contrast.lic
* webapps/Contrast.war

This code compresses necessary artifacts into your user's home directory:

```
$ cd /usr/local/contrast
$ tar -czvf ~/ctdc.tar.gz data/conf data/contrast.lic data/esapi/ data/cache/ data/.initialized data/.contrast webapps/Contrast.war
```

### Install Tomcat7 and Java

This process will vary based on your operating system.  You will need to install:
* Tomcat7. (We recommend tomcat7.0.61)
* Java7. (We recommend Java 1.7.0_80)

### Prepare and Configure Application Server

#### Set contrast-data
The first thing you will need to decide is the location of your contrast-data.  In the example above, we create a folder inside /opt/ named 'contrast-data' but this could be anywhere.  We want to make sure this volume is large enough for log files, caches, and activemq persistence.  We recommend making this a separate volume to handle growth without impacting your overall system.

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

Symlink, copy or move the *WAR* into the Tomcat webapps directory.  For the default Ubuntu installation, that path is used below.

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

Once the *WAR* is deployed, you should be able to start your newly configured and distributed TeamServer. If you run into any problems, please let our Technical Support team know right away and we will help.

## More Information

* [Load Balancing with nginx](http://blogs.mulesoft.com/dev/tomcat-tcat-server/load-balancing-apache-tomcat-with-nginx/)
* [Using nginx as a Load Balancer and for SSL Handoff](http://spin.atomicobject.com/2013/07/08/nginx-load-balancing-reverse-proxy-updated/)
* [memcache session manager](https://github.com/magro/memcached-session-manager)

If you are planning to explore a distributed configuration of Contrast, please contrast our [Technical Support Team](https://support.contrastsecurity.com). They would love to hear from you and keep track of your progress. 


