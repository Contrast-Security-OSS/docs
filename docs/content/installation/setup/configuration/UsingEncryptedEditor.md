<!--
title: "Using the Encrypted Property Editor"
description: "Instructions for editing encrypted property files using the encrypted properties editor."
tags: "installation setup config EOP encryption ESAPI SuperAdmin"
-->

## About the Encrypted Properties Editor

Contrast is bundled with several configuration files that are encrypted intentionally on first creation. They're located in the *$CONTRAST_HOME/data/conf* directory. You can modify some of these files through workflows within the Contrast interface. 

Contrast also bundled a small tool capable of decrypting the file, and provided a tool for Enterprise-on-Premises (EOP) system administrators to modify the configuration of the Contrast deployment. You can find the tool in the *$CONTRAST_HOME/bin* directory. On Linux, the file is a simple shell script called `edit-properties`. On Windows, the file is a Windows command file called *edit-properties.cmd*. In both cases, you need to run the tool from a command prompt; an user interface isn't provided.

## Edit and View an Encrypted File

You must have inputs to view and/or edit an encrypted property. The example below shows how to use the command. The primary inputs that you need to view or edit the file include the path to *ESAPI.properties* and the target file for editing purposes.

```bash
contrast@EOP-TeamServer:~/contrast/bin$ ./edit-properties 

usage: property-editor
 -c,--comment <text>      The comment for the top of the file
 -e,--esapi <path>        The path to the ESAPI.properties file
 -f,--targetFile <file>   The properties file to edit
 -o,--print-value         Print out the value of the property and exit
 -p,--property <name>     The name of the property to set
 -v,--value <val>         The value of the property

```


The following files for EOP are encrypted by default for security purposes:


| Name            | Description                                                                                              |
|----------------------|------------------------------------------------------------------------------------------------------------|
| ad.properties        | Contains information for connecting and configuring Contrast to Active Directory groups for authentication purposes. |
| ldap.properties      | Contains information for connecting and configuring Contrast to LDAP groups for authentication purposes.   |
| database.properties  | Contains host and connection information for configuring communication between Contrast and MySQL.         |
| cassandra.properties | Contains host and connection information for configuring communication between Contrast and Cassandra.     |
| saml.properties      | Contains SAML keystore information.                                                                        |


The following code is an example of editing an encrypted file in Contrast. Load the *ad.properties* file to edit the configuration of your Contrast application that's connecting to ActiveDirectory.

```bash
contrast@TeamServer:~/contrast/bin$ ./edit-properties -e ../data/esapi/ -f ../data/conf/ad.properties

ad.userDn                                         : cn=Directory Manager
ad.identity.attribute.name                        : mail
ad.password                                       : NotaRealPassword
ad.nested.groups.enabled                          : false
ad.group.users                                    : cn=ContrastUsers,cn=Users,dc=contrastsecurity,dc=com
ad.group.admin                                    : cn=ContrastAdmins,cn=Users,dc=contrastsecurity,dc=com
ad.url                                            : ldap://localhost:389
ad.base                                           : dc=contrastsecurity,dc=com
```

The editor shows all of the existing values encrypted in the file. You can use the flags listed above to view or edit a single property. The editor also asks you to place a comment in the file for auditing purposes. Contrast strongly suggests that you make use of the comment feature for noting any change you make to the file.




