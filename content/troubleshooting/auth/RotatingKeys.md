<!--
title: "Configure Crawler to Connect to Contrast After Rotating Service Keys"
description: "Configure Crawler to Connect to Contrast After Rotating Service Keys."
tags: "troubleshoot authentication crawler configuration API Base64 phantomJS"
-->

## Connection Issues After Rotating Keys

Enterprise-on-Premises (EOP) administrators who are responsible for installation, configuration and administration of both the Contrast interface and Crawler may have connection issues when rotating the service key associated with the SuperAdmin account. The service key only needs to be modified within the Crawler configuration if the service key is rotated by Contrast.

## Restore Connection

When customers rotate their API Service Key, and one or more Crawlers have been configured, the configuration located in the *$CRAWLER_HOME/conf/application-main.properties* file must change. Specifically, the Service Key (`apiAuthorization`) and the API Key (`apiKey`) must change, as shown below. 

```bash
logging.file=logs/crawler.log
logging.level.com.contrastsecurity.crawler=INFO
teamserver.port=8080
crawler.output=output
teamserver.protocol=http
teamserver.apiAuthorization=
teamserver.apiKey=
crawler.phantomJsBinDir=/usr/local/contrast-crawler/lib/phantomjs-linux/bin/phantomjs
teamserver.host=
```

The `apiAuthorization` is not stored in plain text. This value must be modified by concatenating the username and the service key, then performing a `base64` encode operation:

```
BASE64(<username>:<service_key>)
```

 
