<!--
title: "Supported Technologies"
description: "List of supported technologies"
tags: "installation Node agent frameworks support troubleshooting nodejs javascript modules"
-->

## Node.js Version Support

Contrast supports Node.js Long-Term Support (LTS) versions 6, 8and 10<sup style="font-size:8pt">[1](#footnote1)</sup>. Contrast shifts its support for Node.js versions as the working group shifts its LTS windows. For the schedule, see the [Node.js Long-Term Support Release Schedule](https://github.com/nodejs/LTS).

## Web Framework Support<sup style="font-weight:normal; font-size:10pt">[2](#footnote2)</sup>
* [express](http://expressjs.com) version 4
* [hapi](https://www.npmjs.com/package/hapi) versions 16 and 17
* [sails](http://sailsjs.org/) version 0.12

## Third-Party Module Support
* [express-session](https://github.com/expressjs/session)
* [mongodb](https://docs.mongodb.org/ecosystem/drivers/node-js/)
* [mysql](https://www.npmjs.com/package/mysql)
* [postgres](https://www.npmjs.com/package/pg)
* [postgres](https://www.npmjs.com/package/pg)
* [sequelize](http://docs.sequelizejs.com/)
* [mongoose](http://docs.sequelizejs.com/)

Contrast doesn't guarantee support for old or deprecated versions of third-party modules.

## OS Support

The agent runs entirely in the Node.js application layer with no *C* dependencies. As a result, it works on **all of the same operating systems as Node.js**, including Linux, Windows, macOS and Unix.

## Testing Environments

When changes are made, Contrast runs a battery of automated tests to ensure that it detects findings in supported technologies across all supported versions of Node. Among these are tests that exercise the Contrast agent against our
[Node Test Bench](https://github.com/Contrast-Security-OSS/NodeTestBench), [Hapi 16 Test Bench](https://github.com/Contrast-Security-OSS/Hapi16TestBench), and [Hapi 17 Test Bench](https://github.com/Contrast-Security-OSS/HapiTestBench) applications.
Each of these applications is updated as more third-party library support is added to the agent.

> If you want to add test cases, let Contrast know by submitting a pull request.

## Additional Technology

Contrast runs with a range third-party technology, all of which isn't listed here. If you'd like to confirm that Contrast supports your preferred technology, or you'd like to make a case for Contrast to support it, [let the Contrast team know.](mailto:bugs@contrastsecurity.com)

***
<a name="footnote1"><sup>1</sup></a>
The Node.js agent does not currently support HTTP2 and, in general, does not support Node.js features that are classified as Experimiental (Stability: 1).

<a name="footnote2"><sup>2</sup></a>
Missing web framework support means that Contrast may produce less specific findings than it would for supported frameworks;however, the agent is still able to run.
Instead of reporting that a vulnerability occurs in your application code, Contrast may need to report it within the framework code where it interfaces directly with Node.js's built-in [http](https://nodejs.org/api/http.html) module.
