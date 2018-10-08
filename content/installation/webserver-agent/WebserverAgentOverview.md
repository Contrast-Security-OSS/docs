# Overview

The Contrast Webserver Agent is a Protect-only agent that provides runtime protection in a app-language/framework agnostic way by analyzing http request and response data at the web-server-level rather than the application level.

## About Webserver Agent

The Contrast Webserver Agent provides runtime protection of HTTP ingress and egress traffic as it is processed by a web server. The most common situation is a web server that is running in reverse proxy mode. In this case, the Webserver Agent is transparent to the application behind the reverse proxy.

Since the Webserver Agent integrates into the webserver and not the specific application, it is agnostic to the actual language being used in the web application it is protecting.  Thus it can be used to protect a variety of application technologies such as: PHP, Go, Perl, Groovy, etc.  The Webserver Agent is targeted to specific webserver products and versions. These are specified in the Supported Technologies __XXX: need link__ page.

From its position in the technology stack, the Webserver Agent has a high level view of the HTTP communication that is similar to traditional WAF and Next Generation WAF technologies.

__XXX: Insert diagram graphic from https://contrast.atlassian.net/browse/CONTRAST-26578__ 

## Use the Agent

To start protecting your application with the Webserver Agent, start with our Installation _XXX: need link to WebserverAgentInstall_ instructions for obtaining the software.