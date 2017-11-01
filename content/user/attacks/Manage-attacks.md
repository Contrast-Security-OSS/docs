
<!--
title: "Manage Attacks"
description: "view and manage attacks in UI"
tags: "user attacks manage ui"
-->

View details on past and active attacks in your organization, and manage them with options such as tagging, suppressing and exporting details into a spreadsheet. 

## View attacks

<a href="assets/images/Attacks-page.png" rel="lightbox" title="View attacks"><img class="thumbnail" src="assets/images/Attacks-page.png"/></a>

Go to the **Attacks** tab in the **Attacks** page to view all attacks that have occurred in your organization. Contrast organizes the components of each attack into the following columns. 

* **Source IP:** The IP address from which the attack is originating. 

* **Status:** The current status of the attack. 

 An attack status is determined by the status of the attack events within the attack. The status is as "Probed" if all events have a "Probed" status, "Blocked" if all events have either a "Blocked" or "Probed" status, and "Exploited" if any events have an "Exploited" status.

* **Application:** Any applications that saw attack traffic from the IP address while the attack was active.

* **Server:** Any server that saw attack traffic from the IP address while the attack was active.

* **Rule:** Any attack type identified from the IP address while the attack was active.

* **Start:** The timestamp of the first attack event seen from the IP address during the attack timeframe.

* **End:** The timestamp of the last attack event seen from the IP address during the attack timeframe.

* **Events:** The number of attack events that comprise the attack.

### Attack details 
 
Click on the Source IP to view more details on the attack. In the **Overview** tab, view each attack event in the grid; click on each row to expand your view for more details. Under **Attack Duration**, click the **See Timeline** link to see the exact time of each event. Use the dropdown menus and search field to find specific events. 

<a href="assets/images/Attack-overview.png" rel="lightbox" title="View the Attack Overview"><img class="thumbnail" src="assets/images/Attack-overview.png"/></a>

In the **Notes** tab, view more details including the **Rate of Events**, **Severity** and **Attacker**. 

<a href="assets/images/Attack-notes.png" rel="lightbox" title="Attack Notes"><img class="thumbnail" src="assets/images/Attack-notes.png"/></a>

## Manage Attacks 

In the **Attacks** page, use the row dropdown menu to [blacklist an IP address](admin-policymgmt.html#ip), suppress the attack, or export the attack details into a CSV or XML-formatted spreadsheet. Tag or suppress multiple attacks by checking the boxes in the grid rows, and selecting the appropriate icons in the batch action menu above the grid. 

> **Note:** If you choose to add an blacklist an IP address, you must enter a name for the new policy and choose a timeframe for expiration in the dialog that appears.  

### Manage attack events

In an attack **Overview** tab, use the row dropdown menu to [add an exclusion](admin-policymgmt.html#exclude), [create a virtual patch](admin-policymgmt.html#patch), [blacklist an IP address](admin-policymgmt.html#ip), [add a Protect Rule](admin-policymgmt.html#protect) or suppress the event. Tag or suppress multiple attack events by checking the boxes in the grid rows and selecting the appropriate icons in the batch action menu above the grid. 

You can also perform each of these actions by clicking on the event and selecting the appropriate icon. 

<a href="assets/images/Attack-event-details.png" rel="lightbox" title="View attack event details"><img class="thumbnail" src="assets/images/Attack-event-details.png"/></a>


