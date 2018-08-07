<!--
title: "Configuring Active Directory"
description: "Configure your Contrast application to connect to a Microsoft Active Directory."
tags: "installation setup AD Microsoft Active Directory configuration authentication DN"
-->

## Get Started

You can configure Contrast to connect to a Microsoft Active Directory (AD). Contrast recommends using the AD connector to configure this integration; AD has a well-defined structure for directories, resulting in fewer possibilities and a more direct configuration. A System Administrator can perform the AD configuration, and must also create the two user groups that will be used by Contrast.

## Configuration

To set up the configuration, go to the **user menu > System Settings > Authentication page**. The Authentication wizard will walk you through the steps to configure server, groups and advanced settings. 

>**Note:** Switching to AD from a different authentication method such as a local database may result in issues if the user ID attribute is inconsistent.

### Step 1: Set Up Authentication

In Step 1 of the Authentication wizard, select **Active Directory**.

<a href="assets/images/Set-up-authentication.png" rel="lightbox" title="Set up an authentication method"><img class="thumbnail" src="assets/images/Set-up-authentication.png"/></a>


### Step 2: Configure Server 

Complete the following fields in the **Connect Server** section. Some settings may be different for LDAP over SSL (LDAPS) as noted. 

* **Protocol:** The protocol that should be used to communicate with the LDAP server. Choose **LDAP** or **LDAPS** from the dropdown menu. The default is **LDAP**. Additional configuration may be needed for the LDAPS option. (See the **Use Certificates** section below.)

* **Hostname:** The hostname to connect to when communicating with the LDAP server; either the DNS hostname or IP address of the AD server. In multi-tenant forests, this should be the Global Catalog Server. The default is "localhost".

* **Port:** The port to connect to when communicating with the LDAP server. For standard (single-tenant, single-domain) directories, this should be port 389 (LDAP) or 636 (LDAPS). In multi-tenant or multi-domain forests, this should be 3268 (LDAP) or 3269 (LDAPS).
 
* **Search Base:** The base DN (a distinguished name that represents the global base level container for your AD environment) to use when communicating with the LDAP server. This is usually your domain or subdomain name. The default is *dc=contrastsecurity,dc=com*.

 > **Example:** If your login domain is *example.com*, your base DN would be *dc=example,dc=com*.


<a href="assets/images/KB4-c09_1.png" rel="lightbox" title="Configuring Your Server"><img class="thumbnail" src="assets/images/KB4-c09_1.png"/></a>


Complete the following fields to **Bind to Server**. 

* **Username:** The username of a user who can bind to the directory to perform search functionality. (The full DN of the user account that the application should use when connecting to the LDAP server.) The default is *cn=Directory Manager*. See the section to **Create a service user** for more information.

* **Password:** The password of the user account that the application should use when connecting to the LDAP server. The default is "N/A".

After configuring your connection details and bind credentials, select the button to **Test Connection** to ensure connectivity to the server. Once connectivity is verified, click **Next**. 

### Step 3: Configure Groups

Contrast doesn't perform Data Access Control using the integrated AD servers. In other words, roles and access to data within the application are handled by the application, and user roles are set by the Organization Administrators. However, there is an Access Control check when logging in or creating new users to ensure that the provided user belongs to the correct group in AD. 

<a href="assets/images/KB4-c09_2.png" rel="lightbox" title="Configuring Groups"><img class="thumbnail" src="assets/images/KB4-c09_2.png"/></a>

* **Contrast User Group:** This group allows users to be added to an organization and log in to the standard user interface. Most users should be part of this group. 

* **Contrast SuperAdmin Group:** This group allows users to log in to the Super Administrator interface. This interface should only be accessible to Application and System Administrators.

> **Note:** A user shouldn't belong to both the User and Admin groups. **If you add a user to both groups in your AD instance, Contrast will automatically add them to the SuperAdmin group during configuration.** 

Use the **Query for Groups** button to enable a live search of existing groups as you begin to type within the input fields.

> **Note:** To create users with AD authentication in Contrast while bypassing the Access Control check, execute the following query in the database.
 ```
 UPDATE teamserver_preferences SET property_value='true' WHERE property_name='directory.skip.user_existence.validation'
 ```

### Step 4: Advanced Settings

<a href="assets/images/KB4-c09_3.png" rel="lightbox" title="Advanced Settings"><img class="thumbnail" src="assets/images/KB4-c09_3.png"/></a>


* **User Base DN:** The default is *cn=Users*, the default container for AD. However, if your AD is configured differently, this will be the path to the top-most container where users are stored in the directory. 

 > **Example:** If your users are stored in the DN *CN=Engineering,CN=GlobalUsers,DC=intranet,dc=example,dc=com* and your base DN is *DC=intranet,DC=example,DC=com*, the value of the User DN suffix will be *CN=Engineering,DC=GlobalUsers*.
 
* **User ID Attribute:** This is the user attribute that the user will enter as the username when logging in to the Contrast application. Contrast recommends using the attribute that will be most familiar to the users. The default is **Email Address**. 
 * **Login ID:** The AD *sAMAccountName* attribute; this is usually the username that you use to log in to Windows. 
 * **Email Address:** The AD *mail* attribute containing the email address of the user.
 * **User Principal:** The AD *userPrincipal* attribute containing the full username. 

* **Search within Nested Groups:** Enable or disable searching within nested groups. The toggle is disabled by default. 
* **Follow Referrals:** In multi-tenant or multi-domain enterprise forests, LDAP queries may be referred to another server for more details. The toggle is disabled by default. 
* **Limit Referrals:** Limit to how many referrals should be followed when AD replies with a Referral response. The default is "5".

### Test the Configuration

Once all of the configuration options are set, verify that you are able to log in as both a User and an Administrator using the **Test Login** button.

<a href="assets/images/KB4-c09_4.png" rel="lightbox" title="Test Login"><img class="thumbnail" src="assets/images/KB4-c09_4.png"/></a>

> **Note:** If the test seems to take an excessive amount of time, it's likely a result of having the wrong setting for the **Follow Referrals** option in Advanced Settings. Once you switch the setting, you should be able to verify login functionality more quickly.

After all settings are verified and test logins are successful, click **Finish** to complete the configuration. You must  restart Contrast for the authentication changes to be applied.

## Create a Service User

Contrast recommends that you create a dedicated [read-only user](admin-manageorgsroleperm.html) specifically for connecting Contrast to AD. The user should be have Read permission to the directory, including users with permission limited only to the Search Base. For more information, read how to [Create Users](admin-onboardteam.html#create-user) in Contrast.

## Use Certificates

If you configure your AD integration to connect to your server using SSL, you may need to import your server's certificate into a new trustStore to be used by the Contrast JRE. 

To start, acquire the server's certificate from your administrators in PKCS#12 format. If you're using a self-signed certificate, this will be the actual AD server's certificate. If you have a private CA, you need the CA certificate for that server.

Once you have the certificate for the server, create a trustStore that contains that certificate. Run the following commands from a command shell in the directory where Contrast is installed as Administrator.

````
$ mkdir data/conf/ssl
$ jre/bin/keytool -import -file <path to certificate> -alias <hostname> \
  -keystore data/conf/ssl/truststore.jks
````

After you create your trustStore containing either your server's or CA certificate, add the following lines into the *bin/contrast-server.vmoptions* file.

````
-Djavax.net.ssl.trustStore=<full path to truststore>
-Djavax.net.ssl.trustStorePassword=<password you set for the trustStore, if any>
````

You should now be able to restart the Contrast Server service, and queries against your AD will use SSL.
