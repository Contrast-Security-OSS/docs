<!--
title: "Node.js Agent Overview "
description: "About the Node.js agent"
tags: "installation NodeJS agent overview"
-->

The Contrast Node agent analyzes the behavior of Node.js web applications using established techniques, such as source-to-source compilation, to add Contrast sensors to an application prior to execution. Just as tools such as Istanbul and CoffeeScript use this technique to weave new features into JavaScript, Contrast uses it to help you keep your applications secure.

## About the Agent

There are two primary source code transformations that the Contrast Node agent employs to monitor the behavior of your application:

**Function hooks** take over the execution of a given function like, `child_process.exec`, to collect data about its arguments and its return value, and send this data to the parts of the agent responsible for analysis. As a result, the agent enables certain functions to be self reporting. 

**AST transformation** is the process by which the agent creates an [abstract syntax tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree) of a body of code, manipulates the tree and then creates new source code based on this syntax tree. The agent goes through this process to handle scenarios in which function hooks won't work. For example, rewrites allow Contrast to add [operator overloading](https://en.wikipedia.org/wiki/Operator_overloading) to JavaScript so that it can properly track the flow of untrusted data.

## Use the Agent 

To start analyzing an application, download the Node.js agent and create a configuration file. The process is outlined in the [Node Agent Installation](installation-nodeinstall.html) article. Just like you would run your application with `node <app-main.js>`, the Contrast Node agent allows you to run your application with `node ./node_modules/node_contrast <app-main>.js`.



