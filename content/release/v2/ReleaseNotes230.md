<!--
title: "Contrast 2.3 Release Notes, August 29th, 2013"
description: "Contrast 2.3 Release Notes, August 29th, 2013"
-->

## New Features
* Added support for JBoss 4.2
* Added new rule for [XMLDecoder](http://blog.diniscruz.com/2013/08/using-xmldecoder-to-execute-server-side.html) vulnerabilities 
* Added new rule for unchecked autobinding in Spring MVC
* Added more REST APIs (for getting code coverage, rules and other stuff)
* Added per-server library information (for multiple agents running on the same app)
* Added per-server coverage information (for multiple agents running on the same app)
* Added some ability to customize PDF reports
* Added the ability to scan unpacked WAR files
* Added keyboard navigation and other accessibility options (508 compliance)
* Increased data flow capabilities
* Added standards mappings for vulnerabilities (OWASP, PCI and DISA)
* Made the Library Search and Console Viewer pages more intuitive
* Added warnings when a monitored app didn't declare a <display-name> in web.xml, which may affect it's ability to be tracked
* Made readability improvements to charts
* Several small usability changes

## Bug Fixes
* Fixed incorrect coverage statistics
* Fixed multiple bugs that prevented an app's Libraries/Coverage from showing up
* Fixed InvalidClassException with object deserialization
* Coverage page showed incorrect methods within a class as executed
* Fixed accidental usage of 1.6 API - 1.5 compatability restored
* Fixed accidentally registering an SSLSocketFactory which caused problems on WebSphere
* Removed some false positive cases for Cross-Site Scripting (XSS)
* Fixed a conflict with log4j that would prevent apps or servers from logging 
