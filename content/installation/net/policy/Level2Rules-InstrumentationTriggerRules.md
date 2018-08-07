<!--
title: "Level 2 Rules - Trigger Rules"
description: "Information on .NET Instrumentation Trigger Rules"
tags: "installation policy customization rules level agent .Net instrumentation trigger"
-->

Trigger rules specify methods whose incoming data should be checked for security issues. Any tainted data that doesn't have a proper escape tag allowed by the rule raises a finding that's sent to Contrast.

## Trigger Rule Syntax

```xml
<rules>
  ...
  <rule id="reflected-xss">
      <pattern>
        <event>
          <method signature="void Acme.MyObject.Write(System.Web.TextWriter)" />
            <object tracked="true" required-tags="cross-site" disallowed-tags="html-encoded,url-encoded,js-encoded,custom-encoded,limited-chars" />
        </event>
        <event performPreMatchSubstring="true">
          <method signature="void System.Web.HttpWriter.WriteString(System.String)" />
          <params>
            <param index="1" tracked="true" required-tags="cross-site" disallowed-tags="html-encoded,url-encoded,js-encoded,custom-encoded,limited-chars" good-value-regex="^(ESCAPED.*)" startsWithTaint="true" />
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
       
**Rule: Rule id="ID"** [enabled=ENABLED]
  * ID <br>
  (**Required**)
   
  * ENABLED: Add the enabled attribute and set it to `"false"` to disable all rules with this ID. The default is `"true"`. <br>
   (**Optional**)
    
### Pattern
  
#### Event 

Each event element must have a Method sub-element and at least one of the following sub elements: This Object, Params, or Return Object.
  
  * `event [className=CLASS_NAME] [enterOnly=ENTER_ONLY] [performPreMatchSubstring=PERFORM_PRE_MATCH_SUBSTRING]` 
    * CLASS_NAME <br>
    (**Optional**)
      
    * ENTER_ONLY: 
    
      * `true`: Evaluate trigger before the method code. Return value is unavailable.
      * `false`: Evaluate trigger after method code. This is the **default**.
        
      (**Optional**)

    * PERFORM_PRE_MATCH_SUBSTRING: 
         
      If `"true"`, the trigger is evaluated on a subset of first parameter where the second parameter is starting index and third parameter is subset length. Method source must be param with index=1. The default is `"false"`.

      (**Optional**)
      
#### Method 

  * method signature="SIGNATURE" [enabled=ENABLED]
    * SIGNATURE: Signature of the method to instrument
    * ENABLED: Add the enabled attribute and set it to `"false"` to disable the rule for this signature. The default is `"true"`.
    
  (**Optional**)
    

#### This Object:

  * object [required-tags=REQUIRED_TAGS] [disallowed-tags=DISALLOWED_TAGS] [tracked=TRACKED] [startsWithTaint=STARTS_WITH_TAINT] [good-value-regex=GOOD_VALUE_REGEX]
      * REQUIRED_TAGS: Trigger finding if all of these tags are present.
      * DISALLOWED_TAGS: Don't trigger finding if any of these tags are present.
      * TRACKED: Object must be already tracked to trigger finding. The default is `"false"`.
      * STARTS_WITH_TAINT: If true, the source must start with tainted data. The default is `"false"`.
      * GOOD_VALUE_REGEX: If the source matches the following regex, the finding isn't triggered. 
  
  (**Optional**)

#### Return Object 

  * return [required-tags=REQUIRED_TAGS] [disallowed-tags=DISALLOWED_TAGS] [tracked=TRACKED] [startsWithTaint=STARTS_WITH_TAINT] [good-value-regex=GOOD_VALUE_REGEX]
    * REQUIRED_TAGS, DISALLOWED_TAGS, TRACKED, STARTS_WITH_TAINT, GOOD_VALUE_REGEX: same as in `"This Object"` (see above)

  (**Optional**)
    
#### Params

  * params [connector=CONNECTOR]
    * param index="INDEX" [required-tags=REQUIRED_TAGS] [disallowed-tags=DISALLOWED_TAGS] [tracked=TRACKED] [startsWithTaint=STARTS_WITH_TAINT] [good-value-regex=GOOD_VALUE_REGEX]
    
      * CONNECTOR: 

        * and: Trigger finding only if all parameters are satisfied
        * or: Trigger finding if any parameter is satisfied. This is the **default**. <br> (**Optional**)
    
      * INDEX:
      
       * 1-based index of the parameter
       * REQUIRED_TAGS, DISALLOWED_TAGS, TRACKED, STARTS_WITH_TAINT, GOOD_VALUE_REGEX: same as in This object, see above <br> (**Required**)

### Stack Blacklist
  
If the trigger method contains one of these methods in its stack trace, the finding will not be satisfied.
  
  * stack-blacklist
    * entry SIGNATURE
    
      * SIGNATURE: Signature of the of method to instrument for stack blacklist.
      <br> (**Required**)
      
