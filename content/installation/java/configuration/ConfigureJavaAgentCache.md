<!--
title: "Working with Contrast's Java Agent Cache"
description: "You may have noticed that Contrast was slow to start up the first time it ran, then fast after that. That's because Contrast caches all of its bytecode analysis."
tags: "installation configuration java agent performance cache"
-->

## How does the cache work?
It works like this: Contrast sees a new class about to be loaded, it checks the results of the last execution. If it was a class that didn't need to be instrumented before, it doesn't need to be analyzed or instrumented now! Once the JVM is finished starting up, the cache spools. After that, it spools during quiet periods or after new classes are put in the cache.

## Where is this cache stored?
It's stored (along with other metadata) in your Contrast directory. This is specified by the ```contrast.dir``` System property - i.e., ***-Dcontrast.dir=/tmp/contrast*** - and defaults to ***$HOME/.contrast***.
The cache file is relatively small, even for really big apps on heavy duty containers. For instance, the cache is only a few MB for a big application on WebSphere. A new cache is created every time new rules are enabled, a new JRE is in use, or a new agent has been downloaded.

## Can I clear the cache?
Yes! Simply delete the *$CONTRAST/cache* directory!
