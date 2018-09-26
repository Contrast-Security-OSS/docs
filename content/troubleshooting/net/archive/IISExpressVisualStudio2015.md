<!--
title: "Visual Studio 2015 IIS Express Configuration"
description: "Troubleshooting instructions for debugging IIS Express sites created with Visual Studio 2015 or above."
tags: "troubleshoot configuration visual studio agent .Net"
-->
## "I'm using Visual Studio 2015 and don't see my development site under IIS Express."

The Contrast .NET agent normally reads the global IIS Express configuration file to get the list of available IIS Express sites.  This file is located in *%Documents%\IISExpress\config\applicationhost.config*.  All versions of Visual Studio prior to 2015 had put applications into this file.  However, Visual Studio 2015 creates a separate configuration file and stores it in a hidden subfolder of your project.  

You can fix this in two ways: 

1. Configure the Contrast .NET Agent to scan a new IIS Express configuration file.  See link at the end of this article.
> **Note:**
   Visual Studio 2015 stores its configuration file in the following location: <br> ```[Solution Directory]\.vs\config\applicationhost.config```

2. Configure the Contrast .NET Agent to allow IIS Express to run your application. See link at the end of this article.

3. Change your Visual Studio 2015 project configuration to use the global IIS Express configuration.  
> **Note:**
   To do this, open your *.csproj* file and add or edit this property.

   ```xml
   <UseGlobalApplicationHostFile>True</UseGlobalApplicationHostFile>
   ```

## More Information 

* [IIS Express Configuration Instructions](installation-netconfig.html#iis)
* [Visual Studio forum](http://visualstudio.uservoice.com/forums/121579-visual-studio/suggestions/6079923-store-project-related-information-in-vs-folder-to)
