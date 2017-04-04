<!--
title: "Contrast 2.4.9 Release Notes, December 17th, 2013"
description: "Contrast 2.4.9 Release Notes, December 17th, 2013"
-->

## New Features:
* Refactored instrumented sensors to produce a lot less objects, and therefore reduce garbage collector thrash.
* Added several short-circuiting steps to sensors, which reduced runtime performance impact dramatically.
* Cached rule downloads to make startup much faster.
* Moved from memory-based cache to file-based cache to reduce memory footprint of Contrast to practically zero.
* Added support for WebLogic 9 and 10, JRockit 5+.
* Added support for embedded Jetty apps.
* Refactored several TeamServer asynchronous components to help scalability in high volume environments.
* Reduced traffic, log output to avoid any unnecessary processing of archived app reports.
* Added ability to track unnamed apps. Apps without <display-name> that run at the root will now collect results under the app called "ROOT".
* Refactored rule editor to gain massive performance benefits.

## Bug Fixes:
* Fixed a ConcurrentModification bug in the Contrast Engine.
* Fixed several rule editor bugs.
* Fixed LDAP URL parsing bug which prevented app updates from processing. 
