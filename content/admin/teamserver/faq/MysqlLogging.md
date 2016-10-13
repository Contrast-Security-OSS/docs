<!--
title: "Enabling and Disabling MySQL Logging"
description: "Enabling and Disabling MySQL Logging for Increased Database Telemetry"
tags: "EOP mysql logging slow query"
-->

## Logging Database Queries with the Embedded MySQL
Enterprise On Premise customers have the option of using the embedded MySQL instance packaged with TeamServer or the option of integrating TeamServer with a distributed MySQL instance. For those customers leveraging the embedded MySQL instance, Contrast provides a configurable property file in $CONTRAST_HOME/data/conf/mysql.properties. This file is very similar to the my.cnf file that is leveraged natively within MySQL.

## Example MySQL.Properties File
Below is a sample passage from the mysql.properties file created with TeamServer as part of an embedded installation/upgrade. Notice there are two logging flags available, general logging and slow query logging. 

General logging is used to log every statement executed by MySQL. Customers turning this on should be very careful as the volume of messaging sent to the mysql.log file can be very overwhelming. We recommend this only be used for debugging purposes and should be disabled the majority of the time. This log can grow to many 100's of gigabytes of storage over a very short window of time.

The slow query log is used to evaluate queries that take a particularly long period of time. MySQL will monitor the sql and measure the time it takes to execute. This log will grow as well when enabled to many megabytes to gigabytes depending on whether a system is very slow. We recommend customers keep this disabled by default and only be used for debugging purposes.

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

