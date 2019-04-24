<!--
title: "Supported Technologies"
description: "List of supported technologies"
tags: "installation Node agent frameworks support troubleshooting nodejs javascript modules"
-->

## Node.js Version Support

Contrast supports Node.js Long-Term Support (LTS) versions 6, 8 and 10. Contrast shifts its support for Node.js versions as the working group shifts its LTS windows. For the schedule, see the [Node.js Long-Term Support Release Schedule](https://github.com/nodejs/LTS).

> **Note:** The Node.js agent currently doesn't support HTTP2, and generally doesn't support Node.js features classified as Experimental (Stability: 1).

## Web Framework Support

* [Express](http://expressjs.com) version 4
* [hapi](https://www.npmjs.com/package/hapi) versions 16-18
* [Sails](http://sailsjs.org/) version 0.12

While the agent can still run on web frameworks that aren't officially supported, Contrast may produce less-specific findings than it would for supported frameworks. Instead of reporting that a vulnerability occurs in your application code, Contrast may need to report it within the framework code where it interfaces directly with Node.js's built-in [http](https://nodejs.org/api/http.html) module.


## Third-Party Module Support

* [express-session](https://github.com/expressjs/session)
* [MongoDB](https://docs.mongodb.org/ecosystem/drivers/node-js/)
* [MySQL](https://www.npmjs.com/package/mysql)
* [Mongoose](https://mongoosejs.com)
* [postgres](https://www.npmjs.com/package/pg)
* [Sequelize](http://docs.sequelizejs.com/)
* [sqlite3](https://www.npmjs.com/package/sqlite3)

Contrast doesn't guarantee support for old or deprecated versions of third-party modules.

## OS Support

The agent runs in the Node.js application layer with some C++ dependencies. As a result, it works on **the same operating systems as Node.js**, including Linux, Windows, macOS and other Unix-like systems, assuming there is a C++ compiler toolchain installed.

## Testing Environments

When changes are made, Contrast runs a battery of automated tests to ensure that it detects findings in supported technologies across all supported versions of Node. This includes tests that exercise the agent against Contrast's
[Node Test Bench](https://github.com/Contrast-Security-OSS/NodeTestBench), [Hapi 16 Test Bench](https://github.com/Contrast-Security-OSS/Hapi16TestBench), [Hapi 17 Test Bench](https://github.com/Contrast-Security-OSS/HapiTestBench/tree/hapi17) and [Hapi 18 Test Bench](https://github.com/Contrast-Security-OSS/HapiTestBench/tree/hapi18) applications. Each of these applications is updated as Contrast adds more third-party library support to the agent.

If you want to add test cases, let Contrast know by clicking on the link of your chosen application and submitting a pull request.

## Additional Technology

Contrast runs with a range of third-party technology, including options that aren't listed here. If you want to confirm that Contrast supports your preferred technology, or you'd like to make a case for Contrast to support it, [let Contrast know.](mailto:bugs@contrastsecurity.com)


## More Information

* [Working with Transpilers](installation-node.html#transpiler)
