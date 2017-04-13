<!--
title: "Why Is My Library Not Recognized As The Most Recent Version?"
description: "Explanation regarding a library's version"
tags: "troubleshoot setup FAQ TeamServer library"
-->

This issue is a result of the way that our data sources store information about a library's version. Because some of the versions are formatted to include the year at the beginning, the sort method reads them as a more up-to-date version. The problem should phase itself out as the industry is moving to a more normalized version convention.
