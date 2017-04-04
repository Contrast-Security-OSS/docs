<!--
title: "Contrast 2.4.3 Release Notes, November 11th, 2013"
description: "Contrast 2.4.3 Release Notes, November 11th, 2013"
-->

## New Features:
* Added more and better propagation rules.
* Upgraded ColdFusion 9 support status to "beta" (non-JRun deployments not yet supported).
* Added language to the portfolio page.

## Bug Fixes:
* Fixed incompatibility with apps using OpenJPA as their JPA provider.
* Upgraded httpclient dependency to avoid several keystore-related bugs.
* Correctly handle UTF8 characters in application analytics (which prevented coverage, library information from appearing).
* Fixed false positive for hash algorithms in IBM JRE.
* Fixed false positive for weak randomness in SecureRandom on some environments.
* Fixed bug where trending data would not appear for some apps. 
