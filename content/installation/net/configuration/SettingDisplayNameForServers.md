<!--
title: "Setting The Display Name For Servers Running Contrast.NET"
description: "Guide to setting the server display name"
tags: "microsoft IIS server custom agent installation .Net"
-->

Starting with **Version 3.1.4**, the .NET agent allows users to customize the display name used for the server running the Contrast.NET agent. The server name can be customized by adding a value to the ***DotnetAgentService.exe.config*** file in the agent's installation directory (***C:\Program Files\Contrast.NET*** by default). For example, the following configuration will set the server's display name to **MyServerName**:

```
...
  <add key="ServerName" value="MyServerName" />
</appSettings>
```

## Server Display Name When The Configuration Setting *ServerName* Is Absent

If the **ServerName** configuration setting is not present, the .NET agent will use the computer name for the server's display name. You can view the computer name by viewing the **System** properties in the **Control Panel**.

## See Also

[Setting The Display Name For Applications Analyzed By Contrast.NET](user_netconfig.html#apps)
