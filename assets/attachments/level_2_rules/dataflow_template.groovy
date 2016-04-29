import org.springframework.stereotype.Component;

import com.contrastsecurity.interfaces.application.IApplication
import com.contrastsecurity.interfaces.babelfish.ISnippet
import com.contrastsecurity.interfaces.rule.DataFlowSecurityRule
import com.contrastsecurity.interfaces.rule.SecurityRuleConstants
import com.contrastsecurity.interfaces.trace.ITrace


@Component
class CNNRule extends DataFlowSecurityRule {

    /**
     * The id of the rule - MUST match the id specified in the policy file
     */
    String getId() { "credit-card-exposed" }

    /**
     * A human readable name for the rule
     */
    String getName() { "Credit card number exposed" }
    
    /**
     * A human readable description of the rule. What is it that the rule detects.
     */
    String getDescription() { "Verifies that no credit card numbers are exposed in the logs." }

    /**
     * There are a few options for this value, depending on the purpose of this rule. 
     * Please choose one of the following. 
     * 
     * SecurityRuleConstants.CATEGORY_ACCESSCONTROL
     * SecurityRuleConstants.CATEGORY_AUTHENTICATION
     * SecurityRuleConstants.CATEGORY_AVAILABILITY
     * SecurityRuleConstants.CATEGORY_CACHING 
     * SecurityRuleConstants.CATEGORY_CONFIGURATION
     * SecurityRuleConstants.CATEGORY_CRYPTOGRAPHY
     * SecurityRuleConstants.CATEGORY_CVE
     * SecurityRuleConstants.CATEGORY_ERRORHANDLING
     * SecurityRuleConstants.CATEGORY_INJECTION
     * SecurityRuleConstants.CATEGORY_INPUTVALIDATION
     * SecurityRuleConstants.CATEGORY_SECURECOMMUNICATIONS
     * SecurityRuleConstants.CATEGORY_SESSIONMANAGEMENT
     * SecurityRuleConstants.CATEGORY_XSS
     */
    String getCategory() { SecurityRuleConstants.CATEGORY_CONFIGURATION }

    /**
     * How confident are you that the rule violation occurred? - IE that this is a real vulnerablility.
     * Please choose one of the following.
     * 
     * SecurityRuleConstants.LEVEL_LOW
     * SecurityRuleConstants.LEVEL_MEDIUM
     * SecurityRuleConstants.LEVEL_HIGH
     */
    String getConfidence() { SecurityRuleConstants.LEVEL_HIGH }
    
    /**
     * How likely is this vulnerability to be exploited? - IE that this is easliy expolitable
     * Please choose one of the following.
     *
     * SecurityRuleConstants.LEVEL_LOW
     * SecurityRuleConstants.LEVEL_MEDIUM
     * SecurityRuleConstants.LEVEL_HIGH
     */
    String getLikelihood() { SecurityRuleConstants.LEVEL_LOW }
    
    /**
     * How impactful is this vulnerability? - IE how badly will its exploitation hurt the application or the organization
     * Please choose one of the following.
     *
     * SecurityRuleConstants.LEVEL_LOW
     * SecurityRuleConstants.LEVEL_MEDIUM
     * SecurityRuleConstants.LEVEL_HIGH
     */
    String getImpact() { SecurityRuleConstants.LEVEL_MEDIUM }

    /**
     * A link to the relevant CWE that provides more information about this vulnerability and why it is important to catch.
     */
    String getCwe() { "https://cwe.mitre.org/data/definitions/532.html" }
    
    /**
     * A link to the relevant OWASP article that provides more information about this vulnerability and why it is important to catch.
     */
    String getOwasp() { "https://www.owasp.org/index.php/Handling_E-Commerce_Payments#Displaying_portions_of_the_credit_card" }

    /**
     * An optional list of other external references that enhance the definition of the rule. 
     * If you specify more than one, make the list comma separated
     * 
     * ['http://somesource1.com','http://somesource2.com']
     */
    String[] getReportReferences() { [] }

    /**
     * An introduction used in the Summary tab of the rule. It will be rendered as the final statement in one the page. 
     * Tells the story of where the data ended. 
     * 
     */
    String getEvidenceIntro(){
        "...and ended up in this log statement:"
    }

    /**
     * The index of the tainted parameter. If there are multiple triggers for your rule and they have different indicies, 
     * simply specify '-1' to let the TeamServer smart decide which parameter to mark up.  
     */
    int getParameterIndex(){
        1
    }
    
    
    /** 
     * The risk of the vulnerability, in HTML, to be rendered in an export of the vulnerability.
     */
    public String buildRisk(ITrace trace){
        '<p>The log statement here is placing a plain text credit card number into our log files. This violates several information privacy guidelines and poses a risk for the exposure of customer data.</p>'
    }
    
    /**
     * The risk of the vulnerability, in mustache, to be rendered on the Summary page.
     */
    public ISnippet buildRiskSnippet(ITrace trace){
        '{{#paragraph}}The log statement here is placing a plain text credit card number into our log files. This violates several information privacy guidelines and poses a risk for the exposure of customer data. {{/paragraph}}';
    }
    
    /**
     * The risk of the vulnerability, in plain text, to be rendered in a PDF report.
     */
    public String getReportIntroduction(String lang) {
        'The log statement here is placing a plain text credit card number into our log files. This violates several information privacy guidelines and poses a risk for the exposure of customer data.'
    }

    /**
     * The recommendation on how to fix the vulnerability, in HTML, to be rendered in an export of the vulnerability.
     */
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
    
    /**
     * The recommendation on how to fix the vulnerability, in mustache, to be rendered on the How to Fix page.
     */
    public ISnippet buildRecommendationSnippet(ITrace trace){
        '{{#paragraph}}In order to prevent this, the credit card number should be obfuscated prior to entering the log statement. {{{nl}}}' +
        'Specifically, the {{#code}}com.acme.ticketbook.Person.mask(java.lang.String){{/code}} method needs to be invoked. For instance,' + 
        '{{#javaBlock}}// LogCCN.java {{{nl}}}' +
        'String MY_CREDIT_CARD = "1234-1234-1234-1234"; {{{nl}}}' +
        'Person.setCreditCard(MY_CREDIT_CARD);{{{nl}}}' +
        'String maskedCardNumber = Person.mask(MY_CREDIT_CARD);{{{nl}}}' +
        'Log.debug("Hid the credit ard number" + maskedCardNumber);{{{nl}}}' +
        '{{/javaBlock}}{{{nl}}}' +
        'would prevent the rule from firing as, by our policy definition, this code path is not vulnerable.{{/paragraph}}';
    }

    /**
     * The recommendation on how to fix the vulnerability, in plain text, to be rendered in a PDF report.
     */
    public String getReportRecommendation(IApplication app) {
        'In order to prevent this, the credit card number should be obfuscated prior to entering the log statement. Specifically, you need to call '+
        'com.acme.ticketbook.Person.mask(java.lang.String) and log the result of that call rather than directly logging com.acme.ticketbook.Person.getCreditCard().'
    }
}