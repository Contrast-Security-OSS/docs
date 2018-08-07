<!--
title: "Keep Track of Libraries"
description: "Overview of keeping track of libraries"
tags: "user applications track libraries quick start guide"
-->

Contrast uses third-party, open-source library assessment to identify which libraries are used, the depth of their usage and the number of vulnerabilities that exist in them, including previously unidentified Common Vulnerabilities and Exposures (CVEs). This assessment makes you aware of libraries that may be vulnerable and impact the security of your application. 

Go to the **Libraries** tab from the application's **Overview** page to see a list of all libraries being used within that application. You can also go to the main **Libraries** page to see an overview of all libraries across your portfolio and manage them in bulk. 

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

For more information, read about [library analysis](user-libraries.html#analysis) and [management](user-libraries.html#explore-lib).


