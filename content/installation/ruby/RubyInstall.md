<!--
title: "Ruby Agent Installation"
description: "Installing the Ruby Agent"
tags: "Ruby on Rails agent installation"
-->

## Installation

To install the Contrast agent into your Ruby application, you must complete the following steps.  

1. Add the <i>contrast-agent-*.gem</i> to the application Gemfile. (This is outlined in the <b>Setup</b> section below.) 
2. Add the *contrast_security.yaml* file to the application's *config* directory. (This is outlined in the **Configuration** section below.)

## Setup

The <i>contrast-agent-*.gem</i> is a standard Ruby library that you can add to the application Gemfile. You can complete setup using Contrast UI as a Gem Source or by installing the gem manually. 

Manual installation is done using the `gem` command.

``` ruby
gem install path/to/contrast-agent-2.x.x.gem
```

### Contrast as a Gem Source

To use Contrast as a Gem Source, add this line to your application's Gemfile:

``` ruby
gem 'contrast-agent', '~> 2.0'
```

Add this line to the top of your application's Gemfile:

``` ruby
source 'https://app.contrastsecurity.com/Contrast/api/repo/rvm'
```

After editing the Gemfile, you must bundle the *contrast-agent* gem by adding authorization to your Bundler:

> **Note:** Make sure that your username is CGI escaped. For example, `fname.lname@example.com` becomes `fname.lname%40example.com`.

``` bash
bundle config https://app.contrastsecurity.com/Contrast/api/repo/rvm ${username}:${service_key}
```

Finally, run an update:

``` bash
bundle install
```

``` bash
bundle update
```

If you're using the Sinatra framework, you must configure your application to use the Contrast agent. A simple application configured to work with the Contrast agent looks like the following:

``` ruby
require 'sinatra'
require 'contrast-agent'

class App < Sinatra::Base
  use Contrast::Agent::Middleware, true
end
```

### Manual installation

To install the Contrast agent manually, download the <i>contrast-agent-*.gem</i> file to a local directory, and add the gem to the project Gemfile:

``` ruby
gem 'contrast-agent'
```

Install the gem in the gemset for the current application:

``` bash
bundle install ./path/to/contrast-agent-*.gem
``` 

> **Note:** In systems using the `rvm` or `rbenv`, the environment of a user on the system might be different than the environment that the runtime server environment is using. If you can't find the gem after server startup, make sure that the gem is in a gemset available to the running web server environment. 

## Configuration

Download a standard configuration file from the Contrast application. You must place the file in the web application's *config* directory, and define the following fields, at a minimum:

``` yaml
contrast:
  url: 
  api_key:
  service_key:
  user_name:
agent:
  service:
    host: 
    port:
    logger:
      path: 
      level:
```

For Sinatra application the config file can be placed directly in the working directory. For sharing a config file across multiple applications the file may be placed in `/etc/contrast/contrast_security.yaml`.

## Run the Service

On application startup, the Contrast agent gem starts a service in a separate process. This process is responsible for aggregating messages from the agent, sending attack information to Contrast UI and receiving updates to settings from the UI. The agent is packaged with 64-bit Mac, Linux and Windows services.  Because the service is launched by the agent it has access to the same config file that the agent used. If the service process is stopped, the agent will attempt to restart it. In the unlikely event that the restart process fails, after 5 attempts the agent will cease trying to restart the service and will not send findings to the Contrast UI. However, it will continue to protect the application using the last settings it received. 

The service status can be accessed using take tasks:

* `rake contrast:service:status`: returns `online` or `offline`
* `rake contrast:service:start`: attempts to start the service using the configuration for the local contrast agent
* `rake contrast:service:stop`: attempts to stop the service. Note that if the agent receives additional requests it will attempt to restart the service on its own.

## Troubleshooting 

### Multitple Agents

*Ensure that the service host and port values are consistent.* Because the agent attempts to start the service on application startup, if there are multiple applications protected by the contrast agent, the first one to start will launch the service. This is not a problem since the service is designed to handle communication with multiple agents, however if the `agent.service.host` and `agent.service.port` configuration values don't match then the additional agent will be unable to communicate with the previously started service.

### Delay on First Request

*Inventory and coverage metrics are gathered on first request.* The initial message to the Contrast UI containes information about the routes and Gems used by the application for inventory analysis. This is a relatively heavyweight process and may add a few seconds to the response time for the initial HTTP request to the application. Under some application servers (e.g. Puma) adding the `ruby.analyze_inventory_async: true` configuration can reduce this delay.

