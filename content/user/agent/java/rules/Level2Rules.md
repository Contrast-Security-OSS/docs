<!--
title: "Level 2 Rules"
description: "How to add a level 2 rule to the Java Agent and Teamserver"
-->

## When should I use a Level 2 Rule?

Most of the rules that come with Contrast are Level 2 rules. There are rules that are driven from the agent's policy file. 
Contrast can be overridden to use a custom policy file, allowing for an organization to fully control all the sensor 
instrumentation using Contrast. Using this capability, you can:
* Add new rules.
* Alter the requirements for existing rules.
* Disable or delete rules.
* Control data propagation (not recommended).
* Add new sources of untrusted data.

The positives of using a Level 2 rule:
* Complete control of Contrast.
* Ability to fix bugs or enhance flaw-finding capabilities without a regularly scheduled software update.

The negatives of using a Level 2 rule, as opposed to a Level 1 rule:
* Requires expertise in the Contrast policy XML language.
* Mistakes made using Level 2 rules can hurt performance and hide true positives.
* Requires a centralized management of a policy file outside of TeamServer.

******

## Types of Level 2 Rules
There are two types of Level 2 Rules: Regular Expression and Data Flow. 

Regular Expression rules use pattern matching to evaluate the input to a given trigger and report any time the pattern is violated, regardless of the source of the input.

Conversly, Data Flow rules, as their name implies, are used to track untrusted data throughout the application and report when said data gets to a trigger without being properly validated or sanitized. 

******

## Adding a Level 2 Rule
Adding a new Level 2 Rule consists of two main parts: creating a new custom Policy file for the Agent to follow and creating a corresponding Groovy script to teach TeamServer processing and rendering. Our tutorials start with the creation of the Policy file and end with a template of the Groovy file.

******

### Adding a Level 2 Regular Expression Rule
This portion of the tutorial will walk through adding a new Regual Expression Rule that detects when an illegal value is passed into the Request object, thereby disabling its security. 

<br>

#### Step 1: Create a New Policy File
This will provide a skeleton for the definition of the new pieces of code which you want Contrast to analyze. The file needs to be saved to a centralized location to which any Application Server you want monitored with this rule can reach. For the duration of this walkthrough, we will assume that you have named the file ```custom_rules.xml```, although any name can be used (The filename becomes important in Step #7).

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<policy>
    <sources/>
    <propagators/>
    <tag-lists/>
    <rules/>
</policy>
```

<br>

#### Step 2: Add a New ```<rule>``` to the Policy
Regular Expression rules work by validating the pattern of a parameter or paramters passed into a given method. By suppliying a pattern to the rule, you're telling Contrast to report any time the pattern is matched and should not have been (```bad-value-regex```) or is not matched and should have been. (```good-value-regex```) 

For this example, we will create a rule that detects when security is disabled on a custom request object. In the first event, the call to setSecure should only ever be made with the value 'true'. In the second event, the call to disableSecurity should never be made with the value 'true'.
 
```xml
<rules>
    <rule level="low" id="https-disabled" enabled="true"> 
        <pattern>
            <event>
                <method inherit="true" signature="com.acme.ticketbook.Request.setSecure(boolean)"/>
                <params>
                    <param disallowed-tags="" good-value-regex="true" index="1" required-tags="" tracked="false"/>
                </params>
            </event>
            <event>
                <method inherit="true" signature="com.acme.ticketbook.Request.disableSecurity(boolean)"/>
                <params>
                    <param disallowed-tags="" bad-value-regex="true" index="1" required-tags="" tracked="false"/>
                </params>
            </event>
        </pattern>
    </rule>
    <rule.../>
</rules>
```

<br>

#### Step 3: Create a New Groovy Script for the Rule
Create a Groovy script based on the [template file](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/regex_template.groovy) provided. Be sure to set the getId() method to return the id from the rule above, or the Agent and TeamServer will not be able to corridinate properly and no vulnerabilities will be recorded. 

As part of the script generation, you will be asked to create two Mustache Strings. The most common tags are shown in the template itself, but a list of additional templates can be found [here](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/CONTRAST-HTML-TO-MUSTACHE.pdf).

<br>

#### Step 4: Teach TeamServer About the New Rule
There are two steps to teaching the TeamServer about your new rule. 

First, you need to move the Groovy script from Step #5 to the directory ```$contrast.data.dir\data\rulepack```. Typically, the contrast.data.dir can be found at ```C:/Program Files/Contrast``` on Windows and ```opt/Contrast``` on Linux. If this is not the case, your administrator may have specified a custom directory for installation. Please contact them to determine the proper location to store this file.

Second, you need to update the configuration for TeamServer to know of the existence of this rule file. In the rulepack directory to which you just moved your groovy script, there should be ```contrast-rules.external.xml```. Open this file and add an entry to point to the Groovy script. 

Your ```script-source``` will be the same as the one shown below, with the exception of the file name and the ```id``` MUST be the id of your rule followed by the String "-rule".

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" ...>
    ...
    <lang:groovy
            id="https-disabled-rule"
            refresh-check-delay="30000"
            script-source="classpath:com/aspectsecurity/contrast/teamserver/rulepack/secure.groovy"/>                
</beans>
```

<br>

#### Step 5: Restart the TeamServer

<br>

#### Step 6: Configure and Restart the Application Server
 In order for the agent to use this custom policy, add the ```-Dcontrast.policy.overrides``` flag to the run configuration where the ```-javaagent``` flag is set. You will need to set the overrides value to the path to the new policy file.

Note that you can also use HTTP URLs instead of file paths with the -Dcontrast.policy property.

Once the configuration is specified, restart your Application Server and test to verify your rule is funcitoning as expected.

******

### Adding a Level 2 Data Flow Rule
This portion of the tutorial will walk through adding a new Data Flow Rule that detects when unmasked credit cards are leaked to log files, and allow 
us to create an API that marks credit card data as "masked", in order to prevent false positives. Data Flow starts at a ```source``` and moves through ```propagator``` methods and ```tag``` methods before ultimately reaching a rule ```event```. 

Out of the box, Contrast knows about most common ```source``` and ```propagator``` methods. That being said, it may be necessary to add a new ```source``` if a piece of your custom code is the begining of a vulnerability you wish to report. 

Once the ```source``` is created, you will need to teach the Agent about methods in your code that sanitize or validate data and what that method does. To do this, you'll add a new ```tag-list```. The list will apply a tag to any data that travels through a method in the list. 

Finally, for a vulnerability to be reported, the tracked data has to violate a rule. The rule consists of a list of ```event``` entires, a method signature and list of required or disallowed tags. 

The format of each will be explained in greater detail below. 

<br>

#### Step 1: Create a New Policy File
This will provide a skeleton for the definition of the new pieces of code which you want Contrast to analyze. The file needs to be saved to a centralized location to which any Application Server you want monitored with this rule can reach. For the duration of this walkthrough, we will assume that you have named the file ```custom_rules.xml```, although any name can be used (The filename becomes important in Step #7).

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<policy>
    <sources/>
    <propagators/>
    <tag-lists/>
    <rules/>
</policy>
```

<br>

#### Step 2: Add a New ```<source>``` to the Policy
This will provide a starting point signaling Contrast to monitor an object after this point. In this example, we will create a source tag ```ccn``` on the target ```P1``` of the method ```com.acme.ticketbook.Person.setCreditCard(java.lang.String)```. 

This means that the parameter of the method will be tagged and tracked for the duration of data flow analysis. 

Note that the method must be enabled for source creation to occur and the id field must be unique. The specified tag for a source should indicate the concern. In this case, we are concerned that the parameter returned from this method might contain a credit card. 

In this example, if multiple sources could return data with credit card numbers in them, we could create multiple sources, each with unique id and name fields, that all designate the same tags, in this case ```ccn```.

```xml
<sources>
    <method enabled="true" id="ccn1" name="CreditCardNumber1" signature="com.acme.ticketbook.Person.setCreditCard(java.lang.String)" tags="ccn" target="P1"/>
    <method... />
</sources> 
```

<br>

#### Step 3: Add a New ```<tag-list>``` to the Policy
Tags are an integral part of the policy language. In this rule, they provide a means of marking credit cards as safe for logging. One can use tags to determine if an object is used in an unsafe manner and needs to be reported, or if sufficient controls were exercised to mitigate the risk implied by the source tag. In this example, we will create a new tag ```ccn-masked``` to indicate that a credit card number has been sufficiently obscured by the methods in the list. In this case ```com.acme.ticketbook.Person.mask(java.lang.String)```. Again, it is worth noting that the method must be enabled for tagging to occur and both the id and name fields of the tag-list must be unique.

```xml
<tag-lists>
    <tag-list id="maskCCN" name="Masked CCN" tags="ccn-masked">
        <method enabled="true" signature="com.acme.ticketbook.Person.mask(java.lang.String)" target="R"/>
    </tag-list>
    <tag-list.../>
</tag-lists> 
```

<br>

#### Step 4: Add a New ```<rule>``` to the Policy
Now that we have data flow figured out, we need to provide a list of events that can trigger the decision making process as to whether or not a trace needs to be reported. The following is an example of an event that would trigger the credit-card-exposed rule. In the example, we will create a trigger event for ```org.apache.log4j.Category.debug(java.lang.Object)``` that will fire if the first parameter in the method has the tag ```ccn``` from the source in Step #2 and does not have the tag ```ccn-masked``` from the tag added in Step #3. It is again worth noting that the id of the rule must be unique and that enabled must be set to ```true``` in order for the rule to be active. Additionally, the id MUST match the string in the getId() method of the corresponding Groovy script on TeamServer (discussed later). 

```xml
<rules>
    <rule level="low" id="credit-card-exposed" enabled="true"> 
        <pattern>
            <event>
                <method inherit="true" signature="org.apache.log4j.Category.debug(java.lang.Object)"/>
                <params>
                    <param disallowed-tags="ccn-masked" index="1" required-tags="ccn"/>
                </params>
            </event>
        </pattern>
    </rule>
    <rule.../>
</rules>
```

<br>

#### Step 5: Create a New Groovy Script for the Rule
Create a Groovy script based on the [template file](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/dataflow_template.groovy) provided. Be sure to set the getId() method to return the id from the rule above, or the Agent and TeamServer will not be able to corridinate properly and no vulnerabilities will be recorded. 

As part of the script generation, you will be asked to create two Mustache Strings. The most common tags are shown in the template itself, but a list of additional templates can be found [here](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/CONTRAST-HTML-TO-MUSTACHE.pdf).

<br>

#### Step 6: Teach TeamServer About the New Rule
There are two steps to teaching the TeamServer about your new rule. 

First, you need to move the Groovy script from Step #5 to the directory ```$contrast.data.dir\data\rulepack```. Typically, the contrast.data.dir can be found at ```C:/Program Files/Contrast``` on Windows and ```opt/Contrast``` on Linux. If this is not the case, your administrator may have specified a custom directory for installation. Please contact them to determine the proper location to store this file.

Second, you need to update the configuration for TeamServer to know of the existence of this rule file. In the rulepack directory to which you just moved your groovy script, there should be ```contrast-rules.external.xml```. Open this file and add an entry to point to the Groovy script. 

Your ```script-source``` will be the same as the one shown below, with the exception of the file name and the ```id``` MUST be the id of your rule followed by the String "-rule".

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" ...>
    ...
    <lang:groovy
            id="credit-card-exposed-rule"
            refresh-check-delay="30000"
            script-source="classpath:com/aspectsecurity/contrast/teamserver/rulepack/cnn.groovy"/>                
</beans>
```

<br>

#### Step 7: Restart the TeamServer

<br>

#### Step 8: Configure and Restart the Application Server
 In order for the agent to use this custom policy, add the following flag to the run configuration where the ```-javaagent``` flag is set. 

```-Dcontrast.policy.overrides=/path/to/custom_rules.xml```
Note that you can also use HTTP URLs instead of file paths with the -Dcontrast.policy property.

Once the configuration is specified, restart your Application Server and test to verify your rule is funcitoning as expected.
