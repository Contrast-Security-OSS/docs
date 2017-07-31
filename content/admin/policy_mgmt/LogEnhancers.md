<!--
title: "Log Enhancers"
description: "Overview of log enhancers"
tags: "Admin log enhancers policy management protect"
-->

Log Enhancers are instrumentation instructions that allow the Contrast agent to log additional parameters and data in the application without requiring any source code changes. Utilizing our deep security instrumentation techniques, a user can specify the API and parameter to log, and the Contrast agent then adds this information to the *security.log* file as part of RASP logging. Organization and Policy (Rules) Administrators can manage log enhancers by going to the **User menu > Policy Management > Log Enhancercers tab**. 

## Add a Log Enhancer

To create a Log Enhancer, complete the following steps. 

* Find an API to which you want to add a log message. For example: 

```
public boolean com.acme.Authenticator.authenticate(String user, String password)
```
* Define the signature of this method. Contrast expects the signature in the format: `<class_name>.<method_name>(<argument_types>)`.  The remaining steps in these instructions use `com.acme.Authenticator.authenticate(String,String)`.
* Once you select the API to log, you have to decide what to log. Define your own message and include relevant data from the function call. These instructions use User `{P1}` logged in. 

> **Note:** Using a placeholder, `{P1}`, indicates that you want to print the first parameter into the message. You can include any of the following formats:
> * `{O}`: Print the String-ified version of the Object on which this call is made. If the method is static, this may be null or empty.
> * `{Pn}`: Print the given parameter at index `n`. Note that `n` is zero-based.
> * `{R}`: Print the return value of the function.

* Make a name for the Log Enhancer, like “spring-forgot-password”. 

