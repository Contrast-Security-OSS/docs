<!--
title: ".NET Application Specific Settings"
description: "Guide to setting the application-specific settings"
tags: "configuration microsoft IIS application name agent installation .NET version"
-->
Users can customize several pieces of information, specific to each application, by adding entries to the application's ```web.config``` file.

>**Note:** In order for the agent to pick up customized application settings, these settings must be placed in the application web.config's root configuration appSettings section. 

| Parameter           | Description | Version |
|---------------------|-------------|---------|
| Contrast.AppName    | Controls the application name sent to the Contrast interface for this application. The **Contrast.AppName** setting should be present on each server where the application is to be analyzed. Otherwise the applications could potentially have different display names (see below) and be considered different applications by TeamServer.        | 3.1.3+  |
| Contrast.AppVersion | Controls the application version tag sent to Contrast. | 3.3.6+  |
| Contrast.AppGroup   | Specifies the group this application will be added to in the Contrast interface if this application is not already a member of a group.        | 3.4.5+ |
| Contrast.AppTags    | Controls free form tags sent to Contrast for the application; tags can be used to query for specific applications in the Contrast interface.        | 4.8.20+ |
| Contrast.LibraryTags   | Controls free form tags sent to Contrast for the application's libraries; tags can be used to query for specific libraries in the Contrast interface.        | 4.8.20+ |
| Contrast.FindingTags   | Controls free form tags sent to Contrast for the application's vulnerabilities; tags can be used to query for specific vulnerabilities in the Contrast interface.        | 4.8.20+ |


### Example
```
<configuration>
  <appSettings>
    <add key="Contrast.AppName" value="MyWebAppName" />
    <add key="Contrast.AppVersion" value="1.2.3" />
  </appSettings>
  <system.web>
    ...
```

## When the Contrast.AppName Configuration Setting Is Absent 

If the **Contrast.AppName** configuration setting is not present, the .NET agent will use the application's virtual path as an application name. If the application is hosted in the root of a site (i.e. the virtual path is ***/***), then the .NET agent will use the site's name as the application name.
