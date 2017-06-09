<!--
title: "Configure HTTP Header"
description: "Configure Contrast to connect to HTTP Header"
tags: "installation setup EOP system settings connect http header "
-->

Http Header login can only be enabled by updated the property file. To enable HTTP Header Login change the ```authentication.mode``` in ~/path_to_contrast_installation/conf/auth.properties to ```http_header```. By default the http header key will be ```Contrast-Authentication```. This can be configurable in the ```teamserver_preferences``` table. The value can be updated with ```update teamserver_preferences set property_value='your_value_here' where property_name='authentication.http.header';```

After restarting to login each request will have to have the header value ```Contrast-Authentication=username```. HTTP Header Authentication should only be used if all teamserver nodes are only accessible through a trusted proxy. No nodes should be accessible directly.