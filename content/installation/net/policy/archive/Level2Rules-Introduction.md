<!--
title: "Level 2 Rules - Introduction"
description: "Introduction to .NET Level 2 Rules"
tags: "installation policy customization rules level agent .Net"
-->

## Policy File Editing

Customize the .NET agent's behavior by adding your own rules to the *customerPolicy.xml* file, which is located in *C:\ProgramData\Contrast\dotnet\customerPolicy.xml*. You can also override rules in the agent's built-in policy by adding a rule with the same method signature to the *customerPolicy.xml* file. This file won't be overwritten during agent updates.

>**NOTE** Policy file editing is not currently supported on the agent deployed to Azure App Service.
