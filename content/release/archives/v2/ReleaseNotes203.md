<!--
title: "Contrast 2.0.3 Release Notes, March 18th, 2013"
description: "Contrast 2.0.3 Release Notes, March 18th, 2013"
tags: "2.0.3 March Release Notes"
-->

## New Features:
* Added new class of "provider" rules. These are dynamic rules that can find vulnerabilities not previously found before, like:
 * Verb tampering weakness
 * JSPs found outside WEB-INF
 * Missing autocomplete
 * Parameter pollution
 * Insecure authentication protocols (Basic, Digest, etc.)
 * Session rewriting
 * Unsafe session timeouts
 * Missing clickjacking controls
 * Missing cache controls.
 * Some of these add a minor performance penalty and are thus "opt-in". Enterprise users can optionally enable these rules.

## Bug Fixes:
* Fixed bug with missing Architecture/Technology data in dashboard.
* Fixed bugs related to edge cases in sign up, forgot password, and other user management features.
* Refactored internal service calls.
* Simplified permissions.
* Enhanced On-Premise security options.
* Moved all log levels down for On-Premise edition.
* Fixed several bugs related to edge in rule customization. 
