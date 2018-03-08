<!--
title: "Node.js Agent Configuration"
description: "Configuring the Node.js Agent"
tags: "installation NodeJS agent configuration"
-->

Configuration options may be used to alter Contrast's behavior. They can all be appended to your startup command (e.g: `npm run contrast -- --agent.loger.stdout false`, or `node-contrast server.js --agent.logger.stdout false`). With the exception of `--configFile`, they can all be added to your *contrast.json* file as well:
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
-c, --configFile <path>                          | Set config file location. defaults to <app_root>/contrast.yaml.
--contrast.enable [false]                        | Set false to disable reporting. (default: true)
--contrast.api_key <key>                         | The organization API key.
--contrast.service_key <key>                     | Account service key.
--contrast.url <url>                             | Url to report on. (default: https://app.contrastsecurity.com/)
--contrast.user_name <name>                      | Account user name.
--contrast.ca_file <path>                        | When running an on-premise Contrast instance using a self-signed certificate, use this option to provide the relative or absolute path to your CA file.
--contrast.ignore_cert_errors [true]             | Allows agent to communicate data even if Contrast's cert can not be verified against supplied list of CAs.
--contrast.proxy.enable [true]                   | If false, no proxy is being used for communication of data.
--contrast.proxy.url <url>                       | Url of proxy for communicating agent data.
--contrast.timeout_ms <ms>                       | Http timeout value (in ms). (default: 10000)
--agent.auto_update [false]                      | If false, do not attempt to autoupdate the agent. (default: true)
--agent.auto_update_path <path>                  | Directory where the updated agent artifact should be saved before installation. (default: /var/folders/ck/4cpmx4m569j29z7n05dnfb4h0000gp/T)
--agent.auto_update_timeout_ms <ms>              | Time to wait before abording autoupdate attempt. (default: 60000)
--agent.logger.append [false]                    | If false, create a new log file on startup instead of appending and rolling daily. (default: true)
--agent.logger.level <level>                     | Logging level (fatal, error, warn, info, debug, trace). overrides FeatureSet:logLevel. (default: error)
--agent.logger.path <path>                       | Where contrast will put its debug log. (default: node-contrast.log)
--agent.logger.stdout [false]                    | If false, suppress output to STDOUT. (default: true)
--agent.node.enable_rewrite [false]              | If false, disable source rewriting (not recommended). (default: true)
--agent.node.enable_rewrite_log [true]           | Log contents of modules that have been rewritten for debugging purposes.
--agent.node.app_root <path>                     | Set location to look for the app's package.json.
--agent.node.stack_trace_limit <limit>           | Set limit for stack trace size. (default: 10)
--agent.node.skip_nested_taint [true]            | Do not traverse nested properties to look for taint during propagation (not recommended).
--agent.node.stacktrace_logging.enabled [true]   | Log all application errors to agent's /dumps file for aggressive debugging (not recommended).
--agent.polling.app_activity_ms <ms>             | How often (in ms), application activity messages are sent. (default: 30000)
--agent.polling.app_update_ms <ms>               | How often (in ms), application update messages (libraries, technologies, etc.) are sent. (default: 60000)
--application.args <args>                        | String containing args to pass verbatim to the application, e.g --application.args "-A -S -D -F foo bar".
--application.group <tags>                       | How to report the application's group for auto-grouping.
--application.name <name>                        | Override the reported application name. (default: package.json:name).
--application.path <name>                        | Override the reported application path. (default: /)
--application.tags <tags>                        | Comma-separated list of tags to apply to each application reported by the agent.
--application.version <version>                  | Override the reported application version (if different from 'version' field in the application's package.json).
--application.vulnerability.tags <tags>          | Comma-separated list of tags to apply to each application vulnerability reported by the agent.
--assess.enable_preflight [false]                | If false, disable preflight spooling of traces (not recommended). (default: true)
--assess.enable_propagators [false]              | If false, disable dataflow propagation (not recommended). (default: true)
--assess.sampling.enable [false]                 | If false, disable sampling. (default: true)
--assess.sampling.baseline <rule limit>          | Max number of times to report the same rule for a single. (default: 5)
--inventory.analyze_libraries [false]            | If false, do not read or report library data. (default: true)
--inventory.tags <tags>                          | Comma-separated list of tags to apply to each application library reported by the agent.
--protect.auth.mode <mode>                       | Whether to report authentication framework login attempts (OFF, MONITOR). (default: OFF)
--protect.samples.blocked <count>                | Limit the reporting of "blocked" protect events to this number (per report cycle). (default: 25)
--protect.samples.blocked_at_perimeter <count>   | Limit the reporting of "blocked-at-perim" protect events to this number (per report cycle). (default: 25)
--protect.samples.exploited <count>              | Limit the reporting of "effective" protect events to this number (per report cycle). (default: 100)
--protect.samples.ineffective <count>            | Limit the reporting of "ineffective" protect events to this number (per report cycle). (default: 50)
--server.build <version>                         | Set reported server build option.
--server.environment <name>                      | Environment the server is running in (QA, PRODUCTION, or DEVELOPMENT) if not NODE_ENV.
--server.name <name>                             | Override the reported server name. (default: ip-192-168-1-50.ec2.internal)
--server.path <name>                             | Override the reported server path. (default: /)
--server.tags <tags>                             | Comma-separated list of tags to apply to each server reported by the agent.
--server.type <type>                             | Override the reported server type. (default: node.js v8.9.4)
--server.version <version>                       | Override the reported server version (if different from 'version' field in the application's package.json).
-h, --help                                       | Output usage information


## Logging
To prevent crowding *stdout*, INFO level statements are not logged to the console unless the environment variable `DEBUG` is set to include the Contrast namespace, as follows:

```
DEBUG=contrast:*
```
Additionally, the namespace can be manipulated to show and hide certain paths. If, for instance, you only wish to see statements within the namespaces `contrast:hooks` and `contrast:http`, you can set the environment variable as `DEBUG=contrast:hooks,contrast:http`. If you wish to hide certain namespaces, prepend a `-`, as in `DEBUG=contrast:*,-contrast:hooks`

Additionally, by default, the agent logs to *<app_root>/node-contrast.log*. For performance reasons, verbose logging options are disabled. The following configuration options allow you to modify how the agent handles file logging:

 Parameter                       				 | Description
------------------------------   				 | -------------
-c, --configFile <path>                          | Set config file location. defaults to <app_root>/contrast.yaml.
--agent.logger.append [false]                    | If false, create a new log file on startup instead of appending and rolling daily. (default: true)
--agent.logger.level <level>                     | Logging level (fatal, error, warn, info, debug, trace). overrides FeatureSet:logLevel. (default: error)
--agent.logger.path <path>                       | Where contrast will put its debug log. (default: node-contrast.log)
--agent.logger.stdout [false]                    | If false, suppress output to STDOUT. (default: true)

## Application Arguments
To pass configuration options to the application being run with Contrast, use the `--application.args` flag, or append `--` to the run command, followed by the arguments for the application. For example, `npm run contrast -- --agent.logger.level debug -- --appArg0 foo --appArg1 bar` will pass `appArg0 foo` and `appArg1 bar` directly to the application.
