<!--
title: "Level 2 Rules - Tag Rules"
description: "Information on .NET Instrumentation Tag Rules"
tags: "installation policy customization rules level agent .Net instrumentation tag"
-->

## Tag Rule Syntax
 
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

Tag methods are organized in tag-lists under a single tag specified in tag-list's `tags` attribute. This tag should be used on the disallowed tags on Trigger method.

## Method

On the method node, specify the data source and target.

 ```
 method target="TARGET" [source="SOURCE"] signature="SIGNATURE" [scope="TAG_SCOPE"] [enabled="ENABLED"]
 ```
   
* **SIGNATURE:** Signature of the method to instrument. <br> (**Required**)
   
* **TARGET:** (**Required**)
 Use one of the following
   * R: Return object  
   * P[Number]: Parameter reference (0-based). You can use `P0`for first parameter, `P1` for second parameter, etc.
  
* **SOURCE:** (**Optional**)
  * P[Number]: Parameter reference (0-based)
  * The default is `P0`. You can use `P0`for first parameter, `P1` for second parameter, etc.
  

* **ENABLED:** Add the enabled attribute and set it to `"false"` to disable the rule. The default is `"true"`. (**Optional**)

* **TAG_SCOPE:** (**Optional**)
        
  * `lifetime`: The target object is tagged for its lifetime. This is the **default**. 
  * `method`: The target is only tagged during the tagger method, and reverts to its original state after the method exits.
