
<!--
title: "Troubleshooting Java Agent Installation with the Exec Helper package"
description: "Troubleshooting with the Exec Helper package"
tags: "troubleshooting installation Java agent linux package managers"
-->


## Issue: Exec Helper is installed, but Contrast isn't starting. 

You must reload the shell for the installer to take effect. 

When you restart the user's web application server with a Daemon Manager like systemd or an init.v script, this is done for you; however, if you're trying to start up a web application in your user's shell (e.g., `java -jar webgoat.jar`), you must first reload your shell.

## Issue: I don't know where the Exec Helper logs messages

The Exec Helper logs messages to the host's Syslog service using the identifier "Contrast". The Exec Helper uses the "user.warn" and "user.debug" Syslog facility and level.

Newer systems which use systemd, including EL7 and Ubuntu 16.04, store Syslog messages in the systemd journal. Use `journalctl` to view the messages (i.e., `journalctl -t Contrast`). Traditional init.v systems, including EL6 and Ubuntu 14.04, store Syslog messages in the file */var/log/messages* by default.

If there are no logs in either of these storage locations, verify Syslog configuration `/etc/syslog.conf`; the host may be configured to drop the message types or log level used by the Contrast Java agent Exec Helper.

## Issue: I removed the libcontrast_universal_installer.so libraries, and now my system errors on every command I run. 

The host emits these errors because the \*nix system has been globally configured to load the *libcontrast_universal_installer.so* library for every binary on the system to determine if it should inject the Java agent into it. Since the library was manually removed, the global configuration of dynamic loader is still referencing it and is failing/warning when it can't find the file.

On a Linux system, the shell command is still running, even though you see errors about failing to load the *contrast.so* library. Open up the */etc/ld.so.preload* file as root and remove the entry for the contrast libraries.

On a Solaris system, the ld.so process will fail to execute the desired binary if the ld preload library doesn't exist. This causes all commands to be broken. To recover if you still have a shell prompt, use the `LD_NOCONFIG` environment variable to temporarily disable the custom dynamic loader config and remove the config itself. In Solaris, there are two configs that must be removed - one for 32bit and one for 64bit.

```
LD_NOCONFIG=1 sudo LD_NOCONFIG=1 rm /var/ld/ld.config

LD_NOCONFIG=1 sudo LD_NOCONFIG=1 rm /var/ld/sparcv9/ld.config
```

There are two `LD_NOCONFIG` settings because sudo is a funny beast. The first is for the `sudo` command itself, the second is for the sudo environment to execute the `rm` command.

If you're in this situation, and don't have an active shell on Solaris, you will likely need to boot into [recovery mode](https://docs.oracle.com/cd/E36784\_01/html/E39134/glmwr.html) via an installation disk or backup Boot Environment, and remove the stale *ld.config* files from there.



