<!--
title: "Level 2 Rules - Instrumentation Source Rules"
description: "Information on .NET Instrumentation Source Rules"
tags: "customization rules level agent .Net instrumentation source"
-->

Contrast.NET will instrument your application code and follow user-provided data in order to detect potential security issues.  

Contrast.NET will mark all user-provided data (such as FORMS posts, web service calls or HTTP headers) as tainted.  A potential security issue exists if tainted data is not safely escaped before it gets to an output sink (such as HTML pages, databases or system commands).  

* **Sources** - Set methods whose return data should be tagged.
* **Tag-lists** - Set methods that will add tags to data as it flows through them.  For example, you can tag data as "escaped" so it does not trigger a security finding.
* **Propagators** - Instrument methods with more advanced syntax to control how data should be propagated through them.  Unlike tag-lists, new tags aren't attached to this data.
* **Rules** - Set output methods that check incoming data.  Tags present on the data will determine if a security finding is generated.


## Source Rule Syntax
```xml
  <sources>
      ...
    <!-- HttpRequest Sources -->
    <method name="HTTP Request QueryString" signature="System.Collections.Specialized.NameValueCollection System.Web.HttpRequest.get_QueryString()" tags="cross-site" />
    <method name="HTTP Request Form" signature="System.Collections.Specialized.NameValueCollection System.Web.HttpRequest.get_Form()" tags="cross-site" />
  </sources>  
```

---

##Method

 ```
 method name="Name" signature="SIGNATURE" tags="TAGS" [enabled="ENABLED"]
 ```

* **SIGNATURE:** *required*

   Signature of the method to instrument.
   
* **TAGS:** *required*
  
  All data that is the return of a method specified here will be tagged as "tainted".  All tainted data will trigger a warning if it makes it to a *rule* method, unless it has other tags added to it by a *tag-list* method, which invalidate a rule.
  Besides the "tainted" tag, you can list additional tags in the ```tags``` attribute to automatically attach them to the data.

* **ENABLED:** *optional*, default is "true"
  
  Add the enabled attribute and set it to "false" to disable the rule.
