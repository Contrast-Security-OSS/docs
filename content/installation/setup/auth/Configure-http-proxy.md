<!--
title: "Configure Trusted HTTPS Proxy"
description: "Configure Contrast to connect to Trusted HTTPS Proxy"
tags: "installation setup EOP system settings connect https proxy header"
-->


Contrast supports client authentication through a trusted proxy, which authenticates the user and then sends the user's username to Contrast in a HTTP header. (This type of authentication is particularly useful for x509 clients.) Users must be configured in Contrast before starting their authentication configuration, and use the same email address as their usernames for both configurations, in order to be granted access to Contrast after authentication. 

To enable trusted HTTPS proxy authentication:

* Update the *auth.properties* property file by changing the `authentication.mode` in *~/path_to_contrast_installation/data/conf/auth.properties* to `http_header`. 
* By default, the HTTP header name is `Contrast-Authentication`. You can also configure this in the *auth.properties* file by updating the value of `auth.http.header.field.name`.
* After restarting Contrast, each request must include the HTTP header `Contrast-Authentication: username` to login. 

>**Note:** Trusted HTTPS proxy authentication should only be used if all Contrast nodes are accessible exclusively through a trusted proxy. No nodes should be accessible directly; otherwise, an attacker could impersonate any authorized user.

