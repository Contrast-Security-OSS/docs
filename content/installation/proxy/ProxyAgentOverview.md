<!--
title: "Contrast Proxy Agent Overview"
description: "Overview of the Contrast Proxy agent"
tags: "installation agent webserver proxy nginx overview"
-->

The Contrast Proxy agent is application language and framework agnostic. It provides runtime protection by analyzing HTTP request and response data at the web server level rather than the application level. The agent supports Contrast Protect only. 

## About the Proxy Agent

The Proxy agent provides runtime protection of HTTP ingress and egress traffic as it's processed by a web server. In the most-common case, a web server is running in reverse proxy mode, and the agent is transparent to the application behind the reverse proxy. As the Proxy agent integrates into the web server, and not the specific application, it's agnostic to the language being used in the web application it's protecting. As a result, you can use the agent to protect a variety of application technologies such as PHP, Go, Perl and Groovy.   

From its position in the technology stack, the Proxy agent has a high-level view of the HTTP communication that's similar to traditional WAF and Next Generation WAF technologies.

<a href="assets/images/Proxy-agent-diagram.png" rel="lightbox" title="Proxy agent architecture"><img class="thumbnail" src="assets/images/Proxy-agent-diagram.png"/></a>

The agent is targeted to specific web server products and versions. For more information, see [Supported Technologies](installation-proxy.html#proxy-supported) for the Proxy agent. 

## Use the Agent

To start protecting your application with the Proxy agent, see the [Installation](installation-proxy.html#proxy-install) instructions for obtaining the software.
