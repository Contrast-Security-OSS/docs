<!--
title: "Contrast Proxy Agent Overview"
description: "Overview of the Contrast Proxy agent"
tags: "installation agent webserver proxy nginx overview"
-->

The Contrast Proxy agent is application language and framework agnostic, similar to a WAF or Next Generation WAF. It provides runtime protection by analyzing HTTP request and response data at the web server level rather than the application level. The agent supports Contrast Protect only.

## About the Proxy Agent

The Proxy agent provides runtime protection of HTTP ingress and egress traffic as it's processed by a web server. In the most-common case, a web server is running in reverse proxy mode, and the agent is transparent to the application behind the reverse proxy. This enables the agent to Protect a variety of application technologies, such as PHP, Go, Perl, Groovy or any other language without a dedicated Contrast language agent.

<a href="assets/images/Proxy-agent-diagram.png" rel="lightbox" title="Proxy agent architecture"><img class="thumbnail" src="assets/images/Proxy-agent-diagram.png"/></a>

The agent is targeted to specific web server products and versions. For more information, see [Supported Technologies](installation-proxy.html#proxy-supported) for the Proxy agent. 

## Use the Agent

To start protecting your application with the Proxy agent, see the [Installation](installation-proxy.html#proxy-install) instructions for obtaining the software.
