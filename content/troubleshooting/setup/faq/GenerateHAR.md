<!--
title: "Generating a HAR File"
description: "Instructions on How To Generate a HAR File For Front End Debugging"
tags: "troubleshoot setup FAQ TeamServer HAR debug"
-->


If you are facing a complex issue within TeamServer, we may request that you send us a HAR file so that we can attempt to get to the root of the problem faster. 

## What Is A HAR File?
A HAR file specifically helps troubleshoot the following issues:
* Slow page load
* Timeout when performing certain tasks
* Incorrect page format
* Missing information after rendering


## How To Generate A HAR File

For this tutorial we will be using Google Chrome. If you do not already have it installed, you can get it [here](https://www.google.com/chrome/browser/desktop/index.html).

1. Open Google Chrome and navigate to the page where the issue is occurring.
2. From the Chrome menu bar select **View > Developer > Developer Tools** or right click and select **Inspect Element**.
3. From the panel that opens at either the bottom or side of your screen, select the **Network** tab.
4. Look for a round **Record** button in the upper left corner of the Network tab, and make sure it is red. If it is grey, click it once to start recording.
5. Check the box next to **Preserve log**.
6. Now try to reproduce the issue that you were experiencing before, while the network requests are being recorded.
7. Once you have reproduced the issue, right click anywhere on the grid of network requests, select **Save as HAR with Content**, and save the file to your computer.
8. Upload your HAR file to your ticket or attach it to your email so that we may analyze it.


Below is an animated GIF of the process.
<BR>
<a href="assets/images/generatehar.gif" rel="lightbox" title="Generating A HAR File"><img class="thumbnail" src="assets/images/generatehar.gif"/></a>


