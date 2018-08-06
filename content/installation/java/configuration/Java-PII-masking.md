<!--
title: "PII Masking for Java"
description: "About PII masking properties"
tags: "installation java agent configuration PII masking properties"
-->


## About PII Masking 

Some Contrast users have sensitive information in their applications that the Java agent captures and sends to the Contrast application. Consequently, other users in the same [organization](user-account.html#user-permissions) may view personally identifiable information (PII) - including passwords, security keys and other sensitive data - in the Contrast UI. 

## How It Works

Contrast’s PII masking feature removes the sensitive information and replaces it with a masking key in the Contrast UI, while still allowing the agent to Assess and Protect your application. Contrast handles three types of user input data: **body**, **header** and **query parameter**. Body masking is activated using a Boolean configuration property, and will mask all request bodies. For Protect findings and HTTP requests, header and query parameter masking will only mask the value of the header or query parameter defined in the configuration property. For Assess findings, Contrast masks all potentially sensitive information. 

## Properties

The following command line properties control and define masking for **Protect** findings and **HTTP requests**. 

* `contrast.report.body`: Masks data in the body when set to `false`. Provided as a Boolean. Defaults to `true` (no masking).

* `contrast.report.headers.mask`: Masks data found in the header values. Values provided as a comma-separated string with spaces omitted. Defaults to `empty` (no masking).

* `contrast.report.query.parameter.mask`: Masks data found in the query parameters. Values provided as a comma-separated string. Defaults to `empty` (no masking).

The following command line property enables masking for **Assess** findings. 

* `-Dcontrast.report.assess.mask`: If `true`, Contrast masks all potentially sensitive fields. Defaults to `false` (no masking). 

> **Example:** <br> 
 ```
 java -javaagent:contrast.jar 
 -Dcontrast.report.query.parameter.mask=menu,title -Dcontrast.report.body=false -Dcontrast.report.assess.mask=true -Dcontrast.report.headers.mask=cookie,host,referer,menu,title,screen,message,submit -jar /Users/johnsmith/Source/Test/webgoat-container-7.0.1-war-exec.jar
 ```

## Masking Keys

Contrast sends the following string values to the application in place of sensitive information.

* **Body:** {body-omitted-by-contrast}
* **Header:** {header-value-omitted-by-contrast}
* **Parameter:** {query-parameter-value-omitted-by-contrast}
* **Details:** {value-omitted-by-contrast} <br> 
 Most rules have details that contain additional rule-specific information. In some cases, these details have sensitive information that requires Contrast to use the given mask.


