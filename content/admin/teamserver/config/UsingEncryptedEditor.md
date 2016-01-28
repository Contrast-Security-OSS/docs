<!--
title: "Using the Encrypted Property Editor"
description: "Instructions for editing encrypted property files using the encrypted properties editor."
-->

## Getting Started
Bundled with TeamServer are several configuration files located in the $CONTRAST_HOME/data/conf directory that are by design encrypted on first creation. Some of these files can be modified through workflows within the User Interface. Contrast has bundled a small tool capable of decrypting the file and providing a tool for EOP system administrators to modify the configuriation of the deployment of TeamServer.

## General Use of the Encrypted Properties Editor
The tool can be found in the $CONTRAST_HOME/bin directory. On Linux the file is a simple shell script called edit-properties. On Windows the file is a windows command file called edit-properties.cmd. In both cases, the tool needs to be run from a command prompt as no graphical user interface is provided.

Inputs are needed in order to view and/or edit an encrypted property. In the example below, we are simply showing the usage of the command. Theprimary inputs needed to view/edit the file include the path to ESAPI.properties and the target file for editing purposes.

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

### Encrypted Files within EOP TeamServer
The following files are encrypted by default for security purposes.

| File Name            | Description of the File                                                                                               |
|----------------------|-----------------------------------------------------------------------------------------------------------------------|
| ad.properties        | Contains information for connecting and configuring TeamServer to Active Directory groups for authentication purpose. |
| ldap.properties      | Contains information for connecting and configuring TeamServer to LDAP groups for authentication purposes.            |
| database.properties  | Contains host and connection information for configuring communication between TeamServer and MySQL.                  |
| cassandra.properties | Contains host and connection information for configuring communication between TeamServer and Cassandra.              |

### Example of Editing/Viewing of an Encrypted File
The following is an example of editing an encrypted file in TeamServer. In this example we are loading our ad.properties file to edit the configuration of our TeamServer connecting to ActiveDirectory.

```bash
vagrant@dev1eop1:~/contrast/bin$ ./edit-properties -o jdbc.port -e ../data/esapi/ -f ../data/conf/ad.properties

ad.userDn                                         : cn=Directory Manager
ad.identity.attribute.name                        : mail
ad.password                                       : NotaRealPassword
ad.nested.groups.enabled                          : false
ad.group.users                                    : cn=ContrastUsers,cn=Users,dc=contrastsecurity,dc=com
ad.group.admin                                    : cn=ContrastAdmins,cn=Users,dc=contrastsecurity,dc=com
ad.url                                            : ldap://localhost:389
ad.base                                           : dc=contrastsecurity,dc=com
```

The editor will show all of the existing values encrypted in the file. You could use the flags listed above to view or edit a single property in the file. The editor will also ask for a comment to be placed in the file for auditing purposes. It is strongly suggested that you make use of the comment feature for noting any change you make to the file.
