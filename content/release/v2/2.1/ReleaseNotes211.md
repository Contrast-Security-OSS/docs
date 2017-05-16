<!--
title: "Contrast 2.1.1 Release Notes, June 12, 2013"
description: "Contrast 2.1.1 Release Notes, June 12, 2013"
tags: "2.1.1 June Release Notes"
-->

## New Features:
* Created completely new application dashboards! Lots of UI improvements.
* Created blown out live architecture diagram that shows real-time activity.
* Added "sampling" mode, which boosts performance of monitored apps by eliminating redundant request analysis.
* Added numerous charts and graphs for various security analytics.
* Minor performance enhancements.

## Bug Fixes:
* Fixed Contrast Engine bug in some WebSphere and WebLogic configurations (and any other container that used system properties to configure log4j). Contrast's shaded log4j would try to use the container's log4j configuration and fail, which disabled Contrast but didn't affect the running app.  
