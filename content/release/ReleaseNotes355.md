<!--
title: "Contrast 3.5.5 - August 2018"
description: "Contrast 3.5.5 August 2018"
tags: "3.5.5 August Release Notes"
-->

Dig deeper into your applications with route coverage and...! 

## Fixes

* Create a new organization with the email address of an existing Contrast account. CONTRAST-25937
* The last-reported date for vulnerabilities will display more accurately. CONTRAST-21720
* The **Applications** grid displays correctly for Safari users. CONTRAST-22613
* Applications that don't have Assess enabled won't be counted in the overall score for your organization. CONTRAST-25806
* Contrast will test your Jira configuration with the latest credential set selected. CONTRAST-25760
* Advanced filters will work together to show you the right results in the **Servers** grid. CONTRAST-25953


## Improvements

* Keep track of your entire application, piece by piece, in the [Route Coverage](user-apps.html#route) tab. Contrast breaks down the data for exercised versus unexercised routes, where Contrast has detected traffic versus where we haven’t, as well as the specific routes that house vulnerabilities. Route coverage is now available for the major frameworks, including Java Spring MVC 4.x, .NET MVC 4 and 5, Node Express, Ruby Rails and Python Django.

* Set global vulnerability threshold conditions in the [Contrast Jenkins plugin](tools-ci.html#jenkins). Teams may then override the conditions for specific jobs.

* Only OrgAdmin-level users and above can see empty servers in the Contrast UI. (Servers that have applications will be visible as they are today and honor all the usual [access rules](admin-manageorgs.html#access).)

* We've moved the keys around a bit to make them easier to find. Go to the **user menu > Organization Settings > Profile page** to see your [Organization ID](admin-orgsettings.html#apikey), API key, and Agent Service key; or, go to the **Profile > Your Account tab** to find your [personal keys](user-account.html#profile). 


## Agent Updates

### Java summary 


### .NET summary 


### Node.js summary 


### Ruby summary 


### Python summary



