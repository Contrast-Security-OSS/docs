<!--
title: "Contrast 2.1.4 Release Notes, June 20, 2013"
description: "Contrast 2.1.4 Release Notes, June 20, 2013"
-->

## Bug Fixes:
* Fixed bug in backend processing system, which made really slow startup times for some engines. Added timeouts to both ends of the channel to prevent lengthy startups, and fixed the queueing problem which caused the issue to begin with. 
