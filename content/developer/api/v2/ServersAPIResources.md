<!--
title: "Servers API Resources"
description: "Resource Guide to Servers"
tags: "API servers v2"
-->


## Data Objects

### Server

A server object representing a single web server monitored by the Contrast agent.

#### Fields

Field | Type | Description
:------|:------|:------------
server-id  | long   | The unique identifier for the server
last-startup-message-received  | date  |  The date the last *Startup Message was reported by the Agent on the Server
last-activity  | date  |  The date the last **AppActivity Message was reported by the Agent on the server
last-trace-received | date   | The date the last **Trace** was reported by the Agent on the server
hostname  |  string | The name of the host machine on which the server is running
server-path | string  | The path to the server on the host machine
server-type | string  | Indicates the type of server
enabled | boolean | Indicates whether or not the Agent on the server is currently active
engine-version | string | The version of the Agent currently running on the server, in the form ```Major.Minor.Patch```

* A startup message is sent by the Agent when the server first starts to tell TeamServer that it is still available and to determine what, if any, applications should be monitored

** An AppActivity message indicates some type of action was performed on the application. These types of messages provide updates to Coverage, Architecture and Library information.

#### HATEOAS Links

Relevance | Description
:----------|:------------
application | The application to which the coverage belongs


## API Operations

### Retrieve Servers

Retrieves a list of the **Servers** to which the user has access.

#### Resource URI

```
GET https://app.contrastsecurity.com/Contrast/api/servers
```

#### Request

Static URL that doesn't have any custom parameters.

#### Sample Request

```
curl -HAccept:application/json -HAPI-Key:test -HAuthorization:dGVzdF91c2VyOnRlc3Q= https://app.contrastsecurity.com/Contrast/api/servers
```

#### Response

Returns a collection of **Server** objects.

#### Sample Response

```
[ {
    "hostname" : "DELALTE6520-HM",
     "enabled" : true,
     "applications" : null,
     "id" : null,
     "link" : [ ],
     "server-id" : 1,
     "last-startup-message-received" : 1389619832000,
     "last-trace-received" : 1389619927000,
     "last-activity" : 1389624222000,
     "server-path" : "c:\\Tools\\apache-tomcat2-7.0.40\\bin\\",
    "server-type" : "tomcat7",
     "engine-version" : "2.4.8"
    }, {
     "hostname" : "DELALTE6520-HM",
     "enabled" : true,
     "applications" : null,
     "id" : null,
     "link" : [ ],
     "server-id" : 2,
     "last-startup-message-received" : 1389622545000,
     "last-trace-received" : 1389622712000,
     "last-activity" : 1389624352000,
     "server-path" : "c:\\windows\\system32\\inetsrv\\w3wp.exe",
     "server-type" : "iis7",
     "engine-version" : "-"
} ]
```

### Get Specific Server

Retrieve the given **Server**.

#### Resource URI

```
GET https://app.contrastsecurity.com/Contrast/api/servers/{server-id}
```

#### Request

Parameter | Type | Required | Description
:----------|:------|:----------|:------------
server-id  | long  |  true  |  The ID of the server for which you want information 

#### Sample Request

```
curl -HAccept:application/json -HAPI-Key:test -HAuthorization:dGVzdF91c2VyOnRlc3Q= https://app.contrastsecurity.com/Contrast/api/servers/1
```

#### Response

Returns a **Server** object.

#### Sample Response

```
{
    "hostname" : "DELALTE6520-HM",
     "enabled" : true,
     "applications" : null,
     "id" : null,
     "link" : [ ],
     "server-id" : 1,
     "last-startup-message-received" : 1389619832000,
     "last-trace-received" : 1389619927000,
     "last-activity" : 1389624222000,
     "server-path" : "c:\\Tools\\apache-tomcat2-7.0.40\\bin\\",
     "server-type" : "tomcat7",
     "engine-version" : "2.4.8"
}
```


## See Also

[Glossary](user_tsfaq.html#glossary)
