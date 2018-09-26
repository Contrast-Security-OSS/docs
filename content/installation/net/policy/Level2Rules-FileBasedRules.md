<!--
title: "Level 2 Rules - File-Based Rules"
description: "Information on .NET File-Based Rules"
tags: "installation policy customization rules level agent .Net files"
-->

The .NET agent detects vulnerabilities in your application configuration files as well as in JavaScript and ASPX files. You can disable rules that you no longer want the agent to detect. 

The file-based rules are configured by changing the *file-based-rules xml* element. See the following sections for explanations of these rules.

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


### Client-side technology detection 

The .NET agent scans the CSS, JavaScript and ASPX files in your application to detect client-side technologies and JavaScript libraries such as JQuery, Flash and Silverlight. Set `client-side-technology-detection` to `enabled="false"` to remove these checks.

### ASPX file security checks

Setting | Explanation
:------ |:-----------
debug-compilation | Ensure page debug is not set to `true"`
event-validation | Ensure postback event validation isn't disabled for the page
request-validation | Ensure request validation isn't disabled for the page
request-validation-controls | Ensure request validation isn't disabled for individual controls
viewstate-encryption | Ensure viewstate encryption isn't disabled for the page
viewstate-encryption-mac | Ensure viewstate mac isn't disabled for the page
trace | Ensure tracing is turned off for the page

### *Config* file security checks 

The .NET agent scans your application's *web.config* or *app.config* files for various security issues. Set `web-config-checks` `enabled` to `false` to disable all checks. You can also disable specific rules by changing one or more of the options below.

Setting | Description
:------ |:-----------
authorization-deny | If ASP.NET file-based authorization is used, ensure rules are not missing a deny-all rule, and don't allow all before a deny rule is present
custom-errors | Check that a custom error page is defined
debug-compilation | Ensure that the application isn't running in `debug` mode
event-validation | Ensure that ASP.NET postbacks are validated
forms-auth-protected | Ensure forms authentication cookies are validated and encrypted
forms-auth-redirect | Ensure authenticated users cannot be redirected to other applications
forms-auth-ssl | Ensure that forms authentication cookies use SSL
httponly-cookies | Ensure cookies are `HttpOnly`
http-runtime-version-header | Ensure ASP.NET does not send its version number to the client
http-runtime-header-checking | Ensures that end-of-line characters in HTTP response are encoded to prevent header injection attacks
http-runtime-max-request-length | Ensure HTTP Request size isn't too large (greater than 4096 bytes)
http-runtime-cache-control | Ensure that Cache-Control:private header is sent on HTTP response
membership-password-settings |  Ensure that ASP.NET membership provider's password policy is secure
plain-text-connection-strings | Ensure that database connection strings aren't stored unencrypted/in plain text
request-validation | Ensure HTTP requests are validated
role-cookie-protected | Ensure that role cookies are validated and encrypted
role-cookie-ssl | Ensure that role cookies use SSL
session-rewriting | Ensure session can't be rewritten
session-timeout | Ensure session timeout isn't too long (> 30 minutes)
session-regen | Ensure client can't regenerate expired sessions
trace | Ensure ASP.NET tracing is disabled
viewstate-validation | Ensure ASP.NET Viewstate validation is enabled
viewstate-encryption | Ensure ASP.NET Viewstate is encrypted
wcf-replay-detection | Ensure WCF replays are detected
wcf-metadata | Ensure WCF service metadata can't be sent to the client
wcf-exception-detail | Ensure WCF faults don't send detailed exception stack traces to the client
