<!--
title: "How Does The .NET Agent Affect App Performance?"
description: "Tips on improving application performance with the .NET agent"
-->

As you might expect, Contrast's analysis *does* make your app run a little slower. The good news is that it's generally not enough for anyone to complain about, and the results are definitely worth it.

## Request Processing Time

It's probably more important to think about how Contrast affects the round-trip time. In typical applications, Contrast adds around 2x the round-trip time to a request that contains a lot of business logic. Round trip times for static resources typically don't get measurably worse. In requests where the total round-trip time is dominated by database or WebService calls, Contrast's effect will be less noticeable.

If performance is really important to your environment, consider the following options:

* Run Contrast in *sampling* mode (enabled by default)
* Run Contrast during nightly integration tests
* Run Contrast in an alternate environment (QA system or DEV environment)
* Run Contrast on a single node in a load balanced environment

## See Also

[Sampling](user_tsfaq.html#sample)


