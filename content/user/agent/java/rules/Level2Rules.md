<!--
title: "How to Add a Level 2 Rule"
description: "How to add a Level 2 rule to the Java Agent and TeamServer"
tags: "java agent rules level 2"
-->

## When Should I Use A Level 2 Rule?

Most of the rules that come with Contrast are Level 2 rules. These are rules that are driven from the agent's policy file. Contrast can be overridden to use a custom policy file, allowing an organization to fully control all sensor instrumentation used by Contrast. With this capability, you can:
* Add new rules
* Alter the requirements for existing rules
* Disable or delete rules
* Control data propagation (not recommended)
* Add new sources of untrusted data

The advantages of using a Level 2 rule include:
* Complete control of Contrast
* Ability to fix bugs or enhance flaw-finding capabilities without a regularly scheduled software update

The challenges with using a Level 2 rule, as opposed to a Level 1 rule, include:
* Requires expertise in the Contrast policy XML language
* Mistakes made using Level 2 rules can hurt performance and hide true positives
* Requires a centralized management of a policy file outside of TeamServer

******

## Types Of Level 2 Rules
There are two types of Level 2 Rules: **Regular Expression** and **Data Flow**. 

**Regular Expression** rules use pattern matching to evaluate the input to a given trigger and report any time the pattern is violated, regardless of the source of the input.

Conversely, **Data Flow** rules, as their name implies, are used to track untrusted data throughout the application and report when said data gets to a trigger without being properly validated or sanitized. 

******

## Adding A Level 2 Rule
Adding a new Level 2 Rule consists of two main parts: creating a new custom Policy file for the Agent to follow and creating a corresponding Groovy script to teach TeamServer how to process and render these custom rule results. Our tutorial starts with the creation of the Policy file and ends with a template of the Groovy file.

******

### Adding A Level 2 Regular Expression Rule
This portion of the tutorial will walk through adding a new Regular Expression Rule that detects when an illegal value is passed into the Request object, thereby disabling its security. 

<br>

#### Step 1: Create A New Policy File
We provide a [skeleton](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/custom_rules.xml.zip) for the definition of the new code patterns you want Contrast to analyze. The file needs to be saved in a centralized location to which any Application Server you want monitored with this rule can reach. For the duration of this walkthrough, we will assume that you have named the file *custom_rules.xml*, although any file name can be used (The filename becomes important in Step #6 below).
<br>

#### Step 2: Add A New ```<rule>``` To The Policy
Regular Expression rules work by pattern matching one or more parameter values passed into a specified method. By supplying a pattern to the rule, you're telling Contrast to report any time the pattern *is* matched and should *not* have been (```bad-value-regex```) or is *not* matched and *should* have been (```good-value-regex```). 

A Regular Expression rule template is provided [here](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/rule_regex.xml.zip).

For this example, we will create a rule that detects when security is disabled on a custom request object. In the first event, the call to ```setSecure``` should **only** ever be made with the value ```true```. In the second event, the call to ```disableSecurity``` should **never** be made with the value ```true```.
 
<a href="assets/images/lvl_2_rule_regex_xml.png" rel="lightbox" title="Regex Rule XML"><img class="thumbnail" src="assets/images/lvl_2_rule_regex_xml.png"/></a>

The following attributes, highlighted in red above, should be customized for your rules. 
- ```level```: The severity of the rule - low, medium, or high
- ```id```: The unique identifier by which the rule will be referenced (note that this must be unique across all policies)
- ```signature```: The fully qualified method signature on which the Agent will match in order to determine rule violation
- ```good-value-regex```: The regular expression of acceptable (safe) values for this rule 
- ```bad-value-regex```: The regular expression of unacceptable (dangerous) values for this rule
- ```index```: The ordinal (1 based) of the parameter to which the regular expression applies

The following attributes, present above, should be in your rules. 
- ```enabled```: Indicates if the rule is active. It should always be true.
- ```inherit```: Indicates if the children of the class specified in the ```signature``` field also satisfy the rule. By default, this should be true.
- ```disallowed-tags```: For regular expression-based rules, this field should always be set to "". It is covered more in depth in the Dataflow rule section below. 
- ```required-tags```: For regular expression-based rules, this field should always be set to "". It is covered more in depth in the Dataflow rule section below. 
- ```tracked```: For regular expression-based rules, this field should always be set to false. The **Adding A Level 2 Data Flow Rule** section later in this article covers this in more detail. 
<br>

#### Step 3: Create A New Groovy Script For The Rule
Create a Groovy script based on one of the template files provided here: 
- [Basic template](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/regex_template.groovy) 
- [Template with comments](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/regex_template_comments.groovy)

Be sure to make the ```getId()``` method return the id value specified in your rule. For our example, this value must be ```https-disabled```. If these ID's do not match, the Agent and TeamServer will not be able to coordinate properly and no vulnerabilities will be recorded. 

Once you have the Groovy script written, you can import the [Maven project](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/contrast_rule_writer.zip) here to compile it before attempting to start TeamServer.

```xml
import org.springframework.stereotype.Component;

import com.contrastsecurity.interfaces.application.IApplication
import com.contrastsecurity.interfaces.babelfish.ISnippet
import com.contrastsecurity.interfaces.rule.TriggerSecurityRule
import com.contrastsecurity.interfaces.rule.SecurityRuleConstants
import com.contrastsecurity.interfaces.trace.ITrace

@Component
class SecureRule extends TriggerSecurityRule {
    String getId() { "https-disabled" }
    String getName() { "Https is explicitly disabled" }
    String getDescription() { "Verifies that HTTPS mode has not been disabled for the current request." }
    String getCategory() { SecurityRuleConstants.CATEGORY_SECURECOMMUNICATIONS }
    String getConfidence() { SecurityRuleConstants.LEVEL_HIGH }
    String getLikelihood() { SecurityRuleConstants.LEVEL_LOW }
    String getImpact() { SecurityRuleConstants.LEVEL_MEDIUM }
    String getCwe() { "http://cwe.mitre.org/data/definitions/614.html" }
    String getOwasp() { "http://www.owasp.org/index.php/SecureFlag" }
    String[] getReportReferences() { [] }
    String getEvidenceIntro(){ "...and disabled HTTPS of the Request here:" }
    int getParameterIndex(){ 1 }
    public String buildRisk(ITrace trace){
        '<p>Disabling HTTPS allows for insecure communication and can potentially grant attacks the ability to modify things they should not be able to.</p>'
    }
    public ISnippet buildRiskSnippet(ITrace trace){
        ISnippet snippet = ruleHelper.getNewSnippet();
        snippet.buildSnippet('{{#paragraph}}Disabling HTTPS allows for insecure communication and can potentially grant attacks the ability to modify' +
                                'things they should not be able to.{{/paragraph}}')
        snippet
    }
    public String getReportIntroduction(String lang) {
        'Disabling HTTPS allows for insecure communication and can potentially grant attacks the ability to modify things they should not be able to.'
    }
    public String buildRecommendation(ITrace trace, String language) {
        '<p>In order to prevent this, the security of the Request object should not be compromised. <br/>' +
        'Specifically, the <code>com.acme.ticketbook.Request.setSecure(boolean)</code> method should never be set to false and<br/>' + 
        'the <code>com.acme.ticketbook.Request.disableSecurity(boolean)</code> method should never be set to true. </p>'
    }
    public ISnippet buildRecommendationSnippet(ITrace trace){
        ISnippet snippet = ruleHelper.getNewSnippet()
        snippet.buildSnippet('{{#paragraph}}In order to prevent this, the security of the Request object should not be compromised. {{{nl}}}' +
            'Specifically, the {{#code}}com.acme.ticketbook.Request.setSecure(boolean){{/code}} method should never be set to false and {{{nl}}}' + 
            'the {{#code}}com.acme.ticketbook.Request.disableSecurity(boolean){{/code}} method should never be set to true. {{/paragraph}}')
        snippet
    }
    public String getReportRecommendation(IApplication app) {
        'In order to prevent this, the security of the Request object should not be compromised.' +
        'Specifically, the com.acme.ticketbook.Request.setSecure(boolean) method should never be set to false and' + 
        'the com.acme.ticketbook.Request.disableSecurity(boolean) method should never be set to true.'
    }
}
```

As part of the script generation, you will be asked to create two Mustache Strings. The most common tags are shown in the template itself, but a list of additional templates can be found [here](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/CONTRAST-HTML-TO-MUSTACHE.pdf).

<br>

#### Step 4: Teach TeamServer About The New Rule
There are two steps to teaching the TeamServer about your new rule:

First, on the TeamServer, you need to place the Groovy script built in Step #5 into the directory *$contrast.data.dir\data\rulepack*. Typically, the *contrast.data.dir* can be found at *C:/Program Files/Contrast* on Windows and *opt/Contrast* on Linux. If this is not the case, your administrator may have specified a custom directory for installation. Please contact them to determine where the TeamServer Contrast directory is located.

Next, you need to update the configuration for TeamServer to know about the existence of this rule file. In the rulepack directory you just put your Groovy script, there should be a *contrast-rules.external.xml* file. Open this file and add an entry to point to your new Groovy script. 

Your ```script-source``` will be the same as the one shown below, with the exception of the file name, and the 'id' MUST be the id of your rule followed by the String ```-rule```.

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

#### Step 5: Restart The TeamServer
An administrator is required to restart the TeamServer application. Detailed instructions for this process can be found [here](user_tsfaq.html#restart).

<br>

#### Step 6: Configure And Restart The Application Server
 In order for the agent to use this custom policy, add the ```-Dcontrast.policy.overrides``` flag to the run configuration where the ```-javaagent``` flag is set. You will need to set the overrides value to the path to the new policy file (e.g., *custom_rules.xml*).

> **Note:** You can also use HTTP URLs instead of file paths with the ```-Dcontrast.policy``` property

Once the configuration is specified, restart your Application Server and test to verify your rule is functioning as expected.

******

### Adding A Level 2 Data Flow Rule
This portion of the tutorial will walk through adding a new Data Flow Rule that detects when unmasked credit cards are leaked to log files, and allow 
us to create an API that marks credit card data as "masked", in order to prevent false positives. Data Flow starts at a ```source``` and moves through ```propagator``` methods and ```tag``` methods before ultimately reaching a rule ```event```. 

Out of the box, Contrast knows about most common ```source``` and ```propagator``` methods. That being said, it may be necessary to add a new ```source``` if a piece of your custom code is the beginning of a vulnerability you wish to report. 

Once the ```source``` is created, you will need to teach the Agent about methods in your code that sanitize or validate data and what that method does. To do this, you'll add a new ```tag-list```. The list will apply a tag to any data that travels through a method in the list. 

Finally, for a vulnerability to be reported, the tracked data has to violate a rule. The rule consists of a list of ```event``` entries, a method signature, and list of required or disallowed tags. 

The format of each is explained in greater detail below. 

<br>

#### Step 1: Create A New Policy File
We provide a [skeleton](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/custom_rules.xml) for the definition of the new code patterns you want Contrast to analyze. The file needs to be saved in a centralized location to which any Application Server you want monitored with this rule can reach. For the duration of this walkthrough, we will assume that you have named the file *custom_rules.xml*, although any file name can be used (The file name becomes important in Step #8 below).

> **Note:** A single policy file can either have many rules in it, or just one at a time. It's up to you how you want to organize your custom rules. So if you already have a policy file for a custom Regular Expression rule or an existing DataFlow rule, you can add new Data Flow rules to that policy file, rather than creating a new one.

<br>

#### Step 2: Add A New ```<source>``` To The Policy
This tells Contrast to tag and monitor objects coming out of this method. In this example, we create a source tag ```ccn``` on the target ```P1``` (Parameter #1) of the method ```com.acme.ticketbook.Person.setCreditCard(java.lang.String)```. 

This means that the first parameter of this method will be tagged and tracked after this method is called for the duration of the data flow analysis. 

Note that the method must be enabled for source creation to occur and the 'id' field must be unique. The specified tag for a source should indicate the concern. In this case, we are concerned that the parameter returned from this method might contain a credit card. 

In this example, if multiple sources could return data with credit card numbers in them, we could create multiple sources, each with unique 'id' and 'name' attributes, that all designate the same tags, in this case ```ccn```.

<a href="assets/images/lvl_2_rule_dataflow_source_xml.png" rel="lightbox" title="DataFlow Rule - Source - XML"><img class="thumbnail" src="assets/images/lvl_2_rule_dataflow_source_xml.png"/></a>

The following attributes, highlighted in red above, should be customized for your rules. 
- ```id```: The unique identifier by which the source will be referenced (note that this must be unique across all policies)
- ```name```: A human-readable name for this source
- ```signature```: The fully qualified method signature on which the Agent will match in order to determine source event
- ```tags```: A comma-separated list of values that the Agent will apply to the target of the source. Essentially, a marker associated with the object that tells what the method does.  
- ```target```: The object(O), return(R), or parameter(P) with ordinal (1 based) to which the tag should be applied

The following attributes, present above, should be in your rules. 
- ```enabled```: Indicates if the source is active. It should always be true.

<br>

#### Step 3: Add A New ```<tag-list>``` To The Policy
Tags are an integral part of the Contrast policy language. In this rule, they provide a means of marking credit cards as safe for logging. One can use tags to determine if an object is used in an unsafe manner and needs to be reported, or if sufficient controls were exercised to mitigate the risk implied by the source tag. In this example, we create a new tag ```ccn-masked``` to indicate that a credit card number has been sufficiently obscured by the methods in the list. In this case, the return value (target="R") of  ```com.acme.ticketbook.Person.mask(java.lang.String)```. Again, it is worth noting that the method must be enabled for tagging to occur and both the 'id' and 'name' fields of the tag-list must be unique.

<a href="assets/images/lvl_2_rule_dataflow_tag_xml.png" rel="lightbox" title="DataFlow Rule - TagList - XML"><img class="thumbnail" src="assets/images/lvl_2_rule_dataflow_tag_xml.png"/></a>


The following fields, highlighted in red above, should be customized for your rules. 
- ```id```: The unique identifier by which the tag list will be referenced (note that this must be unique across all policies)
- ```name```: A human-readable name for this tag list
- ```tags```: A comma-separated list of values that the Agent will apply to the target of the tag list. Essentially, a marker associated with the object that tells what the method does.  
- ```signature```: The fully qualified method signature on which the Agent will match in order to determine tag application
- ```target```: The object(O), return(R), or parameter(P) with ordinal (1 based) to which the tag should be applied

The following fields, present above, should be in your rules. 
- ```enabled```: Indicates if the tag list is active. It should always be true.

<br>

#### Step 4: Add A New ```<rule>``` To The Policy

Now that we have data flow figured out, we need to provide a list of events that can trigger the decision making process as to whether or not a trace needs to be reported. The following is an example of an event that would trigger the credit-card-exposed rule. In the example, we will create a trigger event for ```org.apache.log4j.Category.debug(java.lang.Object)``` that will fire if the first parameter in the method has the tag ```ccn``` from the source in Step #2 and does **not** have the tag ```ccn-masked``` from the tag added in Step #3. It is again worth noting that the 'id' of the rule must be unique and that 'enabled' must be set to ```true``` in order for the rule to be active. Additionally, the id MUST match the string in the ```getId()``` method of the corresponding Groovy script on TeamServer (discussed later). 


<a href="assets/images/lvl_2_rule_dataflow_rule_xml.png" rel="lightbox" title="DataFlow Rule - Rule - XML"><img class="thumbnail" src="assets/images/lvl_2_rule_dataflow_rule_xml.png"/></a>

The following fields, highlighted in red above, should be customized for your rules. 
- ```level```: The severity of the rule - low, medium, or high
- ```id```: The unique identifier by which the rule will be referenced (note that this must be unique across all policies)
- ```signature```: The fully qualified method signature on which the Agent will match in order to determine rule violation
- ```disallowed-tags```: A comma-separated list of tags whose presence indicates the rule is not violated. If the target parameter specified by the index has any of these tags, a vulnerability will not be reported. 
- ```index```: The ordinal (1 based) of the parameter to which the tag check applies
- ```required-tags```: A comma-separated list of tags whose presence indicates the rule is violated. If the target parameter specified by the index does not have any of these tags, a vulnerability will not be reported. 

The following fields, present above, should be in your rules. 
- ```enabled```: Indicates if the rule is active. It should always be true.
- ```inherit```: Indicates if the children of the class specified in the ```signature``` field also satisfy the rule. By default, this should be true.
- ```tracked```: The 'tracked' field is omitted in this section of the rule because the check is implicit at this point. 'Tracked' indicates that the Agent has taken action on an object and therefore is aware of its status. Having either a required or disallowed tag makes an object 'tracked'.

<br>

#### Step 5: Create A New Groovy Script For The Rule
Create a Groovy script based on one of the template files provided here: 
- [Basic template](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/dataflow_template.groovy) 
- [Template with comments](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/dataflow_template_comments.groovy)

Be sure to make the ```getId()``` method return the id value specified in your rule. For our example, this value must be ```credit-card-exposed```. If these ID's do not match, the Agent and TeamServer will not be able to coordinate properly and no vulnerabilities will be recorded. 

Once you have the Groovy script written, you can import the [Maven project](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/contrast_rule_writer.zip) here to compile it before attempting to start TeamServer.

```xml
import org.springframework.stereotype.Component;

import com.contrastsecurity.interfaces.application.IApplication
import com.contrastsecurity.interfaces.babelfish.ISnippet
import com.contrastsecurity.interfaces.rule.DataFlowSecurityRule
import com.contrastsecurity.interfaces.rule.SecurityRuleConstants
import com.contrastsecurity.interfaces.trace.ITrace


@Component
class CNNRule extends DataFlowSecurityRule {
    String getId() { "credit-card-exposed" }
    String getName() { "Credit card number exposed" }
    String getDescription() { "Verifies that no credit card numbers are exposed in the logs." }
    String getCategory() { SecurityRuleConstants.CATEGORY_CONFIGURATION }
    String getConfidence() { SecurityRuleConstants.LEVEL_HIGH }
    String getLikelihood() { SecurityRuleConstants.LEVEL_LOW }
    String getImpact() { SecurityRuleConstants.LEVEL_MEDIUM }
    String getCwe() { "https://cwe.mitre.org/data/definitions/532.html" }
    String getOwasp() { "https://www.owasp.org/index.php/Handling_E-Commerce_Payments#Displaying_portions_of_the_credit_card" }
    String[] getReportReferences() { [] }
    String getEvidenceIntro(){ "...and ended up in this log statement:" }
    int getParameterIndex(){ 1 }
    public String buildRisk(ITrace trace){
        '<p>The log statement here is placing a plain text credit card number into our log files. This violates several information privacy guidelines and poses a risk for the exposure of customer data.</p>'
    }
    public ISnippet buildRiskSnippet(ITrace trace){
        ISnippet snippet = ruleHelper.getNewSnippet()
        snippet.buildSnippet('{{#paragraph}}The log statement here is placing a plain text credit card number into our log files. This violates several information privacy guidelines and poses a risk for the exposure of customer data. {{/paragraph}}')
        snippet
    }
    public String getReportIntroduction(String lang) {
        'The log statement here is placing a plain text credit card number into our log files. This violates several information privacy guidelines and poses a risk for the exposure of customer data.'
    }
    public String buildRecommendation(ITrace trace, String language) {
        '<p>In order to prevent this, the credit card number should be obfuscated prior to entering the log statement. <br/>' +
        'Specifically, the <code>com.acme.ticketbook.Person.mask(java.lang.String)</code> method needs to be invoked. For instance, <br/>' + 
        '<pre class="brush: java">// LogCCN.java <br/>' +
        'String MY_CREDIT_CARD = "1234-1234-1234-1234"; <br/>' +
        'Person.setCreditCard(MY_CREDIT_CARD);<br/>' +
        'String maskedCardNumber = Person.mask(MY_CREDIT_CARD);<br/>' +
        'Log.debug("Hid the credit ard number" + maskedCardNumber);<br/>' +
        '</pre><br/>' +
        'would prevent the rule from firing as, by our policy definition, this code path is not vulnerable.</p>';
    }
    public ISnippet buildRecommendationSnippet(ITrace trace){
        ISnippet snippet = ruleHelper.getNewSnippet();
        snippet.buildSnippet('{{#paragraph}}In order to prevent this, the credit card number should be obfuscated prior to entering the log statement. {{{nl}}}' +
        'Specifically, the {{#code}}com.acme.ticketbook.Person.mask(java.lang.String){{/code}} method needs to be invoked. For instance,' + 
        '{{#javaBlock}}// LogCCN.java {{{nl}}}' +
        'String MY_CREDIT_CARD = "1234-1234-1234-1234"; {{{nl}}}' +
        'Person.setCreditCard(MY_CREDIT_CARD);{{{nl}}}' +
        'String maskedCardNumber = Person.mask(MY_CREDIT_CARD);{{{nl}}}' +
        'Log.debug("Hid the credit ard number" + maskedCardNumber);{{{nl}}}' +
        '{{/javaBlock}}{{{nl}}}' +
        'would prevent the rule from firing as, by our policy definition, this code path is not vulnerable.{{/paragraph}}')
        snippet
    }
    public String getReportRecommendation(IApplication app) {
        'In order to prevent this, the credit card number should be obfuscated prior to entering the log statement. Specifically, you need to call '+
        'com.acme.ticketbook.Person.mask(java.lang.String) and log the result of that call rather than directly logging com.acme.ticketbook.Person.getCreditCard().'
    }
}
```

As part of the script generation, you will be asked to create two Mustache Strings. The most common tags are shown in the template itself, but a list of additional templates can be found [here](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/CONTRAST-HTML-TO-MUSTACHE.pdf).

<br>

#### Step 6: Teach TeamServer About The New Rule
There are two steps to teaching the TeamServer about your new rule. 

First, you need to copy the Groovy script created in Step #5 to the directory *$contrast.data.dir\data\rulepack*. Typically, the *contrast.data.dir* can be found at *C:/Program Files/Contrast* on Windows and *opt/Contrast* on Linux. If this is not the case, your administrator may have specified a custom directory for installation of TeamServer. Please contact them to determine where the TeamServer Contrast directory is located.

Next, you need to update the configuration of TeamServer to know about the existence of this rule file. In the rulepack directory to which you just copied your Groovy script, there should be a *contrast-rules.external.xml* file. Open this file and add an entry to point to your new Groovy script. 

Your ```script-source``` will be the same as the one shown below, with the exception of the file name and the 'id' MUST be the id of your rule followed by the String ```-rule```.

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

#### Step 7: Restart The TeamServer
An administrator is required to restart the TeamServer application. Detailed instructions for this process can be found [here](user_tsfaq.html#restart).

<br>

#### Step 8: Configure And Restart The Application Server
 In order for the agent to use this custom policy, add the ```-Dcontrast.policy.overrides``` flag to the run configuration where the ```-javaagent``` flag is set. You will need to set the overrides value to the path to the new policy file (e.g., *custom_rules.xml*).

> **Note:** You can also use HTTP URLs instead of file paths with the ```-Dcontrast.policy``` property.

Once the configuration is specified, restart your Application Server and test to verify your rule is functioning as expected.

