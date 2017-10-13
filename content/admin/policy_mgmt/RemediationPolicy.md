<!--
title: "Remediation Policy"
description: "Overview of remediation policy"
tags: "Admin remediation policy management"
-->


As Contrast assesses your applications, it can flag vulnerabilities that don't meet your organization's criteria to ensure that your applications are secure.  

## How It Works 

Administrators can define requirements for vulnerability remediation based on any vulnerability type or severity as well as any application(s) which should comply. Contrast then marks any vulnerabilities in violation of this policy with a warning in the interface or changes the vulnerability's status in the Vulnerability page grid when auto-remediated. (Administrators are also notified of violations or auto-remediations both in the product and by email.)

## Set Up Policies

Go to the **User menu > Policy Management > Remediation Policy tab** to create new policies and view existing ones in the grid.

<a href="assets/images/Remediation-policy.png" rel="lightbox" title="Remediation Policy grid"><img class="thumbnail" src="assets/images/Remediation-policy.png"/></a>

### Add policies 

To create a new policy, click the **Add Policy** button. In the **Add Remediation Policy** form, choose a **Name** for the policy, and click in the multiselect fields to choose the **Vulnerability Rules**, **Applications** and **Environments** to which Contrast should apply the policy. You can add multiple vulnerabilities by Severity or select individual names. You can also add multiple applications by Importance or select individual names. 

<a href="assets/images/Add-remediation-policy.png" rel="lightbox" title="Add Remediation Policy"><img class="thumbnail" src="assets/images/Add-remediation-policy.png"/></a>

#### Automatic actions

In the **Action** section, use the radio buttons and corresponding number control fields to either **flag vulnerabilities as a violation** or **automatically remediate** them within a given number of days. If multiple policies or actions apply to the same vulnerability, the following rules apply: 

* The most severe action (i.e. the action with the closest deadline) applies first. 
* If a violation deadline applies first, the vulnerability is flagged then auto-remediated when the later deadline applies. 
* If an auto-remediation deadline applies first, the vulnerability is closed and never flagged. 

If Contrast rediscovers a legitimate vulnerability that was automatically remediated, Contrast will report the vulnerability as usual. 

### Edit policies 

Click the name of an existing policy in the grid to see more details and update your selections in the **Edit Remediation Policy** form. Click the trashcan icon below the form or in the grid to permanently delete the policy. Once deleted, Contrast won't notify you of vulnerabilities that were within the scope of this policy. You can also use the toggles in the grid to enable or disable individual policies. 

## Policy Violations

If a vulnerability isn't remediated within the given number of days, Contrast adds a warning note to the Vulnerabilities thermometer in the dashboard and flags the vulnerabilities in the Vulnerabilities grid. Hover over the warning icon for each vulnerability in the grid or go to the vulnerability details page for more information about the violation.

