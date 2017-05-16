<!--
title: "Contrast 3.0.4 Release Notes, August 22, 2014"
description: "Contrast 3.0.4 Release Notes, August 22, 2014"
tags: "3.0.4 August Release Notes"
-->

## Libraries
* Added detection for CVE-2014-3577 HttpComponents MiTM Vulnerability

## TeamServer
* When using active directory or LDAP the mail attribute of users will now be favored when sending email to that user if present
* Fixed memory leak that occurred in some cases when email alerting was configured
* Fixed Expression Language traces not rendering correctly

## Java Agent
* Fixed issue with logger initialization in JBoss when 1.6 agent was used 
