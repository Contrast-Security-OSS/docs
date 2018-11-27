<!--
title: "Contrast Service Overview"
description: "Troubleshooting Contrast Service"
tags: "installation service agent troubleshooting"
-->

The Contrast Service enables communication between the Contrast UI and one of the multi-process dynamic language agents (e.g., Ruby and Python). <!-- or the Proxy agent. -->

## About Contrast Service

The Contrast Service is a stand-alone executable that's used by the [Ruby](installation-ruby.html#ruby-overview) and [Python](installation-python.html#python-overview) agents to communicate with the Contrast UI. It's responsible for passing configuration options to the agent, and to aggregate and send information from the agent back to the Contrast UI. 

<!-- It's also a core component of the NGINX Proxy agent. In a Proxy agent configuration, the Service listens for requests to the NGINX Webserver and processes requests for potential attacks before allowing the request to proceed to the proxied web application. 
 -->

<a href="assets/images/Service-arch.png" rel="lightbox" title="Contrast Service architecture"><img class="thumbnail" src="assets/images/Service-arch.png"/></a>


## Use the Service

The Contrast Service is compiled for various supported architectures: Linux 64-bit, Macintosh 64-bit and Windows 64-bit. The Service is packaged with the Ruby and Python agents, and starts automatically when the instrumented application is started. 

<!-- You can also start the Service independently for use with the Proxy agent when installed with the RPM or Debian packages.
 -->
