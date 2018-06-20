<!--
title: "Protect Rules"
description: "Overview of protection rules"
tags: "admin protection rules policy management protect"
-->

Protect Rules allow you to set applications to monitor for attacks. Every rule corresponds to an attack type, such as SQL Injection or Cross-Site Scripting, that seeks to exploit any vulnerabilities in both custom code and third-party libraries. 

Contrast ships with the following built-in protection rules:

* **Bean Classloader Overwriting:** Carefully crafted inputs can be used to abuse some bean libraries into loading malicious class loaders, which can then load evil arbitrary code.
* **Command Injection:** Carefully crafted inputs can execute tainted commands.
* **Cross Site Request Forgery:** A CSRF attack can be used to trick a legitimate user into making an illegitimate request.
* **Cross-Site Scripting:** A web application vulnerability that allows users to run arbitrary JavaScript in other user's browsers.
* **Expression Language Injection:** Many frameworks and custom code vulnerabilities around accidentally evaluating user inputs as expression languages like OGNL, SpEL, or JSP EL.
* **Method Tampering:** An attack against authentication or authorization systems that have implicit "allow all" settings in their security configuration.
* **Padding Oracle:** A high-volume attack that abuses the presence of error conditions when processing inputs with bad padding, which can be used to decrypt and encrypt ciphertext.
* **Path Traversal / Local File Include:** A vulnerability that allows users to control which files are opened and read by application.
* **Regular Expression DoS:** A DoS attack that allows carefully crafted inputs to trick innocent but regular expressions to run indefinitely.
* **SQL and NoSQL Injection:** Carefully crafted inputs can alter the SQL or NoSQL queries the application uses, and steal data or execute code.
* **Untrusted Deserialization:** A web application vulnerability that allows users to pass arbitrary objects to a deserializer, allowing for remote code execution.
* **XML External Entity Processing:** A vulnerability in XML processing that can lead to file read/writes and remote code execution.

## Configure a Protect Rule 

You can enable a Protect Rule on an application within the application's details page or from the **Protect Rules** tab in the **Policy Management** page.

### Application page

Click on an application name in the **Applications** page grid, and go to the **Policy** tab to configure **Protect** Rules. Search for a rule by name or use the dropdown menu above the grid to filter for protect rules only. 

<a href="assets/images/App-protect-policy.png" rel="lightbox" title="View application policies"><img class="thumbnail" src="assets/images/App-protect-policy.png"/></a>

For each rule, you can define one configuration per environment. Click the dropdown menu(s) in the grid row to set the status of the appropriate environment(s), and choose from the following options: 

* **OFF** disables the rule altogether.
* **MONITOR** enables the agent to identify attacks and report them.
* **BLOCK** enables the agent to identify attacks, report them and block the attack.
* **BLOCK AT PERIMETER** BLOCK (P) allows the agent to make a blocking decision before the application is able to process the request. This option is not available for all rules. 

>**Note:** By enabling a different configuration per environment, you can test different policies in preproduction environments without disrupting production defenses.

To manage Protect Rules in bulk, check the box in the row for each rule that you want to edit, and then click the button to **Change Mode**. In the dialog that appears, select which environments to modify and which mode to apply, and then hit **Save**. 

<a href="assets/images/Change-mode-protect-policies.png" rel="lightbox" title="Change Mode dialog"><img class="thumbnail" src="assets/images/Change-mode-protect-policies.png"/></a>


### Across applications

Organization and Rules Administrators can also manage Protect Rules by going to the **User menu > Policy Management > Protect Rules tab**. The grid displays how your Protect Rules are being applied across your portfolio. Use the search field to find a rule by name or use the dropdown menu to filter the rules by language. 

Click on a rule to configure settings for all associated applications. Click the dropdown menu(s) in each grid row to set the status of the appropriate environment(s), as described in the previous section. 

<a href="assets/images/Protect-rules-policy-management.png" rel="lightbox" title="Protect Rules grid in Policy Management page"><img class="thumbnail" src="assets/images/Protect-rules-policy-management.png"/></a>


