<!--
title: "Installing Contrast with Passenger"
description: "Troubleshooting and recommendations for installing the Ruby agent on applications run by Passenger"
tags: "ruby agent troubleshooting installation Passenger application timeout"
-->

## Inability to Start the Application

### Cause: Application Timeout

The most common issue faced when integrating with an application started and monitored by Passenger is the increase in application startup time introduced by the Ruby agent. Because the agent monkey patches at load time on require and similar methods, there's a one-time penalty incurred the first time a Module is loaded. As such, the application startup, and the first request to each controller may be delayed. 

If your application startup is already close to the timeout for your Passenger instance, which defaults to 90 seconds, the application may not be able to start in time. In that case, Passenger will terminate the application with a `SIGKILL` signal and then attempt a restart. As the Contrast agent patching happens at runtime, restarting the application incurs the startup penalty again, which results in a loop of startups and shutdowns. 

### Solution: Application Timeout

While it's Contrast's goal to reduce the overhead of instrumenting and using the Contrast agent, there will always be an overhead to introducing it to the application. To account for this, Contrast recommends that you increase the timeout of your Passenger configuration. 

Given your normal application startup time, Contrast recommends allocating at least five times that amount - or a minimum of 300 seconds - for timeout during troubleshooting. As you see how the agent behaves within your application and Contrast works to lessen our startup impact, this number may decrease.

The manner in which you adjust this timeout depends on how you're using Passenger. 

#### Apache Timeout

From the [Passenger documentation](https://www.phusionpassenger.com/library/config/apache/reference/), the application
timeout is controlled by [PassengerStartTimeout](https://www.phusionpassenger.com/library/config/apache/reference/#passengerstarttimeout). This value defaults to 90 seconds, but that may not be enough time. To increase this timeout, you'll need to update your configuration file. 

You can find the configuration file your deployment is using with the command `which passenger-config`. Within this file, there should be a series of Passenger configurations, starting with the prefix `Passenger`. Adjacent to these configurations, supply the configuration `PassengerStartTimeout #{ seconds }` where seconds is the timeout. For instance, `PassengerStartTimeout 300` sets the timeout to 300 seconds. Once you've updated this timeout configuration, you'll need to restart Apache to verify the change takes effect in all instances of Passenger. 

For more information on Passenger configurations, refer to the documentation by [RPM](http://rpm.repo.onapp.com/sources/rubygem-passenger-4.0.35/passenger-4.0.35/doc/Users%20guide%20Apache.html#_passengerstarttimeout_lt_seconds_gt).

> **Note:** If your configuration already has this value, or you're overriding with a configuration that has a higher precedence, you'll need to replace it with the new seconds. 

#### Nginx Timeout

From the [Passenger documentation](https://www.phusionpassenger.com/library/config/apache/reference/), the application
timeout is controlled by [passenger_start_timeout](https://www.phusionpassenger.com/library/config/nginx/reference/#passenger_start_timeout). This value defaults to 90 seconds, but that may not be enough time. To increase this timeout, you'll need to update your configuration file.

Because the configuration when running with Nginx only honors the Nginx configuration file, the following changes must be made there, and not in the *Passengerfile.json*. By default, this configuration will be at */etc/nginx/nginx.conf* for *nix systems and */usr/local/etc/nginx/nginx.conf* for Mac. Within this file, there should be a section in which you've enabled Passenger with `passenger_enabled on;`. In this section, add `passenger_start_timeout #{ seconds }` where seconds is the timeout. For instance, `passenger_start_timeout 300` sets the timeout to 300 seconds. Once you've updated this timeout configuration, you'll need to restart Nginx to verify the change takes effect in all instances of Passenger.

For more information on Nginx configurations, refer to the documentation by [Digital Ocean](https://www.digitalocean.com/community/tutorials/understanding-the-nginx-configuration-file-structure-and-configuration-contexts).

> **Note:** if your configuration is for multiple servers, each server on which the Ruby agent is installed must have the timeout configuration updated. 
