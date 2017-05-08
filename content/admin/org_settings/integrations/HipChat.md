<!--
title: "HipChat Integration"
description: "Integrating HipChat with Contrast"
tags: "Admin organization settings integrations hipchat"
-->


Contrast supports integration with HipChat! With this connection you can receive notifications from Contrast in your configured HipChat channel using a format similar to in-app notifications.

## Setup

On the HipChat website, log in as a user with at least **Send Notification** and **View Room** scopes. Typically this is an admin user.

* Edit your profile and click **API access**
* Create a new token and add at least the **Send Notification** and **View Room** scope
* Copy the token created

To connect in Contrast:

* Navigate to the **Integrations** tab under **Organization Settings**
* Click **Connect** within the HipChat row
* Name the integration, paste the token into the token input field, and select the appropriate room from the dropdown
* Select the application(s) for which you want to enable notifications
* Click **Save**

You are connected!

