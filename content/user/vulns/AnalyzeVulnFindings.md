<!--
title: "Analyze Vulnerability Findings"
description: "Explanation of vulnerability findings"
tags: "user vulnerabilities analyze findings quick start guide"
-->

Contrast will discover any code flaws. They’ll be presented and classified with a severity to help you prioritize and mark the vulnerabilities as needed. The **Vulnerabilities** page allows you to search, sort and sift through all an application's vulnerabilities. As these weaknesses are discovered, Contrast provides guidelines for determining how to resolve them to prevent an attack.

Triaging findings can depend on several factors such as your specific security concerns, assessing the risk to the application, eliminating false positives, and so forth. Contrast provides ways to modify attributes of findings like severity or merging when appropriate. 

## Vulnerability Behaviors
For each reported vulnerability, you can mark a status and create tags as needed. The following chart shows available statuses and behaviors when a vulnerability is marked and found again.

| Status        | Marked                          | Found Again          |
|---------------|---------------------------------|----------------------|
| Confirmed     | Stays Open                      | No Change            |
| Suspicious    | Stays Open                      | No Change            |
| Not a Problem | Closed - Requires Justification | Stays Closed         |
| Remediated    | Closed                          | Reopened as **Reported** |
| Reported      | Default                         | No Change            |
| Fixed         | Closed                          | Stays Closed         |

## Vulnerability Events
Contrast provides you information on what was observed when navigating your application. We let you know exactly where in the code the vulnerability was found and how the code was used.

### Source Events
The first event in the vulnerability is likely a **source event**, or the start of a scope. You can use the source event's file and line number to see exactly where the call is made. The stacktrace in the source can be used to understand how the program invoked the notable method. You can also view all the data related to the method. This includes:

* **Object:** The underlying object instance on which this call is invoked (if not a static call).
* **Return:** The object returned from this call (or null if void).
* **Parameters:** The objects passed into this call.

### Propagator Events
Each vulnerability may contain one or more **propagation events**. These events contain the same information as the **source event**, but they also have a type which indicates how the data was propagated. For example, a **P2R** propagator takes the data from one or more of the parameters (hence the **P** in **P2R**) and transfers it into the method return value (hence the **R** in **P2R**).

### Tagging Events
The vulnerability may also contain one or more **tag events**. These events also contain the same contextual information as the others. Tag events are events that add a tag, such as **validated** or **html-encoded** to a trace. These tags help eliminate false positives and provide clean, reliable results. Sometimes tag events occur within a trace that have nothing to do with the vulnerability discovered.

### Trigger Events
The **trigger** is the last event in the vulnerability. The trigger is the call that makes the rule engine in the **Contrast JVM Plugin** perform its analysis, notice the vulnerability, and generate the trace.

### False Alarms
Contrast only detects the actual behavior of an application, so if a vulnerability doesn't really represent a problem, there should be a policy change that will prevent this issue from occurring again. The most common of these is that the application has a custom control that Contrast doesn't know about. Generally, the solution is to add your custom method call to the appropriate tag list in the Contrast policy. For instance, your custom HTML-encoder method that takes a String and returns an HTML-encoded String should add the **html-encoded** tag to said data.

>**Note:** Only customers with **Enterprise** licenses have this capability.
