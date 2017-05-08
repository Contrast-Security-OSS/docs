<!--
title: "Log Enhancers"
description: "Overview of log enhancers"
tags: "Admin log enhancers policy management protect"
-->

Log Enhancers are additional instrumentation instructions that allow the Contrast agent to log additional parameters and data within the application without requiring any source code changes. Utilizing our deep security instrumentation techniques, a user can specify the API and the parameter to log and the Contrast agent will add this information to the *security.log* file as part of RASP logging. Organization and Policy (Rules) administrators can manage log enhancers by going to **Policy Management** from the user menu and select Log Enhancers from the left navigation. 

## How do you create a Log Enhancer?

* Find an API to which you want to add a log message. For example: ```public boolean com.acme.Authenticator.authenticate(String user, String password)```
* Define the signature of this method. Contrast expects the signature in this format: ```<class_name>.<method_name>(<argument_types>)``` For our example, this should be: ```com.acme.Authenticator.authenticate(String,String)```
* Now that we’ve selected the API to log, we have to decide what to log. We define our own message and include relevant data from the function call. So for our example, we’ll use this: User ```{{P1}}``` logged in.
Note the usage of a placeholder, ```{{P1}}```, to indicate we want to print the first parameter into the message. You can include any of the following formats:
	* ```{{O}}``` - print the String-ified version of the Object on which this call is made. If the method is static, this may be null or empty.
	* ```{{Pn}}``` - print the given parameter at index n. Note that n is zero-based.
	* ```{{R}}``` - print the return value of the function.
* Make a name for it, like “spring-forgot-password”. 

