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

For manual installation, use the `gem` command:

``` ruby
gem install path/to/contrast-agent-2.x.x.gem
```

### Contrast as a Gem Source

To use Contrast as a Gem Source, add the following line to your application's Gemfile:

``` ruby
group :contrast, :development, :test, :production do
    gem 'contrast-agent'
end
```

Add the following line to the top of your application's Gemfile:

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
bundle update --group contrast
```

If you're using the Sinatra framework, you must configure your application to use the Contrast agent. A simple application configured to work with the Contrast agent looks like the following example:

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

For Sinatra applications, you may directly place the configuration file in the working directory. For sharing a configuration file across multiple applications, you may place the file in */etc/contrast/contrast_security.yaml*.

## Run the Service

On application startup, the Contrast agent gem starts a service in a separate process. This process is responsible for aggregating messages from the agent, sending attack information to Contrast UI and receiving updates to settings from the UI. The agent is packaged with 64-bit Mac, Linux and Windows services. Because the service is launched by the agent, it has access to the same configuration file that the agent used. If the service process is stopped, the agent will attempt to restart it. In the unlikely event that the restart process fails, the agent will cease trying to restart the service after five attempts, and won't send findings to the Contrast UI. However, the agent will continue to protect the application using the last settings it received. 

You can access the service status using take tasks:

* `rake contrast:service:status`: Returns `online` or `offline`.
* `rake contrast:service:start`: Attempts to start the service using the configuration for the local contrast agent.
* `rake contrast:service:stop`: Attempts to stop the service. If the agent receives additional requests, it will attempt to restart the service on its own.

## Troubleshooting 

### Multiple Agents

**Ensure that the service host and port values are consistent.** If there are multiple applications protected by the Contrast agent, the first one to start will launch the service. This is not a problem since the service is designed to handle communication with multiple agents. But, if the `agent.service.host` and `agent.service.port` configuration values don't match,  the additional agent won't be able to communicate with the previously started service.

### Delay on First Request

**Inventory and coverage metrics are gathered on first request.** The initial message to the Contrast UI contains information about the routes and Gems used by the application for inventory analysis. This is a relatively heavyweight process, and may add a few seconds to the response time for the initial HTTP request to the application. Under some application servers (e.g., Puma) adding the `ruby.analyze_inventory_async: true` configuration can reduce this delay.

