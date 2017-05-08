<!--
title: "Applications API Resources"
description: "Resource Guide to Applications"
tags: "tools application resource API v2 appID HATEOS"
-->

## Data Objects

### Application

An **Application** represents a single application under Contrast monitoring.

#### Fields

Field | Type | Description
:------|:------|:------------
app-id | guid | The unique identifier for the application
name | string | The display name of the application under monitoring in Contrast
short-name | string | The short name of the application under monitoring in Contrast
group-name | string | The name of the group in which the application is designated to belong
path | string | The context path of the application on its application servers
language | string | The language the application is implemented in
license | string | The type of license applied to the application
last-seen | timestamp | The last time the application reported to the Team Server
technologies | collection<string> | List of Technologies detected in the application by Contrast
components | collection<**ArchitectureComponent**> | List of Components detected in the application by Contrast (Database, LDAP, etc.)
* platform-version | string | The version of the platform on which this application is running
*  platform-vulnerabilities | collection<string> | List of vulnerabilities attributed to this version of the platform

*Only pertinent if the application language is ColdFusion.

#### HATEOAS Links

Relevance | Description
----------|------------
libraries | The library information for the application
servers | Summary information about the servers the application is running on
stats | Metrics for the application
traces | Summary information about the traces discovered in the application


### Application Stats

Contains metrics about the **Application**'s interaction with the TeamServer and Contrast as well as high-level vulnerability metrics.

#### Fields

Field | Type | Description
:------|:------|:------------
custom-classes-count | int | Number of custom classes discovered by the Contrast Engine
custom-classes-seen | int | Number of custom classes that have been used/seen by the Contrast Engine
custom-classes-loc | int | Count of lines of code in custom classes discovered by the Contrast Engine
custom-methods-count | int | Number of custom methods discovered by the Contrast Engine
custom-methods-seen | int | Number of custom methods that have been used/seen by the Contrast Engine
custom-views-count | int | Number of custom view discovered by the Contrast Engine
custom-views-accessible | int | Number of custom views that are accessible to the Contrast Engine
custom-views-loc | int | Count of lines of code in the custom views discovered by the Contrast Engine
expiration | datetime | The date that the application license expires
last-seen | datetime | The date/time that the last communication from the application was recieved by the TeamServer
libraries-count | int | Count of libraries in the application's classpath
libraries-stale | int | Count of stale/out-of-date libraries
* libraries-unknown | int | Count of unknown libraries
servers-count | int | Number of Servers reporting the application to Team Server
traces-count | int | Number of Traces reported to the Team Server by the Application.
criticals | int | Number of Critical vulnerabilities discovered in the Application
highs | int | Number of High vulnerabilities discovered in the Application
mediums | int | Number of Medium vulnerabilities discovered in the Application
lows | int | Number of Low vulnerabilities discovered in the Application
notes | int | Number of Note vulnerabilities discovered in the Application
overall-grade | string | The overall security grade for the Application
ovrall-score | int | The calculated overall security score for the Application
security-grade | string | The grade for vulnerabilities in the Application
security-score | int | The calculated score for vulnerabilities in the Application
** platform-grade | string | The grade for the Platform on which the Application is running
** platform-score | int | The calculated score for the Platform on which the Application is running

*Unknown indicates that the library cannot be found in our database of known libraries. This could indicate the artifact has been repackaged or modified in some way

** Only pertinent if the application language is ColdFusion

#### HATEOAS Links

Relevance | Description
----------|------------
application | The application that these stats apply to (not expandable at this level)


### Architecture Components

Represents a single architecture component, such as a database or LDAP connection.

#### Fields

Field | Type | Description
:------|:------|:------------
component-id   | long  |  The unique identifier for the component
host  |  string | The hostname or address of the remote host 
port  |  string | The port of the connection to the remote host
vendor | string | The vendor of the component
type   | string | The type of component (database, LDAP, webservice)


### CVE

Information about a CVE that is related to a **Library**.

#### Fields

Field | Type | Description
:------|:------|:------------
availability-impact | string | The impact on availability
name  |  string | The name of the vulnerability
description | string | A brief description of the vulnerability
status | string | The status of the vulnerability
access-vector  | string | How an attacker can exploit the vulnerability
access-complexity  | string | How difficult exploitation is
authentication | string | What level of authentication is required to exploit the vulnerability
confidentiality-impact | string | The impact on confidentiality
integrity-impact  |  string | The impact on data integrity
score  | string | The vulnerability rating score


### Library

Represents a single library being used by an **Application**.

#### Fields

Field | Type | Description
:------|:------|:------------
library-id | long  |  The Unique ID of the Library
filename  |  string  | The filename of the Library on the Filesystem
sha1  |  string | The SHA1 Hash of the Library (Ref to Maven Central)
url | string | The URL to the Library on the FileSystem
lines-of-code  | int | The measured number of lines of code in the library
class-count | int | The discovered number of classes in the library artifact
used-class-count  |  int | The number of classes used in the library artifact
cve-count  | int | The number of CVEs associated with the library artifact
version | string | The discovered version of the library
internal-date  | datetime   | The internally referenced release date for the library
external-date  | datetime  |  The externally referenced release date for the library
profiled   | boolean | Whether the library has been profiled by Contrast
common | boolean | Whether the library is a common recognized third-party-library
sponsored  | boolean | Whether the library is an internally developed library sponsored by the host application
cve-count  | int | The number of **CVEs** mapped to this Library
* manifest  | string | The contents of the libraries manifest file

#### HATEOAS Links

Relevance | Description
----------|------------
* cves |  All of the CVEs that have been mapped to this library
* servers |   All Servers that have this library installed

*Only shows up in results if included in the expands list



## API Operations

### List Applications

Retrieves a list of applications accessible to the authenticated user that are not archived.

#### Resource URI

```
https://app.contrastsecurity.com/Contrast/api/applications
```

#### Request

Accepts pagination, filtering, and expansion parameters.

#### Sample Request

```
curl -HAccept:application/json -HAPI-Key:test -HAuthorization:dGVzdF91c2VyOnRlc3Q= https://app.contrastsecurity.com/Contrast/api/applications
```

#### Response

Returns a collection of **Application** objects.

#### Sample Response

```
[
   {
      "links":[
         {
            "rel":"self",
            "href":"http://app.contrastsecurity.com/Contrast/api/applications/c0d6b545-6377-483e-8b0c-f2e2e2aa8684",
            "method":"GET"
         },
         {
            "rel":"traces",
            "href":"http://app.contrastsecurity.com/Contrast/api/applications/c0d6b545-6377-483e-8b0c-f2e2e2aa8684/traces",
            "method":"GET"
         }
      ],
      "app-id":"c0d6b545-6377-483e-8b0c-f2e2e2aa8684",
      "name":"Test",
      "short-name":null,
      "group-name":null,
      "path":"Test",
      "language":"Java",
      "license":"Trial",
      "last-seen":1383156189931
   },
   {
      "links":[
         {
            "rel":"self",
            "href":"http://app.contrastsecurity.com/Contrast/api/applications/8dfdd006-c2a4-4e90-bb24-bc90cbc03433",
            "method":"GET"

         },
         {
            "rel":"traces",
            "href":"http://app.contrastsecurity.com/Contrast/api/applications/8dfdd006-c2a4-4e90-bb24-bc90cbc03433/traces",
            "method":"GET"

         }
      ],
      "app-id":"8dfdd006-c2a4-4e90-bb24-bc90cbc03433",
      "name":"Test2",
      "short-name":null,
      "group-name":null,
      "path":"/Test2",
      "language":"Java",
      "license":"Enterprise",
      "last-seen":1383156190115
   }
]
```


### Retrieve An Application

Retrieves an **Application** by its unique identifier.

#### Resource URI

```
https://app.contrastsecurity.com/Contrast/api/applications/{app-id}
```

#### Request

Parameter | Type | Required | Description
:----------|:------|:----------|:------------
app-id  | guid   | true  |  The ID of the **Application** to retrieve

#### Sample Request

```
curl -HAccept:application/json -HAPI-Key:test -HAuthorization:dGVzdF91c2VyOnRlc3Q= https://app.contrastsecurity.com/Contrast/api/applications/8dfdd006-c2a4-4e90-bb24-bc90cbc03433
```

#### Response

Returns an **Application** object.

#### Sample Response

```
[
   {
      "links":[
         {
            "rel":"self",
            "href":"http://app.contrastsecurity.com/Contrast/api/applications/8dfdd006-c2a4-4e90-bb24-bc90cbc03433",
            "method":"GET"

         },
         {
            "rel":"traces",
            "href":"http://app.contrastsecurity.com/Contrast/api/applications/8dfdd006-c2a4-4e90-bb24-bc90cbc03433/traces",
            "method":"GET"

         }
      ],
      "app-id":"8dfdd006-c2a4-4e90-bb24-bc90cbc03433",
      "name":"Test2",
      "short-name":null,
      "group-name":null,
      "path":"/Test2",
      "language":"Java",
      "license":"Enterprise",
      "last-seen":1383156190115
   }
]
```


### Retrieve Application Statistics

#### Resource URI

```
https://app.contrastsecurity.com/Contrast/api/applications/{app-id}/stats
```

#### Request

Parameter | Type | Required | Description
:----------|:------|:----------|:------------
app-id | guid   | true  |  The ID of the **Application** to retrieve

#### Sample Request

```
curl -HAccept:application/json -HAPI-Key:test -HAuthorization:dGVzdF91c2VyOnRlc3Q= https://app.contrastsecurity.com/Contrast/api/applications/8dfdd006-c2a4-4e90-bb24-bc90cbc03433/stats
```

#### Response

Returns an **ApplicationStats** object.

#### Sample Response

```
{
  "expiration" : 1390935787585,
  "criticals" : 1,
  "highs" : 1,
  "mediums" : 0,
  "lows" : 0,
  "notes" : 1,
  "link" : [ {
    "rel" : "parent",
    "href" : "https://app.contrastsecurity.com/Contrast/api/applications/8dfdd006-c2a4-4e90-bb24-bc90cbc03433?expand=",
    "method" : "GET"
  }, {
    "rel" : "application",
    "href" : "https://app.contrastsecurity.com/Contrast/api/applications/8dfdd006-c2a4-4e90-bb24-bc90cbc03433?expand=",
    "method" : "GET"
  } ],
  "custom-classes-count" : 0,
  "custom-classes-seen" : 0,
  "custom-classes-loc" : 0,
  "custom-methods-count" : 0,
  "custom-methods-seen" : 0,
  "custom-views-count" : 34,
  "custom-views-accessible" : 26,
  "custom-views-loc" : 325826,
  "last-seen" : 1383156189931,
  "traces-count" : 6,
  "servers-count" : 1,
  "libraries-count" : 4,
  "security-score" : 70,
  "security-grade" : "C",
  "libraries-stale" : 0,
  "libraries-unknown" : 0,
  "overall-score" : 72,
  "overall-grade" : "C"
}
```


### Reset Application

Resets an application by deleting all library, coverage, statistics and trace information.

>**Note:** **USE CAREFULLY**

#### Resource URI

```
https://app.contrastsecurity.com/Contrast/api/applications/{app-id}
```

#### Request

Parameter | Type | Required | Description
:----------|:------|:----------|:------------
app-id | guid   | true  |  The ID of the **Application** to reset

#### Sample Request

```
curl -HAccept:application/json -HAPI-Key:test -HAuthorization:dGVzdF91c2VyOnRlc3Q= -XDELETE https://app.contrastsecurity.com/Contrast/api/applications/8dfdd006-c2a4-4e90-bb24-bc90cbc03433
```

#### Response

Returns the **Application** object after it has been reset.

#### Sample Response

```
{
  "name" : "Test-App",
  "path" : "/Test",
  "language" : "Java",
  "license" : "Trial",
  "link" : [ {
    "rel" : "self",
    "href" : "https://app.contrastsecurity.com/Contrast/api/applications/a29c71fd-e586-461a-a611-0c9def4789d1",
    "method" : "GET"
  }, {
    "rel" : "traces",
    "href" : "https://app.contrastsecurity.com/Contrast/api/applications/a29c71fd-e586-461a-a611-0c9def4789d1/traces",
    "method" : "GET"
  }, {
    "rel" : "servers",
    "href" : "https://app.contrastsecurity.com/Contrast/api/applications/a29c71fd-e586-461a-a611-0c9def4789d1/servers",
    "method" : "GET"
  }, {
    "rel" : "reset-application",
    "href" : "https://app.contrastsecurity.com/Contrast/api/applications/a29c71fd-e586-461a-a611-0c9def4789d1",
    "method" : "DELETE"
  } ],
  "app-id" : "a29c71fd-e586-461a-a611-0c9def4789d1",
  "last-seen" : 1383156199821
}
```


### Retrieve Application Libraries

#### Resource URI

```
https://app.contrastsecurity.com/Contrast/api/applications/{app-id}/libraries
```

#### Request

Parameter | Type | Required | Description
:----------|:------|:----------|:------------
app-id | guid  |  true  |  The ID of the **Application** to retrieve

#### Sample Request

```
curl -HAccept:application/json -HAPI-Key:test -HAuthorization:dGVzdF91c2VyOnRlc3Q= https://app.contrastsecurity.com/Contrast/api/applications/8dfdd006-c2a4-4e90-bb24-bc90cbc03433/libraries
```

#### Response

Returns a collection of **Library** objects.

#### Sample Response

```
[ {
  "filename" : "catalina-4.1.9.jar",
  "sha1" : "393466452301a4cc026b43bf5b0fadd7e2444886",
  "url" : "file:/C:/Tools/apache-tomcat-6.0.32/webapps/DefaultApp/WEB-INF/lib/catalina-4.1.9.jar\n            ",
  "version" : null,
  "profiled" : false,
  "common" : false,
  "sponsored" : false,
  "cveCount" : 4,
  "manifest" : null,
  "servers" : null,
  "vulns" : null,
  "id" : {
    "rel" : "self",
    "href" : "http://localhost:8080/Contrast/api/applications/c0d6b545-6377-483e-8b0c-f2e2e2aa8684/libraries/4",
    "method" : "GET"
  },
  "link" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/Contrast/api/applications/c0d6b545-6377-483e-8b0c-f2e2e2aa8684/libraries/4",
    "method" : "GET"
  }, {
    "rel" : "cves",
    "href" : "http://localhost:8080/Contrast/api/applications/c0d6b545-6377-483e-8b0c-f2e2e2aa8684/libraries/4/cves",
    "method" : "GET"
  }, {
    "rel" : "servers",
    "href" : "http://localhost:8080/Contrast/api/servers/libraries/4",
    "method" : "GET"
  } ],
  "library-id" : 4,
  "lines-of-code" : 112217,
  "internal-date" : "2002-08-10",
  "external-date" : "2009-11-08",
  "class-count" : 296,
  "used-class-count" : 0
} ]
```


### Retrieve Specific Application Library

#### Resource URI

```
https://app.contrastsecurity.com/Contrast/api/applications/{app-id}/libraries/{lib-id}
```

#### Request

Parameter | Type | Required | Description
:----------|:------|:----------|:------------
app-id | guid  |  true  |  The ID of the **Application** to retrieve
lib-id | guid  |  true  |  The ID of the **Library** to retrieve
expand | Collection<String> | false  | The extra fields to include in the library - manifest, servers, and CVEs

#### Sample Request

```
curl -HAccept:application/json -HAPI-Key:test -HAuthorization:dGVzdF91c2VyOnRlc3Q= https://app.contrastsecurity.com/Contrast/api/applications/8dfdd006-c2a4-4e90-bb24-bc90cbc03433/libraries/4
```

#### Response

Returns a single **Library** object.

#### Sample Response

```
{
  "filename" : "catalina-4.1.9.jar",
  "sha1" : "393466452301a4cc026b43bf5b0fadd7e2444886",
  "url" : "file:/C:/Tools/apache-tomcat-6.0.32/webapps/DefaultApp/WEB-INF/lib/catalina-4.1.9.jar\n            ",
  "version" : null,
  "profiled" : false,
  "common" : false,
  "sponsored" : false,
  "cveCount" : 4,
  "manifest" : null,
  "servers" : null,
  "vulns" : null,
  "id" : {
    "rel" : "self",
    "href" : "https://app.contrastsecurity.com/Contrast/api/applications/c0d6b545-6377-483e-8b0c-f2e2e2aa8684/libraries/4",
    "method" : "GET"
  },
  "link" : [ {
    "rel" : "self",
    "href" : "https://app.contrastsecurity.com/Contrast/api/applications/c0d6b545-6377-483e-8b0c-f2e2e2aa8684/libraries/4",
    "method" : "GET"
  }, {
    "rel" : "cves",
    "href" : "https://app.contrastsecurity.com/Contrast/api/applications/c0d6b545-6377-483e-8b0c-f2e2e2aa8684/libraries/4/cves",
    "method" : "GET"
  }, {
    "rel" : "servers",
    "href" : "https://app.contrastsecurity.com/Contrast/api/servers/libraries/4",
    "method" : "GET"
  } ],
  "library-id" : 4,
  "lines-of-code" : 112217,
  "internal-date" : "2002-08-10",
  "external-date" : "2009-11-08",
  "class-count" : 296,
  "used-class-count" : 0
} 
```

 
### Retrieve All CVEs For A Library

#### Resource URI

```
https://app.contrastsecurity.com/Contrast/api/applications/{app-id}/libraries/{lib-id}/cves
```

#### Request

Parameter | Type | Required | Description
:----------|:------|:----------|:------------
app-id | guid  |  true  |  The ID of the **Application** to retrieve
lib-id | long  |  true   | The ID of the **Library** to retrieve
expand | Collection<String> | false  | The extra fields to include in the **CVE**

#### Sample Request

```
curl -HAccept:application/json -HAPI-Key:test -HAuthorization:dGVzdF91c2VyOnRlc3Q= https://app.contrastsecurity.com/Contrast/api/applications/8dfdd006-c2a4-4e90-bb24-bc90cbc03433/libraries/4/cves
```

#### Response

Returns a collection of **CVE** objects.

#### Sample Response

```
[ {
    "name" : "CVE-2012-4418",
     "description" : "Apache Axis2 allows remote attackers to forge messages and bypass authentication via an \"XML Signature wrapping                 attack.\"",
     "status" : null,
     "authentication" : "NONE",
     "score" : "5.8",
     "references" : [ {
         "name" : "SECUNIA",
         "id" : null,
         "link" : [ {
             "rel" : "parent",
             "href" : "http://localhost:19080/Contrast/api/applications/libraries/cves/",
             "method" : "GET"
         }, {
             "rel" : "reference",
             "href" : "http://secunia.com/advisories/49129",
             "method" : "GET"
         } ]
     } ],
     "id" : null,
     "link" : [ ],
     "availability-impact" : "NONE",
     "access-vector" : "NETWORK",
     "access-complexity" : "MEDIUM",
     "confidentiality-impact" : "PARTIAL",
     "integrity-impact" : "PARTIAL"
    }, {
     "name" : "CVE-2012-5351",
     "description" : "Apache Axis2 allows remote attackers to forge messages and bypass authentication via a SAML assertion that lacks a             Signature element, aka a \"Signature exclusion attack,\" a different vulnerability than CVE-2012-4418.",
     "status" : null,
     "authentication" : "NONE",
     "score" : "6.4",
     "references" : [ {
         "name" : "SECUNIA",
         "id" : null,
         "link" : [ {
             "rel" : "parent",
             "href" : "http://localhost:19080/Contrast/api/applications/libraries/cves/",
             "method" : "GET"
         }, {
             "rel" : "reference",
             "href" : "http://secunia.com/advisories/49129",
             "method" : "GET"
         } ]
     } ],
     "id" : null,
     "link" : [ ],
     "availability-impact" : "NONE",
     "access-vector" : "NETWORK",
     "access-complexity" : "LOW",
     "confidentiality-impact" : "PARTIAL",
     "integrity-impact" : "PARTIAL"
    }, {
     "name" : "CVE-2012-5785",
     "description" : "Apache Axis2/Java 1.6.2 and earlier does not verify that the server hostname matches a domain name in the subject's         Common Name (CN) or subjectAltName field of the X.509 certificate, which allows man-in-the-middle attackers to spoof SSL servers via an         arbitrary valid certificate.",
     "status" : null,
     "authentication" : "NONE",
     "score" : "5.8",
     "references" : [ {
         "name" : "SECUNIA",
         "id" : null,
         "link" : [ {
             "rel" : "parent",
             "href" : "http://localhost:19080/Contrast/api/applications/libraries/cves/",
             "method" : "GET"
         }, {
             "rel" : "reference",
             "href" : "http://secunia.com/advisories/49129",
             "method" : "GET"
         } ]
     } ],
     "id" : null,
     "link" : [ ],
     "availability-impact" : "NONE",
     "access-vector" : "NETWORK",
     "access-complexity" : "MEDIUM",
     "confidentiality-impact" : "PARTIAL",
     "integrity-impact" : "PARTIAL"
} ]
```


### Retrieve A CVE For A Library

#### Resource URI

```
https://app.contrastsecurity.com/Contrast/api/applications/{app-id}/libraries/{lib-id}/cves/{cve-id}
```

#### Request

Parameter | Type | Required | Description
:----------|:------|:----------|:------------
app-id | guid  |  true  |  The ID of the **Application** to retrieve
lib-id | long  |  true  |  The ID of the **Library** to retrieve
cve-id | String | true  |  The CVE-Identifier of the **CVE** to retrieve
expand | Collection<String> | false  | The extra fields to include in the CVE

#### Sample Request

```
curl -HAccept:application/json -HAPI-Key:test -HAuthorization:dGVzdF91c2VyOnRlc3Q= https://app.contrastsecurity.com/Contrast/api/applications/8dfdd006-c2a4-4e90-bb24-bc90cbc03433/libraries/4/cves/CVE-2012-5351
```

#### Response

Returns a **CVE** object.

#### Sample Response

```
[
{
 "name" : "CVE-2012-5351",
 "description" : "Apache Axis2 allows remote attackers to forge messages and bypass authentication via a SAML assertion that lacks a Signature element, aka a \"Signature exclusion attack,\" a different vulnerability than CVE-2012-4418.",
 "status" : null,
 "authentication" : "NONE",
 "score" : "6.4",
 "references" : [ {
 "name" : "SECUNIA",
 "id" : null,
 "link" : [ {
 "rel" : "parent",
 "href" : "http://localhost:19080/Contrast/api/applications/libraries/cves/",
 "method" : "GET"
 }, {
 "rel" : "reference",
 "href" : "http://secunia.com/advisories/49129",
 "method" : "GET"
 } ]
 } ],
 "id" : null,
 "link" : [ ],
 "availability-impact" : "NONE",
 "access-vector" : "NETWORK",
 "access-complexity" : "LOW",
 "confidentiality-impact" : "PARTIAL",
 "integrity-impact" : "PARTIAL"
}
```

