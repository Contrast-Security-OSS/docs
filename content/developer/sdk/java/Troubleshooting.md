<!--
title: "Troubleshooting Issues with Contrast Java SDK"
description: "Troubleshooting Issues with Contrast Java SDK"
tags: "Issues Github SDK Java"-->
## Troubleshooting Issues With Contrast Java SDK

### Troubleshooting
While using the Contrast Java SDK there are a few issues to look out for that are easy to catch early on in development. 


#### Types Of Issues

* `java.io.IOException: Server returned HTTP response code: 401 for URL: https://app.contrastsecurity.com/Contrast/unauthorized.html`

	When attempting to create an instance of the ContrastSDK this exception may be thrown if the username, api key, or service key you provided are incorrect. 
	If you catch the thrown IOException and continue to make use of that instance of the ContrastSDK object additional IOExceptions will be thrown.

	Another cause of these exceptions is if your user account does not have appropriate permissions within TeamServer. For instance a user with only view permissions in TeamServer will not be able to edit or do administrative actions through the SDK. 

* `Exception in thread "main" java.net.ConnectException: Connection refused`

	This error is commonly thrown when you specify an incorrect api url. For SaaS customers you do not need to explicitly specify the api url because it will use the default TeamServer api url. If you are an EoP customer you should check to verify that you are specifying the full url to the Contrast api. 
	*Ex:* `String apiUrl = "http://localhost:19080/Contrast/api";`


### Issues With The Contrast Java SDK
If you find an issue with the Contrast Java SDK you can let us know by opening an issue on the GitHub page for the SDK. The issue page for the SDK can be found [here](https://github.com/Contrast-Security-OSS/contrast-sdk-java/issues).  If you select the 'New Issue' button on the right hand side of the page you can enter any information in regard to the issue.
