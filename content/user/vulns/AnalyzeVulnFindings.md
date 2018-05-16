<!--
title: "Analyze Vulnerability Findings"
description: "Explanation of vulnerability findings"
tags: "user vulnerabilities analyze findings quick start guide"
-->


The process of triaging vulnerability findings can depend on several factors, such as your specific security concerns, assessing the risk to the application and eliminating false positives. Contrast also provides options to modify attributes of findings - such as changing severity levels or merging - when appropriate. 

## Vulnerability Behaviors

For each reported vulnerability, you can mark a status and create tags as needed. The following chart describes each possible status and behavior when a vulnerability is initially discovered and marked as well as how it's marked if found again.

| Status        | Description                     | Behavior             | If found again       |
|---------------|---------------------------------|----------------------|----------------------|
| Reported      | The default status of a vulnerability after it's discovered by Contrast.                                         | Open                 | No change            | 
| Confirmed     | A user has confirmed that the vulnerability is a true finding by reviewing the source code or exploiting it.                                               | Open                 | No change            |
| Suspicious    | The vulnerability appears to be a true finding based on the details provided in the Contrast application, but requires more investigation to determine its validity. | Open            | No change            |
| Not a Problem | The vulnerability is being accounted for without any source code changes. The user must provide one of the reasons listed below when setting this status. A vulnerability set to this status will **not** revert back to **Reported** if found again. <br><li> **URL is only accessible by trusted power users:** This vulnerability may only exist in specific environments, such as QA, and may not exist in Production environments. </li><li> **False positive:** This vulnerability was reported incorrectly. Contact Support to figure out why Contrast flagged this trace as a vulnerability. </li><li> **Goes through an internal security control:** There is custom, corrective code inside the application that will prevent this vulnerability from being exploited. </li><li> **Attack is defended by an external security control:** There is another component in the environment, such as a WAF, which will prevent this vulnerability from being exploited.</li><li> **Other:** Any reason not listed for which Contrast doesn't need to make any source code changes to fix this vulnerability. </li>                               | Closed (requires justification) | Stays Closed            |
| Remediated    | The vulnerability has been fixed by changing source code or *config* files within the application.                                      | Closed               | Reopened as **Reported** |
| Reported      | The dataflow could be a possible exploit in the application. | Default       | No change |
| Fixed         | The vulnerability has been fixed by changing the source code or a reason given under the **Not A Problem** status. A vulnerability set to this status will **not** revert back to **Reported** if found again. (Available to Admin only.)                                            | Closed               | Stays Closed         |
| Auto-remediated | Contrast hasn't found the vulnerability in a set amount of time, and assumes that it's been fixed, based on your [Remediation Policy](admin-policymgmt.html#remediate) configuration. (A user can't apply or change this status.)                                          | Closed 			    | Reopened			  |


## Vulnerability Events

Contrast provides information on what it observed when navigating your application, including the exact location in which the vulnerability was found in the code and how the code was used.

### Source events

The first event in the vulnerability is likely a **source event**, or the start of a scope. You can use the file and line number of the source event to see exactly where the call was made, and use the stacktrace in the source to understand how the program invoked the notable method. You can also view all the data related to the method, including the:

* **Object:** The underlying object instance on which this call is invoked (if not a static call).
* **Return:** The object returned from this call (or null, if void).
* **Parameters:** The objects passed into this call.

### Propagator events

Each vulnerability may contain one or more **propagation events**. These events contain the same information as the **source event**, but they also have a type that indicates how the data was propagated.

> **Example:** A **P2R** propagator takes the data from one or more of the parameters (the "P" in "P2R") and transfers it into the method return value (the "R" in "P2R").

### Tag events

The vulnerability may also contain one or more **tag events**. Tag events are events that add a tag, such as **validated** or **html-encoded**, to a vulnerability. These tags help eliminate false positives and provide clean, reliable results. They also contain the same contextual information as the other types of events. While tag events may occur within a vulnerability, they have nothing to do with the vulnerability discovered.

### Trigger events

The **trigger** is the last event in the vulnerability. The trigger is the call that makes the rule engine in the **Contrast JVM Plugin** perform its analysis, notice the vulnerability and generate the trace.

### False alarms

Contrast only detects the actual behavior of an application. If a vulnerability doesn't represent a legitimate problem, an administrator should update the applicable polcy to prevent this issue from occurring again. The most commonly reported false alarm is that the application has a custom control that Contrast doesn't know about. 

Customers with **Enterprise-on-Premises** (EOP) licenses can add a custom method call to the appropriate tag list in the Contrast policy. 

> **Example:** Your custom HTML-encoder method that takes a string and returns an HTML-encoded string should add the **html-encoded** tag to the data.



