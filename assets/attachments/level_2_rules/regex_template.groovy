import org.springframework.stereotype.Component;

import com.contrastsecurity.interfaces.application.IApplication
import com.contrastsecurity.interfaces.babelfish.ISnippet
import com.contrastsecurity.interfaces.rule.TriggerSecurityRule
import com.contrastsecurity.interfaces.rule.SecurityRuleConstants
import com.contrastsecurity.interfaces.trace.ITrace

@Component
class SecureRule extends TriggerSecurityRule {

    /**
     * The id of the rule - MUST match the id specified in the policy file
     */
    String getId() { "https-disabled" }

    /**
     * A human readable name for the rule
     */
    String getName() { "Https is explicitly disabled" }
    
    /**
     * A human readable description of the rule. What is it that the rule detects.
     */
    String getDescription() { "Verifies that HTTPS mode has not been disabled for the current request." }

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
    String getCategory() { SecurityRuleConstants.CATEGORY_SECURECOMMUNICATIONS }

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
    String getCwe() { "http://cwe.mitre.org/data/definitions/614.html" }
    
    /**
     * A link to the relevant OWASP article that provides more information about this vulnerability and why it is important to catch.
     */
    String getOwasp() { "http://www.owasp.org/index.php/SecureFlag" }

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
        "...and disabled HTTPS of the Request here:"
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
        '<p>Disabling HTTPS allows for insecure communication and can potentially grant attacks the ability to modify things they should not be able to.</p>'
    }
    
    /**
     * The risk of the vulnerability, in mustache, to be rendered on the Summary page.
     */
    public ISnippet buildRiskSnippet(ITrace trace){
        '{{#paragraph}}Disabling HTTPS allows for insecure communication and can potentially grant attacks the ability to modify things they should not be able to.{{/paragraph}}';
    }
    
    /**
     * The risk of the vulnerability, in plain text, to be rendered in a PDF report.
     */
    public String getReportIntroduction(String lang) {
        'Disabling HTTPS allows for insecure communication and can potentially grant attacks the ability to modify things they should not be able to.'
    }

    /**
     * The recommendation on how to fix the vulnerability, in HTML, to be rendered in an export of the vulnerability.
     */
    public String buildRecommendation(ITrace trace, String language) {
        '<p>In order to prevent this, the security of the Request object should not be compromised. <br/>' +
        'Specifically, the <code>com.acme.ticketbook.Request.setSecure(boolean)</code> method should never be set to false and<br/>' + 
        'the <code>com.acme.ticketbook.Request.disableSecurity(boolean)</code> method should never be set to true. </p>';
    }
    
    /**
     * The recommendation on how to fix the vulnerability, in mustache, to be rendered on the How to Fix page.
     */
    public ISnippet buildRecommendationSnippet(ITrace trace){
        '{{#paragraph}}In order to prevent this, the security of the Request object should not be compromised. {{{nl}}}' +
        'Specifically, the {{#code}}com.acme.ticketbook.Request.setSecure(boolean){{/code}} method should never be set to false and {{{nl}}}' + 
        'the {{#code}}com.acme.ticketbook.Request.disableSecurity(boolean){{/code}} method should never be set to true. {{/paragraph}}';
    }

    /**
     * The recommendation on how to fix the vulnerability, in plain text, to be rendered in a PDF report.
     */
    public String getReportRecommendation(IApplication app) {
        'In order to prevent this, the security of the Request object should not be compromised.' +
        'Specifically, the com.acme.ticketbook.Request.setSecure(boolean) method should never be set to false and' + 
        'the com.acme.ticketbook.Request.disableSecurity(boolean) method should never be set to true.';
    }
}