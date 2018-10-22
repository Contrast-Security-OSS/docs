<!--
title: "Install the Contrast Webserver Agent"
description: "Installation instructions for the Contrast Webserver agent"
tags: "installation agent webserver nginx linux package source"
-->

The Contrast Webserver Agent has two methods of installation: linux package (recommended) or source-based.

The Webserver Agent targets the official 'stable' NGINX server. NGINX offers their own linux package repository for obtaining NGINX packages and you will need their official package installed as a dependency for our Webserver Agent module that plugs into it. Note if you have a distro's NGINX package installed, you will need to remove it in favor of the official NGINX distributed package.

We redistribute the required NGINX package from our package repo. So, unless you want to get it directly from NGINX, you can just obtain it from our package repo. Should you choose to obtain it from NGINX directly, instructions to help with that will be included at a later section in the document.

## Install from Linux Packages
Ensure that your system meets the pre-requisite configuration with the Contrast Linux package repository as described in the _XXX: Contrast package repo setup ContrastRepoConfig.md_ document.

__Debian/Ubuntu Users__:

    apt-get update
    apt-get install contrast-webserver-agent-nginx contrast-service

__RedHat/Centos Users__:

    yum install contrast-webserver-agent-nginx contrast-service


After this stage you are ready to configure the software.  _XXX: Insert link to WebserverAgentConfig.md_.

# Alternative Installation from Source

The Webserver Agent is constructed as a module that plugs into NGINX. It can be compiled statically into NGINX or as an NGINX dynamic module.  The software is available at: _XXX: Insert GITHUB link_

And documentation for building from source is within that repo: _XXX: Insert GITHUB link to BUILD_FROM_SOURCES.md_.

# Alternative NGINX package location

Note that NGINX has a 'stable' distribution and 'mainline' distribution and they are configured differently. Choose the configuration for the 'stable' package distribution from their site as this is the one that we target for module compatibility.

Here is their documentation for configuring your system to pull from the offical NGINX repos: http://nginx.org/en/linux_packages.html.

