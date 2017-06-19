<!--
title: "Score Settings"
description: "Overview of score settings"
tags: "Admin organization score settings"
-->

Organization administrators can customize score settings for both overall score of applications and libraries by selecting **Organization Settings** in the user menu and **Score Settings** in the sidebar. Settings are separated into two sections: Overall Score and Library Score.

## Overall Score
This determines how applications are scored in Contrast.

* **Default Scoring** is the average of your application's library score and its custom code score
* **Custom Code-Only Scoring** ignores library score when calculating the overall application score. You have the option to select specific languages, as shown. 

## Library Score
There are two ways to determine how libraries are scored in Contrast:

* **Default Scoring** uses an algorithm that includes vulnerabilities as well as the age and versioning of a library.
* **Vulnerability-Only Scoring** bases scoring solely on vulnerabilities present in the library.

<a href="assets/images/Library_Score_Settings.png" rel="lightbox" title="Score Settings"><img class="thumbnail" src="assets/images/Library_Score_Settings.png"/></a>

You can also configure policy settings in **Policy Management** so that any library in violation automatically receives a failing score (F). Once these settings are chosen, you'll see an alert message in Score Settings. Clicking the policy link in the alert navigates you to [Library Policy](admin-policymgmt.html#library), where administrators may view and revise these settings.