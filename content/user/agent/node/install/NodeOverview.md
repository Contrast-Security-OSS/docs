<!--
title: "Node.js Agent Overview "
description: "Troubleshooting the Node.js Agent"
tags: "NodeJS agent troubleshooting"
-->

The **Contrast Node Agent** analyzes the behavior of Node.js web applications by using established techniques, such as source-to-source compilation, to intercept and add Contrast's sensors to an application prior to execution. Just as tools such as Istanbul and CoffeeScript use this technique to weave new features into JavaScript, Contrast uses it to help you keep your applications secure.

## Usage
To start analyzing an application, download the Node.js agent and create a configuration file as described in [Node Agent Installation](user_nodeinstall.html#install).
One way to think of the agent is as a middle-man between your code and the Node runtime. To this end, just as you might normally run your app with ```node <app-main.js>```, the Contrast Node Agent allows you to run your app with ```./node_modules/node_contrast <app-main>.js```.

## Node Agent Overview
There are two primary source code transformations that the Contrast Node Agent employs to monitor the behavior of your application:
* **Function hooks** take over the execution of a given function to collect data about its arguments and its return value, and send this data to the parts of the agent responsible for analysis. In this way, the agent effectively makes certain functions ***self-reporting***. For instance, this allows us to wire ```child_process.exec``` to check whether or not its arguments carry untrusted data.
* **AST transformation** is a process by which the agent creates an [abstract syntax tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree) of a body of code, manipulates the tree in some way, and then creates new source code based off of this syntax tree. The agent does this to handle scenarios where simply hooking a function will not work. For example, rewrites allow us to add [operator overloading](https://en.wikipedia.org/wiki/Operator_overloading) to JavaScript so that we can properly track the flow of untrusted data.

