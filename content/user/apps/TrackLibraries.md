<!--
title: "Keep Track of Libraries"
description: "Overview of keeping track of libraries"
tags: "user applications track libraries quick start guide"
-->

Contrast uses third-party and open-source library assessment to identify which libraries are used, the depth of their usage and the number of vulnerabilities that exist in them, including previously unidentified Common Vulnerabilities and Exposures (CVEs). This assessment makes you aware of libraries that may be vulnerable and impact the security of your application. 

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

In the Libraries grids, select individual libraries with the check boxes or use your filters to focus on specific data sets. When you apply a selection, you can choose to export all or selected libraries. If you don't select any checkboxes or filters, you can export data for all libraries. 

### Data

The exported file contains the following for each library:

* NAME
* TECHNOLOGY
* RELEASE_DATE
* VERSION
* LATEST_VERSION
* HASH
* CVE <br> (A list of CVEs, separated by commas, found in this library.)
* NUMBER_APPS <br> (The number of applications that use the library.)
* NUMBER_CLASSES <br> (The number of classes that use this library.)




