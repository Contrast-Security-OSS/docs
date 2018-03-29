<!--
title: "Node.js Agent Configuration"
description: "Configuring the Node.js Agent"
tags: "installation NodeJS agent configuration"
-->

Configuration options may be used to alter Contrast's behavior. They can all be appended to your startup command (e.g., `npm run contrast -- --agent.logger.stdout false` or `node-contrast server.js --agent.logger.stdout false`). They can also be set via environment variables of the form `SETTING__NAME` (for example: `--agent.logger.stdout false` becomes `AGENT__LOGGER__STDOUT=false`). `With the exception of `--configFile`, they can all be added to your *contrast.json* file as well.

``` javascript
{
    "contrast.api_key":"api_key",
    "contrast.api_key":"api_key",
    "contrast.api_key":"api_key",
    "contrast.api_key":"api_key",
}
```

## General Configuration Options


 Parameter                       				 | Description
------------------------------   				 | -------------
-c, --configFile <path>                          | Set config file location. Defaults to *<app_root>/contrast.yaml*.
--contrast.enable [false]                        | Set `false` to disable reporting. Default is `true`.
--contrast.api_key <key>                         | The organization API key.
--contrast.service_key <key>                     | Account service key.
--contrast.url <url>                             | URL on which to report. Default is https://app.contrastsecurity.com/.
--contrast.user_name <name>                      | Account user name.
--contrast.ca_file <path>                        | When running an on-premises Contrast instance using a self-signed certificate, use this option to provide the relative or absolute path to your CA file.
--contrast.ignore_cert_errors [true]             | Allows agent to communicate data even if Contrast's cert can't be verified against supplied list of CAs.
--contrast.proxy.enable [true]                   | If `false`, no proxy is being used for communication of data.
--contrast.proxy.url <url>                       | URL of proxy for communicating agent data.
--contrast.timeout_ms <ms>                       | Http timeout value (in ms). Default is **10000**.
--agent.auto_update [false]                      | If `false`, don't attempt to auto-update the agent. Default is `true`.
--agent.auto_update_path <path>                  | Directory where the updated agent artifact should be saved before installation. Default is */var/folders/ck/4cpmx4m569j29z7n05dnfb4h0000gp/T*.
--agent.auto_update_timeout_ms <ms>              | Time to wait before aborting auto-update attempt. Default is **60000**.
--agent.logger.append [false]                    | If `false`, create a new log file on startup instead of appending and rolling daily. Default is `true`.
--agent.logger.level <level>                     | Logging level: `fatal`, `error`, `warn`, `info`, `debug` or `trace`. Overrides `FeatureSet:logLevel`. Default is `error`.
--agent.logger.path <path>                       | Where Contrast will put its debug log. Default is *node-contrast.log*.
--agent.logger.stdout [false]                    | If `false`, suppress output to STDOUT. Default is `true`.
--agent.node.enable_rewrite [false]              | If `false`, disable source rewriting. Default is `true`. (Not recommended.)
--agent.node.enable_rewrite_log [true]           | Log contents of modules that have been rewritten for debugging purposes.
--agent.node.app_root <path>                     | Set location to look for the application's *package.json*.
--agent.node.stack_trace_limit <limit>           | Set limit for stack trace size. Default is **10**.
--agent.node.skip_nested_taint [true]            | Don't traverse nested properties to look for taint during propagation. (Not recommended.)
--agent.node.stacktrace_logging.enabled [true]   | Log all application errors to agent's */dumps* file for aggressive debugging. (Not recommended.)
--agent.polling.app_activity_ms <ms>             | How often (in ms), application activity messages are sent. Default is **30000**.
--agent.polling.app_update_ms <ms>               | How often (in ms), application update messages (libraries, technologies, etc.) are sent. Default is **60000**.
--application.args <args>                        | String containing `args` to pass verbatim to the application. (E.g., `--application.args "-A -S -D -F foo bar"`.)
--application.group <tags>                       | How to report the application's group for auto-grouping.
--application.name <name>                        | Override the reported application name. Default is `package.json:name`.
--application.path <name>                        | Override the reported application path. Default is */*.
--application.tags <tags>                        | Comma-separated list of tags to apply to each application reported by the agent.
--application.version <version>                  | Override the reported application version, if different from 'version' field in the application's *package.json*.
--application.vulnerability.tags <tags>          | Comma-separated list of tags to apply to each application vulnerability reported by the agent.
--assess.enable [false]                          | If `false`, disable assess mode. Default is `true`.
--assess.enable_preflight [false]                | If `false`, disable preflight spooling of traces. Default is `true`. (Not recommended.)
--assess.enable_propagators [false]              | If `false`, disable dataflow propagation. Default is `true`. (Not recommended.)
--assess.sampling.enable [false]                 | If `false`, disable sampling. Default is `true`.
--assess.sampling.baseline <rule limit>          | Maximum number of times to report the same rule for a single. Default is **5**.
--inventory.analyze_libraries [false]            | If `false`, don't read or report library data. Default is `true`.
--inventory.tags <tags>                          | Comma-separated list of tags to apply to each application library reported by the agent.
--protect.enable [false]                         | If `false`, disable protect mode. Default is `true`.
--protect.auth.mode <mode>                       | Whether to report authentication framework login attempts. Options are `OFF` or `MONITOR`. Default is `OFF`.
--protect.samples.blocked <count>                | Limit the reporting of "blocked" Protect events to this number (per report cycle). Default is **25**.
--protect.samples.blocked_at_perimeter <count>   | Limit the reporting of "blocked-at-perim" Protect events to this number (per report cycle). Default is **25**.
--protect.samples.exploited <count>              | Limit the reporting of "effective" Protect events to this number (per report cycle). Default is **100**.
--protect.samples.ineffective <count>            | Limit the reporting of "ineffective" Protect events to this number (per report cycle). Default is **50**.
--server.build <version>                         | Set reported server build option.
--server.environment <name>                      | Environment in which the server is running - `QA`, `PRODUCTION` or `DEVELOPMENT`.
--server.name <name>                             | Override the reported server name. Default is `ip-192-168-1-50.ec2.internal`.
--server.path <name>                             | Override the reported server path. Default is */*.
--server.tags <tags>                             | Comma-separated list of tags to apply to each server reported by the agent.
--server.type <type>                             | Override the reported server type. Default is `node.js v8.9.4`.
--server.version <version>                       | Override the reported server version, if different from 'version' field in the application's *package.json*.
-h, --help                                       | Output usage information.


## Logging

To prevent crowding *stdout*, `INFO`-level statements aren't logged to the console unless the environment variable `DEBUG` is set to include the Contrast namespace: `DEBUG=contrast:*`.

The namespace can also be manipulated to show and hide certain paths. 

> **Examples:** <br> If you want to only see statements within the namespaces `contrast:hooks` and `contrast:http`, you can set the environment variable as `DEBUG=contrast:hooks,contrast:http`. <br> If you want to hide certain namespaces, prepend a `-`, as in `DEBUG=contrast:*,-contrast:hooks`.

By default, the agent logs to *<app_root>/node-contrast.log*. For performance reasons, verbose logging options are disabled. The following configuration options allow you to modify how the agent handles file logging. 


 Parameter                       				 | Description
------------------------------   				 | -------------
--agent.logger.append [false]                    | If `false`, create a new log file on startup instead of appending and rolling daily. Default is `true`.
--agent.logger.level <level>                     | Logging level: `fatal`, `error`, `warn`, `info`, `debug` or `trace`. Overrides `FeatureSet:logLevel`. Default is `error`.
--agent.logger.path <path>                       | Where Contrast will put its debug log. Default is *node-contrast.log*.
--agent.logger.stdout [false]                    | If `false`, suppress output to STDOUT. Default is `true`.


## Application Arguments

To pass configuration options to the application being run with Contrast, use the `--application.args` flag, or append `--` to the run command, followed by the arguments for the application. 

> **Example:** `npm run contrast -- --agent.logger.level debug -- --appArg0 foo --appArg1 bar` will pass `appArg0 foo` and `appArg1 bar` directly to the application.


