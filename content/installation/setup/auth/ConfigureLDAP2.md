<!--
title: "Configuring LDAP Authentication"
description: "An LDAP Directory is a collection of Users and Group. LDAP (Lightweight Directory Access Protocol) is an Internet protocol that web applications can use to look up those Users and Groups from the LDAP Server."
tags: "installation setup LDAP directory authentication configuration member"
-->

##About Contrast and LDAP

Contrast provides integration with many types of Lightweight Directory Access Protocol (LDAP) servers. LDAP is an Internet protocol which web applications can use to look up users or groups listed on an LDAP directory server. Supported LDAP server types include:

* OpenLDAP
* OpenDS
* ApacheDS
* Fedora Directory Server
* Sun Directory Server Enterprise Edition (DSEE)
* Microsoft Active Directory 
* Generic LDAP Servers

## Get Started

Connecting to a LDAP directory server is useful if you manage users and groups in a corporate directory, and you want to delegate the responsibility of managing user access of the application to your corporate directory administrators. The System Administrator performs LDAP configuration and must create two groups to be used by Contrast. Go to **System Settings** and choose **Authentication** to begin configuration in the Authentication Wizard. 

>**Note:** Switching to LDAP from a different authentication method such as a local database may result in issues if the user ID attribute is inconsistent.

## Configure the Server

In Step 1 of the Authentication Wizard, choosing **LDAP**. Step 2 provides required fields to **Connect Server** and **Bind to Server**. 

<a href="assets/images/KB4-c10_1.png" rel="lightbox" title="Configuring The Server"><img class="thumbnail" src="assets/images/KB4-c10_1.png"/></a>

### Connect the server 

| Option      | Description                                                                                                      | Default                    |
|-------------|------------------------------------------------------------------------------------------------------------------|----------------------------|
| Protocol    | The protocol that should be used to communicate with the LDAP server; choose between LDAP or LDAP with SSL (LDAPS) options.| LDAP                     |
| Hostname    | The hostname to which to connect when communicating with the LDAP server.                                              | localhost                  |
| Port        | The port to which to connect when communicating with the LDAP server.                                                  | 389 (LDAP), 636 (LDAPS)    |
| Search Base | The Base distinguished name (DN) to use when communicating with the LDAP server.                     | dc=contrastsecurity,dc=com |

---


### BIND to server

| Option      | Description                                                                         | Default                    |
|-------------|-------------------------------------------------------------------------------------|----------------------------|
| Method | The method to use when connecting to the LDAP server. Choose between Anonymous, Simple, DIGEST-MD5 or CRAM-MD5. | Simple|
| Username | The full DN of the user that should bind to the directory to perform queries and check authentication. | N/A | 
| Password | The password for the BIND user specified in the Username field. | N/A |

---

There are four supported types of BIND that can be used by Contrast. Each of the types has different required fields:

| Method | Description | Required Fields | Optional Fields |
|-------------|------------------------------------------------------------------------------------------------|------------------|
| Anonymous | Administrators provide anonymous read-only access to the directory. | None | N/A |
| Simple    | Standard username and password authentication; the username and password are verified as provided by the LDAP server. | Username, Password | N/A |
| DIGEST-MD5 | A username and password are provided and hashed using MD5 prior to sending to the server to be authenticated. | Username, Password | SASL Realm | 
| CRAM-MD5 | LDAP server issus a pre-authentication challege, which is sent with the MD5 hashed username and password to be authenticated. | Username, Password | SASL Realm | 

---

### Implement a service user

Contrast recommends that you implement a dedicated user for binding to the LDAP directory. This Service User should be setup as either a read-only or read-write user, depending on how Contrast is configured to interact with the LDAP directory.

### Test the LDAP connection
Once you configure the connection to the LDAP server, click the **Test Connection** button. Testing the connection ensures that the application can connect to the LDAP server and perform queries. 

---

## Configure Groups

Organization Administrators set the roles for users, and each application handles roles and access to data within that application. Contrast doesn't perform data access control using the integrated LDAP servers. However, the Access Control check when you log in or create new users to ensure that the provided user belongs to the correct group within the LDAP directory.

<a href="assets/images/KB4-c10_2.png" rel="lightbox" title="Configuring Groups"><img class="thumbnail" src="assets/images/KB4-c10_2.png"/></a>


Several different groups options are available:


| Option        | Description                                                                                                                                                          | Default  |
|---------------|-------------------------------------------------------------------------------------------------------|----------|
|Group Type | Groups in LDAP are either Static or Dynamic, depending on the functionality that your server provides and how it's configured. See the **Note** following this table for an explanation of both. | Static |
| Group Subtree | Configures whether subtrees of the Base DN should be included when searching for groups in the directory. This field is only applicable to Static groups. | Enabled |
| Base DN | The DN where the application can find groups in your LDAP server (like the User Base DN); it shouldn't contain the Search Base. This field is only applicable to Static groups. | ou=Groups |
| Object Class | If left blank, the application uses the default value of *group, groupOfUsers, groupOfUniqueUsers*. This isn't a  required field, as it's somewhat standard across LDAP deployments. This field is only applicable to Static groups. | N/A |
| Group Member Attribute | The attribute within a group object in the directory that contains the members of that group. This may differ for your LDAP deployment, so ensure that you are using the correct attribute with your LDAP administrator. This field is only applicable to Static groups. | uniqueMember |

---

>**Note:** The difference between Static and Dynamic groups is the way group membership is managed. In a Static group, the group tracks its members through an attribute on the object, such as *uniqueMember*. In a Dynamic group, the user object is responsible for tracking its own membership, and groups are added dynamically to the user object when the user becomes a member of a group.

### Authorize Contrast users

Once you enter the configuration values, select the groups that the application will use to access the Contrast interface. **A user can't belong to both the User and Admin groups. If you add them to both groups in your LDAP instance, Contrast won't be able to find them during configuration.**

* **Contrast User Group:** This group allows users to be added to an organization and log in to the standard interface. This group is appropriate for most users. 

* **Contrast SuperAdmin Group:** This group allows users to log in to the Super Administrator interface, which should only be accessible to Application and System administrators.

Use the **Query for Groups** button to enable a live search of existing groups as you begin to type within the input fields.

## Configure Users
To fully integrate with a LDAP directory, Contrast needs information on how to connect to the LDAP server as well as how to find users and groups within the directory.

### User management 

User Management is LDAP Managed (standard) or Contrast Managed. If you select Contrast Managed, Contrast uses the LDAP server as a credential store and manages the users within the directory. If you choose to dedicate a LDAP server to Contrast for authentication, Contrast manages the users in the directory by setting the User Management selection to **Contrast Manages LDAP**. In this mode, users are added to the LDAP directory when they're added to the application. Most users leave this set to **LDAP Manages Contrast**, which means that Contrast only reads from LDAP, and users must be added to the correct group in the directory before they can be added to the application.

<a href="assets/images/KB4-c10_3.png" rel="lightbox" title="Configuring Users"><img class="thumbnail" src="assets/images/KB4-c10_3.png"/></a>


### Finding users

You must have the following information to instruct Contrast on how to search for users in the directory.

* **Base DN:** The container (under the global base DN) where Contrast should start searching for users. In most organizations, this is a single container (e.g., *ou=Users*), but your LDAP administrator should verify that you're searching the right container.
* **Object Class:** In most deployments, this is *inetOrgPerson*.
* **First Name Attribute:** The attribute that contains the user's first name. Defaults to *givenName*.
* **Last Name Attribute:** The attribute that contains the user's last name. Defaults to *sn*.
* **Email Attribute:** The attribute that contains the user's email address. Defaults to *mail*.
* **User Subtree:** Determines if searches should be performed recursively in all subtrees of the User Base DN.
* **User ID Attribute:** The attribute that should be used for logging in to Contrast. In most deployments, this is *uid*.
* **Authentication Strategy:** BIND (Standard) or Compare; if you select **Compare**, Contrast compares a pre-hashed value to the value stored in the user password attribute field.
* **Password Attribute:** If you selected **Compare** for the Authentication Strategy, this attribute contains the hashed password for the user. Defaults to *userPassword*.


| Option        | Description                                                                                                                                                          | Default  |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Base DN       | The DN where users are located within the LDAP server; note that you should not include the Search DN in this value as it's automatically appended | CN=Users |
| Object Class | The LDAP Object Class for user objects in the directory. The default setting is correct for most LDAP deployments. | inetOrgPerson |
| First Name Attribute | The LDAP field that contains a user's first name. The default setting is correct for most LDAP deployments. | givenName |
| Last Name Attribute | The LDAP field that contains a user's last name. The default setting is correct for most LDAP deployments. | sn |
| Email Attribute | The LDAP field that contains a user's email address. The default setting is correct for most LDAP deployments. | mail | 
| User Subtrees | Determines if subtrees of the Base DN should be included when searching for users. For most LDAP deployments, you want to leave this enabled.                   | Enabled  |
| User ID Attribute | The LDAP field that should be identified as the User ID. This is the username to enter when logging in to contrast. | uid | 
| Authentication Strategy | How Contrast attempts to authenticate users when they provide their credentials. BIND means the application sends the user's credentials to the server for authentication; Compare means the server hashes the user's credentials and compares them to the value of the Password attribute. | BIND |
| Password Attribute | The LDAP field that contains a user's password. This is only used for Compare authentication strategy. The default should be correct for most LDAP deployments. | userPassword |

---

## Test the LDAP configuration

Once you've configured your application to connect to LDAP, set up user and group mapping information and selected your group, it's time to verify that the group and user mappings are correctly configured. Click on the **Test Login** button at the bottom of the form. 

<a href="assets/images/KB4-c09_4.png" rel="lightbox" title="Test Login"><img class="thumbnail" src="assets/images/KB4-c09_4.png"/></a>

Once you've successfully logged in as both a User and an Administrator, click **Finish** to complete the configuration. You must restart Contrast in order for the authentication changes to be applied.

## Self-Signed or Privately Signed Certificates

If you configure your LDAP integration to connect to your server using SSL, you may need to import your server's certificate into a new trust store to be used by the Contrast JRE. 

To begin, acquire the server's certificate from your administrators in PKCS#12 format. If you're using a self-signed certificate, this is the actual LDAP server's certificate. If you have a Private certificate authority (CA), you need the CA certificate for that server.

Once you have the certificate for the server, create a trust store that contains that certificate. Run the following commands from a command shell in the directory where Contrast is installed as Administrator.

````
$ mkdir data/conf/ssl
$ jre/bin/keytool -import -file <path to certificate> -alias <hostname> \
  -keystore data/conf/ssl/truststore.jks
````

After you create your truststore containing either your server's or CA certificate, add the following lines to the ***bin/contrast-server.vmoptions*** file:

````
-Djavax.net.ssl.trustStore=<full path to truststore>
-Djavax.net.ssl.trustStorePassword=<password you set for the trust store, if any>
````

You should now restart the Contrast server service, and verify that queries against LDAP now use SSL.

