<!--
title: "Contrast 3.1.9 Release Notes - August 17, 2015"
description: "Contrast 3.1.9 Release Notes - August 17, 2015"
-->

## Java Agent
* CONTRAST-5368: Memory improvements to reduce overall impact of heap utilization by the contrast.jar
* CONTRAST-5279: Performance improvement to lazy load the creation of stacktraces
* CONTRAST-5323: Improved logging to Launcher Agent (1.6)
* CONTRAST-5320: Performance improvement for responses written in GSON
* CONTRAST-3764: New agent parameter 'contrast.forceupdate' system property defined to forces the 1.6 agent to download a new agent from TeamServer
* CONTRAST-4911: Performance improvement to use bytecode weaving instead of reflection to read objects
* CONTRAST-5278: Performance improvement to obtain ServletContext from Filter/Servlet instead of session
* CONTRAST-5328: Upgrade JavaAgent's CodeSourceInfo.scanJar to utilize JarURLConnection when ZipInputStream fails

## .Net Agent
* CONTRAST-1820: Encrypt proxy settings (username/password) in ContrastService.exe.config
* CONTRAST-5154: Logging improvement to reduce noise tied to the AppPool version
* CONTRAST-5248: WebModule is requesting bad ServerPath for paths with spaces
* CONTRAST-5264: Eliminate access violation for XML finding generation
* CONTRAST-5322: XSS rule pre-checks scope before firing off
* CONTRAST-5432: Remove collapsing from .net agent

## TeamServer
* CONTRAST-5167: REST APIs for V1, V2 and V3 annotated and embedded in TeamServer
* CONTRAST-2953: Validat format of custom validator and sanitizers before adding them to a policy
* CONTRAST-4927: UI improvements to grouping of applications
* CONTRAST-5062: Recategorize settings for SuperAdmin (EOP Only)
* CONTRAST-5173: Relocate ehCache TEMP directory under $CONTRAST_HOME/data directory
* CONTRAST-5261: Display an application is archived and/or merged from the application page in SuperAdmin (EOP Only)
* CONTRAST-5306: Filter unwanted false positives for Oracle JDBC traces
* CONTRAST-4697: Add ability to deselect all modules in App Mapping Settings
* CONTRAST-4745: Expired license puts user in endless redirect
* CONTRAST-5095: Improvements to "Live Search" for Active Directory and LDAP authentication configuration
* CONTRAST-5171: Improve Documentation for SSL/HTTPS Configuration for TeamServer
* CONTRAST-5219: When Java/.NET caches are not available in $contrast.data.dir/cache, POPULATE-LIBRARY-CACHE always fails because the OffHeapCache beans are not initialized in LoadLibraryCache.
* CONTRAST-5298: User inherits default timezone of organization
* CONTRAST-5365: Application Importance not matching the setting
* CONTRAST-5419: XML and CSV downloads from UI do not contain trace IDs or hrefs
* CONTRAST-5415: TeamServer log files on Windows OS not properly rotating
* CONTRAST-4717 to 4729: Multiple UI improvements to Hard Copy Reports
* CONTRAST-5226: Old UI completely removed from TeamServer
* CONTRAST-5225: Convert 404 pages to the new Angular UI

## Crawler
* CONTRAST-5324: Force defining maximum space for Crawling storage
* CONTRAST-5318: Crawler configuration improved support of JSON objects
* CONTRAST-5227: Crawler status service will no longer run if crawler is not running or configured
* CONTRAST-5124: Support for bulk delete

