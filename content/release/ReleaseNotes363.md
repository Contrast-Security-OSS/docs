<!--
title: "Contrast 3.6.3 - April 2019"
description: "Contrast 3.6.3 April 2019"
tags: "3.6.3 April Release Notes"
-->


## Fixes

* System Admins couldn't [create users](admin-onboardteam.html#create-user) with CSV import when the Email Activation field was set to "false". CONTRAST-31212
* Super Admins couldn't save **Library Compliance** setting unless version requirements were enabled for "all libraries". CONTRAST-32237
* API documentation wasn't available for SaaS users. CONTRAST-32666
* Libraries displayed release dates from 1899. CONTRAST-31196
* Vulnerabilities links from an application's **Route Coverage** page did not direct users to the the correct list of vulnerabilities. CONTRAST-31719
* User profiles couldn't be edited successfully if their Organization Role remained the same. CONTRAST-32859
* The Compliance Policy filter wasn't working on the **Applications** grid. CONTRAST-30464
* Users with two-factor authentication enabled had issues with login redirects and loading application details. CONTRAST-32695, CONTRAST-30530


## Agent Updates

### Java summary

The Java team improved the accuracy of Assess XSS, SQL injection rules as well as the accuracy of Protect command injection and SQL injection rules. We enabled Runtime Exploit Prevention (REP) by default for Protect users on SaaS and EOP. (You can also update the settings for individual REP rules in your agent's [configuration](installation-javaconfig.html#java-yaml) file.) We also made the Java agent available on Maven Central. See the [new documentation](installation-javapackage.html) to learn more! 


### .NET summary 


### Node.js summary 

The Node team worked to provide support for two new web frameworks: Beta support for Koa, the predecessor to Express, as well as full support for Hapi 18, its latest version. The team also added instrumentation support for the Multer middleware module, which allows the agent to track and analyze untrusted data from multipart form bodies. A bug was resolved which caused Assess false positives to be reported for PostgreSQL database queries. The team added support for the application code configuration option, and removed deprecated configuration options. The agent supports the piping of log messages to */dev/null*. The team worked on removing Node 6 support which has entered EOL. Additionally, this release includes various enhancements that provide both breadth and accuracy in our Assess data-flow propagators.

### Ruby summary 

The Ruby team focused on improving performance of our Assess offering. We refactored the way our Monkey Patching works to ensure namespace collisions no longer occur with existing methods, and updated lookups of these renamed methods to take advantage of better caching techniques. We also worked to isolate the processes in which the agent runs its instrumentation, which reduces impact to non-security related operations; this has improved our compatibility with common processes such as Rake and Sidekiq.

### Python summary

The new version of the Python agent includes with a lot of product quality updates. In an effort to improve stability and agent quality, the team identified different aspects of the agent that needed improvements and updated them. This helped flush out any small errors that could have occurred later. We also fixed several small bugs, like accidentally patching twice for certain libraries and a scenario where the agent may retry to initialize itself.

