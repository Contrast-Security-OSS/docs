<!-- 
title: "Ruby Agent Overview "
description: "Troubleshooting the Ruby Agent"
tags: "installation Ruby on Rails agent troubleshooting"
-->

The Contrast Ruby agent provides runtime protection of Ruby on Rails web applications. 

## About Ruby 

The Ruby agent is a Rack middleware that's compatible with Ruby on Rails applications from version 3.0 and above as well as Sintra version 2.0 and above. It may also be compatible with other Rack-based web frameworks like Grape and Padrino.

From its position within the Rack middleware stack, the Ruby agent inspects HTTP requests to identify potentially harmful input vectors. During the request, the agent inspects database queries, file writes and other potentially damaging actions resulting from the request. At the end of the request, the agent inspects the rendered output for successful attacks, and can block a successful attack from being forwarded to the application user. The service sends the details of the attack to the Contrast application, which then sends you an alert and displays attack details in the interface. 

<a href="assets/images/Ruby-agent-arch.png" rel="lightbox" title="Ruby agent architecture"><img class="thumbnail" src="assets/images/Ruby-agent-arch.png"/></a>

## Use the Agent 

To Assess or Protect your application, download the Ruby agent and create a configuration file as described in [Ruby Agent Installation](installation-ruby.html#ruby-install). The Ruby agent is installed as a standard Ruby Gem.

