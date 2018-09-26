<!--
title: ".NET Level 2 Rules"
description: "Information on .NET Level 2 Rules"
tags: "customization rules level agent .Net"
-->

## Table Of Contents

* [Introduction](#policy-file)
* [File-based Rules](#file-based-rules)
  - [Client-side tech detection](#client-tech-detection)
  - [Web config settings](#web-config-checks)
* [Response-based Rules](#response-based-rules)
* [Instrumentation Rules](#instrumentation-rules)
  - [Tag Lists](#tag-lists)
  - [Sources](#sources)
  - [Propagators](#propagators)
  - [Triggers](#triggers)

## Policy File Editing

The behavior of the Contrast .NET Agent is largely driven by rules located in the *policy.xml* file in the agent's installation directory. The .NET Agent's behavior can be customized by adding your own rules to *customerPolicy.xml*.  Users can also override rules in *policy.xml* by adding a rule with the same method signature to *customerPolicy.xml*.  

The *customerPolicy.xml* file is located in *C:\ProgramData\Contrast\dotnet\customerPolicy.xml*

Please note that the agent's default *policy.xml* should not be directly modified because users' changes will be lost when a new version of the Contrast .NET agent is installed.  The *customerPolicy.xml* file will not be overwritten during software updates.

## File-Based Rules

The Contrast .NET agent will detect vulnerabilities in your application configuration files as well as in JavaScript and ASPX files. Users can disable rules they no longer wish to be detected by the .NET Agent. 

The file-based rules are configured by changing the *file-based-rules* xml element.  See below for explanations of these rules.

```xml
  <file-based-rules>
    <client-side-technology-detection enabled="true" />
    <web-config-checks enabled="true">
      <authorization-settings enabled="true" />
      <custom-errors enabled="true" />
      <debug-compilation enabled="true" />
      <event-validation enabled="true" />
      <forms-auth-protected enabled="true" />
      <forms-auth-redirect enabled="true" />
      <forms-auth-ssl enabled="true" />
      <httponly-cookies enabled="true" />
      <http-runtime-version-header enabled="true" />
      <http-runtime-header-checking enabled="true" />
      <http-runtime-max-request-length enabled="true" />
      <http-runtime-cache-control enabled="true" />
      <membership-password-settings enabled="true" />
      <plain-text-connection-strings enabled="true" />
      <request-validation enabled="true" />
      <role-cookie-protected enabled="true" />
      <role-cookie-ssl enabled="true" />
      <session-rewriting enabled="true" />
      <session-timeout enabled="true" />
      <session-regen enabled="true" />
      <trace enabled="true" />
      <viewstate-validation enabled="true" />
      <viewstate-encryption enabled="true" />
      <wcf-replay-detection enabled="true" />
      <wcf-metadata enabled="true" />
      <wcf-exception-detail enabled="true" />
    </web-config-checks>
    <aspx-config-checks enabled="true">
      <debug-compilation enabled="true" />
      <event-validation enabled="true" />
      <request-validation enabled="true" />
      <request-validation-controls enabled="true" />
      <viewstate-encryption enabled="true" />
      <viewstate-encryption-mac enabled="true" />
      <trace enabled="true" />
    </aspx-config-checks>
  </file-based-rules>
```


### Client-Side Technology Detection 

The Contrast .NET agent will scan the CSS, JavaScript and ASPX files in your application to detect client-side technologies and JavaScript libraries such as JQuery, Flash, and Silverlight.  Set *client-side-technology-detection* to ```enabled="false"``` in order to remove these checks.

### ASPX File Security Checks

Setting | Explanation
:------ |:-----------
debug-compilation | Ensure page debug is not set to "true"
event-validation | Ensure postback event validation is not disabled for the page
request-validation | Ensure request validation is not disabled for the page
request-validation-controls | Ensure request validation is not disabled for individual controls
viewstate-encryption | Ensure viewstate encryption is not disabled for the page
viewstate-encryption-mac | Ensure viewstate mac is not disabled for the page
trace | Ensure tracing is turned off for the page

### Config File Security Checks 

The Contrast .NET agent will scan your application's *web.config* or *app.config* files for various security issues.  Set *web-config-checks* ```enabled``` to "false" to disable all checks.  You can also disable specific rules by changing one or more of the options below.

Setting | Description
:------ |:-----------
authorization-deny | If ASP.NET file-based authorization is used, ensure rules are not missing a deny-all rule and do not allow all before a deny rule is present
custom-errors | Check that a custom error page is defined
debug-compilation | Ensure that the application is not running in debug mode
event-validation | Ensure that ASP.NET postbacks are validated
forms-auth-protected | Ensure forms authentication cookies are validated and encrypted
forms-auth-redirect | Ensure authenticated users cannot be redirected to other applications
forms-auth-ssl | Ensure that forms authentication cookies use SSL
httponly-cookies | Ensure cookies are HttpOnly
http-runtime-version-header | Ensure ASP.NET does not send its version number to the client
http-runtime-header-checking | Ensures that end-of-line characters in HTTP response are encoded to prevent header injection attacks
http-runtime-max-request-length | Ensure HTTP Request size is not too large (greater than 4096 bytes)
http-runtime-cache-control | Ensure that Cache-Control:private header is sent on HTTP response
membership-password-settings |  Ensure that ASP.NET membership provider's password policy is secure
plain-text-connection-strings | Ensure that database connection strings are not stored unencrypted/in plain text
request-validation | Ensure HTTP requests are validated
role-cookie-protected | Ensure that role cookies are validated and encrypted
role-cookie-ssl | Ensure that role cookies use SSL
session-rewriting | Ensure session cannot be rewritten
session-timeout | Ensure session timeout is not too long (> 30 minutes)
session-regen | Ensure client cannot regenerate expired sessions
trace | Ensure ASP.NET tracing is disabled
viewstate-validation | Ensure ASP.NET Viewstate validation is enabled
viewstate-encryption | Ensure ASP.NET Viewstate is encrypted
wcf-replay-detection | Ensure WCF replays are detected
wcf-metadata | Ensure WCF service metadata cannot be sent to the client
wcf-exception-detail | Ensure WCF faults do not send detailed exception stack traces to the client


## Response-Based Rules 

The Contrast .NET agent will scan the response stream of your application for various security issues.  You can disable some or all of these checks.  Disabling all response-based checks will result in a small performance improvement for analyzed web applications.

```xml

  <response-based-rules>
    <full-content-analysis enabled="true">
      <clickjacking-controls enabled="true" />
      <form-autocomplete enabled="true" />
      <form-parameter-pollution enabled="true" />
    </full-content-analysis>
    <header-analysis enabled="true">
      <cache-controls enabled="true" />
      <http-insecure-auth-protocol enabled="true" />
      <httponly-cookies enabled="true" />
      <session-rewriting enabled="true" />
    </header-analysis>
  </response-based-rules>


```


Setting | Description
:------ |:-----------
clickjacking-controls | Ensure that frame-breaking scripts or headers are present
cache-controls | Ensure page caching is disabled with header or meta tags
form-autocomplete | Ensure form controls have autocomplete disabled
form-parameter-pollution | Ensure form tags prevent parameter pollution by including an action attribute
http-insecure-auth-protocol | Ensure that insecure auth protocols (Basic or Digest) are not used
httponly-cookies | Ensure cookies are HttpOnly
session-rewriting | Ensure session cannot be rewritten because of cookie-less sessions


## Instrumentation Rules

The Contrast .NET agent will instrument your application code and follow user-provided data in order to detect potential security issues.  

The Contrast .NET agent will mark all user-provided data (such as FORMS posts, web service calls or HTTP headers) as tainted.  A potential security issue exists if tainted data is not safely escaped before it gets to an output sink (such as HTML pages, databases or system commands).  

* **Sources** - Set methods whose return data should be tagged.
* **Tag-lists** - Set methods that will add tags to data as it flows through them.  For example, you can tag data as "escaped" so it does not trigger a security finding.
* **Propagators** - Instrument methods with more advanced syntax to control how data should be propagated through them.  Unlike tag-lists, new tags aren't attached to this data.
* **Rules** - Set output methods that check incoming data.  Tags present on the data will determine if a security finding is generated.

## Sources Rules

### Source Rule Syntax
```xml
  <sources>
      ...
    <!-- HttpRequest Sources -->
    <method name="HTTP Request QueryString" signature="System.Collections.Specialized.NameValueCollection System.Web.HttpRequest.get_QueryString()" tags="cross-site" />
    <method name="HTTP Request Form" signature="System.Collections.Specialized.NameValueCollection System.Web.HttpRequest.get_Form()" tags="cross-site" />
  </sources>  
```

---

All data that is the return of a method specified here will be tagged as "tainted".  All tainted data will trigger a warning if it makes it to a *rule* method, unless it has other tags added to it by a *tag-list* method, which invalidate a rule.

Besides the "tainted" tag, you can list additional tags in the ```tags``` attribute to automatically attach them to the data.


## Tag Rules

### Tag Rule Syntax
 

```xml
<tags>
    ...
    <tag-list id="escapeForHTML" tags="html-encoded">
      ...    
      <!-- First parameter (P0) is the source and return object is the target to tag -->
      <method target="R" signature="System.String Custom.Web.EncodingUtility.HtmlEncode(System.String)" />
      <!-- Third parameter (P2) is the source and the return object (R) is target to tag -->
      <method target="R" source="P2" signature="System.String Custom.Web.EncodingUtility.HtmlEncode(System.Int32,System.Int32,System.String)" />
      <!-- First parameter (P0) is the source and second parameter (P1) is the target to tag -->
      <method target="P1" signature="void Custom.Web.EncodingUtility.HtmlEncodeToArray(System.String,ref System.Char[])" />
      <!-- First parameter (P0) is the source and is also tagged temporarily during the method -->
      <method target="P0" signature="void Custom.Web.EncodingUtility.HtmlEncode(System.String,System.IO.TextWriter)" scope="method" />
    </tag-list>
    ...
</tags>
```

Tag methods are organized in tag-lists under a single tag (specified in tag-list's ```tags``` attribute).  On the method node, specify the data source and target.

## Method

 ```
 method target="TARGET" [source="SOURCE"] signature="SIGNATURE" [scope="TAG_SCOPE"]
 ```

* **SIGNATURE:** *required*

   Signature of the method to instrument
   
* **TARGET:** *required*
   
   R: return object  
   P[Number]: parameter reference (0-based) 
   *Ex: P0 for first parameter, P1 for second parameter, etc.*
        
* **SOURCE:** *optional, default is "P0"*

   P[Number]: parameter reference (0-based)  
   *Ex: P0 for first parameter, P1 for second parameter, etc.*

* **TAG_SCOPE:** *optional, default is "lifetime"*
        
  lifetime - The target object will be tagged for its lifetime  
  method - The target will only be tagged during the tagger method, and will revert to its original state after the method exits


### Method-Scope Tag Rules
Tag scope by default is *lifetime*.  Method-scope is an advanced feature you may want to set for methods that can trigger a rule method in their internal code.  For example, some .NET methods will escape data and write in the same method.  
```csharp

// "normal" tagger: method source=P0, target=R, see full signature above
string htmlEncoded = HtmlEncode(input);
Response.Out.Write(htmlEncoded);

// tagger source=P0, target=N/A, scope=method, see full signature above
HtmlEncode(input, Response.Out);

// The method tag scope is useful for method like this where the potentially unsafe source can trigger a rule
void HtmlEncode(string input, System.IO.Textwriter htmlOutput) {
    
    // if input was already safe, it will be written as-is
    if(!MyUtility.ContainsHtmlEncodingCharacters(input)) {
       htmlOutput.Write(input);
       return; 
    }
    // encodedInput is a new object that be tagged as html-encoded and safe for xss
    string encodedInput = MyUtility.ReplaceHtmlEncodingCharacters(input);   
    // reflected-xss rule would be triggered here in a false-positive if input was not tagged as html-encoded
    htmlOuput.Write(encodedInput);   
    
}
// However after the method exits the input string should no longer be tagged as html-encoded since it may have 
// contained invalid characters and been replaced above.  We don't want the input object to be tagged because another method may
// write it without encoding.

```

----

## Propagator Rules

Propagators are an advanced feature integral to correcting agent operation, and overriding any of the default propagators is highly discouraged.  You may need to add new propagators, although this scenario is not fully supported.  There is currently no way to add new propagators to the ELT (CLR2) profiler since they are not currently controlled by the policy file.  Only the new instrumentation (CLR4) profiler will load propagators from your policy file.  However, the syntax is not very user-friendly, as propagation is complex and propagator rule syntax is subject to change in future versions.

----

## Trigger Rules

Trigger rules specify methods whose incoming data should be checked for security issues.  Any tainted data that does not have a proper escape tag allowed by the rule will raise a finding that will be sent to TeamServer.

### Trigger Rule Syntax

```xml
<rules>
  ...
  <rule id="reflected-xss">
      <pattern>
        <event startsWithTaint="true">
          <method signature="void Acme.MyObject.Write(System.Web.TextWriter)" />
            <object tracked="true" required-tags="cross-site" disallowed-tags="html-encoded,url-encoded,js-encoded,custom-encoded,limited-chars" />
        </event>
        <event performPreMatchSubstring="true">
          <method signature="void System.Web.HttpWriter.WriteString(System.String)" />
          <params>
            <param index="1" tracked="true" required-tags="cross-site" disallowed-tags="html-encoded,url-encoded,js-encoded,custom-encoded,limited-chars" good-value-regex="^(ESCAPED.*)" />
          </params>
        </event>
      </pattern>
        <stack-blacklist>
          <entry>System.Diagnostics.Tracing.EventSource..ctor()</entry>
          <entry>System.Web.Security.Cryptography.SP800_108.DeriveKeyImpl()</entry>
        </stack-blacklist>
    </rule>
    ...
</rules>
```

### Rule(s)

 * Pattern
   * Event(s)
     * Method
     * This Object
     * Return Object
     * Param(s)
 * Stack Blacklist
   * Entry(ies)
       
**Rule: Rule id="ID"**
  * ID: *required*
  
#### Pattern
  
**Event:**
  Each event element must have a Method sub element and at least one of the following sub elements: This Object, Params, or Return Object
  
  * event [className=CLASS_NAME] [enterOnly=ENTER_ONLY] [performPreMatchSubstring=PERFORM_PRE_MATCH_SUBSTRING] 
    * CLASS_NAME: *optional*
      
    * ENTER_ONLY: *optional, default is "false"*
    
      true: Evaluate trigger before the method code, return value is unavailable
      false: Evaluate trigger after method code
        
    * PERFORM_PRE_MATCH_SUBSTRING: *optional, default is "false"*
         
      If true, the trigger will be evaluated on a subset of first parameter where the second parameter is starting index and third parameter is subset length.  Method source must be param with index=1.  

      
**Method:**
  * method signature="SIGNATURE"
    * SIGNATURE: Signature of the method to instrument
    

**This Object:** *optional*
  * object [required-tags=REQUIRED_TAGS] [disallowed-tags=DISALLOWED_TAGS] [tracked=TRACKED] [startsWithTaint=STARTS_WITH_TAINT] [good-value-regex=GOOD_VALUE_REGEX]
      * REQUIRED_TAGS: *optional*
      
        Trigger finding if all of these tags are present
        
      * DISALLOWED_TAGS: *optional*
      
        Don't trigger finding if any of these tags are present
        
      * TRACKED: *optional, default is false*
      
        Object must be already tracked to trigger finding
        
      * STARTS_WITH_TAINT: *optional, default is false*
      
        If true, the source must start with tainted data
        
      * GOOD_VALUE_REGEX: *optional*
      
        If the source matches the following regex, the finding will not be triggered

**Return Object:** *optional*
  * return [required-tags=REQUIRED_TAGS] [disallowed-tags=DISALLOWED_TAGS] [tracked=TRACKED] [startsWithTaint=STARTS_WITH_TAINT] [good-value-regex=GOOD_VALUE_REGEX]
    * REQUIRED_TAGS, DISALLOWED_TAGS, TRACKED, STARTS_WITH_TAINT, GOOD_VALUE_REGEX: same as in "This Object", see above
    
**Params:**
  * params [connector=CONNECTOR]
    * param index="INDEX" [required-tags=REQUIRED_TAGS] [disallowed-tags=DISALLOWED_TAGS] [tracked=TRACKED] [startsWithTaint=STARTS_WITH_TAINT] [good-value-regex=GOOD_VALUE_REGEX]
    
      * CONNECTOR: *optional*, default is "or"
      
        and - trigger finding only if all parameters are satisfied

        or - trigger finding if any parameter is satisfied
    
      * INDEX: *required*
      
        1-based index of the parameter
        
      * REQUIRED_TAGS, DISALLOWED_TAGS, TRACKED, STARTS_WITH_TAINT, GOOD_VALUE_REGEX: same as in This object, see above
      

---

#### Stack Blacklist:
  
  If the trigger method contains one of these methods in its stack trace, the finding will not be satisfied.
  
  * stack-blacklist
    * entry SIGNATURE
    
      * SIGNATURE: *required*
      
        Signature of the of method to instrument for stack blacklist.
      