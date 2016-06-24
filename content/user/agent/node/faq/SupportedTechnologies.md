<!--
title: "Supported Technologies"
description: "List of supported technologies"
tags: "Node agent frameworks support troubleshooting nodejs javascript modules"
-->

## Node Version Support
We support Node.js **v0.10.34** through **v4 LTS** and its core libraries.

## Testing Environments
When changes are made, we run a battery of automated tests to ensure that we still detect findings in supported technologies across all supported versions of Node. 
These automated tests exercise our agent against our [Node Test Bench](https://github.com/Contrast-Security-OSS/NodeTestBench) application on all supported versions. 
This application will be updated as more third-party library support is added to the agent. Additionally, we welcome any pull requests for those looking to add test cases. 

## OS Support
Testing of the agent is done on **64-bit OSX** and **64-bit Linux**.
The agent runs entirely in Node.js-"land" with no C dependencies and can also work on other operating systems.

## Third-Party Module Support
* [express-session](https://github.com/expressjs/session)
* [mongodb](https://docs.mongodb.org/ecosystem/drivers/node-js/)
* [mysql](https://www.npmjs.com/package/mysql) 
* [postgres](https://www.npmjs.com/package/pg)

## Web Framework Support
* [express](http://expressjs.com)

## Coming Soon
* [sails](http://sailsjs.org/)
* [hapi](https://www.npmjs.com/package/hapi)
* [koa](https://www.npmjs.com/package/koa)

Missing web framework support does not mean the agent will not run. It simply means we may produce less specific findings; rather than report that a vulnerability occurs in your application code, we may need to report it within the framework code where it interfaces directly with Node.js's built-in [http](https://nodejs.org/api/http.html) module.


### Are we forgetting something?
Contrast works on a lot of other stuff, but we just haven't gotten around to building testing infrastructure around it. 
If we do not explicitly mention a third-party technology you use here, there's a good chance we still run with it.

If you're really interested in us supporting another technology, and have a compelling reason to do so, [let us know!](mailto:bugs@contrastsecurity.com)
