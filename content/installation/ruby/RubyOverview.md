
<!-- 
title: "Ruby Agent Overview "
description: "Troubleshooting the Ruby Agent"
tags: "installation Ruby on Rails agent troubleshooting"
-->

The Contrast Ruby agent analyzes the behavior of Ruby web applications using established techniques, such as 
[monkey patching](https://en.wikipedia.org/wiki/Monkey_patch), to add Contrast sensors to an application at runtime.
 
## About the Agent

There are two primary components of the Ruby agent: the agent itself and a service used to communicate to the Contrast
Server.
 
The Ruby agent is a [Rack middleware](http://rack.github.io/) designed to integrate with Rack-based frameworks. 
A list of these supported frameworks can be found on our [Supported Technologies](installation-ruby.html#ruby-supported)
page. From its position within the Rack middleware stack, the Ruby agent inspects HTTP requests to identify potentially 
harmful input vectors. During the request, the agent inspects database queries, file writes, system calls, and other 
potentially damaging actions resulting from the request. 
 
The service is a standalone executable that translates messages from the agent to a format consumable by the Contrast
Server. The agent, on application start, will manage this service as a separate child process, isolating the service's
impact to the application. 

<a href="assets/images/Ruby-agent-arch.png" rel="lightbox" title="Ruby agent architecture"><img class="thumbnail" src="assets/images/Ruby-agent-arch.png"/></a>

## Use the Agent 

To start analyzing an application, download the Ruby agent and create a configuration file. The process is outlined in
the [Ruby Agent Installation](installation-ruby.html#ruby-install) article. The Ruby agent is installed as a standard
Ruby Gem and then activated as a standard middleware.

