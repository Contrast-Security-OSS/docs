<!--
title: "Build-Based View"
description: "How to track applications' vulnerabilities by build"
tags: "user UI applications metadata build view vulnerabilities"
-->

## About Build-Based Metadata

list of build properties: branchName, buildNumber, commitHash, committer, gitTag, repository, testRun and version.

<!-- They can enable/disable individual properties, right? -->

## Agent Configuration 

To send build properties for your application to the Contrast UI, you must add the configuration settings to your agent configuration file. You can supply these settings as system properties, environment settings or properties in YAML configuration files. See the following configuration examples for each application language.
 
If you use system properties for **Java**, include an additional entry in the line where you add your `javaagent` flag. In this case, you would set the property `contrast.application.session_metadata` to a set of key-value pairs that identify your test run. 

```
-Dcontrast.application.session_metadata="branchName=feature/some-new-thing,committer=Jane,repository=Contrast-Java"
```
 
As a **.NET** developer using *app.config* or *web.config*, you can add an entry to your configuration to specify this property. 

```
<?xml version="1.0"?>
<configuration>
  <connectionStrings />
  <appSettings>
    <add key="contrast.application.session_metadata" value="branchName=feature/some-new-thing,committer=Jane,repository=Contrast-DotNet" />
```
 
If you use YAML configuration, like most **Node** and **Ruby** agents, you can add an additional entry to your *contrast_security.yaml* file. 

```
application:
 session_metadata:branchName=feature/some-new-thing,committer=Jane,repository=Contrast-Ruby
```
 
### Continuous integration 

If you don't want to set these fields locally, you can also edit your continuous integration (CI) build scripts to set these for you. In Jenkins, you can pull the build number using the `BUILD_NUMBER` property. 

```
-Dcontrast.application.session_metadata="branchName=feature/some-new-thing,committer=Jane,repository=Contrast-Java,buildNumber=$BUILD_NUMBER"
```

If you use plugins in your CI, like the [Jenkins git plugin](tools-ci.html#jenkins), you can use these to make even more dynamic updates. 

```
-Dcontrast.application.session_metadata="branchName=$GIT_BRANCH,committer=$GIT_COMMITTER_NAME,commitHash=$GIT_COMMIT_HASH,repository=$GIT_URL,buildNumber=$BUILD_NUMBER"
```

## View Application Data 


