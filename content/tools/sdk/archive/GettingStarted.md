
<!--title: "Getting Started with the Contrast Java SDK"\
description: "Overview of how to use the Contrast Java SDK"\
tags: "tools SDK Java Intro"-->


## What Is An SDK?
SDK is an acronym for "Software Development Kit".  An SDK generally provides access to tools and libraries that help a developer either build a product for a specific platform, or include specific components within their product.

## Why Did We Create The Contrast Java SDK?
In our case, the Contrast Java SDK provides classes and methods for any application to make it easier to interact with a Teamserver instance. The SDK does this by wrapping direct Teamserver API calls and de-serializing JSON responses into Java objects.

## How To Use The SDK
First, install the requirements. You'll need:
* JDK 7 or 8
* Maven
* A Teamserver account

After meeting the above prerequisites you will need to gain access to the SDK, which is available from GitHub or can be used in a Maven or Gradle-based project via the Maven Central repository (see below).

## Access To The SDK
The Contrast Java SDK can be downloaded from our  [GitHub](https://github.com/Contrast-Security-OSS/contrast-sdk-java) page. You can clone the repository via:

```
git clone https://github.com/Contrast-Security-OSS/contrast-sdk-java
```

The Contrast Java SDK is also available for use via the [Maven Central repository](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22contrast-sdk-java%22).

