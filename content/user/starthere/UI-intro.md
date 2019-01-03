<!--
title: "Quick Start Guide"
description: "Overview of Contrast UI for new users"
tags: "Onboarding new user getting started"
-->

Welcome to Contrast! This is your guide to everything you need to know to get started in the interface. Start with onboarding your applications and then move on to environments, libraries and vulnerabilities – you’ll be up and running before you know it. As always, if you have any more questions, let the Contrast Support team know by emailing <support@contrastsecurity.com>. 

## Onboard Your Application

Once you've logged onto Contrast, click the **Add Agent** button on the top right, which brings you to an agent download page. A wizard walks you through each step of the process. 

For more information on adding an application, read [Add Applications](user-apps.html#addapp).
 
## Use the Application

The application server shows up right away in Contrast under the Servers tab. However, the application won’t appear in Contrast until you browse through it and generate some traffic. When an application first appears in Contrast, it’s listed as a trial application. As a trial application, the interesting information is blurred out under the application's Vulnerabilities tab. (Note that the same vulnerabilities appear on the Vulnerabilities page.) 

To  see all the information, these applications must be licensed. For more information on licensing your application, read the article on [License Applications](user-apps.html#license).
 
## Manage Applications

Go to the Applications page to see findings, scores, manage licenses, settings and more. Read the [Manage Applications article](user-appsmanage.html) for more details.
 
## Improve Your Application Score

Get your application secure by remediating vulnerabilities or enabling Protect rules. We provide you with a grade to show you how well your application is performing. Visit the [Contrast Scoring Guide](user-apps.html#score-guide) for more information. 
 
## Track Libraries

Be aware of libraries that may be vulnerable and bring them up to date by going to the Libraries tab in the application's overview page. 
 
Contrast provides you with a grade for the library, known Common Vulnerabilities and Exposures (CVEs), latest version and release date, used and total classes in the library, and the application that's using the library. Contrast calculates this grade based on three things: the age of the library, how many versions behind the library is, and the number of known CVEs that affect the library.

For more information, read [Library Analysis](user-libraries.html#analysis).

## Set Up Environments

In the Servers page, you can set the environment for each server to Development, QA or Production. Select your application in the grid to compare the differences across environments as code travels and track vulnerabilities in the Overview page. Contrast sets up a shell for you to designate servers; once that’s in place, Contrast can get busy finding weaknesses.

For more information, go to [Set Up Environments](user-apps.html#environ). 

## Reports

Go to the application's **Overview** page to generate reports of security issues that Contrast identifies while monitoring your application. To learn more, see the [Vulnerability Trend](user-reports.html#vulntrend) report.
 
## Discover Vulnerabilities

Go to the Vulnerabilities tab in the application's Overview page to get a list of all vulnerabilities discovered. Then track, share and get remediation guidance for each one.

### How vulnerabilities work

If a vulnerability is reported and Contrast has never seen it before, Contrast creates a new vulnerability. However, if that vulnerability already exists, Contrast updates the existing entry, issue count and number of days since it was last detected. 

<a href="assets/images/Application-vulns-tab.png" rel="lightbox" title="Vulnerabilities in the application page"><img class="thumbnail" src="assets/images/Application-vulns-tab.png"/></a>

> **Example:** This vulnerability was reported to Contrast five times for one server. Instead of showing up as five vulnerabilities, Contrast updates this entry and increments the count. As Contrast continues to see the same findings, the count goes up. If you dive into the Notes tab within this vulnerability, you notice a list of the servers in which this vulnerability was found.
 
## Manage Vulnerabilities

Go the **Vulnerabilities** page to view details on each one and get rid of weaknesses in your application. You can also perform tasks like tagging and updating severity levels. Read how to [Manage Vulnerabilities](user-vulns.html#manage-vuln) to understand them even better. 
 
## Analyze Findings

Contrast discovers any code flaws, which are presented with a severity level to help you prioritize your tasks. For each reported vulnerability, you can mark a status and create tags as needed. The following chart shows available statuses and behaviors when a vulnerability is marked and found again.


| Status        | Marked                          | Found Again          |
|---------------|---------------------------------|----------------------|
| Confirmed     | Stays Open                      | No Change            |
| Suspicious    | Stays Open                      | No Change            |
| Not a Problem | Closed - Requires Justification | Stays Closed         |
| Remediated    | Closed                          | Reopened as **Reported** |
| Reported      | Default                         | No Change            |
| Fixed         | Closed                          | Stays Closed         |
 
 
## Track Findings

Contrast gives you the ability to [send vulnerability data](user-vulns.html#track) to bugtracker integrations or to users via email. You can set up bugtrackers and other integrations - including Slack, HipChat or any generic WebHook integration - by going to the **user menu > Organization Settings > Integrations tab** in the sidebar. You can tell Contrast to notify you if there are any new high or critical vulnerabilities found in your application. 

For more information, read the article on [Integrations](admin-orgintegrations.html).
 
## Fix Findings

Find information on solutions and techniques to resolve a vulnerability by delving into Contrast's overview of the issue, which explains why it was flagged. Contrast also provides a **How To Fix** section which gives steps on resolving the issue. 
 
### Confirm the fix  

There are a couple of ways to verify that you fixed a vulnerability. 

**Replay the request.** If the issue is remediated and marked accordingly, you can replay the HTTP request under the **HTTP Info** tab in the vulnerability's details page to see if the issue is fixed. If it isn't fixed, the issue reappears with a status of **Reported**.

**Check build number.** You can assign a build version number to an application for tracking; this data, if available, also applies to any vulnerabilities found in the application. You can use the number to verify whether an issue still exists by selecting the "Open" quick view of the **Vulnerabilities** grid and searching for the build number. 

 