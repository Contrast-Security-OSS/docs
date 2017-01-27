<!--
title: "Running Contrast with Other Agents"
description: "Notes on Contrast's compatibility with other agents"
tags: "node agent appdynamics newrelic compatibility"
-->

## About Running APM Agents With Contrast Agents

Many customers run multiple agent-based technologies such as Application Performance Management (APM) technologies in parallel with Contrast. Contrast has performed testing of various, known APM agents in parallel with the Contrast agents. We published our notes below, initially based on our Java agent findings. We will be publishing .NET agent findings next. If a particular APM vendor or alternative agent vendor is not included in the list, please let us know by documenting an [issue](https://github.com/Contrast-Security-OSS/docs/issues).

### Compatible Agents
| Agent       | Status                   |
|-------------|--------------------------|
| AppDynamics | Tested without issue.    |
| New Relic   | Run daily with Contrast. |
