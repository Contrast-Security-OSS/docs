<!--
title: "Ruby Agent Installation"
description: "Installing the Ruby Agent"
tags: "Ruby on Rails agent installation"
-->

## Installation
Installing the Contrast Security agent into your Ruby on Rails application consists of adding the `contrast-agent-*.gem` to the application Gemfile, adding the `contrast_security.yaml` to the application's `config` directory and running the `contrast-service-*.gem` as a stand-alone service on the same server as the application.

## Setup
The `contrast-agent-*.gem` is a standard ruby library that can be added to the application Gemfile.


### Using TeamSever as a Gem Source

Add this line to your application's Gemfile:

``` ruby
gem 'contrast-agent'
```

Add this line to the top of your application's Gemfile:

``` ruby
source 'https://app.contrastsecurity.com/Contrast/api/repo/rvm'
```

After editing the Gemfile, you'll need to bundle the contrast-agent gem. To do that, you'll need to add authorization to your Bundler:

``` bash
bundle config https://app.contrastsecurity.com/Contrast/api/repo/rvm ${username}:${service_key}
```

Then run an update:

``` bash
bundle update
```

### Manual installation
Download the `contrast-agent-*.gem` file to a local directory.

Add the gem to the project Gemfile.

``` ruby
gem 'contrast-agent'
```

Install the gem in the gemset for the current application. Note that in systems using the `rvm` or `rbenv` the environment of a user on the system might not be the same environment that the runtime server environment is using.

``` bash
bundle install ./path/to/contrast-agent-*.gem
``` 

If the gem can not be found after server startup, ensure that the gem is in a gemset available to running web server environment. 

### Configuration

A standard configuration file can be downloaded from TeamServer. This must be placed in the web application's `config` directory. The following fields, at minimum, must be defined:

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
The `contrast-service-*.gem` is an executable that must be run on the same server as the web application.

First, download the `contrast-service-*.gem` from TeamServer. It must be the same version as the `contrast-agent-*.gem`.

The service, like the agent, reads it's configuration from one of the following locations in the following order. 

#. the current working directory
#. if the working directory of the service is the web app's root directory, the YAML file in the `config` subdirectory (e.g. `config/contrast_security.yaml`) will be used
#. the system's `/etc/contrast_security.yaml` file.

The following sections, at minimum, must be defined in the configuration file:
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


