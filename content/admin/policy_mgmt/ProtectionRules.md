<!--
title: "Protection Rules"
description: "Overview of protection rules"
tags: "Admin protection rules policy management protect"
-->

Protection Rules allow you to set applications to monitor for attacks.

Contrast ships with built-in protection rules:

* **Command Injection:** Carefully crafted inputs can execute tainted commands.
* **Cross Site Request Forgery:** A CSRF attack can be used to trick a legitimate user into making an illegitimate request.
* **Cross-Site Scripting:** A web application vulnerability that allows users to run arbitrary JavaScript in other's browsers.
* **Glassfish Path Traversal:** A vulnerability in the Glassfish Admin portal that allows users to control which files get opened and read by application.
* **Padding Oracle:** A padding attack can be used to decrypt ciphertext.
* **Path Traversal:** A vulnerability that allows users to control which files get opened and read by application.
* **SQL Injection:** Carefully crafted inputs can alter the SQL queries the application uses, and steal data or execute code.
* **Untrusted Deserialization:** A web application vulnerability that allows users to pass arbitratry objects to a deserializer, allowing for remote code execution.
* **XML External Entity Processing:** A vulnerability in XML processing that can lead to file read/writes and remote code execution.

Each protection rule can be uniquely applied to the application. Clicking into a rule will allow you to select OFF, MONITOR or BLOCK for each server type. The agents will then apply the correct behavior appropriately. Each rule can be independently configured for each application, so you can disable, enabling monitoring or enable monitoring and blocking separately, for each Protection Rule, for each application.
