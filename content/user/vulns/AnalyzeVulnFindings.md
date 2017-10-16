<!--
title: "Analyze Vulnerability Findings"
description: "Explanation of vulnerability findings"
tags: "user vulnerabilities analyze findings quick start guide"
-->

Contrast discovers any code flaws that are in your applications. These vulnerabilities are presented and classified with a severity level to help you prioritize and mark the vulnerabilities as needed. The **Vulnerabilities** page allows you to browse, search and filter through all an application's vulnerabilities. Click on each vulnerability for more details, including guidelines for determining how to resolve them to prevent an attack.

Triaging findings can depend on several factors such as your specific security concerns, assessing the risk to the application and  eliminating false positives. Contrast also provides ways to modify attributes of findings like changing severity levels or merging, when appropriate. 

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
| Auto-remediated | Closed 						  | Reopened			 |

> **Note:** Contrast marks vulnerabilities as "Auto-remediated" based on applicable [Remediation Policy](admin-policymgmt.html#remediate) settings. A user can't apply or change this status. 

## Vulnerability Events

Contrast provides you information on what it observed when navigating your application, including the exact location that the vulnerability was found in the code and how the code was used.

### Source events

The first event in the vulnerability is likely a **source event**, or the start of a scope. You can use the source event's file and line number to see exactly where the call was made. In turn, you can use the stacktrace in the source to understand how the program invoked the notable method. You can also view all the data related to the method, including:

* **Object:** The underlying object instance on which this call is invoked (if not a static call).
* **Return:** The object returned from this call (or null, if void).
* **Parameters:** The objects passed into this call.

### Propagator events

Each vulnerability may contain one or more **propagation events**. These events contain the same information as the **source event**, but they also have a type which indicates how the data was propagated.

> **Example:** A **P2R** propagator takes the data from one or more of the parameters (the "P" in "P2R") and transfers it into the method return value (the "R" in "P2R").

### Tag events

The vulnerability may also contain one or more **tag events**. Tag events are events that add a tag, such as **validated** or **html-encoded**, to a vulnerability. These tags help eliminate false positives and provide clean, reliable results. They also contain the same contextual information as the other types of events. Tag events may occur within a vulnerability, but have nothing to do with the vulnerability discovered.

### Trigger events

The **trigger** is the last event in the vulnerability. The trigger is the call that makes the rule engine in the **Contrast JVM Plugin** perform its analysis, notice the vulnerability and generate the trace.

### False alarms

Contrast only detects the actual behavior of an application. If a vulnerability doesn't really represent a problem, there should be a policy change that will prevent this issue from occurring again. The most commonly reported false alarm is that the application has a custom control that Contrast doesn't know about. 

Customers with **Enterprise** license can add a custom method call to the appropriate tag list in the Contrast policy. 

> **Example:** Your custom HTML-encoder method that takes a string and returns an HTML-encoded string should add the **html-encoded** tag to the data.



