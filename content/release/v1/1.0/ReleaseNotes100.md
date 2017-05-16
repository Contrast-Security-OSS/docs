<!--
title: "Contrast 1.0.0-BETA-P10 Release Notes, August 21st, 2012"
description: "Contrast 1.0.0-BETA-P10 Release Notes, August 21st, 2012"
tags: "1.0.0 Beta P10 August Release Notes"
-->

## New Features:
* Updating your organization’s packages now updates your existing coverage scores, according to the new data.
* Changed HttpOnly rule to detect missing flag on “Set-Cookie2” headers, as well.
* Added keyboard navigation to “Event Details” screen.
* Removed HttpServletResponse.sendError() as a sink for XSS (testing shows the message parameter is ignored in modern containers). 
* User email addresses can now have the ‘-‘ character.
* Hiding MD5/other unsafe message digest findings when being used for serialization or Java’s internal SSL libraries.
 
## Fixes:
* Fixed issue in unsafe cryptographic rule that reported AES and RSA as unsafe.
* Fixed reporting HttpOnly for non-cookie headers.
* Fixed NullPointerException for Windows+Java7 users resulting from spaces in container directory path.
* Fixed two problems in code re-creation – static methods from showing as member methods, e.g., “Cipher.getInstance()” was showing up as “cipher.getInstance()” and incorrect constructor snippets, e.g., “void = file = new File(…)”.
* Fixed issue where “Forgot Password” was not properly unlocking the user.
* Fixed issue where clicking on events in the summary page didn’t take you to the event details.
* Fixed issue that caused incorrect rules to be delivered to engines after Contrast team made rule updates.
* Fixed bad hashing algorithm and other findings had incorrect titles. 
