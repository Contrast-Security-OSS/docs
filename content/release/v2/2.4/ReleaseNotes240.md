<!--
title: "Contrast 2.4.0 Release Notes, October 20th, 2013"
description: "Contrast 2.4.0 Release Notes, October 20th, 2013"
tags: "2.4.0 October Release Notes"
-->

## New Features
* Alpha support for ColdFusion applications (CF9 only - feedback welcome!)
* Users can specify coverage rules at the application level
* Apps can have 'codes', short names used for internal identification
* Moved to MySQL-only for Enterprise On Premise (EOP) installations
* Windows EOP installer will exit with a nice error message if JAVA_HOME isn't found
* Reduced log output considerably
* Added a preview mode when making changes to rule metadata

## Bug Fixes
* Fixed bug with library class counts not appearing correctly
* Fixed ConcurrentModificationException in Java engines in rare cases
* Fixed bug where applications appeared "Offline" when they weren't
* Fixed bug preventing GlassFish 3.x apps from registering
* Fixed IBM WebSphere SSL keystore error
* Fixed sampling options not being set correctly when downloading an engine
* Fixed incorrect reporting server showing up for libraries 
