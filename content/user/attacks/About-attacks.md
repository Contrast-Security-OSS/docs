


The Attacks page contains the record of all application attacks seen by applications with Contrast Protect enabled. These attacks include both monitored attacks as well as blocked attacks.

## Attack composition

Attacks are groups of attack events (hyperlink to attack events description) coming from a single IP address over a sustained period of time. An attack can be comprised of events that target multiple applications, multiple servers as well as multiple attack types (such as SQL Injection, Command Injection, specific CVEs, etc). An attack ends once Contrast agents no longer see any attempted attacks traffic for a period of time. Once an attack is closed, if Contrast sees new attack traffic from that same IP address, a new attack will be created to track this attack.

What do column names mean?

* Source IP: the IP address the attack is originating from

* Status: shows the current status of the attack. An attacks status is determined by the status of the attack events within the attack. An attack's status will show as "Probed" if all the events have the status "Probed", "Blocked" if all the events are either "Blocked" or "Probed" status, and "Exploited" if any of the events in an attack have the "Exploited" status.

* Application: Any applications that saw attack traffic from the IP address during the time the attack was active.

* Server: Any server that saw attack traffic from the IP address during the time the attack was active.

* Rule: Any attack type identified from the IP address during the time the attack was active.

* Start: Timestamp of the first attack event seen from the IP address during the attack timeframe.

* End: Timestamp of the last attack event seen from the IP address during the attack timeframe.

* Events: the number of attack events which comprise the attack.
