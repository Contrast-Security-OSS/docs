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
    String getId() { "" }

    /**
     * A human readable name for the rule
     */
    String getName() { "" }
    
    /**
     * A human readable description of the rule. What is it that the rule detects.
     */
    String getDescription() { "" }

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
    String getCategory() { }

    /**
     * How confident are you that the rule violation occurred? - IE that this is a real vulnerablility.
     * Please choose one of the following.
     * 
     * SecurityRuleConstants.LEVEL_LOW
     * SecurityRuleConstants.LEVEL_MEDIUM
     * SecurityRuleConstants.LEVEL_HIGH
     */
    String getConfidence() { }
    
    /**
     * How likely is this vulnerability to be exploited? - IE that this is easliy expolitable
     * Please choose one of the following.
     *
     * SecurityRuleConstants.LEVEL_LOW
     * SecurityRuleConstants.LEVEL_MEDIUM
     * SecurityRuleConstants.LEVEL_HIGH
     */
    String getLikelihood() { }
    
    /**
     * How impactful is this vulnerability? - IE how badly will its exploitation hurt the application or the organization
     * Please choose one of the following.
     *
     * SecurityRuleConstants.LEVEL_LOW
     * SecurityRuleConstants.LEVEL_MEDIUM
     * SecurityRuleConstants.LEVEL_HIGH
     */
    String getImpact() { }

    /**
     * A link to the relevant CWE that provides more information about this vulnerability and why it is important to catch.
     */
    String getCwe() { }
    
    /**
     * A link to the relevant OWASP article that provides more information about this vulnerability and why it is important to catch.
     */
    String getOwasp() { }

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
    String getEvidenceIntro(){ }

    /**
     * The index of the tainted parameter. If there are multiple triggers for your rule and they have different indicies, 
     * simply specify '-1' to let the TeamServer smart decide which parameter to mark up.  
     */
    int getParameterIndex(){ }
    
    
    /** 
     * The risk of the vulnerability, in HTML, to be rendered in an export of the vulnerability.
     */
    public String buildRisk(ITrace trace){ }
    
    /**
     * The risk of the vulnerability, in mustache, to be rendered on the Summary page.
     */
    public ISnippet buildRiskSnippet(ITrace trace){ }
    
    /**
     * The risk of the vulnerability, in plain text, to be rendered in a PDF report.
     */
    public String getReportIntroduction(String lang) { }

    /**
     * The recommendation on how to fix the vulnerability, in HTML, to be rendered in an export of the vulnerability.
     */
    public String buildRecommendation(ITrace trace, String language) { }
    
    /**
     * The recommendation on how to fix the vulnerability, in mustache, to be rendered on the How to Fix page.
     */
    public ISnippet buildRecommendationSnippet(ITrace trace){ }

    /**
     * The recommendation on how to fix the vulnerability, in plain text, to be rendered in a PDF report.
     */
    public String getReportRecommendation(IApplication app) { }
}