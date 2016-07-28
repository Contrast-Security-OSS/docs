<!--
title: "Supported Technologies"
description: "List of supported technologies"
tags: "Java agent containers JDKs frameworks libraries support troubleshooting"
-->

## Java


Supported JDKS | Supported Containers | Supported Application Frameworks
:-------------- |:-------------------- |:--------------------------------
Oracle JDK 1.5, 1.6, 1.7, 1.8 | Tomcat 4, 5, 6, 7, 8 | Java EE/J2EE, Servlet/JSP
Open JDK 1.5, 1.6, 1.7 | JBoss 4.2, 5, 5.1, 6.1, 7, 7.1 | J2SE
IBM 1.5 (2008+), 1.6, 1.7 | Jetty 6, 7, 8, 9 | Spring/Spring Boot
JRockit 1.5, 1.6, 1.7 | GlassFish 3, 4 | Struts, Struts 2
                 | WebSphere 6.1, 7, 8.5 * | Jersey
                 | WebLogic 9, 10, 11g, 12c | Wicket
                 | JRun 4 | JSF (MyFaces, RichFaces, Sun)
                 | Netty 3.x, 4.x | ColdFusion 9, 10 (limited)
                 | Play 2.3.8+, 2.4.x  | Seam
                 | Grizzly 2.3.20+ | Axis (RPC), Apache CXF, JMS (javax.jms)
                 | Vert.X 3.0+     | Direct Web Remoting (DWR)
                 |                 | DropWizard
                 |                 | Google Web Toolkit (GWT)
                 |                 | Freemarker, Velocity
                 |                 | Hibernate
                 |                 | JDBC, JDBI, MongoDB                 
                 |                 | Oracle, SQL Server, PostgreSQL, DB2, MySQL JDBC drivers
                 |                 | GSON, Kryo, minidev 
                 |                 | Xerces, JAXB, nu.xom
                 |                 | XStream, Jackson (JSON/XML)
                 |                 | java.nio, java.beans
                 |                 | Apache POI, fileupload, HttpComponents
                 |                 | OWASP ESAPI, AntiSamy, Coverity 

* We only test WebSphere on Windows and Linux, and can only offer limited support for zSeries, Solaris and AIX environments.

Contrast works on a lot of other stuff, but we just haven't gotten around to building testing infrastructure around it. If you're really interested in us supporting another technology, and have a compelling reason to do so, [let us know!](mailto:bugs@contrastsecurity.com)
