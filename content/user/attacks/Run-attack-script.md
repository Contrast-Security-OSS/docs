
<!--
title: "Run an Attack Script"
description: "Run an attack script with Contrast"
tags: "user attack events run script ui"
-->

Run an attack script to see how Contrast captures attack data while protecting your applications. 

## How It Works 

The following guide is written for customers using Nikto Web Scanner, an open-source web server scanner. While the Nikto scan is running, your Contrast agent will identify the attack and alert you in the UI.

> **Note:** The attack script will also work on an [out-of-the-box application](installation-apps.html#sample-app), such as WebGoat, which allows you to observe how Contrast works in your environment. 

## Before You Start

* Onboard an application.
* Download and [setup a Contrast agent](installation-setup.html#quick-start). 
* Make sure that [Contrast Protect is enabled](admin-manageorgs.html#assess-protect). 
* Download the [latest version of Nikto](https://cirt.net/Nikto2).
* Verify that Nikto is working correctly by running `./nikto.pl`. You should see the default help message as a result. 
* [Download and install Perl](http://learn.perl.org/installing/), which is required by Nikto.
  * If you think that you already have Perl installed, run `perl -v` to verify. 

## Run the Script

* Log in to your Contrast application. 

> **Note:** Verify that the scanning IP address isn’t blacklisted. 

* In a terminal window, run the following command to initiate the scan: 

```
./nikto.pl -useragent “MyAgent (Demo/1.0)” -D V -T 9 -h http://www.your-site.com
```

> **Notes:**
 * Note here
 * The `-T 9` option tunes the scan to only test for SQL Injection.

* Observe the attack events in the terminal window. 
* Once the script runs, Contrast will alert you of the new attack in the UI and by email. 
* Click on the alert or navigate to the **Attacks** tab in the Attacks page. 
* Details of the incident will show up in the **Attacks** grid. Click on the **Source IP** link in the grid row to go to the attack’s details page, which displays more specific information on each attack event. 


## Learn More 

* [Monitor Attacks](user-attacks.html#monitor)
* [Analyze Attacks](user-attacks.html#analyze-attacks)


