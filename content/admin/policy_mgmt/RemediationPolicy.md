<!--
title: "Remediation Policy"
description: "Overview of remediation policy"
tags: "Admin remediation policy management"
-->

Create policies for vulnerabilities in your organization, and Contrast will clean up your view of security risks. As Contrast assesses your applications, it can either flag vulnerabilities that are in violation of the policy or automatically remediate them.   

## How It Works 

Administrators can define requirements for vulnerability remediation based on any vulnerability type, severity and application(s) which should comply. Contrast then marks any vulnerabilities that are in violation or auto-remediated based on this policy with a notification in the interface. (Administrators are also notified of violations in the product and by email.)

## Set Up Policies

Go to the **User menu > Policy Management > Remediation Policy tab** to create new policies and view existing ones in the grid.

<a href="assets/images/Remediation-policy.png" rel="lightbox" title="Remediation Policy grid"><img class="thumbnail" src="assets/images/Remediation-policy.png"/></a>

### Add policies 

To create a new policy, click the **Add Policy** button. In the **Add Remediation Policy** form, choose a **Name** for the policy, and click in the multiselect fields to choose the **Vulnerability Rules**, **Applications** and **Environments** to which Contrast should apply the policy. You can add multiple vulnerabilities by Severity or select individual names. You can also add multiple applications by Importance or select individual names. 

<a href="assets/images/Add-remediation-policy.png" rel="lightbox" title="Add Remediation Policy"><img class="thumbnail" src="assets/images/Add-remediation-policy.png"/></a>

#### Automatic actions

In the **Action** section, use the radio buttons and corresponding number control fields to either **flag vulnerabilities as a violation** or **automatically remediate** them after a given number of days. If multiple policies affect the same vulnerability, the following rules determine Contrast's course of action:

* The most severe action (i.e. the action with the closest deadline) applies first. 
* If a violation deadline applies first, the vulnerability is flagged and then auto-remediated when the later deadline applies. 
* If an auto-remediation deadline applies first, the vulnerability is closed and never flagged. 

> **Note:** If Contrast rediscovers a legitimate vulnerability that was auto-remediated, Contrast will [report the vulnerability](user-vulns.html#analyze) as usual. 

### Edit policies 

Click the name of an existing policy in the grid to see more details and update your selections in the **Edit Remediation Policy** form. Click the trashcan icon below the form or in the grid to permanently delete the policy. Once deleted, Contrast won't notify you of vulnerabilities that were within the scope of this policy. You can also use the toggles in the grid to enable or disable individual policies. 

## Policy Violations and Remediations 

If a vulnerability isn't remediated within the given number of days, Contrast adds a warning note to the Vulnerabilities thermometer in the dashboard and flags the vulnerabilities in the Vulnerabilities grid. Hover over the warning icon for each vulnerability in the grid, or go to the vulnerability details page for more information about the violation.

If a vulnerability has been auto-remediated, its status is updated to "Auto-Remediated" in the Vulnerabilities grids. Hover over the status text, or go the auto-generated comment in the vulnerability's **Discussion** tab for more information about the applicable policy. 

