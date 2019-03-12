<!--
title: "Contrast .NET Core Agent Supported Technology"
description: "Contrast .NET Core agent supported technology"
tags: "installation agent .NET Core windows azure supported technology"
-->

## .NET Core for Windows

The Contrast .NET Core agent supports analysis of web applications built on the following technologies.

| Technology                 | Supported versions                       |
| -------------------------- | ---------------------------------------- |
| .NET Core Runtime             | 2.1 and above |
| CLR                        | CoreCLR |
| Server container                | Kestrel                |
| Hosting container          | <li>Self-hosted</li><br /> <li>IIS</li><br /><li>IIS Express</li>
| Operating System           | <li>Windows 7, 8, 10</li><br/> <li>Windows Server 2008 R2, 2012, 2012 R2, 2016</li><br/><li>Azure Virtual Machines, Cloud Services, Mobile Services - TBD</li><br/><li> Azure App Service - TBD </li> |
| Processor Architecture     | The agent can be installed on both 32-bit and 64-bit systems. On 64-bit systems, you can use the agent to analyze both 32-bit and 64-bit web applications. |
| Web Application Frameworks | ASP.NET Core |

> * **Mono** runtime isn't supported because Mono doesn't have a **Profiler API**. 
> * Linux is currently not supported.
> * Self-contained deployments are currently not supported.
> * Framework-dependent executables are currently not supported.
> * .NET Core >= 3.0 is currently not supported.
> * ASP.NET Core applications running under the .NET framework aren't supported.

<!-- ## .NET Core Rule support.  This could be in its own section -->

## .NET Core Agent Rule Support

Many of the security rules currently supported by the .NET Framework are not supported by the .NET Core agent or are not applicable.  The following lists the current and upcoming rule support.

### Assess

The following rules are supported in .NET Core:

* cmd-injection 
* crypto-bad-mac 
* crypto-bad-ciphers 
* crypto-weak-randomness 
* reflected-xss 
* path-traversal
* sql-injection 
* unvalidated-redirect 
* xxe 

These rules are not supported in .NET Core yet:

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


The following rules are not applicable to .NET Core and will not be supported

* event-validation-disabled
* request-validation-control-disabled
* request-validation-disabled
* viewstate-encryption-disabled
* viewstate-mac-disabled

### Protect

These Protect rules are supported in .NET Core:

* cmd-injection
* reflected-xss
* path-traversal 
* sql-injection 
* xxe 


The Protect rules are not supported yet:

* method-tampering
* untrusted-deserialization
