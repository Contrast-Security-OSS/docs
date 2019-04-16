<!--
title: "Working with Transpiled Code"
description: "Notes on Contrast compatibility with languages like CoffeeScript or TypeScript"
tags: "node agent compatibility coffee coffeescript typescript babel"
-->

Contrast supports applications written in languages that compile to JavaScript, such as [CoffeeScript](http://coffeescript.org/) and [TypeScript](http://www.typescriptlang.org/). While Contrast only instruments JavaScript, you can tell Contrast how to get to the compiled code; whether the JavaScript is precompiled or compiled at runtime determines your method.

> **Note:** Although Contrast functions with languages that compile to JavaScript, the source may not correspond directly with the resulting JavaScript. As a result, reported metadata - such as vulnerability line-of-code and filename - references the compiled result, not the original source.

## Runtime Compilers
Languages like [CoffeeScript](http://coffeescript.org/) run via a command line utility, which acts as a *runner* and compiles your application to JavaScript at runtime. It's possible to have Contrast's Node.js agent act as a runner for the runtime transpiler, which acts as a runner for your application.

To set up Contrast as a runner, you must provide the entrypoint to the transpiler instead of providing the entrypoint to your application as an argument. (You're essentially telling Contrast that your application is the transpiler.) Next, you must use the ```--appArgs``` setting to tell Contrast to pass this argument along.

Please refer to the following example script setup for running Contrast with a CoffeeScript application:

```javascript
scripts: {
    "test": "...",
    "start": "...",
    "contrast": "node-contrast /path/to/coffee/transpiler --application.args '/path/to/app/entrypoint.cofee'"
}
```

## Precompiled
Some languages, like [TypeScript](http://www.typescriptlang.org/), require you to precompile your code before runtime. In these cases, Contrast must simply point to the *compiled* entrypoint for your application:

```javascript
scripts: {
    "test": "...",
    "start": "...",
    "contrast": "node-contrast /path/to/compiled/entrypoint.js"
}
```

