<!--
title: "Explore Libraries"
description: "Overview of library management"
tags: "user library management"
-->

View and manage libraries in the **Libraries** page, a library's details page, or the **Libraries** tabs in an application or server's details page. 

## View Libraries 

The libraries grid provides basic information about each library, such as: 

* Letter grade
* Applications using the library 
* CVEs found in the library  
* Current and latest versions 

<a href="assets/images/Libraries-grid.png" rel="lightbox" title="View libraries in your organization"><img class="thumbnail" src="assets/images/Libraries-grid.png"/></a>

Click on a library in the grid to go to its details page, and view lists of the applications and servers in which the library appears as well as any vulnerabilities that Contrast has found within the library itself. 

<a href="assets/images/Library-details.png" rel="lightbox" title="View library details"><img class="thumbnail" src="assets/images/Library-details.png"/></a>

### Library statistics

Click the link above any libraries grid to **Show Library Stats** to analyze library data for your organization. Each graphic displays the statistical average as well as breakdowns for each category, including lines of code, grade and years out of date. 

<a href="assets/images/Library-stats.png" rel="lightbox" title="View Library Stats"><img class="thumbnail" src="assets/images/Library-stats.png"/></a>

For more information on Contrast's grading system, see the [Scoring Guide](user-libraries.html#score-lib). 

## Manage Libraries 

Manage libraries in your organization by tagging, filtering and exporting details. 

### Tag libraries 


### Delete libraries 

To delete one or more vulnerabilities, select the checkboxes for the appropriate libraries, and click the trash can icon in the action bar above the grid. You can also delete a single library by selecting the trashcan icon in the row dropdown menu or in the library's details page.

### Package details 


### Export findings

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

### Custom reports 

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
