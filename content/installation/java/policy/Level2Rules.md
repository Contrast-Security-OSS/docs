<!--
title: "Level 2 Rules"
description: "How to add a Level 2 rule to the Java Agent and TeamServer"
tags: "java agent installation policy rules level 2"
-->

## About Level 2 Rules

Most of the rules included with Contrast are Level 2 rules, which are driven from the agent's policy file. Contrast can be overridden to use a custom policy file, allowing an organization to fully control all sensor instrumentation used by Contrast. With this capability, you can:

* Add new rules.
* Alter the requirements for existing rules.
* Disable or delete rules.
* Control data propagation (not recommended).
* Add new sources of untrusted data.

The advantages of using a Level 2 rule include:

* Maintain full control of Contrast.
* Fix bugs or enhance flaw-finding capabilities without a regularly scheduled software update.

The challenges with using a Level 2 rule, instead of a Level 1 rule, include:

* Requires expertise in the Contrast policy XML language.
* Mistakes made using Level 2 rules can hurt performance and hide true positives.
* Requires a centralized management of a policy file outside of the Contast interface.

### Types of Level 2 Rules

There are two types of Level 2 Rules: **Regular Expression** and **Data Flow**. 

**Regular Expression** rules use pattern matching to evaluate the input to a given trigger and report if the pattern is violated, regardless of the input source. **Data Flow** rules, as their name implies, are used to track untrusted data throughout the application and report when that data gets to a trigger without being properly validated or sanitized. 

## Add a Rule

Adding a new Level 2 Rule consists of two main tasks: creating a new custom policy file for the agent to follow, and creating a corresponding Groovy script to teach Contrast how to process and render the custom rule results. The following instructions start with the creation of the policy file and end with a template of the Groovy file.

### Add a regular expression rule
This portion of the instructions walk you through adding a new regular expression rule that detects when an illegal value is passed into the Request object, thereby disabling its security. 

#### Step 1: Create a new policy file 

Contrast provides a [skeleton](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/custom_rules.xml.zip) for the definition of the new code patterns you want Contrast to analyze. The file needs to be saved in a centralized location that can be reached by any application server monitored with this rule. 

>**Note:** Each step of these instructions is written in the context that you named the file *custom_rules.xml*; however, you can use any file name. (The file name is an important part of Step 6.)

#### Step 2: Add a new `<rule>` to the policy

Regular expression rules work by pattern matching one or more parameter values passed into a specified method. By supplying a pattern to the rule, you tell Contrast to report any time the pattern **is** matched and should **not** have been (`bad-value-regex`), or is *not* matched and **should** have been (`good-value-regex`). Find a regular expression rule template [here](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/rule_regex.xml.zip).

For this example, you're creating a rule that detects when security is disabled on a custom request object. In the first event, the call to `setSecure` should *only* be made with the value `true`. In the second event, the call to `disableSecurity` should *never* be made with the value `true`.
 
<a href="assets/images/lvl_2_rule_regex_xml.png" rel="lightbox" title="Regex Rule XML"><img class="thumbnail" src="assets/images/lvl_2_rule_regex_xml.png"/></a>

The following attributes, highlighted red in the image above, should be customized for your rules. 

- ```level```: The severity of the rule - low, medium or high.
- ```id```: The unique identifier by which the rule is referenced. (This must be unique across all policies.)
- ```signature```: The fully qualified method signature on which the agent is matched in order to determine rule violation.
- ```good-value-regex```: The regular expression of acceptable (safe) values for this rule. 
- ```bad-value-regex```: The regular expression of unacceptable (dangerous) values for this rule.
- ```index```: The ordinal (1 based) of the parameter to which the regular expression applies.

The following attributes, included in the image above, should be in your rules. You can also find more details in the section below to **Add a Level 2 Data Flow Rule**.


- ```enabled```: indicates if the rule is active. It should always be true.
- ```inherit```: indicates if the children of the class specified in the `signature` field also satisfy the rule. By default, this should be true.
- ```disallowed-tags```: For regular expression-based rules, this field should always be set to "".  
- ```required-tags```: For regular expression-based rules, this field should always be set to "".
- ```tracked```: For regular expression-based rules, this field should always be set to false.


#### Step 3: Create a new Groovy script 

Create a Groovy script based on one of the template files provided here: 

* [Basic template](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/regex_template.groovy) 
* [Template with comments](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/regex_template_comments.groovy)

The `getId()` method must return the `id` value specified in your rule. (In these intructions, this value must be `https-disabled`.) If these IDs don't match, the agent and Contrast interface can't coordinate properly and no vulnerabilities will be recorded. 

Once you have the Groovy script written, you can import the [Maven project](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/contrast_rule_writer.zip) to compile it before attempting to start Contrast.

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

As part of the script generation, you must create two mustache strings. The most common tags are shown in the template itself, but you can find a list of additional templates [here](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/CONTRAST-HTML-TO-MUSTACHE.pdf).

#### Step 4: Teach Contrast about the rule

There are two steps to teach Contrast about your new rule.

In the Contrast interface, place the Groovy script (built in Step #3) into the directory *$contrast.data.dir\data\data\rulepack*. You can usually find the *contrast.data.dir* at *C:/Program Files/Contrast* on Windows and *opt/Contrast* on Linux. If not, your administrator may have specified a custom directory for installation. Contact them to determine where the Contrast directory is located.

Next, update the Contrast configuration so it knows about the existence of this rule file. In the rulepack directory (where you just put your Groovy script), there is a *contrast-rules.external.xml* file. Open this file and add an entry to point to your new Groovy script. 

Your `script-source` is the same as the one shown below with the exception of the file name. The `id` must be the ID of your rule followed by the string `-rule`.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" ...>
    ...
    <lang:groovy
            id="https-disabled-rule"
            refresh-check-delay="30000"
            script-source="classpath:rulepack/secure.groovy"/>                
</beans>
```


#### Step 5: Restart Contrast

An administrator is required to restart the Contrast application. Find detailed instructions for this process in the article to [Restart Contrast](installation-setupinstall.html#restart).


#### Step 6: Configure and restart the application server

Add the `-Dcontrast.policy.overrides` flag to the run configuration where the `-javaagent` flag is set so that the agent uses this custom policy. You must set the overrides value to the path to the new policy file (e.g., *custom_rules.xml*).

> **Note:** You can also use HTTP URLs instead of file paths with the `-Dcontrast.policy` property.

Once you specify the configuration, restart your application server, and test to verify that your rule is functioning as expected.

### Add a Level 2 Data Flow Rule

This portion of the instructions walks you through adding a new data flow rule that detects when unmasked credit cards are leaked to log files, and allows us to create an API that marks credit card data as "masked" in order to prevent false positives. Data flow starts at a `source`, and moves through `propagator` methods and `tag` methods before ultimately reaching a rule `event`. 

Contrast knows about most common `source` and `propagator` methods by default. However, you may need to add a new `source` if a piece of your custom code is the beginning of a vulnerability that you want to report. 

Once you create the `source`, teach the agent about methods in your code that sanitize or validate data and what that method does by adding a new `tag-list`. The list applies a tag to any data that travels through a method in the list. 

The tracked data must violate a rule to trigger Contrast to report a vulnerability. The rule consists of a list of `event` entries, a method signature and a list of required or disallowed tags. The format of each component is explained in greater detail below. 

#### Step 1: Create a new policy file

Contrast provides a [skeleton](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/custom_rules.xml) for the definition of the new code patterns that you want Contrast to analyze. You must save the file in a centralized location that can be reached by any application server that you want to be monitored with this rule. 

>**Note:** Each step of the instructions is written in the context that younamed the file *custom_rules.xml*; however, you can use any file name. (The file name is an important part of Step #8.)

You must decide how to organize your custom rules. A single policy file can contain many rules or just one at a time. If you already have a policy file for a custom regular expression rule or an existing data flow rule, you can add new data flow rules to that policy file.

#### Step 2: Add a new `<source>` to the policy

Add a new `<source>` to the policy to tell Contrast to tag and monitor objects coming out of this method. In this example, you're creating a source tag `ccn` on the target `P1` (Parameter #1) of the method `com.acme.ticketbook.Person.setCreditCard(java.lang.String)`. This means that the first parameter of this method will be tagged and tracked after this method is called for the duration of the data flow analysis. 

>**Note:** This method must be enabled for source creation to occur and the `id` field must be unique. The specified tag for a source should indicate the concern. 

For these instructions, you're concerned that the parameter returned from this method might contain a credit card. If multiple sources can return data with credit card numbers in them, you can create multiple sources with unique `id` and `name` attributes that all designate the same tags - in this case, `ccn`.

<a href="assets/images/lvl_2_rule_dataflow_source_xml.png" rel="lightbox" title="DataFlow Rule - Source - XML"><img class="thumbnail" src="assets/images/lvl_2_rule_dataflow_source_xml.png"/></a>

The following attributes, highlighted red in the image above, should be customized for your rules.

* ```id```: The unique identifier by which the source is referenced. (This must be unique across all policies.)
* ```name```: A human-readable name for this source.
* ```signature```: The fully qualified method signature on which the agent matches to determine source event.
* ```tags```: A comma-separated list of values that the agent applies to the target of the source. (A marker associated with the object that tells what the method does.)  
* ```target```: The object (O), return (R) or parameter (P) with ordinal (1 based) to which the tag should be applied.

The following attribute, also included in the image above, should be in your rules.

* ```enabled```: indicates if the source is active. It should always be true.


#### Step 3: Add a new `<tag-list>` to the policy

Tags are an integral part of the Contrast policy language. In this rule, they provide a way to mark credit cards as safe for logging. You can use tags to determine if an object is used in an unsafe manner and needs to be reported, or if sufficient controls were exercised to mitigate the risk implied by the source tag. 

In these instructions, you're creating a new tag `ccn-masked` to indicate that a credit card number is sufficiently obscured by the methods in the list: the return value (target="R") of  `com.acme.ticketbook.Person.mask(java.lang.String)`. Again, note that the method must be enabled for tagging to occur, and both the `id` and `name` fields of the tag list must be unique.

<a href="assets/images/lvl_2_rule_dataflow_tag_xml.png" rel="lightbox" title="DataFlow Rule - TagList - XML"><img class="thumbnail" src="assets/images/lvl_2_rule_dataflow_tag_xml.png"/></a>


The following fields, highlighted red in the image above, should be customized for your rules.

* ```id```: The unique identifier by which the tag list is referenced. (This must be unique across all policies.)
* ```name```: A human-readable name for this tag list.
* ```tags```: A comma-separated list of values that the agent applies to the target of the tag list. (A marker associated with the object that tells what the method does.)
* ```signature```: The fully qualified method signature on which the agent matches in order to determine tag application.
* ```target```: The object (O), return (R) or parameter(P) with ordinal (1 based) to which the tag should be applied.

The following field, also shown in the image above, should be in your rules.

* ```enabled```: indicates if the tag list is active. It should always be `true`.

#### Step 4: Add a new `<rule>` to the policy

Now that you have data flow figured out, you must provide a list of events that can trigger the process to decide if a trace should be reported. The following example is an event that would trigger the credit-card-exposed rule: 

> You're creating a trigger event for `org.apache.log4j.Category.debug(java.lang.Object)` that fires if the first parameter in the method has the tag `ccn` from the source in Step #2 and does **not** have the tag `ccn-masked` from the tag added in Step #3. 

Again, note that the `id` of the rule must be unique, and `enabled` must be set to `true` in order for the rule to be active. Also, the `id` must match the string in the `getId()` method of the corresponding Groovy script in Contrast (which is discussed later in this article). 

<a href="assets/images/lvl_2_rule_dataflow_rule_xml.png" rel="lightbox" title="DataFlow Rule - Rule - XML"><img class="thumbnail" src="assets/images/lvl_2_rule_dataflow_rule_xml.png"/></a>

The following fields, highlighted red in the image above, should be customized for your rules.

* ```level```: The severity of the rule - low, medium or high.
* ```id```: The unique identifier by which the rule is referenced. (This must be unique across all policies.)
* ```signature```: The fully qualified method signature on which the agent matches in order to determine rule violation.
* ```disallowed-tags```: A comma-separated list of tags which indicates that the rule isn't violated. If the target parameter specified by the index has any of these tags, a vulnerability will not be reported. 
* ```index```: The ordinal (1 based) of the parameter to which the tag check applies.
* ```required-tags```: A comma-separated list of tags which indicates that the rule is violated. If the target parameter specified by the index doesn't have any of these tags, a vulnerability will not be reported. 

The following fields, show in the image above, should be in your rules. 
* ```enabled```: indicates if the rule is active. It should always be `true`.
* ```inherit```: indicates if the children of the class specified in the `signature` field also satisfy the rule. By default, this should be true.
* ```tracked```: The field is omitted in this section of the rule because the check is implicit at this point. It indicates that the agent took action on an object and is aware of its status. Either a required or disallowed tag makes an object `tracked`.

#### Step 5: Create a new Groovy script 

Create a Groovy script based on one of the template files provided here: 

* [Basic template](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/dataflow_template.groovy) 
* [Template with comments](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/dataflow_template_comments.groovy)

Be sure to make the `getId()` method return the `id` value specified in your rule. In these instructions, the value must be `credit-card-exposed`. If these IDs don't match, the agent won't be able to coordinate properly with Contrast and no vulnerabilities will be recorded. 

Once you have the Groovy script written, import the [Maven project](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/contrast_rule_writer.zip) to compile it before attempting to start Contrast.

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

As part of the script generation, you must create two mustache strings. The most common tags are shown in the template itself, but you can find a list of additional templates [here](https://docs.contrastsecurity.com/assets/attachments/level_2_rules/CONTRAST-HTML-TO-MUSTACHE.pdf).

#### Step 6: Teach Contrast about the rule 

There are two steps to teaching the Contrast about your new rule. 

Begin by copying the Groovy script (created in Step #5) to the directory *$contrast.data.dir\data\rulepack*. You can usually find the *contrast.data.dir* at *C:/Program Files/Contrast* on Windows and *opt/Contrast* on Linux. If not, your administrator may have specified a custom directory for the installation of Contrast. Contact them to determine where the Contrast directory is located.

Next, update the Contrast configuration so that it knows about the existence of this rule file. In the rulepack directory to which you just copied your Groovy script, there is a *contrast-rules.external.xml* file. Open this file and add an entry to point to your new Groovy script. 

Your `script-source` is the same as the one shown below; however, the file name and the `id` must be the ID of your rule followed by the string `-rule`.

```
xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" ...>
    ...
    <lang:groovy
            id="credit-card-exposed-rule"
            refresh-check-delay="30000"
            script-source="classpath:rulepack/cnn.groovy"/>                
</beans>
```

#### Step 7: Restart Contrast 

An administrator is required to restart the Contrast application. Find detailed instructions for this process in the [Restart Contrast](installation-setupinstall.html#restart) article.


#### Step 8: Configure and restart the application server

Enable the agent to use this custom policy by adding the `-Dcontrast.policy.overrides` flag to the run configuration where the `-javaagent` flag is set. You must set the overrides value to the path to the new policy file (e.g., *custom_rules.xml*).

> **Note:** You can also use HTTP URLs instead of file paths with the `-Dcontrast.policy` property.

Once you specify the configuration, restart your application server, and test to verify that your rule is functioning as expected.

