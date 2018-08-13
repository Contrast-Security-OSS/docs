# Troubleshooting the Contrast Java agent Exec Helper

## Exec Helper is installed, but Contrast is not starting. Why?

You must reload the shell in order for the installer to take effect. When you
restart the user's web application server with a daemon manager like systemd or
an init.v script, then this is done for you; however, if you are trying to start
up a web app in your user's shell e.g. java -jar webgoat.jar, you will need to
first reload your shell

## Where does the Exec Helper log messages?

The Exec Helper logs messages to the host's syslog service using identifier
"Contrast". The Exec Helper uses the "user.warn" and "user.debug" syslog
facility and level.

Newer systems which use systemd (includes EL7 and Ubuntu 16.04) store syslog
messages in the systemd journal; use `journalctl` to view the messages i.e.
`journalctl -t Contrast`

Traditional init.v systems (includes EL6 and Ubuntu 14.04) store syslog messages
in the file `/var/log/messages` by default

If there are no logs in either of these storage locations, verify syslog
configuration `/etc/syslog.conf`: the host may be configured to drop the message
types or log level used by the Contrast Java agent Exec Helper.

## I removed the `libcontrast_universal_installer.so` libraries and now my system errors on every command I run. How do I fix this?

The host emits these errors because the \*nix system has been globally
configured to load the `libcontrast_universal_installer.so` library for every
binary on the system to determine if it should inject the Contrast Java agent
into it. Since the library was manually removed, the global configuration of
dynamic loader is still referencing it and is failing/warning when it can't find
the file.

On a Linux system, even though you see errors about failing to load the contrast
.so library, the shell command is still running.  Open up the `/etc/ld.so.preload`
file as root and remove the entry for the contrast libraries.

On a Solaris system, the ld.so process will fail to execute the desired binary
if the ld preload library doesn't exist. So all commands will be broken! To
recover if you still have a shell prompt, use the `LD_NOCONFIG` environment
variable to temporarily disable the custom dynamic loader config and remove the
config itself.  In Solaris, there are two configs that must be removed; one for
32bit and one for 64bit

    LD_NOCONFIG=1 sudo LD_NOCONFIG=1 rm /var/ld/ld.config

    LD_NOCONFIG=1 sudo LD_NOCONFIG=1 rm /var/ld/sparcv9/ld.config

There are two `LD_NOCONFIG` settings because sudo is a funny beast.  The first
is for the sudo command itself, the second is for the sudo environment to
execute the rm command.

If you are in this situation and do not have an active shell on solaris, you
will likely need to boot into [recovery
mode](https://docs.oracle.com/cd/E36784\_01/html/E39134/glmwr.html) via an
installation disk or backup Boot Environment and remove the stale ld.config
files from there.
