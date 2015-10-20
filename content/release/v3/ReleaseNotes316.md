<!--
title: "Contrast 3.1.6 Release Notes - May 7, 2015"
description: "Contrast 3.1.6 Release Notes - May 7, 2015"
-->

## Java Agent
* Tuned Clickjacking, Path Traversal, Command Injection and Encryption Rules
* Fixed bug in Reflection Injection Rule
* Fixed Oracle/Header Injection False Positives
* Added ability to provide rule configuration to customize rule behavior through custom rules.xml, system properties or a properties file.
* Added configuration for Session Timeout rule to set the length of the session timeout
* Added ability to trace JMS sources
* New Rules: Hardcoded Password, Hardcoded Encryption Keys
* Minor performance Improvements

### Contrast 3.1.6 Custom Rule Updates
With the release of 3.1.6, we've updated the contract on the ISecurityRule method.
Two new methods have been added and will need to be incorporated into custom rules BEFORE updating to 3.1.6.
 
If your existing title generation methods are simple (ie do not call other methods or rely on Util / DAO calls), you can simply invoke them from within these new methods. If, however, your title generation process is more complex, you will need to reimplement it with methods that do not rely upon the database. 
 
```` 
// Generating titles using the existing methods
public class YourSecurityRule extends SecurityRule {
      @Override
      public String getTitle(Trace t) {
            return getTitle(t.getUuid());
      }
 
      @Override
      public String getSubtitle(Trace t) {
           return getSubtitle(t.getUuid());
      }
      ...
}
// Generating titles with stand alone methods
public class YourSecurityRule extends SecurityRule {
      @Override
      public String getTitle(Trace t) {
            return "Your custom title code";
      }
 
      @Override
      public String getSubtitle(Trace t) {
           return "Your custom subtitle code";
      }
      ...
}
````

### Contrast 3.1.6 Trace Improvement Notes
Contrast introduces a new approach to relating traces in TeamServer as of version 3.1.6. As traces are reported from the agent to the TeamServer, each trace will be evaluated for similarity in not only their stack traces but also their type, impact, points of origin and points of completion. The result of this change will reduce the overall number of traces presented and reported within TeamServer. Enterprise customers will also be affected as part of the upgrade process from a previous version of TeamServer to the 3.1.6 version of the product. Enterprise customers should expect a one-time startup delay as part of the upgrade process. Once the upgrade is complete, the startup time should return to normal.
 
#### Question: What will change in TeamServer?
As noted above, TeamServer will present fewer traces from the Vulnerabilities page. Each trace contains a title field which will be used as part of a composite unique key, along with the type of vulnerability and the id of the application to which it belongs. This combination allows for the guarantee each trace will be substantially different as reported within one application while not preventing traces from being reported for other applications. In the example below, traces such as Insecure Hash Algorithms, come from a single source of code, but differ in the stack frame. In prior versions of Contrast, TeamServer would report several traces for the same source of code. Following this release, trace records should decrease as TeamServer will only present one vulnerability. 

!(image)

#### Question: Will there be any data loss as part of this process?
There will be a reduction of traces as part of this process depending on the number of identical vulnerabilities sharing the same trace title. The key data about the vulnerability will remain, but the meta-data (time, count, URL) will be presented on the Notes page within a vulnerability. Traces with the same title, but different hash values (ie: slightly different stack frames) will be collapsed into a single trace. 

!(image)

#### Question: What will the impact be for an Enterprise customer?
Customers with previous version of TeamServer will experience a minor delay on the first startup inline with the upgrade to 3.1.6. Our normal database migration scripts run with the first startup of any release of Contrast. The delay in startup will ultimately depend on the number of traces that exist in the system. Below are some internal benchmarks run by our engineering organization for large trace counts. The vast majority of customers will have fewer than 10,000 traces. Please note that the startup after the migration has completed returns to under 1 minute or close to 1 minute. 

| Trace Count | One-Time MigrationStartup Time | Post MigrationStartup Time |
|-------------|--------------------------------|----------------------------|
| 10,000      | 10 minutes                     | Under 1 minute             |
| 20,000      | 30 minutes                     | Under 1 minute             |
| 40,000      | 60 minutes                     | Under 1 minute             |
| 80,000      | 120 minutes                    | Under 1 minute             |

#### Question: When should the upgrade run?
We recommend Enterprise customers run this migration during off hours. Please note that while the migration is occurring, users will not be able to login to TeamServer, nor will TeamServer be able to receive traces.

## .Net Agent
* Improved thread usage by the agent's background Windows service. ContrastService.exe now uses about 12 fewer threads when idle and should use fewer threads when the system is heavily used (i.e. high CPU usage.)
* Fixed a bug where the agent would fail to report on vulnerable authorization rules in the location section of analyzed web.config files.
* The agent will now remove sensors from the server when the agent's API key is invalid or when TeamServer communication fails for more than four hours. Sensors are re-enabled when communication is restored.
* The agent will no longer report clickjacking findings against responses with non-HTML content types.
* Fixed a bug where the agent could report http only missing or secure flag missing vulnerabilities when both flags were present.
* The agent will no longer show the IIS Express tab in ContrastTray if the user's IIS Express configuration file is not present.
* The agent will no longer report parameter pollution findings for form actions with a relative path.
* ContrastTray now has an "Action" tab that provides immediate guidance to help resolve issues when the agent is not healthy (e.g. cannot connect to Team Server, deployed to an unsupported platform, ...)


## TeamServer
* Significant improvements to how trace titles are calculated and stored resulting in a drastic reduction of near-duplicate traces and increased performance when browsing or accessing traces via the REST API.
* Note that to accomplish these improvements, changes were made to the contrast for ISecurityRule. Those customers implementing custom rules will need to update their rules as shown here.
* Fixed bug where alert emails were not sending correctly if Contrast was configured to authenticate with AD
* Fixed bug with creating new organization users in New UI
* Fixed bug where certain characters displaying as hex-values in New UI
* Fixed bug with XML export where events were out of order
* Traces can now be actioned individually while viewing a single vulnerability
* Minor UI Fixes in New UI

## Contrast Installer
* Discontinued 32-Bit Windows Support. Any existing 32-bit windows installations will need to be upgraded to a 64-bit installation.
* Fixed bug in Windows for controlling service during ugprades
* Windows Installer Log Tailer will now tail from the end rather than the beggining of a logfile
* Fixed service registration (auto-start) on Linux Installations
* Added License Verification
* Fixed bug where Windows installation on some versions of Windows were not acquiring the right permissions to perform updates
* LDAP or Active Directory configuration is now a post-configuration step in the Superadmin Interface.
* Installer will favor console-mode unless overridden with -gui

## Contrast Hub (3.1.1)
* Release Notes will now be available on Hub
* Add CVE-2015-0250 to those mapped in the Java cache
* Removed support for 32-Bit Windows Downloads
* Minor UI Fixes 
