<!--
title: "Working with MuslC"
description: "Notes on Contrast compatibility with the MuslC compiler"
tags: "ruby agent compatibility muslc"
-->

Contrast requires compilation in the local environment in order to install C libraries. While the Contrast libraries can
be compiled using MuslC locally, one of our dependencies, [google-protobuf](https://rubygems.org/gems/google-protobuf),
cannot. To work around this, the dependency must be reinstalled locally.

## Reinstallation
### Single Gem Reinstall
The least invasive option is to, after installing the Contrast gem, uninstalling its dependency and re-installing using
the `ruby` platform flag.

```
gem uninstall -I google-protobuf
gem install google-protobuf --version=3.7.1 --platform=ruby
```

### Full Platform Reinstall
If the single gem installation does not work, you may also try to reinstall all gems under the Ruby platform. Note that
doing so will change the dependencies of your project. 

```
BUNDLE_FORCE_RUBY_PLATFORM=1 bundle install
```

## More Information
You can find more details about this issue and the work around in [GitHub](https://github.com/protocolbuffers/protobuf/issues/4460#issuecomment-434631296).
