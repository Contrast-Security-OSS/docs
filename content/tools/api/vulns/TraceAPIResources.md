<!--
title: "Trace API Resources"
description: "Resource Guide to Traces"
tags: "v2 API trace"
-->


## Data Objects

### Trace

**Trace** represents a vulnerability found within an **Application** under Contrast monitoring.

#### Fields

Field | Type | Description
:------|:------|:------------
uuid  |  guid  |  The unique identifier of the Trace
total-traces-received  | long   | The number of times that this Trace has been reported by the Agent
last-time-seen | date  |  The number of custom methods discovered by the Contrast Engine
first-time-seen | date  |  The number of custom methods visited while under Contrast monitoring
status | string | The number of custom views discovered by the Contrast Engine
sub-status | string | The number of accessible custom views
platform  |  string | The platform on which the application from which the Trace comes runs 
language  |  string | The language of the application from which the Trace comes
title  | string | The title of the Trace
sub-title  | string | The sub-title of the Trace 
reported-to-bug-tracker | boolean | Indicates if the Trace has been reported to a bug tracker
reported-to-bug-tracker-time  |  date  |  The date a Trace was reported to a bug tracker (won't be present if *reported-to-bug-tracker* = ```false```)
closed-time | date  |  The date a Trace was marked closed/resolved
evidence  |  string |  The evidence collected that indicates the Trace exists
rule-name  | string | The security rule that the application is in violation of that caused the Trace to be generated

#### HATEOAS Links

Relevance | Description
:----------|:------------
application | The application to which the coverage belongs


## API Operations

### Retrieve Traces

Retrieves the traces for an **Application** by the application's identifier.

#### Resource URI

```
https://app.contrastsecurity.com/Contrast/api/traces/{app-id}
```

#### Request

Parameter | Type | Required | Description
:----------|:------|:----------|:------------
app-id | guid  |  true  |  The ID of the application for which you want traces

#### Sample Request

```
curl -HAccept:application/json -HAPI-Key:test -HAuthorization:dGVzdF91c2VyOnRlc3Q= https://app.contrastsecurity.com/Contrast/api/traces/45adaa6a-ab7d-4ba1-af2c-5ee1301c1771
```

#### Response

Returns a **Trace** object.

#### Sample Response

```
[ {
     "uuid" : "Y1D7-7IV6-JZ62-PKQ1",
     "status" : "Reported",
     "platform" : "Sun Microsystems Inc.",
     "language" : "Java",
     "title" : "Overly Long Session Timeout in (unknown)",
     "evidence" : "<div class='trace-risk-evidence'>272:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the&nbsp;timeout&nbsp;for&nbsp;a&nbsp;particular&nbsp;session&nbsp;dynamically&nbsp;by&nbsp;using<br/>\n273:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HttpSession.getMaxInactiveInterval().&nbsp;--&gt;<br/>\n274:&nbsp;<br/>\n275:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;session-config&gt;<br/>\n276:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--&nbsp;2&nbsp;days&nbsp;--&gt;<br/>\n277:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;session-timeout&gt;2880&lt;/session-timeout&gt;<br/>\n278:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/session-config&gt;<br/>\n279:&nbsp;<br/>\n280:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mime-mapping&gt;<br/>\n281:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;extension&gt;wmv&lt;/extension&gt;<br/>\n</div>\n",
     "request" : {
         "protocol" : "http",
         "version" : "1.0",
         "uri" : "/WebGoat/attack",
         "method" : "GET",
         "port" : 0,
         "headers" : [ {
                 "name" : "Cookie",
                 "value" : ".ASPXANONYMOUS=UPl1IIBCzwEkAAAAMDIwMWQ0N2MtMjQ0Mi00ZGMzLWFjM2EtNWY2MTZmMGJlMTMz0; Language=en; Country=US; UMB_UPDCHK=1"
             }, {
                 "name" : "Cache-control",
                 "value" : "max-age=0"
             }, {
                 "name" : "Connection",
                 "value" : "keep-alive"
            }, {
                 "name" : "Accept-language",
                 "value" : "en-US,en;q=0.8,es-419;q=0.6,es;q=0.4"
             }, {
                 "name" : "Host",
                 "value" : "localhost:9080"
             }, {
                 "name" : "Accept",
                 "value" : "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
             }, {
                 "name" : "User-agent",
                 "value" : "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"
             }, {
                 "name" : "Authorization",
                 "value" : "Basic Z3Vlc3Q6Z3Vlc3Q="
             }, {
                 "name" : "Accept-encoding",
                 "value" : "gzip,deflate,sdch"
         } ],
        "parameters" : [ ],
         "id" : null,
         "link" : [ ],
         "query-string" : ""
     },
     "events" : null,
    "id" : {
         "rel" : "self",
         "href" : "http://localhost:19080/Contrast/api/traces/45adaa6a-ab7d-4ba1-af2c-5ee1301c1771/Y1D7-7IV6-JZ62-PKQ1?expand",
         "method" : "GET"
     },
     "link" : [ {
             "rel" : "self",
             "href" : "http://localhost:19080/Contrast/api/traces/45adaa6a-ab7d-4ba1-af2c-5ee1301c1771/Y1D7-7IV6-JZ62-PKQ1?expand",
             "method" : "GET"
         }, {
             "rel" : "application",
             "href" : "http://localhost:19080/Contrast/api/applications/45adaa6a-ab7d-4ba1-af2c-5ee1301c1771?expand",
             "method" : "GET"
     } ],
     "trace-id" : 2,
     "total-traces-received" : 1,
     "last-time-seen" : 1389619653489,
     "first-time-seen" : 1389619653489,
     "sub-status" : "",
     "sub-title" : "/WEB-INF/web.xml",
     "reported-to-bug-tracker" : false,
     "rule-name" : "session-timeout"
}, {
     "uuid" : "YIGJ-4UKM-46F8-O706",
     "status" : "Reported",
     "platform" : "Sun Microsystems Inc.",
     "language" : "Java",
     "title" : "Insecure Authentication Protocol in (unknown)",
     "evidence" : "<div class='trace-risk-evidence'>Authorization: Basic Z3Vl...Q6Z3Vlc3Q=</div>\n",
     "request" : {
         "protocol" : "http",
         "version" : "1.0",
         "uri" : "/WebGoat/attack",
         "method" : "GET",
         "port" : 0,
         "headers" : [ {
                 "name" : "Cookie",
                 "value" : ".ASPXANONYMOUS=UPl1IIBCzwEkAAAAMDIwMWQ0N2MtMjQ0Mi00ZGMzLWFjM2EtNWY2MTZmMGJlMTMz0; Language=en; Country=US; UMB_UPDCHK=1"
             }, {
                 "name" : "Cache-control",
                 "value" : "max-age=0"
             }, {
                 "name" : "Connection",
                 "value" : "keep-alive"
             }, {
                 "name" : "Accept-language",
                 "value" : "en-US,en;q=0.8,es-419;q=0.6,es;q=0.4"
             }, {
                 "name" : "Host",
                 "value" : "localhost:9080"
             }, {
                 "name" : "Accept",
                 "value" : "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
             }, {
                 "name" : "User-agent",
                 "value" : "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"
             }, {
                 "name" : "Authorization",
                 "value" : "Basic Z3Vlc3Q6Z3Vlc3Q="
             }, {
                 "name" : "Accept-encoding",
                 "value" : "gzip,deflate,sdch"
         } ],
         "parameters" : [ ],
         "id" : null,
         "link" : [ ],
         "query-string" : ""
     },
     "events" : null,
     "id" : {
         "rel" : "self",
         "href" : "http://localhost:19080/Contrast/api/traces/45adaa6a-ab7d-4ba1-af2c-5ee1301c1771/YIGJ-4UKM-46F8-O706?expand",
         "method" : "GET"
     },
     "link" : [ {
         "rel" : "self",
         "href" : "http://localhost:19080/Contrast/api/traces/45adaa6a-ab7d-4ba1-af2c-5ee1301c1771/YIGJ-4UKM-46F8-O706?expand",
         "method" : "GET"
     }, {
         "rel" : "application",
         "href" : "http://localhost:19080/Contrast/api/applications/45adaa6a-ab7d-4ba1-af2c-5ee1301c1771?expand",
         "method" : "GET"
     } ],
    "trace-id" : 3,
     "total-traces-received" : 3,
     "last-time-seen" : 1389619655592,
     "first-time-seen" : 1389619654111,
     "sub-status" : "",
     "sub-title" : " in (unknown)",
     "reported-to-bug-tracker" : false,
     "rule-name" : "insecure-auth-protocol"
},
...
}]
```


### Retrieve Specific Trace

Retrieves the traces for an **Application** by the application's identifier.

#### Resource URI

```
https://app.contrastsecurity.com/Contrast/api/traces/{app-id}/{trace-id}
```

#### Request

Parameter | Type | Required | Description
:----------|:------|:----------|:------------
app-id | guid  |  true  |  The ID of the Application for which you want information
trace-id  |  guid   | true  |  The ID of the Trace for which you want information

#### Sample Request

```
curl -HAccept:application/json -HAPI-Key:test -HAuthorization:dGVzdF91c2VyOnRlc3Q= https://app.contrastsecurity.com/Contrast/api/traces/45adaa6a-ab7d-4ba1-af2c-5ee1301c1771/
```

#### Response

Returns a **Trace** object.

#### Sample Response

```
{
     "uuid" : "Y1D7-7IV6-JZ62-PKQ1",
     "status" : "Reported",
     "platform" : "Sun Microsystems Inc.",
     "language" : "Java",
     "title" : "Overly Long Session Timeout in (unknown)",
     "evidence" : "<div class='trace-risk-evidence'>272:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the&nbsp;timeout&nbsp;for&nbsp;a&nbsp;particular&nbsp;session&nbsp;dynamically&nbsp;by&nbsp;using<br/>\n273:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HttpSession.getMaxInactiveInterval().&nbsp;--&gt;<br/>\n274:&nbsp;<br/>\n275:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;session-config&gt;<br/>\n276:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--&nbsp;2&nbsp;days&nbsp;--&gt;<br/>\n277:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;session-timeout&gt;2880&lt;/session-timeout&gt;<br/>\n278:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/session-config&gt;<br/>\n279:&nbsp;<br/>\n280:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mime-mapping&gt;<br/>\n281:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;extension&gt;wmv&lt;/extension&gt;<br/>\n</div>\n",
     "request" : {
         "protocol" : "http",
         "version" : "1.0",
         "uri" : "/WebGoat/attack",
         "method" : "GET",
         "port" : 0,
         "headers" : [ {
                 "name" : "Cookie",
                 "value" : ".ASPXANONYMOUS=UPl1IIBCzwEkAAAAMDIwMWQ0N2MtMjQ0Mi00ZGMzLWFjM2EtNWY2MTZmMGJlMTMz0; Language=en; Country=US; UMB_UPDCHK=1"
             }, {
                 "name" : "Cache-control",
                 "value" : "max-age=0"
             }, {
                 "name" : "Connection",
                 "value" : "keep-alive"
            }, {
                 "name" : "Accept-language",
                 "value" : "en-US,en;q=0.8,es-419;q=0.6,es;q=0.4"
             }, {
                 "name" : "Host",
                 "value" : "localhost:9080"
             }, {
                 "name" : "Accept",
                 "value" : "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
             }, {
                 "name" : "User-agent",
                 "value" : "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"
             }, {
                 "name" : "Authorization",
                 "value" : "Basic Z3Vlc3Q6Z3Vlc3Q="
             }, {
                 "name" : "Accept-encoding",
                 "value" : "gzip,deflate,sdch"
         } ],
        "parameters" : [ ],
         "id" : null,
         "link" : [ ],
         "query-string" : ""
     },
     "events" : null,
    "id" : {
         "rel" : "self",
         "href" : "http://localhost:19080/Contrast/api/traces/45adaa6a-ab7d-4ba1-af2c-5ee1301c1771/Y1D7-7IV6-JZ62-PKQ1?expand",
         "method" : "GET"
     },
     "link" : [ {
             "rel" : "self",
             "href" : "http://localhost:19080/Contrast/api/traces/45adaa6a-ab7d-4ba1-af2c-5ee1301c1771/Y1D7-7IV6-JZ62-PKQ1?expand",
             "method" : "GET"
         }, {
             "rel" : "application",
             "href" : "http://localhost:19080/Contrast/api/applications/45adaa6a-ab7d-4ba1-af2c-5ee1301c1771?expand",
             "method" : "GET"
     } ],
     "trace-id" : 2,
     "total-traces-received" : 1,
     "last-time-seen" : 1389619653489,
     "first-time-seen" : 1389619653489,
     "sub-status" : "",
     "sub-title" : "/WEB-INF/web.xml",
     "reported-to-bug-tracker" : false,
     "rule-name" : "session-timeout"
}
```


## See Also

[Glossary](user_tsfaq.html#glossary)
