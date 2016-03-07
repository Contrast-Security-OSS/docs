<!--
title: "Level 2 Rules - Propagator Rules"
description: "Information on .NET Instrumentation Propagator Rules"
tags: "customization rules level agent .Net instrumentation propagator"
-->

Propagators are an advanced feature integral to correcting agent operation, and overriding any of the default propagators is highly discouraged.  You may need to add new propagators, although this scenario is not fully supported.  There is currently no way to add new propagators to the ELT (CLR2) profiler since they are not currently controlled by the policy file.  Only the new instrumentation (CLR4) profiler will load propagators from your policy file.  However, the syntax is not very user-friendly, as propagation is complex and propagator rule syntax is subject to change in future versions.