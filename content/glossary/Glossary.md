<!--
title: "Glossary"
description: "Glossary of common terms"
tags: "Contrast terms glossary"
-->


## Agent 

A Contrast agent is code installed in a web **application** that may run in **Protect** or **Assess** mode.

---

## Account Takeover 

Account takeover (ATO) is an umbrella term for attacks intended to steal login credentials or otherwise break authentication in web **applications**.

---

## Application

An application is a logical grouping of customer code analyzed by a Contrast **agent**. This grouping is idiomatic to the agent's language and platform; dynamic languages consider the entire process a single application, while the .NET agent follows the same rules as IIS for identifying multiple applications in the same process. 

---

## Assess

Contrast Assess is a set of **rules** designed to perform highly accurate data flow analysis to detect **vulnerabilities** when **applications** are tested with normal test data. Assess is an **agent** mode supported by the Java, .NET, Node and Ruby agents.

---

## Attack

An attack represents one or more **attack events** that occur within a discrete time frame.

---

## Attack Event

An attack event represents one HTTP request against a protected **application** with one or more user inputs that appear to be attack vectors.

---

## Brute Force Attack

A brute force attack consists of an attacker submitting many passwords or passphrases with the hope of eventually guessing correctly. The attacker systematically checks all possible passwords and passphrases until the correct one is found.

---

## Command Injection

Command injection is an **attack** in which the goal is execution of arbitrary commands on the host operating system via a vulnerable **application**. Command injection attacks are possible when an application passes unsafe user supplied data (e.g., forms, cookies or HTTP headers) to a system shell.

---

## Contrast

Contrast is a security technology to **Assess** your **application** for vulnerabilities and **Protect** it from **attacks**. Contrast finds vulnerabilities by instrumenting the application and virtual machine with sensors, and watching the stream of generated events for patterns that represent vulnerabilities. The term encompasses the entire suite of technologies around this product, including the **agents** and **Contrast UI**.

---

## Contrast Service

The Contrast Service is an executable written in Go that handles communication with the **Contrast UI** for the Ruby, Python and Proxy **agents**. For the Proxy agent, it also acts as an analysis **engine** that can apply Protect rules to models representing HTTP requests.

---

## Contrast UI 

The **Contrast UI** is the web interface from which users download agents and view information on their **applications** and reported **vulnerabilities**. This also includes the REST API to which the **agents** report data.

---

## Creation Event

When an **untrusted data source** provides data to an application, Contrast generates a creation event (or source event) that documents what occurred. Contrast stores this information with the **tracked** data object that it created, and uses it to describe the source of the untrusted data, if a **rule** generates a **trace**.

---

## Credential Stuffing

Credential stuffing is the automated injection of breached username and password pairs to fraudulently gain access to user accounts. This is a subset of the **brute force attack** category.

---

## Cross-Site Scripting

Cross-site scripting (XSS) is a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS **attacks** occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user. Flaws that allow these attacks to succeed are quite widespread; they can occur anywhere a web application uses input from a user within the output it generates without validating or encoding it.

---

## Custom Event

Each **event** contains the runtime values of the underlying **object**, the parameters to the method invoked, the return from the method and the runtime stack trace.

---

## Duplicate Trace Elimination

The Contrast **engine** detects the same vulnerability conditions over and over in an application; this would normally cause the same **trace** to be generated repetitively. To address this, there is **duplicate trace elimination** logic in both the **engine** and the **Contrast UI** to eliminate duplicate traces.

---

## Engine

<!-- Text goes here.  -->

See **Agent**. 

---

## Enterprise-on-Premises (EOP)

Enterprise-on-Premises (EOP) refers to **Contrast UI** instances that customers run and manage within their own internal networks. Many customers have InfoSec policies that forbid sending **vulnerability** or **attack** data to the cloud; as a result, these customers need an "on-premises" offering of Contrast. Contrast pushes EOP updates to **Hub** on a monthly basis.

---

## Environment

Within the **Contrast UI**, an environment is used to organize **applications** under one of three categories: Development, QA and Production.

---

## Event

In Assess mode, an event is generated when the running application calls code that Contrast instrumented with a **sensor**.

---

## Hub

Hub is a web application that **Enterprise-on-Premises** customers can use to download the "EOP Installer" of the Contrast UI and different versions of each agent.

---

## IP Blacklist

An IP blacklist is a **rule** configured in the Contrast UI that immediately blocks any HTTP request from the listed IP address. 

---

## IP Whitelist

An IP whitelist is a **rule** configured in Contrast UI that allows any HTTP request from the listed IP address.

---

## Java Agent

The Java agent is a Contrast **agent** that runs in **Assess** or **Protect** mode for applications written in Java. 

---

## Library

A library is any packaged, third-party code included in the **application**. Languages may use specific terms - e.g., gems for Ruby, packages for Node, JARs for Java - but they are all represented as "libraries" in the Contrast UI. 

---

## Monitor

Monitor is a **Protect** rule mode that **tracks** attacks through the application, but doesn't cause an exception to be thrown if a successful **attack event** occurs. However, the agent reports the event to the Contrast UI with all of the metadata that the agent gathered about the attack event.

---

## .NET Agent

The .NET agent is a Contrast **agent** that runs in **Assess** or **Protect** mode for .NET web applications.

---

## Object

<!-- Text goes here.  -->

---

## Path Traversal

Path Traversal aims to access files and directories stored outside the web root folder. By manipulating variables that reference files with “dot-dot-slash" (../) sequences and its variations, or by using absolute file paths, an attacker may be able to access arbitrary files and directories stored on a file system, including application source code or configuration and critical system files. You should note that access to files is limited by system operational access control (such as locked or in-use files on the Microsoft Windows operating system).

---

## Policy

A policy is the set of rules enabled on a given application. It may also refer to a Compliance Policy, Library Policy or Remediation Policy.

---

## Policy File

A policy file contains all the **rulepacks** to use in the **engine** along with some configuration information.

---

## Preflight

Preflight is a message sent to the Contrast UI by agents in **Assess** mode. The **Contrast UI** responds with a message indicating which **traces** the agent should send to the UI. This is an optimization step to prevent the UI from processing duplicate traces.

---

## Probe 

An **attack event** that looks like an attack, but didn't touch any vulnerable code in the protected application, is displayed in the **Contrast UI** as a Probe event.

---

## Propagation

Propagation occurs when untrusted data is transferred to another **object**. When propagation happens in a running program, that generates a **propagation event**. The **propagation rules** within the rules in use by your **engine** determine how propagation is modeled in Contrast.

---

## Propagation Event

A **propagation event** is generated when a **propagation** condition is met in a running program as defined by a **propagation rule**. When the conditions of the **rule** are met, a propagation event is generated that tracks the tainted data and **trace** information from the source object to the destination object. The destination object is considered to be **tracked**.

---

## Propagation Rule

To model how **propagation** actually works in a running application, Contrast uses **propagation rules**. The rules identify the methods that cause propagation and how the propagation passes from one object to another. When Contrast models how a method might cause propagation, Contrast considers the **source** and the destination. These may be any combination of an **object**; the parameters to a method; and the result of the method as well as untrusted data propagating from one source to many destinations, or many destinations to a single source. 

---

## Propagator

A propagator is a method that accepts tainted input and stores or produces tainted output. Propagators and their propagation behavior are identified and defined by **propagation rules**.

---

## Protect

Protect is a set of rules and features designed for Production **environments** to monitor and block **attacks**. Protect is considered an agent mode and, is supported by the Java, .NET, Node, Ruby, Python and Proxy agents. This mode tracks values from sources, performs an initial analysis, and then examines values at **sinks** to determine if an attack is taking place.

---

## Proxy Agent

The Proxy agent is a Contrast **agent** that runs in **Protect** mode. It consists of an open-source module for NGINX that forwards HTTP request data to the **Contrast Service** via a UNIX socket. Analysis is performed at the Service, and a response is sent back to NGINX that indicates if the HTTP request should be allowed to proceed to the proxied application. The **rules** for the Proxy agent are primarily based on the OWASP ModSecurity core rule set.

---

## Python Agent

The Python agent is a Contrast **agent** that run in **Protect** mode only.

---

## Ruby Agent

The Ruby agent is a Contrast **agent** that runs in **Protect** and **Assess** modes.

---

## Rule

A rule refers to the specific logic required for Contrast to identify a vulnerability in **Assess** mode or block an attack event in **Protect** mode while monitoring a running application.

If the pattern is matched, the engine generates a **trace** to send to the **Contrast UI**. Each pattern consists of a series of methods ending in a **trigger**. Each of these methods can also be required. If these methods are detected, the pattern does not match.

---

## Rulepack

A **rulepack** identifies a collection of **rules**. A core set of rules are delivered with Contrast, but can be customized and supplemented with custom rules per organization and per application if the customer's license allows.

---

## Software as a Service (SaaS)

Software as a Service (SaaS) refers to a set of Contrast UI environments hosted in AWS. Updates are pushed to SaaS as desired.

---

## Scope

A method **scope** can be defined for a **rule**. When an application's execution leaves the scope defined for a *rule*, the *engine* will check the conditions of the rule as defined by its **events** to determine if a trace should be generated.

---

## Security Control

A **security control** is a security mechanism that does something to make input data safe, such as validate input, encode output, check for data level authorization, etc. Security Controls that don't specifically look at data to make a security check, such as validating whether a user is authorized to invoke a particular method, are simply defined as **events**, which can be monitored by a **rule**.

---

## Sensor

A sensor is the instrumentation that Contrast adds to the running application. The sensor's job is to gather data from the immediate method context, generate a simple **event**, and send it to the Contrast **engine**.

---

## Sink 

Sink is the method, object or other code in which unsanitized and/or unvalidated user input from an **untrusted data source** could cause damage to an application.

---

## Source

The abbreviated name for an **untrusted data source**.

---

## SQL Injection

SQL Injection is a class of **vulnerabilities** in which the attacker can change the meaning of a database query. See [Little Bobby Tables](https://xkcd.com/327/) for examples. 

---

## SQLi

See **SQL Injection**. 

---

## Trace

A trace is a series of events that represent a vulnerability. Traces are generated by the **engine** any time that a series of events matches a runtime **rule**. 

---

## Tracked

When data flows from an **untrusted data source** into an **object**, that object is considered to be "tracked". When data from a tracked object flows into another object through a **propagator**, that object is also tracked. **Events** can be defined in **rules** that consider whether an object is tracked or not.

---

## Trigger

A trigger is part of a **rule** pattern that indicates that the Contrast **engine** should go back through the collected **events** to see if that rule has been matched.

---

## Untrusted Data Source

An untrusted data source is a source of dangerous input to the **application**. It typically comes directly from the end user and an HTTP request, but it could be from a back-end partner feed, the application's database or any other source considered unsafe.

___

## Vulnerability

<!-- Text goes here. -->

___

## XSS

See **Cross-Site Scripting**.

