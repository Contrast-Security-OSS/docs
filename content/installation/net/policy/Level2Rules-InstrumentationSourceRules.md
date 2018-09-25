<!--
title: "Level 2 Rules - Instrumentation Source Rules"
description: "Information on .NET Instrumentation Source Rules"
tags: "installation policy customization rules level agent .Net instrumentation source"
-->

The .NET agent instruments your application code and follows user-provided data to detect potential security issues by marking all user-provided data - such as FORMS posts, web service calls or HTTP headers - as tainted. A potential security issue exists if tainted data isn't escaped safely before it gets to an output sink, such as HTML pages, databases or system commands.  

* **Sources:** Set methods whose return data should be tagged.
* **Tag-lists:** Set methods that add tags to data as it flows through them. For example, you can tag data as `"escaped"` so it doesn't trigger a security finding.
* **Propagators:** Instrument methods with more advanced syntax to control how data should be propagated through them. Unlike tag-lists, new tags aren't attached to this data.
* **Rules:** Set output methods that check incoming data. Tags present on the data determine if a security finding is generated.


## Source Rule Syntax

```xml
  <sources>
      ...
    <!-- HttpRequest Sources -->
    <method name="HTTP Request QueryString" signature="System.Collections.Specialized.NameValueCollection System.Web.HttpRequest.get_QueryString()" tags="cross-site" sourceType="parameter" />
    <method name="HTTP Request Form" signature="System.Collections.Specialized.NameValueCollection System.Web.HttpRequest.get_Form()" tags="cross-site" sourceType="parameter" target="R" />
    <method name="HTTP Request Method" signature="System.String System.Web.HttpRequest.get_RequestType()" tags="limited-chars" sourceType="uri" />
  </sources>  
```

## Method


```
method name="Name" signature="SIGNATURE" tags="TAGS" [enabled="ENABLED"] [sourceType="SOURCETYPE"]
```

* **SIGNATURE:** Signature of the method to instrument. <br> (**Required**)
   
* **TAGS:** All data that is the return of a method specified here is tagged as `"tainted"`.  All tainted data triggers a warning if it makes it to a `rule` method, unless it has other tags added to it by a taglist method, which invalidate a rule. Besides the `"tainted"` tag, you can list additional tags in the `tags` attribute to automatically attach them to the data. <br> (**Required**)

* **TARGET:** Specify which part of the signature returns untrusted data. By default, this is `R` for "return object". You can also say `O` for "this object", and `P0`, `P1`, or `P2` for first, second, or third parameter argument and so on. <br> (**Optional**)

* **NAME**: Unique name for this source (**Optional**)

* **SOURCETYPE:** For better display in Contrast, list the origin of the untrusted data. The default is `"other"`. <br> (**Optional**)

 Possible values are:
  * `parameter`
  * `header`
  * `cookie`
  * `querystring`
  * `uri`
  * `body`

* **ENABLED:** Add the enabled attribute and set it to `"false"` to disable the rule. The default is `"true"`. <br> (**Optional**)



