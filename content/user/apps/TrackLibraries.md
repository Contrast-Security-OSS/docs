<!--
title: "Keep Track of Libraries"
description: "Overview of keeping track of libraries"
tags: "user applications track libraries quick start guide"
-->

Contrast uses third party and open source library assessment to identify which libraries are used, the depth of their usage and the number of vulnerabilities that exist in them, including vulnerabilities that aren't previously identified Common Vulnerabilities and Exposures (CVEs). This assessment makes you aware of libraries that may be vulnerable and impact the security of your application. Go to the **Libraries** tab in the application's Overview page to see a list of all libraries being used within that application. You can also go to the main Libraries page to see an overview of all libraries across your portfolio and manage them in bulk. 

<a href="assets/images/Application_Libraries.png" rel="lightbox" title="Application's Libraries"><img class="thumbnail" src="assets/images/Application_Libraries.png"/></a>

Contrast provides you with a grade for: 

* the library
* known CVEs
* the latest version and release date
* used and total classes in the library
* the application that's using the library 

Contrast calculates this grade based on three things: 

* Age of the library
* Number of versions that postdate the library
* Number of known CVEs that affect the library

For more information, read the article on [Library Analysis](user-libraries.html#analysis).

##Export Findings

### Formats

We support CSV and XML formats. Each export type produces the same - the only difference is in the formatting.

### Export in bulk
When exporting, the user can either select specific libraries to export using the check boxes or use our filtering. When a filter is applied, an option to export all libraries that match that filter is available once clicking the export icon. If not filter is applied, the user is able to export all libraries.

### Data

The exported file will contain the following for each library:

* NAME
* TECHNOLOGY
* RELEASE_DATE
* VERSION
* LATEST_VERSION
* HASH
* CVE: A list of CVEs, separated by commas, found in this library
* NUMBER_APPS: The number of applications that use the library
* NUMBER_CLASSES: The number of classes that use this library




