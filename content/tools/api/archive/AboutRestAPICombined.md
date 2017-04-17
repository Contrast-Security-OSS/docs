<!--
title: "Introduction To The Contrast REST API"
description: "Overview of the REST API"
tags: "Intro Open REST API v1 v2 v3 webhook"
-->

## API v3
All of Contrast's public API endpoints can be viewed [online](https://api.contrastsecurity.com). The documentation is built continuously and stays current with our latest SaaS release. The same documentation can also be found embedded in the TeamServer for both SaaS and EOP customers. Simply authenticate via an administrator account within TeamServer, select **Settings**, then select **API**. From there you will be able to launch the API documentation tool.

>**NOTE:** The endpoint for SaaS users is the same for everyone, while for On-Premise users it will depend on where the TeamServer application is installed on the client's network.

```https://app.contrastsecurity.com/Contrast/api
```

### Using the Documentation
Contrast's RESTful API documentation provides resources to understand how to use the endpoints to help you authenticate, navigate, collect data, and take actions on TeamServer programmatically. See the list under "API" and "Objects" for the endpoints and the related objects used by the endpoints. "Flow" provides a list of sample use cases and the information of their sequence of endpoints that need be called to accomplish them.

<a href="assets/images/api.png" rel="lightbox" title="API Documentation Tool"><img class="thumbnail" src="assets/images/api.png"/></a>

The documentation also includes a playground to test your endpoint interactions. This is a handy tool to quickly learn how to use the endpoints through experience.

The documentation is comprehensive, as it includes endpoints for v1, v2 and v3 API endpoints.

### Webhooks
Webhooks generate HTTP callbacks when events that meet your custom notification settings happen in TeamServer. They are HTTP(S) requests from TeamServer that are pushed to a URL specified by you in your custom notification settings. The receiving URL is your custom application, consuming event information in JSON format and executing integrations of your choice. Example integration targets include PagerDuty and other internal enterprise applications which provide application security findings in a timely manner to the appropriate audience. Contrast currently supports incident-based webhooks for RASP events.

#### Sample Request
Method: POST
Content-Type: application/json

```
[  
   {  
      "pk":{  
         "groupId":"1",
         "id":"e9c2b740-a99d-11e5-b0ff-ebef27635854"
      },
      "category":"ATTACK_ALERT",
      "createdDate":1450893140148,
      "subject":"Contrast Alert:New Attack",
      "message":"A new attack in PROBING status from 0:0:0:0:0:0:0:1.\\n\\nAttack ID:3e60a134-b071-4ae8-9ed9-b1ceb34076f9\\nMessage Created:2015-12-23 12:52:20",
      "level":"CRITICAL",
      "emailAddresses":[
      ],
      "webhookUrls":[
         "http://localhost:8888/hook"
      ],
      "notificationRules":[
         {  
            "name":"Alert",
            "channelClassNames":[  
               "com.aspectsecurity.contrast.teamserver.notification.channels.Database",
               "com.aspectsecurity.contrast.teamserver.notification.channels.Webhook"
            ],
            "emailAddresses":[
            ],
            "webhookUrl":"http://localhost:8888/hook",
            "createdDate":1450891813231,
            "lastModifiedDate":1450891813231,
            "enabled":true,
            "id":"34dde7cf-98fd-46c8-8590-a18079ccb622",
            "groupId":"1",
            "channelClassNamesList":[
               "com.aspectsecurity.contrast.teamserver.notification.channels.Database",
               "com.aspectsecurity.contrast.teamserver.notification.channels.Webhook"
            ]
         }
      ],
      "id":"e9c2b740-a99d-11e5-b0ff-ebef27635854",
      "groupId":"1"
   }
]
```



---

## API v2
Contrast offers a HATEOS-compliant **REST API** that allows you to collect nearly all of the same information that is accessible in your web account. You can get vulnerability information, coverage data, download agents, and more through the API. Our goal is to make sure Contrast offers data to allow complete integration into your existing Continuous Integration (CI), SIEM software, or other business intelligence dashboards.

We're always adding more endpoints, but if you'd like to see something added to the API, [file a ticket](https://support.contrastsecurity.com/tickets/new) and let's talk about it!

### See Also

[Accessing the API](dev_api2.html#access)

---

## API v1
There are two sets of **Contrast APIs**: **Engine APIs** and **User APIs**. The Contrast plugin uses what we call the **Engine APIs** to send vulnerabilities and other application information from the applications being monitored to the Contrast site for you to view in the TeamServer web application. That set of APIs is subject to change at any time, uses *different keys*, and in general is more about writing data to your Contrast account.

This documentation is all about the **User APIs**, which is the set of APIs that allow customers to read data from the TeamServer. These REST services make available all the same vulnerability and application information that is available on the TeamServer. 

>**Note:** Unlike other REST services, we use the **PUT** method for all of our services for security purposes

### API Security

Services, like the rest of your Contrast experience, are only available over SSL. On top of that, there are two things needed by every API request: an **Authorization Token** and an **API Key**.

### Authorization Token

This value holds the *Base64-encoded* username and your user service key (**not** your password), separated by a colon.

To get your service key, click on your **Organization Settings** or **System Settings** dropdown and select **API Key**. This page will allow you to email yourself the key.

```AuthorizationToken = BASE64(<username>:<service_key>)
```

This value goes into its own HTTP request header, **Authorization**.

### API Key

This value holds your organization's API key. You can get this value from the same API Key email, or from your Administrator. If you're the Administrator, you can see how to find and rotate this value in the **Admin Guide**. 

```APIKey = <org_service_key>
```

This value will go into its own HTTP request header, **API Key**.

### Testing Your Credentials

Once you have your credentials and have encoded them properly, try issuing a simple *service call* with them. We suggest using **Burp**, **ZAP**, **WebScarab**, or other HTTP tools to verify your credentials before testing them. Any key mismatches or authentication issues (like locked accounts) will cause a ```401 error```.

### See Also

[Security API Keys](admin_tsconfigset.html#key)

[Get Your Monitored Applications](dev_api1.html#monitor)
