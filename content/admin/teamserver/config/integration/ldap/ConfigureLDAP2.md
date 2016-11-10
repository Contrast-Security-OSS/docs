<!--
title: "Configuring LDAP Authentication"
description: "An LDAP Directory is a collection of Users and Group. LDAP (Lightweight Directory Access Protocol) is an Internet protocol that web applications can use to look up those Users and Groups from the LDAP Server."
tags: "LDAP directory authentication configuration member"
-->

## Overview
An LDAP Directory is a collection of Users and Groups. LDAP (Lightweight Directory Access Protocol) is an Internet protocol that web applications can use to look up those Users and Groups from the LDAP Server. We provide integration with many different types of LDAP Servers including:
* OpenLDAP
* OpenDS
* ApacheDS
* Fedora Directory Server
* Sun Directory Server Enterprise Edition (DSEE)
* Microsoft Active Directory 
* Generic LDAP Servers

## Getting Started

When to use this option: Connecting to an LDAP Directory Server is useful if your Users and Groups are managed in a corporate directory and you want to delegate the responsibility of managing user access of the application to your corporate directory administrators.

LDAP configuration is performed by the System Administrator and requires creating two groups to be used by Contrast.

>**NOTE:** Switching to LDAP from a different authentication method such as a local database may result in issues if the user ID attribute is inconsistent.

## Configuring The Server

After choosing **LDAP** in Step 1 of the Authentication Wizard (**System Settings > Authentication**), the following information will be needed in order to integrate Contrast:

### Connecting The Server 

| Option      | Description                                                                                                      | Default                    |
|-------------|------------------------------------------------------------------------------------------------------------------|----------------------------|
| Protocol    | The protocol that should be used to communicate with the LDAP server. Will be one of LDAP or LDAPS (LDAP w/ SSL) | LDAP                       |
| Hostname    | The hostname to connect to when communicating with the LDAP server.                                              | localhost                  |
| Port        | The port to connect to when communicating with the LDAP server.                                                  | 389 (LDAP), 636 (LDAPS)    |
| Search Base | This is the Base DN (Distinguished Name) to use when communicating with the LDAP server.                         | dc=contrastsecurity,dc=com |

---

<a href="assets/images/KB4-c10_1.png" rel="lightbox" title="Configuring The Server"><img class="thumbnail" src="assets/images/KB4-c10_1.png"/></a>

<BR>

### Binding To The Server

| Option      | Description                                                                                                      | Default                    |
|-------------|------------------------------------------------------------------------------------------------------------------|----------------------------|
| Method | The method to use when connecting to the LDAP Server. This can be one of Anonymous, Simple, DIGEST-MD5 or CRAM-MD5 | Simple|
| Username | This is the full Distinguished Name (DN) of the user that should BIND to the directory to perform queries and check authentication | N/A | 
| Password | The is the password for the BIND user specified in the Username field | N/A |

---


#### Bind Methods
There are 4 supported types of BIND that can be used by TeamServer. Each of these types has different required fields:

| Method | Description | Required Fields | Optional Fields |
|-------------|------------------------------------------------------------------------------------------------------------------|----------------------------|
| Anonymous | Administrators can provide anonymous read-only access to the directory. | None |  |
| Simple    | Standard Username+Password Authentication. The username and password are verified, as provided by the LDAP Server | Username, Password |  |
| DIGEST-MD5 | A Username and Password are provided and hashed using MD5 prior to sending to the server to be authenticated. | Username, Password | SASL Realm | 
| CRAM-MD5 | A Pre-Authentication Challege is issued by the LDAP Server which is then sent back along with the MD5 hashed Username and Password to be authenticated. | Username, Password | SASL Realm | 

---

### Using a Service User
It is recommended that a dedicated user be used for binding to the LDAP Directory. This Service User should be setup as either a read-only or read-write user depending on how TeamServer is set to interact with the LDAP Directory.

### Testing LDAP Connection
Once the connection to the LDAP Server has been configured, test the connection to ensure the app will be able to connect to the LDAP Server and perform queries by clicking the "Test Connection" button located near the bottom of the form. 

<BR>

## Configure Groups
An important distinction is that Contrast does not perform Data Access Control using the integrated LDAP Servers, that is to say that roles and access to data within the application are handled by the application and the roles set for users by the Organization Administrators. That being said, there is an Access Control check when logging in (or creating new users) to ensure that the provided user does in fact belong to the correct group within the LDAP Directory.

### Find Which Group A User Belongs To

| Option        | Description                                                                                                                                                          | Default  |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
|Group Type | There are two types of groups in LDAP, depending on the functionality that your server provides and how it's configured this will be one of Static or Dynamic groups. See a breakdown of both below. | Static |
| Group Subtree | Configures whether subtrees of the Base DN should be included when searching for groups in the directory. This field is only applicable to static groups. | Enabled |
| Base DN | Like the User Base DN, this is the DN where the application can find groups in your LDAP server and should not contain the Search Base. This field is only applicable to static groups. | ou=Groups |
| Object Class | This field is not required, as this is somewhat standard across LDAP deployments. If left blank, the application will use the default value of group, groupOfUsers, groupOfUniqueUsers. This field is only applicable to static groups. | N/A |
| Group Member Attribute | This is the attribute within a group object in the directory that will contain the members of that group. This may differ for your LDAP deployment so ensure that you are using the correct attribute with your LDAP administrator. This field is only applicable to static groups. | uniqueMember |

---

<a href="assets/images/KB4-c10_2.png" rel="lightbox" title="Configuring Groups"><img class="thumbnail" src="assets/images/KB4-c10_2.png"/></a>

<BR>

>**NOTE:** The difference between a Static and Dynamic group is the way group membership is managed. In a static group, the group tracks it's members through an attribute on the object, usually something along the lines of *uniqueMember*. In Dynamic groups the User object is responsible for tracking its own membership and groups are added dynamically to the user object when the user becomes a member of a group.

### Authorizing Contrast Users

Once you have entered the configuration values, you can select the groups that will be used by the application to access the TeamServer UI. 

**Contrast User Group** This group allows users to be added to an organization and log in to the standard user interface. This is the group that most users will need to be a member of.

**Contrast SuperAdmin Group** This group allows users to log in to the Super Administrator interface. This interface should only be accessible to Application and System administrators.

It is important to note that a user can not belong to both the User and Admin groups.

You can use the **Query for Groups** button to enable a live search of existing groups as you begin to type within the input fields.


## Configuring Users
To fully integrate with an LDAP Directory, TeamServer needs to know not only how to connect to the LDAP Server, but also how to find Users and Groups within the Directory itself.


### User Management 

**User Management** - LDAP Managed (standard) or Contrast Managed. If you select Contrast Managed, then Contrast will use the LDAP Server as a credential store and will manage the users within the directory.
 
It is possible to have an LDAP server dedicated to TeamServer for authentication, if this is the case and you wish to set it up to do so, Contrast can manage the users in the Directory by setting the User Management selection to "Contrast Manages LDAP". In this mode, users will be added to the LDAP directory when they are added to the application. Most users will leave this set to "LDAP Manages Contrast" which means that Contrast will only read from LDAP and users must be added to the correct group in the directory before they can be added to the application.

<a href="assets/images/KB4-c10_3.png" rel="lightbox" title="Configurig Users"><img class="thumbnail" src="assets/images/KB4-c10_3.png"/></a>

<BR>


### Finding Users

The following information is needed to instruct Contrast how to search for users in the directory:

* **Base DN** - This is the container (under the global base DN) where Contrast should start searching for users. In most organizations, this will be a single container (e.g. ou=Users) but you should verify with your LDAP administrator that you are searching the right container.
* **Object Class** - In most deployments, this will be inetOrgPerson
* **First Name Attribute** - The attribute which contains the user's first name. Defaults to givenName
* **Last Name Attribute** - The attribute which contains the user's last name. Defaults to sn
* **Email Attribute** - The attribute which contains the user's email address. Defaults to mail
* **User Subtree** - Whether searches should be performed recursively in all subtrees of the User Base DN.
* **User ID Attribute** - This is the attribute that should be used for logging in to Contrast. In most deployments this will be uid
* **Authentication Strategy** - Bind (Standard) or Compare. If you select Compare, Contrast will compare a pre-hashed value to the value stored in the user password attribute field.
* **Password Attribute** - If you selected "Compare" for the Authentication Strategy, this is the attribute that will contain the hashed password for the user. Defaults to userPassword.


| Option        | Description                                                                                                                                                          | Default  |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Base DN       | This is the DN where users are located within the LDAP server, note that you should not include the Search DN in this value as it will be automatically appended on. | CN=Users |
| Object Class | This is the LDAP Object Class for User objects in the directory. The default setting should be correct for most LDAP deployments. | inetOrgPerson |
| First Name Attribute | This is the LDAP field that contains a user's first name. The default setting should be correct for most LDAP deployments. | givenName |
| Last Name Attribute | This is the LDAP field that contains a user's last name. The default setting should be correct for most LDAP deployments. | sn |
| Email Attribute | This is the LDAP field that contains a user's email address. The default setting should be correct for most LDAP deployments. | mail | 
| User Subtrees | Whether subtrees of the Base DN should be included when searching for users. For most LDAP deployments you will want to leave this set to enabled.                   | Enabled  |
| User ID Attribute | This is the LDAP field that should be identified as the User ID, this will be the username that users use when logging in to contrast. | uid | 
| Authentication Strategy | This is how we will attempt to authenticate users when they provide their credentials. Bind means the application will send the user's credentials to the server for authentication; while Compare means the server will hash the user's credentials and compare them to the value of the Password attribute | Bind |
| Password Attribute | This is the LDAP field that contains a user's password. This is only used for "Compare" authentication strategy and the default should be correct for most LDAP deployments | userPassword |

---


## Testing the LDAP Configuration
Now that you have configured your application to connect to LDAP, set up User and Group mapping information and selected your group, it's time to verify that the Group and User mappings are correctly configured. Click on the **Test Login** button at the bottom of the form. 

<a href="assets/images/KB4-c09_4.png" rel="lightbox" title="Test Login"><img class="thumbnail" src="assets/images/KB4-c09_4.png"/></a>

<BR>

Once you have successfully logged in as both a User and an Administrator, click **Finish** to complete the configuration. You will need to restart TeamServer in order for the authentication changes to be applied.
