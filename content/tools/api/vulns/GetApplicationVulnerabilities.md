<!--
title: "Get Application Vulnerabilities"
description: "Information on how to get application vulnerabilities"
tags: "tools vulnerability API v1"
-->

## The "/s/api/traces/{appld}" Service

You can get a list of vulnerabilities with this service. It only takes one URL path parameter: the ID of the application, which can be retrieved with the [/s/api/app/list](tools_apiapps.html#monitor) service.

Sample request:

```
PUT /Contrast/s/api/traces/b4cc1c84-8965-4362-8144-0e8ae1e6fa9f HTTP/1.1
User-Agent: MyRestAPI
Content-Length: 0
Content-Type: text/xml
Host: www.contrastsecurity.com
Authorization: <insert authorization token here>
API-Key: <insert API key here>
```

Sample response:

```
HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Pragma: no-cache
Content-Length: 658
Date: Sun, 18 Nov 2012 03:34:54 GMT

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<traces>
   //TODO
</traces>
```
