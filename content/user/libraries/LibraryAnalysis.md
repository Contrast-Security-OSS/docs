<!--
title: "Library Analysis"
description: "Overview of how libraries are analyzed"
tags: "TeamServer application user library analysis"
-->

The security of the libraries used by your application has a direct impact on how secure your application can be. Contrast analyzes these libraries (JAR files) in your application to assess their potential security risks.

## JAR Files

Contrast creates a **SHA-1** hash of the JAR file, which is used to compare the file's content (not its name) to a database of known JAR files. If your JAR is a custom file, this SHA-1 isn't in the database and the JAR is reported as "unknown". If the SHA-1 is in the database, Contrast assign the JAR file a grade. Contrast then displays the library and its grade under the **Libraries** tab in an application's details page in the Contrast interface.

<a href="assets/images/Application-libraries-tab.png" rel="lightbox" title="View libraries in an application"><img class="thumbnail" src="assets/images/Application-libraries-tab.png"/></a>

>**Note:** WebSphere repackages libraries at runtime, so their SHA-1 is different than anything known to Contrast. To preserve the SHA-1 during deployment, set the JVM system property `org.eclipse.jst.j2ee.commonarchivecore.ignore.web.fragment` to `true`. Also, any `wsadmin` calls must have the same parameter: <br> 
`wsadmin -javaoption "-Dorg.eclipse.jst.j2ee.commonarchivecore.ignore.web.fragment=true"`. 

## Used Classes

The **Classes Used** section indicates the number of classes used in the application out of the number of classes declared in the JAR file.

When your application loads a class, Contrast analyzes it to determine from where it's being called. If this location matches a JAR file that Contrast has analyzed, that JAR file's count of **Classes Used** increases.

