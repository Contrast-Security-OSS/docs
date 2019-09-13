<!--
title: "Sensitive Data Masking"
description: "How to edit and manage sensitive data masking"
tags: "admin policy management sensitive data masking"
-->

Take advantage of Contrast's data masking feature to protect your organization. 

## How It Works

Contrast's data masking feature protects your sensitive data by preventing the Contrast agent from sending it to external systems – the Contrast UI, syslog or the security log. Data masking can also protect information in your application by preventing it from being sent as part of a Contrast vulnerability or attack report, which can limit risk to your business and help you meet compliance requirements. 

Sensitive data masking is part of policy management for your organization. It requires either an Assess or Protect license. 

Contrast agents mask sensitive data appearing in query parameters, request headers, cookies and forms. Sensitive data is identified by searching for specific keywords used in the input name. If it finds a match it will redact the value for that input, replacing it with a placeholder with the form contrast-redacted-{datatype}, where datatype is the category of sensitive data to which the keyword belongs (e.g. authentication, PII, etc.). <!-- TODO: are these actual data types? --> 

For example, the following sample HTTP request sent by an agent as part of a vulnerability report demonstrates two inputs that the agent identified as sensitive as well as the placeholders it used to mask the values of the input before sending the report to the Contrast UI, syslog server or security log: 
 
```
POST/employee/5 HTTP 1.1 

Host: example.com 

Content-Type: application/x-www-form-urlencoded 

Content-Length: 30 

Authorization: contrast-redacted-authentication 
 

ssn=contrast-redacted-id&department=sales 

``` 

The header value is masked because Authorization matches a keyword in the authentication data type and the form parameter is redacted because ssn matches a keyword in the id data type. Keyword matches are case-insensitive. <!-- TODO: are the above placeholder data types and keywords actual real types/keywords for this feature?  -->

Contrast agents do not mask individual fields in request bodies with a content type other than `application/x-www-form-urlencoded`; however, you can configure the agent to mask the entire request body. <!-- Common config? --> Contrast agents do not mask data that appears in the data flow portion of a vulnerability report, if using Assess, or in the vector of an attack event, if using Protect. 

> **Note:** Contrast agents make a “best effort” attempt to avoid printing sensitive data in debug log statements, however it’s possible that sensitive data could appear in the contrast log if the log level is set to DEBUG or lower. You should, whenever possible, avoid setting production systems to log at DEBUG or lower. If a system that deals with sensitive data is set to log at DEBUG or lower, you should take steps to ensure that those logs are not being sent to an external system to avoid leaking any sensitive data. 

## View and Edit Sensitive Data Types

Go to the **user menu > Policy Management > Sensitive Data tab**...

