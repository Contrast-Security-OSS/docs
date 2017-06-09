<!--
title: "Configure HTTP Header"
description: "Configure Contrast to connect to HTTP Header"
tags: "installation setup EOP system settings connect http header "
-->

To enable HTTP Header Login, update the property file by changing the ```authentication.mode``` in *~/path_to_contrast_installation/conf/auth.properties* to ```http_header```. By default, the HTTP Header key is ```Contrast-Authentication```. This is configurable in the ```teamserver_preferences``` table. You can update it with ```update teamserver_preferences set property_value='your_value_here' where property_name='authentication.http.header';```. After restarting Contrast to login, each request must have the header value ```Contrast-Authentication=username```. 

> Note: HTTP Header Authentication should only be used if all Contrast nodes are accessible only through a trusted proxy. No nodes should be accessible directly.