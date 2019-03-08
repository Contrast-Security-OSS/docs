<!--
title: "Troubleshooting Issues with Contrast Java SDK"
description: "Troubleshooting Issues with Contrast Java SDK"
tags: "troubleshoot Issues Github SDK Java"-->


While using the Contrast SDK, there are a few issues to look out for that are easy to catch early on in development. 


## Types Of Issues

### Java

* `java.io.IOException: Server returned HTTP response code: 401 for URL: https://app.contrastsecurity.com/Contrast/unauthorized.html`

	When attempting to create an instance of the ContrastSDK, this exception may be thrown if the username, API key or service key you provided are incorrect. 
	If you catch the thrown IOException and continue to make use of that instance of the ContrastSDK object, additional IOExceptions will be thrown.

	Another cause of these exceptions is if your user account does not have the appropriate permissions within TeamServer. For instance, a user with only *View* permissions in TeamServer will not be able to edit or perform administrative actions through the SDK. 


* `Exception in thread "main" java.net.ConnectException: Connection refused`

	This error is commonly thrown when you specify an incorrect API url. SaaS customers do not need to explicitly specify the API url because it will use the default. However, EoP customers should check to verify that the full url is being specified to the Contrast API. 

	Example: `String apiUrl = "http://localhost:19080/Contrast/api";`

### .NET

* `System.ArgumentException`

  This error can occur for two reasons:
	* A required parameter for requests is missing (e.g., username, service key or API key) 
	* The URL parameter has an invalid URI value

* `System.AggregateException`

  This error occurs when the request can't resolve or reach the given host.

* `contrast_rest_dotnet.ResourceNotFoundException`

  You'll see this error when the resource requested isn't found (HTTP status 404).

* `contrast_rest_dotnet.ForbiddenException`

  This error occurs when you don't have enough access or your credentials are invalid.

* `contrast_rest_dotnet.ContrastApiException`

  When the Contrast application returns an unrecognized response to the SDK (a possible 500 Internal Server Error), this exception is thrown. You should consider creating an issue in Contrast's [GitHub repository](https://github.com/Contrast-Security-OSS/contrast-sdk-dotnet) if this exception presents itself frequently while using the same function.

