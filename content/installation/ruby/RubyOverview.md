<!-- 
title: "Ruby Agent Overview "
description: "Troubleshooting the Ruby Agent"
tags: "installation Ruby on Rails agent troubleshooting"
-->

The **Contrast Ruby Agent** provides runtime protection of Ruby on Rails web applications. 

## Usage
To start protecting your application, download the Ruby agent and service and create a configuration file as described in [Ruby Agent Installation](installation-rubyinstall.html). The ruby agent is installed as a standard ruby gem and communicates with a stand-alone service that runs outside your application.

## Ruby Agent Overview
The ruby agent is a Rack middleware that is compatible with Ruby on Rails installation from 3.0 onward. It may be compatible with other Rack-based web frameworks like Sinatra. From it's position within the Rack middleware stack, the ruby agent inspects HTTP requests to identify possible harmful input vectors. During the request the agent inspects databse queries, file writes and other potentially damaging actions resulting from the request. Finally, at the end of the request the agent inspects the rendered output for successful attacks and can block a successful attack from being forwarded to the application user. The details of the attack are then sent, via the service, to TeamServer for display and alerting.
