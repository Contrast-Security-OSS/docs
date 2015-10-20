<!--
title: "Configuring Active Directory"
description: "Guideliness for configuring Active Directory Authentication"
-->

## What You'll Need
Before integrating with your Active Directory for Authentication, there are some pieces of information that you will need and you will need to create two groups for use by Contrast. It is best to have your Active Directory administrators on hand to assist with group creation and the settings.

## Contrast Authentication Groups
An important distinction is that Contrast does not perform Data Access Control using the integrated Active Directory Servers, that is to say that roles and access to data within the application are handled by the application and the roles set for users by the Organization Administrators. That being said, there is an Access Control check when logging in (or creating new users) to ensure that the provided user does in fact belong to the correct group within the Active Directory. 

**Contrast Users Group** This group allows users to be added to an organization and login to the standard user interface. This is the group that most of your users will need to be a member of.

**Contrast Admin Group** This group allows users to log in to the Super Administrative interface. This interface should only be accessible to application and system administrators.

It is important to note that a user can not belong to both the Users and Admin group.

## Configuring The Integration
The following information will be needed to integrate Contrast into your Active Directory for Authentication:

* **Connection URL** - This will be a url in the format ```<protocol>://<hostname>:<port>```
 * **Protocol** - Should be one of ldap or ldaps (ldaps is LDAP over SSL, additional configuration may be needed. See the section on Self-Signed or Private CA Signed Certificates below)
 * **Hostname** - This is either the DNS hostname or IP Address of the Active Directory server. In multi-tenant forests, this should be the Global Catalog Server.
 * **Port** - This is the port that Contrast should connect to. For standard directories (single-tenant, single-domain) this should be either port 389 for ldap or 636 for ldaps. In multi-tenant or multi-domain forests, this will be either 3268 for ldap or 3269 for ldaps.
* **Base DN** - The base dn is a Distinguished Name that represents the global base level contain for your Active Directory environment. This is usually just your domain or sub-domain name. For example, if your login domain is example.com, then your Base DN would be dc=example,dc=com
* **Username** - This is the username of a user who can bind to the directory to perform search functionality. Generally this should be a service user configured in the directory explicitly for use by Contrast and needs read-only access.
* **Password** - This is the password for the Bind user described above.

## Advanced Settings

 * **User DN Suffix** - By default, this is set to CN=Users as this is the default container for Active Directories. However, if your Active Directory is configured differently, then this will be the path to the top-most container where users are stored in the directory. For instance, if your users are stored in the **DN** *CN=Engineering,CN=GlobalUsers,DC=intranet,dc=example,dc=com* and your **Base DN** is *DC=intranet,DC=example,DC=com* then the value of the User DN Suffix will be *CN=Engineering,DC=GlobalUsers*
 * **Group DN Suffix** - If left blank, then the User DN Suffix will also be used for Groups, this is the default model for Active Directories. However, if your directory is setup differently, you can point this to where your groups are stored within the directory using the same rules given for the User DN Suffix option. 

## Using Self-Signed or Privately Signed Certificates

If you configure your Active Directory integration to connect to your server using SSL, you may need to import your server's certificate into a new trust store to be used by the Contrast JRE. First you will need to acquire the server's certificate from your administrators in PKCS#12 format. If you are using a Self-Signed Certificate, this will be the actual AD Server's Certificate. If you have a Private CA, you will want the CA Certificate for that Server.

After you have the certificate for the server, you will need to create a trust store that contains that certificate. Run the following commands from a command shell in the directory where Contrast is installed as Administrator. 

````
$ mkdir data/conf/ssl 
$ jre/bin/keytool -import -file <path to certificate> -alias <hostname> \
  -keystore data/conf/ssl/truststore.jks 
````

After you have created your truststore containing either your server's or ca certificate. You will need to add the following lines into the ***bin/contrast-server.vmoptions*** file:

````
-Djavax.net.ssl.trustStore=<full path to truststore>
-Djavax.net.ssl.trustStorePassword=<password you set for the trust store, if any>
````

You should now be able to restart the Contrast Server service and queries against your Active Directory will use SSL.
