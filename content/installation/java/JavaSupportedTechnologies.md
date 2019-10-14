<!--
title: "Supported Technologies for the Java Agent"
description: "List of supported technologies for the Java agent"
tags: "Java agent installation containers JDKs frameworks libraries support"
-->

Contrast is tested and proven to be compatible with the following technologies; however, Contrast is also compatible with many more that aren't listed.

|Supported JDKS                             | Supported Containers                 | Supported Application Frameworks
|:--------------                            |:--------------------                 |:--------------------------------
|IBM 1.6, 1.7, 1.8                          | GlassFish 4                          | Apache POI, fileupload, HttpComponents
|JRockit 1.6 (update 95+ or R28.3.6+)       | Grizzly 2.3.20+                      | Axis (RPC), XMLRPC, RMI, Apache CXF, JMS (javax.jms)
|Oracle JDK 1.6, 1.7, 1.8                   | JBoss 4.2, 5, 5.1, 6.1, 7, 7.1       | Direct Web Remoting (DWR)
|Open JDK 1.6, 1.7, 1.8                     | Jetty 7, 8, 9                        | DropWizard
|                                           | Karaf 3.0.x                          | Freemarker
|                                           | Netty 4.x                            | GSON, Kryo, minidev, org.json
|                                           | Play 2.4                             | Google Web Toolkit (GWT)
|                                           | Tomcat 5, 6, 7, 8                    | Hibernate
|                                           | Vert.X 3.0                           | J2SE
|                                           | WebLogic 10, 11g, 12c                | JDBC, JDBI, MongoDB
|                                           | WebSphere 8.5<sup>*</sup>,9          | JSF (MyFaces, RichFaces, Sun)
|                                           | WildFly 10, 10.1.x                   | java.nio, java.beans
|                                           |                                      | Java EE/J2EE, Servlet/JSP
|                                           |                                      | Jersey
|                                           |                                      | OWASP ESAPI, AntiSamy, Coverity
|                                           |                                      | Oracle, SQL Server, PostgreSQL, DB2, MySQL JDBC drivers
|                                           |                                      | Seam
|                                           |                                      | Spring, Spring Boot, Spring AOP
|                                           |                                      | Struts, Struts 2
|                                           |                                      | Wicket
|                                           |                                      | XStream, Jackson (JSON/XML)
|                                           |                                      | Xerces, JAXB, nu.xom


Contrast tests WebSphere on Windows and Linux, and offers limited support for zSeries and AIX environments. Customers using WebSphere on SPARC Solaris require version 8.5.5.11.


### Note for Proguard Users

[Proguard](https://sourceforge.net/projects/proguard/files/) includes Java bytecode optimization features which break basic assumptions that runtime agents like Contrast rely on. Proguard users that want to protect their applications with Contrast need to avoid these optimizations by using Proguard's [-dontoptimize](https://www.guardsquare.com/en/proguard/manual/usage#dontoptimize) configuration option.
