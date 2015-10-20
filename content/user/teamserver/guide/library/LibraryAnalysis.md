<!--
title: "Library Analysis"
description: "Overview of how libraries are analyzed"
-->

The security of the libraries that your application uses will have a direct impact on how secure your application can be. As such, Contrast will analyze these libraries (**JAR** files) in your application in order to assess their potential security risks.

## How Does Contrast Recognize A JAR File?

In order to do this we create a **SHA-1** hash of the JAR file, which is used to compare the file's actual content - not its name - to a database of known JAR files. If your JAR is a custom file, this SHA-1 will not be in our database and the JAR will be reported as **unknown**. If the SHA-1 ***is*** in the database, Contrast will assign the JAR file a grade and display it in a list of libraries on each application's dashboard under the **Libraries** tab in the lower left corner.

>**Note:** WebSphere repackages libraries at runtime, so their SHA-1 will be different than anything known to Contrast. In order to preserve the SHA-1 during deployment, you have to set the JVM system property ```org.eclipse.jst.j2ee.commonarchivecore.ignore.web.fragment``` to ```true```. Also, any ```wsadmin``` calls must have the same parameter, as is shown here:

>```wsadmin -javaoption "-Dorg.eclipse.jst.j2ee.commonarchivecore.ignore.web.fragment=true"```


## How Does Contrast Grade A JAR File?

A JAR file is scored based on a few factors. Depending on the JAR file's age, how many versions behind it is, and how many known CVE's there are for the JAR file, it will be assigned a score from 0-100. This score is then translated into a letter grade, where: 
* 90-100 = **A**
* 80-89  = **B** 
* 70-79  = **C**
* 60-69  = **D**
* 0-59   = **F**

### What if the JAR file I'm using is the most recent version, but several years old?

* We take this into account when grading a JAR file and reduce the impact the age has in this case.

### How can I get my JAR file added to the known list of JAR files?

* If you are using a **new** publicly available JAR file, it could be that your cache file is out of date and will be updated with the next release of Contrast. If you would like to ensure that this is the case, please [contact us](mailto:bugs@contrastsecurity.com) and provide the name and version of the JAR file.
* If you are using a publicly available JAR file released before the version of Contrast you are running, please [contact us](mailto:bugs@contrastsecurity.com) and provide the name and version of the JAR file so that we can add it to the database.
* If you are using a custom file and would like it added to the known list, please [contact us](mailto:bugs@contrastsecurity.com) with information about the JAR file. In order to effectively add it to our database, we will need a SHA-1 hash of the file, its name, version number, release date, and any known CVE's affecting it.


## What Does Classes Used Mean?

The **Classes Used** section indicates:

*(# of classes used in the application)* **/** *(# of classes declared in the JAR file)*

### How does Contrast know how many classes my application uses?

* When your application loads a class, Contrast analyzes it to determine from where it is being called. If this location matches a JAR file Contrast has analyzed, that JAR file's **Classes Used** count increases.

### Why do my libraries have zero classes used?

* Contrast does not know that a class has been used from a JAR file until it sees the class in your application. Further testing of your application should increase these numbers to give you a more accurate analysis of class usage.
