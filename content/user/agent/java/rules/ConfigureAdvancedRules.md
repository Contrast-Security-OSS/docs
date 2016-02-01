<!--
title: "Advanced Rules Customization - Introduction"
description: "Introduction to Customizing Rules"
-->

## The Contrast Policy
Policies in Contrast tell the Agent how to behave. They indicate which methods the Agent needs to instrument and how to do so. Within this policy are sections that govern the sources, tag-lists, properties, and rules that the Agent builds in order to monitor an application. 

The policies adhere to the following skeleton:
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
 
## The Contrast Policy - Alterations
The Contrast Agent provides a few ways in which users can change the loaded policy used by the Agent. 

### Using 'contrast.policy'
The first method, using the ```contrast.policy``` system property, is the primary way in which users should alter the internal policy. It allows the end-user to apply custom rules in addition to the default Contrast rules without having to maintain & modify a copy of these default rules. This definition lets the user specify a list of files containing new pieces of polices to add to or overwrite the internal policy.

Example Syntax:
```
java -jar -javaagent:"/path/to/contrast.jar" -Dcontrast.policy="/path/to/file1;/path/to/file2;...;/path/to/fileN" ...
```
This definition can also be added to the ```JAVA_OPTS``` export:
```
export CONTRAST_AGENT_JAR="/path/to/contrast.jar"
export CONTRAST_POLICY_OVERRIDES="/path/to/file1;/path/to/file2;...;/path/to/fileN"
export JAVA_OPTS="$JAVA_OPTS -javaagent:$CONTRAST_AGENT_JAR –Dcontrast.policy=$CONTRAST_POLICY_OVERRIDES ..."
```
The changes are applied in the order specified when the define is set, i.e.
```
-Dcontrast.policy="/path/to/file1;/path/to/file2;...;/path/to/fileN"
```
indicates 'file1' will be applied first, then 'file2', all the way to 'fileN'. Note that this means 'file2' will overwrite 'file1', etc. 
If a custom [rule, source method, or tag-list] element shares the same 'id' attribute as an existing element, then the custom element will replace the existing element.

For example: if the default rules contains a source method with ```id="source1"``` and an overriding file contains a source method also with ```id="source1"```, then the Contrast Agent, at runtime, will use the overriding fie's source method.

###Using contrast.policy.overrides
The second method, using the ```contrast.policy.overrides``` system property works almost exactly the same as the ```contrast.policy``` property. The main difference in this approach is that anything in the ```contrast.policy.overrides``` field will take precedence over anything in ```contrast.policy```, similar to how ```contrast.policy``` takes precedence over anything in the internal policy files

###Using contrast.policy.standalone
The final method, using the ```contrast.policy.standalone``` system property is the most agressive of the three options. Unlike the previous two, the presence of this property indicates to the system that the external policy is the only policy that is to be used. As a result, no internal Contrast policies will be loaded. This policy should only be used in the case where one desires soley to use custom sources and rules without any underlying propagation from Contrast methods. It should be noted that without this propagation, most likely the detection process will fail; therefore, it is unlikely that this approach should be employed without strict supervision from the Contrast team. 
