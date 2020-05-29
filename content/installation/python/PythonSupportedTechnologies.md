<!--
title: "Supported Technologies"
description: "List of supported technologies"
tags: "installation Python agent frameworks support package"
-->

## Contrast agents

Contrast agents are supported for one year after release. Older agents may continue to function and remain compatible, but they are no longer fully supported.

Contrast applies bug fixes and develops new features on the latest version of the agent. Code changes are not backported to previous versions. While a workaround may be provided for a bug, to resolve issues, you should update to the release in which the issue was addressed.

## Operating systems

Agent testing is done on **64-bit OSX** and **64-bit Linux**.

Starting with version 2.3.0 of the agent, the package installation step requires the compilation of C extensions. This process is automatic, but it requires that certain software is installed in the target environment:

* At a minimum, `gcc`, `make`, `automake` and `autoconf` are required. The package names may be different on different platforms. It may be useful to install your platform's version of `build-essential`.
* On some platforms, it may be necessary to install system headers.

## Python versions

Contrast supports Python Long-Term Support (LTS) versions in **bugfix** and **security** status as well as the `2.7` version. Contrast shifts its support for Python versions as the working group shifts its LTS windows. See the [Status of Python branches](https://devguide.python.org/#status-of-python-branches) for specific release dates.


### Supported

* 3.8.X: First supported agent was 2.8.0
* 3.7.X: First supported agent was 1.5.0
* 3.6.X: First supported agent was 1.0.0
* 3.5.X: First supported agent was 1.0.0
* 2.7.X: First supported agent was 1.0.0

### Deprecated

* 3.4.X: Last supported agent was 1.9.0

## Web servers

* [gunicorn](https://gunicorn.org/) 20.0.X
* [uWSGI](https://uwsgi-docs.readthedocs.io/en/latest/#) 2.0.X

## Web frameworks

* [Django](https://www.djangoproject.com/): 1.X & 2.X
* [Flask](https://flask.palletsprojects.com/en/1.1.x/): 0.10 - 0.12 and 1.X
* [Pylons](https://pylonsproject.org/): 1.X
* [Pyramid](https://trypyramid.com/): 1.9

While the agent can still run on [WSGI compatible](https://wsgi.readthedocs.io/en/latest/) web frameworks that aren't officially supported, Contrast may produce less-specific findings than it does for supported frameworks. Instead of reporting that a vulnerability occurs in your application code, Contrast may need to report it within the framework code where it interfaces directly with the WSGI methods.

## Databases

* Mongo (`pymongo`)
* MySQL (`PyMySQL and mysql-connector`)
* PostgreSQL (`psycopg2`)
* SQLite3 (`sqlite3` and `pysqlite2`)

## ORMs

* Flask-SQLAlchemy (`Flask-SQLAlchemy`)
* SQLAlchemy (`SQLAlchemy`)


## Testing environments

When changes are made, Contrast runs a battery of automated tests to ensure that it detects findings in supported technologies across all supported versions of Python.


