<!--
title: "CLI Tool"
description: "Instructions for installing the CLI tool for library analysis"
tags: "tools cli library install"
-->
  

Use Contrast's command line interface (CLI) tool for software composition analysis (SCA) to gather and send library dependency information for your applications to the Contrast UI. 

## Before You Start 

Before you install and use Contrast's SCA CLI tool, verify that you've met the following prerequisites.  

* All applications to be scanned with the SCA tool must have with the appropriate Contrast agent installed. For information on how to instrument your application with a Contrast agent, see the following instructions: 

 * Java agent 

 * .NET agent 

 * .NET Core agent 

 * Node agent 
 

* Source code for the above Java, .NET and Node applications must be available locally to be examined by the Contrast SCA CLI tool: 

 * .NET, .NET Core and Node applications must have a package.lock.json file present

 * Java applications must have Maven installed with the dependencies plugin. 
 
 
* Node.js must be installed. (The Contrast SCA CLI tool is executed as a Node.js package.) For information on how to install Node.js, please refer to their [documentation](https://nodejs.org/en/download/). 
 

## Install 

Install the tool with the following command: 

```
npm install -g @contrast/contrast-sca 
```

Or, you can install the tool with Yarn via the following command: 

```
yarn global add @contrast/contrast-sca 
```

## Authenticate and Analyze 

The Contrast SCA is invoked by a command line interface. 

Contrast recommends that this is invoked as part of a CI pipeline so that running the SCA is automated as part of your build process. 

An application can be analyzed with the following command: 

```contrast-sca \ 

--api-key someAPIKey \ 

--authorization someAuthorizationCredentials \ 

--application-id someApplicationID \ 

--organization-id someOrganizationID \ 

--host ContrastUIDomain \ 

--project-path applicationRootDirectory 
```

To identify your credentials follow the instructions listed below… ‘Identifying Authentication Credentials’ 

### Review 

After you see a SUCCESS message you are now ready to view your dependency tree. <link to library hierarchy> 

### Help 

The contrast-sca tool includes command line help which can be displayed using the --h option. 


## Glossary
 

| Command                   | Description                                                                               |
|---------------------------|-------------------------------------------------------------------------------------------|
| --api-key string          | (required): An agent API key as provided by Contrast UI                                   |
| --authorization string    | (required): An agent Authorization credentials as provided by Contrast UI                 |
| --organization-id string  | (required): The ID of your organization in Contrast UI                                    |
| --application-id string   | (required): The ID of the application cataloged by Contrast UI                            |
| --host string             | (required): Provide the name of the host and optionally the port expressed as <host>:<port>|
| --application-name string | (optional): The name of the application cataloged by Contrast UI                          |
| --project-path string     | (optional): The directory root of a project/application that you would like analyzed. Defaults to the current directory.|
| --help                    | Display this usage guide.                                                  	 			|

 

## Identifying Authentication Credentials 

The Contrast SCA CLI tool works in tandem with our Contrast enterprise application to help you and your organization with securing your application. For the Contrast SCA CLI tool to work with our Contrast application it must identify itself with a set of credentials and also identify the application which it is providing analysis of.  

To identify the credentials, complete the following steps: 

* Log into the Contrast UI.  

* Navigate to the user menu in the upper left corner of the page, and select Your Account. 


You will be directed to the page with details on your Profile. At the bottom of the page, a section with Your Keys includes the following information, which you will need in a following step.  
 

API Key 

Organization ID 

Contrast URL 



Click the Copy button for the Authorization Header. Paste and save the authentication header in another location; you will need it in a following step. 

## Application ID

For any applications you would like to analyze, make note of their application ID. To locate the ID of the application you want to analyze, click the top navigation tab named Applications and from the list of applications select the one you are interested in seeing the analysis for. The application ID will then be the last URI segment in the URL of your browser as seen in the picture below.  
