<!--
title: "Level 2 Rules - Propagator Rules"
description: "Information on .NET Instrumentation Propagator Rules"
tags: "installation policy customization rules level agent .Net instrumentation propagator"
-->

Propagators are an advanced feature integral to correcting agent operation. Contrast highly discourages overriding any of the default propagators. You may need to add new propagators, although this scenario isn't fully supported. The syntax isn't very user-friendly because propagation is complex and propagator rule syntax is subject to change in future versions.

You can disable individual propagator rules in the *customerPolicy.xml* file. Add an override rule with the same signature, and set its enabled attribute as `false`. 

> Example:
 ```xml
   <propagators>
     <method signature="void System.Text.StringBuilder..ctor(System.String)" enabled="false" />
       ...
   </propagators>  
 ```
