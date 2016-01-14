<!--
title: "IIS Express Configuration"
description: "Instructions for configuration IIS Express to scan different configuration files or add custom commands."
-->

Click the "Configure Sites..." link on the IIS Express page to bring up the IIS Express Configuration page

<a href="assets/images/iisexpress_configure_callout.png" rel="lightbox" title="Configure IIS"><img class="thumbnail" src="assets/images/iisexpress_configure_callout.png"/></a>


### Add New IIS Express Configuration File

<a href="assets/images/iisexpress_configure_page.png" rel="lightbox" title="Configure IIS"><img class="thumbnail" src="assets/images/iisexpress_configure_page.png"/></a>

* Click the "Add" button under Config Files and browse to another IIS Express configuration file from which to load applications.  Visual Studio 2015 saves these files ```[Solution Directory]\.vs\config\applicationhost.config```
* Click "OK" to save your changes.  
  The file you specified will be scanned and sites in the file will be added to the IIS Express application list.


### Add New IIS Express Command

IIS Express provides an option to run sites from the command line without using up a configuration file. 

See [IIS Express Command Line Documentation](http://www.iis.net/learn/extensions/using-iis-express/running-iis-express-from-the-command-line) for more information.  

You can save a command line as an entry in the Contrast agent.

* Type a "Site Name" identifier and the the command parameters in the Manual Commands section. Click Add to add it to the list.
* Click "OK" to save your changes.  
  A site with the name you added will be shown in the IIS Express application list.  Clicking Start will run iisexpress.exe witht he parameters you specified and attach the agent to the process.