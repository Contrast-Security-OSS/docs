<!--
title: "Working with Contrast's Java Agent Cache"
description: "You may have noticed that Contrast was slow to start up the first time it ran, then fast after that. That's because Contrast caches all of its bytecode analysis."
-->

## How does the cache work?
It works like this: Contrast sees a new class about to be loaded, and it hashes the bytecode. It checks in a map if there is an entry under that hash key. If there's no entry under that key, it analyzes the bytecode for changes according to the rules. The results of this expensive analysis (including the changed bytecode if necessary) is saved. The results are either an empty value, which means that the class isn't important, and can be ignored in the future, or that it's a class that required instrumentation, and thus the cached changed bytecode is returned. Once the JVM is finished starting up, the cache spools. After that, it spools during quiet periods or after new classes are put in the cache.

## Where is this cache stored?
It's stored (along with other metadata) in your Contrast directory. This is specified by the ```contrast.dir``` System property (i.e., ***-Dcontrast.dir=/tmp/contrast***), and defaults to ***$HOME/.contrast***.
The cache file is relatively small, even for really big apps on heavy duty containers. For instance, the cache is only a few MB for a big application on WebSphere. A new cache is created every time a new policy is used, and even a small customization of the rules will be recognized as a new policy!

## Can I clear the cache?
Yes! Pass the ```-Dcontrast.clear``` System property to your container startup options and Contrast will rebuild the cache (and thus, have a slower startup time). 
