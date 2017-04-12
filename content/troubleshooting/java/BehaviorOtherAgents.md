<!--
title: "Running the Contrast Agent with other Agents"
description: "How our Agent behaves in the presence of others"
tags: "troubleshoot java agent APM AppDynamics YourKit Dynatrace NewRelic Wily"
-->

## About Running APM Agents with Contrast Agents

Many customers run multiple agent-based technologies such as Application Performance Management (APM) technologies in parallel with the Contrast Java and .Net agents. Contrast has performed testing of various, known APM agents in parallel with the Contrast agents. We published our notes below initially based on our Java agent findings. We will be publishing .Net agent findings next. If a particular APM vendor or alternative agent vendor is not included in the list, please let us know by documenting an [issue](https://github.com/Contrast-Security-OSS/docs/issues). 

## Java Agent Findings

### Compatible Java Agents
| Agent       | Status                   |
|-------------|--------------------------|
| AppDynamics | Some versions tested without issue.    |
| New Relic   | Run daily with Contrast. |
| YourKit     | Run daily with Contrast. |

### Non-Compatible Java Agents
| Agent               | Issue                                                                                                                                                                                                                                                                                                                                                                                                          | Resolution                                                                                                                                                                                      |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CA Wily Introscope | Running Contrast with Introscope was causing customer's application to throw an exception on the first request.                                                                                                                                                                                                                                                                                                | When specifying your JAVA_OPTS, be sure that you declare the Java Agent first. Our instrumentation and Wily's processes do not work well together, so we need a chance to hook and load first. |
| dynaTrace           | When DynaTrace is enabled, Contrast is unable to transform classes properly. As a result, with both JavaAgents enabled, the application will not be able to start.                                                                                                                                                                                                                                             | Unfortunately, the only resolution to this issue currently is to disable one of the JavaAgents. We are not compatible with DynaTrace.                                                           |
| JavaMelody          | The way JavaMelody works, it duplicates every HTTP Request going to the Application and then draws from these clones to do its own analysis. As a result, the Contrast Agent works n times more on each Request, where n is the number of duplicates JavaMelody has created and calls to said duplicates. This leads to excessive object creation, significant memory impact, and potential application crash. | Unfortunately, the only resolution to this issue currently is to disable one of the JavaAgents. We are not compatible with JavaMelody.                                                          |

