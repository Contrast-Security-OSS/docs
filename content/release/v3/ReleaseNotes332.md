<!--
title: "Contrast 3.3.2 - September 2016"
description: "Contrast 3.3.2 September 2016"
tags: "3.3.2 September Release Notes"
-->

## Java Agent
* CONTRAST-1150: Add SSLSocketFactory.getDefault().createSocket() assess rule
* CONTRAST-2440: Add SMTP Header Injection assess rule
* CONTRAST-7548: Dynamically add tags to validator-scoped pattern usage
* CONTRAST-8024: Adjust Log4J log levels
* CONTRAST-8651: Tune CSRF assessment rule "state change" 
* CONTRAST-9049: Honor IAST exceptions for Play input
* CONTRAST-9341: Modernize ArchitecturePlugin
* CONTRAST-9581: Add regex-dos RASP rule
* CONTRAST-9605: Improve vulnerability blacklisting for insecure hash algorithms
* CONTRAST-9626: Increase vulnerability timeout window to reduce duplicates
* CONTRAST-9697: Implement RASP at perimeter blocking
* CONTRAST-9734: Update Command Injection input detection
* CONTRAST-9767: Support Multiple IPs (Subnet Mask) when blacklisting
* CONTRAST-9787: Add Xshareclasses:none flag on WebSphere installations
* CONTRAST-9799: Improve vulnerability blacklisting for insecure hash algorithms
* CONTRAST-9800: Add CSRF RASP rule
* CONTRAST-9810: Add padding oracle RASP rule
* CONTRAST-9825: Tune Command Injection RASP rule
* CONTRAST-9827: Tune Path traversal RASP rule
* CONTRAST-9875: Include Padding Oracle RASP rule block time period reporting in event
* CONTRAST-9884: RegEx DoS assessment rule hash should be more restrictive
* CONTRAST-9886: Add shutdown hook into agent
* CONTRAST-9961: No longer report Glassfish as Grizzly server on startup
* CONTRAST-10017: Investigate WSO2 ESB
* CONTRAST-10019: Create LibraryFinder for the WSO2 container + investigate the repackaged core J2EE libs
* CONTRAST-10026: Add vfsmemory URL compatibility to hierarchy scanning
* CONTRAST-10048: Tune propagation to reduce object creation
* CONTRAST-10054: Java library/CVE research and mapping for September release
* CONTRAST-10058: Warn about display/root name for non-named aps
* CONTRAST-10060: Split 'contrast.standalone.appname' and 'contrast.override.appname' functionality
* CONTRAST-10101: Support LDAP components with multiple URLs specified
* CONTRAST-10244: Include Java Agent build time in log header


## .Net Agent
* CONTRAST-10053: .Net Library/CVE Research and Mapping for September Release
* CONTRAST-10150: .NET Agent - LOC issues
* CONTRAST-10035: Contrast.NET Svc Should Log Request Errors From the TsRequest
* CONTRAST-9695: ContrastProfiler Should Send mdTypeDefToken Instead of ClassID in Library Message
* CONTRAST-10156: Change .NET framework min version to 4.5.1 
* CONTRAST-10192: remove duplicate traces within the same preflight
* CONTRAST-9801: Invalid Policy Causes Unhandled Exception In Module Policy Parsing
* CONTRAST-10139: NRE in SensorEventWithOriginal for Contrast.NET 3.3.1.1505

## NodeJS Agent
* CONTRAST-10051: NodeJS Library/CVE Research and Mapping for September Release
* CONTRAST-7228: implement preflight
* CONTRAST-9475: node agent: implement rule disabling from startup
* CONTRAST-9948: pull typecheck patches into policy
* CONTRAST-9661: no longer need to have hook and hookFunction
* CONTRAST-9666: move domain check to hooker instead of the pre hook
* CONTRAST-10100: node agent is sending an invalid value in the protocol field in the http request
* CONTRAST-9989: node fs.read: second argument needs to be a buffer
* CONTRAST-10044: node agent autocomplete missing warn is too verbose 
* CONTRAST-9878: Tainted string in Array.indexOf

## TeamServer
* CONTRAST-9541: Attacks Quick Views
* CONTRAST-9545: Events Page Advanced Filtering
* CONTRAST-9271: Implement "Suppress" Action for Attacks
* CONTRAST-9542: Events Quick Views
* CONTRAST-9740: Implement "Suppress" Action for Events
* CONTRAST-9741: Prompt User to "Suppress" Findings When Creating Exclusion (Events Only)
* CONTRAST-9737: "Show Suppressed" Option for Attacks/Events Page Filtering
* CONTRAST-9543: Attacks Page Advanced Filtering
* CONTRAST-8994: Implement Org Admin Notification For Remediation Policy Violation
* CONTRAST-9815: Show vector on Details page for SQL Injection
* CONTRAST-10031: HipChat Integration notifications don't match subscription
* CONTRAST-8980: Package a Configurable My.Conf File with TeamServer EOP
* CONTRAST-9782: Prevent protect licensing on servers without applications
* CONTRAST-9084: Add traceID to vulnerability notifications
* CONTRAST-9957: Update Trial Registration Email Text
* CONTRAST-9539: Events Page Rework - Unity Skin/Grid Update
* CONTRAST-9968: Change risk level for Regular Expression DoS rule
* CONTRAST-10055: Score message is confusing
* CONTRAST-9532: Attacks Page Rework - Unity Skin/Grid Update
* CONTRAST-9848: Styling Revisions for Universal Search
* CONTRAST-9840: Incorporate 'Test' with Slack Integration
* CONTRAST-9412: Separate 3rd Party Notifications Visually From Standard (Gradient)
* CONTRAST-9121: Fixing Links for Thermometer Charts around TS
* CONTRAST-9753: Incorporate Animation for Showing/Hiding Integration Configurations
* CONTRAST-10144: Create dedicated kahadb persistence adapters
* CONTRAST-9835: Revise Message When Applying RASP License
* CONTRAST-10196: Revisions to Animation for Showing/Hiding Integration Configurations
* CONTRAST-7867: Clean-Up for Vulnerability Details Tab
* CONTRAST-9776: Revise RASP Licensing Trigger/Indicator on Servers Page
* CONTRAST-9742: Application > Exclusions Tab: Prompt for Event Suppression
* CONTRAST-10128: Add a "Copy" link to vuln details sections
* CONTRAST-9922: 500 status in PUT response on org settings > notifications new vulns multiselect
* CONTRAST-10097: Insecure Direct Object Reference in TeamServer Server Overview URL
* CONTRAST-10216: Applications Query - EAC Issue With Merged Apps
* CONTRAST-9851: Custom footer missing in Birt Reports
* CONTRAST-10020: TeamServer unique constraint violation breaking Screener
* CONTRAST-8976: AD Integration Challenges
* CONTRAST-9990: Failure initialize a collection of rasp policies
* CONTRAST-9993: Vulnerability toolbar butons are not enabled
* CONTRAST-9996: Application search does not return display name
* CONTRAST-7899: Reduce margin/padding on sticky widget in Main/App Vulnerabilities page
* CONTRAST-10003: Search bar errors when using special characters
* CONTRAST-9947: Can't create/update groups with child apps
* CONTRAST-10013: Can't delete exclusions
* CONTRAST-9600: 'SHA' hash algorithm used at PasswordEncryptor.java
* CONTRAST-9616: Not Showing Accurate Count in Attack Line Charts
* CONTRAST-9765: "Add Integrations" Tooltip Update
* CONTRAST-9577: The X button on SuperAdmin Stats Page Does Not Close the Active Sessions Modal
* CONTRAST-9653: Details Pages Sub Units Styling Changed
* CONTRAST-10007: Invalid reset password requests should use 4xx status code instead of 500
* CONTRAST-10032: Only the first 100 HipChat rooms are appearing
* CONTRAST-7457: Success/Error messages and modal dialogs overlaps
* CONTRAST-10037: Custom Code Scores for Application Overview Calculating Incorrectly 
* CONTRAST-8127: Vulnerability Details rendering needs adjustment when there is a large data payload
* CONTRAST-10090: Merging Apps With Parent RASP Enabled Fails
* CONTRAST-9750: Custom Notification "Attack" alert.name not visible to contrast_edit user
* CONTRAST-9849: Retain Search Criteria When Clicking Into a Result
* CONTRAST-9763: Switches Are Turning On/Off By Themselves ;-)
* CONTRAST-9411: Can't Get "All" Rules Back in Add Security Control Dialog
* CONTRAST-8370: Tweaks To Empty State (No Onboarded Apps)
* CONTRAST-7444: TSV: Google Authenticator Tooltip Times Out Even When Engaged
* CONTRAST-10135: LazyInitialization exception loading notifications
* CONTRAST-10146: Can't create Virtual Patch when selecting all applications
* CONTRAST-10126: RASP results shows "null" on GET requests
* CONTRAST-9131: Revise Input Field for SuperAdmin Applications Page 
* CONTRAST-10195: Honor organization protection flag for RASP capabilities
* CONTRAST-10186: Webhook notification channel tooltip incorrectly displays the applications
* CONTRAST-10163: Protection License Data Change Issue
* CONTRAST-9797: Check Logic for Library Violation Triggers
* CONTRAST-10184: Can't manage organization via Superadmin on Eval
* CONTRAST-10207: CheckRaspEnabled annotation not working at class Level
* CONTRAST-10185: Policy Violation Quick View Inaccurate?
* CONTRAST-10033: Bug - Add Tags To Search Criteria
* CONTRAST-9960: RASP license expiration dates changed


## Database Migrations
* V3_3_2_000: clean trace duplicate hashes
* V3_3 2 001: add_auto_licensing_system_org_settings
* V3_3_2_002: add_user_hash_algorithm
* V3_3_2_003: create_notification_properties_table
* V3_3_2_004: fix_snapshot_table
* V3_3_2_005: add_suppressed_flag_to_rasp_model
* V3_3_2_006: change_redos_rule_properties
* V3_3_2_007: update_application_paidweight_field
* V3_3_2_008: alter_rasp_events_on_delete_constraint
* V3_3_2_009: add_notification_user_remediation_policy_model
* V3_3_2_010: add_csrf_rasp_rule
* V3_3_2_011: fix_app_archived_status_child_modules
* V3_3_2_012: update_rem_policy_columns


## GitHub
* Updates to Contrast Maven Plugin: https://github.com/Contrast-Security-OSS/contrast-maven-plugin

## OpenDocs
* HipChat Integration: https://docs.contrastsecurity.com/user_tsguideset.html#integrate

