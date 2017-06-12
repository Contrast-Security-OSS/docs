<!--
title: "Configure HTTP Header"
description: "Configure Contrast to connect to HTTP Header"
tags: "installation setup EOP system settings connect http header"
-->


Contrast supports x509 client certificate authentication through a trusted proxy, which authenticates the user and then sends the user's username to Contrast in a HTTP Header. To enable HTTP Header authentication: 

* Update the property file by changing the `authentication.mode` in *~/path_to_contrast_installation/conf/auth.properties* to `http_header`. 
* By default, the HTTP Header name is `Contrast-Authentication`. This is configurable in the `teamserver_preferences` table. You can update it with `update teamserver_preferences set property_value='your_value_here' where property_name='authentication.http.header';`. 

* After restarting Contrast, each request must include the HTTP header `Contrast-Authentication: username` to login. 

> **Note:** HTTP Header authentication should only be used if all Contrast nodes are accessible exclusively through a trusted proxy. No nodes should be accessible directly.