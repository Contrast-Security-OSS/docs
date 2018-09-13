<!--
title: "Contrast Service Overview"
description: "Troubleshooting Contrast Service"
tags: "installation service agent troubleshooting"
-->

The Contrast Service enables communication between multi-process dynamic language agents (e.g. Ruby and Python) and the webserver agent and the Contrast UI.

## About Contrast Service

The Contrast service is a stand-alone executable that's used by the ruby and python agents to communicate with the Contrast UI. It is responsible for passing configuration options to the agent and to aggregate and send information from the agent back to the Conrast Ui. 

It also is a core component of the NGINX webserver agent. In that configuration it listens for requests to the NGINX webserver and processes requests for potential attacks before allowing the request to proceed to the proxied web application. 

<a href="assets/images/Service-arch.png" rel="lightbox" title="Contrast Service architecture"><img class="thumbnail" src="assets/images/Service-arch.png"/></a>

## Use the Service

The Contrast Serice is compiled for various supported architectures: Linux 64bit, Macintosh 64bit and Windows 64bit. The Contrast Service is packaged with the Ruby and Python agents and starts automatically when the instrumented application is started. The Contrast Service can also be started independently for use with the webserver agent when installed with the RPM or Debian packages.
