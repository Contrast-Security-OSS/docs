<!--
title: "What Information Does Contrast Capture?"
description: "Explanation of what information Contrast captures"
tags: "TeamServer troubleshooting"
-->

## Does Contrast capture sensitive information?

Contrast collects a lot of application analytics - stuff like URLs, file paths, jar names, and other relatively non-sensitive stuff. It also sends all the data related to security-relevant events. If a method occurs that is an integral part of a vulnerability, all the aspects of that event - the object, return value, parameters, and more are sent back to the Contrast site for you to analyze. Contrast has no way of knowing if any of this data is sensitive or not.

For example, let's imagine there is an XSS vulnerability in the login code. It's likely that the username and password will be sent back as part of the XSS trace. If Contrast is installed on a **Development** or **QA** instance as recommended, then hopefully there isn't any production or sensitive data involved.

