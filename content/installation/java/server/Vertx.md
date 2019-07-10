<!--
title: "Getting Started with Vert.x"
description: "Configuring Vert.x"
tags: "java agent configuration Vert.x"
-->

Support of the Vert.x framework within the Java agent is based on the Contrast Netty implementation, specifically the ability to follow key data events through Vert.x's messaging system.

## Before You Start 

[Download and install the Java agent](installation-javastandard.html) from Contrast before proceeding with the configuration instructions.

## Configure Vert.x Applications with the Java Agent 

The simplest approach for configuring the Contrast Java agent with a Vert.x web application is to package the web application as a standalone or fat JAR. 

* Include the following plugin in the *POM.xml* file:

```xml
<plugin>
	<groupId>org.apache.maven.plugins</groupId>
	<artifactId>maven-shade-plugin</artifactId>
	<version>2.3</version>
	<executions>
		<execution>
			<phase>package</phase>
			<goals>
				<goal>shade</goal>
			</goals>
			<configuration>
				<transformers>
					<transformer
						implementation="org.apache.maven.plugins.shade.resource.
						ManifestResourceTransformer">
						<manifestEntries>
							<Main-Class>io.vertx.core.Starter</Main-Class>
							<!-- change the Main-Verticle property to match 
							the name if your main Verticle class-->
							<Main-Verticle>com.contrastsecurity.examples.
							vertx.ApplicationMainVerticle</Main-Verticle>
						</manifestEntries>
					</transformer>
				</transformers>
				<artifactSet />
			</configuration>
		</execution>
	</executions>
</plugin>
```

* Once the standalone JAR is assembled, include `-javaagent:/PATH/TO/YOUR/contrast.jar` as one of the JVM arguments:

```bash
java -javaagent:/PATH/TO/YOUR/contrast.jar <other_options> 
-jar /PATH/TO/YOUR/application.jar
```

## Alternative Configuration

Alternatively, you can configure the Java agent as a `JVM_OPT` in the *vertx* script file. 

* You must include the paths to the application's dependencies in the *vertx* script's `CLASSPATH` property:

```bash
JVM_OPTS="-XX:+UseBiasedLocking -XX:BiasedLockingStartupDelay=0 
-javaagent:/PATH/TO/YOUR/contrast.jar"
```
* Once this is configured, launch the web application via the command `vertx run` passing the path to the main Verticle as a parameter:

```bash
vertx run /PATH/TO/YOUR/src/MainVerticle.java
```

The Vert.x application is unlikely to have a */WEB-INF/web.xml* file from which the Java agent can identify the application name. In this case, you can define the application name with the `-Dcontrast.appname=AppName` property when launching the Vert.x application with Contrast enabled. 

```bash
java -javaagent:/PATH/TO/YOUR/contrast.jar 
-Dcontrast.appname="<Name_to_show_in_Contrast>" <other options> 
-jar /PATH/TO/YOUR/application.jar
```
 
