
<!--
title: "Troubleshooting Java Agent Installation with the Exec Helper package"
description: "Troubleshooting with the Exec Helper package"
tags: "troubleshooting installation Java agent linux exec package"
-->


## Issue: The Exec Helper is installed, but Contrast isn't starting

You must reload the shell for the installer to take effect.

When you restart your web application server with a Daemon Manager like systemd or an init.v script, this is done for you; but, if you're trying to start up a web application in your user's shell (e.g., `java -jar webgoat.jar`), you must first reload your shell.

## Issue: I don't know where the Exec Helper logs messages

The Exec Helper logs messages to the host's Syslog service using the identifier "Contrast". The Exec Helper uses the "user.warn" and "user.debug" Syslog facility and level, respectively.

Newer systems which use systemd, including EL7 and Ubuntu 16.04, store Syslog messages in the systemd journal. Use `journalctl` to view the messages (i.e., `journalctl -t Contrast`). Traditional init.v systems, including EL6 and Ubuntu 14.04, store Syslog messages in the file */var/log/messages* by default.

If there aren't any logs in either of these storage locations, verify Syslog configuration `/etc/syslog.conf`; the host may be configured to drop the message types or log level used by the Exec Helper.

## Issue: I removed the libcontrast_exec_helper.so libraries, and now my system errors on every command I run

The host emits these errors because the *&ast;nix* system has been globally configured to load the *libcontrast_exec_helper.so* library for every binary on the system to determine if it should inject the Java agent into it. Even if you manually removed the library, the global configuration of dynamic loader is still referencing it and is failing/warning when it can't find the file.

Open up the */etc/ld.so.preload* file as root and remove the entry for the Contrast libraries.
