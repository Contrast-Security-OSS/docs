<!--
title: "Sensitive Data Masking"
description: "How to manage sensitive data masking"
tags: "admin policy management sensitive data masking"
-->

Take advantage of Contrast's data masking feature to limit risk to your organization and meet compliance requirements.  

## How It Works

Contrast's data masking feature protects sensitive data in your applications by preventing the Contrast agent from storing it externally in the Contrast UI, syslog or the security log. Data masking also prevents the agent from transmitting it as part of Contrast vulnerability or attack reports. 

Sensitive data masking is part of policy management by default for organizations with at least one active Assess or Protect license. Contrast offers several categories of sensitive data, or data types, that are comprised of specific keywords that the agent automatically identifies and redacts in reports. Org Admins and Rules Admins can manage data types in the Contrast UI. 

### Agent identification and masking

Contrast agents mask sensitive data in query parameters, request headers, cookies and bodies. Your agent identifies sensitive data by searching for specific keywords used in the input name. If the agent finds a match, it redacts the value for that input, and replaces it with a placeholder with the format `contrast-redacted-{datatype}`, where `datatype` is the category of sensitive data to which the keyword belongs.

Contrast agents do **not** mask individual fields in request bodies with a content type other than `application/x-www-form-urlencoded`; however, you can configure the agent to mask the entire request body. Contrast agents also do not mask data that appears in the data flow portion of a vulnerability report, if using Assess, or in the vector of an attack event, if using Protect. 

> **Note:** Contrast agents make a “best effort” attempt to avoid printing sensitive data in Contrast log statements; however, it’s possible that sensitive data could appear in the Contrast log, if the log level is set to DEBUG or lower. Whenever possible, you should avoid setting production systems to log at DEBUG or lower. If a system that deals with sensitive data is set to log at DEBUG or lower, you should take steps to ensure that those logs are not being sent to an external system to avoid leaking any sensitive data. 

#### Example

The following sample HTTP request sent by an agent as part of a vulnerability report shows two inputs that the agent identified as sensitive as well as the placeholders it used to mask the values of the input before sending the report to the Contrast UI, syslog server or security log. 
 
```
PUT /employee/5 HTTP/1.1 
Host: example.com 
Content-Type: application/x-www-form-urlencoded 
Content-Length: 30 
apikey: contrast-redacted-authentication-info 

ssn=contrast-redacted-government-id&department=sales 

``` 

In this case, the header value is masked because "apikey" matches a keyword in the "Authentication Info" data type, and the form parameter is redacted because "ssn" matches a keyword in the "Government ID" data type for your Contrast organization. (Keyword matches are case insensitive.)

## Manage Sensitive Data Types

Go to the **user menu > Policy Management > Sensitive Data tab** to view and edit the sensitive data types for your organization. In the **Sensitive Data** grid, data types and associated keywords are listed alphabetically. To quickly find data types by name or keywords, use the search field above the grid. 

To enable redaction of the entire HTTP request body, check the box to **Mask entire body**. This will apply to all applications in your organization.

<a href="assets/images/Sensitive-data-grid.png" rel="lightbox" title="View sensitive data types and keywords in the grid"><img class="thumbnail" src="assets/images/Sensitive-data-grid.png"/></a>

Critical data types and keywords determined by Contrast apply to all applications in your organization by default, and can't be edited or disabled. For data types that Contrast has not determined to be critical, you may use the toggle in the grid to enable or disable them for the organization.

### Edit data types

Click on the name of the data type in the grid to add custom keywords. In the **Edit Sensitive Data Type** form, use the **Custom Keywords** field to add more keywords and specify the applications to which they apply. **Default Keywords** aren't editable, and apply to all applications. 

<a href="assets/images/Sensitive-data-edit.png" rel="lightbox" title="Add customized keywords to a critical sensitive data type"><img class="thumbnail" src="assets/images/Sensitive-data-edit.png"/></a>


