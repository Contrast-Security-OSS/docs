<!--
title: "Library Policy"
description: "Overview of library policy"
tags: "Admin library policy management"
-->


As Contrast assesses your applications, it can also flag libraries that don't meet your organization's criteria to ensure your applications are secure.

##How It Works 

If a library is restricted or used in an application that's below a specific version, it's marked as a policy violation by Contrast. You can also tell Contrast to automatically grade any library that violates the policy with the letter "F" to flag it in the Contrast interface. (Administrators are notified of violations in both the product and by email.)

## Set Up Policies

To set a library policy, go to the **User menu > Policy Management > Library Policy tab**. 

<a href="assets/images/Library-policy.png" rel="lightbox" title="Security Controls grid"><img class="thumbnail" src="assets/images/Library-policy.png"/></a>

Check the box to **Restrict libraries** and click on the multiselect field to choose which libraries you want to exclude from your portfolio. Check the box to **Enable version requirements** and click on the multiselect field to choose one or multiple libraries that must be within your given number of versions. Click the **Add another requirement** link to create version requirements for additional library groupings. 

### Fail libraries 

By checking the box to **Fail libraries in violation of policy**, you allow Contrast to automatically assign a failing score to any library that violates a set policy. If a library fails to comply with a set policy, the name, a warning icon and the library grade are highlighted in red in the **Libraries** page. Hover over the icon or go the the library's details page for more information about the violation. 

If you choose this option, Contrast alerts you when adjusting Score Settings in the **Organization Management** page. To learn more about scoring libraries, go to the [Score Settings](admin-orgsettings.html#score-settings) article. 