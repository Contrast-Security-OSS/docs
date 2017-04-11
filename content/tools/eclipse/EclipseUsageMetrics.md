<!--
title: "Is there a way to turn off the collection of usage metrics?"
description: "Is there a way to turn off the collection of usage metrics?"
tags: "tools eclipse report metrics"
-->

## Getting Started
Contrast for Eclipse includes an option to disable its default function of collecting and sending usage metrics back to the developers. For more information on these usage metrics, see [Reported Usage Metrics](dev_eclipsefaq.html#report).

This preference can be toggled in Eclipse by navigating to **File > Preferences > Contrast**.

Users who wish to opt out in advance need to modify the preference before the plugin is initialized. To do this, there are a couple of viable options: modifying the ***.prefs*** file or using a proprietary plugin to directly modify preferences through API calls.

### Modifying the .prefs files:
This method is probably the most straightforward and involves implementing a two-step process:
* Locate the ***.prefs*** file associated with your installation of the plugin. If the plugin has not been started yet, then this file probably does not exist. It should be created and placed in the correct location: ```<workspace-location>/.metadata/.plugins/org.eclipse.core.runtime/.settings/```
* The file to edit or create will be called ***com.contrastsecurity.eclipse.prefs***
* Modify the key for the preference you wish to override and change its value as desired. In this case: ```report_usage=false```

This can be done manually for each installation of the plugin or can be scripted for scalability across multiple installations and users.

### Using the Eclipse API to override preferences:
This method takes more effort to implement, but can be much more powerful. Because it involves the creation of an Eclipse plugin, this approach is more involved and only recommended if it is necessary to have fine-grained control over how users manage their preferences, or to manage the preferences many users/installations in a scalable way. It can be an appealing solution for organizations that manage a central p2 repository for Eclipse and would like to modify the preferences for multiple plugins and users.

To get started, it is necessary to use the Eclipse APIs to get a reference to the Contrast plugin's preference store:
````
IPreferenceStore contrastPrefs = new ScopedPreferenceStore(new InstanceScope(), "com.contrastsecurity.eclipse");
````
A preference store is simply the map Eclipse uses to store a plugin's preferences as key-value pairs. With a handle on the preference store, it is possible to do things like add a preference change listener to prevent users from toggling the preference on. From here, simply set the desired value for the preference:
````
contrastPrefs.setValue("report_usage", false);
````
The above code says "modify the following preference for this workspace." The scope parameter can be modified to any IScopeContext for more personal control over what scope the preference change will impact. For more information, see [Eclipse FAQ: What is a preference scope?](https://wiki.eclipse.org/FAQ_What_is_a_preference_scope%3F)

It is recommended that this code be run on Eclipse startup, before the Contrast plugin is initialized, by calling it from the plugin's Activator class.

For more information on modifying Eclipse preferences and best practices, read [this article](http://www.vogella.com/tutorials/EclipsePreferences/article.html#preferences_plugin.ini").

The following can be useful starting points for those who wish to implement such a plugin with no previous plugin development experience: 
* [Extending the Eclipse IDE - Plug-in development](http://www.vogella.com/tutorials/EclipsePlugIn/article.html)

* [Creating a Plug-in Project](http://help.eclipse.org/luna/index.jsp?topic=%2Forg.eclipse.rse.doc.isv%2Fguide%2Ftutorial%2FpdeProject.html)

## What Usage Metrics Does Contrast for Eclipse Report?
Contrast for Eclipse monitors user interaction with the plugin in order to help us make the tool as user friendly as possible. This allows us to focus on areas that developers find most useful, while helping us figure out how to make other features more accessible. Our goal is to use these metrics to better improve your experience with Contrast for Eclipse, and make securing your applications as painless as possible.

### What we collect:
* The IP address from which the plugin was downloaded
* The number and type of servers you're monitoring
* The number of applications you're monitoring
* The features within the plugin you are most using

### What we don't collect:
* The host names, IP addresses, or URLs of your servers
* The names of your applications
* The types of vulnerabilities in your code
* The libraries you're using in your code

We collect anonymized usage statistics to better improve your Contrast for Eclipse experience 
