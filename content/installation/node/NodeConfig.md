<!--
title: "Node.js Agent Configuration"
description: "Configuring the Node.js Agent"
tags: "installation NodeJS agent configuration"
-->

You may use configuration options to alter Contrast's behavior. They can all be appended to your startup command (e.g., `npm run contrast -- --agent.logger.stdout false` or `node-contrast server.js --agent.logger.stdout false`). They can also be set via environment variables of the form `SETTING__NAME` (e.g., `--agent.logger.stdout false` becomes `AGENT__LOGGER__STDOUT=false`). With the exception of `--configFile`, they can all be added to your *contrast_security.yaml* file as well.

## General Configuration Options

Parameter                                      | Environment Variable                           | Description
------------------------------                 | --------                                       | -------------
-c, --configFile <path>                        | CONTRAST_CONFIG_PATH                           | Set *config* file location. Defaults to *<app_root>/contrast_security.yaml*.
--enable [false]                               | ENABLE                                         | Set `false` to disable reporting. Default is `true`.
--api.api_key <key>                            | API\_\_API_KEY                                 | The organization API key.
--api.service_key <key>                        | API\_\_SERVICE_KEY                             | Account service key.
--api.url <url>                                | API\_\_URL                                     | URL on which to report. Default is https://app.contrastsecurity.com/.
--api.user_name <name>                         | API\_\_USER_NAME                               | Account user name.
--api.proxy.enable [true]                      | API\_\_PROXY\_\_ENABLE                         | If `false`, no proxy is being used for communication of data.
--api.proxy.url <url>                          | API\_\_PROXY\_\_URL                            | URL of proxy for communicating agent data.
--api.timeout_ms <ms>                          | API\_\_TIMEOUT_MS                              | Http timeout value (in ms). Default is **10000**.
--api.certificate.enable [false]               | API\_\_CERTIFICATE\_\_ENABLE                   | If set to false, the certificate configuration in this section will be ignored. (default: false)
--api.certificate.ca_file <path>               | API\_\_CERTIFICATE\_\_CA_FILE                  | When running an Enterprise-on-Premises (EOP) Contrast instance using a self-signed certificate, use this option to provide the relative or absolute path to your CA file.
--api.certificate.cert_file <path>             | API\_\_CERTIFICATE\_\_CERT_FILE                | Set the absolute or relative path to the Certificate PEM file for communication with Contrast UI.
--api.certificate.key_file <path>              | API\_\_CERTIFICATE\_\_KEY_FILE                 | Set the absolute or relative path to the Key PEM file for communication with Contrast UI.
--api.certificate.key_password <pass>          | API\_\_CERTIFICATE\_\_KEY_PASSWORD             | If the Key file requires a password, set it here.
--api.certificate.ignore_cert_errors [true]    | API\_\_CERTIFICATE\_\_IGNORE_CERT_ERRORS       | Allows the agent to communicate data, even if Contrast's cert can't be verified against supplied list of CAs.
--agent.auto_update.enable [false]             | AGENT\_\_AUTO_UPDATE\_\_ENABLE                 | If `false`, don't attempt to auto-update the agent. Default is `true`.
--agent.auto_update.path <path>                | AGENT\_\_AUTO_UPDATE\_\_PATH                   | Directory where the updated agent artifact should be saved before installation. Default is */var/folders/ck/4cpmx4m569j29z7n05dnfb4h0000gp/T*.
--agent.auto_update.timeout_ms <ms>            | AGENT\_\_AUTO_UPDATE\_\_TIMEOUT_MS             | Time to wait before aborting auto-update attempt. Default is **60000**.
--agent.logger.append [false]                  | AGENT\_\_LOGGER\_\_APPEND                      | If `false`, create a new log file on startup instead of appending and rolling daily. Default is `true`.
--agent.logger.level <level>                   | AGENT\_\_LOGGER\_\_LEVEL                       | Logging level: `fatal`, `error`, `warn`, `info`, `debug` or `trace`. Overrides `FeatureSet:logLevel`. Default is `error`.
--agent.logger.path <path>                     | AGENT\_\_LOGGER\_\_PATH                        | Where Contrast will put its debug log. Default is *node-contrast.log*.
--agent.logger.stdout [false]                  | AGENT\_\_LOGGER\_\_STDOUT                      | If `false`, suppress output to STDOUT. Default is `true`.
--agent.node.enable_rewrite [false]            | AGENT\_\_NODE\_\_ENABLE_REWRITE                | If `false`, disable source rewriting. Default is `true`. (Not recommended.)
--agent.node.enable_rewrite_log [true]         | AGENT\_\_NODE\_\_ENABLE_REWRITE_LOG            | Log contents of modules that have been rewritten for debugging purposes.
--agent.node.app_root <path>                   | AGENT\_\_NODE\_\_APP_ROOT                      | Set location to look for the application's *package.json*.
--agent.node.stack_trace_limit <limit>         | AGENT\_\_NODE\_\_STACK_TRACE_LIMIT             | Set limit for stack trace size. Default is **10**.
--agent.node.skip_nested_taint [true]          | AGENT\_\_NODE\_\_SKIP_NESTED_TAINT             | Don't traverse nested properties to look for taint during propagation. (Not recommended.)
--agent.node.stacktrace_logging.enabled [true] | AGENT\_\_NODE\_\_STACKTRACE_LOGGING\_\_ENABLED | Log all application errors to agent's */dumps* file for aggressive debugging. (Not recommended.)
--agent.polling.app_activity_ms <ms>           | AGENT\_\_POLLING\_\_APP_ACTIVITY_MS            | How often (in ms), application activity messages are sent. Default is **30000**.
--agent.polling.app_update_ms <ms>             | AGENT\_\_POLLING\_\_APP_UPDATE_MS              | How often (in ms), application update messages (libraries, technologies, etc.) are sent. Default is **60000**.
--agent.rotue_coverage.enable [true]           | AGENT\_\_ROUTE_COVERAGE\_\_ENABLE              | If `false`, do not send route-base coverage data to the Contrast UI. Default is `true`.
--agent.security_logger.level <level>          | AGENT\_\_SECURITY_LOGGER\_\_LEVEL              | Set the log level for security logging. Valid options are `alert`, `crit`, `err`, `warning`, `notice`, `info` and `debug`.
--agent.security_logger.path <path>            | AGENT\_\_SECURITY_LOGGER\_\_PATH               | Set the file to which the agent logs security events.
--application.args <args>                      | APPLICATION\_\_ARGS                            | String containing `args` to pass verbatim to the application. (E.g., `--application.args "-A -S -D -F foo bar"`.)
--application.code <code>                      | APPLICATION\_\_CODE                            | Add the application code this application should use in the Contrast UI.
--application.group <tags>                     | APPLICATION\_\_GROUP                           | How to report the application's group for auto-grouping.
--application.name <name>                      | APPLICATION\_\_NAME                            | Override the reported application name. Default is `package.json:name`.
--application.path <name>                      | APPLICATION\_\_PATH                            | Override the reported application path. Default is */*.
--application.tags <tags>                      | APPLICATION\_\_TAGS                            | Comma-separated list of tags to apply to each application reported by the agent.
--application.metadata <metadata>              | APPLICATION\_\_METADATA                        | Comma-separated list of key=value pairs that are applied to each application reported by the agent.
--application.version <version>                | APPLICATION\_\_VERSION                         | Override the reported application version, if different from 'version' field in the application's *package.json*.
--assess.enable [false]                        | ASSESS\_\_ENABLE                               | If `false`, disable assess mode. Default is `true`.
--assess.tags <tags>                           | ASSESS\_\_TAGS                                 | Comma-separated list of tags to apply to each application vulnerability reported by the agent.
--assess.enable_preflight [false]              | ASSESS\_\_ENABLE_PREFLIGHT                     | If `false`, disable preflight spooling of traces. Default is `true`. (Not recommended.)
--assess.enable_propagators [false]            | ASSESS\_\_ENABLE_PROPAGATORS                   | If `false`, disable dataflow propagation. Default is `true`. (Not recommended.)
--assess.sampling.enable [false]               | ASSESS\_\_SAMPLING\_\_ENABLE                   | If `false`, disable sampling. Default is `true`.
--assess.sampling.baseline <rule limit>        | ASSESS\_\_SAMPLING\_\_BASELINE                 | Maximum number of times to report the same rule for a single. Default is **5**.
--inventory.analyze_libraries [false]          | INVENTORY\_\_ANALYZE_LIBRARIES                 | If `false`, don't read or report library data. Default is `true`.
--inventory.tags <tags>                        | INVENTORY\_\_TAGS                              | Comma-separated list of tags to apply to each application library reported by the agent.
--protect.enable [false]                       | PROTECT\_\_ENABLE                              | If `false`, disable protect mode. Default is `true`.
--protect.auth.mode <mode>                     | PROTECT\_\_AUTH\_\_MODE                        | Whether to report authentication framework login attempts. Options are `OFF` or `MONITOR`. Default is `OFF`.
--protect.samples.blocked <count>              | PROTECT\_\_SAMPLES\_\_BLOCKED                  | Limit the reporting of "blocked" Protect events to this number (per report cycle). Default is **25**.
--protect.samples.blocked_at_perimeter <count> | PROTECT\_\_SAMPLES\_\_BLOCKED_AT_PERIMETER     | Limit the reporting of "blocked-at-perim" Protect events to this number (per report cycle). Default is **25**.
--protect.samples.exploited <count>            | PROTECT\_\_SAMPLES\_\_EXPLOITED                | Limit the reporting of "effective" Protect events to this number (per report cycle). Default is **100**.
--protect.samples.ineffective <count>          | PROTECT\_\_SAMPLES\_\_INEFFECTIVE              | Limit the reporting of "ineffective" Protect events to this number (per report cycle). Default is **50**.
--server.build <version>                       | SERVER\_\_BUILD                                | Set reported server build option.
--server.environment <name>                    | SERVER\_\_ENVIRONMENT                          | Environment in which the server is running - `QA`, `PRODUCTION` or `DEVELOPMENT` (case insenstive); does not affect servers that already exist in api.
--server.name <name>                           | SERVER\_\_NAME                                 | Override the reported server name. Default is `ip-192-168-1-50.ec2.internal`.
--server.path <name>                           | SERVER\_\_PATH                                 | Override the reported server path. Default is */*.
--server.tags <tags>                           | SERVER\_\_TAGS                                 | Comma-separated list of tags to apply to each server reported by the agent.
--server.type <type>                           | SERVER\_\_TYPE                                 | Override the reported server type. Default is `node.js v8.9.4`.
--server.version <version>                     | SERVER\_\_VERSION                              | Override the reported server version, if different from 'version' field in the application's *package.json*.
-h, --help                                     |                                                | Output usage information.

## Logging

To prevent crowding *stdout*, `INFO`-level statements aren't logged to the console unless the environment variable `DEBUG` is set to include the Contrast namespace: `DEBUG=contrast:*`.

The namespace can also be manipulated to show and hide certain paths.

> **Examples:** <br> If you want to only see statements within the namespaces `contrast:hooks` and `contrast:http`, you can set the environment variable as `DEBUG=contrast:hooks,contrast:http`. <br> If you want to hide certain namespaces, prepend a `-`, as in `DEBUG=contrast:*,-contrast:hooks`.

By default, the agent logs to *<app_root>/node-contrast.log*. For performance reasons, verbose logging options are disabled. The following configuration options allow you to modify how the agent handles file logging.


 Parameter                     | Description
------------------------------ | -------------
--agent.logger.append [false]  | If `false`, create a new log file on startup instead of appending and rolling daily. Default is `true`.
--agent.logger.level <level>   | Logging level: `fatal`, `error`, `warn`, `info`, `debug` or `trace`. Overrides `FeatureSet:logLevel`. Default is `error`.
--agent.logger.path <path>     | Where Contrast will put its debug log. Default is *node-contrast.log*.
--agent.logger.stdout [false]  | If `false`, suppress output to STDOUT. Default is `true`.


## Application Arguments

To pass configuration options to the application being run with Contrast, use the `--application.args` flag, or append `--` to the run command, followed by the arguments for the application.

> **Example:** `npm run contrast -- --agent.logger.level debug -- --appArg0 foo --appArg1 bar` will pass `appArg0 foo` and `appArg1 bar` directly to the application.


## CLI Arguments

From the Node.js documentation, you can see scripts are executed in the following way:

```shell
node [options] [V8 options] [script.js] [--] [arguments];
```

The Contrast agent is a Node.js wrapper (runner) that invokes `node` to start the application. The agent doesn't pass any flags to the underlying Node.js executable, or provide the ability to do so with agent configuration options. To pass CLI flags to Node.js, you must invoke `node` explicitly with the agent as the `script` argument, followed by the name of the application's entry point file and any configuration flags, as outlined above.

When the agent is installed, a symlink is created, `<app-dir>/node_modules/.bin/node-contrast`, which points to the file `<app-dir>/node_modules/node_contrast/cli.js`. You can use either of these as the `script` argument when starting the application this way.

> **Example:** <br> Without the Contrast agent, you start your application using the following command:
>
> ```shell
>  node --title=MyWebsite --stack-trace-limit=25 ./index.js --env development
>  ```
>
> To run the application with the same Node.js flags and the Contrast agent, you could use either of the following commands:
>
> ```shell
> node --title=MyWebsite --stack-trace-limit=25 ./node_modules/.bin/node-contrast ./index.js -- --env development
> ```
>
> ```shell
> node --title=MyWebsite --stack-trace-limit=25 ./node_modules/node_contrast/cli.js ./index.js -- --env development
> ```
