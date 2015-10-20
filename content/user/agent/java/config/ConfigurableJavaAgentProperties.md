<!--
title: "Configurable Java Agent Properties"
description: "Instructions on configuring Java agent properties"
-->

Parameters for certain rules are now configurable by the end user. The following are methods of applying custom parameters to these rules.

## Setting In "rules.xml"

An optional top level ```<properties>``` element has been added to the ***rules.xml***.

```
<?xml version="1.0" encoding="UTF-8"?>
<policies>
    <policy>
        <properties>
            <web.session.timeout>30</web.session.timeout>
            .
            .
            .
        </properties>
        <org-packages/>
        <propagators>
        .
        .
        .
        </propagators>
        .
        .
        .
    </policy>
    .
    .
    .
</policies>
```


## Properties File

Also, users can use ```-Dcontrast.properties="/path/to/properties.file"``` to point to a standard Java properties file when launching their application container. This will override any settings in the ```<properties>``` element in the ***rules.xml*** file.

For example, in the ***catalina.sh***:

```export CONTRAST_AGENT_JAR= "..."```
```export JAVA_OPTS= "$JAVA_OPTS -javaagent:$CONTRAST_AGENT_JAR -Dcontrast.properties=" /path/to/properties.file "..."```

And a properties file located at ```/path/to/properties.file``` would look like:
```web.session.timeout= 30```


## Direct Definition

Finally, the user could specify a property directly when launching their application container, like ```-Dweb.session.timeout=30```. This will override any settings in ***rules.xml*** and the properties file.

```export CONTRAST_AGENT_JAR= "..."```
```export JAVA_OPTS= "$JAVA_OPTS -javaagent:$CONTRAST_AGENT_JAR -Dweb.session.timeout=" 30 "..."```


## Supported Properties

Currently, the following properties are supported by this feature:

Property Name | Default Value | Description
------------- | ------------- | -----------
```web.session.timeout``` | 30 | The security plugin will report a vulnerability if the ```<session-timeout>``` value configured in an application's ***web.xml*** exceeds this value. This value is in minutes.
