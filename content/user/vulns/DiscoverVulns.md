<!--
title: "Discover Vulnerabilities"
description: "Overview of discovering vulnerabilities"
tags: "user applications discover vulnerabilities quick start guide"
-->

## How It Works

If a vulnerability is reported and Contrast has never seen it before, Contrast creates a new entry for that vulnerability. However, if that vulnerability already exists, Contrast updates the existing entry, issue count and number of days since it was last detected. 

<a href="assets/images/Vulnerability-overview.png" rel="lightbox" title="Vulnerability Overview"><img class="thumbnail" src="assets/images/Vulnerability-overview.png"/></a>

>**Example:** A vulnerability was reported to Contrast twice for one server. Instead of displaying each instance as a separate vulnerability, Contrast updates the existing entry and increments the count. Go to the **Notes** tab within this vulnerability to see a list of the servers in which this vulnerability was found.

### View findings 

Contrast shows you all the vulnerabilities it's discovered including SQL Injection, Cross-Site Scripting (XSS), Command Injection, Path Traversal, XML External Entity Processing (XXE), Cross-Site Request Forgery (CSRF), Java Deserialization and many more. Go to the main **Vulnerabilities** page to see all vulnerabilities across your portfolio, or go to the **Vulnerabilities** tab from the application's overview page to see a list of all vulnerabilities found in that application. 

> **Note:** For Contrast to find weaknesses and present findings, you must also exercise your application. You can then track, share and get remediation guidance for each vulnerability that Contrast reports. 

The grid of discovered vulnerabilities provides extremely detailed information on each one, including: 

* Type of vulnerability
* Tutorial on how to fix it
* Line of code
* Ability to replay the attack

## Export Findings

Export details on vulnerability findings from the **Vulnerabilities** page, a vulnerability's **Overview** tab, or an application or server's **Vulnerabilities** tab. Click the **Export** icon to choose either CSV or XML formats for the grouping of vulnerabilities that you want to include in the report.

<a href="assets/images/Vuln-export-options.png" rel="lightbox" title="Vulnerability export options"><img class="thumbnail" src="assets/images/Vuln-export-options.png"/></a>

The exported file contains the following data fields for each vulnerability:

* Vulnerability Name
* Vulnerability ID
* Category
* Rule Name
* Severity
* Status
* Number of Events
* First Seen
* Last Seen
* Application Name
* Application ID
* Application Code
* CWE ID
* Request Method
* Request Port
* Request Protocol
* Request Version
* Request URI
* Request Qs
* Request Body

### Custom reports

For users looking to craft custom software composition analysis reports about their applications, the vulnerability export feature might not provide sufficient information; however, Contrast offers a rich Application API which gives you access to Contrast vulnerability data. Reference the **Contrast RESTful API documentation > Application Trace Filtering > /ng/{orgUuid}/traces/{appId}/filter** section for instructions on using the Application API. 

You may also explore additional details on your vulnerabilities using a manual method.

> **Example:** This cURL request retrieves a list of vulnerabilities that also shows a list of the applications in which each vulnerability was found. The jq tool formats the data as CSV for use in a custom report.

```
curl \
    -H "Authorization: $(echo -n $username:$servicekey | base64)" \
    -H "API-Key: $apikey" \
    https://app.contrastsecurity.com/Contrast/api/ng/$orgid/orgtraces/filter?expand=request | \
    jq -r '.traces[] | {uuid: .uuid, protocol: .request.protocol} | [.uuid, .protocol] | @csv'
```

For more information, read [About the Contrast API](tools-api.html#api-about). 

