<!--
title: "Contrast Gradle Plugin" 
description: "Sample Gradle build plugin using the Contrast Java SDK"
tags: "Gradle SDK Integration Java"
-->

## About The Contrast Gradle Plugin

The Contrast Gradle Plugin is used to integrate the *Contrast.jar* with your build. It is capable of authenticating to TeamServer, downloading the latest Java agent, and verifying your build.

[Gradle](https://gradle.org/) is a build tool that utilizes `build.gradle` files to configure your applications. It is used to build, package, and test various types of applications.

## Access To The Plugin

The plugin code can be viewed in our Github [repository](https://github.com/Contrast-Security-OSS/contrast-gradle-plugin). Here you can review the two tasks added by the plugin, `contrastInstall` and `contrastVerify`, and how they work.

The latest version of the plugin can be found on [Gradle's plugin webpage](https://plugins.gradle.org/plugin/com.contrastsecurity.contrastplugin).

## How To Use The Plugin

### Configuration
Below is a table showing all the different parameters for the plugin:

These settings are for connecting to TeamServer and filtering your vulnerabilities.

| Parameter                    | Description                                             |
|------------------------------|---------------------------------------------------------|
| TeamServer Username          | This is the username/email for your user in TeamServer |
| TeamServer Service Key       | Service Key found in Organization Settings             |
| TeamServer API Key           | API Key found in Organization Settings                 |
| TeamServer API Url           | API Url to your TeamServer instance                    |
| TeamServer Organization Uuid | Organization Uuid of the configured user found in Organization Settings |
| Application Name             | Name of application you set with ```-Dcontrast.appname``` <BR> This is used to filter for your application |
| Minimum Severity Level       | Minimum Severity level to filter for (Note, Low, Medium, High, Critical). This property is inclusive. |
| Server Name                  | Name of server you set with ```-Dcontrast.server``` <BR> Use *app.contrastsecurity.com/Contrast/api* if you are a SaaS customer |
| Jar Path                     | Path of a local jar file if you don't want to download the agent again                  |

<br/>
>**Note**: Even if your build succeeds, the plugin will fail the overall build if a vulnerability is found at or above the severity level set in the configuration.

### Guide To Onboarding A Sample Web Application
The easiest way to set up a project is to clone our sample Gradle-based web application.  This application has been migrated from Maven to Gradle, and relies on MongoDB, so we will install that and set up the database path.
```
git clone https://github.com/Contrast-Security-OSS/Contrast-Sample-Gradle-Application
brew install mongodb
sudo mkdir -p /data/db
brew services start mongodb
```

* Now we have an application that is ready to run.  Open up the *Contrast-Sample-Gradle-Application/build.gradle* file.  Scroll to the very bottom and you will find the following contrastConfiguration extension. All of these values can be found in TeamServer already *except* for appName and serverName.

```
contrastConfiguration {
    username = "username"
    apiKey = "apiKey"
    serviceKey = "serviceKey"
    apiUrl = "apiUrl"
    orgUuid = "orgUuid"
    appName = "editLATER"
    serverName = "editLATER"
}

```
* Once username, apiKey, serviceKey, apiUrl, and orgUuid have been configured we can install the Contrast jar file by calling the `contrastInstall` task. This will install **contrast.jar** within the project's build directory.

```
cd path/to/Contrast-Sample-Gradle-Application
gradle build -x test contrastInstall
```

* The next step is to run the application with the Java agent. 
```
cd path/to/Contrast-Sample-Gradle-Application/build
java -javaagent:contrast.jar -Dcontrast.appname=mytestapp -Dcontrast.server=mytestserver -jar libs/Contrast-Sample-Gradle-Application-0.0.1-SNAPSHOT.jar
```

* After executing the above code, the server will start.  At this point we want to check that the application is running at localhost:8080 and that the application shows up in TeamServer.

* In TeamServer, verify that the application with the appname specified in the command above shows up.
* In the Contrast-Sample-Gradle-Application project's *build.gradle* we will now edit the contrastConfiguration to specify the appName and serverName that we specified as options with the Java agent in the previous step.
```
contrastConfiguration {
    username = "alreadySetup"
    apiKey = "alreadySetup"
    serviceKey = "alreadySetup"
    apiUrl = "alreadySetup"
    orgUuid = "alreadySetup"
    appName = "mytestapp"
    serverName = "mytestserver"
}
```
*  We can now run the verification task at any time to check for vulnerabilities.
```
gradle build contrastVerify -x test
```

### Example Configuration

Below is an example configuration for the Contrast Gradle Plugin:
``` groovy
buildscript {
  repositories {
    maven {
      url "https://plugins.gradle.org/m2/"
    }
  }
  dependencies {
    classpath "gradle.plugin.com.contrastsecurity:ContrastGradlePlugin:1.0-SNAPSHOT"
  }
}

apply plugin: "com.contrastsecurity.contrastplugin"
contrastConfiguration {
    username = "test_user"
    apiKey = "testApiKey"
    serviceKey = "testServiceKey"
    apiUrl = "https://www.app.contrastsecurity.com/Contrast/api"
    orgUuid = "QWER-ASDF-ZXCV-ERTY"
    appName = "Test Application"
    serverName = "jenkins.slave1"
    minSeverity = "Medium"
}
```