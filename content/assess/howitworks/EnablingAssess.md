<!--
title: "Enabling Assess"
description: "Overview of how to enable Assess"
tags: "assessment how it works instrumentation enable assess"
-->

To get started with Assess, the first thing you need to do is enable the Assess functionality on the agents that have instrumented the application you want to analyze. This is done within the Contrast UI on the **Servers** page. Find the server(s) you want to begin analyzing and turn the **Assess** toggle ON. 

Though you can get a glimpse into the types of vulnerabilities Contrast discovers without an Assessment license, you won't be able to retrieve any details and miss out on other important functionality outlined below. So, you need to make sure you license the application as well. To license an application, find the application you want to license on the **Applications** page. You can either click the **TRIAL** link next to the application name or select **Apply License** from the row menu. You'll be prompted to confirm this action.

<a href="assets/images/Apply_License_Assess.png" rel="lightbox" title="Apply Assessment License"><img class="thumbnail" src="assets/images/Apply_License_Assess.png"/></a>

When Assess is enabled, you will need to restart the application in order for the Contrast agent to properly instrument the application with Assess capabilities. Once that is completed, Contrast will begin getting vulnerability analytics and more. The application will no longer have a TRIAL designation next to the name, indicating it has an Assessment license assigned to it.

>**Note:** Organization administrators can skip this manual step of applying licenses for their users by enabling "Automatically apply licenses to new applications" from the **Organization Settings** page in the **Licensing** section. 

## Application Assessment
Assessment is applied to each application. Once your application has been assessed, Contrast presents a multitude of information, including:

* Accurate vulnerability identification that comes with details on the code and solutions to fix it
* Overall score to let you know how the application is performing in general - read about [Score Settings](admin_orgsettings.html#score-settings)
* Activity of the URLs being hit
* Application usage metrics
* Insight into the architecture of the running application 
* Third Party & Open Source library assessment results
* Compliance reporting via PDF

## Contrast Assessment Policies
There are two types of policies available in Contrast Assess. They are as follows:

* **Assess Rules** TBD
* **Security Controls** which are methods in your code that make sure data is safe to use

Read more about these policies in our [Assessment Policy](assess_managevulns.html#assess-policy) article.
