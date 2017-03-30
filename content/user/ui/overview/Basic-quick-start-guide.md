<!--
title: "System, Organization and Application Roles"
description: "Overview of system, organization and application roles within TeamServer"
tags: "TeamServer roles observer superadmin system"
-->

Welcome to Contrast! This is your guide to everything you need to know to get started in the interface. Start with onboarding your applications and then move on to environments, libraries and vulnerabilities – you’ll be up and running by the time you’re done. As always, if you have any more questions, please let us know by…[method of contact here]. 

## Onboard Your Application

Once you've logged onto Contrast, select the Add Applications button on the top right, which brings you to an agent download page. A wizard walks you through what needs to be done. What language is your application primarily in – Java, .NET or Node.js? If you're using Java, you'll notice there are two options: Java and Java 1.5. The only difference is that Java includes the functionality to do automatic updates, which isn’t available in Java 1.5.
 
When you download an agent, the file should be called contrast.jar. This file needs to stay in its current form and shouldn’t be renamed. Once you download the contrast.jar file, regardless of your application server, Contrast needs to pass in -javaagent:/path/to/server/contrast.jar to your application server's JVM. Once complete, restart your application server. 

For more information on adding an application, please read the article on Adding an Application (https://docs.contrastsecurity.com/user_tsguideapp.html#addapp).
 
## Using the application

The application server shows up right away in Contrast under the Servers tab. However, the application won’t appear in Contrast until you browse through it and generate some traffic. When an application first shows up in Contrast, it’s listed as a trial application. As a trial application, the interesting information is blurred out under the Vulnerabilities tab. 

To  see all the information, these applications must be licensed. For more information on licensing your application, read the article on Licensing an Application (https://docs.contrastsecurity.com/user_tsguideapp.html#licapp).
 
## Managing Applications

Go to the Applications page to get detailed information, see findings, scores, manage licenses, settings and more.
 
## Set Up Environments

Compare the differences across environments as code travels. Click into your application. Contrast has a shell setup for you to designate servers. Once that’s in place, Contrast can get busy finding weaknesses.
 
## Discover Vulnerabilities

Go to the Vulnerabilities tab in the application page to get a list of all vulnerabilities discovered, and then track, share and get remediation guidance for each one.

###How it works

If a vulnerability is reported and Contrast has never seen it before, a new vulnerability is created. However, if that vulnerability already exists within Contrast, we update the existing entry, issue count and last seen date. For example:

In this example, this vulnerability was reported up to Contrast [X number] times. Instead of showing up as [x number] vulnerabilities, Contrast updates this entry and increments the count. As Contrast continues to see the same findings, the count goes up. If you dive into the Notes tab within this vulnerability, you notice a list of the servers in which this vulnerability was found.
 
## Improve Your Application Score

Get your application secure by remediating vulnerabilities or enabling protection rules. We provide you with a grade to show you how well your application is performing. Visit the Contrast Scoring Guide for more information (https://docs.contrastsecurity.com/user_tsguideapp.html#scoreguide). 
 
## Keep Track of Libraries

Be aware of libraries that may be vulnerable and bring them up to date by selecting the Libraries tab. 
 
Contrast provides you with a grade for the library, known CVEs, latest version and release date, used/total classes in the library and the application that's using the library. We calculate this grade based on three things: the age of the library, how many versions behind the library is, and the number of known CVEs that affect the library.

For more information, read the article on Library Analysis (https://docs.contrastsecurity.com/user_tsguidelib.html#analysis).
 
## Managing Vulnerabilities

Go the Vulnerabilities page to get details on each one. Get rid of weaknesses so your application isn't compromised.
 
## Analyze Findings

Contrast discovers any code flaws, which are presented with a severity level to help you prioritize your tasks. For each reported vulnerability, you can mark them and create tags as needed. The following chart shows available statuses and behaviors when a vulnerability is marked and found again.
 
 Status
Marked
Found Again
Confirmed
Stays Open
No Change
Suspicious
Stays Open
No Change
Not A Problem
Closed - Requires Justification
Stays Closed
Remediated
Closed
Reopened as Reported
Reported
Default
No Change
Fixed
Closed
Stays Closed
 
What’s better than assigning a vulnerability to a user? Creating tags for each vulnerability. These tags can be names of users, groups or just about anything. They are very useful when trying to navigate through vulnerabilities. To create a tag, dive into an application and select the Vulnerabilities tab. The Tag Vulnerabilities option is greyed out until you select the vulnerability you want to tag.



For example, lets say you create tagA and assign a few vulnerabilities with it. When you try to browse through your vulnerabilities and want to only look at ones with tagA, you can filter for just these. 

<INSERT IMAGE OF CREATING A TAG>
 
These tags can be created for applications and servers as well. To learn more about filters, please refer to the following link…
https://docs.contrastsecurity.com/user_tsguideapp.html#navvuln
 
## Reports

Generate reports of security issues that Contrast identifies while monitoring your application.
To learn more, read the article on the Vulnerability PDF Report (https://docs.contrastsecurity.com/user_tsguiderep.html#pdf).
 
##Track Findings

Contrast also gives you the ability to send vulnerabilities to bugtracker integrations or by email for users who don't have access to Contrast. You can set up these and a bunch of other integrations - including Slack, HipChat or any generic WebHook integration - by going the User menu (beside your user icon) selecting Organization Settings and then selecting Integrations in the sidebar. You can have Contrast notify you if there are any new high or critical vulnerabilities found in your application. 

For more information, read the article on Integrations (https://docs.contrastsecurity.com/user_tsguideset.html#integrate).
 
## Learn How to Fix Them

Find information on solutions or techniques to resolve a vulnerability by delving into the details we provide. For each vulnerability, Contrast provides an overview of the issue explaining why it was flagged. To remediate this, we provide a How To Fix section which gives steps on resolving the issue. 
 
### How to Test if Vulnerability has been Fixed

You've fixed your vulnerability, but how can you verify that in Contrast? There are a few things you can do:

* Replay the request:
If the issue is remediated and marked accordingly, you can replay the http request under HTTP Info to see if the issue is fixed. If it hasn’t been fixed, the issue reappears with a status of "Reported".

* Check build number:
For each application, you can assign it a build version number. If this property, -Dcontrast.override.appversion, is added to the -javaagent command, you can use this as a filter and verify whether the issue still exists for this build version.

* Check by time unit tests:
Similar to checking the build number, you can also filter by the time of when your unit tests were run. You can set a date range to view your vulnerabilities.
 
Additional properties can be found in the following articles on Java system properties (https://docs.contrastsecurity.com/user_javaconfig.html#props2) and .NET configuration (https://docs.contrastsecurity.com/user_netconfig.html#config). 
