<!--
title: "How To Update The TeamServer IP Address And Hostname"
description: "Instructions for updating the TeamServer IP address and hostname"
tags: "TeamServer EOP IP troubleshooting"
-->

Updating the TeamServer's IP address is fairly straightforward. Whether you moved the installation or had to change the hostname or IP address, letting TeamServer know can be done in a few simple steps:

* Log in as the SuperAdmin
* Browse to the **System Settings** page
* Select **General Settings** 
* Change the TeamServer URL to ***IP:port/Contrast***
* Click ***Save Configuration***
* [Restart TeamServer](user_tsfaq.html#restart) to apply the changes


>**Note:** You will have to replace your agents so they know which new address to report to
