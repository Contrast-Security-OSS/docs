<!--
title: "Installing on AWS"
description: "AWS installation process"
tags: "java agent installation AWS ebs elasticbeanstalk"
-->

Amazon Web Services (AWS) is a secure cloud services platform that provides a reliable, scalable and affordable computing platform solution. By using AWS, Contrast users can maximize the security of their applications.

Contrast works with the following AWS systems:

* AWS Elastic Beanstalk
* Amazon EC2
* Amazon RDS

## Before You Start

* [Download and install the Java agent](installation-javastandard.html) from Contrast.
* Create an [AWS Elastic Beanstalk account](https://aws.amazon.com/elasticbeanstalk/).

## Installation

### Step one

* In your WAR file, add the *contrast.jar* file to *WEB-INF/lib/*.

* Repackage and deploy your new WAR file as a new application, or an update to a previous application.

* Locate and connect to the underlying EC2 instance. Once connected, use the following command to find the path to *contrast.jar* file. (Substitute `/opt` as appropriate.)

```
sudo find /opt -name "contrast.jar"
```

### Step two

Pass the `-javaagent` flag to JVM in Elastic Beanstalk by completing the following steps.

* In the AWS console, open Elastic Beanstalk.
* Choose a region.
* Choose your application.
* In the left navigation, select **Configurations**.
* Open **Software Configuration**.
* In the **JVM command line options:** field, enter `-javaagent:/full/path/to/contrast.jar`.
* Select **Apply** to save.
* Elastic Beanstalk updates your environment.

For more information about AWS and Java, go to the [AWS documentation](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/java-getstarted.html).
