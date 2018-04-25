<!--
title: "Supported Technologies"
description: "List of supported technologies"
tags: "Java agent installation containers JDKs frameworks libraries support troubleshooting"
-->


Supported JDKS | Supported Containers | Supported Application Frameworks
:-------------- |:-------------------- |:--------------------------------
Oracle JDK 1.5, 1.6, 1.7, 1.8 | Tomcat 4, 5, 6, 7, 8 | Java EE/J2EE, Servlet/JSP
Open JDK 1.5, 1.6, 1.7, 1.8 | JBoss 4.2, 5, 5.1, 6.1, 7, 7.1 | J2SE
IBM 1.5 (2008+), 1.6, 1.7 | WildFly 10, 10.1.x | Spring/Spring Boot
JRockit 1.5, 1.6 (update 95+ or R28.3.6+) |Jetty 6, 7, 8, 9 | Struts, Struts 2
                 | GlassFish 3, 4 | Jersey
                 | WebSphere 6.1, 7, 8, 8.5 * | Wicket
                 | WebLogic 9, 10, 11g, 12c | JSF (MyFaces, RichFaces, Sun)
                 | Netty 3.x, 4.x | Seam
                 | Play 2.2,2.3,2.4 | Axis (RPC), XMLRPC, RMI, Apache CXF, JMS (javax.jms)
                 | Grizzly 2.3.20+ | Direct Web Remoting (DWR)
                 | Vert.X 3.0+     | DropWizard
                 |                 | Google Web Toolkit (GWT)
                 |                 | Freemarker, Velocity
                 |                 | Hibernate
                 |                 | JDBC, JDBI, MongoDB                 
                 |                 | Oracle, SQL Server, PostgreSQL, DB2, MySQL JDBC drivers
                 |                 | GSON, Kryo, minidev, org.json
                 |                 | Xerces, JAXB, nu.xom
                 |                 | XStream, Jackson (JSON/XML)
                 |                 | java.nio, java.beans
                 |                 | Apache POI, fileupload, HttpComponents
                 |                 | OWASP ESAPI, AntiSamy, Coverity 


Contrast tests WebSphere on Windows and Linux, and offers limited support for zSeries and AIX environments. Customers using WebSphere on SPARC Solaris require version 8.5.5.11.


### Note for Proguard Users

[Proguard](https://sourceforge.net/projects/proguard/files/) includes Java
bytecode optimization features which break basic assumptions that runtime agents
like Contrast rely on. Proguard users that wish to protect their applications
with Contrast need to avoid these optimizations by using Proguard's
[-dontoptimize](https://www.guardsquare.com/en/proguard/manual/usage#dontoptimize)
configuration option.
