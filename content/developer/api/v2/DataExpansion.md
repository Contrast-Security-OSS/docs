<!--
title: "Data Expansion"
description: "Information on data expansion"
-->

Any data enclosed in a HATEOAS link as a **GET** for a resource can be expanded to be included in the resource result itself. To add a **Data Expansion** to an API call, you will add the ```expand``` parameter to the API Resource call. Each of the resources listed in this documentation lists the data available for expansion under the resource being queried.

## Sample Request

```
curl -HAccept:application/json -HAuthorization:test -HAPI-Key:test https://app.contrastsecurity.com/Contrast/api/applications/c0d6b545-6377-483e-8b0c-f2e2e2aa8684/?expand=server
```

## Sample Response

```
[
  {
    "links": [ ... ],
    "app-id": "c0d6b545-6377-483e-8b0c-f2e2e2aa8684",
    "name": "Test Applications",
    "short-name": "Test",
    "group-name": null,
    "path": "/test",
    "language": "Java",
    "license": "Trial",
    "lastSeen": 23472983488,
    "server": {
      "server-id": 1,
      "last-startup-message-received": 2/27/2014 17:30:00,
      ...
    }
  }
]
```
