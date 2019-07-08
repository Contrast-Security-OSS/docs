<!--
title: "Working with MuslC"
description: "Notes on Contrast compatibility with the MuslC compiler"
tags: "ruby agent compatibility muslc"
-->

Contrast requires compilation in the local environment to install *C* libraries. While you can compile the Contrast libraries using MuslC locally, one of the Ruby agent's dependencies, [google-protobuf](https://rubygems.org/gems/google-protobuf), can't. To work around this, you must locally reinstall the dependency.

## Reinstallation

### Reinstall a single gem 

The least invasive option is to reinstall a single gem. After installing the Contrast gem, uninstall its dependency and re-install using the `ruby` platform flag.

```
gem uninstall -I google-protobuf
gem install google-protobuf --version=3.7.1 --platform=ruby
```

### Reinstall full platform

If the single gem installation doesn't work, you may also try to reinstall all gems under the Ruby platform.

```
BUNDLE_FORCE_RUBY_PLATFORM=1 bundle install
```

> **Note:** This option will change the dependencies of your project.

## More Information

You can find more details about this issue and the work around in [GitHub](https://github.com/protocolbuffers/protobuf/issues/4460#issuecomment-434631296).
