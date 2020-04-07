<!--
title: "Supported Technologies"
description: "List of supported technologies"
tags: "installation Ruby on Rails agent frameworks support gem"
-->

## Contrast Ruby agents

### Agents support window

Contrast works to maintain compatibility with released agents as long as possible. To maintain compatibility as well as progress, agents are supported for one year after release. Older agents may continue to function and remain compatible with the Contrast UI or Service after one year; but, there are no guarantees that incompatibilities won't arise over time.

### Bug fix and feature release policy

Contrast applies bug fixes and develops new features on the latest version of the agent. Code changes are not back ported to previous versions. While a work around may be provided for a bug, the supported resolution is to update to the release in which the issue was addressed.

## Operating systems

The agent runs in the Ruby application layer with some *C* dependencies. Agent testing is done on **64-bit OSX** and **64-bit Linux**. As the agent has [glibc C](https://www.gnu.org/software/libc/) dependencies, it may not work in other operating system environments.


## Ruby versions

Contrast supports Ruby Long-Term Support (LTS) versions in **normal maintenance** and **security maintenance** status. Contrast shifts its support for Ruby versions as the working group shifts its LTS windows. See the [Ruby Maintenance Branches schedule](https://www.ruby-lang.org/en/downloads/branches/) for specific release dates.

> **Note:** The Ruby agent shifts minor version support as quickly as possible upon release; but, Contrast may require a quarter to complete compatibility testing.

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

Contrast doesn't guarantee support for old or deprecated versions of third-party modules.


## Testing environments

When changes are made, Contrast runs a battery of automated tests to ensure that it detects findings in supported technologies across all supported versions of Ruby. In addition to its own testing, Contrast also runs the [Ruby Spec Suite](https://github.com/ruby/spec) against an environment with the agent `enabled`.

## Additional technologies

Contrast runs with a range of third-party technology, including options that aren't listed here. If you want to confirm that Contrast supports your preferred technology, or you'd like to make a case for Contrast to support it, [let Contrast know.](mailto:bugs@contrastsecurity.com)

## More Information

[Working with MuslC](installation-ruby.html#ruby-muslc)
