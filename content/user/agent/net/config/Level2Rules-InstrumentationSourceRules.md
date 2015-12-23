##Sources Rules

### Source Rule Syntax
```xml
  <sources>
      ...
    <!-- HttpRequest Sources -->
    <method name="HTTP Request QueryString" signature="System.Collections.Specialized.NameValueCollection System.Web.HttpRequest.get_QueryString()" tags="cross-site" />
    <method name="HTTP Request Form" signature="System.Collections.Specialized.NameValueCollection System.Web.HttpRequest.get_Form()" tags="cross-site" />
  </sources>  
```
All data that is the return of a method specified here will be tagged as "tainted".  All tainted data will trigger a warning if it makes it to a *rule* method, unless it has other tags added to it by a *tag-list* method which invalidate a rule.

Besides the "tainted" tag, you can list more tags in the tags attribute to automatically attach to the data.
