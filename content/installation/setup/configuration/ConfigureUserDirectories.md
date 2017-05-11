<!--
title: "Configuring User Directories"
description: "A User Directory is a place where user information, specifically how a user is authenticated to the application is stored. This includes the user's login name and credentials are stored in this directory."
tags: "installation setup configuration AD LDAP directories EOP SuperAdmin"
-->

## About User Directories
A User Directory is a place where user information, specifically how a user is authenticated to the application is stored. This includes the user's login name and credentials are stored in this directory. 

The Embedded Directory stores the username and password in the Contrast Database; the password is stored as a one-way hash (non-reversible encryption). You can also connect to External Directories which will store only the username in the Contrast Database, credentials for login remain in the connected directory and that directory is responsible for performing the actual authentication of the user given the credentials supplied by the user at login. 

## Configuring a User Directory
To configure your user directory:
* Login to the SuperAdmin Application 
* Choose Settings from the navigation bar
* Select Authentication from the left navigation
* Select Embedded, LDAP, or Active Directory

## Configuring the Internal Directory
There is no specific configuration for the Internal Directory within the Directory Configuration, however your password policy can be configured when you are using the Internal Directory. To access the Password Policy configuration:

* Login to the SuperAdmin Application
* Choose **Settings** from the navigation bar
* Select **Security** from the left navigation 

| Option                                             | Description                                                                                    | Value    |
|----------------------------------------------------|------------------------------------------------------------------------------------------------|----------|
| Maximum Failed Login Attempts                      | How many failed attempts before an account is locked out                                       | 3        |
| Minimum Length                                     | The minimum length for user passwords                                                          | 8        |
| Minimum Numbers                                    | The minimum number of numbers required in a password                                           | 0        |
| Minimum Upper Case                                 | The minimum number of uppercase letters required in a password                                 | 0        |
| Minimum Lower Case                                 | The minimum number or lowercase letters required in a password                                 | 0        |
| Minimum Symbols                                    | The minimum number of symbols required in a password                                           | 0        |
| Password Expiration Time                           | How many days between password expiration                                                      | 365      |
| Days after which unusedaccounts automatically lock | How many days an inactive account will remain active until it is automatically marked inactive | 180      |
| Active Password History                            | Whether to retain a history of user password and disallow password re-use                      | Disabled |
| Password Retained                                  | The number of passwords to retain when password history is enabled                             | 5        |
| Check Minimum Passwordchange time                  | Limit how often a password can be changed.                                                     | Disabled |
| Minimum Time                                       | The number of hours required between password changes                                          | 24       |
| Check Minimum # of differentcharacters             | Enforce a minimum number of character sets required for a password to be considered valid      | Disabled |
| # of Characters                                    | The number of character types required                                                         | 4        |

---

<a href="assets/images/KB4-c08.png" rel="lightbox" title="Security Properties"><img class="thumbnail" src="assets/images/KB4-c08.png"/></a>

## Connecting to an External Directory
When connecting TeamServer to an External Directory there is a little preparation that must be completed prior to configuring the TeamServer. 

## How External Directory Authentication works
TeamServer manages it's own Access Control internally, so group/role management is not delegated to the Directory. As a result, only two groups are required to connect TeamServer to your Directory. One group (Contrast Admins) controls which users can access the SuperAdmin interface while the other (Contrast Users) controls which users can access the user application. Users in the Contrast Users group must be added to new or existing organizations to allow them to log in to the application. 

Contrast recommends the creation of two groups in the directory, dedicated to each of these purposes and as a rule, a user can not belong to both groups. A user is either a TeamServer administrator or a TeamServer user. Directory List accounts can be used as both TeamServer and Organization Administrators so specific user accounts are not tied to those responsibilities.

## Types of Directories Supported
Contrast supports the following types of Directories:

* [Lightweight Directory Access Protocol (LDAP)](installation-setupauth.html#ldap)
* [Microsoft Active Directory (AD)](installation-setupauth.html#ad)
