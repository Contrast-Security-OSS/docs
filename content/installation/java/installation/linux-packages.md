

Regardless of the platform on which you're installing, there are two linux packages of interest for the Java agent: `contrast-java-agent` and `contrast-java-agent-exec-helper`. Contrast offers both packages to address users' specific situations.

## Package One 

The `contrast-java-agent` package includes the *contrast.jar* Java instrumentation agent along with an initial configuration file at */etc/contrast/contrast_java.yaml*. This represents the core Java agent. You will need to invoke the JVM of the application you want to Protect and Assess with the appropriate agent flags to cause the *contrast.jar* binary to instrument your system. 

<!-- THERE IS PROBABLY LOCATION TO LINK TO THAT DESCRIBES THIS -->

## Package Two 

The `contrast-java-agent-exec-helper` package is an execution helper that will monitor all invocations of the JVM on the system globally, and dynamically insert the proper arguments for instrumenting an application. It's used for situations of convenience so that a user doesn't need to modify specific env vars or startup scripts for the Java agent to instrument the applications on the system. Some users may want more granular control over the instrumentation action; consequently, this is an optional package.

