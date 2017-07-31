<!-- 
title: "Supported Technologies"
description: "List of supported technologies"
tags: "installation Ruby on Rails agent frameworks support troubleshooting gem"
-->
The Contrast Security ruby agent supports Ruby language version 2.0.x and higher and Ruby on Rails versions 3.x and higher. The ruby agent is a standard Rack middleware and may work in other rack-based web frameworks like Sinatra. 

## Database Support
The Ruby Agent has SQL Injection modules for MySQL (`mysql2` gem), SQLite3 and PostgreSQL (`pg` gem).

## OS Support
Testing of the agent is done on **64-bit OSX** and **64-bit Linux**. The agent has no C dependencies and may work in other operating system environments but the associated service does depend on Nokogiri and EventMachine and may have trouble compiling under non-supported operating systems.


