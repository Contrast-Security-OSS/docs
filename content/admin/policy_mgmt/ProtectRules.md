<!--
title: "Protect Rules"
description: "Overview of protection rules"
tags: "admin protection rules policy management protect"
-->

Protect Rules allow you to set applications to monitor for attacks. They correspond to an attack type, such as SQL Injection or Cross-Site Scripting, that seeks to exploit any vulnerabilities that allow that type of attack in both custom code as well as 3rd party libraries. 

Contrast ships with built-in protection rules:

* **Command Injection:** Carefully crafted inputs can execute tainted commands.
* **Cross Site Request Forgery:** A CSRF attack can be used to trick a legitimate user into making an illegitimate request.
* **Cross-Site Scripting:** A web application vulnerability that allows users to run arbitrary JavaScript in other's browsers.
* **Glassfish Path Traversal:** A vulnerability in the Glassfish Admin portal that allows users to control which files get opened and read by application.
* **Padding Oracle:** A padding attack can be used to decrypt ciphertext.
* **Path Traversal:** A vulnerability that allows users to control which files get opened and read by application.
* **SQL Injection:** Carefully crafted inputs can alter the SQL queries the application uses, and steal data or execute code.
* **Untrusted Deserialization:** A web application vulnerability that allows users to pass arbitrary objects to a deserializer, allowing for remote code execution.
* **XML External Entity Processing:** A vulnerability in XML processing that can lead to file read/writes and remote code execution.

Enabling a Protect Rule on an application is very straightforward and can be uniquely applied in two places, which we've outlined below.

## Configuring a Protect Rule Within an Application
Protect Rules can be configured within the application details page, under the **Protection Policy** tab. Here, you will see a searchable list of rules you can configure. To view protect rules only, we've provided a quick view alongside the rule search to do so. Once you have found the rule you wish to edit, you'll notice each rule can be configured for one of three different server environments. Click the dropdown in the environment you want to set and select the desired policy from the drop down. You can select from these options: 

* **OFF** which disables the rule altogether
* **MONITOR** which enables the agent to identify attacks and report on them
* **BLOCK** which enables the agent to identify attacks, report on them and block the attack
* **BLOCK AT PERIMETER** BLOCK (P) only appears for some rules and means that the agent makes a blocking decision before the application is able to process the request

>*Note:** You may notice that for a single app, a single Protect Rule can have a different configuration per environment - OFF for Development, BLOCK for QA and MONITOR for Production. This granularity enables testing of different policies in pre-production environments without disrupting production defenses.

Protect Rules can also be managed in bulk by clicking the checkbox next to the rules you want to edit and then clicking the **Change Mode** button. Select which environments to modify and what policy to apply and then hit **Save**. All selected rules will have their policies updated.

## Configuring Protect Rules Across Applications
Protect Rules can be configured by organization administrators or Rules Admin users from the application portfolio view. Go to the **Policy Management** page from the user menu. You'll be able to see how your protection policy is being applied across your portfolio. Clicking into a rule will allow you to select OFF, MONITOR or BLOCK for each server type. The agents will then apply the correct behavior appropriately. Each rule can be independently configured for each application, so you can disable, enable monitoring or enable monitoring and blocking separately, for each Protect Rule, for each application.