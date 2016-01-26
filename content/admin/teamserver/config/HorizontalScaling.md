# About Horizontal Scalability
At this time, opting to scale your TeamServer horizontally should be considered only after you have worked with the Contrast Support Team to identify yourself as a candidate.  This HOWTO will guide you in the setup and configuration of additional software but please be aware you will be responsible for the monitoring and durability of additional software.  That being said, if you are familiar with installing and administering Tomcat and MySQL the process is straightforward to setup and maintain.

One of the first changes you will notice about this program is that the artifact delivered is a Java WAR file that you drop into your own Tomcat instance.  You cannot download this artifact from hub.contrastseurity.com currently but we are planning enhancements to Hub product for hosting this type of artifact.

We are interested in your progress!  If you are planning to explore scaling TeamServer horizontally, please contrast Contrast Support.  

Also, check back often for updates and submit a Pull Request if you have suggestions or find any instructions incorrect.  

# Methodology
Scaling TeamServer beyond the Contrast Installer project involves bringing your own MySQL and Tomcat software.  As our product evolves, so could this list of software.  

Decisions about scalability should be discussed and planned with Contrast Support.  We can help assess whether you need to focus on scaling you application server, database server, both, or something else.

Many of the code samples your see below are written in Ansible and meant to be used as a starting point for your own installation.  

## Option 1: Use External MySQL

With a few small changes it is possible to utilize and external MySQL database with the Enterprise On Premise.  Here is an overview of the steps that you will need to complete:

1. Install MySQL 5.6 on external host
2. Create maintenance window for TeamServer and backup MySQL data
3. Restore data to external (new) MySQL Database
4. Update TeamServer configuration to utilize new external database
5. Restart TeamServer


### Installation and Setup of MySQL Server
We recommend running TeamServer with MySQL 5.6.27 but we know that TeamServer will work with other versions of MySQL 5.6.

Below is a snippet of Ansible that you could use to install MySQL 5.6 on Ubuntu 14.04.  

```
- hosts: mysql
  sudo: True
  tasks:
  - name: Add MySQL deb repo
    sudo: True
    apt_repository: repo='deb http://repo.mysql.com/apt/ubuntu/ trusty mysql-5.6' state=present

  - name: Accept gpg key
    sudo: True
    apt_key: data="{{ lookup('file', 'mysql_pubkey.asc') }}" state=present

  - name: apt-get update
    sudo: True
    apt: update_cache=yes

  - name: install mysql packages
    sudo: True
    apt: pkg={{ item }} state=latest
    with_items:
      - mysql-server
      - mysql-client
      - python-mysqldb

  - name: Change bind_address = *
    replace: dest=/etc/mysql/my.cnf regexp='127\.0\.0\.1' replace='*'

  - name: Create remote user
    mysql_user: login_user=root login_password= name=contrast host=% password= priv=*.*:ALL,GRANT state=present

  - name: Create schema 'contrast'
    mysql_db: name=contrast state=present

  - name: restart mysql
    service: name=mysql state=restarted
```

Notes:
* The gpg keyfile and additional information can be downloaded [here](http://dev.mysql.com/doc/refman/5.6/en/checking-gpg-signature.html)
* We change the bind address to "*" above but that is only for illustration.  If possible, we recommend binding your MySQL server to the ip of your application server.
* As with the bind address, we recommend creating a user and grants that offer access to only the contrast schema.

### Backup and Restore

##### Backup
To backup your database, you can use the following embedded tool.  For more information, see the [reference](admin_tsinstall.html#run) in the documentation.

```
$CONTRAST_HOME/bin/backup_db.sh
 ```
Please move the backup taken to the external MySQL database host and make a note of the path.

##### Restore
Before you restore to your external database, make sure that you have created your schema, user, and correct grants.  

Here is an example command to import a mysql backup:

```
$ mysql -u username –p database_name < /path/to/backup.sql

```


### Update TeamServer Configuration
It is possible to edit your database configuration through the TeamServer SuperAdmin portal in a browser or using the properties editor if you prefer the command line.  

*Either of these changes will require a restart of your TeamServer*  

##### SuperAdmin Portal
1. Log into Contrast TeamServer
2. Assume SuperAdmin role
3. Click "System Settings" from the top right drop down menu.
4. Select "Database" from left hand menu.
5. Fill in the property values for your external database host.  *Make sure to adjust the port to match your external databse.  By default, MySQL runs on 3306.*


##### Encrypted Property Editor
You will need to use the [encrypted property editor](admin_tsinstall.html#run) to change your database properties to access your new host.  Follow the instructions in the tool to update:
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

Enter the name of the property to edit [q to Quit]:
```

### Restart TeamServer
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
If TeamServer starts successfully, you will see this message in the server.log

```
190116 21.22.15,703 {} {} {} INFO  (ConnectionTester.java:50) Received code 200 from TeamServer
190116 21.22.15,707 {} {} {} INFO  (ConnectionTester.java:60) Server start has been verified
190116 21.22.15,709 {} {} {} INFO  (Server.java:319) Contrast TeamServer Ready - Took 208323ms
```

## Option 2: Bring your own MySQL and Tomcat
To setup your own MySQL Server, see the section above.  It is assumed that if you are bringing your own application server that you will also provide your own database server.  The only software provided by Contrast is this scenario is the Java WAR that will include TeamServer and agents.  

### Option 2a: One Application Server
Before you begin, it is important that you work with Contrast Support and have access to the TeamServer WAR file before beginning this process.  

If the dns name of your installation is going to change, you will need to update `teamserver.url` in the `general.properties` file to reflect the new hostname.  This will also impact agents that have already been deployed.

Here is an outline of the steps it will take to migrate TeamServer to your own Tomcat instance:

1. Collect configuration and license from current TeamServer
2. Install Tomcat7 and Java on your new application server
3. Prepare and Configure application server
4. Restart Tomcat

Here you can see an Ansible playbook that summarizes steps 2 - 4.

```
- hosts: appserver
  sudo: True
  vars:
    contrast_local_artifact_path: ~/Desktop/byo
    contrast_war: contrast-teamserver-3.2.4.war
    contrast_data_dir: /opt/contrast-data
    eop_config: contrastdata
    filename_extension: tar.gz
    java_opts: "-XX:+UseTLAB -XX:+UseCompressedOops -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:CMSFullGCsBeforeCompaction=1 -XX:+CMSParallelRemarkEnabled -XX:+PrintVMOptions -XX:+PrintCommandLineFlags -Xmx4096m -Xms4096m -server -XX:MaxPermSize=768m -Dcontrast.data.dir={{ contrast_data_dir }} -Dcontrast.home={{ contrast_data_dir }} -XX:+HeapDumpOnOutOfMemoryError -Xloggc:{{ contrast_data_dir }}/gc.out"
  tasks:
  - name: Install Tomcat7 Software
    apt: name=tomcat7 update_cache=yes state=present

  - name: add java repository to sources
    action: shell add-apt-repository -y ppa:webupd8team/java

  - name: autoaccept license for java
    action: shell echo oracle-java7-installer shared/accepted-oracle-license-v1-1 select true | sudo /usr/bin/debconf-set-selections

  - name: update apt package cache
    apt: update_cache=yes

  - name: install java 7 from oracle via apt
    apt: name=oracle-java7-installer state=latest install_recommends=yes

  - name: set oracle java 7 as default jvm
    apt: name=oracle-java7-set-default state=latest install_recommends=yes

  - name: Move local files to virtual machine
    copy: src={{ contrast_local_artifact_path }}/{{ contrast_war }} dest=/opt/ mode=0655 backup=yes

  - name: Create contrast-data directory
    file: path={{ contrast_data_dir }} state=directory mode=0755 owner=tomcat7 group=tomcat7 recurse=yes

  - name: Unarchive configuration directory
    unarchive: copy=yes src={{ contrast_local_artifact_path}}/{{ eop_config }}.{{ filename_extension }} dest={{ contrast_data_dir }} owner=tomcat7 group=tomcat7

  - name: Establish Permissions for contrast-data directory
    file: path={{ contrast_data_dir }} state=directory mode=0755 owner=tomcat7 group=tomcat7 recurse=yes

  - name: Create symlink to war (very important that warname is "Contrast.war")
    file: >
      state=link
      src=/opt/{{ contrast_war }}
      dest=/var/lib/tomcat7/webapps/Contrast.war
      owner=tomcat7
      group=tomcat7
      force=yes

  - name: Set JAVA_OPTS
    replace: >
      dest=/etc/default/tomcat7
      regexp='JAVA_OPTS="-Djava\.awt\.headless=true -Xmx128m -XX:\+UseConcMarkSweepGC"'
      replace='JAVA_OPTS="{{ java_opts }}"'

  - name: Mark your license as pre-initialized
    file: path={{ contrast_data_dir }}/.initialized state=touch owner=tomcat7 group=tomcat7

  - name: Restart tomcat7
    service: name=tomcat7 state=restarted
```

#### Collect Configuration from Current TeamServer
In the example below, Contrast has been installed at path `/usr/local/contrast`.  You will need to gather the following:
* conf/
* esapi/
* .contrast
* .initialized
* cache/

```
$ tar -czvf migrate.tar.gz /usr/local/contrast/data/conf /usr/local/contrast/data/contrast.lic /usr/local/contrast/data/esapi/ /usr/local/contrast/data/cache/ /usr/local/contrast/data/.initialized /usr/local/contrast/data/.contrast
```
#### Install Tomcat7 and Java
This process will vary greatly based on your server software.  The example script above is written for Ubuntu.  

### Prepare and Configure Application Server

#### Set contrast-data
The first thing you will need to decide is the location of your contrast-data.  In the example above, we create a folder inside /opt/ named 'contrast-data' but this could be anywhere.  We want to make sure this volume is large enough for log files, caches, and activemq persistence.

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
-Xmx2g
-Xms2g
-server
-XX:MaxPermSize=768m
-Dcontrast.data.dir=/opt/contrast-data
-Dcontrast.home=/opt/contrast-data
-XX:+HeapDumpOnOutOfMemoryError
-Xloggc:/opt/contrast-data/gc.out
```

Notice above that you need to set the `contrast.home` and `contrast.data.dir` to the location where you unzipped the archive above.  

Every distribution is different for JAVA_OPTS. Please refer to your distributions documentation for best practices.


#### Deploy the WAR
Symlink, Copy, or Move the WAR into the Tomcat webapps directory.  For the default Ubuntu installation, that path is used below.

*Warning: yours may be different.*

```
$ sudo ln -s /opt/contrast-teamserver-3.2.4.war /var/lib/tomcat7/webapps/Contrast.war
```
or

```
$ cp /opt/contrast-teamserver-3.2.4.war /var/lib/tomcat7/webapps/Contrast.war
```
or
```
$ cp /opt/contrast-teamserver-3.2.4.war /var/lib/tomcat7/webapps/Contrast.war
```


### Option 2b: Multiple Application Servers
To run multiple application servers, you can follow the steps described above.  We strongly suggest making this transition with one application server first and then add the second.  There is no difference in configuration between the first, second, or tenth application server.

What to know if you need multiple application servers:
* Use a Load Balancer.  If you don't have a preference, some information on getting started with nginx is provided in the External Resources.  
* Configure your Load Balancer for sticky sessions with cookie 'JSESSIONID'
* Restarting Tomcat will terminate the session of a logged in user.  For shared sessions, see External Resources.


# External Resources
Please let us know if you are interested in specific topics below.  We will expand our documentation based on customer demand

* [Load Balancing with nginx](http://blogs.mulesoft.com/dev/tomcat-tcat-server/load-balancing-apache-tomcat-with-nginx/)
* [Using nginx as a Load Balancer and for SSL Handoff](http://spin.atomicobject.com/2013/07/08/nginx-load-balancing-reverse-proxy-updated/)
* [memcache session manager](https://github.com/magro/memcached-session-manager)
