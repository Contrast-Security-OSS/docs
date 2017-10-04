<!--
title: "Enable Assess & Protect"
description: "Enable Assess and Protect in Contrast"
tags: "Admin manage organization assess protect"
-->

## Enable Assess

To get started with Assess, the first thing you need to do is enable the Assess functionality on the agents that have instrumented the application you want to analyze. This is done within the Contrast UI on the **Servers** page. Find the server(s) you want to begin analyzing and turn the **Assess** toggle ON. 

Though you can get a glimpse into the types of vulnerabilities Contrast discovers without an Assessment license, you won't be able to retrieve any details and miss out on other important functionality outlined below. So, you need to make sure you license the application as well. To license an application, find the application you want to license on the **Applications** page. You can either click the **TRIAL** link next to the application name or select **Apply License** from the row menu. You'll be prompted to confirm this action.

<a href="assets/images/Apply_License_Assess.png" rel="lightbox" title="Apply Assessment License"><img class="thumbnail" src="assets/images/Apply_License_Assess.png"/></a>

When Assess is enabled, you will need to restart the application in order for the Contrast agent to properly instrument the application with Assess capabilities. Once that is completed, Contrast will begin getting vulnerability analytics and more. The application will no longer have a TRIAL designation next to the name, indicating it has an Assessment license assigned to it.

>**Note:** Organization administrators can skip this manual step of applying licenses for their users by enabling "Automatically apply licenses to new applications" from the **Organization Settings** page in the **Licensing** section. 

## Enable Protect

To get started with Protect, the first thing you need to do is enable the Protect functionality on the agents that have instrumented the application you want to protect. This is done within the Contrast UI on the **Servers** page.  

Find the server(s) you want to begin protecting and turn the **Protect** toggle ON. Enabling protection requires a Protect license, so you'll be prompted to upgrade if it isn't already licensed. Alternatively, you can manually apply a license to a single server via the row menu or in bulk by selecting which agents to upgrade, then clicking the shield icon in the action bar and selecting **Apply Protection License**. 

<a href="assets/images/Apply_License_Protect.png" rel="lightbox" title="Apply Protection License"><img class="thumbnail" src="assets/images/Apply_License_Protect.png"/></a>

When Protect is enabled, you will need to restart the application in order for the Contrast agent to properly instrument the application with Protect capabilities. Once that is completed, Contrast will begin monitoring and blocking attacks. The server will now have a shield icon appear next to the name, indicating it has a Protection license assigned to it.

>**Note:** Organization administrators can skip this manual step of applying licenses for their users by turning Protection ON by default for new servers by going to the **Organization Settings** page in the **Servers** section. This can be enabled for specific server environments.


