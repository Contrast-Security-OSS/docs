<!--
title: "Session Metadata"
description: "Set up session metadata to track applications' vulnerabilities"
tags: "user UI applications session metadata vulnerabilities"
-->

Pinpoint the source of vulnerabilities in your application with session metadata reported by your Contrast agent. As soon as you add the necessary configuration property to your agent file, the agent reports the information along with the rest of your standard vulnerability data to the Contrast UI. 

## Agent Configuration 

To send session metadata for your application to the Contrast UI, you must add the configuration settings to your agent configuration file. The build properties that the agent can report are **branch name**, **build number**, **commit hash**, **committer**, **Git tag**, **repository**, **test run** and **version**. You may include all or some of these properties, as desired. See the following table for the configuration key that corresponds to each property. 

| UI label     | Configuration key |
|--------------|-------------------|
| Commit Hash  | commitHash        |
| Committer    | committer         |
| Branch Name  | branchName        |
| Git Tag      | gitTag       	   |
| Repository   | repository  	   |
| Test Run     | testRun      	   |
| Version      | version      	   |
| Build Number | buildNumber   	   |

You can supply these settings as system properties, environment settings or properties in a YAML configuration file. See the following configuration examples for each application language.

### Examples
 
If you use system properties for [Java](installation-javaconfig.html), include an additional entry in the line where you add your `javaagent` flag. In this case, you will set the property `contrast.application.session_metadata` to a set of key-value pairs that identify your test run. 

```
-Dcontrast.application.session_metadata="branchName=feature/some-new-thing,committer=Jane,repository=Contrast-Java"
```
 
As a [.NET](installation-netconfig.html) developer using *app.config* or *web.config*, you can add an entry to your configuration to specify this property. 

```
<?xml version="1.0"?>
<configuration>
  <connectionStrings />
  <appSettings>
    <add key="contrast.application.session_metadata" value="branchName=feature/some-new-thing,committer=Jane,repository=Contrast-DotNet" />
```
 
If you use YAML configuration, like most [Node](installation-nodeconfig.html) and [Ruby](installation-rubyconfig.html) agents, you can add an additional entry to your *contrast_security.yaml* file. 

```
application:
 session_metadata: branchName=feature/some-new-thing,committer=Jane,repository=Contrast-Ruby
```
 
### Continuous integration 

If you don't want to set these fields locally, you can also edit your continuous integration (CI) build scripts to set these for you. In Jenkins, you can pull the build number using the `BUILD_NUMBER` property. 

```
-Dcontrast.application.session_metadata="branchName=feature/some-new-thing,committer=Jane,repository=Contrast-Java,buildNumber=$BUILD_NUMBER"
```

If you use plugins in your CI, like the [Contrast Jenkins Plugin](tools-ci.html#jenkins), you can use these to make even more dynamic updates. 

```
-Dcontrast.application.session_metadata="branchName=$GIT_BRANCH,committer=$GIT_COMMITTER_NAME,commitHash=$GIT_COMMIT_HASH,repository=$GIT_URL,buildNumber=$BUILD_NUMBER"
```

## View Data by Application

To see the session metadata reported by the agent, go to your application's **Vulnerabilities** tab. The data for each vulnerability is displayed in the grid and the timeline. 

### Filters

Use the **View By** menu above the timeline to filter the data by the properties that you included in your agent configuration. This updates the values shown in the **Seen By** column in the grid. Use the filter for the grid column to refine the results. 

To see vulnerabilities that aren't associated with any session metadata, select **Disassociated** in the **View By** menu. The **Seen By** column will then disappear, as the agent hasn't reported any metadata for these vulnerabilities.  

<a href="assets/images/Seen-by-filter.png" rel="lightbox" title="Filter vulnerabilities by categories of session metadata"><img class="thumbnail" src="assets/images/Seen-by-filter.png"/></a>

> **Note:** If session metadata hasn't been configured for this agent, the **View By** menu and **Seen By** column do not appear.

### Timeline 

Your selections also update the data shown in the timeline, which you can view by **Severity** or **Discovery**. Hover over the trend lines in the grid for a breakdown of the data at that point in time. 

<a href="assets/images/Session-metadata-timeline.png" rel="lightbox" title="View a breakdown of vulnerabilities for a specific branch"><img class="thumbnail" src="assets/images/Session-metadata-timeline.png"/></a>

For a broader view of an the vulnerability data reported for each application, see the vulnerabilities [Overview](user-vulnerableapps.html#view-vulns).

