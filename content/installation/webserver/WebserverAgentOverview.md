<!--
title: "Contrast Webserver Agent Overview"
description: "Overview of the Contrast Webserver agent"
tags: "installation agent webserver nginx overview"
-->

The Contrast Webserver agent is application language and framework agnostic. It provides runtime protection by analyzing HTTP request and response data at the web server level rather than the application level. The agent supports Contrast Protect only. 

## About the Webserver Agent

The Webserver agent provides runtime protection of HTTP ingress and egress traffic as it's processed by a web server. In the most-common case, a web server is running in reverse proxy mode, and the agent is transparent to the application behind the reverse proxy. As the Webserver agent integrates into the web server, and not the specific application, it's agnostic to the language being used in the web application it's protecting. As a result, you can use the agent to protect a variety of application technologies such as PHP, Go, Perl and Groovy.   

From its position in the technology stack, the Webserver agent has a high-level view of the HTTP communication that's similar to traditional WAF and Next Generation WAF technologies.

<a href="assets/images/Webserver-agent-diagram.png" rel="lightbox" title="Webserver agent architecture"><img class="thumbnail" src="assets/images/Webserver-agent-diagram.png"/></a>

The agent is targeted to specific Webserver products and versions. For more information, see [Supported Technologies](installation-webserver.html#webserver-supported) for the Webserver agent. 

## Use the Agent

To start protecting your application with the Webserver agent, see the [Installation](installation-webserver.html#webserver-install) instructions for obtaining the software.
