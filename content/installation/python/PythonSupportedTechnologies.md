<!-- 
title: "Supported Technologies"
description: "List of supported technologies"
tags: "installation Python agent frameworks support troubleshooting package"
-->

The Python agent supports Python versions 2.7+ and 3.4 - 3.6. Framework support is currently for:

* Django:  1.10+ and 2.0+ <br> (Django 2 is Python 3 only)
* Flask:   0.10 - 0.12 and 1.0+ 
* Pyramid: 1.9 (Beta)

>**Note:** The Python agent is meant to be WSGI compatible. It may be compatible to other WSGI applications as long as the guidelines are followed.


## Database Support

The Python Agent has database support for:
 
* MySQL (`MySQLdb`)
* Oracle (`cx_Oracle`)
* SQLite3 (`sqlite3` and `pysqlite2`)
* PostgreSQL (`psycopg2`)

## NoSQL Support

The Python Agent has NoSQL support for:

* Mongo (`pymongo`)

## Database Support

The Python Agent has ORM support for:
 
* SQLAlchemy (`SQLAlchemy`)
* Flask-SQLAlchemy (`Flask-SQLAlchemy`)

## OS Support

Agent testing is done on **64-bit OSX** and **64-bit Linux**. The agent has no *C* dependencies, and may work in other operating system environments.


