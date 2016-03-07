<!--
title: "Get Your Monitored Applications"
description: "Information on how to get monitored applications"
tags: "API v1 application"
-->

## The "/s/api/app/list" Service

You can get a list of the applications registered for your organization, as well as their IDs with this service. It takes no arguments. This is the first step to a lot of API calls, because it's the only way to get an application's ID.

>**Note:** The authorization header value is not prefixed with **Basic** or **Digest** or other values

## Sample Request

```
PUT /Contrast/s/api/app/list HTTP/1.1
User-Agent: MyRestAPI
Content-Length: 0
Content-Type: text/xml
Host: www.contrastsecurity.com
Authorization: <insert authorization token here>
API-Key: <insert API key here>
```

## Sample Response

```
HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Pragma: no-cache
Content-Length: 249
Date: Sun, 18 Nov 2012 03:34:54 GMT

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<apps>
  <app>
    <id>43a96eaa-7fd7-4538-b300-c81c735db7fb</id>
    <license>Trial</license>
    <name>Joe's BBQ App</name>
    <path>/joes</path>
  </app>
</apps>
```
