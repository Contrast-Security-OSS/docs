<!--
title: "Download the Java Agent from the Contrast UI"
description: "Downloading the Java agent from the Contrast UI"
tags: "installation Java agent installation contrast ui download"
-->

To install the Java agent from the Contrast UI, complete the following steps:

* Log in to the Contrast UI.
* Click the button in the top navigation bar to **Add Agent**.
* Select the **Java** agent in the dropdown menu, and click the button to **Download Agent**. You may need to specify proxy authentication information required by your network before downloading the agent.

<a href="assets/images/Download-java-agent.png" rel="lightbox" title="Download the Java agent"><img class="thumbnail" src="assets/images/Download-java-agent.png"/></a>

* After download, add a JVM parameter to install the Java agent.

> **Example:** `java -javaagent:contrast.jar -jar <app-name>.jar`

> To see examples for specific technologies, go to [Installation by Container](installation-javainstall.html) and select the article for the container you want to use.

To start analyzing an application, use the web application as you normally would in your browser: click on links, submit forms using normal data, etc. The sensors of the Contrast Java agent will gather information about the application’s security, architecture and libraries. You can view the results of the agent’s analysis in the Contrast UI.

If you want to download the agent and test with WebGoat, Contrast has a [public repository](https://github.com/Contrast-Security-OSS/agent-teamserver-tests) to help you get started.
