<!--
title: "Java Agent Installation"
description: "Overview of the Java Agent installation"
tags: "installation Java agent overview installation"
-->

To install the Java agent, complete the following steps:

* Log in to the Contrast interface. 
* Click the button in the top navigation bar to **Add an Application**.
* Select the **Java** agent in the dropdown menu, and click the button to **Download Agent**. You may need to specify proxy authentication information required by your network before downloading the agent.

> **Note:** The **Java** agent can be used with all compatible versions of Java, and will upgrade auto-restart. The **Java 1.5** agent does not upgrade auto-restart. 

<a href="assets/images/Download-java-agent.png" rel="lightbox" title="Download the Java agent"><img class="thumbnail" src="assets/images/Download-java-agent.png"/></a>

* Extract the downloaded zip archive file (e.g., *ContrastSetup_3.3.5.zip*) on the web server, and run *ContrastSetup.exe*. This installs the Java agent. 

To start analyzing an application, use the web application as you normally would in your browser: click on links, submit forms using normal data, etc.  The sensors of the Contrast Java agent will gather information about the application’s security, architecture and libraries. You can view the results of the agent’s analysis in the Contrast interface.


