<!--
title: "Library Policy"
description: "Overview of library policy"
tags: "Admin library policy management"
-->


As Contrast assesses your applications, it can also flag libraries that may not meet criteria expected by your organization to ensure their applications are secure.

## Overview
Users can define policies for library version requirements. If a library used in an application is below a specific version, or is a restricted library, they is marked as a policy violation by Contrast. Also, any library that fails the policy can be graded automatically with the letter "F" to bring attention to it on the Contrast interface. Administrators are also notified of violations in both the product and via email.  

## Set up Policies

To set a library policy, go to the **User menu > Policy Management > Library Policy tab**. 

<a href="assets/images/Library-policy.png" rel="lightbox" title="Security Controls grid"><img class="thumbnail" src="assets/images/Library-policy.png"/></a>

Check the box to **Restrict libraries** and click on the multiselect field choose the libraries you want to include. Check the box to **Enable version requirements** and click on the multiselect field choose one or multiple libraries that must be within your given number of versions. Click the **Add another requirement** link to create version requirements for additional library groupings. 

By checking the box to **Fail libraries in violation of policy**, you allow Contrast to automatically assign a failing score (F) to any library that violates a set policy. If you choose this option, Contrast alerts you when adjusting Score Settings in the **Organization Management** page. To learn more about scoring and how it applies to libraries, go to the [Score Settings](admin-orgsettings.html#score-settings) article. 