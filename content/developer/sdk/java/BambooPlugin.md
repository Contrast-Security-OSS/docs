<!--
title: "Contrast Bamboo Plugin"
description: "Sample Bamboo plugin using the Contrast Java SDK"
tags: "Bamboo SDK Integration Java"
-->

## About The Contrast Bamboo Plugin 

Lorem ipsum.

## Installation
The Bamboo Plugin is available on the Atlassian Marketplace. 

## Build It Yourself
If you'd like to build the plugin yourself, you'll need to first install the [Atlassian SDK](https://developer.atlassian.com/docs/getting-started/set-up-the-atlassian-plugin-sdk-and-build-a-project). Using the `atlas-package` command from within the project directory, generate the plugin jar file. To install the plugin on a Bamboo environment, use the tutorial [here](https://confluence.atlassian.com/bamboo/installing-a-plugin-289277265.html).

## Configuration
To create a teamserver profile for use in a task, login to an administrator account and open the administrator overview page. On the sidebar, under Add-ons, open "Teamserver Profiles". From here, you can create, modify, or delete profiles. Once you have created a profile, you will be able to run a the TeamServer Threshold Task.

## Task Building
Under the build plan for a project, add a task in the usual way. Contrast TeamServer Configuration Task will now be an option. Upon selection, you will be prompted to select a profile from the dropdown menu. Select a profile, then type in the application with which you'd like to test against. From there, select the minumum threshold of vulnerabilities that should trigger a build failure. Select the severity and/or the type of vunerability. Either can be left as none, and the task will only test against the option selected.