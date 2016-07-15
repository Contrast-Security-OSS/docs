import org.springframework.stereotype.Component;

import com.contrastsecurity.interfaces.application.IApplication
import com.contrastsecurity.interfaces.babelfish.ISnippet
import com.contrastsecurity.interfaces.rule.TriggerSecurityRule
import com.contrastsecurity.interfaces.rule.SecurityRuleConstants
import com.contrastsecurity.interfaces.trace.ITrace

@Component
class SecureRule extends TriggerSecurityRule {

    String getId() { "" }

    String getName() { "" }

    String getDescription() { "" }

    String getCategory() { }

    String getConfidence() { }
    
    String getLikelihood() { }

    String getImpact() { }

    String getCwe() { }

    String getOwasp() { }

    String[] getReportReferences() { [] }

    String getEvidenceIntro(){ "" }

    int getParameterIndex(){ }

    public String buildRisk(ITrace trace){ }
    
    public ISnippet buildRiskSnippet(ITrace trace){ }

    public String getReportIntroduction(String lang) { }

    public String buildRecommendation(ITrace trace, String language) { }

    public ISnippet buildRecommendationSnippet(ITrace trace){ }

    public String getReportRecommendation(IApplication app) { "" }
}