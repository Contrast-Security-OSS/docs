<!--
title: "Introduction to Advanced Rules Customization"
description: "Introduction to Customizing Rules"
tags: "java agent installation rules customization policy introduction"
-->

## The Contrast Policy

Policies in Contrast tell the agent how to behave. They indicate which methods the agent needs to instrument and how to do it. Within each policy are sections that govern the sources, tag lists, properties and rules that the agent builds to monitor an application. 

All Contrast policies adhere to the following skeleton:

```
<?xml version="1.0" encoding="UTF-8"?>
<policy>
    <properties>
        <name>value</name>
    </properties>
    <rules>
        <rule id="unique-id">
            ...
        </rule>
    </rules>
    <sources>
        <method id="unique-id" enabled="true" deep="true" name="${sourceName}" signature="${methodSignatureOfSource}" tags="${tagsToApply}"/>
    </sources>
    <tag-lists>
        <tag-list id="unique-id" name="${sourceName}" tags="${tagsToApply}">
            <method enabled="true" signature="${methodSignatureOfTagger}" source-filter="true" target="${O/R/P#}"/>
        </tag-list>
    </tag-lists>   
</policy>
```
 
<br> 
 
## Alterations to the Policy

There are a few ways that you can change the loaded policy used by the Contrast agent.

### Use `contrast.policy`

The primary way to alter the internal policy is using the `contrast.policy` system property. This method allows the end-user to apply custom rules in addition to the default Contrast rules without the task of maintaining and modifying a copy of the default rules. It also lets you specify a list of files containing new pieces of polices to add to or overwrite the internal policy.

Example syntax:

```
java -jar -javaagent:"/path/to/contrast.jar" -Dcontrast.policy="/path/to/file1;/path/to/file2;...;/path/to/fileN" ...
```

You can also add this definition to the `JAVA_OPTS` export:

```
export CONTRAST_AGENT_JAR="/path/to/contrast.jar"
export CONTRAST_POLICY_OVERRIDES="/path/to/file1;/path/to/file2;...;/path/to/fileN"
export JAVA_OPTS="$JAVA_OPTS -javaagent:$CONTRAST_AGENT_JAR –Dcontrast.policy=$CONTRAST_POLICY_OVERRIDES ..."
```

The changes are applied in the order specified when the definition is set: 

```
-Dcontrast.policy="/path/to/file1;/path/to/file2;...;/path/to/fileN"
```

The example above indicates that *file1* is applied first, then *file2*, all the way to *fileN*. (This means that *file2* overwrites *file1* and so forth.) 

#### Custom elements

If a custom element - a rule, source method or tag list - shares the same `id` attribute as an existing element, the custom element  replaces the existing element. 

> **Example:** If the default rules contains a source method with `id="source1"` and an overriding file contains a source method also with `id="source1"`, then the Contrast agent uses the overriding file's source method at runtime.

### Use `contrast.policy.overrides`

Using the ```contrast.policy.overrides``` system property to alter the policy follows a the same principles as the primary method. The main difference with this approach is that anything in the `contrast.policy.overrides` field takes precedence over anything in `contrast.policy`. (This is similar to the way that `contrast.policy` takes precedence over anything in the internal policy files.)

### Use `contrast.policy.standalone`

Using the ```contrast.policy.standalone``` system property is the most aggressive of the three options. Unlike the previous two, the presence of this property indicates to the system that the external policy is the only policy to use. As a result, no internal Contrast policies will be loaded. Only use this policy when you want to exclusively use custom sources and rules without any underlying propagation from Contrast methods. 

> **Note:** Without propagation from Contrast methods, the detection process will probably fail; therefore, you should only employ this approach with strict supervision from the Contrast team. 




