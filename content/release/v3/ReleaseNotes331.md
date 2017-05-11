<!--
title: "Contrast 3.3.1 - August 2016"
description: "Contrast 3.3.1 August 2016"
tags: "3.3.1 August Release Notes"
-->

## Java Agent
* CONTRAST-1150: New Rule - Insecure SSL Socket Creation
* CONTRAST-2440: New Rule - SMTP Header Injection
* CONTRAST-7548: Dynamically add tags to validator-scoped pattern usage
* CONTRAST-8024: Update log levels to better reflect event severity
* CONTRAST-9435: New Rule - Server-Side Request Forgery
* CONTRAST-9460: New Rule - Regular Expression Denial of Service
* CONTRAST-9507: Improve Hard-Coded Password and Key Field Detection
* CONTRAST-9513: Improve Freemarker vulnerability detection and filtering
* CONTRAST-9611: Set daily log rotation to default
* CONTRAST-9734: Update Command Injection Rule (RASP) vector detection
* CONTRAST-9787: Add Java installer capability for WebSphere
* CONTRAST-9822: Tune Sql Injection RASP pattern severity 


## .Net Agent
* CONTRAST-9143: .NET Agent should stop sending activity if TeamServer returns 409
* CONTRAST-8356: Honor 412 status code to stop agent activity (.NET)
* CONTRAST-9625: Add do not propagate heuristic for interned strings
* CONTRAST-8851: Refactor named pipe messages
* CONTRAST-9695: ContrastProfiler Should Use Type Token Instead of ClassID in Library Message
* CONTRAST-9629: .NET Agent version request needs to handle *NotModified* response code
* CONTRAST-9073: .NET Agent Should Disable Response Rules If Toggled On TS
* CONTRAST-9633: .NET Agent needs to handle 404 response for version request when TS can't find .NET agent
* CONTRAST-9801: Invalid Policy Causes Unhandled Exception In Module Policy Parsing


## NodeJS Agent
* CONTRAST-9557: Add *--serverName* config option
* CONTRAST-9669: Limit number of times a rule can trigger for a single request
* CONTRAST-9556: *rejectUnauthorized* should be changed to *allowUnauthorized*
* CONTRAST-9603: unvalidated redirect not triggering with 2 args to response.redirect
* CONTRAST-9667: investigate stack blacklisting
* CONTRAST-9677: sources getter should not run in propagator scope
* CONTRAST-9485: *--nodataflow* and *--nopropagation* no longer work with newer rewrite changes
* CONTRAST-9289: Out of memory issues
* CONTRAST-9690: rewrite not skipping modules loaded in agent code
* CONTRAST-9826: add patches for *path.win32* and *path.posix*
* CONTRAST-9590: TypeCheck missing For Non-String Sources
* CONTRAST-9523: Rewrite errors
* CONTRAST-9692: Rewrite breaking modules using es6 features with *module.wrap*
* CONTRAST-9676: Appdynamics .orig causing typeerror in node agent
* CONTRAST-9691: blacklist feature not properly handling cases where a frame has no filename
* CONTRAST-9837: util.inherits: Cannot read property 'prototype' of undefined
* CONTRAST-9028: Objects Without Prototypes

## TeamServer
* CONTRAST-8988: Support for customized remediation policy definition
* CONTRAST-9814: Include searching by TraceID for Global Search
* CONTRAST-9570: Send Email/Notification when updating Library Policy
* CONTRAST-8396: Implement Org Admin Notification For Library Policy Violation
* CONTRAST-9054: Support for IAST Exceptions
* CONTRAST-9571: Improve attack snapshot data creation
* CONTRAST-7466: Enhance "Tag" Dialog to Allow Both Adding & Removing of Tags Only at Bulk Edit
* CONTRAST-9811: Add Padding Oracle Rule in TeamServer
* CONTRAST-9354: Support for WebHooks integration with Slack, Hipchat and Generic WebHook
* CONTRAST-9912: View users can send vuln via email within vuln
* CONTRAST-9673: Possible Racing Condition with *ClassLoading* on Startup
* CONTRAST-9682: Organization Settings: Group Page Failing to Load Group Grid Control
* CONTRAST-9831: Email Notification Are Not Getting sent for child applications
* CONTRAST-9902: Preflight is rejecting trace entries from different apps if the hash and rule are the same
* CONTRAST-9888: Can't tag element using IE
* CONTRAST-9601: 'SHA-1' hash algorithm used at *JavaEncryptor.java*
* CONTRAST-9632: RASP IP blacklist and whitelist features are not polling for automatic updates
* CONTRAST-9825: Cannot expand Command Injection finding on Threats > Events page
* CONTRAST-9530: Revisions to LDAP Workflow
* CONTRAST-9778: Vulnerable Libraries fail to show up in LibraryReports for BirtService

## Database Migrations
* V3_3_1_000: update_organization_session_timeouts
* V3_3_1_001: add_cmd_injection_rasp_settings
* V3_3_1_002: clean_trace_duplicatehash_table
* V3_3_1_003: update_hardcoded_rules
* V3_3_1_004: alter_nullable_fields_trace_table
* V3_3_1_005: sanitize_trace_duplicatehash_table
* V3_3_1_006: create_saml_config_table
* V3_3_1_007: add_webhooks
* V3_3_1_008: add_notif_trigger_channel_webhooks
* V3_3_1_009: update_saml_config_table
* V3_3_1_010: clean_orphan_app_licenses
* V3_3_1_011: add_missing_indexes
* V3_3_1_012: clean_protection_license_assignment
* V3_3_1_013: update_server_unknown_version
* V3_3_1_014: remove_attack_snapshots
* V3_3_1_015: refactor_exclusion_model
* V3_3_1_016: add_blocked_column_rasp_rules
* V3_3_1_017: add_padding_oracle_rule
* V3_3_1_018: cleanup_notif_trigger_channels
* V3_3_1_019: rename_smtp_header_injection


## GitHub
* Java SDK Enhancements: https://github.com/Contrast-Security-OSS/contrast-sdk-java
* Project SheepDog: https://github.com/Contrast-Security-OSS/sheepdog


## OpenDocs
* [Node Configuration Changes](installation-node.html#config)
* [.Net System Requirements](installation-net.html#net-install)
