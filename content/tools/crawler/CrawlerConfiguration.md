<!--
title: "Monitoring A Crawler Instance"
description: "Instructions on how to monitor a crawling instance"
tags: "crawler monitoring configuration Microservice JMX"
-->

## Production Monitoring

### Micro-Service

The crawler micro-service provides features to help you monitor and manage the application in production via HTTP endpoints and JMX.

```
curl http://localhost:8091/actuator/health
{"status":"UP","diskSpace":{"status":"UP","free":40122884096,"threshold":10485760}}
curl http://localhost:8091/actuator/info
 
{"app":{"version":"3.1.7","description":"Contrast Crawler is a Web crawler that automatically crawls static and dynamic Web applications to exercise Contrast agents","name":"Contrast Crawler"},"build":{"artifact":"contrast-crawler-service","name":"Contrast Crawler Service","version":"3.1.7","description":"Micro-service for Contrast's spider tool"}}
```

### Additional Features Exposed in JMX

ID | Description
-- | -----------
```autoconfig``` | Displays an auto-configuration report showing all auto-configuration candidates and the reason why they **were** or **were not** applied
```beans``` | Displays a complete list of all the Spring beans in your application
```configprops``` | Displays a collated list of all ```@ConfigurationProperties```
```dump``` | Performs a thread dump
```env``` | Exposes properties from Spring's ```ConfigurableEnvironment```
```metrics``` | Shows **metrics** information for the current application
```mappings``` | Displays a collated list of all ```@RequestMapping``` paths
```shutdown``` | Allows the application to be gracefully shut down (not enabled by default)
```trace``` | Displays trace information (by default the last few HTTP requests) 

## TeamServer

### Disk Management

Crawl records are persisted as history on the TeamServer machine. Over time, the accumulation of the result records can significantly impact the disk usage. By default, TeamServer limits the disk space usage by crawl history to **1 GB**. Upon reaching this limit, the oldest crawl history will be deleted and the new crawler results will be saved. These settings can be changed within ```crawler.properties``` in the ***${contrast.home.dir}/data/conf*** directory.
