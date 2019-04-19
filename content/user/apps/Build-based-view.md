<!--
title: "Build-Based View"
description: "How to track applications' vulnerabilities by build"
tags: "user UI applications metadata build view vulnerabilities"
-->

## About Build-Based Metadata

For the first iteration of Build Based Views, we're going to focus on a predefined list of build properties: branchName, buildNumber, commitHash, committer, gitTag, repository, testRun, and version.

### Agent configuration 

To add these settings for your agent configuration, you can supply them as system properties, environment settings or properties in YAML configuration files. Each of the following configuration examples refer to Contrast user "Jane".
 
If you use system properties for **Java**, include an additional entry in the line where you add your `javaagent` flag. In this case, you would set the property `contrast.application.session_metadata` to a set of key-value pairs that identify your test run. 

>**Example:** 
 ```
  -Dcontrast.application.session_metadata="branchName=feature/some-new-thing,committer=Jane,repository=Contrast-Java"
 ```
 
For .NET developers using *app.config* or *web.config*, you could add an entry to your configuration to specify this property. 

>**Example:** 
 ```
  <?xml version="1.0"?>
  <configuration>
   <connectionStrings />
   <appSettings>
     <add key="contrast.application.session_metadata" value="branchName=feature/some-new-thing,committer=Harold,repository=Contrast-DotNet" />
 ```
 
If you use YAML configuration, like most Node and Ruby agents, you can add an additional entry to your *contrast_security.yaml* file. 

>**Example:**
 ```
   application:
    session_metadata:branchName=feature/some-new-thing,committer=Jane,repository=Contrast-Ruby
 ```
 
If you don't want to set these fields locally, you can also edit your CI build scripts to set these for you. In Jenkins, you can pull the build number using the `BUILD_NUMBER` property and pass that along. 

> **Example:**
 ```
  -Dcontrast.application.session_metadata="branchName=feature/some-new-thing,committer=Jane,repository=Contrast-Java,buildNumber=$BUILD_NUMBER"
 ```

If you're using plugins in your CI, like the Jenkins Git plugin, you can further capitalize on these to make even more dynamic updates: 

```
-Dcontrast.application.session_metadata="branchName=$GIT_BRANCH,committer=$GIT_COMMITTER_NAME,commitHash=$GIT_COMMIT_HASH,repository=$GIT_URL,buildNumber=$BUILD_NUMBER"
```

## View Data by Build


