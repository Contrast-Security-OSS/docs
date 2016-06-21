<!--
title: "Contrast Gradle Plugin" 
description: "Sample Gradle build plugin using the Contrast Java SDK"
tags: "Gradle SDK Integration Java"
-->

## About The Contrast Gradle Plugin

The Contrast Gradle Plugin is used to integrate the Contrast jar with your build. It is capable of authenticating to TeamServer, downloading the latest java agent, and verifying your build.

[Gradle](https://gradle.org/) is build tool that utilizes `build.gradle` files to configure your applications. It is used to build, package, and test Java applications.

## Access To The Plugin

The plugin code can be viewed in our Github [repository](https://github.com/Contrast-Security-OSS/contrast-gradle-plugin). Here you can review the two tasks added by the plugin, `contrastInstall` and `contrastVerify`, and how they work.

The plugin can be found on [Gradle's plugin webpage](https://plugins.gradle.org/plugin/com.contrastsecurity.contrastplugin).

## How To Use The Plugin

### Configuration
Below is a table showing all the different parameters for the plugin:

These settings are for connecting to TeamServer and filtering your vulnerabilities.

| Parameter                    | Description                                             |
|------------------------------|---------------------------------------------------------|
| TeamServer Username          | This is the username/email for your user in TeamServer. |
| TeamServer Service Key       | Service Key found in Organization Settings.             |
| TeamServer Api Key           | Api Key found in Organization Settings.                 |
| TeamServer Api Url           | API Url to your TeamServer instance.                    |
| TeamServer Organization Uuid | Organization Uuid of the configured user found in Organization Settings. |
| Application Name             | Name of application you set with -Dcontrast.appname. <BR> This is used to filter for your application. |
| Minimum Severity Level       | Minimum Severity level to filter for. One of Note, Low, Medium, High, Critical. This property is inclusive. |
| Server Name                  | Name of server you set with -Dcontrast.server. <BR> Use app.contrastsecurity.com/Contrast/api if you are a SaaS customer. |
| Jar Path                     | Path of a local jar file if you don't want to download the agent again.                  |

**Note**: Even if your build succeeds, the plugin will fail the overall build if a vulnerability is found at or above the severity level set in the configuration.

### Guide For Sample Web Application
The easiest way to setup a project is to clone our sample Gradle based web application.  This application has been migrated from Maven to Gradle, and relies on MongoDB, so we will install that and setup it's database path.
```
git clone https://github.com/Contrast-Security-OSS/Contrast-Sample-Gradle-Application
brew install mongodb
sudo mkdir -p /data/db
brew services start mongodb
```

* Now we have an application that is ready to run.  Open up the Contrast-Sample-Gradle-Application/build.gradle file.  Scroll to the very bottom and you should find the following contrastConfiguration. All of these values can be found in TeamServer already *except* for appName and serverName.

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
* Once username, apiKey, serviceKey, apiUrl, and orgUuid have been configured we can install the contrast jar file by calling the `contrastInstall` task. This will install **contrast.jar** within the projects build directory.

```
cd path/to/Contrast-Sample-Gradle-Application
gradle build -x test contrastInstall
```

* The next step is to run the application with the java agent. 
```
cd path/to/Contrast-Sample-Gradle-Application/build
java -javaagent:contrast.jar -Dcontrast.appname=mytestapp -Dcontrast.server=mytestserver -jar libs/Contrast-Sample-Gradle-Application-0.0.1-SNAPSHOT.jar
```

* After executing the above code the server will start.  At this point we want to check that the application is running at localhost:8080 and that the application shows up in TeamServer.

* In your TeamServer verify that the application with the appname specified in the command above shows up.
* In the Contrast-Sample-Gradle-Application projects build.gradle we will now edit the contrastConfiguration to specify the appName and serverName that we specified as options with the Java agent in the previous step.
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
*  We can now run the verification task at any time to check for vulnerabilties.
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
    apiUrl = "http://www.app.contrastsecurity.com/Contrast/api"
    orgUuid = "QWER-ASDF-ZXCV-ERTY"
    appName = "Test Application"
    serverName = "jenkins.slave1"
    minSeverity = "Medium"
}
```