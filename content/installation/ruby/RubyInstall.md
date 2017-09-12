<!--
title: "Ruby Agent Installation"
description: "Installing the Ruby Agent"
tags: "Ruby on Rails agent installation"
-->

## Installation

To install the Contrast agent into your Ruby on Rails application, you must complete the following steps.  

1. Add the <i>contrast-agent-*.gem</i> to the application Gemfile. (This is outlined in the **Setup** section below.) 
2. Add the *contrast_security.yaml* file to the application's *config* directory. (This is outlined in the **Configuration** section below.)
3. Run the `contrast-service-*.gem` as a standalone service on the same server as the application. (This is outlined in the section below to **Run the Service**.)

## Setup

The <i>contrast-agent-*.gem</i> is a standard Ruby library that you can add to the application Gemfile. You can complete setup using Contrast as a Gem Source or by installing Contrast manually.

### Contrast as a Gem Source

To use Contrast as a Gem Source, add this line to your application's Gemfile:

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

Finally, run an update:

``` bash
bundle update
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

1. The current working directory
2. The YAML file in the *config* subdirectory (e.g. *config/contrast_security.yaml*), if the working directory of the service is the web application's root directory
3. The system's */etc/contrast_security.yaml* file

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


