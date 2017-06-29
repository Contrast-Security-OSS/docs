<!--
title: "Configuring Contrast as a Distributed Deployment"
description: "Instructions for configuring TeamServer in a distributed fashion by separating the application/container from the database."
tags: "installation setup EOP distributed configuration database scalability"
-->

## About Distributed Contrast Configuration 
This guide is for Enterprise-On-Premises (EOP) administrators who want to intall a distributed configuration of Contrast, in which the database and application server are deployed on separate servers. Customers who fit this profile are likely running with 100 or more connected agents, seeking greater performance and scalability, and require additional administration and management by an EOP administrator. (These configurations are introduced in Contrast TeamServer 3.3.2.) 

For more information on the configuration process, go to the article on [Distributed Configuration](installation-setupconfig.html#dist).

## Before You Get Started

Before you get started with configuring a distributed Contrast application, read through this entire document, and make sure that the following steps have been completed.

* Previous successful installation of Contrast EOP with a distributed database configuration
* Successful backup(s) and exports of the Contrast application database
* Collect Contrast version numbers for the application and database 

If you already installed Contrast and want to use a distributed install instead, please see the section below to **Convert an Installation**. 

## How It Works

In the following example, Contrast has been installed at path */usr/local/contrast*. To collect Contrast application version numbers, look in the *VERSION* file in */usr/local/contrast/VERSION*. To collect the Contrast database version, run the following query: 

```
select `version` from schema_version ORDER BY `installed_on` DESC LIMIT 1;
``` 
> **Example:** 
> If the application version stands at `3.3.2` and the database is at `3.3.2.012`, you can say the versions are the same because it's safe to drop `.012` from the database version. As a result, you can have an existing application server (A) running with a separate database (B) on `3.3.2`. When you're about to install `3.4.2`onto a new application server (C) and connect it to B, you'll need to either stop A before installing `3.4.2` on C or update A before installing on C. 


## Collect Configuration 

In the example below, Contrast was installed at path */usr/local/contrast*. Gather the following files:

* data/conf/
* data/esapi/
* data/.contrast
* data/.initialized
* data/contrast.lic
* VERSION

> **Example:** Compress the files above into a zip file or a *tar.gz* file. Examples of Linux commands that compress necessary artifacts into your user's home directory include:
	```
	$ cd /usr/local/contrast
	$ tar -czvf ~/ctdc.tar.gz data/conf data/contrast.lic data/esapi/ data/.initialized data/.contrast VERSION
	```

## Distributed Fresh Installation 

You can run the installation as a regular user; however, Contrast recommends that you complete the installation to your system as a *privileged* user. If you're on Windows, you can right-click on the installer and select **Run As Administrator**. If you're on Linux, use the `sudo` command to launch the installer.

Once you launch the installer, you're presented with several questions. Select the **Application Server Only** installation option when prompted. Provide the compressed file you created in the previous section and follow the on-screen steps.

> **Note:** Pay close attention to the value used for the Contrast URL. This is the URL that client agents use to communicate back to the application. Please set this value to a Contrast host or load balancer that's reachable by your agent hosts. 

After the installation is complete, the Contrast performs its initial configuration. It can take two to three minutes to fully start up. Check the status of startup by watching `server.log` and `contrast.log`. Once the server starts successfully, you will see something similar to the following in `server.log`:

```
260916 20.18.25,837 {} {} {} INFO  (Server.java:303) Contrast TeamServer Ready - Took 119305ms
```

## Convert an Installation

Edit the encrypted file `$CONTRAST_HOME/data/conf/database.properties` using the [encrypted editor](installation-setupconfig.html#encrypt). Look for `database.type`; if it doesn't exist, create a new property. Set this value to `distributed` and modify the database connection values to point to the distributed database you want to use. [Restart Contrast](installation-setupinstall.html#restart) for these changes to take effect.  

```
user@ubuntu:/opt/contrast/bin$ ./edit-properties  -e ../data/esapi/ -f ../data/conf/database.properties

jdbc.type                                         : MYSQL
database.prod.dir                                 : /opt/contrast/data/db
jdbc.debug                                        : false
jdbc.pass                                         : pass
jdbc.schema                                       : contrast
jdbc.host                                         : ubuntu
database.bk.time                                  : 6:39:14
jdbc.port                                         : 3306
database.bk.enabled                               : false
database.enabled                                  : true
jdbc.url                                          : jdbc:mysql://ubuntu:3306/contrast
jdbc.user                                         : contrast
database.bk.dir                                   : /opt/contrast/data/backups/db
jdbc.dialect                                      : com.aspectsecurity.contrast.teamserver.persistence.CustomMySQL5Dialect
jdbc.driver                                       : com.mysql.jdbc.Driver

Enter the name of the property to edit [q to Quit]: database.type
Create new Property [database.type](y/N): y
Enter a value for the property: distributed

jdbc.type                                         : MYSQL
database.prod.dir                                 : /opt/contrast/data/db
jdbc.debug                                        : false
jdbc.pass                                         : pass
jdbc.schema                                       : contrast
jdbc.host                                         : ubuntu
database.bk.time                                  : 6:39:14
jdbc.port                                         : 3306
database.bk.enabled                               : false
database.enabled                                  : true
database.type                                     : distributed
jdbc.url                                          : jdbc:mysql://ubuntu:3306/contrast
jdbc.user                                         : contrast
database.bk.dir                                   : /opt/contrast/data/backups/db
jdbc.dialect                                      : com.aspectsecurity.contrast.teamserver.persistence.CustomMySQL5Dialect
jdbc.driver                                       : com.mysql.jdbc.Driver

Enter the name of the property to edit [q to Quit]:
```

Once this is done, you may continue to add more application-only installations. 


>**Note:** If you're converting from a default embedded database configuration to a distributed configuration, `database.bk.enabled` also needs to be set to `false`. It's your responsibility to configure your own backups when running a distributed database configuration with Contrast.




