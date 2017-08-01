<!--
title: "Ruby Agent Installation"
description: "Installing the Ruby Agent"
tags: "Ruby on Rails agent installation"
-->

## Installation

To installing the Contrast Security agent into your Ruby on Rails application, you will:  

* Add the `contrast-agent-*.gem` to the application Gemfile,
* Adding the `contrast_security.yaml` to the application's `config` directory, and  
* Run the `contrast-service-*.gem` as a stand-alone service on the same server as the application.

## Setup

The `contrast-agent-*.gem` is a standard Ruby library that you can add to the application Gemfile.


### Use Contrast as a Gem Source

Add this line to your application's Gemfile:

``` ruby
gem 'contrast-agent'
```

Add this line to the top of your application's Gemfile:

``` ruby
source 'https://app.contrastsecurity.com/Contrast/api/repo/rvm'
```

After editing the Gemfile, you must bundle the `contrast-agent` gem by adding authorization to your Bundler:

``` bash
bundle config https://app.contrastsecurity.com/Contrast/api/repo/rvm ${username}:${service_key}
```

Then run an update:

``` bash
bundle update
```

### Manual installation

Download the *contrast-agent-*.gem* file to a local directory. Add the gem to the project Gemfile.

``` ruby
gem 'contrast-agent'
```

Install the gem in the gemset for the current application. 

``` bash
bundle install ./path/to/contrast-agent-*.gem
``` 

> **Note:** In systems using the `rvm` or `rbenv`, the environment of a user on the system might be different than the environment that the runtime server environment is using.

If you can't find the gem after server startup, make sure that the gem is in a gemset available to running web server environment. 

### Configuration

Download a standard configuration file from the Contrast application. You must place the file in the web application's `config` directory, and define the following fields, at a minimum:

``` yaml
service:
  host:
  port:
application:
  logger:
    path:
    level:
```

## Run the Service

The `contrast-service-*.gem` is an executable that you must run on the same server as the web application. Begin by downloading the `contrast-service-*.gem` from the Contrast application. It must be the same version as the `contrast-agent-*.gem`.

The service, like the agent, reads its configuration from one of the following locations in the following order: 

#. the current working directory
#. if the working directory of the service is the web app's root directory, the YAML file in the `config` subdirectory (e.g. `config/contrast_security.yaml`) will be used
#. the system's `/etc/contrast_security.yaml` file.

Define the following sections, at minimum, in the configuration file:

```yaml
teamserver:
  user_name:
  service_key:
  api_key:
  url:
service:
  host:
  port:
```


