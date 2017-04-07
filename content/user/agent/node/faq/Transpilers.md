<!--
title: "Working with Transpiled Code"
description: "Notes on Contrast compatibility with languages like CoffeeScript or TypeScript"
tags: "node agent compatibility coffee coffeescript typescript babel"
-->

Contrast supports applications written in languages which compile to Javascript, such as [CoffeeScript](http://coffeescript.org/) and [TypeScript](http://www.typescriptlang.org/).
While Contrast itself only instruments Javascript, there are ways to tell Contrast how to get to the compiled code.
How this is done depends on whether the Javascript is precompiled, or compiled at runtime.

## Runtime Compilers
Languages like [CoffeeScript](http://coffeescript.org/) run via a command line utility which acts as a *runner*, and compiles your application to Javascript at runtime.
Contrast's Node.js agent is also a runner.
It is possible to have Contrast act as a runner for the runtime transpiler, which will act as a runner for your application.

To do this, instead of providing the entrypoint to your application as an argument, you must provide the entrypoint to the transpiler.
You are essentially telling Contrast that your application is the transpiler itself.
Then, because the transpiler expects the entrypoint to your application as an argument, you must use the ```--appArgs``` setting to tell Contrast to pass this argument along.
Here is an example script setup for running Contrast with a CoffeeScript application:
```javascript
scripts: {
    "test": "...",
    "start": "...",
    "contrast": "node-contrast /path/to/coffee/transpiler --appArgs '/path/to/app/entrypoint.cofee'"
}
```

## Precompiled
Some languages, like [TypeScript](http://www.typescriptlang.org/), have you precompile your code before runtime.
In these cases, Contrast simply needs to point to the *compiled* entrypoint for your application:
```javascript
scripts: {
    "test": "...",
    "start": "...",
    "contrast": "node-contrast /path/to/compiled/entrypoint.js"
}
```

