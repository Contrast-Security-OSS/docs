<!--
title: "Configure the Password Policy of the Contrast Interface"
description: "Guidelines for configuring the password policy for the Contrast interface"
tags: "Admin system settings security password policy administration"
-->

Regulate passwords within your organization by creating a password policy. You must be a SuperAdmin to configure the default policy in **System Settings**, or an Organization Administrator (OrgAdmin() to manage the policy in **Organization Settings**.  

## Manage your Policy

Go to the **Security** tab in **Organization** or **System Settings**. In the **Password Policy** form, set minimum and maximum requirements for all passwords. 

<a href="assets/images/Security-password-policy.png" rel="lightbox" title="Password Policy form"><img class="thumbnail" src="assets/images/Security-password-policy.png"/></a>

* Select a minimum **Password Strength** of **Weak**, **Medium**, **Strong**, **Complex** or **Custom** in the dropdown menu. 
  * If you choose **Custom** strength, enter the number of **Minimum Upper Case Letters**, **Lower Case Letters**, **Numbers** and **Symbols** in the dialog that appears. 
* Enter the number of characters required in the **Minimum Length** field. 
* Use the dropdown menu to choose the length of time allowed before **Password Expiration**. 
* Enter the number of login attempts allowed before **Login Lockout**.
* Choose the length of time allowed before **Inactive Account Expiration**.
* Check the box to **Restrict Password Reuse**, and use the dropdown menu to choose the number of times each password may be reused. 
* Check the box to **Restrict Password Reset**, and use the dropdown menu to choose the number of days during which a user can reset their password <!-- after their request is sent -->. 
* Use the dropdown menus to select the amount of time before **Idle Timeout** and **Session Timeout**. 
* Click the button to **Save** the configuration. 