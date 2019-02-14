<!--
title: "Library Analysis"
description: "Overview of how libraries are analyzed"
tags: "ui application user library analysis"
-->

The security of the libraries used by your application has a direct impact on how secure your application can be. Contrast analyzes library files - Java JARs, .NET DLLs, Node and Python packages, and Ruby Gems - in your application to assess their potential security risks. 

## Library File

Contrast creates a hash of the library file, which is used to compare the file's content to a database of known library files. If your library is a custom file, this hash isn't in the database; the agent then reports the library as "unknown" to the Contrast application. If your library was created since Contrast last updated its library definitions, it may also be unrecognized when the agent reports it.  

If the hash is in the database, Contrast assigns a [grade](user-libraries.html#score-lib) to the library file. Contrast then displays the library and its grade under the [**Libraries** tab](user-apps.html#libraries) in an application's details page in the Contrast UI.

<a href="assets/images/Application-libraries-tab.png" rel="lightbox" title="View libraries in an application"><img class="thumbnail" src="assets/images/Application-libraries-tab.png"/></a>


### Repackaged libraries

For **Java** clients, WebSphere repackages libraries at runtime, so their SHA-1 hash is different than anything known to Contrast. To preserve the SHA-1 during deployment, set the JVM system property `org.eclipse.jst.j2ee.commonarchivecore.ignore.web.fragment` to `true`. 

Also, any `wsadmin` calls must have the same parameter:

```
wsadmin -javaoption "-Dorg.eclipse.jst.j2ee.commonarchivecore.ignore.web.fragment=true"
``` 


## Used Classes

The **Classes Used** section indicates the number of classes used in the application out of the number of classes declared in the library file. This applies to **Java** and **.NET** clients only. 

When your application loads a class, Contrast analyzes it to determine from where it's being called. If this location matches a library file that Contrast has analyzed, that file's count of **Classes Used** increases.

