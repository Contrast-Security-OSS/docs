<!--
title: "CLI Tool"
description: "Instructions for installing the CLI tool for library analysis"
tags: "tools cli library install"
-->
  
Use Contrast's command line interface (CLI) to gather and send information for your applications to the Contrast UI. 

## How It Works

The Contrast CLI performs software composition analysis (SCA) on your application to show you the dependencies between open source libraries, including where vulnerabilities were introduced. By supplementing existing run time instrumentation from Contrast Agents, with data from pre-compile analysis (not typically available at run time), Contrast can provide a more detailed and comprehensive view of your applications in the Contrast UI.

The steps to successfully and continuously analyse your application are as follows:

  1. Install the Contrast CLI
  2. Collect credentials which allow the CLI to communicate with the Contrast server
  3. Identify the application ID for the application on which you will perform analysis
     - Identify an existing instrumented application within the Contrast UI, or
     - Create a new application ID using the Contrast CLI and the catalogue-application option
  4. Create and check the full command, then embed it in your build pipeline

## Before You Start 

The Contrast CLI may be used to create new application instances within the Contrast server. However, the CLI is typically used to supplement pre-existing applications - those which have been created and instrumented by the appropriate Contrast agent.

Pre-existing applications that have been fully instrumented at run time by a Contrast agent include a rich set of vulnerability and library data within the Contrast UI. For information on how to instrument your application with a Contrast agent, see the following instructions: 

 * [Java agent](installation-javastandard.html)
 * [.NET agent](installation-netinstall.html)
 * [.NET Core agent](installation-netcoreinstall.html)
 * [Node agent](installation-nodeinstall.html)
 * [Python agent](installation-pythoninstall.html)
 * [Ruby agent](installation-rubyinstall.html)
 
Source code for target applications must be available locally to be examined by the CLI:

* Java applications must have *Maven* installed with the [dependency plugin](https://maven.apache.org/plugins/maven-dependency-plugin/).
* .NET and .NET Core applications must have a *package.lock.json* file present.
* Node applications must have a *package-lock.json* file present.
* Python applications must have the *pipfile* and *pipfile.lock* files present.
* Ruby applications must have *gemfile* and *gemfile.lock* files present.
 
Node.js must be installed. (The Contrast CLI is executed as a Node.js package.) For information on how to install Node.js, please refer to their [documentation](https://nodejs.org/en/download/). 

## Install 

Install the CLI with the following command: 

```
npm install -g @contrast/contrast-cli
```

Or, you can install the CLI with Yarn with the following command: 

```
yarn global add @contrast/contrast-cli
```

## Gather Credentials
 
Gather the following Contrast credentials: 

 * API key
 * Organization ID
 * Contrast server host (from within the URL)

To identify your credentials, see [Profile Settings](user-account.html#profile). Note that the server host name is within the 'Contrast URL' value and will not include the https:// component or the directory following the host name and port. 

## Identify the Application ID

If your application has already been instrumented by a Contrast agent (recommended), find the [application ID](user-appsmanage.html) within the Contrast UI.

To create a new application within the Contrast UI using the Contrast CLI, use the catalogue-application and application-name options. The output of a successful catalogue operation is an Application ID displayed in the console.                             
  Catalogue Command: contrast-cli --catalogue-application --api-key yourApiKey  
  --authorization yourKey --organization yourOrganizationID --host yourHost     
  --application-name yourApplicationName --language app_language

Note: Allowable language values are JAVA, DOTNET, NODE, PYTHON and RUBY.

## Authenticate and Analyze 

Once the CLI is installed with a valid set of credentials and a correct Application ID, you can analyze applications and see the results in the Contrast UI. Contrast recommends that SCA is invoked as part of a CI pipeline so that running the SCA is automated as part of your build process. 

Use the commands shown in the following example to analyze an application: 

```
contrast-cli \ 

 --api-key someAPIKey \ 
 --authorization someAuthorizationCredentials \ 
 --application-id someApplicationID \ 
 --organization-id someOrganizationID \ 
 --project-path applicationRootDirectory

```
Credentials may be placed within a YAML file with the following format:

```
contrast-cli --yamlPath path/to/yaml

cli:
     api_key: demo_key
     application_name: appName
     authorization: auth_key
     organization_id: org_id
     host: host_address
     language: app_language
     application_id: app_id
```

<!-- 
### Review 

After you see a SUCCESS message you are now ready to view your dependency tree. (link to library hierarchy) 
-->

## Help 

The CLI includes command line help, including the glossary of commands shown below, which you display with the `--h` option. 


| Command                   | Description                                                                               |
|---------------------------|-------------------------------------------------------------------------------------------|
| --api-key string          | An agent API key provided by Contrast UI (**required**)                                 |
| --authorization string    | Agent Authorization credentials provided by Contrast UI (**required**)                |
| --organization-id string  | The ID of your organization in Contrast UI (**required**)                                 |
| --application-id string   | The ID of the application cataloged by Contrast UI (**required**)                          |
| --host string             | The name of the host and (optionally) the port expressed as `<host>:<port>`; defaults to *app.contrastsecurity.com* (**optional**)|
| --project-path string     | The directory root of a project/application that you want to analyze; defaults to the current directory (**optional**) |
| --help                    | Display this usage guide                                                   	 			|

