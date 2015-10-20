<!--
title: "HATEOAS Links"
description: "Information about HATEOAS links"
-->

Each API call response includes an array of **HATEOAS (Hypermedia as the Engine of Application State)** links. The beauty of HATEOAS is that it allows you to interact and construct an API flow solely through the hyperlinks we provide you. You no longer need to hardcode logic into your client in order to use our API. We provide HATEOAS links for each call and for transactions within a call, if available.

| Element | Description                                                                  |
|---------|------------------------------------------------------------------------------|
| HREF    | URL of the related HATEOAS link you can use for subsequent calls to the API. |
| REL     | The relation of the link to the current resource you have retrieved.         |
| METHOD  | The HTTP method to use for the related call.                                 |

## Example of HATEOAS Links

```
{
  "links": [
    {
      "href": "https://app.contrastsecurity.com/Contrast/api/applications/c0d6b545-6377-483e-8b0c-f2e2e2aa8684",
      "rel": "self",
      "method": "GET"
    },
    {
      "href": "https://app.contrastsecurity.com/Contrast/api/applications/c0d6b545-6377-483e-8b0c-f2e2e2aa8684/server",
      "rel": "server",
      "method": "GET"
    }
  ]
}
```
