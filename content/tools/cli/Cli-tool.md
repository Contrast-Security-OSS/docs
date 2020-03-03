<!--
title: "Contrast CLI"
description: "Instructions for installing the Contrast CLI for library analysis"
tags: "tools cli library install"
-->
  
Use Contrast's command line interface (CLI) to gather and send information for your applications to the Contrast UI. 

## How It Works

The Contrast CLI performs software composition analysis (SCA) on your application to show you the dependencies between open source libraries, including where vulnerabilities were introduced. By supplementing existing runtime instrumentation from Contrast agents, with data from pre-compile analysis (not typically available at runtime), Contrast can provide a more detailed and comprehensive view of your applications in the Contrast UI.

The steps to successfully and continuously analyze your application are as follows:

  1. Install the Contrast CLI
  2. Collect credentials which allow the CLI to communicate with the Contrast server
  3. Identify the application ID for the application on which you will perform analysis
     - Identify an existing instrumented application within the Contrast UI, or
     - Create a new application ID using the Contrast CLI and the catalogue-application option
  4. Create and check the full command, then embed it in your build pipeline

## Before You Start 

The Contrast CLI may be used to create new application instances within the Contrast server. However, the CLI is typically used to supplement pre-existing applications - those which have been created and instrumented by the appropriate Contrast agent.

Pre-existing applications that have been fully instrumented at runtime by a Contrast agent include a rich set of vulnerability and library data within the Contrast UI. For information on how to instrument your application with a Contrast agent, see the following instructions: 

 * [Java agent](installation-javastandard.html)
 * [.NET agent](installation-netinstall.html)
 * [.NET Core agent](installation-netcoreinstall.html)
 * [Node agent](installation-nodeinstall.html)
 * [Python agent](installation-python.html#python-install)
 * [Ruby agent](installation-ruby.html#ruby-install)
 
Source code for target applications must be available locally to be examined by the CLI:

* Java applications must have *Maven* installed.
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

To create a new application within the Contrast UI using the Contrast CLI, use the catalogue-application and --cli_application_name options. The output of a successful catalogue operation is an application ID displayed in the console.
  
Catalogue Command: contrast-cli --catalogue-application --cli_api_key yourApiKey 
--cli_authorization yourKey --cli_organization_id yourOrganizationID --cli_host yourHost 
--cli_application_name yourApplicationName --cli_language app_language

Note: Allowable language values are JAVA, DOTNET, NODE, PYTHON and RUBY.

## Authenticate and Analyze 

Once the CLI is installed with a valid set of credentials and a correct application ID, you can analyze applications and see the results in the Contrast UI. Contrast recommends that the CLI is invoked as part of a CI pipeline so that running it is automated as part of your build process. 

Use the commands shown in the following example to analyze an application: 

```
contrast-cli \ 
 
 --cli_api_key someAPIKey \ 
 --cli_authorization someAuthorizationCredentials \ 
 --cli_application_id someApplicationID \ 
 --cli_organization_id someOrganizationID \ 
 --cli_project_path applicationRootDirectory
```
Credentials may be placed within a YAML file with the following format:

```
contrast-cli --yamlPath path/to/yaml

cli:
     cli_api_key: demo_key
     cli_application_name: appName
     cli_authorization: auth_key
     cli_organization_id: org_id
     cli_host: host_address
     cli_language: app_language
     cli_application_id: app_id
```

## Review 

After you see a SUCCESS message, you are ready to [view your dependency tree](user-libraries.html#hierarchy).


## Help 

The CLI includes command line help, including the glossary of commands shown below, which you display with the `--h` option. 


| Command                   | Description                                                                               |
|---------------------------|-------------------------------------------------------------------------------------------|
| --cli_api_key             | An agent API key provided by Contrast UI (**required**)                                 |
| --cli_authorization       | Agent Authorization credentials provided by Contrast UI (**required**)                |
| --cli_organization_id     | The ID of your organization in Contrast UI (**required**)                                 |
| --cli_application_id      | The ID of the application cataloged by Contrast UI (**required**)                          |
| --cli_host                | The name of the host and (optionally) the port expressed as `<host>:<port>`; Does not include the protocol section of the URL (https://); Defaults to *app.contrastsecurity.com* (**optional**)|
| --cli_project_path string     | The directory root of a project/application that you want to analyze; defaults to the current directory (**optional**) |
| --help                    | Display this usage guide                                                   	 			|

