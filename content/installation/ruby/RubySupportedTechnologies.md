<!--
title: "Supported Technologies"
description: "List of supported technologies"
tags: "installation Ruby on Rails agent frameworks support gem"
-->

## Contrast agents

Contrast agents are supported for one year after release. Older agents may continue to function and remain compatible, but they are no longer fully supported.

Contrast applies bug fixes and develops new features on the latest version of the agent. Code changes are not backported to previous versions. While a workaround may be provided for a bug, to resolve issues, you should update to the release in which the issue was addressed.

## Operating systems

The agent runs in the Ruby application layer with some *C* dependencies. Agent testing is done on **64-bit OSX**, **64-bit Linux**, and **64-bit Alpine** installations.

As the agent has *C* dependencies, it may need to be installed with the `--platform ruby` flag to allow for compilation in either *g libc* or *musl libc* based systems.

## Ruby versions

Contrast supports Ruby Long-Term Support (LTS) versions in **normal maintenance** and **security maintenance** status. Contrast shifts its support for Ruby versions as the working group shifts its LTS windows. See the [Ruby Maintenance Branches schedule](https://www.ruby-lang.org/en/downloads/branches/) for specific release dates.

### Supported

* 2.7.X: First supported agent was 3.8.0
* 2.6.X: First supported agent was 2.3.0
* 2.5.X: First supported agent was 2.0.0

### Deprecated

* 2.4.X: Last supported agent was 3.9.1

## Web servers

* [Passenger](https://www.phusionpassenger.com/) 5.X-6.X
* [Puma](https://puma.io/) 2.X
* [Thin](https://rubygems.org/gems/thin) 1.X

## Web frameworks

* [Rails](https://rubyonrails.org/) 3.X - 6.X
* [Sinatra](http://sinatrarb.com/) 2.X and up

While the agent can still run on [Rack](http://rack.github.io/)-based web frameworks that aren't officially supported, Contrast may produce less-specific findings than it does for supported frameworks. Instead of reporting that a vulnerability occurs in your application code, Contrast may need to report it within the framework code where it interfaces directly with the Rack methods.

## Third-Party modules

* [MongoDB](http://alexeypetrushin.github.io/mongodb/driver.html)
* [Mysql2](https://github.com/brianmario/mysql2)
* [PG](https://bitbucket.org/ged/ruby-pg/wiki/Home)
* [SQLite3](https://github.com/sparklemotion/sqlite3-ruby)

Contrast doesn't support old or deprecated versions of third-party modules.

## Testing environments

When changes are made, Contrast runs a battery of automated tests to ensure that it detects findings in supported technologies across all supported versions of Ruby. In addition to its own testing, Contrast also runs the [Ruby Spec Suite](https://github.com/ruby/spec) against an environment with the agent `enabled`.
