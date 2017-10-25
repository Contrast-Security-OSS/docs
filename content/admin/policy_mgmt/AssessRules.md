<!--
title: "Assess Rules"
description: "Overview of Assess rules"
tags: "admin assess rules policy management assessment"
-->

Assess Rules allow you to detect specific types of vulnerabilities, such as SQL Injection or Cross site scripting, in an application. These rules are language specific, and can be turned on or off for each environment and each application. 

## How It Works

Contrast provides out-of-the-box rules that can be applied to your applications. Organization or Rules Admins can configure Assess Rules and also see the rules applied across your portfolio from the **Policy Management** page or an application's details page. Each rule is categorized with a Severity and Description to provide more information in the Asses Rules grid. 

## Manage Rules

### Policy Management 

View Assess Rules by going to the **User menu > Policy Management > Assess Rules tab**. In the Assess Rules grid, thermometer charts for each environment that show the number of applications that have each rule on and off. Hover over the charts to see a list of the application names for each number count. 

<a href="assets/images/Assess-rules-grid.png" rel="lightbox" title="View Assess Rules"><img class="thumbnail" src="assets/images/Assess-rules-grid.png"/></a>

* To update a rule configuration, select the checkbox in the grid row, and click the button to **Change Mode**. 
* In the dialog that appears, use the dropdown menus to choose the **Likelihood**, **Impact** and **Confidence Level** of the vulnerabilities for which this rule is intended. 
* Select the checkbox to **Override**, if you want to... 
* Enter the **Risk Description** and **Recommendation** in the designated fields. 
* In the **References** field, enter a link to an external issue, such as a bugtracker ticket, to provide more context for the rule requirements.  

<a href="assets/images/Assess-rules-dialog.png" rel="lightbox" title="Update Assess Rules Settings in the dialog"><img class="thumbnail" src="assets/images/Assess-rules-dialog.png"/></a>

#### Default policies

If you want to **set a default policy** for applications in your organization, click the link above the grid. Use the toggles to turn each environment on and off for each policy. 

<a href="assets/images/Assess-rules-defaults.png" rel="lightbox" title="Manage Assess Rules Defaults from the Policy Management page"><img class="thumbnail" src="assets/images/Assess-rules-defaults.png"/></a>

### Application page

View Assess Rules by going to the **Applications page grid > Policy tab > Assess button**. Use the toggles to turn each environment on and off for each policy. If you want to update a rule configuration, click the button to **Change Mode**, and follow the instructions given in the **Policy Management** section above.

<a href="assets/images/App-assess-rules.png" rel="lightbox" title="Manage Assess Rules from the application page "><img class="thumbnail" src="assets/images/App-assess-rules.png"/></a>

>**Note:** When more advanced rules are required, ask Contrast's Customer Support team for help with setup. 

