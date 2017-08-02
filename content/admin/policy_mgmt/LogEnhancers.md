<!--
title: "Log Enhancers"
description: "Overview of log enhancers"
tags: "Admin log enhancers policy management protect"
-->

Log Enhancers are instrumentation instructions that allow the Contrast agent to log additional parameters and data in the application without requiring any source code changes. By using these deep security instrumentation techniques, a user can specify the API and parameter to log, and the Contrast agent adds this information to the *security.log* file as part of RASP logging. 

## Manage Log Enhancers

Organization and Policy (Rules) Administrators can manage log enhancers by going to the **User menu > Policy Management > Log Enhancers tab**. 


<!-- Add grid screenshot once UI is finished. -->

To find an existing rule, use the dropdown menu to filter them by language or type the rule name in the search field above the grid. 

## Add a Log Enhancer

To create a Log Enhancer, click the button to **Add Log Enhancer** above the grid. 

<a href="assets/images/Add-log-enhancer.png" rel="lightbox" title="Add Log Enhancer"><img class="thumbnail" src="assets/images/Add-log-enhancer.png"/></a>

* In the form, add a **Name** and **Description** for this log enhancer. 

* In the dropdown fields, choose a **Log Level** and **Log Type**. 

* In the **API to Log** section: 

	* Choose a **Language** from the dropdown menu. 

	* Then enter the **API** in the structure `<class_name>.<method_name>(<argument_types>)`. Example: 

	```
	public boolean com.acme.Authenticator.authenticate(String user, String password)
	```

	* Enter the log description in the **Format** field, including relevant data from the function call. You can include any of the following placeholders in your message:
	 * `{O}`: Print the String-ified version of the Object on which this call is made. If the method is static, this may be null or empty.
     * `{Pn}`: Print the given parameter at index `n`. Note that `n` is zero-based.
	 * `{P1}`: Print the the first parameter into the message.
	 * `{R}`: Print the return value of the function.

* Click the **Add** button to save the rule. 

## Edit a Log Enhancer

Click the name in the grid to go to the **Edit Log Enhancer** form, where you can adjust the log level using the dropdown menu. Use the toggles in the grid row to enable or disable the rule in each environment.

