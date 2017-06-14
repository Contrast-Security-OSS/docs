<!--
title: "Configure HTTP Header"
description: "Configure Contrast to connect to HTTP Header"
tags: "installation setup EOP system settings connect http header"
-->


Contrast supports x509 client certificate authentication through a trusted proxy, which authenticates the user and then sends the user's username to Contrast in a HTTP header. To enable HTTP header authentication: 

* Update the property file by changing the `authentication.mode` in *~/path_to_contrast_installation/conf/auth.properties* to `http_header`. 
* By default, the HTTP header name is `Contrast-Authentication`. This is configurable in the *auth.properties* file, if you update the value of `auth.http.header.field.name`.

* After restarting Contrast, each request must include the HTTP header `Contrast-Authentication: username` to login. 

> **Note:** HTTP header authentication should only be used if all Contrast nodes are accessible exclusively through a trusted proxy. No nodes should be accessible directly.