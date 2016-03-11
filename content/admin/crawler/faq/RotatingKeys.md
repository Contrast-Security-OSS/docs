<!--
title: "Configuring Crawler to Connect to TeamServer After Rotating Service Keys"
description: "Configuring Crawler to Connect to TeamServer After Rotating Service Keys."
tags: "crawler configuration API Base64 phantomJS"
-->

## Who Should Read This Article
Enterprise On Premise (EOP) administrators responsible for installation, configuration and administration of both TeamServer and Crawler should read this article in the event of rotating the service key associated with the SuperAdmin account. The service key will only need to be modified within the Crawler configuration if the service key has been rotated by TeamServer.

## How To Resolve This Issue
From time to time, customers will go through the operation of rotating their API Service Key. When this happens and one or more Crawlers have been configured, the configuration located in the *$CRAWLER_HOME/conf/application-main.properties* file will need to change. Specifically, the ```apiAuthorization``` (Service Key) and the ```apiKey``` (API Key) will need to change.

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

The ```apiAuthorization``` is not stored in plain text. Rather, this value needs to be modified based on the operation of concatenating the username and the service key, then performing a ```base64``` encode operation.

```
BASE64(<username>:<service_key>)
```

 
