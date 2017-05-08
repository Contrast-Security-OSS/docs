<!--
title: "Java Agent Overview"
description: "Overview of the Java Agent"
tags: "installation Java agent overview introduction"
-->

The Java Agent analyzes the behavior of Java applications running on J2EE containers, newer frameworks like netty, Play or Vert.X, fatjar/microservice applications like SpringBoot, or even regular old desktop Java applications. If there's a JVM, the Java Agent can get security insights into it.

## Usage
To start analyzing an application, install the Java Agent by adding it as ```-javaagent``` JVM parameter, and then simply use it as you normally would: if it's a web application, just click on links, submit forms using normal data, etc. The Java Agent's sensors will gather information about the application's security, architecture and libraries. The results of the agent's analysis can be viewed on Contrast TeamServer.
