<!--
  title: "Migrating External Rules from 3.2.6 to 3.2.7+",
  description: "Guide for EOP administrators to reference when migrating their external rules from a 3.2.7 version to the post 3.2.7 version.",
  tags: "Migrating External Rules 3.2.6 3.2.7 TeamServer Custom Level"
-->

## Who?
Any user with external rules for the 3.2.6 (or prior) version of TeamServer intending to upgrade to a 3.2.7 (or later) version of TeamServer.

## What?
With the release of Contrast 3.2.7, we have partitioned the models associated with our Traces (Contrast's representation of a vulnerable code flow within your application). Rather than have a shared model for both storage and rendering, we have converted our internal Trace object to solely be responsible for data storage and created a new project, *contrast-model*, with an ITrace object responsible for data rendering. This means that any external rule created with the 3.2.6 specifications will need to be updated to the new format and any rules will need to be written to the 3.2.7 specification. 

## When? 
These changes will need to be in place between the 3.2.6 and 3.2.7+ versions of Contrast. This means that you will need to have the new rules ready to be released during the 3.2.7+ upgrade process but *BEFORE* actually running the 3.2.7+ installer. Once these rules are complete, shut down TeamServer with the Contrast Server command (See [How To Restart Contrast](user_tsfaq.html#restart) for an example. **Note:** for Linux use *stop* instead of *restart*). After confirming that TeamServer is down, replace the rules in your *${contrast.dir}/data/rulepack* directory with the new versions. Finally, run the 3.2.7+ installer to update TeamServer and bring it back online. 

## Why?
To make rule writing easier and more efficient for both you and for us. First, it is our hope that by switching to an interface rather than a concrete object, we will be able to insulate external rules from future internal changes. This will allow us to advance our rule rendering and output, providing the latest update to your custom rules seamlessly, without requiring future code changes. Second, the change eliminates the need for Babelfish-specific versions of the data objects. This reduces code duplication and rule dependencies, making rules easier to write and debug. Third, by making these dependencies an external project separate from TeamServer, we can expose the artifact - allowing for compilation testing and swifter rule development iterations. 

## How?
It can be a little daunting upgrading your rules to be ready for the 3.2.7+ release of TeamServer. To make the process easier for you, we have included a <a href="/assets/attachments/level_2_rules/contrast_rule_writer.zip">Maven Project</a> that will make developing these new rules simpler; however, it *does* require that you have Maven 3.x.x installed. If you do not want to use Maven, you can skip Step 1 and **INSERT_FINAL_NUMBER**, but you will not have validation before attempting to restart TeamServer.

1. Download the aforementioned <a href="/assets/attachments/level_2_rules/contrast_rule_writer.zip">Maven Project</a>  
2. Unzip the project and import it into your IDE of choice
3. Place a copy of your rules in the */src/main/groovy* folder of the project
4. If you declare it, remove the field ```RuleResourceLoader loader``` and the ```org.springframework.beans.factory.annotation.Autowired``` dependency
5. If you overrode it, rename the method ```Snippet buildRisk(BFTrace trace)``` to ```Snippet buildRiskSnippet(BFTrace trace)```. If you use it in ```Story.setRisk(Snippet)``` be sure to update the call there as well. Note that there is a similar method, ```String buildRisk(Trace trace)```, which should **not** be changed.
6. If you overrode it, rename the method ```Snippet buildRecommendation(BFTrace trace)``` to ```Snippet buildRecommendationSnippet(BFTrace trace)```. Note that there is a similar method, ```String buildRecommendation(Trace trace)``` that should **not** be changed.
7. If you call it, rename references to ```void verifyBFTraceNotNull(BFTrace trace)``` to ```void verifyTraceNotNull(BFTrace trace)```
8. If you call it, rename references to ```void verifyBFTraceAndEventsExist(BFTrace trace)``` to ```void verifyTraceAndEventsExist(BFTrace trace)```
9. Change any reference to the static class ```RuleHelper``` to reference the field variable ```ruleHelper```
10. Change any reference to the static class ```ChapterHelper``` to reference the field variable ```chapterHelper```
11. For each rule, update the imports and instances of each object. For most rules, these mappings will be a subset of the following:
    - **Application** ```com.contrastsecurity.interfaces.application.IApplication```
    - **BabelfishException** ```com.contrastsecurity.interfaces.babelfish.BabelfishException```
    - **Chapter** ```com.contrastsecurity.interfaces.babelfish.IChapter```
    - **Snippet** ```com.contrastsecurity.interfaces.babelfish.ISnippet```
    - **Story** ```com.contrastsecurity.interfaces.babelfish.IStory```
    - **DataFlowSecurityRule** ```com.contrastsecurity.interfaces.rule.DataFlowSecurityRule```
    - **SecurityRuleConstants** ```com.contrastsecurity.interfaces.rule.SecurityRuleConstants```
    - **AbstractEvent & BFEvent** ```com.contrastsecurity.interfaces.trace.IAbstractEvent```
    - **Parameter & BFParameter** ```com.contrastsecurity.interfaces.trace.IParameter```
    - **StackFrame & BFStackFrame** ```com.contrastsecurity.interfaces.trace.IStackFrame```
    - **TriggerSecurityRule** ```com.contrastsecurity.interfaces.rule.TriggerSecurityRule```
    - **Trace & BFTrace** ```com.contrastsecurity.interfaces.trace.ITrace```
    - **UniqueMethod & BFMethod** ```com.contrastsecurity.interfaces.trace.IUniqueMethod```.
A full list of the new imports, as well as their former declarations, can be found in the [Where?](ExternalRulesUpgrade.html#where) section of this instruction set. 
12. Anywhere that you instantiate a ```Snippet```, instead call ```ruleHelper.getNewSnippet()```.
13. Anywhere that you instantiate a ```Story```, instead call ```ruleHelper.getNewStory()```.
14. Anywhere that you instantiate a ```DataFlowChapter```, instead call ```chapterHelper.getNewDataFlowChapter()```.
15. For each call to the method ```getUUID()``` of ITrace, instead call ```getUuid()```.
16. For each call to ```Trace.setTitle()```, ```Trace.setSubtitle()```, and ```Trace.setHash()```,instead call ```Trace.updateTitle(title,subtitle,hash)```.
16. Build the Maven project using ```mvn clean package install```. If the project compiles, then the rules are ready to be moved to TeamServer. If there are compilation problems, update accordingly and repeat this step until successful compilation occurs. 
17. Once ready to upgrade TeamServer to 3.2.7 (or later), shut down TeamServer.
18. Replace the rules files in your *${contrast.data.dir}/data/rulepack* directory with your new Groovy Scripts.
19. Run the 3.2.7 (or later) Contrast installer.

## Where?
Locations of the new imports, mapped to the location of the old imports which they are replacing, are as follows:

### Application

 3.2.6 Import | 3.2.7 Import
 ------------ | ------------
 com.aspectsecurity.contrast.teamserver.model.application.Application | com.contrastsecurity.interfaces.application.IApplication
 com.aspectsecurity.contrast.teamserver.model.organization.server.Server |com.contrastsecurity.interfaces.application.IServer
 com.contrastsecurity.interfaces.application.ITechnology | com.aspectsecurity.contrast.teamserver.model.application.codeinfo.Technology

### Babelfish

 3.2.6 Import | 3.2.7 Import
 ------------ | ------------
 com.contrastsecurity.babelfish.BabelfishException | com.contrastsecurity.interfaces.babelfish.BabelfishException 
 com.contrastsecurity.babelfish.Babelfish | com.contrastsecurity.interfaces.babelfish.IBabelfish
 com.contrastsecurity.babelfish.card.Card | com.contrastsecurity.interfaces.babelfish.ICard
 com.contrastsecurity.babelfish.story.Chapter | com.contrastsecurity.interfaces.babelfish.IChapter
 com.contrastsecurity.babelfish.story.ChapterHelper | com.contrastsecurity.interfaces.babelfish.IChapterHelper
 com.contrastsecurity.babelfish.story.PropertiesChapter | com.contrastsecurity.interfaces.babelfish.IPropertiesChapter
 com.contrastsecurity.babelfish.source.Snippet | com.contrastsecurity.interfaces.babelfish.ISnippet
 com.contrastsecurity.babelfish.story.Story | com.contrastsecurity.interfaces.babelfish.IStory

### Request

3.2.6 Import | 3.2.7 Import
 ------------ | ------------
 com.aspectsecurity.contrast.teamserver.model.trace.HttpHeader | com.contrastsecurity.interfaces.request.IHttpHeader
 com.aspectsecurity.contrast.teamserver.model.trace.HttpParameter | com.contrastsecurity.interfaces.request.IHttpParameter
 com.aspectsecurity.contrast.teamserver.model.trace.HttpRequest | com.contrastsecurity.interfaces.request.IHttpRequest
 com.aspectsecurity.contrast.teamserver.webapp.apps.traces.check.RequestCondition | com.contrastsecurity.interfaces.request.IRequestCondition

### Rule
 
3.2.6 Import | 3.2.7 Import
 ------------ | ------------
 com.aspectsecurity.contrast.teamserver.rules.ConfigSecurityRule | com.contrastsecurity.interfaces.rule.ConfigSecurityRule
 com.aspectsecurity.contrast.teamserver.rules.CryptoSecurityRule | com.contrastsecurity.interfaces.rule.CryptoSecurityRule
 com.aspectsecurity.contrast.teamserver.rules.DataFlowSecurityRule | com.contrastsecurity.interfaces.rule.DataFlowSecurityRule
 com.aspectsecurity.contrast.teamserver.rules.DotNetASPXConfigSecurityRule | com.contrastsecurity.interfaces.rule.DotNetASPXConfigSecurityRule
 com.aspectsecurity.contrast.teamserver.rules.DotNetConfigSecurityRule | com.contrastsecurity.interfaces.rule.DotNetConfigSecurityRule
 *New* | com.contrastsecurity.interfaces.rule.HeaderDataFlowSecurityRule
 com.aspectsecurity.contrast.teamserver.service.util.RuleHelper | com.contrastsecurity.interfaces.rule.IRuleHelper
 com.aspectsecurity.contrast.teamserver.rules.ISecurityRule | com.contrastsecurity.interfaces.rule.ISecurityRule
 com.aspectsecurity.contrast.teamserver.rules.TraceView | com.contrastsecurity.interfaces.rule.ITraceView
 com.aspectsecurity.contrast.teamserver.rules.PropertySecurityRule | com.contrastsecurity.interfaces.rule.PropertySecurityRule
 com.aspectsecurity.contrast.teamserver.rules.RegexSecurityRule | com.contrastsecurity.interfaces.rule.RegexSecurityRule
 com.aspectsecurity.contrast.teamserver.model.rulelevel.RuleSeverity | com.contrastsecurity.interfaces.rule.RuleSeverity
 com.aspectsecurity.contrast.teamserver.rules.SecurityRule | com.contrastsecurity.interfaces.rule.SecurityRule
 com.aspectsecurity.contrast.teamserver.rules.SecurityRuleConstants | com.contrastsecurity.interfaces.rule.SecurityRuleConstants
 com.aspectsecurity.contrast.teamserver.model.ServiceLevel | com.contrastsecurity.interfaces.rule.ServiceLevel
 com.aspectsecurity.contrast.teamserver.rules.TriggerSecurityRule | com.contrastsecurity.interfaces.rule.TriggerSecurityRule

### Trace
 
3.2.6 Import | 3.2.7 Import
 ------------ | ------------
 com.aspectsecurity.contrast.teamserver.model.trace.AbstractEvent |  com.contrastsecurity.interfaces.trace.IAbstractEvent
 com.aspectsecurity.contrast.teamserver.model.trace.Instance |  com.contrastsecurity.interfaces.trace.IInstance
 com.aspectsecurity.contrast.teamserver.model.trace.Parameter |  com.contrastsecurity.interfaces.trace.IParameter
 com.aspectsecurity.contrast.teamserver.model.trace.ReturnValue |  com.contrastsecurity.interfaces.trace.IReturnValue
 com.aspectsecurity.contrast.teamserver.model.trace.StackFrame |  com.contrastsecurity.interfaces.trace.IStackFrame
 com.aspectsecurity.contrast.teamserver.model.trace.Trace | com.contrastsecurity.interfaces.trace.ITrace
 *New* | com.contrastsecurity.interfaces.trace.ITraceHelper
 com.aspectsecurity.contrast.teamserver.model.trace.TraceProperty | com.contrastsecurity.interfaces.trace.ITraceProperty
 com.aspectsecurity.contrast.teamserver.model.trace.UniqueMethod | com.contrastsecurity.interfaces.trace.IUniqueMethod
 *New* | com.contrastsecurity.interfaces.trace.TraceException
 com.aspectsecurity.contrast.teamserver.model.util.TracePropertyJSON | com.contrastsecurity.interfaces.trace.TracePropertyJSON

### Utilities
 
3.2.6 Import | 3.2.7 Import
 ------------ | ------------
com.aspectsecurity.contrast.teamserver.model.util.CodeUtil  | com.contrastsecurity.interfaces.util.CodeUtil
com.aspectsecurity.contrast.teamserver.util.HtmlUtil | com.contrastsecurity.interfaces.util.HtmlUtil
com.aspectsecurity.contrast.teamserver.model.util.HttpUtil | com.contrastsecurity.interfaces.util.HttpUtil
 com.aspectsecurity.contrast.teamserver.model.LanguageConstants | com.contrastsecurity.interfaces.util.LanguageConstants
com.aspectsecurity.contrast.teamserver.model.util.StringUtil | com.contrastsecurity.interfaces.util.StringUtil
