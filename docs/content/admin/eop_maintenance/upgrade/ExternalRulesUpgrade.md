<!--
  title: "Migrate External Rules from 3.2.6 to 3.2.7+",
  description: "Guide for EOP administrators migrating external rules from a 3.2.7 version to the post 3.2.7 version.",
  tags: "Admin EOP maintenance migrate external rules 3.2.6 3.2.7 interface Custom Level"
-->


The following guidelines are written for any user with external rules for the 3.2.6 (or earlier) version of the Contrast application who intends to upgrade to a 3.2.7 (or later) version.

## About the Upgrade

With the release of Contrast 3.2.7, Contrast partitioned the models associated with Traces - Contrast's representation of a vulnerable code flow within your application. Rather than a shared model for both storage and rendering, Contrast converted the internal Trace object to be responsible solely for data storage, and then created a new project, *contrast-model*, with an ITrace object responsible for data rendering. This means that any external rule created with the 3.2.6 specifications must be updated to the new format, and any rules must be written to the 3.2.7 specification.  

### Ease of use 

Contrast implemented this change to make rule writing easier and more efficient for both you and for Contrast in the following ways. 

* It's Contrast's goal to insulate external rules from future internal changes by switching to an interface rather than a concrete object. This allows us to advance our rule rendering and output, which provides the latest update to your custom rules without requiring future code changes. 

* The change eliminates the need for Babelfish-specific versions of the data objects. This reduces code duplication and rule dependencies, which makes rules easier to write and debug. 

* Contrast can expose the artifact - allowing for compilation testing and swifter rule development iterations - by making these dependencies an external project. 

## Before You Start

These changes must be in place between the 3.2.6 and 3.2.7+ versions of Contrast. This means that you must have the new rules ready to be released during the 3.2.7+ upgrade process but **before** actually running the 3.2.7+ installer. Once these rules are complete, shut down the Contrast application with the Contrast Server command. See [Restarting Contrast](installation-setupinstall.html#restart) for an example. 

> **Note:** For Linux, use `stop` instead of `restart`. 

After confirming that the application is down, replace the rules in your *${contrast.dir}/data/rulepack* directory with the new versions. Finally, run the 3.2.7+ installer to update the application and bring it back online.

## Perform the Upgrade

It can be a little daunting upgrading your rules for the 3.2.7+ release of Contrast. To make the process easier for you, Contrast included a <a href="/assets/attachments/level_2_rules/contrast_rule_writer.zip">Maven Project</a> that simplifies the process of developing these new rules; however, it require that you have Maven 3.x.x installed. If you don' want to use Maven, you can skip the first step and **INSERT_FINAL_NUMBER**, but you won't have validation before attempting to restart the application.

* Download the <a href="/assets/attachments/level_2_rules/contrast_rule_writer.zip">Maven Project</a>. 

* Unzip the project and import it into your IDE of choice.

* Place a copy of your rules in the */src/main/groovy* folder of the project.

* If you declare it, remove the field `RuleResourceLoader loader` and the `org.springframework.beans.factory.annotation.Autowired` dependency.

* If you overrode it, rename the method `Snippet buildRisk(BFTrace trace)` to `Snippet buildRiskSnippet(BFTrace trace)`. If you use it in `Story.setRisk(Snippet)`, be sure to update the call there as well. **There is a similar method, `String buildRisk(Trace trace)` that should not be changed.**

* If you overrode it, rename the method `Snippet buildRecommendation(BFTrace trace)` to `Snippet buildRecommendationSnippet(BFTrace trace)`. **There is a similar method, `String buildRecommendation(Trace trace)`, that should not be changed.**

* If you call it, rename references to `void verifyBFTraceNotNull(BFTrace trace)` to `void verifyTraceNotNull(BFTrace trace)`.

* If you call it, rename references to `void verifyBFTraceAndEventsExist(BFTrace trace)` to `void verifyTraceAndEventsExist(BFTrace trace)`.

* Change any reference to the static class `RuleHelper` to reference the field variable `ruleHelper`.

* Change any reference to the static class `ChapterHelper` to reference the field variable `chapterHelper`.

* For each rule, update the imports and instances of each object. For most rules, these mappings will be a subset of the following:

    - **Application:** `com.contrastsecurity.interfaces.application.IApplication`
    - **BabelfishException:** `com.contrastsecurity.interfaces.babelfish.BabelfishException`
    - **Chapter:** `com.contrastsecurity.interfaces.babelfish.IChapter`
    - **Snippet:** `com.contrastsecurity.interfaces.babelfish.ISnippet`
    - **Story:** `com.contrastsecurity.interfaces.babelfish.IStory`
    - **DataFlowSecurityRule:** `com.contrastsecurity.interfaces.rule.DataFlowSecurityRule`
    - **SecurityRuleConstants:** `com.contrastsecurity.interfaces.rule.SecurityRuleConstants`
    - **AbstractEvent & BFEvent:** `com.contrastsecurity.interfaces.trace.IAbstractEvent`
    - **Parameter & BFParameter** `com.contrastsecurity.interfaces.trace.IParameter`
    - **StackFrame & BFStackFrame:** `com.contrastsecurity.interfaces.trace.IStackFrame`
    - **TriggerSecurityRule:** `com.contrastsecurity.interfaces.rule.TriggerSecurityRule`
    - **Trace & BFTrace:** `com.contrastsecurity.interfaces.trace.ITrace`
    - **UniqueMethod & BFMethod:** `com.contrastsecurity.interfaces.trace.IUniqueMethod`.

A full list of the new imports, as well as their former declarations, can be found in the following **Import Locations** section. 

* Anywhere that you instantiate a `Snippet`, instead call `ruleHelper.getNewSnippet()`.

* Anywhere that you instantiate a `Story`, instead call `ruleHelper.getNewStory()`.

* Anywhere that you instantiate a `DataFlowChapter`, instead call `chapterHelper.getNewDataFlowChapter()`.

* For each call to the method `getUUID()` of ITrace, instead call `getUuid()`.

* For each call to `Trace.setTitle()`, `Trace.setSubtitle()`, and `Trace.setHash()`, instead call `Trace.updateTitle(title,subtitle,hash)`.

* Build the Maven project using `mvn clean package install`. If the project compiles, then the rules are ready to be moved to the Contrast application. If there are compilation problems, update accordingly and repeat this step until successful compilation occurs.

* Once you're ready to upgrade to 3.2.7 (or later), shut down the application.

* Replace the rules files in your *${contrast.data.dir}/data/rulepack* directory with your new Groovy Scripts.

* Run the 3.2.7 (or later) Contrast installer.

## Import Locations

Locations of the new imports, mapped to the location of the old imports that they're replacing, are given in the following sections. 

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

