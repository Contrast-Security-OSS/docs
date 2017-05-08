<!--
title: "Accessing The API"
description: "Instructions on how to access the API"
tags: "tools access API v2 key authorization"
-->

There are two things needed by every API request: an **Authorization Token** and an **API Key**. These services, like the rest of your Contrast experience, are only available over SSL. 

To begin using the Contrast API, you will need to retrieve your **API Key** from the server. To do this, you will need to log in to your Contrast account and have the application email you a generated API Key. You may also ask your administrator.
1. Log in to Contrast
2. Click the **Down** arrow next to your login name in the page header
3. Select **Organization Settings** or **System Settings** from the dropdown
4. Navigate to the **API** page
5. Click either **Email me the current API Key** or **Rotate the key and email me a new key**

Once you have retrieved your API Key, you will set this, along with your authorization credentials, as headers on each request to the API.

Header | Value
------ | -----
**API Key** | The API Key retrieved above (Plaintext)
**Authorization** | *Base64-encoded* credentials (username:*service-key*)
**Accept** | ```application/xml```, ```application/json```

## Sample Request

```
curl -HAccept:application/json -HAuthorization:test -HAPI-Key:test https://app.contrastsecurity.com/Contrast/api/applications
```

## Sample Response

```
[
  {
    "links": [
      {
        "rel": "server",
        "method": "GET"
        "href": "https://app.contrastsecurity.com/Contrast/api/application/c0d6b545-6377-483e-8b0c-f2e2e2aa8684/server"
      },
      ...
    ],
    "appId": "c0d6b545-6377-483e-8b0c-f2e2e2aa8684",
    "name": "Test Application"
    ...
  }
]
```

## Testing Your Credentials
Once you have your credentials and have encoded them properly, try issuing a simple *service call* with them. We suggest using **Burp**, **ZAP**, **WebScarab**, or other HTTP tools to verify your credentials before testing them. Any key mismatches or authentication issues (like locked accounts) will cause a 401 error.

