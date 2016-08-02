<!--
title: "Reading Traces"
description: "Information on traces"
-->

Traces represent a series of events along the path of a vulnerability. Reading a trace simply involves understanding what the events are and how they are connected to each other. The default view is to show a trace as **collapsed**, meaning only the start and events are shown:

<a href="assets/images/KB3-b03_1.png" rel="lightbox" title="Collapsed Trace"><img class="thumbnail" src="assets/images/KB3-b03_1.png"/></a>

>**Note:** This trace has two sources that are both used in the final, vulnerable call.


## Expanding A Trace

By clicking on the green folder in the first creation event, you can expand the trace to see all events. Sometimes this can cause information overload, but many times the intermediate events in the vulnerability path can give you great insight into how the vulnerability path was created and how to fix it. For instance, if we expand this trace, we can see the code event where the final vulnerable string was created:

<a href="assets/images/KB3-b03_2.png" rel="lightbox" title="Expanded Trace"><img class="thumbnail" src="assets/images/KB3-b03_2.png"/></a>

Clicking on the **P2O** event row will allow us to see details of that particular event, and see the lines of code where they took place:

<a href="assets/images/KB3-b03_3.png" rel="lightbox" title="Event Details"><img class="thumbnail" src="assets/images/KB3-b03_3.png"/></a>

Now that we've got some insight into the trace as a whole, let's look at the individual type of events that can make up a trace.


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
