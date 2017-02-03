<!--
title: "Application Specific Settings"
description: "Guide to setting the applications display name and version"
tags: "microsoft IIS application name agent installation .NET version"
-->

Users can customize the display name (**version 3.1.3**+) and application version (**version 3.3.6**+) used for a web application by adding a setting to the ```appSettings``` section of the application's ***web.config*** file. For example, the following configuration will set the application's display name to **MyWebAppName** and version tag to **1.2.3**:

```
<appSettings>
  <add key="Contrast.AppName" value="MyWebAppName" />
  <add key="Contrast.AppVersion" value="1.2.3" />
</appSettings>
```

>**Note:** The **Contrast.AppName** setting should be present on each server where the application is to be analyzed. Otherwise the applications could potentially have different display names (see below) and be considered different applications by TeamServer.

## Application Display Name When *Contrast.AppName* Setting Is Absent

If the **Contrast.AppName** configuration setting is not present, the .NET agent will use the application's virtual path as an application name. If the application is hosted in the root of a site (i.e. the virtual path is ***/***), then the .NET agent will use the site's name as the application name.

## Application Version When *Contrast.AppVersion* Setting Is Absent

If the **Contrast.AppVersion** configuration setting is not present, the .NET agent will use the application version set in the agent's configuration file. Note that setting **Contrast.AppVersion** in the agent's configuration file will use the same version tag for all applications that do NOT have **Contrast.AppVersion** set in their web.config file. 


## See Also

[Setting The Display Name For Servers Running Contrast.NET](user_netconfig.html#servers)
