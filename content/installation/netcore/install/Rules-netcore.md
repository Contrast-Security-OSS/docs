
<!--
title: "Contrast .NET Core Agent Rules Support"
description: "Assess and Protect rules supported by the Contrast .NET Core agent"
tags: "installation agent .NET Core windows assess protect rules"
-->


## .NET Core Agent Rule Support

The following rules are or will be supported by the .NET Core agent. Security rules that are currently supported by the .NET Framework, but are either not supported by the .NET Core agent or not applicable to it, are also noted.

### Assess

#### Assess rules supported in .NET Core:

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
* insecure-auth-protocol
* reflected-xss 
* path-traversal
* parameter-pollution
* secure-flag-missing
* sql-injection 
* unvalidated-redirect 
* xcontenttype-header-missing
* xxe 
* xxssprotection-header-disabled


#### Assess rules that may be supported in the future:

* authorization-missing-deny
* authorization-rules-misordered
* cache-control-disabled
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
* max-request-length
* plaintext-conn-strings
* role-manager-protection
* role-manager-ssl
* secure-flag-missing
* session-regenerate
* session-rewriting
* session-timeout
* stored-xss
* trace-enabled
* xpath-injection
* version-header-enabled
* weak-membership-config


#### Assess rules that are not applicable to .NET Core and won't be supported: 

* event-validation-disabled
* forms-auth-protection
* forms-auth-redirect
* forms-auth-ssl
* request-validation-control-disabled
* request-validation-disabled
* trace-enabled-aspx
* viewstate-encryption-disabled
* viewstate-mac-disabled
* wcf-detect-replays
* wcf-exception-details
* wcf-metadata-enabled

### Protect

#### Protect rules supported in .NET Core:

* cmd-injection
* reflected-xss
* path-traversal 
* sql-injection 
* xxe 


#### Protect rules that will be supported in the future:

* method-tampering
* untrusted-deserialization

