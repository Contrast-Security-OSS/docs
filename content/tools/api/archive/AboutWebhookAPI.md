<!--
title: Webhook API Documentation"
description: "Overview of the Contrast Webhook API"
tags: "API v3 webhook"
-->

## What Are Webhooks?
Webhooks generate HTTP callbacks when events that meet your custom notification settings happen in TeamServer. They are HTTP(S) requests from TeamServer that are pushed to a URL specified by you in your custom notification settings. The receiving URL is your custom application, consuming event information in JSON format and executing integrations of your choice. Example integration targets include PagerDuty and other internal enterprise applications which provide application security findings in a timely manner to the appropriate audience. Contrast currently supports incident-based webhooks for RASP events.

## Sample Request
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
