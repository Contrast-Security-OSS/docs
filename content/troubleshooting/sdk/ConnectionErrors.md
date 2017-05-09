<!--
title: "Troubleshooting Issues with Contrast Java SDK"
description: "Troubleshooting Issues with Contrast Java SDK"
tags: "troubleshoot Issues Github SDK Java"-->


While using the Contrast Java SDK, there are a few issues to look out for that are easy to catch early on in development. 


## Types Of Issues

* `java.io.IOException: Server returned HTTP response code: 401 for URL: https://app.contrastsecurity.com/Contrast/unauthorized.html`

	When attempting to create an instance of the ContrastSDK, this exception may be thrown if the username, API key or service key you provided are incorrect. 
	If you catch the thrown IOException and continue to make use of that instance of the ContrastSDK object, additional IOExceptions will be thrown.

	Another cause of these exceptions is if your user account does not have the appropriate permissions within TeamServer. For instance, a user with only *View* permissions in TeamServer will not be able to edit or perform administrative actions through the SDK. 


* `Exception in thread "main" java.net.ConnectException: Connection refused`

	This error is commonly thrown when you specify an incorrect API url. SaaS customers do not need to explicitly specify the API url because it will use the default. However, EoP customers should check to verify that the full url is being specified to the Contrast API. 

	Example: `String apiUrl = "http://localhost:19080/Contrast/api";`

