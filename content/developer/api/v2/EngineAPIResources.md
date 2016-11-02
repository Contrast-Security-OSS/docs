<!--
title: "Engine API Resources"
description: "Resource Guide to Engines"
tags: "API v2 engine profile agent"
-->


## Data Objects

### Profile

**Profile** represents the configuration used by an **Agent** to report to either the SaaS or your local instance of **TeamServer**.

#### Fields

Field | Type | Description
:------|:------|:------------
name  |  string | The name of the profile
log-level |  string | The lowest level of events to log
log-file  |  string | The path of the file to which to save the logs
use-proxy  | boolean | Indicates whether or not the agent will need a proxy to communicate with the TeamServer
proxy-host | string | The host name of the proxy through which the agent needs to communicate in order to reach the TeamServer
proxy-port | int | The port number of the proxy through which the agent needs to communicate in order to reach the TeamServer
proxy-auth | string | The type of authentication used by the proxy through which the agent needs to communicate in order to reach the TeamServer
proxy-user | string | The user name to be given to the proxy through which the agent needs to communicate in order to reach the TeamServer
proxy-password | string | The encoded password to be give to the proxy through which the agent needs to communicate in order to reach the TeamServer
sampling-baseline | int | How many times a URL needs to be analyzed before it is considered **sampled** by the agent
sampling-window |   int | How many seconds a **sample** of a URL is considered valid by the agent
sampling-frequency |   int | The frequency with which **sampled** URLs will be reanalyzed by the agent
* stacktrace-capture-mode |  string | The capture mode of stack traces - **All**, **Some**, or **None**
override-teamserver-url | boolean | Whether or not the agent should override the default TeamServer URL and use the one included in this profile
teamserver-url | string  | The URL the agent will use in order to reach the TeamServer
engine-type | string | The engine-type indicates the type of language for which the Agent was designed. It MUST be ```JAVA```, ```DOTNET_x86```, or ```DOTNET_x64``` and **MUST BE INCLUDED**

* A *stacktrace-capture-mode* of **Some** indicates that traces are only saved for the first and last events of a **Trace**


## API Operations

### Retrieve Profiles

Retrieves a list of user **Profiles**.

#### Resource URI

```
GET https://app.contrastsecurity.com/Contrast/api/engine/profiles
```

#### Request

Static URL that doesn't have any custom parameters.

#### Sample Request

```
curl -HAccept:application/json -HAPI-Key:test -HAuthorization:dGVzdF91c2VyOnRlc3Q= https://app.contrastsecurity.com/Contrast/api/engine/profiles
```

#### Response

Returns a collection of **Profile** objects.

#### Sample Response

```
[ {
    "name" : "NEW PROFILE",
    "id" : {
     "rel" : "self",
     "href" : "https://app.contrastsecurity.com/Contrast/api/engine/profiles/NEW%20PROFILE",
     "method" : "GET"
     },
     "link" : [ {
         "rel" : "download",
         "href" : "https://app.contrastsecurity.com/Contrast/api/engine/NEW%20PROFILE",
         "method" : "GET"
    }, {
        "rel" : "self",
        "href" : "https://app.contrastsecurity.com/Contrast/api/engine/profiles/NEW%20PROFILE",
        "method" : "GET"
    }, {
        "rel" : "update",
        "href" : "https://app.contrastsecurity.com/Contrast/api/engine/profiles/NEW%20PROFILE",
        "method" : "PUT"
    } ],
    "sampling-baseline" : 5,
    "sampling-window" : 180,
     "sampling-frequency" : 10,
     "log-level" : "fatal",
     "log-file" : "/log/file/path",
     "proxy-host" : "localhost",
     "proxy-auth" : "Basic",
     "proxy-user" : "user_name",
     "proxy-pass" : "wdYYyn3+5QkUV264KmSv9w==",
     "proxy-port" : 8080,
     "stacktrace-capture-mode" : "ALL",
     "use-proxy" : true,
     "override-teamserver-url" : false,
     "engine-type" : "JAVA"
    }, {
     "name" : "default",
     "id" : {
         "rel" : "self",
         "href" : "https://app.contrastsecurity.com/Contrast/api/engine/profiles/default",
         "method" : "GET"
     },
     "link" : [ {
         "rel" : "download",
         "href" : "https://app.contrastsecurity.com/Contrast/api/engine/default",
         "method" : "GET"
     }, {
         "rel" : "self",
         "href" : "https://app.contrastsecurity.com/Contrast/api/engine/profiles/default",
         "method" : "GET"
     }, {
         "rel" : "update",
         "href" : "https://app.contrastsecurity.com/Contrast/api/engine/profiles/default",
          "method" : "PUT"
     } ],
     "sampling-baseline" : 5,
     "sampling-window" : 180,
     "sampling-frequency" : 10,
     "stacktrace-capture-mode" : "ALL",
     "use-proxy" : false,
     "override-teamserver-url" : false,
     "engine-type" : "JAVA"
} ]
```


### Send Profiles

Send a **Profile** created by the user.

#### Resource URI

```
POST https://app.contrastsecurity.com/Contrast/api/engine/profiles
```

#### Request

Static URL that doesn't have any custom parameters.

#### Sample Request

```
curl -HAccept:application/json -HAPI-Key:test -HAuthorization:dGVzdF91c2VyOnRlc3Q= https://app.contrastsecurity.com/Contrast/api/engine/profiles --data "{"name":"REST PROFILE","sampling-baseline":5,"sampling-window":180,"sampling-frequency":10,"log-level":"","log-file":"","proxy-host":"","proxy-auth":"","proxy-user":"","proxy-pass":"","proxy-port":"","teamserver-url":"","stacktrace-capture-mode":"ALL","use-proxy":false,"override-teamserver-url":false,"engine-type":"JAVA"}"
```

#### Response

Returns the sent **Profile** object.

#### Sample Response

```
{
    "name" : "REST PROFILE",
    "id" : {
    "rel" : "self",
    "href" : "https://app.contrastsecurity.com/Contrast/api/engine/profiles/REST%20PROFILE",
     "method" : "GET"
     },
     "link" : [ {
         "rel" : "download",
         "href" : "https://app.contrastsecurity.com/Contrast/api/engine/REST%20PROFILE",
         "method" : "GET"
     }, {
         "rel" : "self",
         "href" : "https://app.contrastsecurity.com/Contrast/api/engine/profiles/REST%20PROFILE",
         "method" : "GET"
     }, {
         "rel" : "update",
         "href" : "https://app.contrastsecurity.com/Contrast/api/engine/profiles/REST%20PROFILE",
         "method" : "PUT"
     } ],
     "sampling-baseline" : 5,
     "sampling-window" : 180,
     "sampling-frequency" : 10,
     "log-level" : "",
     "log-file" : "",
     "proxy-host" : "",
     "stacktrace-capture-mode" : "ALL",
     "use-proxy" : false,
     "override-teamserver-url" : false,
     "engine-type" : "JAVA"
}
```


### Retrieve Specific Profile

Get a **Profile** based on the name provided by the user.

#### Resource URI

```
GET https://app.contrastsecurity.com/Contrast/api/engine/profiles/{profile-name}
```

#### Request

Parameter | Type | Required | Description
:----------|:------|:----------|:------------
profile-name  |  string | true  |  The name of the profile you wish to retrieve 

#### Sample Request

```
curl -HAccept:application/json -HAPI-Key:test -HAuthorization:dGVzdF91c2VyOnRlc3Q= https://app.contrastsecurity.com/Contrast/api/engine/profiles/NEW%20PROFILE
```

#### Response

Returns the selected **Profile** object.

#### Sample Response

```
{
    "name" : "NEW PROFILE",
    "id" : {
     "rel" : "self",
     "href" : "https://app.contrastsecurity.com/Contrast/api/engine/profiles/NEW%20PROFILE",
     "method" : "GET"
     },
     "link" : [ {
         "rel" : "download",
         "href" : "https://app.contrastsecurity.com/Contrast/api/engine/NEW%20PROFILE",
         "method" : "GET"
     }, {
         "rel" : "self",
         "href" : "https://app.contrastsecurity.com/Contrast/api/engine/profiles/NEW%20PROFILE",
         "method" : "GET"
     }, {
         "rel" : "update",
         "href" : "https://app.contrastsecurity.com/Contrast/api/engine/profiles/NEW%20PROFILE",
         "method" : "PUT"
     } ],
     "sampling-baseline" : 5,
     "sampling-window" : 180,
     "sampling-frequency" : 10,
     "stacktrace-capture-mode" : "ALL",
     "use-proxy" : false,
     "override-teamserver-url" : false,
     "engine-type" : "JAVA"
}
```


### Update Profile

Update a **Profile** with changes made by the user.

#### Resource URI

```
PUT https://app.contrastsecurity.com/Contrast/api/engine/profiles/{profile-name}
```

#### Request

Parameter | Type | Required | Description
:----------|:------|:----------|:------------
profile-name  |  string | true  |  The name of the profile you wish to update 

#### Sample Request

```
curl -HAccept:application/json -HAPI-Key:test -HAuthorization:dGVzdF91c2VyOnRlc3Q= https://app.contrastsecurity.com/Contrast/api/engine/profiles/UPDATE%20PROFILE
--data "{"name":"UPDATE PROFILE","sampling-baseline":5,"sampling-window":180,"sampling-frequency":10,"log-level":"","log-file":"","proxy-host":"","proxy-auth":"","proxy-user":"","proxy-pass":"","proxy-port":"","teamserver-url":"","stacktrace-capture-mode":"ALL","use-proxy":false,"override-teamserver-url":false,"engine-type":"JAVA"}"
```

#### Response

Returns the updated **Profile** object.

#### Sample Response

```
{
    "name" : "UPDATE PROFILE",
    "id" : {
     "rel" : "self",
     "href" : "http://localhost:19080/Contrast/api/engine/profiles/NEW%20PROFILE",
     "method" : "GET"
     },
     "link" : [ {
         "rel" : "download",
         "href" : "http://localhost:19080/Contrast/api/engine/NEW%20PROFILE",
         "method" : "GET"
     }, {
         "rel" : "self",
         "href" : "http://localhost:19080/Contrast/api/engine/profiles/NEW%20PROFILE",
         "method" : "GET"
     }, {
         "rel" : "update",
         "href" : "http://localhost:19080/Contrast/api/engine/profiles/NEW%20PROFILE",
         "method" : "PUT"
     } ],
     "sampling-baseline" : 5,
     "sampling-window" : 180,
     "sampling-frequency" : 10,
     "log-level" : "",
     "log-file" : "",
     "proxy-host" : "",
     "stacktrace-capture-mode" : "ALL",
     "use-proxy" : false,
     "override-teamserver-url" : false,
     "engine-type" : "JAVA"
}
```


### Delete Profile

Delete a **Profile** with the given name.

#### Resource URI

```
DELETE https://app.contrastsecurity.com/Contrast/api/engine/profiles/{profile-name}
```

#### Request

Parameter | Type | Required | Description
:----------|:------|:----------|:------------
profile-name  |  string | true  |  The name of the profile you wish to delete 

#### Sample Request

```
curl -HAccept:application/json -HAPI-Key:test -HAuthorization:dGVzdF91c2VyOnRlc3Q= https://app.contrastsecurity.com/Contrast/api/engine/profiles/NEW%20PROFILE
--data "{"name":"UPDATE PROFILE","sampling-baseline":5,"sampling-window":180,"sampling-frequency":10,"log-level":"","log-file":"","proxy-host":"","proxy-auth":"","proxy-user":"","proxy-pass":"","proxy-port":"","teamserver-url":"","stacktrace-capture-mode":"ALL","use-proxy":false,"override-teamserver-url":false,"engine-type":"JAVA"}"
```

#### Response

Returns *200* if the **Profile** was successfully deleted.


### Retrieve Agent

Get an **Agent** for the given platform: ```java``` or ```dotnet```.

#### Resource URI

```
GET https://app.contrastsecurity.com/Contrast/api/engine/{profile}/{platform}
```

#### Request

Parameter | Type | Required | Description
:----------|:------|:----------|:------------
jvm  | string | false  | The jvm level on which your application runs (Java only)

#### Sample Request

```
curl -HAccept:application/json -HAPI-Key:test -HAuthorization:dGVzdF91c2VyOnRlc3Q= https://app.contrastsecurity.com/Contrast/api/engine/default/java?jvm=1.6
```

#### Response

Returns an **Agent** with which to monitor your **Application**.

#### Sample Response

```Contrast.jar```


## See Also

[Sampling](user_tsfaq.html#sample)

[Glossary](user_tsfaq.html#glossary)
