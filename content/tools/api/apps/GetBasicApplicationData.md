<!--
title: "Get Basic Application Data"
description: "Information on how to get basic data on a monitored application"
tags: "tools basic data API v1 sample"
-->

## The "/s/api/app/stats/{appld}" Service

You can get basic data about a monitored application with this service. It only takes one URL path parameter: the ID of the application, which can be retrieved with the [/s/api/app/list](tools-apiapps.html#monitor) service.

## Sample Request

```
PUT /Contrast/s/api/app/stats/b4cc1c84-8965-4362-8144-0e8ae1e6fa9f HTTP/1.1
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
Content-Length: 658
Date: Sun, 18 Nov 2012 03:34:54 GMT

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<app-traces>
    <coverageGrade>75</coverageGrade>
    <grade>62</grade>
    <id>b4cc1c84-8965-4362-8144-0e8ae1e6fa9f</id>
    <letterGrade>D</letterGrade>
    <libraries>
        <total>4</total>
        <stale>1</stale>
        <unknown>0</unknown>
        <lib>
           <class-count>62</class-count>
           <file>commons-dbcp-1.4.jar</file>
           <sha1>30be73c965cc990b153a100aaaaafcf239f82d39</sha1>
           <lines-of-code>19209</lines-of-code>
           <used-class-count>0</used-class-count>
        </lib>
    </libraries>
    <methods-seen>6</methods-seen>
    <methods-total>8</methods-total>
    <name>AcmeWidgets</name>
    <securityGrade>50</securityGrade>
    <views>0</views>
    <techs>
       <t>Wicket</t>
       <t>Hibernate</t>
    </techs>
    <vulns>
        <criticals>2</criticals>
        <highs>1</highs>
        <lows>0</lows>
        <mediums>0</mediums>
        <notes>0</notes>
    </vulns>
</app-traces>
```
