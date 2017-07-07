<!--
title: "Compliance Policy"
description: "Overview of compliance policy for applications"
tags: "Admin compliance application policy management"
-->


As your organization grows, let Contrast flag applications that no longer meet your security criteria. 

## How it Works

Administrators can define policies for application compliance within their organization based on Policy Criteria, including [Assess Rules](admin-policymgmt.html#assess) and [vulnerability severity](user-vulns.html#manage-vuln), and specific applications. If any designated applications violate this policy, Contrast marks them in the interface so you can quickly find them and fix them. (Administrators are notified of violations both in the product and by email.) Contrast also provides default policies based on standard security rules that your company may need to follow. 

## Set Up Policies 

Go to the **User menu > Policy Management > Compliance Policy tab** to get started. Find current policies in the grid or enter a policy name in the search field above it.

<a href="assets/images/Compliance-policy-grid.png" rel="lightbox" title="Compliance Policy grid"><img class="thumbnail" src="assets/images/Compliance-policy-grid.png"/></a>

### Add policies

To add a new policy, click the **Add policy** button above the grid. 

<a href="assets/images/Compliance-policy.png" rel="lightbox" title="Compliance Policy"><img class="thumbnail" src="assets/images/Compliance-policy.png"/></a>

In the **Add Compliance Policy** form, enter a name for the policy and click in the multiselect fields to choose Policy Criteria and Applications. Select vulnerabilities by severity level(s), Security Standards and Assess Rules to include in the Policy Criteria. Select applications by level(s) of importance and individual name. Click the **Add** button to save the policy. 

### Edit policies

Click on a policy name in the Compliance Policy grid to edit your criteria. In the **Edit Compliance Policy** form, click in the multiselect fields to change your selections. 

> **Note:** The Name and Policy Criteria fields are locked for default policies. However, you can modify application selections by clicking in the field and then clicking the **Save** button.

To delete a policy, click the trashcan icon below the form or in the grid row. You can also enable or disable policies, including default policies, using the toggle in each grid row. 

### Filter applications by policy 

In the **Applications** page, click the **Advanced** link to filter application by Compliance Policy. (This filter is only available when one or more policies are enabled, and only displays enabled policies.) 

## Policy Violations 

If an applicable vulnerability isn't remediated, or applicable Security Standards and Assess Rules are being violated, Contrast flags the corresponding applications in the Applications page. Hover over the warning symbol in the Applications grid or go to the application's details page for a link to the violated policy. 





