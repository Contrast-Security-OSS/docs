<!--
title: "The Number Of URLs in an Application Increases"
description: "Why the number of URLs increase"
tags: "troubleshoot setup FAQ Contrast UI URL entries"
-->

Contrast is an **Interactive Application Security Testing (IAST)** tool. Therefore, it's only aware of the sections of an application that it's seen. 

To effectively monitor your application, the Contrast agent must be running on your server while the application is exercised. During this phase, Contrast reports the new URLs as it encounters them. The same process happens when new URLs are added to your application after the initial introduction of the agent. In most cases, the amount that the number of URLs grow over time scales down logarithmically, and the minor growth you'll see won't have a significant effect on your overall score.
