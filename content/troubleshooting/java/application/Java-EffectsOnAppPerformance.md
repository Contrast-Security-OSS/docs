<!--
title: "How Does The Java Agent Affect App Performance?"
description: "Tips to improve app performance with the Java agent"
tags: "troubleshoot java agent performance latency startup"
-->

Contrast's platform has been designed from the ground up to provide maximum value to customers across the SDLC, while minimizing overhead. The following sections discuss some general considerations, as well as considerations specific to Contrast Assess and Contrast Protect.

## General Considerations

## Startup Time

When you start your server with Contrast, you'll see a few messages that indicate that Contrast is performing its JIT bytecode transformations to add security sensors to the JVM. This startup JIT period will take 8-12 seconds on a fast developer laptop, and maybe 30-40 seconds on outdated, resource-starved QA server hardware.

## Performance Tuning Hints

The following considerations apply to our platform as a whole:

* Run Contrast in *sampling* mode (gain 33% performance boost)
* Turn off *response scanning* (gain 5% performance boost, and somewhat reduce memory footprint)
* Run Contrast during nightly integration tests
* Turn off data flow rules (add ```-Dcontrast.propagators=false```, gain 50% performance boost)
* Run Contrast in an alternate environment (QA system or DEV environment)
* Run Contrast on a single node in a load balanced environment

## Memory

The following memory usage guidelines apply to our platform:

1. Add 32MB of PermGen space in HotSpot JVM that use PermGen
2. Add another 128MB to the maximum heap size

Our minimum requirements for memory are 1.8x maximum heap used during normal application usage. Most of the time, the above steps are more than enough.

## Contrast Assess

Contrast Assess has been tuned to provide maximum diagnostic depth at the cost of slight performance overhead. Since Assess is intended to run on the "left side" of the SDLC (e.g. Dev/Test/QA/CI-CD environments), the "performance tuning knobs" internal to our platform are set to favor diagnostic depth.

## Contrast Protect

Contrast Protect generally runs in the center or "right side" of the SDLC, in production or production-like environments. Thus, the "performance tuning knobs" in this case are set to minimize any overhead. Contrast Protect configures our agent into a highly optimized set of execution modes which exact only a small fixed cost on application performance.

## More Information

* [Sampling](admin-orgsettings.html#server)
* [Java Agent System Properties](installation-javaconfig.html#system)
