<!--
title: "Run the Contrast Agent with other Agents"
description: "How the Contrast agent behaves with others"
tags: "troubleshoot java agent APM AppDynamics YourKit Dynatrace NewRelic Wily"
-->

## Run APM and Contrast Agents 

Many customers run multiple agent-based technologies, such as Application Performance Management (APM) technologies, in parallel with the Contrast Java and .Net agents. Contrast performed testing of known APM agents used with the Contrast agents; the notes given below are based on the initial findings from the Contrast Java agent. 

> **Note:** If a particular APM vendor or alternative agent vendor is not included in the list, please let us know by documenting an [issue](https://github.com/Contrast-Security-OSS/docs/issues). 

## Java Agent Findings

### Compatible Java Agents

| Agent       | Status                   |
|-------------|--------------------------|
| AppDynamics | Some versions tested without issue.    |
| New Relic   | Run daily with Contrast. |
| YourKit     | Run daily with Contrast. |

### Incompatible Java Agents

| Agent               | Issue                                                                                                                                                                                                                                                                                                                                                                                                  | Solution                                                                                                                                                                                      |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CA Wily Introscope | Running Contrast with Introscope caused users' application to throw an exception on the first request.                                                                                                                                                                                                                                                                                                | When specifying your `JAVA_OPTS`, be sure that you declare the Java agent first. Contrast's instrumentation and Wily's processes don't work well together; but, you can mitigate conflicts by giving Contrast a chance to hook and load first. |
| Dynatrace           | When Dynatrace is enabled, Contrast is unable to transform classes properly. As a result, the application won't be able to start with both Java agents enabled.                                                                                                                                                                                                                                             | Unfortunately, the only existing solution to this issue is to disable one of the Java agents. Contrast isn't compatible with Dynatrace.                                                           |
| JavaMelody          | JavaMelody duplicates every HTTP Request going to the application, and then draws from these clones to do its own analysis. As a result, the Contrast agent works *n* times more on each request, where *n* is the number of duplicates JavaMelody created and calls to said duplicates. This leads to excessive object creation, significant memory impact and potential application crash. | Unfortunately, the only existing solution to this issue is to disable one of the Java agents. Contrast isn't compatible with JavaMelody.                                                          |

