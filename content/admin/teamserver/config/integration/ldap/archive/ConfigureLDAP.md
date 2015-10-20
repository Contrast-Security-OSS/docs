<!--
title: "Configuring LDAP Authentication"
description: "Guidelines for Configuring LDAP"
-->

## What You'll Need
Before integrating with your Enterprise LDAP Servers for Authentication, there are some pieces of information that you will need and you will need to create two groups for use by Contrast.

## Contrast Authentication Groups
An important distinction is that Contrast does not perform Data Access Control using the integrated LDAP Servers, that is to say that roles and access to data within the application are handled by the application and the roles set for users by the Organization Administrators. That being said, there is an Access Control check when logging in (or creating new users) to ensure that the provided user does in fact belong to the correct group within the LDAP Directory. 

### Contrast Users Group 
This group allows users to be added to an organization and login to the standard user interface. This is the group that most of your users will need to be a member of.

### Contrast Admin Group 
This group allows users to log in to the Super Administrative interface. This interface should only be accessible to application and system administrators.

It is important to note that a user can not belong to both the Users and Admin group.

## Connecting to the LDAP Server
The following information is needed to establish a connection to your LDAP Server:
* **Protocol** - LDAP or LDAPS (SSL)
* **Hostname or IP Address** - The hostname or IP Address of the LDAP Server
* **Port** - Standard ports are 389 for LDAP and 636 for LDAPS
* **Authentication Method** - Anonymous, Simple, CRAM-MD5, DIGEST-MD5
* **SASL Realm** - If you are using CRAM or DIGEST and have a SASL Realm configured
* **Bind User DN** - The Distinguished Name of the User that will bind to the directory
* **Bind User Password** - The password for the bind user
* **Base DN** - The Distinguished Name that is the base for your organization. Usually this is your domain name - for instance if your domain is example.com, your base DN would be dc=example,dc=com

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

## How to Authorize User Group Membership
* **Group Type** - Dynamic or Static. Dynamic means that Users are mapped to groups reverse. Generally, this means that an attribute, such as memberOf exists on each user record containing a list of what groups that user belongs to. This is standard in some LDAP Servers such as OpenDS and Oracle Directory Server but not servers such as OpenLDAP. Static groups indicate that each group contains a listing of that groups members. This model is universally supported by all LDAP servers, however searching for users takes slightly longer.
* **Membership Attribute** - When using Dynamic Groups, this is the name of the attribute on a user object that contains the list of groups that user belongs to. The name of this attribute varies from server to server, but the most common attribute name is memberOf 
* **Group Base DN** - This is the container within the global DN where groups are stored in the directory. It should not include the global DN and generally will look something like ou=Groups 
* **Object Class** - If left blank, the standard object classes (group, groupOfNames, groupOfUniqueNames) will be supported. In most cases, this should not need to be changed.
* **Member Attribute** - When using static group mappings, this is the attribute on the group that contains the list of users that belong to that group. While this varies across servers, generally it will be either member or uniqueMember depending on the object class of the group itself (***groupOfNames*** vs ***groupOfUniqueNames***).
