<!--
title: "Level 2 Rules - Propagator Rules"
description: "Information on .NET Instrumentation Propagator Rules"
tags: "installation policy customization rules level agent .Net instrumentation propagator"
-->

Propagators are an advanced feature integral to correcting agent operation, and overriding any of the default propagators is highly discouraged. You may need to add new propagators, although this scenario isn't fully supported. The syntax isn't very user-friendly because propagation is complex and propagator rule syntax is subject to change in future versions.

You can disable individual propagator rules in the *customerPolicy.xml* file. Add an override rule with the same signature and set its enabled attribute as *false*. For example:

```xml
  <propagators>
    <method assembly="mscorlib" signature="void System.Text.StringBuilder..ctor(System.String)" enabled="false" />
      ...
  </propagators>  
```
