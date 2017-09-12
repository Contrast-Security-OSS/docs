<!--
title: "Configuring User Directories"
description: "A User Directory is a place where user information, specifically how a user is authenticated to the application is stored. This includes the user's login name and credentials are stored in this directory."
tags: "installation setup configuration AD LDAP directories EOP SuperAdmin"
-->

## About Directories

The **user directory** is where Contrast stores user information including the user's login name, credentials and other details about how a user is authenticated to the application. The **embedded directory** stores the username and password in the Contrast database; the password is stored as a one-way hash (non-reversible encryption). 

You can also connect to **external directories**, which store only the username in the Contrast database. Credentials for login remain in the connected directory, and that directory is responsible for performing the actual authentication of the user. 

Contrast supports [Lightweight Directory Access Protocol (LDAP)](installation-setupauth.html#ldap) and [Microsoft Active Directory (AD)](installation-setupauth.html#ad).

## Configure Directories

### User directory

To configure your user directory:

* Login to the SuperAdmin application. 
* Go to **Settings** from the navigation bar.
* Select **Authentication** from the left navigation.
* Select **Embedded**, **LDAP**, or **Active Directory**.

### Internal directory

Within the directory configuration, there isn't a specific configuration for the internal directory. However, you can configure your password policy when you're using the internal directory. To access the Password Policy configuration from **Settings**, select the **Security** tab from the left navigation. 

<a href="assets/images/KB4-c08.png" rel="lightbox" title="Security Properties"><img class="thumbnail" src="assets/images/KB4-c08.png"/></a>

----

| Option                                   | Description                                                         | Value    |
|----------------------------------------------------|----------------------------------------------------------------------------|----------|
| Maximum Failed Login Attempts                      | The number of failed attempts before an account is locked out                                       | 3        |
| Minimum Length                                     | The minimum length for user passwords                                                          | 8        |
| Minimum Numbers                                    | The minimum number of numbers required in a password                                           | 0        |
| Minimum Upper Case                                 | The minimum number of uppercase letters required in a password                                 | 0        |
| Minimum Lower Case                                 | The minimum number or lowercase letters required in a password                                 | 0        |
| Minimum Symbols                                    | The minimum number of symbols required in a password                                           | 0        |
| Password Expiration Time                           | The number of days between password expiration                                                      | 365      |
| Days after which unused accounts automatically lock | The number of days an inactive account remains active until it's automatically marked inactive | 180      |
| Active Password History                            | The option to retain a history of user password and disallow password re-use                      | Disabled |
| Password Retained                                  | The number of passwords to retain when password history is enabled                             | 5        |
| Check Minimum Password change time                  | Limits how often a password can be changed.                                                     | Disabled |
| Minimum Time                                       | The number of hours required between password changes                                          | 24       |
| Check Minimum # of different characters             | Enforces a minimum number of character sets required for a password to be considered valid      | Disabled |
| # of Characters                                    | The number of character types required                                                         | 4        |


### Connect to an external directory

When connecting Contrast to an external Directory, Contrast recommends that you create a Contrast Administrators group and a Contrast Users group before configuring the Contrast application. 

Contrast manages access control internally, so group and role management isn't delegated to the directory. As a result, only two groups are required to connect Contrast to your directory. The Contrast Administrators group controls which users can access the SuperAdmin interface while the Contrast Users group controls which users can access the user application. Users in the Contrast Users group must be added to new or existing organizations to log in to the application. User's can't belong to both groups. Directory list accounts can be used as both Contrast and Organization Administrators, so specific user accounts aren't tied to those responsibilities.

<!-- configuration details ? -->


