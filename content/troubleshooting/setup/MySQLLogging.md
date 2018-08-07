<!--
title: "Enabling and Disabling MySQL Logging"
description: "Enabling and Disabling MySQL Logging for Increased Database Telemetry"
tags: "troubleshoot setup EOP mysql logging slow query"
-->

## Log Database Queries with Embedded MySQL

Enterprise-on-Premises (EOP) customers can use the embedded MySQL instance packaged with Contrast or integrate Contrast with a distributed MySQL instance. For customers leveraging the embedded MySQL instance, Contrast provides a configurable property file in *$CONTRAST_HOME/data/conf/mysql.properties*. This file is very similar to the *my.cnf* file that is leveraged natively within MySQL.

## Sample Properties File

Two logging flags are available: general logging and slow query logging. 

**General logging** is used to log every statement executed by MySQL. Customers who use this option should be very careful, as this log can grow to many 100s of gigabytes of storage over a very short window of time. Contrast recommends that you use general logging only for debugging purposes and that you disable it at all other times. 

**Slow query logging** is used to evaluate queries that take a particularly long period of time. MySQL monitors the SQL and measures the time it takes to execute. When enabled, this log grows from many megabytes to gigabytes depending on whether a system is very slow. Contrast recommends that you keep this option enabled, but that you pay close attention to the size of the log file over time.

An example from the *mysql.properties* file created with Contrast as part of an embedded installation/upgrade:

```
# The destination for general query log and slow query log output
log_output=FILE
log_queries_not_using_indexes=ON
general_log=OFF
general_log_file=${Contrast.Data.Log}/mysql.log

# Log errors and startup messages to this file
log_error=${Contrast.Data.Log}/mysql_error.log

# Whether the slow query log is enabled. "Slow" is determined by the value of the long_query_time variable
slow_query_log=OFF
#The name of the slow query log file
slow_query_log_file=${Contrast.Data.Log}/mysql-slow.log
```

