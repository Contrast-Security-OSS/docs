<!--
title: "Include the Java agent in a Gradle project using Maven Central"
description: "How to add the Java agent from Maven Central to a Gradle project"
tags: "java agent deployment maven central docker gradle package"
-->

## About Contrast with Gradle and Docker

The following instructions walk a Java developer through the necessary steps to add the Contrast Java agent to an existing Gradle project. The example Gradle project uses the [Application Plugin](https://docs.gradle.org/current/userguide/application_plugin.html) and the [Docker Plugin](https://github.com/bmuschko/gradle-docker-plugin) to build a Java web application and run JUnit 5 integration tests that verify the web application's behavior. This guide includes the process to include Contrast in the Docker image used for testing so that Contrast Assess analyzes your code during integration testing. A completed version of the project exists in a [GitHub branch](https://github.com/Contrast-Security-OSS/contrast-java-examples/tree/gradle-docker-complete/gradle-docker).

> **Note:** Any part of the following procedures that refer to any form of packaging or distribution are meant for your organization's internal use. Do not distribute Contrast with your application or Docker container outside of your organization. See [Contrast's Terms of Service agreement](https://www.contrastsecurity.com/enduser-terms-0317a) for more information.

### Before You Start

1. Install [Java 8](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).
1. Install [git](https://git-scm.com/).
1. Install [Docker](https://docs.docker.com/install/).
1. Obtain a [Contrast account](https://app.contrastsecurity.com).

### Step 1: Gather Contrast account information

The Contrast agent requires some configuration to communicate with the Contrast UI. You'll need to obtain these [four properties](admin-orgsettings.html#apikey) from the Contrast UI:

* The Contrast URL
* Your Contrast API key
* The agent username for your Contrast organization
* The Service key for your Contrast organization's agent user

The Contrast URL is *https://app.contrastsecurity.com/Contrast*, or the URL of your on-premises or private cloud instance. You can find the Contrast URL, your API key and agent username by going to the **user menu > Organization Settings > API tab** in the Contrast UI. You can find your Service key using the link in the **API** tab, or by navigating to the **user menu > Your Account > My Keys section**. 

### Step 2: Configure your environment

Contrast supports multiple ways to configuring the Java agent. As environment variables work well with Docker containers, you'll supply the Contrast agent's configuration using this method.

* If you're using a Unix-like operating system, create a file for exporting the values obtained in **Step 1** as 
[Contrast environment variables](https://docs.contrastsecurity.com/installation-javaconfig.html#java-yaml).

* Open a command prompt and run the following command. Replace `<contrast_url>`, `<your_api_key>`, `<agent_user_name>` and `<agent_user_service_key>` with the values you obtained from the Contrast UI: 

```console
$ tee -a ~/.contrastrc > /dev/null
export CONTRAST__API__URL=<contrast_url>
export CONTRAST__API__API_KEY=<your_api_key>
export CONTRAST__API__USER_NAME=<agent_user_name>
export CONTRAST__API__SERVICE_KEY=<agent_user_service_key>
```

* Press `CTRL+D` when you're finished typing all four lines of input to save the values to the `$HOME/.contrastrc` file.

* Run the `.contrastrc` script in the current shell to export the variables to your environment:

```console
$ . ~/.contrastrc
```


> **Note:** If you're using Windows, refer to [Microsoft's documentation](https://docs.microsoft.com/en-us/windows/desktop/shell/user-environment-variables) to learn how to set environment variables.

<details><summary><b>Configuration hints</b></summary>
<p>You can <a href="https://docs.contrastsecurity.com/installation-javaconfig.html">configure the Contrast Java agent</a> using a file, Java system properties or environment variables. Contrast recommends using environment variables for credentials and Contrast UI connection details. These values aren't likely to change across the projects in your local development environment. This method is also safer than putting your credentials directly in your build script.</p>

<p>If you close the terminal where you ran the <code>.contrastrc</code> script, you'll have to re-run it when you open a new terminal. Add `~/.contrastrc` to the script that initializes your interactive shell to make the configuration persist across terminal sessions. For example, if your shell program is Bash, you can do this by running <code>echo ~/.contrastrc` | tee -a ~/.bashrc</code>.</p></details>

<br> 

The rest of these instructions are written in the context that you'll execute further commands from the same terminal used in this step.

### Step 3: Clone the examples repository

* Open a command prompt, and run the following command to clone the **examples** repository:

```console
$ git clone https://github.com/Contrast-Security-OSS/contrast-java-examples.git
```

* Make your working directory the root of the `gradle-docker` example:

```console
$ cd contrast-java-examples/gradle-docker
```

The rest of these instructions are written in the context that you execute subsequent commands with `gradle-docker` as the working directory.

### Step 4: Test and build the project

* Run the tests for this module to make sure everything starts off in a working state:

```console
$ ./gradlew build

BUILD SUCCESSFUL in 3s
4 actionable tasks: 3 executed, 1 up-to-date
```

> **Note:** On Windows, run `gradlew.bat build` instead.

* If this doesn't work, check to make sure you have Java 8 correctly installed: 

```console
$ java -version
java version "1.8.0_131"
Java(TM) SE Runtime Environment (build 1.8.0_131-b11)
Java HotSpot(TM) 64-Bit Server VM (build 25.131-b11, mixed mode)
```

If you had to correct something about your Java installation, try running the tests again. If it still doesn't work, [open an issue](https://github.com/Contrast-Security-OSS/contrast-java-examples/issues/new) that explains the problem.

### Step 5: Download the Contrast Java agent

* Add a dependency configuration and declare a dependency on the Contrast Java agent:

```groovy
configurations {
    contrastAgent
}
```

```groovy
def contrast_version = "3.6.3.8220"

dependencies {
    // ... other dependencies omitted
    contrastAgent "com.contrastsecurity:contrast-agent:${contrast_version}"
}
```

* Add a task for copying the agent into a directory of the project:

```groovy
task("copyAgent", type: Copy) {
    from configurations.contrastAgent
    into "${projectDir}/lib"
}

run.dependsOn copyAgent
assemble.dependsOn copyAgent
```

### Step 6: Run the application with Contrast

* Add the `-javaagent` property to the JVM arguments passed to the application by modifying the `application` block of `build.gradle`:

```groovy
application {
  // ... rest of block omitted
  def agentBuildPath = "lib/contrast-agent-${contrast_version}.jar"
  def agentProjectPath = Paths.get(getProjectDir().toURI()).resolve(agentBuildPath)


  applicationDefaultJvmArgs = [
          "-javaagent:${agentProjectPath.toString()}"
  ]
}
```

* Run the application:

```console
$ ./gradlew run
```

> **Note:** On Windows, run `gradlew.bat run` instead.

The application will now start up with Contrast. If you do any manual testing, any security related findings are reported to the Contrast UI. You can press `CTRL+C` to stop the application.

### Step 7: Include Contrast in the Distributable

* Configure the Distribution Plugin to include the Contrast agent JAR in the bundles created when you run `gradle build`. (The Distribution Plugin was included when you included the Application Plugin.)

```groovy
application {

  // ... rest of application config omitted

  distributions {
    main {
      contents {
        from("${projectDir}/lib") {
            into "lib"
        }
      }
    }
  }
}
```

When Gradle generates the start scripts, it includes the JVM args when starting the application. However, `-javaagent` points to a JAR file in your project directory, not the JAR file in the application bundle. 

* To point to the correct JAR file, configure the `startScripts` task to perform some string surgery on the scripts after they're generated:

```groovy
application {

  // ... rest of application config omitted

  startScripts {
    doLast {
      def shFile = new File(getOutputDir(), project.name)
      shFile.text = shFile.text.replace(agentProjectPath.toString(), "\$APP_HOME/${agentBuildPath}")
      def batFile = new File(getOutputDir(), "${project.name}.bat")
      batFile.text = batFile.text.replace(agentProjectPath.toString(), "%APP_HOME%\\lib\\contrast-agent-${contrast_version}.jar")
    }
  }
}
```

* Pass the configuration variables into the container by adding the following commands to the `createContainer` task in `build.gradle`:

```groovy
task createContainer(type: DockerCreateContainer) {
    // ... rest of the config omitted

    envVars = [
        CONTRAST__API__URL: System.getenv("CONTRAST__API__URL"),
        CONTRAST__API__USER_NAME: System.getenv("CONTRAST__API__USER_NAME"),
        CONTRAST__API__SERVICE_KEY: System.getenv("CONTRAST__API__SERVICE_KEY"),
        CONTRAST__API__API_KEY: System.getenv("CONTRAST__API__API_KEY"),
        CONTRAST__APPLICATION__NAME: "${project.name}-how-to"
    ]
}
```

* Finally, run the build again:

```console
./gradlew clean build
```

> **Note:** On Windows, run `gradlew.bat clean build` instead.

The Docker container now runs the application with Contrast enabled. When the integration test runs, it detects the vulnerable endpoint and reports it to the Contrast UI. To see the vulnerability report, log in to the Contrast UI, navigate to the [Vulnerabilities grid](user-vulns.html#discover-vulns), and filter your view by the application name **gradle-docker-how-to**.


## Learn More

To integrate Contrast further with your Gradle build, check out the [Contrast Gradle Plugin](tools-build.html#gradle). You can configure its `contrastVerify` task to fail your Gradle build when Contrast detects vulnerabilities in your test run.

