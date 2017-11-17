<!--
title: "Supported Technologies"
description: "List of supported technologies"
tags: "installation Node agent frameworks support troubleshooting nodejs javascript modules"
-->

Contrast supports Node versions 4, 6, and 8 Long-Term Support (LTS). Contrast shifts support for Node versions as the Node project shifts its LTS windows. For a schedule, see the [Node.js Long-Term Support Release Schedule](https://github.com/nodejs/LTS).

Third-Party Module Support                                     | Web Framework Support<sup>[1](#footnote1)</sup>           | Coming Soon
:-----                                                         | :----                                                     | :-------
[express-session](https://github.com/expressjs/session)        | [express](http://expressjs.com)                           | [koa](https://www.npmjs.com/package/koa)
[mongodb](https://docs.mongodb.org/ecosystem/drivers/node-js/) | [sails](http://sailsjs.org/)                              |
[mysql](https://www.npmjs.com/package/mysql)                   | [hapi](https://www.npmjs.com/package/hapi) (version 16.x) |
[postgres](https://www.npmjs.com/package/pg)                   |                                                           |

Contrast does not guarantee support for old or deprecated versions of 3rd party modules.

## OS Support

The agent runs entirely in the Node.js application layer with no *C* dependencies. As a result, it works on **all of the same operating systems as Node.js**, including Linux, Windows, macOS and Unix.

## Testing Environments

When changes are made, Contrast runs a battery of automated tests to ensure that it detects findings in supported technologies across all supported versions of Node. These automated tests exercise the Contrast agent against Contrast's [Node Test Bench](https://github.com/Contrast-Security-OSS/NodeTestBench) application. This application is updated as more third-party library support is added to the agent. 

> If you want to add test cases, let Contrast know by submitting a pull request. 

## Additional Technology 

Contrast runs with a range third-party technology, all of which isn't listed here. If you'd like to confirm that Contrast supports your preferred technology, or you'd like to make a case for Contrast to support it, [let the Contrast team know.](mailto:bugs@contrastsecurity.com)

***
<a name="footnote1"><sup>1</sup></a> Missing web framework support means that Contrast may produce less specific findings than it would for supported frameworks; however, the agent is still able to run. Instead of reporting that a vulnerability occurs in your application code, Contrast may need to report it within the framework code where it interfaces directly with Node.js's built-in [http](https://nodejs.org/api/http.html) module. 
