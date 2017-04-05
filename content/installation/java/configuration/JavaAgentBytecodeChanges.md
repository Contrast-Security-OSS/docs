<!--
title: "Java Agent Bytecode Changes"
description: "Instructions on getting bytecode changes"
tags: "java agent bytecode"
-->


You can ask Contrast to save all of its weavings for analysis by passing a custom system property to the server process:

```-Dcontrast.savebytecode=/path/to/bytecode/
```

This will save the **before** and **after** copies of any class that Contrast weaved sensors into during the process, into the given directory. These will be useful for Contrast analysts hoping to understand more complex issues. After running with this feature enabled, the directory given will have a directory full of packages like this:

<a href="assets/images/KB1-d04.png" rel="lightbox" title="Directory Packages"><img class="thumbnail" src="assets/images/KB1-d04.png"/></a>

This feature was introduced in **Contrast 2.4.1**.
