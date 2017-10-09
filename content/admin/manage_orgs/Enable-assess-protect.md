<!--
title: "Enable Assess & Protect"
description: "Enable Assess and Protect in Contrast"
tags: "Admin manage organization assess protect"
-->

## Enable Assess

Although you can see the types of vulnerabilities that Contrast discovers without an Assess license, you won't be able to retrieve any details or have other important functionality outlined below. To get started with Assess, enable the Assess functionality on the agents that have instrumented the application(s) you want to analyze. This is done in the Contrast interface on the **Servers** page. Find the server(s) you want to begin analyzing and turn the **Assess** toggle on. 

Next, you need to license the application as well. To license an application, find the application you want to license on the **Applications** page. You can either click the **TRIAL** link next to the application name or select **Apply License** from the row menu. You'll be prompted to confirm this action.

<a href="assets/images/Apply_License_Assess.png" rel="lightbox" title="Apply Assess License"><img class="thumbnail" src="assets/images/Apply_License_Assess.png"/></a>

When Assess is enabled, you must restart the application for the Contrast agent to properly instrument the application with Assess capabilities. Once that's complete, Contrast begins to receive vulnerability analytics and more. The application no longer has a TRIAL designation next to the name, which indicates that it has an Assess license assigned to it.

>**Note:** Organization administrators can skip this manual step of applying licenses for their users by enabling "Automatically apply licenses to new applications" from the **Organization Settings** page in the **Licensing** section. 

## Enable Protect

To get started with Protect, the first thing you need to do is enable the Protect functionality on the agents that have instrumented the application you want to protect. This is done in the Contrast interface on the **Servers** page.  

Find the server(s) you want to begin protecting and turn the **Protect** toggle on. Enabling protection requires a Protect license, so you'll be prompted to upgrade if it isn't already licensed. Alternatively, you can manually apply a license to a single server in the row menu or in bulk. To apply licenses to multiple servers, select the agents to upgrade, click the shield icon in the action bar and select **Apply Protect License**.

<a href="assets/images/Apply_License_Protect.png" rel="lightbox" title="Apply Protect License"><img class="thumbnail" src="assets/images/Apply_License_Protect.png"/></a>

When Protect is enabled, you must restart the application for the Contrast agent to properly instrument the application with Protect capabilities. Once that's complete, Contrast begins monitoring and blocking attacks. The server now has a shield icon next to the name, indicating it has a Protect license assigned to it.

>**Note:** Organization administrators can skip the step to manually apply licenses for their users by going to the **Organization Settings** page and the **Servers** section and turning Protect on by default. This can be enabled for specific server environments.


