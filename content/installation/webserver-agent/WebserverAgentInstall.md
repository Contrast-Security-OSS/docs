# Overview

The Contrast Webserver Agent has two methods of installation; installation from
source or installation from a linux package. Installation from a linux package
is the easier of the two so use that method unless you really know you need to
build from source.

At this time, our Webserver Agent targets the 'stable' NGINX server that is officially distributed
from NGINX. NGINX offers their own linux package repository for obtaining NGINX
packages and you'll need their official package installed as a dependency for
our Webserver Agent module that plugs into it.

Here is their documentation for configuring your system to pull from the
offical NGINX repos: http://nginx.org/en/linux_packages.html

Note that NGINX has a 'stable' distribution and  'mainline' distribution and
they are configured differently. Choose the configuration for the 'stable' package distribution from their site.

Once configured, you can move on to installing the package below

# Install from Linux Packages

Provided the Contrast linux package reposistory is configured on your system,
_XXX: Insert link to contrast package repo setup here
linux_package_repo/ContrastRepoConfig.md_
use the following command to install the Webserver Agent:

Debian/Ubuntu Users:

    apt-get update
    apt-get install contrast-webserver-agent-nginx

RedHat/Centos Users:

    yum install contrast-webserver-agent-nginx


After this stage you are ready to configure the software.  ___XXX: Insert link to
WebserverAgentConfig.md___.


# Alternative Installation from Source

The Webserver Agent is constructed as a module that plugs into NGINX. It can be
compiled statically into NGINX or an an NGINX dynamic module.  The software is
available at: _XXX: Insert GITHUB link_

And documentation for building from source is within that repo:
_XXX: Insert GITHUB link to BUILD_FROM_SOURCES.md_


