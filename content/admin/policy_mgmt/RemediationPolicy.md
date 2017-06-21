<!--
title: "Remediation Policy"
description: "Overview of remediation policy"
tags: "Admin remediation policy management"
-->


As Contrast assesses your applications, it can also flag vulnerabilities that don't meet your organization's criteria to ensure that your applications are secure.  
 
Users can define policies for vulnerability remediation requirements based on any vulnerability type or severity, as well as apply it to any application(s). Contrast then marks any vulnerabilities in violation of this policy for clear distinction in the interface. (Administrators are also notified of violations both in the product and via email.)

Go to the **User menu > Policy Management > Remediation policy tab** to view the grid of existing policies. 

<a href="assets/images/Remediation-policy.png" rel="lightbox" title="Remediation Policy grid"><img class="thumbnail" src="assets/images/Remediation-policy.png"/></a>

Click the **Add Policy** button to go to the **Add Remediation Policy** form. Choose a name for the policy, and click in the multiselect fields to choose which vulnerability rules, applications and environments to which to apply the rule. Select the number of days by which a vulnerability within these parameters must be remediated in order to comply. 

Vulnerability Rules include an All option, severity levels as options, and individual rules as options. Applications include an All option, application importance levels as options, and individual applications as options. 

<a href="assets/images/Add-remediation-policy.png" rel="lightbox" title="Add Remediation Policy"><img class="thumbnail" src="assets/images/Add-remediation-policy.png"/></a>

To view or edit details of an existing policy, click the name in the grid, and update your selections in the **Edit Remediation Policy** form. Click the trashcan icon below the form or in the grid to permanently delete the policy. Once deleted, Contrast won't notify you of vulnerabilities that were within the jurisdiction of this policy. 