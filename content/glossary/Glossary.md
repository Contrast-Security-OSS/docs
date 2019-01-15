<!--
title: "Glossary"
description: "Glossary of terms"
tags: "TeamServer terms troubleshooting glossary"
-->


## Contrast

**Contrast** is a new security technology for finding vulnerabilities in an application. It finds vulnerabilities by instrumenting the application and virtual machine with sensors and watching the stream of generated events for patterns that represent vulnerabilities. The term **Contrast** encompasses the entire suite of technologies around this product, including the agents and Contrast UI.

---

## Contrast JVM Plugin

The **Contrast JVM Plugin** is a Java agent that is installed in the application server that is hosting the application(s) to be analyzed. This **engine** generates **traces** that contain vulnerability results detected by the **engine** while the application is operating. It periodically sends these **traces** to its associated **Contrast UI** for further analysis by Contrast users.

---

## Contrast UI 

The **Contrast UI** is a web application that receives **traces** from Contrast **engines**, and allows the analyst to view and triage the results.

---

## Creation Event

When an **untrusted data source** provides data to an application, Contrast generates a **Creation Event** (or **Source Event**) that documents what occurred. Contrast stores this information with the **tracked** data object that it created, and uses it to describe the source of the untrusted data, if a **rule** generates a **trace**.

---

## Custom Event

Each **event** contains the runtime values of the underlying **object**, the parameters to the method invoked, the return from the method, and the runtime stack trace.

---

## Duplicate Trace Elimination

The Contrast **engine** detects the same vulnerability conditions over and over in an application; this would normally cause the same **trace** to be generated repetitively. To address this, there is **duplicate trace elimination** logic in both the **engine** and the **Contrast UI** to eliminate duplicate traces.

---

## Event

An event is generated when the running application calls code that Contrast instrumented with a *sensor*.

---

## Policy File

A **policy file** contains all the **rulepacks** to use in the **engine** along with some configuration information.

---

## Propagation

In Contrast, **propagation** happens anytime untrusted data is transferred to another *object*. When propagation happens in a running program, that generates a *propagation event*. How propagation is actually modeled in Contrast is defined by the *propagation rules* within the *rules* in use by your *engine*.

---

## Propagation Event

A **propagation event** is generated when a *propagation* condition is met in a running program as defined by a *propagation rule*. When the conditions of the *rule* are met, a *propagation event* is generated that tracks the tainted data and *trace* information from the source object to the destination object. The destination object is considered *tracked*.

---

## Propagation Rule

To model how *propagation* actually works in a running application, we write **propagation rules**. These rules identify the methods that cause *propagation* and how the *propagation* passes from one object to another. When we model how a method might cause *propagation*, we consider the *source* and the destination. These may be any combination of an *object*, the parameters to a method, and the result of the method. For example, the ```StringBuffer.append()``` method propagates untrusted data from the first parameter to the *object* (the ```StringBuffer```). This is a **P2O Propagation** in Contrast terms. Similarly, the ```toString()``` method on a tracked *object* causes the untrusted data to propagate from the *object* to the method result (the String returned by ```toString()```). In Contrast this is an **O2R Propagation**. Again, any combination is possible, including untrusted data propagating from one source to many destinations, or even many destinations to a single source.

---

## Propagator

A **propagator** is a method that accepts tainted input and stores or produces tainted output. Propagators and their propagation behavior are identified and defined by *propagation rules*.

---

## Rule

A **rule** defines a pattern for the *engine* to look for while monitoring a running application. If the pattern is matched, the *engine* generates a *trace* to send to the *TeamServer*. Each pattern consists of a series of methods ending in a *trigger*. Each of these methods can also be required. If these methods are detected, the pattern does not match.

---

## Rulepack

A **rulepack** identifies a collection of *rules*. A core set of *rules* are delivered with Contrast, but can be customized and supplemented with custom *rules* per organization and per application if the customer's license allows.

---

## Scope

A method **scope** can be defined for a *rule*. When an application's execution leaves the scope defined for a *rule*, the *engine* will check the conditions of the *rule* as defined by its *events* to determine if a *trace* should be generated.

---

## Security Control

A **security control** is a security mechanism that does something to make input data safe, such as validate input, encode output, check for data level authorization, etc. Security Controls that don't specifically look at data to make a security check, such as validating whether a user is authorized to invoke a particular method, are simply defined as *events*, which can be monitored by a *rule*.

---

## Sensor

A **sensor** is the instrumentation that Contrast adds to the running application. The sensor's job is to gather data from the immediate method context, generate a simple *event*, and send it to the Contrast *engine*.

---

## Source

This is the short name for an **untrusted data source**.

---

## Trace

A **trace** is a series of events that represent a vulnerability. Traces are generated by the *engine* anytime that a series of events matches a runtime *rule*. Traces can be viewed in the *TeamServer*.

---

## Tracked

When data flows from an *untrusted data source* into an *object*, that *object* is considered **tracked**. When data from a tracked *object* flows into another *object* through a *propagator*, then that *object* is also tracked. *Events* can be defined in *rules* that consider whether an *object* is tracked or not as part of the *event* definition.

---

## Trigger

A **trigger** is part of a *rule* pattern that indicates that the Contrast *engine* should go back through the collected *events* to see if that *rule* has been matched.

---

## Untrusted Data Source

This is a **source** of dangerous input to the application. It's typically directly from the end user and an HTTP request, but it could be from a back-end partner feed, the application's own database, or any other source considered unsafe.







