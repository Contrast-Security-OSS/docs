<!--
title: "Installing on AWS"
description: "AWS installation process"
tags: "java agent installation AWS"
-->

## Prerequisites

* Download the Contrast plugin (*contrast.jar*) from Contrast.
* Create an [AWS Elastic Beanstalk account](https://aws.amazon.com/elasticbeanstalk/). 

## Installation 

### Step one 

* In your WAR file, add the *contrast.jar* and *contrast.yml* files to *WEB-INF/lib/*.

* Repackage and deploy your new WAR file as a new application, or an update to a previous application.

* Locate and connect to the underlaying EC2 instance. Once connected, use the following command to find the path to *contrast.jar* file. (Substitute either `/var` or `/usr` as appropriate.)

```
sudo find </var | /usr> -name "contrast.jar"
```

### Step two 

Pass the `-javaagent` flag to JVM in AWS Elastic Beanstalk by completing the following steps.

* In the AWS console, open Elastic Beanstalk.
* Select the relevant region.
* Select your application.
* In the left navigation, select **Configurations**.
* Open **Software Configuration**.
* In the **JVM command line options:** field, enter `-javaagent:/full/path/to/contrast.jar`. 
* Select **Apply** to save.

Your Elastic Beanstalk then updates your environment.




To learn more about Contrast and AWS, read ...

http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/java-getstarted.html