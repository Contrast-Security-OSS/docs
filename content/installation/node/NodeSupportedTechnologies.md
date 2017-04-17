<!--
title: "Supported Technologies"
description: "List of supported technologies"
tags: "installation Node agent frameworks support troubleshooting nodejs javascript modules"
-->
Contrast supports Node versions 4 and 6 LTS. We will shift support for Node versions as the Node project shifts its LTS windows. For a schedule, see the [Node.js Long Term Support Release Schedule](https://github.com/nodejs/LTS).

3rd-Party Module Support                                       | Web Framework Support<sup>[1](#footnote1)</sup> | Coming Soon
:-----                                                         | :----                                           | :-------
[express-session](https://github.com/expressjs/session)        | [express](http://expressjs.com)                 | [hapi](https://www.npmjs.com/package/hapi)
[mongodb](https://docs.mongodb.org/ecosystem/drivers/node-js/) | [sails](http://sailsjs.org/)                    | [koa](https://www.npmjs.com/package/koa)
[mysql](https://www.npmjs.com/package/mysql)                   |                                                 |
[postgres](https://www.npmjs.com/package/pg)                   |                                                 |


## OS Support
Testing of the agent is done on **64-bit OSX** and **64-bit Linux**.
The agent runs entirely in Node.js-"land" with no C dependencies and can also work on other operating systems.

## Testing Environments
When changes are made, we run a battery of automated tests to ensure that we still detect findings in supported technologies across all supported versions of Node.
These automated tests exercise our agent against our [Node Test Bench](https://github.com/Contrast-Security-OSS/NodeTestBench) application on all supported versions.
This application will be updated as more third-party library support is added to the agent. We welcome any pull requests for those looking to add test cases.

## Are we forgetting something?
Contrast works on a lot of other stuff, but we just haven't gotten around to building testing infrastructure around it.
If we do not explicitly mention a third-party technology you use here, there's a good chance we still run with it.

If you're really interested in us supporting another technology, and have a compelling reason to do so, [let us know!](mailto:bugs@contrastsecurity.com)
***
<a name="footnote1"><sup>1</sup></a> Missing web framework support does not mean the agent will not run. It simply means we may produce less specific findings; rather than report that a vulnerability occurs in your application code, we may need to report it within the framework code where it interfaces directly with Node.js's built-in [http](https://nodejs.org/api/http.html) module.
