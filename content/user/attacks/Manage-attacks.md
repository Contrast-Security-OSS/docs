
<!--
title: "Manage Attacks"
description: "view and manage attacks in UI"
tags: "user attacks manage ui"
-->

View and manage attacks in your organization... 

## View attacks

<a href="assets/images/Attacks-page.png" rel="lightbox" title="View attacks"><img class="thumbnail" src="assets/images/Attacks-page.png"/></a>

Go to the **Attacks** tab in the **Attacks** page to view all attacks that have occurred in your organization. Contrast breaks each attack into the following columns. 

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

<a href="assets/images/Attack-overview.png" rel="lightbox" title="Attack Overview"><img class="thumbnail" src="assets/images/Attack-overview.png"/></a>

In the **Notes** tab, view more details including the **Rate of Events**, **Severity** and **Attacker**. 

<a href="assets/images/Attack-notes.png" rel="lightbox" title="Attack Notes"><img class="thumbnail" src="assets/images/Attack-notes.png"/></a>


## Manage Attacks 




