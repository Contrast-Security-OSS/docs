<!--
title: "Get Ruby Agent Logs"
description: "Instructions on obtaining and using the Ruby agent logs"
tags: "troubleshoot configuration logging agent Ruby"
-->

In rare scenarios, bad instrumentation causes a web server process to crash or a specific page to error out. If you ever
encounter a crash or error caused by Contrast, please report the error and [file a bug report](mailto:bugs@contrastsecurity.com).
If possible, follow the steps below to gather agent logs and process dumps; this additional information is vital to
reproducing and fixing these types of bugs.

## Agent Logs Directory

The Ruby agent logs information based upon the configuration provided by the YAML configuration. By default, our logs
are written to the current working directory under the name *contrast_agent.log*

You can change which information is logged by changing the logging level in the [Ruby agent configuration](installation-rubyconfig.html).

## Types of Bugs

There are two primary types of agent bugs for which Contrast needs to gather logs and other information:   

* Process Crash
* Unhandled Managed Exception

## Process Crash Bugs

### Verify that the Rack server process crashed

Check your scenario against the following indicators to confirm that the web server process crashed.

* The web application is unresponsive after installing the Ruby agent.
* The console log for the process has a Segmentation Fault. This most likely will result in an error message containing
`[BUG] Segmentation fault at: ` followed by a memory address.

Once you confirm that the observed bug is a process crash, you're ready to gather information to file a bug.

### Gather information on the process crash

Complete the following steps to gather information to send to Contrast.

* Add the following configuration to the YAML file to enable verbose logging and logging of every interaction between
  the Agent and the Contrast Service

```yaml

agent:
  logger:
    level: DEBUG
    path: ./contrast_agent_debug.log
  service:
    level: DEBUG
    path: ./contrast_service_debug.log

```

* Verify that the Contrast-Service is no longer running. If the Service is still running in your environment, terminate
  it manually.
  * In Windows, you can run `tasklist /fi "imagename eq Contrast-Service.exe"`
  * In Linux or Mac, you can run `ps aux | grep Contrast-Service`
* Clear your console
* Exercise the application to reproduce the crash.

Once you've reproduced the crash, gather the following items and include them in your bug report:

* Agent Logs: the `contrast_agent_debug.log` and `contrast_service_debug.log` files. Both should be in the
  applications's root directory.
* Application Logs: the logs from your appliation run, most likely in the `logs` directory of the application.
* Console Logs: the results of the process crash in your terminal.
* State Logs: while the Agent logs capture much of the operating system information, it is helpful to know what,
  if any, third party Gems are being used. While not strictly a log, please include your `Gemfile.lock` as part of the
  reproduction information collected.

You should restore your logging levels to their original settings at the end of this process.

## Unhandled Managed Exception

### Verify an unhandled exception

The above process also helps the Ruby agent team resolve issues such as application errors caused by the Ruby agent.
Use the following indicators to determine if the Ruby agent is causing an application error.

* You've observed the application working normally without the agent.
* You've observed a page of the application "crashing" (returning a 500 error) under the agent.
* There are no errors in the application logs in the `logs` directory

### Gather information on the exception

Follow a similar process to gather agent logs to include with your bug report, omitting the `Console Logs` step.

## Additional Logging

In rare cases, additional information may be required to properly diagnose the root cause of the undesired behavior. To
facilitate this, the Ruby agent has provided a convenience wrapper around Ruby's built in Head Dump utility. To take a
heap dump of your application with the agent enabled add the following to your YAML configuration and restart the
application. A background thread will be spawned and begin to automatically take Head Dumps.

```yaml

agent:
  heap_dump:
    enable: true
    path: ./contrast_heap_dumps

```

The results will be saved to the `contrast_heap_dumps` directory in the root of your application. By default, the Ruby
agent will take 5 Heap Dumps, spanning 10 seconds with a 10 second pause between each. Additional configurations can be 
found in the [Ruby agent configuration](installation-rubyconfig.html). 

Note that because taking these measurements will adversely impact performance, you should restore your configuration to
the original settings at the end of this process.

## Other Bugs

If you encountered a bug other than a process crash or unhandled exception - maybe the agent found a false positive -
please [file a bug report](mailto:bugs@contrastsecurity.com). Contrast doesn't usually need console error logs, but
debug-level logs and a detailed description of the problem are very helpful when it's time to fix these bugs. 
