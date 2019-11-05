<!-- 
title: "Python Agent Overview "
description: "About the Python agent"
tags: "installation python agent overview"
-->

The Contrast Python agent provides runtime protection of Django, Flask and Pyramid web applications. 

## About Python 

The Python agent is a WSGI- and framework-specific middleware that's compatible with the most-popular web application frameworks. The agent's goal is to be fully WSGI compatible along with other web frameworks. 

From its position within the middleware stack, the Python agent inspects HTTP requests to identify potentially harmful input vectors. During the request, the agent inspects database queries, file writes and other potentially damaging actions resulting from the request. At the end of the request, the agent inspects the rendered output for successful attacks, and can block a successful attack from being forwarded to the application user. The service sends the details of the attack to the Contrast application, which then sends you an alert and displays attack details in the interface. 

<a href="assets/images/Python-agent-arch.png" rel="lightbox" title="Python agent architecture"><img class="thumbnail" src="assets/images/Python-agent-arch.png"/></a>

## Use the Agent 

To start protecting your application, download the Python agent and service, and create a configuration file as described in [Python Agent Installation](installation-python.html#python-install). The Python agent is installed as a standard Python package, and communicates with a standalone Contrast Service that runs outside your application.
