<!--
title: "Why doesn't Contrast for Eclipse render on my Ubuntu machine?"
description: "Why doesn't Contrast for Eclipse render on my Ubuntu machine?"
tags: "Eclipse"
-->

## Getting Started

* Ubuntu flavors of Linux are not set up correctly for use with internal SWT browsers that come bundled with Eclipse. The objective of this guide is to direct Eclipse to use Mozilla's XULRunner, without modifying any environmental variables.
* Navigate to [Eclipse's SWT FAQ](http://www.eclipse.org/swt/faq.php#browserlinux)
* Identify the newest version of XULRunner compatible to your version of Eclipse. For example Eclipse 4.4 and newer (Luna) can use any 24.x version.
* Navigate to the [Mozilla XULRunner](http://ftp.mozilla.org/pub/mozilla.org/xulrunner/releases/) releases directory
* Navigate to the folder for the version identified in step 2. For our example 24.0/ is a fine candidate.
* Navigate to the runtimes folder and download the ***xulrunner-XX.X.en-US.linux-i686.tar.bz2*** for 32-bit systems or ***xulrunner-XX.X.en-US.linux-x86_64.tar.bz2*** for 64-bit systems, where XX.X is the version identified in step 2. For our example, on a 64 bit system, this file is appropriate: http://ftp.mozilla.org/pub/mozilla.org/xulrunner/releases/24.0/runtimes/xulrunner-24.0.en-US.linux-x86_64.tar.bz2.
* Extract the downloaded files to your desired location, this will create a folder called xulrunner. 
* Edit the eclipse.ini file located in the root of the eclipse directory with your favorite text editor.
* Append ***-Dorg.eclipse.swt.browser.XULRunnerPath={path to xulrunner folder created in step 6}***, without braces, onto a new line at the end of the file, then save.
* Launch Eclipse and open the Contrast View - the plugin should now render correctly.
 
