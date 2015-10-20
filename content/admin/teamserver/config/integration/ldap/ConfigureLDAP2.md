<!--
title: "Configuring LDAP Authentication"
description: "An LDAP Directory is a collection of Users and Group. LDAP (Lightweight Directory Access Protocol) is an Internet protocol that web applications can use to look up those Users and Groups from the LDAP Server."
-->

## Overview
An LDAP Directory is a collection of Users and Group. LDAP (Lightweight Directory Access Protocol) is an Internet protocol that web applications can use to look up those Users and Groups from the LDAP Server. We provide integration with many different types of LDAP Servers including:
* OpenLDAP
* OpenDS
* ApacheDS
* Fedora Directory Server
* Sun Directory Server Enterprise Edition (DSEE)
* Microsoft Active Directory 
* Generic LDAP Servers

When to use this option: Connecting to an LDAP Directory Server is useful if your Users and Groups are managed in a corporate directory and you want to delegate the responsibility of managing user access for the application to your corporate directory administrators.

## What You'll Need
Before integrating with your Enterprise LDAP Servers for Authentication, there are some pieces of information that you will need and you will need to create two groups for use by Contrast.

## Contrast Authentication Groups
An important distinction is that Contrast does not perform Data Access Control using the integrated LDAP Servers, that is to say that roles and access to data within the application are handled by the application and the roles set for users by the Organization Administrators. That being said, there is an Access Control check when logging in (or creating new users) to ensure that the provided user does in fact belong to the correct group within the LDAP Directory.

### Contrast Users Group
This group allows users to be added to an organization and login to the standard user interface. This is the group that most of your users will need to be a member of.

### Contrast Admin Group
This group allows users to log in to the Super Administrative interface. This interface should only be accessible to application and system administrators.

It is important to note that a user can not belong to both the Users and Admin group.



### Connecting to an LDAP Directory in TeamServer
 
The first thing to configure in TeamServer is how the application should connect with the LDAP server. 

| Option      | Description                                                                                                      | Default                    |
|-------------|------------------------------------------------------------------------------------------------------------------|----------------------------|
| Protocol    | The protocol that should be used to communicate with the LDAP server. Will be one of LDAP or LDAPS (LDAP w/ SSL) | LDAP                       |
| Hostname    | The hostname to connect to when communicating with the LDAP server.                                              | localhost                  |
| Port        | The port to connect to when communicating with the LDAP server.                                                  | 389 (ldap), 636 (ldaps)    |
| Search Base | This is the Base DN (Distinguished Name) to use when communicating with the LDAP server.                         | dc=contrastsecurity,dc=com |

---

<a href="assets/images/KB4-c10_1.png" rel="lightbox" title="Connecting To Your Server"><img class="thumbnail" src="assets/images/KB4-c10_1.png"/></a>

| Option      | Description                                                                                                      | Default                    |
|-------------|------------------------------------------------------------------------------------------------------------------|----------------------------|
| Method | The method to use when connecting to the LDAP Server. This can be one of Anonymous, Simple, DIGEST-MD5 or CRAM-MD5 | Simple|
| SASL Realm | When using DIGEST or CRAM Authentication an LDAP Administrator may specify different realms to separate context within the Directory | N/A |
| Username | This is the full Distinguished Name (DN) of the user that should BIND to the directory to perform queries and check authentication | N/A | 
| Password | The is the password for the BIND user specified in the Username field | N/A |

---

<a href="assets/images/KB4-c10_2.png" rel="lightbox" title="Binding To Your Server"><img class="thumbnail" src="assets/images/KB4-c10_2.png"/></a>

## BIND Methods
There are 4 supported types of BIND that can be used by TeamServer. Each of these types has different required fields:

| Method | Description | Required Fields | Optional Fields |
|-------------|------------------------------------------------------------------------------------------------------------------|----------------------------|
| Anonymous | Administrators can provide anonymous read-only access to the directory. | None |  |
| Simple    | Standard Username+Password Authentication. The username and password are verified, as provided by the LDAP Server | Username, Password |  |
| DIGEST-MD5 | A Username and Password are provided and hashed using MD5 prior to sending to the server to be authenticated. | Username, Password | SASL Realm | 
| CRAM-MD5 | A Pre-Authentication Challege is issued by the LDAP Server which is then sent back along with the MD5 hashed Username and Password to be authenticated. | Username, Password | SASL Realm | 

## Using a Service User
It is recommended that a dedicated user be used for binding to the LDAP Directory. This Service User should be setup as either a read-only or read-write user depending on how TeamServer is set to interact with the LDAP Directory.

## Testing LDAP Connection
Once the connection to the LDAP Server has been configured, test the connection to ensure the app will be able to connect to the LDAP Server and perform queries by clicking the "Test Connection" button located near the bottom of the form. 

## Finding Users in the Directory
The following information is needed to instruct Contrast how to search for users in the directory:
* **User Management** - LDAP Managed (standard) or Contrast Managed. If you select Contrast Managed, then Contrast will use the LDAP Server as a credential store and will manage the users within the directory.
* **Authentication Strategy** - Bind (Standard) or Compare. If you select Compare, Contrast will compare a pre-hashed value to the value stored in the user password attribute field.
* **User Base DN** - This is the container (under the global base DN) where Contrast should start searching for users. In most organizations, this will be a single container (e.g. ou=Users) but you should verify with your LDAP administrator that you are searching the right container.
* **Use Subtrees** - Whether searches should be performed recursively in all subtrees of the User Base DN.
* **Object Class** - In most deployments, this will be inetOrgPerson
* User ID Attribute - This is the attribute that should be used for logging in to Contrast. In most deployments this will be uid
* **First Name Attribute** - The attribute which contains the user's first name. Defaults to givenName
* **Last Name Attribute** - The attribute which contains the user's last name. Defaults to sn
* **Email Attribute** - The attribute which contains the user's email address. Defaults to mail
* **Password Attribute** - If you selected "Compare" for the Authentication Strategy, this is the attribute that will contain the hashed password for the user. Defaults to userPassword.

### Configuring How to Find Users and Groups
To fully integrate with an LDAP Directory, TeamServer needs to know not only how to connect to the LDAP Server but also how to find Users and Groups within the Directory itself.

### LDAP User Management 

<a href="assets/images/KB4-c10_3.png" rel="lightbox" title="User Management"><img class="thumbnail" src="assets/images/KB4-c10_3.png"/></a>
 
It is possible to have an LDAP server dedicated to TeamServer for authentication, if this is the case and you wish to set it up to do so, Contrast can manage the users in the Directory by setting the User Management selection to "Contrast Manages LDAP". In this mode, users will be added to the LDAP directory when they are added to the application. Most users will leave this set to "LDAP Manages Contrast" which means that Contrast will only read from LDAP and users must be added to the correct group in the directory before they can be added to the application.

## Configuring How Users are Located in the Directory
The next step is to instruct TeamServer how it should find users within the directory. In most cases the vast majority of these settings can be left to their default values.

| Option        | Description                                                                                                                                                          | Default  |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Base DN       | This is the DN where users are located within the LDAP server, note that you should not include the Search DN in this value as it will be automatically appended on. | CN=Users |
| User Subtrees | Whether subtrees of the Base DN should be included when searching for users. For most LDAP deployments you will want to leave this set to enabled.                   | Enabled  |
| Object Class | This is the LDAP Object Class for User objects in the directory. The default setting should be correct for most LDAP deployments. | inetOrgPerson | 
| User ID Attribute | This is the LDAP field that should be identified as the User ID, this will be the username that users use when logging in to contrast. | uid | 
| First Name Attribute | This is the LDAP field that contains a user's first name. The default setting should be correct for most LDAP deployments. | givenName |
| Last Name Attribute | This is the LDAP field that contains a user's last name. The default setting should be correct for most LDAP deployments. | sn |
| Email Attribute | This is the LDAP field that contains a user's email address. The default setting should be correct for most LDAP deployments. | mail |
| Authentication Strategy | This is how we will attempt to authenticate users when they provide their credentials. Bind means the application will send the user's credentials to the server for authentication; while Compare means the server will hash the user's credentials and compare them to the value of the Password attribute | Bind |
| Password Attribute | This is the LDAP field that contains a user's password. This is only used for "Compare" authentication strategy and the default should be correct for most LDAP deployments | userPassword |

---

<a href="assets/images/KB4-c10_4.png" rel="lightbox" title="Finding Users"><img class="thumbnail" src="assets/images/KB4-c10_4.png"/></a>

## Configuring How Groups are Located in the Directory
The last step in configuring the LDAP integration is to configure how TeamServer finds Groups in the directory.

| Option        | Description                                                                                                                                                          | Default  |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
|Group Type | There are two types of groups in LDAP, depending on the functionality that your server provides and how it's configured this will be one of Static or Dynamic groups. See a breakdown of both below. | Static |
| Base DN | Like the User Base DN, this is the DN where the application can find groups in your LDAP server and should not contain the Search Base. This field is only applicable to static groups. | ou=Groups |
| Group Subtree | Configures whether subtrees of the Base DN should be included when searching for groups in the directory. This field is only applicable to static groups. | Enabled |
| Object Class | This field is not required, as this is somewhat standard across LDAP deployments. If left blank, the application will use the default value of group, groupOfUsers, groupOfUniqueUsers. This field is only applicable to static groups. | N/A |
| Group Member Attribute | This is the attribute within a group object in the directory that will contain the members of that group. This may differ for your LDAP deployment so ensure that you are using the correct attribute with your LDAP administrator. This field is only applicable to static groups. | uniqueMember |
| Member of Attribute | This is the attribute within a user object that will contain the groups that user is a member of. This may differ for your LDAP deployment so ensure that you are using the correct attribute with your LDAP administrator. This field is only applicable to dynamic groups. | memberOf|

---

<a href="assets/images/KB4-c10_5.png" rel="lightbox" title="Finding User Groups"><img class="thumbnail" src="assets/images/KB4-c10_5.png"/></a>

The different between a Static and Dynamic group is the way group membership is managed. In a static group, the group tracks it's members through an attribute on the object, usually something along the lines of uniqueMember. In Dynamic groups the User object is responsible for tracking it's own membership and groups are added dynamically to the user object when the user becomes a member of a group.

## Selecting Groups for Authentication to TeamServer

<a href="assets/images/KB4-c10_6.png" rel="lightbox" title="Group Authentication"><img class="thumbnail" src="assets/images/KB4-c10_6.png"/></a>

Once you have verified all of your configuration values are correct and you've tested your connection we can select the groups that will be used by the application for providing access to log in to the TeamServer UI. Click on the "Query for Groups" button near the bottom of the form to enable the group selection boxes. Use the drop-downs to select the groups designated for Contrast Admin and Contrast Users. 

## Testing the LDAP Configuration
Now that you have configured your application to connect to LDAP, setup User and Group mapping information and selected your group, it's time to perform the final validation step prior to writing these settings out to the configuration files. The final step is to verify the group and user mappings are correctly configured by testing some logins. To test, click on the "Test Login" button near the bottom of the form. 

<a href="assets/images/KB4-c10_7.png" rel="lightbox" title="Test Login"><img class="thumbnail" src="assets/images/KB4-c10_7.png"/></a>

You can test both normal users and superadmin accounts through this form. When you are able to successfully test your login for both user types you can finally use the "Save" button and you will receive a warning about the impact of changing authentication type in TeamServer. Accept the changes and restart your TeamServer and you will now be able to login using the accounts that belong to groups within the directory.
