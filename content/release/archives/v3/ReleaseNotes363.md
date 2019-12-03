<!--
title: "Contrast 3.6.3 - April 2019"
description: "Contrast 3.6.3 April 2019"
tags: "3.6.3 April Release Notes"
-->


## Fixes

* System Admins couldn't [create users](admin-onboardteam.html#create-user) by CSV import when the Email Activation field was set to "false".
* Super Admins couldn't save **Library Compliance** setting unless version requirements were enabled for "all libraries".
* API documentation wasn't available for SaaS users.
* Libraries displayed release dates from 1899.
* Links from an application's **Route Coverage** page didn't direct users to the the correct list of vulnerabilities.
* Editing a user profile without changing their Organization Role caused errors.
* The Compliance Policy filter wasn't working correctly on the **Applications** grid. 
* Users with two-factor authentication enabled had issues with login redirects and loading application details. 

## Improvements

The Custom Agent Profile option in the **Add Agent** wizard is gone! Use the `proxy` properties in your [Java](installation-javaconfig.html#java-yaml) or [.NET](installation-netconfig.html#net-yaml) agent's YAML file to set proxy credentials for communication with the Contrast UI. 

## Agent Updates

### Java summary

The Java team improved the accuracy of Assess XSS, SQL injection rules as well as the accuracy of Protect command injection and SQL injection rules. We enabled Runtime Exploit Prevention (REP) by default for Protect users on SaaS and EOP. (You can also update the settings for individual REP rules in your agent's [configuration](installation-javaconfig.html#java-yaml) file.) We also made the Java agent available on Maven Central. See the [new documentation](installation-javaguides.html) to learn more! 

### .NET summary 

The .NET team fixed the following bugs: 
* In one limited scenario, Contrast could reject some vulnerability reports from the agent. 
* Parameter pollution vulnerabilities reported by the agent wouldn't be rendered correctly by Contrast.
* The agent could cause ServerVariables to contain null values when accessed using different cased names.
* The agent would fail to identify WCF as an architecture component. 

### Node.js summary 

The Node team worked to provide support for two new web frameworks: Beta support for Koa, the predecessor to Express, as well as full support for Hapi 18 (the latest version). The team also added instrumentation support for the Multer middleware module, which allows the agent to track and analyze untrusted data from multipart form bodies. We resolved a bug that caused the agent to report Assess false positives for PostgreSQL database queries. We added support for the application code configuration option, and removed deprecated configuration options. The agent supports the piping of log messages to */dev/null*. We also worked on removing Node 6 support, which has entered EOL. To top it all off, this release includes various enhancements that provide both breadth and accuracy in our Assess data-flow propagators.

### Ruby summary 

The Ruby team focused on improving performance of our Assess product. We refactored the way our Monkey Patching works to ensure namespace collisions no longer occur with existing methods, and updated lookups of these renamed methods to take advantage of better caching techniques. We also worked to isolate the processes in which the agent runs its instrumentation, which reduces impact to non-security related operations; this has improved our compatibility with common processes such as Rake and Sidekiq.

### Python summary

The latest version of the Python agent includes a collection of product quality updates. To improve stability and agent quality, the team identified different aspects of the agent that needed improvements and updated them. This also helped us identify any small errors that could have occurred in the future. We also fixed several small bugs, like accidentally patching twice for certain libraries and a scenario in which the agent may retry to initialize itself.

