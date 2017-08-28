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
      <method target="R" assembly="System.Web" signature="System.String Custom.Web.EncodingUtility.HtmlEncode(System.String)" />
      <!-- Third parameter (P2) is the source and the return object (R) is target to tag -->
      <method target="R" source="P2" assembly="Custom.Web" signature="System.String Custom.Web.EncodingUtility.HtmlEncode(System.Int32,System.Int32,System.String)" />
      <!-- First parameter (P0) is the source and second parameter (P1) is the target to tag -->
      <method target="P1" assembly="Custom.Web" signature="void Custom.Web.EncodingUtility.HtmlEncodeToArray(System.String,ref System.Char[])" />
      <!-- First parameter (P0) is the source and is also tagged temporarily during the method -->
      <method target="P0" assembly="Custom.Web" signature="void Custom.Web.EncodingUtility.HtmlEncode(System.String,System.IO.TextWriter)" scope="method" />
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

* **ASSEMBLY:** Assembly name of the method to instrument <br> (**Required**)
   
* **SIGNATURE:** Signature of the method to instrument. <br> (**Required**)
   
* **TARGET:** 
 * R: Return object  
 * P[Number]: Parameter reference (0-based). You can use `P0`for first parameter, `P1` for second parameter, etc.
  
 (**Required**)

* **SOURCE:** 

 * P[Number]: Parameter reference (0-based)
 * The default is `P0`. You can use `P0`for first parameter, `P1` for second parameter, etc.
  (**Optional**)

* **ENABLED:** Add the enabled attribute and set it to `"false"` to disable the rule. The default is `"true"`. <br> 
 (**Optional**)

* **TAG_SCOPE:** 
        
 * `lifetime`: The target object is tagged for its lifetime. This is the **default**. 
 * `method`: The target is only tagged during the tagger method, and reverts to its original state after the method exits.
 (**Optional**)

### Method-Scope Tag Rules

Tag scope by default is `lifetime`. Method-scope is an advanced feature you may want to set for methods that can trigger a rule method in their internal code. For example, some .NET methods escape data and write in the same method:

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

```
After the method exits, the input string should no longer be tagged as `html-encoded` since it may have 
contained invalid characters and been replaced, as shown in the example above.  You don't want the input object to be tagged because another method may
write it without encoding.

