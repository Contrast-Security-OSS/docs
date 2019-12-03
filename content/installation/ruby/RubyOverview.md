
<!-- 
title: "Ruby Agent Overview "
description: "Overview of the Ruby Agent"
tags: "installation Ruby on Rails agent overview"
-->

The Contrast Ruby agent analyzes the behavior of Ruby web applications using established techniques, such as 
[monkey patching](https://en.wikipedia.org/wiki/Monkey_patch), to add Contrast sensors to an application at runtime. 

## About the Agent

There are two primary components of the Ruby agent: the **agent** and a **service** used to communicate to the Contrast
Server.
 
The Ruby agent is a [Rack middleware](http://rack.github.io/) designed to integrate with Rack-based frameworks. 
From its position within the Rack middleware stack, the Ruby agent inspects HTTP requests to identify potentially harmful input vectors. During the request, the agent inspects database queries, file writes, system calls, and other potentially damaging actions resulting from the request. 

> **Note:** For a list of frameworks supported by the Ruby agent, see the [Supported Technologies](installation-ruby.html#ruby-supported) article. 
 
The service is a standalone executable that translates messages from the agent to a format consumable by the Contrast
Server. On application start, the agent manages this service as a separate child process, which isolates the service's
impact on the application. 

<a href="assets/images/Ruby-agent-arch.png" rel="lightbox" title="Ruby agent architecture"><img class="thumbnail" src="assets/images/Ruby-agent-arch.png"/></a>

## Use the Agent 

To start analyzing an application, download the Ruby agent and create a configuration file using the process outlined in
the Ruby agent's [Installation](installation-ruby.html#ruby-install) article. The Ruby agent is installed as a standard
Ruby Gem and then activated as a standard middleware.

