<!--
title: "Installing with Passenger"
description: "Recommendations for installing in applications run by Passenger"
tags: "ruby agent installation Passenger"
-->

## Inability to Start the Application

### Cause - Application Timeout

The most common issue faced when integrating with an application started and monitored by Passenger is the increase in
application startup time introduced by the Ruby Agent. Because we monkey patch at load time, on require and similar
methods, there is a one time penalty incurred the first time a Module is loaded. As such, the application startup, and
the first request to each controller may be delayed. 

If your application startup is already close to the timeout for your Passenger instance, which defaults to 90 seconds,
the application may not be able to start in time. If that is the case, Passenger will terminate the application with a
`SIGKILL` signal and then attempt a restart. Unfortunately, because our patching happens at runtime, restarting the
application incurs the startup penalty again, resulting in a loop of startups and shutdowns. 

### Solution - Application Timeout

While it is our goal to reduce the overhead of instrumenting and using the Contrast Agent, there will always be an
overhead to introducing us to the application. As such, it is recommended that you increase the timeout of your
Passenger configuration to account for this. Given your normal application startup time, we recommend allocating at
least five times that amount, or at a minimum 300s, for timeout during troubleshooting. As you see how the Agent behaves
within your application and we work to lessen our startup impact, this number can ideally be decreased.

The manner in which you adjust this timeout depends on how you're using Passenger. 

#### Apache Timeout

From the [Passenger documentation](https://www.phusionpassenger.com/library/config/apache/reference/), the application
timeout is controlled by [PassengerStartTimeout](https://www.phusionpassenger.com/library/config/apache/reference/#passengerstarttimeout).
This value defaults to 90 seconds, but that may not be enough time. To increase this timeout, you'll need to update your
configuration file. 

You can find the configuration file your deployment is using with the command `which passenger-config`. Within this
file, there should be a series of Passenger configurations, starting with the prefix `Passenger`. Adjacent to these
configurations, supply the configuration `PassengerStartTimeout #{ seconds }` where seconds is the timeout. For
instance, `PassengerStartTimeout 300` sets the timeout to 300 seconds. Once you've updated this timeout configuration,
you'll need to restart Apache to verify the change takes effect in all instances of Passenger. 

RPM provides more information on Passenger configurations [here](http://rpm.repo.onapp.com/sources/rubygem-passenger-4.0.35/passenger-4.0.35/doc/Users%20guide%20Apache.html#_passengerstarttimeout_lt_seconds_gt).

> **Note:** if your configuration already has this value, or you're overriding with a configuration that has a higher
precedence, you'll need to replace it with the new seconds. 

#### Nginx Timeout

From the [Passenger documentation](https://www.phusionpassenger.com/library/config/apache/reference/), the application
timeout is controlled by [passenger_start_timeout](https://www.phusionpassenger.com/library/config/nginx/reference/#passenger_start_timeout).
This value defaults to 90 seconds, but that may not be enough time. To increase this timeout, you'll need to update your
configuration file.

Because the configuration when running with Nginx only honors the Nginx configuration file, the following changes must
be made there, and not in the Passengerfile.json. By default, this configuration will be at `/etc/nginx/nginx.conf` for
*nix systems and `/usr/local/etc/nginx/nginx.conf` for Mac. Within this file, there should be a section in which you've
enabled Passenger with `passenger_enabled on;`. In this section, add `passenger_start_timeout #{ seconds }` where
seconds is the timeout. For instance, `passenger_start_timeout 300` sets the timeout to 300 seconds. Once you've updated
this timeout configuration, you'll need to restart Nginx to verify the change takes effect in all instances of Passenger.

is tDigital Ocean provides more information on Nginx configurations [here]([configuration](https://www.digitalocean.com/community/tutorials/understanding-the-nginx-configuration-file-structure-and-configuration-contexts).

> **Note:** if your configuration is for multiple servers, each server on which the Ruby Agent is installed must have the
timeout configuration updated. 
