
<!--
title: "Contrast .NET Core Agent Rules Support"
description: "Assess and Protect rules supported by the Contrast .NET Core agent"
tags: "installation agent .NET Core windows assess protect rules"
-->


The following Assess and Protect rules are or will be supported by the .NET Core agent, as noted. Security rules that are currently supported by the .NET Framework, but are either not supported by the .NET Core agent or not applicable to it, are also noted.

## Assess Rules

Assess rules supported in .NET Core:

* autocomplete-missing
* cache-controls-missing
* clickjacking-control-missing
* cmd-injection 
* crypto-bad-mac 
* crypto-bad-ciphers 
* crypto-weak-randomness 
* csp-header-missing
* csp-header-insecure
* hsts-header-missing
* httponly
* insecure-auth-protocol
* ldap-injection
* reflected-xss 
* path-traversal
* parameter-pollution
* secure-flag-missing
* sql-injection 
* unvalidated-redirect 
* xcontenttype-header-missing
* xpath-injection
* xxe 
* xxssprotection-header-disabled


Assess rules that may be supported in the future:

* authorization-missing-deny
* authorization-rules-misordered
* cache-control-disabled
* compilation-debug
* cache-control-disabled
* cookies-flag-missing
* custom-errors-off
* header-injection
* header-checking-disabled
* http-only-disabled
* log-injection
* ldap-injection
* max-request-length
* plaintext-conn-strings
* request-validation-disabled
* role-manager-protection
* role-manager-ssl
* session-regenerate
* session-rewriting
* session-timeout
* stored-xss
* trace-enabled
* trust-boundary-violation
* unvalidated-forward
* version-header-enabled
* weak-membership-config


Assess rules that aren't applicable to .NET Core and won't be supported: 

* event-validation-disabled
* forms-auth-protection
* forms-auth-redirect
* forms-auth-ssl
* request-validation-control-disabled
* trace-enabled-aspx
* viewstate-encryption-disabled
* viewstate-mac-disabled
* wcf-detect-replays
* wcf-exception-details
* wcf-metadata-enabled

## Protect Rules

Protect rules supported in .NET Core:

* cmd-injection
* reflected-xss
* path-traversal 
* sql-injection 
* xxe 


Protect rules that will be supported in the future:

* method-tampering
* untrusted-deserialization

