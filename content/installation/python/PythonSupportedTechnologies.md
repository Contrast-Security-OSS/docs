<!-- 
title: "Supported Technologies"
description: "List of supported technologies"
tags: "installation Python agent frameworks support package"
-->

The Python agent supports Python versions 2.7 and 3.5 to 3.8. Framework support is currently for:

* Django: 1.10+ and 2.0+ <br> (Django 2 is available for Python 3 only.)
* Flask: 0.10 - 0.12 and 1.0+
* Pyramid: 1.9
* Pylons: 1.0+

>**Note:**
* The Python agent is meant to be WSGI compatible. It may be compatible to other WSGI applications as long as the guidelines are followed.


## Database Support

The Python agent has database support for:

* MySQL (`PyMySQL and mysql-connector`)
* SQLite3 (`sqlite3` and `pysqlite2`)
* PostgreSQL (`psycopg2`)

## NoSQL Support

The Python agent has NoSQL support for:

* Mongo (`pymongo`)

## Database Support

The Python agent has ORM support for:

* SQLAlchemy (`SQLAlchemy`)
* Flask-SQLAlchemy (`Flask-SQLAlchemy`)

## OS Support

Agent testing is done on **64-bit OSX** and **64-bit Linux**.

Starting with version 2.3.0 of the agent, the package installation step requires the compilation of C extensions. This process is automatic, but it requires that certain software is installed in the target environment: 

* At a minimum, `gcc`, `make`, `automake` and `autoconf` are required. The package names may be different on different platforms. It may be useful to install your platform's version of `build-essential`.
* On some platforms, it may be necessary to install system headers.
