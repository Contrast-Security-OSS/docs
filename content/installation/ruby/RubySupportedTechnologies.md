<!-- 
title: "Supported Technologies"
description: "List of supported technologies"
tags: "installation Ruby on Rails agent frameworks support troubleshooting gem"
-->

The Ruby agent supports Ruby language versions 2.3.x through 2.6.x. Framework support is currently for Ruby on Rails versions 3.x and above as well as Sinatra 2.x and above. The Ruby agent is a standard Rack middleware; consequently, it may work in other Rack-based web frameworks like Grape and Padrino. 

## Database Support

The Ruby Agent has SQL Injection modules for MySQL (`mysql2` gem), SQLite3 and PostgreSQL (`pg` gem). The Ruby Agent also has NoSQL Injection modules for MongoDB (`mongoid` gem).

## OS Support

Agent testing is done on **64-bit OSX** and **64-bit Linux**. The agent has *C* dependencies, and may not work in other operating system environments or under JRuby. 


