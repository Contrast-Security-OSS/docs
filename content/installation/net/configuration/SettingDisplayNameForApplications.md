<!--
title: ".NET Application-Specific Settings"
description: "Guide to setting the application-specific settings"
tags: "configuration microsoft IIS application name agent installation .NET version"
-->

Users can customize several pieces of information that are specific to each application by adding entries to the application's *web.config* file. In order for the agent to pick up customized application settings, you must place these settings in the application *web.config* file's root configuration *appSettings* section. 

> **Note:** The "Contrast.CamelCase"-style configuration options are considered legacy options. New configuration values will follow the YAML-style naming convention. All users are encouraged to migrate to [YAML-based property names](installation-netconfig.html#net-yaml) in their applications' *web.config* files.

| Option                       | Legacy Option        | Description | Version |
|------------------------------|----------------------|-------------|---------|
| contrast.application.name    | Contrast.AppName     | Controls the application name sent to the Contrast UI for this application. The `contrast.application.name` setting should be present on each server where the application is to be analyzed. If it isn't present, the applications could have different display names and be considered as different applications by the Contrast application. See the **Absent Configuration Setting** section below for more details.      | 3.1.3+  |
| contrast.application.version | Contrast.AppVersion  | Controls the application version tag sent to Contrast. | 3.3.6+  |
| contrast.application.group   | Contrast.AppGroup    | Specifies the group to which this application will be added in the Contrast UI, if this application isn't already a member of a group.        | 3.4.5+ |
| contrast.application.tags    | Contrast.AppTags     | Controls free-form tags sent to Contrast for the application. You can use tags to search for specific applications in the Contrast UI.        | 4.8.20+ |
| contrast.inventory.tags      | Contrast.LibraryTags | Controls free-form tags sent to Contrast for the application's libraries. You can use tags to search for specific libraries in the Contrast UI.        | 4.8.20+ |
| contrast.assess.tags         | Contrast.FindingTags | Controls free-form tags sent to Contrast for the application's vulnerabilities. You can use tags to search for specific vulnerabilities in the Contrast UI.        | 4.8.20+ |


> **Example:**
 ```
 <configuration>
   <appSettings>
     <add key="contrast.application.name" value="MyWebAppName" />
     <add key="contrast.application.version" value="1.2.3" />
   </appSettings>
   <system.web>
     ...
 ```

## Absent Configuration Setting

If the `Contrast.AppName` configuration setting isn't present, the .NET agent will use the application's virtual path as an application name. If the application is hosted in the root of a site (i.e., the virtual path is ***/***), then the .NET agent will use the site's name as the application name.
