<!--
title: "Node.js Agent Troubleshooting"
description: "General troubleshooting guide for the Node agent"
tags: "node troubleshooting agent general debug"
-->

## Scenario: I've started my application with the Node agent, but I'm not seeing any results.

Here are a few things you can do:
* **Exercise the application.** Many findings will not be reported until the affected code paths have been executed.
* **Make sure the application is unarchived.** Agents reporting on behalf of an archived application will be told by the Contrast application to temporarily pause reporting. [Unarchiving](user-appsmanage.html#overview) the application should allow the agent to resume reporting within a couple of minutes.
* **Make sure that the agent is connected to the Contrast application.** When the agent fails to establish a connection with the Contrast application, it will log the failure and run the application without instrumentation or reporting. Even if the application appears to be up and running, it doesn't mean the agent was successful!
* **Make sure that credentials in *contrast_security.yaml* belong to an account with permission to view findings for the application you're attempting to run with Contrast.** You may need to check with your Contrast administrator.

## Scenario: I'm seeing messages like "could not rewrite [filename]."

Part of our instrumentation process involves rewriting source as it's loaded into the module cache. The agent may fail to rewrite some files for a number of reasons: unexpected syntax, weird character encodings, etc. When this happens, the agent will log its failure and load the original, unmodified source into the module cache. While we may have difficulty following dataflow through these files, everything else should work as normal. Simply, if you are seeing these messages: please let us know!

## Scenario: Invalid ELF Header

An Invalid ELF Header error occurs when a native C++ module targeting Linux has been compiled for a non-Linux target. This error typically occurs when the agent is installed on one system and then copied over to another. To fix, ensure that you are installing the agent from a compatible system.

## Scenario: Contrast causes my application to misbehave.

While very uncommon, our instrumentation can introduce some errors. These types of problems are very high priority for us and are usually quickly escalated to one of our engineers; any information you can provide about the bug is very helpful to us in getting it fixed as fast as possible. When this happens, it's usually in one of three ways.

**Contrast itself throws an error.** This usually results in a clear error message. If there isn't one, run the agent with the `agent.logger.level` option set to `debug`, which will enable more verbose logging. The error message and stack trace is often enough for us to fix the issue, since it occurred in our code.

**Contrast has changed data in a way that causes the application to throw an error.** This will also probably result in an error message. Again, use the `agent.logger.level` option to enable more verbose logging from the agent. When we cause an error to be thrown in your code, it's almost always because we've manipulated the type of an argument being passed to a function. In this case, any information you can provide about the types the function expects, and what the function does with its arguments, can help us more quickly reproduce and patch the issue.

**Contrast has changed data in a way that changes the behavior of the application.** For example, data has been malformed by the agent and may break some business logic or cause conditional statements to pass or fail incorrectly. This is very rare, as Contrast tries to avoid ever modifying the *meaning* of the data. This is often the hardest type of problem to pin down, as on the surface it may seem like the application is fully functional. If you suspect the agent is doing this somewhere, please try to track down what behavior is changing and how it is changing from when the application is run without Contrast. With a known behavior, it becomes easier to track which data is being incorrectly changed. If it is possible to cause a stack trace once you know where this is happening, this information can make it much easier for us to figure out what we're breaking.

## More Information

[Node.js Agent Configuration](installation-node.html#node-config)
