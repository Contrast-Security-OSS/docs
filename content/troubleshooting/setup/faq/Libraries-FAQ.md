<!--
title: "Libraries"
description: "Library recognition issues"
tags: "troubleshoot setup FAQ library"
-->

## Why does my open-source library show up as unknown?

Contrast identifies libraries by their SHA-1 digest. If any repackaging of the library occurs, which WebSphere does by default, the digest is different. To prevent repackaging, you can add the following JVM system property:

```
-Dorg.eclipse.jst.j2ee.commonarchivecore.ignore.web.fragment=true
```

## Why doesn't Contrast recognize my library as the most-recent version?

Issues with library version recognition are a result of the way that Contrast data sources store information about a library's version. Some of the versions are formatted to include the year at the beginning, and so the sort method reads them as a more recent version. The problem should phase itself out as the industry is moving to a more normalized version convention.

## How can I get my JAR file added to the known list of JAR files?

* If you're using a new, publicly available JAR file, your cache file may be out of date, and may be updated with the next release of Contrast. If you want to ensure that this is the case, please [contact us](mailto:bugs@contrastsecurity.com), and provide the name and version of the JAR file.
* If you're using a publicly available JAR file released before the version of Contrast that you're running, please [contact us](mailto:bugs@contrastsecurity.com), and provide the name and version of the JAR file so that we can add it to the database.
* If you're using a custom file, and would like it added to the known list, please [contact us](mailto:bugs@contrastsecurity.com) with information about the JAR file. To effectively add it to our database, Contrast needs a SHA-1 hash of the file as well as its name, version number, release date, and any known CVEs affecting it.

## What if the JAR file I'm using is the most-recent version, but still several years old?

Contrast takes this into account when grading a JAR file, and reduces the impact of the file's age.

## Why do my libraries have zero classes used?

Contrast doesn't know that a class has been used from a JAR file until it sees the class in your application. Further testing of your application should increase these numbers to give you a more accurate analysis of class usage.