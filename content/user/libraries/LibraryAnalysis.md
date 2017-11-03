<!--
title: "Library Analysis"
description: "Overview of how libraries are analyzed"
tags: "TeamServer application user library analysis"
-->

The security of the libraries used by your application has a direct impact on how secure your application can be. Contrast analyzes these libraries (JAR files) in your application to assess their potential security risks.

## Recognizing JAR Files

Contrast creates a **SHA-1** hash of the *JAR* file, which is used to compare the file's content (not its name) to a database of known JAR files. If your JAR is a custom file, this SHA-1 isn't be in the database and the JAR is reported as "unknown". If the SHA-1 is in the database, Contrast assign the JAR file a grade. Contrast then displays the library and its grade under the **Libraries** tab in an application's details page in the Contrast interface.

<a href="assets/images/Application-libraries-tab.png" rel="lightbox" title="View libraries in an application"><img class="thumbnail" src="assets/images/Application-libraries-tab.png"/></a>

>**Note:** WebSphere repackages libraries at runtime, so their SHA-1 is different than anything known to Contrast. To preserve the SHA-1 during deployment, set the JVM system property `org.eclipse.jst.j2ee.commonarchivecore.ignore.web.fragment` to `true`. Also, any `wsadmin` calls must have the same parameter: <br> 
`wsadmin -javaoption "-Dorg.eclipse.jst.j2ee.commonarchivecore.ignore.web.fragment=true"`. 

## Used Classes

The **Classes Used** section indicates the number of classes used in the application out of the number of classes declared in the JAR file.

When your application loads a class, Contrast analyzes it to determine from where it's being called. If this location matches a JAR file that Contrast has analyzed, that JAR file's count of **Classes Used** increases.

_____________


### How can I get my JAR file added to the known list of JAR files?

* If you're using a new, publicly available JAR file, your cache file may be out of date, and may be updated with the next release of Contrast. If you want to ensure that this is the case, please [contact us](mailto:bugs@contrastsecurity.com), and provide the name and version of the JAR file.
* If you're using a publicly available JAR file released before the version of Contrast that you're running, please [contact us](mailto:bugs@contrastsecurity.com), and provide the name and version of the JAR file so that we can add it to the database.
* If you're using a custom file, and would like it added to the known list, please [contact us](mailto:bugs@contrastsecurity.com) with information about the JAR file. To effectively add it to our database, Contrast needs a SHA-1 hash of the file as well as its name, version number, release date, and any known CVEs affecting it.

### What if the JAR file I'm using is the most recent version, but several years old?

* We take this into account when grading a JAR file and reduce the impact the age has in this case.

### Why do my libraries have zero classes used?

* Contrast doesn't know that a class has been used from a JAR file until it sees the class in your application. Further testing of your application should increase these numbers to give you a more accurate analysis of class usage.
