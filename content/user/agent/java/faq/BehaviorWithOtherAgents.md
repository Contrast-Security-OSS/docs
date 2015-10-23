<!--
title: "Running the Contrast Agent with other JavaAgents"
description: "How our Agent behaves in the presence of others"
-->

#### Not everyone plays nice. Contrast is a nice neighbor, but other JavaAgents might not be.

Often times, the Contrast Agent can be run along side other JavaAgents without issue. That being said, there are some known instances
of unfriendly neighbors and some configuration or runtime conflicts.

### Friendly Agents
| Agent                |                                                                                                                                                                                                                                                                    |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| App Dynamics |
| New Relic |
| YourKit |


### Unfriendly Agents
| Agent               | Issue               | Resolution  |                                                                                                                                                                                                                                                                    |
|-------------------------|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CA Wiley Introscope | Running Contrast with Introscope was causing customer's application to throw an exception on the first request | When specifying your JAVA_OPTS, be sure that you declare the Java Agent first. Our instrumentation and Wiley's processes do not work well together, so we need a chance to hook and load first. |
| DynaTrace | When DynaTrace is enabled, Contrast is unable to transform classes properly. As a result, with both JavaAgents enabled, the application will not be able to start. |Unfortunately, the only resolution to this issue currently is to disable one of the JavaAgents. We are not compatible with DynaTrace. |
| JavaMelody | The way JavaMelody works, it duplicates every HTTP Request going to the Application and then draws from these clones to do its own analysis. As a result, the Contrast Agent works n times more on each Request, where n is the number of duplicates JavaMelody has created and calls to said duplicates. This leads to excessive object creation, significant memory impact, and potential application crash. | Unfortunately, the only resolution to this issue currently is to disable one of the JavaAgents. We are not compatible with JavaMelody. |


