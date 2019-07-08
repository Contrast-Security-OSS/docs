<!-- 
title: "Supported Technologies"
description: "List of supported technologies"
tags: "installation Ruby on Rails agent frameworks support troubleshooting gem"
-->

## Ruby Version Support

Contrast supports Ruby Long-Term Support (LTS) versions in **normal maintenance** and **security maintenance** status. Contrast shifts its support for Ruby versions as the working group shifts its LTS windows. See the [Ruby Maintenance Branches schedule](https://www.ruby-lang.org/en/downloads/branches/) for specific release dates.

> **Note:** The Ruby agent shifts minor version support as quickly as possible upon release; but, Contrast may require a quarter to complete compatibility testing.

## Web Framework Support

* [Rails](https://rubyonrails.org/) 3.X - 5.X 
* [Sinatra](http://sinatrarb.com/) 2.X and up 

While the agent can still run on [Rack](http://rack.github.io/)-based web frameworks that aren't officially supported, Contrast may produce less-specific findings than it does for supported frameworks. Instead of reporting that a vulnerability occurs in your application code, Contrast may need to report it within the framework code where it interfaces directly with the Rack methods.

## Third-Party Module Support

* [MongoDB](http://alexeypetrushin.github.io/mongodb/driver.html)
* [Mysql2](https://github.com/brianmario/mysql2)
* [PG](https://bitbucket.org/ged/ruby-pg/wiki/Home)
* [SQLite3](https://github.com/sparklemotion/sqlite3-ruby)

Contrast doesn't guarantee support for old or deprecated versions of third-party modules.

## OS Support

The agent runs in the Ruby application layer with some *C* dependencies. Agent testing is done on **64-bit OSX** and **64-bit Linux**. As the agent has [glibc C](https://www.gnu.org/software/libc/) dependencies, it may not work in other operating system environments.

## Testing Environments

When changes are made, Contrast runs a battery of automated tests to ensure that it detects findings in supported technologies across all supported versions of Ruby.

## Additional Technology

Contrast runs with a range of third-party technology, including options that aren't listed here. If you want to confirm that Contrast supports your preferred technology, or you'd like to make a case for Contrast to support it, [let Contrast know.](mailto:bugs@contrastsecurity.com)

## More Information

* [Working with MuslC](installation-ruby.html#ruby-muslc)

