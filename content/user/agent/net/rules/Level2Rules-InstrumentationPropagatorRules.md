<!--
title: "Level 2 Rules - Propagator Rules"
description: "Information on .NET Instrumentation Propagator Rules"
tags: "customization rules level agent .Net instrumentation propagator"
-->

Propagators are an advanced feature integral to correcting agent operation, and overriding any of the default propagators is highly discouraged. You may need to add new propagators, although this scenario isn't fully supported. <!-- There is currently no way to add new propagators to the ELT (CLR2) profiler since they are not currently controlled by the policy file. --> The new instrumentation (CLR4) profiler loads propagators from your policy file. However, the syntax isn't very user-friendly because propagation is complex and propagator rule syntax is subject to change in future versions.

You can disable individual propagator rules in the *customerPolicy.xml* file. Add an override rule with the same signature and set its enabled attribute as *false*. For example:

```xml
  <propagators>
    <method signature="void System.Text.StringBuilder..ctor(System.String)" enabled="false" />
      ...
  </propagators>  
```
