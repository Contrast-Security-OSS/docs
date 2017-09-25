<!--
title: "Keep Track of Libraries"
description: "Overview of keeping track of libraries"
tags: "user applications track libraries quick start guide"
-->

Contrast uses third-party, open-source library assessment to identify which libraries are used, the depth of their usage and the number of vulnerabilities that exist in them, including previously unidentified Common Vulnerabilities and Exposures (CVEs). This assessment makes you aware of libraries that may be vulnerable and impact the security of your application. 

Go to the **Libraries** tab in the application's Overview page to see a list of all libraries being used within that application. You can also go to the main Libraries page to see an overview of all libraries across your portfolio and manage them in bulk. 

<a href="assets/images/Application_Libraries.png" rel="lightbox" title="Application's Libraries"><img class="thumbnail" src="assets/images/Application_Libraries.png"/></a>

Contrast provides you with a grade for: 

* the library
* known CVEs
* the latest version and release date
* used and total classes in the library
* the application that's using the library 

Contrast calculates this grade based on three things: 

* age of the library
* number of versions that postdate the library
* number of known CVEs that affect the library

For more information, read the article on [Library Analysis](user-libraries.html#analysis).

##Export Findings

Export details on findings from the Libraries page, a library's overview page, or the application or server's Libraries tabs. Click the **Export** icon to choose either CSV or XML formats for the grouping of libraries that you want to include in the report. 

<a href="assets/images/Library-export.png" rel="lightbox" title="Export library details"><img class="thumbnail" src="assets/images/Library-export.png"/></a>

In the Libraries grid, select individual libraries or use the filters to focus on specific data sets. You can then choose to export data for all libraries or only the libraries you selected. 

### Data

The exported file contains the following data fields for each library:

* Library Name
* Language
* Version
* Release Date
* Latest Version
* Grade
* SHA1
* CVE Count
* Application Count
* Server Count
* Number of Classes
* Number of Used Classes

For users looking to craft custom software composition analysis reports about their applications, the library export feature might not provide sufficient information; however, Contrast offers a rich Libraries API for accessing Contrast library data. Reference the [Contrast RESTful API documentation](https://api.contrastsecurity.com/#) **> Library > Libraries section** for instructions on using the Libraries API. You may also explore additional details on your libraries using a manual method. 

> **Example:** This cURL request retrieves a list of libraries in which each library includes a list of applications that use the library. The jq tool formats the data as CSV for use in a custom report.
```
$ curl -H "Authorization: $(echo -n $username:$servicekey
base64)" -H "API-Key: $apikey" https://app.contrastsecurity.com/Contrast/api/ng/$org_id/libraries/filter?expand=apps 
jq -r '.libraries[]
{name: .file_name, app_name: .apps[].name}
[.name, .app_name] 
@csv'
```

For more information, read [About the Contrast API](tools-api.html#api-about).

