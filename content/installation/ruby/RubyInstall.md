<!--
title: "Ruby Agent Installation"
description: "Installing the Ruby Agent"
tags: "Ruby on Rails agent installation"
-->

## Installation

To install the Ruby agent into your Ruby application, you must complete the following steps.

1. Add the *contrast-agent.gem* to the application Gemfile. (This is outlined in the [Setup](#Setup) section below.)
1. Add the *contrast_security.yaml* file to the application's *config* directory. (This is outlined in the [Configuration](#Configuration) section below.)
1. Verify that [`autoconf`](https://www.gnu.org/software/autoconf/) is installed on the system where you will run the agent.

## Setup

The *contrast-agent.gem* is a standard Ruby library that you can add to the application Gemfile. You can complete setup using RubyGems as a Gem Source or by installing the gem manually.

### RubyGems as a Gem Source

To download Contrast from RubyGems, add the following to your application's Gemfile:

``` ruby
gem 'contrast-agent'
```

and run an install:

``` bash
bundle install
```

or an update:

``` bash
bundle update
```

> **Note:** If you only want to run with Contrast in certain environments, you can do so using the Bundler's [Group](https://bundler.io/v1.5/groups.html) function.

### Manual installation

To install the Ruby agent manually, download the *contrast-agent-\*.gem* file to a local directory, and add the gem to the project Gemfile:

``` ruby
gem 'contrast-agent'
```

and install the gem in the gemset for the current application:

``` bash
gem install ./path/to/contrast-agent-*.gem --platform ruby
```

and run an install:

``` bash
bundle install
```

or an update:

``` bash
bundle update
```

> **Note:** In systems using the `rvm` or `rbenv`, the environment of a user on the system might be different than the environment that the runtime server environment is using. If you can't find the gem after server startup, make sure that the gem is in a gemset available to the running web server environment.

> **Note:** In cases where the Gem is not installed and the system can connect to RubyGems, Bundler will fall back to using RubyGems.

## Configuration

Download a standard configuration file from the Contrast application. You must place the file in the web application's *config* directory, and define the following fields, at a minimum:

``` yaml
api:
  url:
  api_key:
  service_key:
  user_name:
```

For Sinatra applications, you may directly place the configuration file in the working directory. For sharing a configuration file across multiple applications, you may place the file in */etc/contrast/contrast_security.yaml*.

## Connecting to your Application

### Rails

The Ruby Agent functions as a [Railtie](https://github.com/rails/rails/tree/master/railties), so no additional configuration is required.

### Sinatra

If you're using the Sinatra framework, you must configure your application to use the Ruby agent. A simple application configured to work with the Ruby agent looks like the following example:

``` ruby
require 'sinatra'
require 'contrast-agent'

class App < Sinatra::Base
  use Contrast::Agent::Middleware, true
end
```


## Run the Service

On application startup, the Ruby agent starts a service in a separate process. This process is responsible for aggregating messages from the agent, sending attack information to Contrast UI and receiving updates to settings from the UI. The agent is packaged with 64-bit Mac and Linux services. Because the service is launched by the agent, it has access to the same configuration file that the agent used. If the service process is stopped, the agent will attempt to restart it. In the unlikely event that the restart process fails, the agent will cease trying to restart the service after five attempts, and won't send findings to the Contrast UI. However, the agent will continue to protect the application using the last settings it received.

You can access the service status using take tasks:

* `rake contrast:service:status`: Returns `online` or `offline`.
* `rake contrast:service:start`:  Attempts to start the service using the configuration for the local Ruby agent.
* `rake contrast:service:stop`:   Attempts to stop the service. If the agent receives additional requests, it will attempt to restart the service on its own.

## Troubleshooting

### Multiple Agents

**Ensure that the service host and port values are consistent.** If there are multiple applications protected by the Ruby agent, the first one to start will launch the service. This is not a problem since the service is designed to handle communication with multiple agents. But, if the `agent.service.host` and `agent.service.port` configuration values don't match, the additional agent won't be able to communicate with the previously started service.
