<!--
title: "Running the Contrast Agent with other Agents"
description: "How our Agent behaves in the presence of others"
tags: "troubleshoot java agent APM AppDynamics YourKit Dynatrace NewRelic Wily"
-->

## Running APM Agents with Contrast Agents

Many customers run multiple agent-based technologies, such as Application Performance Management (APM) technologies, in parallel with the Contrast Java and .NET agents. Contrast has performed testing of various, known APM agents in parallel with the Contrast agents. Contrast recomends placing the Java Agent before any APM tool in terms of startup order. If a particular APM vendor or alternative agent vendor isn't included in the list, use the **Support** widget in OpenDocs to send a message to Contrast's Customer Support team. 

### Compatible Java Agents

| Agent       | Status                   |
|-------------|--------------------------|
| AppDynamics | Many versions tested without issue. |
| New Relic   | Tested daily by Contrast. |
| YourKit     | Tested daily by Contrast. |
| CA Wily     | Newer versions tested without issue. |
| JaCoCo      | Tested regularly by Contrast, but must be specified as the first `-javaagent`. |
| DynaTrace | Newer versions tested without issue. |                                                                       
| DataDog | Must be specified as the first `-javaagent`. |                                                                                 

> **Note:** There have been rare instances of compatibility issues with very old versions of DynaTrace, Wily and JavaMelody.
