<!--
title: "Contrast 3.5.5 - August 2018"
description: "Contrast 3.5.5 August 2018"
tags: "3.5.5 August Release Notes"
-->

Want to find more details but spend less time searching? Use the new page for application route coverage and reorganized sections for all your keys. 

## Fixes

* Create a new organization with the email address of an existing Contrast account. 
* The last-reported date for vulnerabilities will display more accurately.
* The **Applications** grid displays correctly for Safari users. 
* Applications that don't have Assess enabled won't be counted in the overall score for your organization. 
* Contrast will test your Jira configuration with the latest credential set selected. 
* Advanced filters will work together to show you the right results in the **Servers** grid. 


## Improvements

* Keep track of security for your entire application in the new [Route Coverage](user-apps.html#route) tab. Contrast breaks down the data for discovered - including exercised and unexercised routes - as well as the specific routes with critical vulnerabilities. See the **Agent Updates** section for each agent's current list of supported frameworks.

* Set global vulnerability threshold conditions in the [Contrast Jenkins plugin](tools-ci.html#jenkins). Teams may then override the conditions for specific jobs.

* Only OrgAdmin-level users and above can see empty servers in the Contrast UI. (Servers that have applications will be visible as they are today and honor all the usual [access rules](admin-manageorgs.html#access).)

* We've moved the keys around a bit to make them easier to find. Go to the **user menu > Organization Settings > Profile page** to see your [Organization ID](admin-orgsettings.html#apikey), API key, and Agent Service key; or, go to the **Profile > Your Account tab** to find your [personal keys](user-account.html#profile). 


## Agent Updates

### Java summary 

The Java agent team improved the agent's handling of XML inputs, and reduced the amount of memory used by the agent's Assess analysis. We also implemented route coverage for Spring MVC 4. 

### .NET summary 

The .NET agent team has improved performance by enabling the CLR to inline methods not instrumented by Contrast. We improved error handling when certain reports to Contrast fail. We also implemented route coverage for MVC 4, MVC5, WebForms, ASMX, WCF and Web API frameworks.

### Node.js summary 

The Node agent team added Protect support for Hapi 17, and is finishing up support for Assess rules in that framework. We fixed an issue in reporting traces to the Contrast UI in Assess mode as well as an issue where propagation wasn't being followed through custom `toString` method calls.

### Ruby summary 

The Ruby agent team has been focused on performance issues, including adding a timeout in cases where IP resolution appeared to take longer than a few seconds on startup and optimizing the XXE rule source input generation. We fixed an issue where rake tasks had a namespace conflict. We also completed route coverage for Rails and Sinatra frameworks.

### Python summary

The Python agent team implemented auto-start of the service when the instrumented application is started. We improved the application name generation for display in the Contrast UI. We also enabled the route coverage feature.


