<!--
title: "How Does The Node Agent Affect App Performance?"
description: "Tips to improve app performance with the Node agent"
tags: "node agent performance latency startup"
-->

As you might expect, Contrast's analysis does make your app run a little slower. The good news is it's generally not enough for anyone to complain about, and the results are definitely worth it.

## Startup Time

When you start your server with Contrast, you'll notice a delay in startup time. This is first caused by the agent attempting to establish a connection with TeamServer. High latency between the server and TeamServer, or a TeamServer which is under heavy load, may exacerbate the startup time. Where startup time is critical, this cost can be reduced as follows:
* Run Contrast with the ```--skipAutoUpdate``` flag
* Run Contrast with the ```--skipLibs``` flag. The agent will not collect information about the application's dependencies.
* Run Contrast with the ```--localonly``` flag (we don't recommend this, as the agent will subsequently not attempt communication with TeamServer)

For most applications, the bulk of the startup time the agents adds is caused by the source code rewrites it performs for instrumentation. This delay scales directly with the amount of source code in the application - dependencies included. Where startup time is critical, this cost can be reduced by running Contrast with the ```--norewrite``` flag. This option is a last resort and should be avoided, as it will drastically reduce the accuracy of our dataflow.

## Request Processing Time

It's probably more important to think about how Contrast affects the round-trip time. In typical applications, Contrast may noticeably impact the round-trip time of requests that contain a lot of business logic. Round-trip times for static resources typically don't get measurably worse. In requests where the total round-trip time is dominated by database or Web Service calls, Contrast's effect will be less noticeable.

If better performance is really important to your environment, consider the following options:

* Turn off data flow rules (add ```--nopropagation```)
* Run Contrast nightly during integration tests
* Run Contrast in an alternate environment (QA system or DEV environment)
* Run Contrast on a single node in a load-balanced environment

## More Information

[Node.js Agent Configuration](installation_node.html#config)
