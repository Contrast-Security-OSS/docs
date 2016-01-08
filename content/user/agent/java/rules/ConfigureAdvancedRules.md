<!--
title: "Advanced Rules Customization - Introduction"
description: "Introduction to Customizing Rules"
-->

## Getting Started
The ```contrast.policy.overrides``` definition allows the end-user to apply custom rules in addition to the default Contrast rules without having to maintain & modify a copy of the default rules. This definition lets the user specify a list of files containing properties/rules/propagators/sources/tag-lists custom rules to apply to an active policy.

Example Syntax:
```
java -jar -javaagent:"/path/to/contrast.jar" -Dcontrast.policy.overrides="/path/to/file1;/path/to/file2;...;/path/to/fileN" ...
```
<br>
This definition can also be added to the JAVA_OPTS export:
```
export CONTRAST_AGENT_JAR="/path/to/contrast.jar"
export CONTRAST_POLICY_OVERRIDES="/path/to/file1;/path/to/file2;...;/path/to/fileN"
export JAVA_OPTS="$JAVA_OPTS -javaagent:$CONTRAST_AGENT_JAR –Dcontrast.policy.overrides=$CONTRAST_POLICY_OVERRIDES ..."
```
<br>
Files containing the overrides must follow the same format as the default rules.xml file:
```
<?xml version="1.0" encoding="UTF-8"?>
<policies>
	<policy>
        <org-packages/>
        <properties>
        	<property.to.add.or.override>value.1</property.to.add.or.override>
        </properties>
        <propagators>
            <method id="propagator.id.to.add.or.override" deep="false" enabled="true" scoped="true" signature="..." type="P2R"/>
	</propagators>
        <rules>
        	<rule id="rule.to.add.or.override" service-level="Business" level="high" enabled="true">
				...
	       	</rule>
        </rules>
        <sources>
            <dynamic-sources>
                <dynamic-source id="dynamic-source.to.add.or.override" includeStatic="false">
					...
                </dynamic-source>
            </dynamic-sources>
            <method id="source.to.add.or.override" enabled="true" name="sourceName" signature="..." tags="cross-site"/>
        </sources>
        <tag-lists>
            <tag-list id="tag-list.to.add.or.override" name="Base64 decoding" tags="base64-decoded">
                ...
            </tag-list>
        </tag-lists>   
    </policy>
</policies>
``` 
<br>

The overrides are applied in the order specified when the define is set, i.e.
```
-Dcontrast.policy.overrides="/path/to/file1;/path/to/file2;...;/path/to/fileN"
```
<br>
Indicates "file1" will be applied first, then "file2", all the way to "fileN". Note that this means file2 will overwrite file1, etc. 
If a custom [rule, source method, propagator method, or tag-list] element shares the same id attribute as an existing element, then the custom element will replace the existing element.

For example: if the default rules contains a source method with id="source1" and an overriding file contains a source method also with id="source1", then the Contrast Agent, at runtime, will use the overriding fie's source method.

Currently, the override action is completely additive, meaning setting a propagator/source method's "enabled" attribute to "false" in an overriding policy file will not disable an existing propagator/source method at runtime. This will feature will be implemented soon. 
