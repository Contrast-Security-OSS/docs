<!--
title: "Setting The Display Name For Applications Analyzed By Contrast.NET"
description: "Guide to setting the applications display name"
tags: "microsoft IIS application name agent installation .Net"
-->

Starting with **Version 3.1.3**, the .NET agent allows users to customize the display name used for a web application by adding a setting to the ```appSettings``` section of the application's ***web.config*** file. For example, the following configuration will set the application's display name to **MyWebAppName**:

```
<appSettings>
  <add key="Contrast.AppName" value="MyWebAppName" />
</appSettings>
```

>**Note:** This setting must be present on each server where the application is to be analyzed. Otherwise the applications could potentially have different display names (see below) and be considered different applications by TeamServer.

## Application Display Name When *Contrast.AppName* Setting Is Absent

If the **Contrast.AppName** configuration setting is not present, the .NET agent will use the application's virtual path as an application name. If the application is hosted in the root of a site (i.e. the virtual path is ***/***), then the .NET agent will use the site's name as the application name.

## See Also

[Setting The Display Name For Servers Running Contrast.NET](user_netconfig.html#servers)
