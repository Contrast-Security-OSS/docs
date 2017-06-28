<!--
title: "Configuring Active Directory"
description: "TeamServer can be configured to connect to a Microsoft Active Directory."
tags: "installation setup AD Microsoft Directory configuration authentication DN"
-->

## Getting Started
You can configure Contrast to connect to a Microsoft Active Directory. Configuring this integration using the Active Directory connector is often a simpler path because Microsoft Active Directory has a well-defined structure for directories, resulting in fewer possibilities and a more direct configuration. 

Active Directory configuration is performed by the System Administrator and requires creating two groups to be used by Contrast.

>**Note:** Switching to Active Directory from a different authentication method such as a local database may result in issues if the user ID attribute is inconsistent.


## Configure the Server

Go to **System Settings** and **Authentication** to get started in the Authentication Wizard. In Step 1 of the wizard, choose **Active Directory** and then continue to enter the following information:

* **Protocol:** Either LDAP or LDAPS <br> (LDAPS is LDAP over SSL and additional configuration may be needed. See the **Use Certificates** section below.)

* **Hostname:** Either the DNS hostname or IP address of the Active Directory server. In multi-tenant forests, this should be the Global Catalog Server.

* **Port:** The port to which Contrast should connect. For standard directories (single-tenant, single-domain), this should be port 389 for LDAP or 636 for LDAPS. In multi-tenant or multi-domain forests, this is either 3268 for LDAP or 3269 for LDAPS.
 
* **Search Base:** A Distinguished Name (DN) that represents the global base level container for your Active Directory environment. This is usually your domain or subdomain name. (Example: If your login domain is example.com, then your Base DN would be *dc=example,dc=com*.)

* **Username:** The username of a user who can bind to the directory to perform search functionality. This should generally be a service user configured in the directory explicitly for use by Contrast and needs read-only access.

* **Password:** The password for the BIND user described above.

In Step 2, ...

<a href="assets/images/KB4-c09_1.png" rel="lightbox" title="Configuring Your Server"><img class="thumbnail" src="assets/images/KB4-c09_1.png"/></a>


| Option      | Description                                                                                                      | Default                    |
|-------------|------------------------------------------------------------------------------------------------------------------|----------------------------|
| Protocol    | The protocol that should be used to communicate with the LDAP server; either LDAP or LDAPS (LDAP w/ SSL). | LDAP                       |
| Hostname    | The hostname to connect to when communicating with the LDAP server.                                              | localhost                  |
| Port        | The port to connect to when communicating with the LDAP server.                                                  | 389 (LDAP), 636 (LDAPS)    |
| Search Base | The Base DN to use when communicating with the LDAP server.                         | dc=contrastsecurity,dc=com |

---



### Bind to the Server
| Option      | Description                                                                                                      | Default                    |
|-------------|------------------------------------------------------------------------------------------------------------------|----------------------------|
| Username    | This is the full Distinguished Name (DN) of the User Account that the application should use when connecting to the LDAP server. | cn=Directory Manager |
| Password    | This is the password of the User Account that the application should use when connecting to the LDAP server.     | N/A |

---


### Use a Service User
Contrast recommendeds that you create a dedicated read-only user specifically for connecting Contrast to the Active Directory. The user should be have Read permission to the directory, including users with permission limited only to the Search Base.

### Test the Connection
After configuring your connection details and bind credentials, ensure connectivity to the server by using the **Test Connection** button located below the form. Once connectivity is verified, click **Next** to proceed to **Groups**. 

## Configure Groups
It's important to note that Contrast doesn't perform Data Access Control using the integrated Active Directory Servers. In other words, roles and access to data within the application are handled by the application, and user roles are set by the Organization Administrators. However, there is an Access Control check when logging in (or creating new users) to ensure that the provided user belongs to the correct group in the Active Directory.

**Contrast User Group:**: This group allows users to be added to an organization and log in to the standard user interface. Most users should be part of this group. 

**Contrast SuperAdmin Group:** This group allows users to log in to the Super Administrator interface. This interface should only be accessible to Application and System Administrators.

> **Note:** A user can't belong to both the User and Admin groups.

You can use the **Query for Groups** button to enable a live search of existing groups as you begin to type within the input fields.

<a href="assets/images/KB4-c09_2.png" rel="lightbox" title="Configuring Groups"><img class="thumbnail" src="assets/images/KB4-c09_2.png"/></a>


## Advanced Settings

 * **User Base DN** - By default, this is set to *CN=Users* as this is the default container for Active Directories. However, if your Active Directory is configured differently, then this will be the path to the top-most container where users are stored in the directory. For instance, if your users are stored in the **DN** *CN=Engineering,CN=GlobalUsers,DC=intranet,dc=example,dc=com* and your **Base DN** is *DC=intranet,DC=example,DC=com* then the value of the User DN Suffix will be *CN=Engineering,DC=GlobalUsers*

### Configuring Advanced Settings
| Option      | Description                                                                                                      | Default                    |
|-------------|------------------------------------------------------------------------------------------------------------------|----------------------------
|
| User Base DN | This is the Base DN where users are stored in the directory. In most Active Directory installations, this is *cn=Users* | cn=Users |
| User ID Attribute | This is the attribute on the user that's used as the username when users are logging in to the application. | Email Address |
| Search Within Nested Groups | Enable or disable searching within nested groups | Disabled |
| Follow Referrals | In Multi-Tenant/Multi-Domain Enterprise Forests, LDAP queries may be referred to another server for more details. | Disabled |
| Limit Referrals | Limit to how many referrals should be followed when AD replies with a Referral response. | 5 |

---

<a href="assets/images/KB4-c09_3.png" rel="lightbox" title="Advanced Settings"><img class="thumbnail" src="assets/images/KB4-c09_3.png"/></a>


### Selecting The User ID Attribute
It is important to pick the correct User ID Attribute when setting up the Active Directory integration so that users can use the username that they are most familiar with.

| Attribute      | Description													|
|----------------|--------------------------------------------------------------------------------------------------------------|
| Login ID       | This is the AD *sAMAccountName* attribute - generally this is just the username that you log in to Windows with |
| Email Address  | This is the AD *mail* attribute, containing the email address of the user.                                     |
| User Principal | This is the AD *userPrincipal* attribute, containing the full username                                         |

---

### Testing The Configuration
Once all of the configuration options are set, verify that you are able to log in as both a User and an Administrator using the **Test Login** button.

<a href="assets/images/KB4-c09_4.png" rel="lightbox" title="Test Login"><img class="thumbnail" src="assets/images/KB4-c09_4.png"/></a>


> **Note:** If testing a login seems to take an excessive amount of time, this is likely a result of having the wrong setting for the Follow Referrals option on the Advanced Settings screen. Flip the setting and you should be able to verify login functionality quickly.

After all settings are verified and test logins are successful, click **Finish** to complete the configuration. You will need to restart TeamServer in order for the authentication changes to be applied.


## Use Certificates

If you configure your Active Directory integration to connect to your server using SSL, you may need to import your server's certificate into a new trust store to be used by the Contrast JRE. First you will need to acquire the server's certificate from your administrators in PKCS#12 format. If you are using a Self-Signed Certificate, this will be the actual AD Server's Certificate. If you have a Private CA, you will want the CA Certificate for that Server.

After you have the certificate for the server, you will need to create a trust store that contains that certificate. Run the following commands from a command shell in the directory where Contrast is inst
alled as Administrator.

````
$ mkdir data/conf/ssl
$ jre/bin/keytool -import -file <path to certificate> -alias <hostname> \
  -keystore data/conf/ssl/truststore.jks
````

After you create your truststore containing either your server's or ca certificate, add the following lines into the ***bin/contrast-server.vmoptions*** file:

````
-Djavax.net.ssl.trustStore=<full path to truststore>
-Djavax.net.ssl.trustStorePassword=<password you set for the trust store, if any>
````

You should now be able to restart the Contrast Server service and queries against your Active Directory will use SSL.
