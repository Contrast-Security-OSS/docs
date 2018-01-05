<!--
title: "InvalidProgramException Using .NET Agent and Ninject"
description: "Troubleshoot guide for .NET agent issues"
-->

## Issue

An application using a Ninject version prior to 3.2.3 throws an unhandled `InvalidProgramException` when the .NET agent is running: 

> *InvalidProgramException: Common Language Runtime detected an invalid program.*
> *System.Runtime.CompilerServices.RuntimeHelpers._CompileMethod(IRuntimeMethodInfo method)*
> *System.Reflection.Emit.DynamicMethod.CreateDelegate(Type delegateType)*

This bug is a known issue with Ninject vs. instrumenting profilers: https://github.com/ninject/Ninject/issues/175. This bug was fixed and the PR included newer versions of Ninject: https://github.com/ninject/Ninject/pull/179. 

## Solution

Use one of the following strategies to resolve the issue. 

* Update the application to use [Ninject](https://www.nuget.org/packages/Ninject/) version 3.2.3 (e.g., https://www.nuget.org/packages/Ninject/3.2.3-unstable-012) or greater.

* Add code to the application to work around the bug in Ninject. You can find the code at https://github.com/ninject/Ninject/issues/175 by searching for "Kernel.Components.RemoveAll<ISelector>();".
