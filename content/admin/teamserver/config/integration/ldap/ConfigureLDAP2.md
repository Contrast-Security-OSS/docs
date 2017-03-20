<!--
title: "Configuring LDAP Authentication"
description: "An LDAP Directory is a collection of Users and Group. LDAP (Lightweight Directory Access Protocol) is an Internet protocol that web applications can use to look up those Users and Groups from the LDAP Server."
tags: "LDAP directory authentication configuration member"
-->

## Overview
A LDAP Directory is a collection of users and groups. LDAP (Lightweight Directory Access Protocol) is an Internet protocol that web applications can use to look up those users and groups from the LDAP server. Contrast provides integration with many different types of LDAP servers including:
* OpenLDAP
* OpenDS
* ApacheDS
* Fedora Directory Server
* Sun Directory Server Enterprise Edition (DSEE)
* Microsoft Active Directory 
* Generic LDAP Servers

## Getting Started

Connecting to a LDAP directory server is useful if you manage users and groups in a corporate directory, and you want to delegate the responsibility of managing user access of the application to your corporate directory administrators.

LDAP configuration is performed by the System Administrator and requires creating two groups to be used by Contrast.

>**NOTE:** Switching to LDAP from a different authentication method such as a local database may result in issues if the user ID attribute is inconsistent.

## Configuring The Server

After choosing **LDAP** in Step 1 of the Authentication Wizard (**System Settings > Authentication**), the you must provide the following information in order to integrate Contrast:

### Connecting the server 

| Option      | Description                                                                                                      | Default                    |
|-------------|------------------------------------------------------------------------------------------------------------------|----------------------------|
| Protocol    | The protocol that should be used to communicate with the LDAP server. Will be one of LDAP or LDAPS (LDAP w/ SSL) | LDAP                       |
| Hostname    | The hostname to connect to when communicating with the LDAP server.                                              | localhost                  |
| Port        | The port to connect to when communicating with the LDAP server.                                                  | 389 (LDAP), 636 (LDAPS)    |
| Search Base | This is the Base DN (Distinguished Name) to use when communicating with the LDAP server.                         | dc=contrastsecurity,dc=com |

---

<a href="assets/images/KB4-c10_1.png" rel="lightbox" title="Configuring The Server"><img class="thumbnail" src="assets/images/KB4-c10_1.png"/></a>

<BR>

### Binding to the server

| Option      | Description                                                                                                      | Default                    |
|-------------|------------------------------------------------------------------------------------------------------------------|----------------------------|
| Method | The method to use when connecting to the LDAP Server. This can be one of Anonymous, Simple, DIGEST-MD5 or CRAM-MD5 | Simple|
| Username | This is the full Distinguished Name (DN) of the user that should BIND to the directory to perform queries and check authentication | N/A | 
| Password | The is the password for the BIND user specified in the Username field | N/A |

---


#### Bind methods
There are four supported types of BIND that can be used by Contrast. Each of these types has different required fields:

| Method | Description | Required Fields | Optional Fields |
|-------------|------------------------------------------------------------------------------------------------------------------|----------------------------|
| Anonymous | Administrators can provide anonymous read-only access to the directory. | None |  |
| Simple    | Standard Username+Password Authentication. The username and password are verified, as provided by the LDAP Server | Username, Password |  |
| DIGEST-MD5 | A Username and Password are provided and hashed using MD5 prior to sending to the server to be authenticated. | Username, Password | SASL Realm | 
| CRAM-MD5 | A Pre-Authentication Challege is issued by the LDAP Server which is then sent back along with the MD5 hashed Username and Password to be authenticated. | Username, Password | SASL Realm | 

---

### Implementing a service user
Contrast recommendeds that you implement a dedicated user for binding to the LDAP Directory. This Service User should be setup as either a read-only or read-write user, depending on how Contrast is set to interact with the LDAP directory.

### Testing LDAP connection
Once you configure the connection to the LDAP server, test the connection to ensure that the application can connect to the LDAP server and perform queries by clicking the **Test Connection** button located near the bottom of the form. 

<BR>

## Configure Groups
It's important to note that each application handles roles and access to data within the application, and Organization Administrators set the roles for users. Contrast doesn't perform Data Access Control using the integrated LDAP servers. However, the Access Control check when you log in (or create new users) ensures that the provided user belongs to the correct group within the LDAP directory.

### Find the group to which a user belongs

| Option        | Description                                                                                                                                                          | Default  |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
|Group Type | There are two types of groups in LDAP. Depending on the functionality that your server provides and how it's configured, this is one of Static or Dynamic groups. See a breakdown of both below. | Static |
| Group Subtree | Configures whether subtrees of the Base DN should be included when searching for groups in the directory. This field is only applicable to static groups. | Enabled |
| Base DN | Like the User Base DN, this is the DN where the application can find groups in your LDAP server and should not contain the Search Base. This field is only applicable to static groups. | ou=Groups |
| Object Class | This field is not required, as this is somewhat standard across LDAP deployments. If left blank, the application will use the default value of group, groupOfUsers, groupOfUniqueUsers. This field is only applicable to static groups. | N/A |
| Group Member Attribute | This is the attribute within a group object in the directory that contains the members of that group. This may differ for your LDAP deployment, so ensure that you are using the correct attribute with your LDAP administrator. This field is only applicable to static groups. | uniqueMember |

---

<a href="assets/images/KB4-c10_2.png" rel="lightbox" title="Configuring Groups"><img class="thumbnail" src="assets/images/KB4-c10_2.png"/></a>

<BR>

>**NOTE:** The difference between Static and Dynamic groups is the way group membership is managed. In a Static group, the group tracks its members through an attribute on the object - like *uniqueMember*. In a Dynamic group, the user object is responsible for tracking its own membership, and groups are added dynamically to the user object when the user becomes a member of a group.

### Authorizing Contrast users

Once you enter the configuration values, select the groups that the application will use to access the Contrast UI. 

**Contrast User Group:** This group allows users to be added to an organization and log in to the standard UI. This group is appropriate for most users. 

**Contrast SuperAdmin Group:** This group allows users to log in to the Super Administrator UI. This UI should only be accessible to Application and System administrators.

> **Note:** A user can't belong to both the User and Admin groups.

You can use the **Query for Groups** button to enable a live search of existing groups as you begin to type within the input fields.


## Configuring Users
To fully integrate with an LDAP directory, Contrast needs to know how to connect to the LDAP server as well as how to find users and groups within the directory.


### User management 

**User Management** - LDAP Managed (standard) or Contrast Managed. If you select **Contrast Managed**, Contrast uses the LDAP server as a credential store and manages the users within the directory.
 
It's possible to have an LDAP server dedicated to Contrast for authentication. If this is the case and you wish to set it up to do so, Contrast can manage the users in the directory by setting the User Management selection to **Contrast Manages LDAP**. In this mode, users are added to the LDAP directory when they are added to the application. Most users leave this set to **LDAP Manages Contrast**, which means that Contrast only reads from LDAP, and users must be added to the correct group in the directory before they can be added to the application.

<a href="assets/images/KB4-c10_3.png" rel="lightbox" title="Configurig Users"><img class="thumbnail" src="assets/images/KB4-c10_3.png"/></a>

<BR>


### Finding users

The following information is needed to instruct Contrast how to search for users in the directory.

* **Base DN:** This is the container (under the global base DN) where Contrast should start searching for users. In most organizations, this is a single container (e.g., ou=Users), but you should verify with your LDAP administrator that you're searching the right container.
* **Object Class:** In most deployments, this is *inetOrgPerson*.
* **First Name Attribute:** The attribute that contains the user's first name. Defaults to *givenName*.
* **Last Name Attribute:** The attribute that contains the user's last name. Defaults to *sn*.
* **Email Attribute:** The attribute that contains the user's email address. Defaults to *mail*.
* **User Subtree:** Determines if searches should be performed recursively in all subtrees of the User Base DN.
* **User ID Attribute:** The attribute that should be used for logging in to Contrast. In most deployments, this is *uid*.
* **Authentication Strategy:** Bind (Standard) or Compare. If you select **Compare**, Contrast compares a pre-hashed value to the value stored in the user password attribute field.
* **Password Attribute:** If you selected **Compare** for the Authentication Strategy, this attribute contains the hashed password for the user. Defaults to *userPassword*.


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


## Testing the LDAP configuration
Once you've configured your application to connect to LDAP, set up user and group mapping information and selected your group, it's time to verify that the group and user mappings are correctly configured. Click on the **Test Login** button at the bottom of the form. 

<a href="assets/images/KB4-c09_4.png" rel="lightbox" title="Test Login"><img class="thumbnail" src="assets/images/KB4-c09_4.png"/></a>

<BR>

Once you've successfully logged in as both a User and an Administrator, click **Finish** to complete the configuration. You must restart Contrast in order for the authentication changes to be applied.
