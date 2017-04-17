<!--
title: "Analyze Findings"
description: "Explanation of vulnerability findings"
tags: "user vulnerabilities analyze findings quick start guide"
-->


## Source Events

The first event in the trace is likely a **source event**, or the start of a scope. You can use the source event's file and line number to see exactly where the call is made. The stacktrace in the source can be used to understand how the program invoked the notable method. You can also view all the data related to the method. This includes:

* **Object** - the underlying object instance on which this call is invoked (if not a static call)
* **Return** - the object returned from this call (or null if void)
* **Parameters** - the objects passed into this call

## Propagator Events

Each trace may contain one or more **propagation events**. These events contain the same information as the *source event*, but they also have a type which indicates how the data was propagated. For example a **P2R** propagator takes the data from one or more of the parameters (hence the **P** in **P2R**) and transfers it into the method return value (hence the **R** in **P2R**).


## Tagging Events

The trace may also contain one or more **tag events**. These events also contain the same contextual information as the others. Tag events are events that add a tag, such as **validated** or **html-encoded** to a trace. These tags help eliminate false positives and provide clean, reliable results. Sometimes tag events occur within a trace that have nothing to do with the vulnerability discovered.

## Trigger Events

The **trigger** is the last event in the trace. The trigger is the call that makes the rule engine in the **Contrast JVM Plugin** perform its analysis, notice the vulnerability, and generate the trace.


## False Alarms

Contrast only detects the actual behavior of an application, so if a trace doesn't really represent a problem, there should be a policy change that will prevent this issue from occurring again. The most common of these is that the application has a custom control that Contrast doesn't know about. Generally the solution is to add your custom method call to the appropriate tag list in the Contrast policy. For instance, your custom HTML-encoder method that takes a String and returns an HTML-encoded String should add the **html-encoded** tag to said data.

>**Note:** Only customers with **Enterprise** licenses have this capability.
