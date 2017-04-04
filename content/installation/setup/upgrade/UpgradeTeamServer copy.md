<!--
title: "How to Upgrade Contrast Team Server"
description: "Guidelines for upgrading the EOP TeamServer"
tags: "TeamServer installation troubleshooting"
-->

## Getting Started
To upgrade your on premises Contrast Team Server installation:

* Log in to Contrast Hub (https://hub.contrastsecurity.com/h)
* Download the latest version of Contrast for the OS you're using
* Before you launch the installer, ensure that: 
 * The current version of Team Server is running
 * Whether the current version of Team Server installed was done with root privileges
* Run the installer with the save level of privileges as the previous install
* Follow its prompts - TeamServer will restart on its own when necessary 

Your Team Server will now apply any needed upgrades to your database and Contrast data on it's first boot.

It is difficult for us to make any assumptions about the data stored in an On-Premise database, so while it is extremely rare it is possible that the upgrade process can encounter errors. In the event you encounter an error while upgrading your Team Server the best option is to roll-back to the previous version and restore your database to the state prior to the upgrade process then open a ticket and we will assist you to resolve the errors that you encountered during upgrade. 
