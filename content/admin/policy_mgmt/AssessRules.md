<!--
title: "Assess Rules"
description: "Overview of Assess rules"
tags: "admin assess rules policy management assessment"
-->

Assess Rules allow you to detect specific types of vulnerabilities, such as SQL Injection or Cross site scripting, in an application. These rules are language specific, and can be turned on or off for each environment and each application. 

## How It Works

Contrast provides out-of-the-box rules that can be applied to your applications. Organization or Rules Admins can configure Assess Rules, and also see the rules applied across your portfolio from the **Policy Management** page or an application's details page. Each rule is categorized with a Severity and Description to provide more information in the Asses Rules grid. 

## Manage Rules

### Policy Management 

View Assess Rules by going to the **User menu > Policy Management > Assess Rules tab**. In the Assess Rules grid, thermometer charts show the number of applications that have each rule applied for each environment. Hover over the charts to see a list of the application names for each number count. 

<a href="assets/images/Assess-rules-grid.png" rel="lightbox" title="View Assess Rules"><img class="thumbnail" src="assets/images/Assess-rules-grid.png"/></a>

#### Rule configuration 

Click on a rule for a grid view of the applications to which the rule can apply. Use the toggles to turn each rule on or off for each application per environment. <!-- To update multiple environments at once, use the checkboxes to select the appropriate applications, and click the button to **Change Mode**; in the dialog that appears, use the dropdown menus to set a new mode for each environment. --> Click the **Done** button to save your changes. 

<a href="assets/images/Assess-rule-details.png" rel="lightbox" title="View rule details"><img class="thumbnail" src="assets/images/Assess-rule-details.png"/></a>

To update rule settings, click the settings icon, and complete the following steps in the dialog that appears. 

* Use the dropdown menus to choose the **Likelihood**, **Impact** and **Confidence Level** of the vulnerabilities for which this rule is intended. 
	* Select the checkbox to **Override** to enable to option to update these fields after the configuration is saved. 

* In the **Risk Description** field, enter additional information regarding potential consequences of exposure to this vulnerability. You can also provide a **Recommendation**. 

* In the **References** field, enter a link to an external reference related to the specific vulnerability to provide more context for the rule.  

<a href="assets/images/Assess-rules-dialog.png" rel="lightbox" title="Update Assess Rules Settings in the dialog"><img class="thumbnail" src="assets/images/Assess-rules-dialog.png"/></a>

#### Default policy

Click the link above the grid to **configure the default policy**, if you want set default rules for new applications. Use the toggles to turn the rules on or off for each environment. **Contrast will automatically apply all rules enabled per environment to each new application.**  

<a href="assets/images/Assess-rules-defaults.png" rel="lightbox" title="Manage Assess Rules Defaults from the Policy Management page"><img class="thumbnail" src="assets/images/Assess-rules-defaults.png"/></a>

### Application page

View Assess Rules by going to the **Applications page grid > Policy tab > Assess button**. Use the toggles to turn each rules on or off per environment. To update multiple environments at once, use the checkboxes to select the appropriate rules, and click the button to **Change Mode**; <!-- in the dialog that appears, use the dropdown menus to set a new mode for each environment. -->

<a href="assets/images/App-assess-rules.png" rel="lightbox" title="Manage Assess Rules from the application page "><img class="thumbnail" src="assets/images/App-assess-rules.png"/></a>

>**Note:** When more advanced rules are required, ask Contrast's Customer Support team for help with setup. 

