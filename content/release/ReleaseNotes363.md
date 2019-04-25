<!--
title: "Contrast 3.6.3 - April 2019"
description: "Contrast 3.6.3 April 2019"
tags: "3.6.3 April Release Notes"
-->


## Fixes

* 


## Improvements

* We enhanced Runtime Exploit Prevention (REP), the multi-technique detection and response engine of Contrast Protect, for Java Protect users. The collection of REP rules is enabled by default for SaaS and EOP. You can also update the settings in your agent's configuration file to adjust which rules are enabled.

* Maven/Gradle - See the **Java summary** for more details. 


## Agent Updates

### Java summary

Java 11

### .NET summary 


### Node.js summary 

The Node team worked to provide support for two new web frameworks: Beta support for Koa, the predecessor to Express, as well as full support for Hapi 18, its latest version. The team also added instrumentation support for the Multer middleware module, which allows the agent to track and analyze untrusted data from multipart form bodies. A bug was resolved which caused Assess false positives to be reported for PostgreSQL database queries. The team added support for the application code configuration option, and removed deprecated configuration options. The agent supports the piping of log messages to */dev/null*. The team worked on removing Node 6 support which has entered EOL. Additionally, this release includes various enhancements that provide both breadth and accuracy in our Assess data-flow propagators.

### Ruby summary 

The Ruby team focused on improving performance of our Assess offering. We refactored the way our Monkey Patching works to ensure namespace collisions no longer occur with existing methods, and updated lookups of these renamed methods to take advantage of better caching techniques. We also worked to isolate the processes in which the agent runs its instrumentation, which reduces impact to non-security related operations; this has improved our compatibility with common processes such as Rake and Sidekiq.

### Python summary


