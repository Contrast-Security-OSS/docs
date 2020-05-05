<!--
title: "Working with Transpiled Code"
description: "Notes on Contrast compatibility with languages like CoffeeScript or TypeScript"
tags: "node agent compatibility coffee coffeescript typescript babel"
-->

Contrast supports applications written in languages that compile to JavaScript, such as [CoffeeScript](http://coffeescript.org/) and [TypeScript](http://www.typescriptlang.org/). While Contrast only instruments JavaScript, you can tell Contrast how to get to the compiled code.

> **Note:** Although Contrast functions with languages that compile to JavaScript, the source may not correspond directly with the resulting JavaScript. As a result, reported metadata - such as vulnerability line-of-code and filename - references the compiled result, not the original source.

Some languages, like [TypeScript](http://www.typescriptlang.org/), require you to precompile your code before runtime. In these cases, Contrast must simply point to the *compiled* entrypoint for your application:

```javascript
scripts: {
    "test": "...",
    "start": "...",
    "contrast": "node -r @contrast/agent /path/to/compiled/entrypoint.js"
}
```

