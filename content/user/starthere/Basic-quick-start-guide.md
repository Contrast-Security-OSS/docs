<!--
title: "Quick Start Guide"
description: "Overview of Contrast UI for new users"
tags: "Onboarding new user getting started"
-->

Welcome to Contrast! This is your guide to everything you need to know to get started in the interface. Start with onboarding your applications and then move on to environments, libraries and vulnerabilities – you’ll be up and running before you know it. As always, if you have any more questions, let the Contrast Support team know by emailing <support@contrastsecurity.com>. 

## Onboard Your Application

Once you've logged onto Contrast, click the **Add Applications** button on the top right, which brings you to an agent download page. A wizard walks you through what needs to be done. What language is your application primarily in – Java, .NET or Node.js? If you're using Java, you'll notice that there are two options: Java and Java 1.5. The only difference is that Java includes the functionality to do automatic updates, which isn’t available in Java 1.5.
 
When you download an agent, the file should be called *contrast.jar*. This file needs to stay in its current form and shouldn’t be renamed. Once you download the *contrast.jar* file, regardless of your application server, Contrast needs to pass in **-javaagent:/path/to/server/contrast.jar** to your application server's JVM. Once complete, restart your application server. 

For more information on adding an application, please read the article on [Adding an Application](user_apps.html#addapp).
 
## Use The Application

The application server shows up right away in Contrast under the Servers tab. However, the application won’t appear in Contrast until you browse through it and generate some traffic. When an application first appears in Contrast, it’s listed as a trial application. As a trial application, the interesting information is blurred out under the application's Vulnerabilities tab. (Note that the same vulnerabilities appear on the Vulnerabilities page.) 

To  see all the information, these applications must be licensed. For more information on licensing your application, read the article on [Licensing an Application](user_apps.html#license).
 
## Manage Applications

Go to the Applications page to get detailed information, see findings, scores, manage licenses, settings and more. Read the [Manage Applications article](user_appsmanage.html) for more details.
 
## Set Up Environments

In the Servers page, you can set the environment for each server to Development, QA or Production. Select your application in the grid to compare the differences across environments as code travels and track vulnerabilities in the Overview page. Contrast sets up a shell for you to designate servers; once that’s in place, Contrast can get busy finding weaknesses.

For more information, including screenshots, go to the [Set Up Environments article](user_apps.html#environ). 
 
## Discover Vulnerabilities

Go to the Vulnerabilities tab in the application's Overview page to get a list of all vulnerabilities discovered. Then track, share and get remediation guidance for each one.

### How vulnerabilities work

If a vulnerability is reported and Contrast has never seen it before, Contrast creates a new vulnerability. However, if that vulnerability already exists, Contrast updates the existing entry, issue count and number of days since it was last detected. 

<a href="assets/images/Application-vulnerabilities-tab.png" rel="lightbox" title="Vulnerabilities in the application page"><img class="thumbnail" src="assets/images/Application-vulnerabilities-tab.png"/></a>

> **Example:** This vulnerability was reported to Contrast five times for one server. Instead of showing up as five vulnerabilities, Contrast updates this entry and increments the count. As Contrast continues to see the same findings, the count goes up. If you dive into the Notes tab within this vulnerability, you notice a list of the servers in which this vulnerability was found.
 
## Improve Your Application Score

Get your application secure by remediating vulnerabilities or enabling Protection rules. We provide you with a grade to show you how well your application is performing. Visit the [Contrast Scoring Guide](user_apps.html#score-guide) for more information. 
 
## Track Libraries

Be aware of libraries that may be vulnerable and bring them up to date by going to the Libraries tab in the application's Overview page. 
 
Contrast provides you with a grade for the library, known Common Vulnerabilities and Exposures (CVEs), latest version and release date, used and total classes in the library, and the application that's using the library. Contrast calculates this grade based on three things: the age of the library, how many versions behind the library is, and the number of known CVEs that affect the library.

For more information, read the article on [Library Analysis](user_libraries.html#analysis).
 
## Manage Vulnerabilities

Go the Vulnerabilities page to view details on each one and get rid of weaknesses so your application isn't compromised. Read the [Manage Vulnerabilities article](user_vulns.html#manage) to understand them even better. 
 
## Analyze Findings

Contrast discovers any code flaws, which are presented with a severity level to help you prioritize your tasks. For each reported vulnerability, you can mark a status and create tags as needed. The following chart shows available statuses and behaviors when a vulnerability is marked and found again.

---

| Status        | Marked                          | Found Again          |
|---------------|---------------------------------|----------------------|
| Confirmed     | Stays Open                      | No Change            |
| Suspicious    | Stays Open                      | No Change            |
| Not a Problem | Closed - Requires Justification | Stays Closed         |
| Remediated    | Closed                          | Reopened as **Reported** |
| Reported      | Default                         | No Change            |
| Fixed         | Closed                          | Stays Closed         |

---

What’s better than assigning a vulnerability to a user? Creating tags for each vulnerability. These tags can be names of users, groups or just about anything. They are very useful when trying to navigate through vulnerabilities. To create a tag, go to the application's Overview page and select the Vulnerabilities tab. The **Tag Vulnerabilities** option is grayed out until you select the vulnerability you want to tag. 

<a href="assets/images/Tag-vulnerability.png" rel="lightbox" title="Tag vulnerabilities in the application page"><img class="thumbnail" src="assets/images/Tag-vulnerability.png"/></a>
 
> **Example:** You create **tagA** and assign a few vulnerabilities with it. When you try to browse through your vulnerabilities and want to only look at ones with **tagA**, you can filter for just those.

These tags can be created for applications and servers as well. To learn more about filters, please read the [Using Contrast Overview](user_starthere.html#ui-overview).  
 
## Reports

Go to the application's **Overview** page to generate reports of security issues that Contrast identifies while monitoring your application. To learn more, see the [Vulnerability Trend](user_reports.html#vulntrend) report.
 
##Track Findings

Contrast gives you the ability to send vulnerabilities to bugtracker integrations or by email for users who don't have access to Contrast. You can set up these and a bunch of other integrations - including Slack, HipChat or any generic WebHook integration - by selecting **Organization Settings** in the User menu and then **Integrations** in the sidebar. You can tell Contrast notify you if there are any new high or critical vulnerabilities found in your application. 

For more information, read the article on [Integrations](admin_orgintegrations.html).
 
## Fix Findings

Find information on solutions and techniques to resolve a vulnerability by delving into Contrast's overview of the issue, which explains why it was flagged. Contrast also provides a **How To Fix** section which gives steps on resolving the issue. 
 
### Check a fixed vulnerability 

You fixed your vulnerability, but how can you verify that in Contrast? There are a few things you can do from the application page:

* Replay the request:
If the issue is remediated and marked accordingly, you can replay the HTTP request under the **HTTP Info** tab in the Vulnerabilities tab to see if the issue is fixed. If it isn't fixed, the issue reappears with a status of **Reported**.

* Check build number:
For each application, you can assign it a build version number. By adding the property `-Dcontrast.override.appversion` to the `-javaagent` command, you can use this as a filter and verify whether the issue still exists for this build version by clicking the **Advanced** link and the **Build Number** dropdown.

* Check by time unit tests:
You can also filter by the time at which your unit tests were run, and set a date range to view your vulnerabilities in the **Set Date Range** input field above the vulnerabilities grid.
 
You can find additional properties in articles on [Java Agent System Properties](installation_javaconfig.html#system) and [.NET Agent Configuration](installation_netconfig.html). 
