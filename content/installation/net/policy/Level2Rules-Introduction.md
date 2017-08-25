<!--
title: "Level 2 Rules - Introduction"
description: "Introduction to .NET Level 2 Rules"
tags: "installation policy customization rules level agent .Net"
-->

## Policy File Editing

The .NET Agent's behavior can be customized by adding your own rules to *customerPolicy.xml*.  Users can also override rules in the agent's built-in policy by adding a rule with the same method signature to *customerPolicy.xml*.  

The *customerPolicy.xml* file is located in *C:\ProgramData\Contrast.NET\customerPolicy.xml* and this file will not be overwritten during agent updates.