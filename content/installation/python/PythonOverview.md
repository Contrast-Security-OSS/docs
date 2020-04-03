<!-- 
title: "Python Agent Overview "
description: "About the Python agent"
tags: "installation python agent overview"
-->

The Contrast Python agent provides runtime protection of Django, Flask and Pyramid web applications.

Starting with Python agent version 2.8.0, you can find application vulnerabilities with
Assess before they can be exploited.

## About Python 

The Python agent is a WSGI- and framework-specific middleware that's compatible with the most-popular web application frameworks. The agent's goal is to be fully WSGI compatible along with other web frameworks. 

In Protect mode, the Python agent inspects HTTP requests to identify potentially harmful input vectors. During the request, the agent inspects database queries, file writes and other potentially damaging actions resulting from the request. At the end of the request, the agent inspects the rendered output for successful attacks, and can block a successful attack from being forwarded to the application user. The service sends the details of the attack to the Contrast application, which then sends you an alert and displays attack details in the interface.

In Assess mode, the agent identifies vulnerable dataflow paths and other issues during normal execution of your application. It reports these findings to your organization in the Contrast UI; you can then remediate the vulnerabilities before deploying the application in a live environment.

<a href="assets/images/Python-agent-arch.png" rel="lightbox" title="Python agent architecture"><img class="thumbnail" src="assets/images/Python-agent-arch.png"/></a>

## Use the Agent 

To start using your application with Contrast, download the Python agent and create a configuration file as described in [Python Agent Installation](installation-python.html#python-install). The Python agent is installed as a standard Python package, and uses the Contrast Service to communicate results.

By default, the service is started automatically when your application starts. It's also possible to configure the agent to communicate with a standalone Contrast Service that runs independently. See the [Contrast Service documentation](installation-service.html#service-overview) for more details.
