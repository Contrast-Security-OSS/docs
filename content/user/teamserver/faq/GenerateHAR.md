## How To Generate HAR File For Front End Debugging

If you are facing a complex issue within TeamServer we may request that you send us a HAR file so that we can attempt to get to the root of the problem faster. 

### What is a HAR file?
A HAR file specifically helps troubleshooting the following issues:
* slow page load
* timeout when performing certain tasks
* incorrect page format
* missing information after rendering


### How To Generate A HAR File

For this tutorial we will be using Google Chrome, if you do not already have it installed you can install it [here](https://www.google.com/chrome/browser/desktop/index.html).

1. Open Google Chrome and go to the page where the issue is occurring.
2. From the Chrome menu bar select View > Developer > Developer Tools or right click and select Inspect Element.
3. From the panel that opens at either the bottom or side of your screen, select the Network tab.
4. Look for a round Record button in the upper left corner of the Network tab, and make sure it is red. If it is grey, click it once to start recording.
5. Check the box next to Preserve log.
6. Click the Clear button to clear out any existing logs from the Network tab.
7. Now try to reproduce the issue that you were experiencing before, while the network requests are being recorded.
8. Once you have reproduced the issue, right click anywhere on the grid of network requests, select Save as HAR with Content , and save the file to your computer.
9. Upload your HAR file to your ticket or attach it to your email so that we may analyze it.


Below is an animated gif of the process.
<a href="assets/images/generatehar.gif" rel="lightbox" title="Generate HAR File"><img class="thumbnail" src="assets/images/generatehar.gif"/></a>


