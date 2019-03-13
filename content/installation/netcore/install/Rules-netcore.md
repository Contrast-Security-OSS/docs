
<!--
title: "Contrast .NET Core Agent Rules Support"
description: "Assess and Protect rules supported by the Contrast .NET Core agent"
tags: "installation agent .NET Core windows assess protect rules"
-->


## .NET Core Agent Rule Support

The following rules are or will be supported by the .NET Core agent. Security rules that are currently supported by the .NET Framework, but are either not supported by the .NET Core agent or not applicable to it, are also noted.

### Assess

Assess rules supported in .NET Core:

* cmd-injection 
* crypto-bad-mac 
* crypto-bad-ciphers 
* crypto-weak-randomness 
* reflected-xss 
* path-traversal
* sql-injection 
* unvalidated-redirect 
* xxe 

Assess rules that will be supported in the future:

* compilation-debug
* cache-control-disabled
* cache-control-missing
* cookies-flag-missing
* custom-errors-off
* header-injection
* httponly
* http-only-disabled
* insecure-auth-protocol
* log-injection
* ldap-injection
* plaintext-conn-strings
* version-header-enabled
* max-request-length
* secure-flag-missing
* session-regenerate
* session-rewriting
* session-timeout
* stored-xss
* xpath-injection


The following rules aren't applicable to .NET Core and won't be supported: 

* event-validation-disabled
* request-validation-control-disabled
* request-validation-disabled
* viewstate-encryption-disabled
* viewstate-mac-disabled

### Protect

Protect rules supported in .NET Core:

* cmd-injection
* reflected-xss
* path-traversal 
* sql-injection 
* xxe 


Protect rules that will be supported in the future:

* method-tampering
* untrusted-deserialization

