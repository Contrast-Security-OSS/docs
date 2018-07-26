Regardless of what platform you are installing on, there are two linux packages
of interest for the Java Agent: `contrast-java-agent` and
`contrast-java-agent-exec-helper`. We offer the packages this way to better
address special customer situations which will be explained below.

`contrast-java-agent`: This includes the contrast.jar Java instrumentation
agent along with an initial config file at `/etc/contrast/contrast_java.yaml`.
This represents the core java agent. You will need to invoke the java vm of the
app you want to protect/assess with the appropriate agent flags to cause the
`contrast.jar` binary to instrument your system.  XXX THERE IS PROBABLY A
LOCATION TO LINK TO THAT DESCRIBES THIS XXX.

`contrast-java-agent-exec-helper`: This is an execution helper that will
monitor all invocations of the java vm on the system globally and dynamically
insert the proper arguments for instrumenting an app. It is used for situations
of convenience so that a user doesn't need to modify specific env vars or
startup scripts so that the contrast java agent instruments the apps on the
system. Some users may want finer-grained control over the instrumentation
action and thus this is an optional package.

