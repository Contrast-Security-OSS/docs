<!--
title: "Level 2 Rules - Introduction"
description: "Introduction to .NET Level 2 Rules"
-->

## Policy File Editing

The behavior of the Contrast .NET Agent is largely driven by rules located in the *policy.xml* file in the agent's installation directory. The .NET Agent's behavior can be customized by adding your own rules to *customerPolicy.xml*.  Users can also override rules in *policy.xml* by adding a rule with the same method signature to *customerPolicy.xml*.  

The *customerPolicy.xml* file is located in *C:\ProgramData\Contrast.NET\customerPolicy.xml*

Please note that the agent's default *policy.xml* should not be directly modified because users' changes will be lost when a new version of Contrast.NET is installed.  The *customerPolicy.xml* file will not be overwritten during software updates.