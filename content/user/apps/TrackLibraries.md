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

In the Libraries grids, select individual libraries or use the filters to focus on specific data sets. If you apply a selection, you can choose to export all or selected libraries; if not, you can export data for all libraries. 

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

You can access more details on your libraries by going to the [Contrast API documentation](https://api.contrastsecurity.com/#) **> Library > Libraries section**, or using the command line. 

> **Example:** To find related application names and export the data to a CSV, use a cURL request to the API: 
```
$ curl -H "Authorization: $(echo -n $username:$servicekey
base64)" -H "API-Key: $apikey" https://app.contrastsecurity.com/Contrast/api/ng/4e55d28e-55e9-4b23-816b-cb4737733a47/libraries/filter?expand=apps 
jq -r '.libraries[]
{name: .file_name, app_name: .apps[].name}
[.name, .app_name] 
@csv'
```

For more information, read [about the Contrast API](tools-api.html#api-about).

