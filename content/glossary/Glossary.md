<!--
title: "Glossary"
description: "Glossary of common terms"
tags: "Contrast terms glossary"
-->


## agent

A Contrast agent is code installed in a web application that may run in Protect or Assess  mode.

---

## account takeover (ATO)

Account takeover (ATO) is an umbrella term for attacks intended to steal login credentials or otherwise break authentication in web applications.

---

## application

An application is a logical grouping of customer code analyzed by a Contrast agent. This grouping is idiomatic to the agent's language and platform; dynamic languages consider the entire process a single application, while the .NET agent follows the same rules as IIS for identifying multiple applications in the same process.

---

## Assess

Contrast Assess is a set of rules designed to perform highly accurate data flow analysis to detect vulnerabilities when applications are tested with normal test data. Assess is an agent mode supported by the Java, .NET, .NET Core, Node.js, Ruby and Python agents.

---

## attack

An attack represents one or more attack events that occur within a discrete time frame.

---

## attack event

An attack event represents one HTTP request against a protected application with one or more user inputs that appear to be attack vectors.

---

## brute force attack

A brute force attack consists of an attacker submitting many passwords or passphrases with the hope of eventually guessing correctly. The attacker systematically checks all possible passwords and passphrases until the correct one is found.

---

## command injection

Command injection is an attack in which the goal is execution of arbitrary commands on the host operating system via a vulnerable application. Command injection attacks are possible when an application passes unsafe user supplied data (e.g., forms, cookies or HTTP headers) to a system shell.

---

## Contrast

Contrast is a security technology to assess your application for vulnerabilities and protect it from attacks. Contrast finds vulnerabilities by instrumenting the application and virtual machine with sensors, and watching the stream of generated events for patterns that represent vulnerabilities. The term encompasses the entire suite of technologies around this product.

---

## Contrast Service

The Contrast Service, or Contrast connector, is an executable written in Go that handles communication with the Contrast web interface for the Ruby, Python and Proxy agents. For the Proxy agent, it also acts as an analysis agent that can apply Protect rules to models representing HTTP requests.

---

## creation event

When an untrusted data source provides data to an application, Contrast generates a creation event (or source event) that documents what occurred. Contrast stores this information with the tracked data object that it created, and uses it to describe the source of the untrusted data, if a rule generates a vulnerability.

---

## credential stuffing

Credential stuffing is the automated injection of breached username and password pairs to fraudulently gain access to user accounts. This is a subset of the brute force attack category.

---

## cross-site scripting (XSS)

Cross-site scripting (XSS) is a type of injection in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user. Flaws that allow these attacks to succeed are quite widespread; they can occur anywhere a web application uses input from a user within the output it generates without validating or encoding it.

---

## custom event

Each custom event contains the runtime values of the underlying object, the parameters to the method invoked, the return from the method and the runtime stack vulnerability.

---

## duplicate trace elimination

When the Contrast agent detects the same vulnerability conditions over and over in an application, this would normally cause the same vulnerability to be generated repetitively. However, to address this, there is duplicate trace elimination logic in both the agent and the Contrast web interface to eliminate duplicate vulnerabilities.

---

## environment

An environment is used to organize applications under one of three categories: Development, QA and Production.

---

## event

In Assess, an event is generated when the running application calls code that Contrast instrumented with a sensor.

---

## Hub

Hub is a web application where on-premises customers can download the web app installer and license file.

---

## IP blacklist

An IP blacklist is a rule that immediately blocks any HTTP request from the listed IP address.

---

## IP whitelist

An IP whitelist is a rule that allows any HTTP request from the listed IP address.

---

## Java agent

The Java agent is a Contrast agent that runs in Assess or Protect for applications written in Java.

---

## library

A library is any packaged, third-party code included in an application. Languages may use specific terms - for example, gems for Ruby, packages for Node, JARs for Java - but they are all represented as "libraries."

---

## monitor

In Protect, monitor tracks attacks through the application, but doesn't cause an exception to be thrown if a successful attack event occurs. However, the agent reports the event to Contrast with all of the metadata that the agent gathered about the attack event.

---

## .NET agent

The .NET agent is a Contrast agent that runs in Assess or Protect for .NET web applications.

---

## .NET Core agent

The .NET Core agent is a Contrast agent that runs in Assess or Protect for .NET Core web applications.

---

## Node.js agent

The Node.js agent is a Contrast agent that runs in Assess or Protect for Node.js web applications.

---

## path traversal

Path traversal aims to access files and directories stored outside the web root folder. By manipulating variables that reference files with “dot-dot-slash" (../) sequences and its variations, or by using absolute file paths, an attacker may be able to access arbitrary files and directories stored on a file system, including application source code or configuration and critical system files. You should note that access to files is limited by system operational access control (such as locked or in-use files on the Microsoft Windows operating system).

---

## policy

A policy is the set of rules enabled on a given application. It may also refer to a Compliance Policy, Library Policy or Remediation Policy.

---

## policy file

A policy file contains all the rulepacks to use in the agent along with some configuration information.

---

## preflight

Preflight is a message sent to Contrast by agents in Assess. Contrast responds with a message indicating which vulnerabilities the agent should return. This is an optimization step to prevent duplicate vulnerabilities.

---

## probe

A probe is an attack event that looks like an attack, but didn't touch any vulnerable code in the protected application. It is displayed as a Probed event.

---

## propagation

Propagation occurs when untrusted data is transferred to another object. When propagation happens in a running program, that generates a propagation event. The propagation rules within the rules in use by your agent determine how propagation is modeled in Contrast.

---

## propagation event

A propagation event is generated when a propagation condition is met in a running program as defined by a propagation rule. When the conditions of the rule are met, a propagation event is generated that tracks the tainted data and vulnerability information from the source object to the destination object. The destination object is considered to be tracked.

---

## propagation rule

To model how propagation actually works in a running application, Contrast uses propagation rules. The rules identify the methods that cause propagation and how the propagation passes from one object to another. When Contrast models how a method might cause propagation, Contrast considers the source and the destination. These may be any combination of an object; the parameters to a method; and the result of the method as well as untrusted data propagating from one source to many destinations, or many destinations to a single source.

---

## propagator

A propagator is a method that accepts tainted input and stores or produces tainted output. Propagators and their propagation behavior are identified and defined by propagation rules.

---

## Protect

Protect is a set of rules and features designed for production environments to monitor and block attacks. Protect is  supported by the Java, .NET, Node.js, Ruby, Python and Proxy agents. This mode tracks values from sources, performs an initial analysis, and then examines values at sinks to determine if an attack is taking place.

---

## Proxy agent

The Proxy agent is a Contrast agent that runs in Protect. It consists of an open-source module for NGINX that forwards HTTP request data to the Contrast Service via a UNIX socket. Analysis is performed in the Contrast Service, and a response is sent back to NGINX that indicates if the HTTP request should be allowed to proceed to the proxied application. The rules for the Proxy agent are primarily based on the OWASP ModSecurity core rule set.

---

## Python agent

The Python agent is a Contrast agent that runs in Protect and Assess.

---

## Ruby agent

The Ruby agent is a Contrast agent that runs in Protect and Assess.

---

## rule

A rule refers to the specific logic required for Contrast to identify a vulnerability in Assess or block an attack event in Protect while monitoring a running application.

If the pattern is matched, the agent generates a vulnerability to send to Contrast. Each pattern consists of a series of methods ending in a trigger. Each of these methods can also be required. If these methods are detected, the pattern does not match.

---

## rulepack

A rulepack identifies a collection of rules. A core set of rules are delivered with Contrast, but can be customized and supplemented with custom rules per organization and per application if the customer's license allows.

---

## scope

A method scope can be defined for a rule. When an application's execution leaves the scope defined for a rule, the agent checks the conditions of the rule as defined by its events to determine if a vulnerability should be generated.

---

## security control

A security control is a security mechanism that performs an action to make input data safe, such as validate input, encode output and check for data level authorization. Security controls that don't specifically look at data to make a security check - such as validating whether a user is authorized to invoke a particular method - are simply defined as events, which can be monitored by a rule.

---

## sensor

A sensor is the instrumentation that Contrast adds to the running application. The sensor's job is to gather data from the immediate method context, generate a simple event, and send it to the Contrast agent.

---

## sink

Sink is the method, object or other code in which unsanitized and/or unvalidated user input from an untrusted data source could cause damage to an application.


---

## SQL injection (SQLi)

SQL injection (SQLi) is a class of vulnerabilities in which the attacker can [change the meaning of a database query](https://xkcd.com/327/).

---

## trace

A trace is a series of events that represent a vulnerability. Traces are generated by the agent any time that a series of events matches a runtime rule.

---

## tracked

When data flows from an untrusted data source into an object, that object is considered to be "tracked". When data from a tracked object flows into another object through a propagator, that object is also tracked. Events can be defined in rules that consider whether an object is tracked or not.

---

## trigger

A trigger is part of a rule pattern that indicates that the Contrast agent should go back through the collected events to see if that rule has been matched.

---

## untrusted data source

An untrusted data source is a source of dangerous input to the application. It typically comes directly from the end user and an HTTP request, but it could be from a back-end partner feed, the application's database or any other unsafe source.
___

## vulnerability

A vulnerability is a [hole or a weakness](https://www.owasp.org/index.php/Category:Vulnerability) in your application code, according to OWASP. There are [many different types of vulnerabilities](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project) that may be used by an attacker to cause harm.


