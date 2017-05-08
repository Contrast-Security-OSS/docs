<!--
title: "Application Specific Settings"
description: "Guide to setting the applications display name and version"
tags: "configuration microsoft IIS application name agent installation .NET version"
-->

Users can customize the display name (**version 3.1.3**+) and application version (**version 3.3.6**+) used for a web application by adding settings to an application's *web.config* file. These settings must be added to the application web.config's root configuration ```appSettings``` section (in other words, the .NET Agent expects to find these settings under the XML path configuration/appSettings.) For example, the following configuration will set the application's display name to **MyWebAppName** and version tag to **1.2.3**:

```
<configuration>
  <appSettings>
    <add key="Contrast.AppName" value="MyWebAppName" />
    <add key="Contrast.AppVersion" value="1.2.3" />
  </appSettings>
  <system.web>
    ...
```

>**Note:** 
* The **Contrast.AppName** setting should be present on each server where the application is to be analyzed. Otherwise the applications could potentially have different display names (see below) and be considered different applications by TeamServer. 
* In order for the agent to pick up customized AppName and/or AppVersion settings, the settings must be placed in the application web.config's root configuration appSettings section. In versions previous to 3.3.8, the appSettings section must also not be protected/encrypted or located in another configuration file (i.e., not using configSource.)

## Application Display Name When **Contrast.AppName** Setting Is Absent

If the **Contrast.AppName** configuration setting is not present, the .NET agent will use the application's virtual path as an application name. If the application is hosted in the root of a site (i.e. the virtual path is ***/***), then the .NET agent will use the site's name as the application name.

## Application Version When **Contrast.AppVersion** Setting Is Absent

If the **Contrast.AppVersion** configuration setting is not present, the .NET agent will use the application version set in the agent's configuration file. Note that setting **Contrast.AppVersion** in the agent's configuration file will use the same version tag for all applications that do NOT have **Contrast.AppVersion** set in their *web.config* file. 


## More Information

[Setting The Display Name For Servers Running Contrast.NET](installation_netconfig.html#server)
