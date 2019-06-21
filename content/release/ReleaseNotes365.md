<!--
title: "Contrast 3.6.5 - June 2019"
description: "Contrast 3.6.5 June 2019"
tags: "3.6.5 June Release Notes"
-->

## Fixes

* 

## Improvements

Set up session metadata to pinpoint the source of vulnerabilities reported for each application. Metadata can include build numbers, branch names, committers, versions and more. Once your Contrast agent is configured to report session metadata, go to your application’s Vulnerabilities tab to see the data in the new vulnerabilities timeline. You can also use the Seen By column in the grid to filter vulnerabilities by specific values.

Use source names to label attack events by expected sources so you can promptly choose which attack events to investigate. All you need is the IP information for a known source (like a pen tester) to get started. To create a source name or see existing source names in your organization, go to the IP Management page in Policy Management and select the Source Names tab. When you view attacks in the Attacks > Monitor page and Attacks Details pages, Contrast will display the source name instead of the attacker’s IP information. (We’ll be adding source names to the Attack Events grid next!)

Contrast Protect has two new protection rules against unsafe files. The Unsafe File Uploads rule blocks malicious files being uploaded to web applications. The Zip File Overwrite rule protects against malicious files and directory structures within zip files uploaded to web applications. These rules are in customer beta and available across all languages.


## Agent Updates

### Java summary


### .NET summary 

The .NET agent now supports use within [Docker containers](installation-netinstall.html#net-docker) for .NET 4.5.2+ applications. We improved accuracy of insecure authentication protocol Assess rule, and added a new Assess rule to detect the “X-Powered-By” header. We fixed a bug that caused a null reference error in processing Exclusions. We also added support for setting `application.code`.

### .NET Core summary

The [.NET Core agent](installation-netcore.html#netcore-overview) for Windows is now available! The agent supports the same expansive Assess and Protect security policy as our .NET Framework agent.

### Node.js summary 



### Ruby summary 


### Python summary



