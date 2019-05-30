<!--
title: "Use the Java Agent with Maven Central"
description: "How to add the Java agent to a Maven project"
tags: "java agent deployment maven central cargo"
-->

##  About the Project

The following instructions walks a Java developer through the necessary steps to add the Contrast Java agent to an existing Maven project and reuse the project's existing integration tests to find vulnerabilities. This includes guided changes to an [example servlet project](https://github.com/Contrast-Security-OSS/contrast-java-examples/tree/master/maven-cargo). A completed version of the project exists in a [GitHub branch](https://github.com/Contrast-Security-OSS/contrast-java-examples/tree/maven-cargo-complete/maven-cargo).

## Before You Start

1. Install [Java 8](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).
1. Install [git](https://git-scm.com/).
1. Verify your [Contrast account](https://app.contrastsecurity.com) connection information.

## Step 1: Gather Contrast account information

The Contrast agent requires some configuration to communicate with the Contrast UI. You'll need to obtain these [four properties](admin-orgsettings.html#apikey) from the Contrast UI:

* The Contrast URL
* Your Contrast API key
* The agent username for your Contrast organization
* The Service key for your Contrast organization's agent user

The Contrast URL is *https://app.contrastsecurity.com/Contrast*, or the URL of your on-premises or private cloud instance. You can find the Contrast URL, your API key and agent username by going to the **user menu > Organization Settings > API tab** in the Contrast UI. You can find your Service key using the link in the **API** tab, or by navigating to the **user menu > Your Account > My Keys section**. 

## Step 2: Create a Contrast configuration file

The Contrast configuration file is a [YAML file](https://yaml.org/). Since it contains API credentials, Contrast recommends you create it in a location that only you have access to. For most developers, your home directory is a good choice. Choose a file name that will make sense to you (e.g., *.contrast.yml*).

* Create the file and open it in your preferred text editor. 

* Paste in the following contents:

```yaml
api:
  url: <contrast_url>
  api_key: <your_api_key>
  user_name: <agent_user_name>
  service_key: <agent_user_service_key>
```

* Replace `<contrast_url>`, `<your_api_key>`, `<agent_user_name>` and `<agent_user_service_key>` with the values you
obtained from the Contrast UI in the previous step, and save the file.

<details><summary><b>Configuration hints</b></summary>
<p>You can <a href="installation-javaconfig.html">configure the Contrast Java agent</a> using a file, Java system properties or environment variables. For developers, Contrast recommends putting only the variables that are shared across multiple applications (e.g., credentials and Contrast UI connection details) in this
file. That way you can manage them in one place.</details>

## Step 3: Clone the examples repository

* Open a command prompt, and run the following command to clone the **examples** repository:

```console
$ git clone https://github.com/Contrast-Security-OSS/contrast-java-examples.git
Cloning into 'contrast-java-examples'...
remote: Enumerating objects: 12, done.
remote: Counting objects: 100% (12/12), done.
remote: Compressing objects: 100% (9/9), done.
remote: Total 12 (delta 1), reused 9 (delta 1), pack-reused 0
Unpacking objects: 100% (12/12), done.
```

* Then make your working directory the root of the `maven-cargo` example:

```console
cd contrast-java-examples/maven-cargo
```

The rest of these instructions are written in the context that you've kept your command prompt open and the working directory is the root of the `maven-cargo` example.

## Step 4: Test and build the project

* Check to make sure everything starts off in a working state by running the integration test. 

The `maven-cargo-plugin` starts a Jetty server on port 8080, and the `EchoServletIT` integration test verifies the behavior of the `EchoServlet` by sending an HTTP request to the Jetty server. Finally, the `maven-cargo-plugin` shuts down the Jetty server.

```console
$ ./mvnw clean verify
[INFO] Scanning for projects...
[INFO]
[INFO] ---------< com.contrastsecurity.examples:contrast-maven-cargo >---------
[INFO] Building Contrast Maven Cargo Example 1.0
[INFO] --------------------------------[ war ]---------------------------------
[INFO]
    ... omitting some output ...
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  3.467 s
[INFO] Finished at: 2019-03-21T22:57:22-04:00
[INFO] ------------------------------------------------------------------------
```

> **Note:** On Windows, run `mvnw.cmd clean verify` instead.

* If this doesn't work, check to make sure you have Java 8 correctly installed.

```console
$ java -version
java version "1.8.0_131"
Java(TM) SE Runtime Environment (build 1.8.0_131-b11)
Java HotSpot(TM) 64-Bit Server VM (build 25.131-b11, mixed mode)
```

If you had to correct something about your Java installation, try running the tests again. If it still doesn't work, [open an issue](https://github.com/Contrast-Security-OSS/contrast-java-examples/issues/new) that explains the problem.

## Step 5: Download the Contrast agent

Use the [Maven Dependency Plugin](https://maven.apache.org/plugins/maven-dependency-plugin/) to download the agent into the project build directory.

* Add the following to the `properties` element of the project POM (`pom.xml`):

```xml
<contrast.version>3.6.3.8220</contrast.version>
```

You can replace the version and build numbers with those from any Contrast Java agent [released to Maven Central](https://search.maven.org/artifact/com.contrastsecurity/contrast-agent).

* Then add the following to the `build.plugins` element of the project POM (`pom.xml`):

```xml
<plugin>
  <artifactId>maven-dependency-plugin</artifactId>
  <version>3.1.1</version>
  <executions>
    <execution>
      <phase>prepare-package</phase>
      <goals>
        <goal>copy</goal>
      </goals>
      <configuration>
        <artifactItems>
          <artifactItem>
            <groupId>com.contrastsecurity</groupId>
            <artifactId>contrast-agent</artifactId>
            <version>${contrast.version}</version>
          </artifactItem>
        </artifactItems>
        <stripVersion>true</stripVersion>
      </configuration>
    </execution>
  </executions>
</plugin>
```

## Step 6: Enable the Contrast agent

Configure the existing Maven Cargo Plugin to include Contrast when starting Jetty. 

* Copy the following `configuration` element to the `start-app-before-IT` execution:

```xml
<configuration>
  <configuration>
    <properties>
      <cargo.jvmargs>
        -javaagent:${project.build.directory}/dependency/contrast-agent.jar
        -Dcontrast.config.path=${user.home}/.contrast.yml
        -Dcontrast.application.name=maven-cargo-how-to
      </cargo.jvmargs>
    </properties>
  </configuration>
</configuration>
```

* Change the value of `-Dcontrast.config.path` to match the path to the configuration file you created in **Step 2**.

* Now re-run the tests. When the application container initializes, you'll see output indicating that Contrast has started.

```
$ ./mvnw clean verify
[INFO] Scanning for projects...
[INFO]
[INFO] ---------< com.contrastsecurity.examples:contrast-maven-cargo >---------
[INFO] Building Contrast Maven Cargo Example 1.0
[INFO] --------------------------------[ war ]---------------------------------
[INFO]
    ... omitting some output ...
[INFO] [talledLocalContainer] [Contrast] Thu Mar 21 23:20:40 EDT 2019 Starting Contrast (build 3.6.2.BACKGROUND) Pat. 8,458,789 B2
    ... omitting more output...
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  16.644 s
[INFO] Finished at: 2019-03-21T22:57:22-04:00
[INFO] ------------------------------------------------------------------------
```

> **Note:** On Windows, run `mvnw.cmd clean verify` instead.

During the integration test, the agent detects and reports the vulnerable servlet to the Contrast UI. To see the vulnerability report, go to the [Vulnerabilities grid](user-vulns.html#discover-vulns) in the Contrast UI, and filter your view by the application name **maven-cargo-how-to**.

## Learn More

To integrate Contrast further with your Maven build, check out the [Contrast Maven Plugin](tools-build.html#maven). You can configure its `verify` goal to fail your Maven build when vulnerabilities are detected in your test run.

