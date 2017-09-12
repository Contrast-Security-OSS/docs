<!--
title: "Generate a HAR File"
description: "How to Generate a HAR File for Front-End Debugging"
tags: "troubleshoot setup FAQ HAR debug"
-->


If you're facing a complex issue in the Contrast interface, Contrast might request that you send a HAR file to help the support teams fix the problem more quickly. 

## What It Is 

A HAR file helps troubleshoot the following issues:
* Slow page load
* Timeout when performing certain tasks
* Incorrect page format
* Missing information after rendering


## Generate the File

The following instructions are written for users on Google Chrome. If you don't already have the browser installed, you can get it [here](https://www.google.com/chrome/browser/desktop/index.html).

* Open Google Chrome and navigate to the page where the issue is occurring.
* From the Chrome menu bar select **View > Developer > Developer Tools**, or right click on the page and select **Inspect Element**.
* From the panel that opens at either the bottom or side of your screen, select the **Network** tab.
* Look for a round **Record** button in the upper left corner of the **Network** tab, and make sure it's red. If it's gray, click it once to start recording.
* Check the box next to **Preserve log**.
* Try to reproduce the issue that you were experiencing while the network requests are recording.
* Once you've reproduced the issue, right click anywhere on the grid of network requests, select **Save as HAR with Content**, and save the file to your computer.
* Upload your HAR file to your ticket or attach it to an email so that Contrast can analyze it.

An animated GIF of the process:

<a href="assets/images/generatehar.gif" rel="lightbox" title="Generating A HAR File"><img class="thumbnail" src="assets/images/generatehar.gif"/></a>


