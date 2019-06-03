<!-- 
title: "Supported Technologies"
description: "List of supported technologies"
tags: "installation Ruby on Rails agent frameworks support troubleshooting gem"
-->

The Ruby agent supports Ruby language versions 2.3.x through 2.6.x. Framework support is currently for Ruby on Rails versions 3.x and above as well as Sinatra 2.x and above. The Ruby agent is a standard Rack middleware; consequently, it may work in other Rack-based web frameworks like Grape and Padrino. 

## Database Support

The Ruby agent has SQL Injection modules for MySQL (`mysql2` gem), SQLite3 and PostgreSQL (`pg` gem). The agent also has NoSQL Injection modules for MongoDB (`mongoid` gem).

## OS Support

Agent testing is done on **64-bit OSX** and **64-bit Linux**. The agent has [glibc C](https://www.gnu.org/software/libc/) dependencies and may not work in other operating system environments, operating systems running [musl C](https://www.musl-libc.org/), or under [JRuby](https://www.jruby.org/). 

For users running on operating systems running **musl C**, a potential work around is available. You may try to install the agent and manually re-install a dependency to allow for startup: 

```
gem uninstall -I google-protobuf
gem install google-protobuf --version=3.7.1 --platform=ruby
```

You may also try to reinstall all gems under the Ruby platform:

```
BUNDLE_FORCE_RUBY_PLATFORM=1 bundle install
```

## Learn More

You can find more details about this issue and the work around in [GitHub](https://github.com/protocolbuffers/protobuf/issues/4460#issuecomment-434631296).
