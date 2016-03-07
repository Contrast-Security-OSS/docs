<!--
title: "Why The Number Of URLs In An App Increases"
description: "Explanation as to why the number of URLs increase"
tags: "TeamServer URL entries troubleshooting"
-->

Contrast is an **Interactive Application Security Testing (IAST)** tool. As such, it is only aware of sections of the application which it has seen. In order to effectively monitor your application, the Contrast agent needs to be running on your server while the application is being exercised. During this phase, Contrast will report the new URLs as it encounters them. The same is true of new URLs added to your application after the initial introduction of the agent. 

Most of the time, the amount that it grows over time will scale down logarithmically, and the minor growth you'll see won't have a significant affect on your overall score.
