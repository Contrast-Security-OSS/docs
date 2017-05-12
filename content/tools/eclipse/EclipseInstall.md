<!--
title: "Downloading Contrast for Eclipse"
description: "Instructions for Downloading and Installing Contrast for Eclipse"
tags: "tools Eclipse Download Installation Ubuntu"
-->

## Drag and Drop (Option 1)

The Contrast for Eclipse plugin can be found in the [Eclipse Marketplace](https://marketplace.eclipse.org/content/contrast-eclipse) by searching **Contrast for Eclipse**, or can be downloaded directly by dragging the preceding link into an active Eclipse workspace.
Once installed, you will have to restart Eclipse for the plugin to be loaded. You can then open the Contrast view (***Window > Show View > Other > Contrast Security > Contrast***) or start a server with Contrast (***Servers > Right click on your server > Start with Contrast***).

## Install New Software (Option 2)

<ol>
<li> In Eclipse, open the **Help** menu and select **Install New Software**. </li>
<li> Click **Add** and add https://eclipse.contrastsecurity.com/repository to your repositories. </li> 
<br>
<a href="assets/images/KB6-a02.png" rel="lightbox" title="Add Repository"><img class="thumbnail" src="assets/images/KB6-a02.png"/></a>

<li> Select the **Contrast Security** software and click **Next**. </li>
<li> Click **Next** and the accept the license agreement. </li>
<li> Click **Finish** and the plugin should begin to install. </li>
	* You may be prompted to install unsigned content. This is normal. In order to support older but not end of lifed versions of Eclipse, we are unable to sign the jar file.
<li> When prompted, restart Eclipse to complete the install. </li>
<li> If the view does not automatically open, you can find it under ***Window > Show View > Other > Contrast for Eclipse***. </li> 
</ol>

## Ubuntu

Ubuntu flavors of Linux are not set up correctly for use with internal SWT browsers that come bundled with Eclipse. The objective of this guide is to direct Eclipse to use Mozilla's XULRunner, without modifying any environmental variables.

<ol>
<li> Navigate to [Eclipse's SWT FAQ](http://www.eclipse.org/swt/faq.php#browserlinux). </li>
<li> Identify the newest version of XULRunner compatible to your version of Eclipse. For example Eclipse 4.4 and newer (Luna) can use any 24.x version.</li>
<li> Navigate to the [Mozilla XULRunner](http://ftp.mozilla.org/pub/mozilla.org/xulrunner/releases/) releases directory. </li>
<li> Navigate to the folder for the version identified in step 2. For our example, 24.0/ is a fine candidate. </li>
<li> Navigate to the runtimes folder and download the ***xulrunner-XX.X.en-US.linux-i686.tar.bz2*** for 32-bit systems or ***xulrunner-XX.X.en-US.linux-x86_64.tar.bz2*** for 64-bit systems, where XX.X is the version identified in step 2. For our example, on a 64 bit system, this file is appropriate: http://ftp.mozilla.org/pub/mozilla.org/xulrunner/releases/24.0/runtimes/xulrunner-24.0.en-US.linux-x86_64.tar.bz2. </li>
<li> Extract the downloaded files to your desired location, this will create a folder called *xulrunner*. </li>
<li> Edit the *eclipse.ini* file located in the root of the eclipse directory with your favorite text editor. </li>
<li> Append ***-Dorg.eclipse.swt.browser.XULRunnerPath={path to xulrunner folder created in step 6}***, without braces, onto a new line at the end of the file, then save. </li>
<li> Launch Eclipse and open the Contrast View. The plugin should now render correctly. </li>
</ol>


