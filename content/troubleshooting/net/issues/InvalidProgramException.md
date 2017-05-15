<!--
title: "InvalidProgramException Using .NET Agent and Ninject"
description: "Troubleshoot guide for .NET agent issues"
-->

## Symptoms

An application using a Ninject version prior to 3.2.3 throws an unhandled ```InvalidProgramException``` when Contrast.NET is running: 

> *InvalidProgramException: Common Language Runtime detected an invalid program.*
> *System.Runtime.CompilerServices.RuntimeHelpers._CompileMethod(IRuntimeMethodInfo method)*
> *System.Reflection.Emit.DynamicMethod.CreateDelegate(Type delegateType)*

This bug is a known issue with Ninject vs. instrumenting profilers: https://github.com/ninject/Ninject/issues/175. This bug was fixed and the PR included newer versions of Ninject: https://github.com/ninject/Ninject/pull/179. Unfortunately Ninject has not released a "Release" version since April 2014. Only "pre-release" versions include the bug fix.

## How To Solve

* Update the application to use Ninject version 3.2.3 (e.g. https://www.nuget.org/packages/Ninject/3.2.3-unstable-012)
**OR**
* Add code to the application to work around the bug in Ninject. The code is located here: https://github.com/ninject/Ninject/issues/175 and can be found by searching for "Kernel.Components.RemoveAll<ISelector>();"
