<!--
title: "Java Agent Installation"
description: "Overview of the Java Agent installation"
tags: "installation Java agent overview installation"
-->

To install the Java agent, complete the following steps:

* Log in to the Contrast interface.
* Click the button in the top navigation bar to **Add Agent**.
* Select the **Java** agent in the dropdown menu, and click the button to **Download Agent**. You may need to specify proxy authentication information required by your network before downloading the agent.

> **Notes:** 
 * The **Java** agent can be used with all compatible versions of Java greater than 5, and upgrades automatically upon restart if a newer version is available. The **Java 1.5** agent doesn't upgrade automatically upon restart.
 * You must not rename the *contrast.jar* file. If the agent file name is changed, the agent will [fail to connect](troubleshooting-javainstall.html#class) with the Contrast application. 

<a href="assets/images/Download-java-agent.png" rel="lightbox" title="Download the Java agent"><img class="thumbnail" src="assets/images/Download-java-agent.png"/></a>

To start analyzing an application, use the web application as you normally would in your browser: click on links, submit forms using normal data, etc.  The sensors of the Contrast Java agent will gather information about the application’s security, architecture and libraries. You can view the results of the agent’s analysis in the Contrast interface.

If you want to download the agent and test with WebGoat, Contrast has a [public repository](https://github.com/Contrast-Security-OSS/agent-teamserver-tests) to help you get started.
