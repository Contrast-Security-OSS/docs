<!--
title: "Java Agent Overview"
description: "Overview of the Java Agent"
tags: "installation Java agent overview introduction"
-->

The Contrast Java agent analyzes the behavior of Java applications running on J2EE containers; newer frameworks like Netty, Play or Vert.X; FatJar/microservice applications like SpringBoot; or even regular desktop Java applications. If there's a JVM, the Java agent can get security insights.

## How It Works

To start analyzing an application, [install the Java agent](installation-javastandard.html) by adding it as `-javaagent` JVM parameter. After installation, continue to use the application as you normally would. (If it's a web application, just click on links, submit forms using normal data, and so forth.) The Java agent's sensors gather information about the application's security, architecture and libraries. You can see the results of the agent's analysis in the Contrast UI.
