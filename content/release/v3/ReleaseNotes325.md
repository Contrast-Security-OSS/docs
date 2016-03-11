<!--
title: "Contrast 3.2.5 - February 2016"
description: "Contrast 3.2.5 February 2016"
-->

## Feature Highlight
Contrast now offers an additional step of authentication through popular one-time password mobile apps or your email address.  
If administrators enable this feature, users who log in will need their password and a short, temporary code to prove their authenticity.  

## Java Agent
* CONTRAST-7277: Glassfish protection of path traversal vulnerability
* CONTRAST-7264: Kryo and XStream to IAST and RASP untrusted-deserialization rules
* CONTRAST-4646: Enhanced Support for AdobeCQ
* CONTRAST-6968: Update agent propagator notation
* CONTRAST-5508: Enhanced checking of *web.xml* by Springboot applications
* CONTRAST-7309: Additional agent property to disable dynamic sources
* CONTRAST-7297: WebLogic 9.2 version string is in unexpected format
* CONTRAST-7379: Prototype MVEL in place of JEXL
* CONTRAST-7371: Add Kryo/XStream whitelisting fix detection
* CONTRAST-7041: Tune XSS/SQLi detectors to avoid FP on XML input
* CONTRAST-7506: Add support for WebSphere's forked BodyContentImpl
* CONTRAST-7310: IBM needs an ancestry hint for org.w3c.dom.Node propagation
* CONTRAST-7143: Hierarchy scanning problem in Karaf (uses Felix)
* CONTRAST-7425: Hibernate false positives
* CONTRAST-7255: Exceptions in Karaf app
* CONTRAST-7512: Dynamic Sources are trying to instrument interfaces
* CONTRAST-7493: Fix bug with Play URLs not being reported

## .NET Agent
* CONTRAST-6992: Provider Rules Can Create Source and Control Events
* CONTRAST-5988: Make .NET Instrumentation the Default Analysis Engine
* CONTRAST-7153: Improve .NET Instrumentation Performance by Intelligently Setting maxstack
* CONTRAST-5991: Improve .NET Instrumentation Performance by not disabling CLR Optimizations
* CONTRAST-7315: Contrast.NET Svc Should Use WIX_ACCOUNT_LOCALSYSTEM
* CONTRAST-7154: Improve .NET Instrumentation Performance by combining named pipe messages sent to service
* CONTRAST-7385: .NET Instrumentation-based analysis should not create sources when the method returns string.Empty
* CONTRAST-5101: .NET Agent should warn user if an application has *legacyCasModel=true* in its *web.config*
* CONTRAST-7361: Add rule id to finding hashes from .NET agent
* CONTRAST-7465: Clean up *DotnetAgentService.exe.config*
* CONTRAST-6556: Add Guid-parsing validators
* CONTRAST-6001: Improve performance of initial .NET Instrumentation by using map of code transforms
* CONTRAST-7113: Move .NET Injection Helpers Into Contrast.NET Directory
* CONTRAST-7475: .NET Agent should send agent config and server data to servers endpoint
* CONTRAST-7161: Improve .NET Instrumentation Performance by refactoring handling of special cases
* CONTRAST-7386: AssemblyResolve event can cause errors on missed assemblies with full names that do not contain a comma
* CONTRAST-7387: Service start up should check that plugins directory exists before trying to clean up that directory
* CONTRAST-7354: Force Contrast.NET Installer To Wait For ServiceStop
* CONTRAST-7368: .NET Agent Service should not lock web app's files (e.g. .js files) during file analysis
* CONTRAST-4039: .NET agent fails to get metadata for DNN's DLLs in *bin/Providers* directory
* CONTRAST-4287: .NET Profiler fails to identify base class when base class is in another assembly
* CONTRAST-7114: Restrict Write Access To ProgramData Directory to Users
* CONTRAST-3548: Contrast.NET Uninstaller Should Attempt CloseApplication Before Terminate On Tray
* CONTRAST-7477: NullReferenceException in .NET ComponentDetection for MVC Controller
* CONTRAST-7509: NullReferenceException during configuration parsing prevents sensors from initializing
* CONTRAST-5839: XSS should not be reported for request headers except referrer
* CONTRAST-7511: SerialiationException in ResponseModule.GetInitialConfiguration on IApplicationHost.GetSiteName()

## NodeJS Agent
* CONTRAST-7226: Tag removal support
* CONTRAST-7498: Add ?-encoded matching for tags
* CONTRAST-7500: Add node.js version requirements (via semver) to policy
* CONTRAST-7471: Node Rule: unvalidated-redirect
* CONTRAST-7472: Node Rule: path-traversal
* CONTRAST-7546: Unexpected Null Getter in HTTP Sources
* CONTRAST-7545: Object / Literal Type Confusion
* CONTRAST-7501: Node recommendations for path-traversal, header-injection, unvalidated-redirect

## TeamServer
* CONTRAST-6710: Two-Step Verification for TeamServer
* CONTRAST-7203: Revise 'Sticky' Table Header Look-n-Feel
* CONTRAST-7133: AngularJS Update
* CONTRAST-7012: Sort entries in Modules filter
* CONTRAST-6473: Add Show/Hide Mechanism for Libraries Pg Stats
* CONTRAST-6736: Update Success/Failure messages
* CONTRAST-7194: Infinite Scrolling for Organizations Pg (SuperAdmin)
* CONTRAST-7197: Infinite Scrolling for Users Pg (SuperAdmin)
* CONTRAST-7322: Alphabetically sort tags filters
* CONTRAST-7428: Refactor TraceProcessorService flow
* CONTRAST-7313: 'Sticky' Table Header Refinements
* CONTRAST-7256: Unable to send mail through SMTP Relay when server requires no authentication
* CONTRAST-7107: TraceDuplicateHandler is using cassandra always
* CONTRAST-6272: log4j2 character encoding problem
* CONTRAST-7249: Error on organization users page when a user is in two predefined EAC groups
* CONTRAST-7304: Race Condition when loading vulnerabilities
* CONTRAST-7358: Count For Library Tags is Incorrect
* CONTRAST-7124: Broken subtitle calculation on rules that use *languageFromAppId()*
* CONTRAST-6639: Address Customer Issues with Browser Caches When Taking Updates of TeamServer
* CONTRAST-7449: LDAP Lookups Failing
* CONTRAST-7373: Admin/User Page Grant Superadmin not working as expected
* CONTRAST-7502: Role violation: Can apply application license without Admin level Org role
* CONTRAST-7469: LDAP/AD environment shouldn't execute ChangePasswordFilter and all references to password should be hidden
* CONTRAST-7439: Investigate URL Purge Exception in TeamServer
* CONTRAST-7489: TeamServer Security Control UI (level one rule) doesn't tell user about errors
* CONTRAST-7510: TeamServer couldn't load my preferences
* CONTRAST-7526: Grid Dropdown Not Showing - Org Settings -> User
* CONTRAST-7450: LDAP setup issues

## OpenDocs
* Debugging User Directories: https://docs.contrastsecurity.com/admin_tsfaq.html#debug
* Upgrading EOP TeamServer: https://docs.contrastsecurity.com/admin_tsinstall.html#upgrade
* Rotating Keys: https://docs.contrastsecurity.com/admin_crawlfaq.html#keys

## Database Migrations
* V3_2_5_000: Addition of Two Step Verification settings tables
* V3_2_5_001: Addition of Two Step Verification user setting fields
* V3_2_5_002: Addition of Two Step Verification configuration settings
* V3_2_5_003: Duplicate Index of a Path Traversal finding
* V3_2_5_004: Addition of Two Step Verification on-boarding tables
* V3_2_5_005: New tables for organization notification settings
* V3_2_5_006: New tables for user notification settings
* V3_2_5_007: New procedure to cleanup duplicate traces
* V3_2_5_008: Alter table to provide a unique key for blacklist operations
* V3_2_5_009: Schema update to library tags
* V3_2_5_010: Schema update to attack alerts table
* V3_2_5_011: Schema update to address issue with urlentry table
