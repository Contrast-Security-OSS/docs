<!--
title: "Contrast Gradle Plugin" 
description: "Sample Gradle build plugin using the Contrast Java SDK"
tags: "tools Gradle SDK Integration Java"
-->

## About the Contrast Gradle Plugin

The Contrast Gradle Plugin is used to integrate the *Contrast.jar* with your build. It's capable of authenticating to the Contrast application, downloading the latest Java agent and verifying your build.

> **Note:** [Gradle](https://gradle.org/) is a build tool that utilizes `build.gradle` files to configure your applications. It's used to build, package, and test various types of applications.

This documentation is for the version 2.X of the plugin. For version 1.X, please refer to the [documentation on Github](https://github.com/Contrast-Security-OSS/contrast-gradle-plugin/blob/1.3.0/README.md).

## Access the Plugin

The plugin code can be viewed in our [Github repository](https://github.com/Contrast-Security-OSS/contrast-gradle-plugin). Here you can review the two tasks added by the plugin, `contrastInstall` and `contrastVerify`, and how they work.

The latest version of the plugin can be found on [Gradle's plugin webpage](https://plugins.gradle.org/plugin/com.contrastsecurity.contrastplugin).

## Use the Plugin

### Goals

* `contrastInstall`: Installs a Contrast Java agent to your local project. 
The plugin edits the `org.gradle.jvmargs` property in the *gradle.properties* file to launch the JVM with the Contrast agent. An application version, by which the vulnerabilities are filtered in the `contrastVerify` task, is generated during this task. The plugin generates the application version in the following order:

    * If your build is running in TravisCI, Contrast uses `appName-$TRAVIS_BUILD_NUMBER`.
    * If your build is running in CircleCI, Contrast uses `appName-$CIRCLE_BUILD_NUM`.
    * If your build is running in neither TravisCI nor CircleCI, Contrast generates one in the format `appName-yyyyMMddHHmm`.

* `contrastVerify`: Checks for new vulnerabilities in your web application. 

## Configuration

The table belows shows all the parameters for the plugin. These settings are for connecting to the Contrast application and filtering your vulnerabilities.


| Parameter                    | Description                                             |
|------------------------------|---------------------------------------------------------|
| TeamServer Username          | Username/email for your user in the Contrast UI         |
| TeamServer Service Key       | [Service Key](admin-orgsettings.html#apikey)            |
| TeamServer API Key           | [API Key](admin-orgsettings.html#apikey)                |
| TeamServer API Url           | API URL to the Contrast application                     |
| TeamServer Organization Uuid | [Organization UUID](admin-orgsettings.html#apikey)                                      |
| Application Name             | Name of application you set with `-Dcontrast.appname` <BR> This is used to filter for your application |
| Minimum Severity Level       | Minimum severity level to filter for (Note, Low, Medium, High, Critical). This property is inclusive. |
| Server Name                  | Name of server you set with `-Dcontrast.server` <BR> Use *app.contrastsecurity.com/Contrast/api* if you are a SaaS customer |
| Jar Path                     | Path of a local *jar* file if you don't want to download the agent again                  |


>**Note**: Even if your build succeeds, the plugin will fail the overall build if a vulnerability is found at or above the severity level set in the configuration.

## Onboard a Sample Web Application

The easiest way to set up a project is to clone our sample Gradle-based web application. This application has been migrated from Maven to Gradle, and relies on MongoDB; you will install that and set up the database path.

```
git clone https://github.com/Contrast-Security-OSS/Contrast-Sample-Gradle-Application
brew install mongodb
sudo mkdir -p /data/db
brew services start mongodb
```

* Now we have an application that is ready to run. Open up the *Contrast-Sample-Gradle-Application/build.gradle* file. Scroll to the very bottom and you find the following `contrastConfiguration` extension. You can find all of these values in the Contrast UI **except** for `appName` and `serverName`.

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
* Once username, apiKey, serviceKey, apiUrl, and orgUuid have been configured we can install the Contrast *jar* file by calling the `contrastInstall` task. This will install **contrast.jar** within the project's build directory.

```
cd path/to/Contrast-Sample-Gradle-Application
gradle build -x test contrastInstall
```

* The next step is to run the application with the Java agent. 

```
cd path/to/Contrast-Sample-Gradle-Application/build
java -Dcontrast.appname=mytestapp -Dcontrast.server=mytestserver -jar libs/Contrast-Sample-Gradle-Application-0.0.1-SNAPSHOT.jar
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

## Example

Below is a sample configuration for the Contrast Gradle Plugin:

``` groovy
buildscript {
  repositories {
    maven {
      url "https://plugins.gradle.org/m2/"
    }
  }
  dependencies {
    classpath "gradle.plugin.com.contrastsecurity:ContrastGradlePlugin:1.1.1"
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
