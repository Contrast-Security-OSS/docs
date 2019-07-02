<!--
title: "Level 2 Rules - Response-Based Rules"
description: "Information on .NET Response-Based Rules"
tags: "installation policy rules level agent .Net rules"
-->

The .NET agent will scan the response stream of your application for various security issues. You can disable some or all of these checks. Disabling all response-based checks will result in a small performance improvement for analyzed web applications.

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
<br>

Setting | Description
:------ |:-----------
clickjacking-controls | Ensure that frame-breaking scripts or headers are present
cache-controls | Ensure page caching is disabled with header or meta tags
form-autocomplete | Ensure form controls have autocomplete disabled
form-parameter-pollution | Ensure form tags prevent parameter pollution by including an action attribute
http-insecure-auth-protocol | Ensure that insecure auth protocols (Basic or Digest) are not used
httponly-cookies | Ensure cookies are HttpOnly
session-rewriting | Ensure session cannot be rewritten because of cookie-less sessions
