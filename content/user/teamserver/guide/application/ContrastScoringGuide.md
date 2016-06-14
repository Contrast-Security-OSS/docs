<!--
title: "Contrast Scoring Guide"
description: "Guide to Contrast scoring"
tags: "TeamServer application scoring guide"
-->

Contrast provides letter grades to let you know how the application is performing in general. The grade represents an aggregate score comprising how much of the application has been exercised, as well as the amount and seriousness of the vulnerabilities that have been unearthed during the interactive analysis process (security).

Below is a sample score from when we run Contrast on the [WebGoat](https://code.google.com/p/webgoat/) application, a purposefully vulnerable application maintained by [OWASP](https://www.owasp.org/index.php/Main_Page).

<br/>
<a href="assets/images/KB1-d10_1.png" rel="lightbox" title="Contrast Score"><img class="thumbnail" src="assets/images/KB1-d10_1.png"/></a>
<br/>
The overall application score is the average of your application's **Library Score** and its **Custom Code Score**. In this example, the **Library Score** is **85** and the **Custom Code Score** is **68**. Therefore, the overall Contrast score is **77**. Scores are calculated as follows:

>**Library Score**<br/>
> 67 *Base Library Score*<br/>
>+18 *Bonus for Active CVE Shields*<br/>
> **85** Final Library Score<br/>

>**Custom Code Score**<br/>
> 56 *Base Custom Code Score*<br/>
>+12 *Bonus for Active Protection Rules*<br/>
> **68** Final Custom Code Score<br/>

>**Overall Score**<br/>
>85 + 68 = 153</br>
>153 / 2 = **77**<br/>

The darkened portion of the Library Score bar illustrates improvement attributed to active CVE Shield defenses deployed in the Production server environment. In the Custom Code Score bar it shows improvement from active Protection Rules deployed in the Production server environment.


## Library Score

The base **Library Score** is derived from the security your application sits on, in other words the frameworks and libraries that make up your application. Factors include the language, existence of known CVEs and the age of the libraries used.


## Custom Code Score

The base **Custom Code Score** is the security of the application that you have written. The score starts at 100 and the number and severity of the vulnerabilities present in your application can drive this score down.

Vulnerabilities are weighted differently depending on how likely they are to be exploited and how serious the effects of exploitation would be.

For instance, an SQL injection is considered **Critical**, because automated tools exist to exploit them without expertise, and an attacker can exfiltrate your entire database contents without any foreknowledge of your application or schema.

On the other hand, usage of an old, broken hashing algorithm like **SHA-1** is considered **Low**. Although it's been known to exhibit serious weaknesses, practical exploitation still requires the resources of a very skilled attacker and likely the backing of a large organization or nation state.

>**Custom Code Score** = 100 - *(No. Criticals * 20)* - *(No. Highs * 10)* - *(No. Mediums * 5)* - *(No. Lows * 1)*


## Suggestion for Improvement

* Enable Protection Rules and CVE Shields to remove protected vulnerabilities from the score calculation
* Remediate critical and high vulnerabilities in your custom code
* Address the vulnerable libraries
* Update out-of-date libraries


## Score to Grade Mapping

Contrast puts a lower cap of **35** on the overall Contrast score.

<a href="assets/images/KB1-d10_2.png" rel="lightbox" title="Score To Grade Mapping"><img class="thumbnail" src="assets/images/KB1-d10_2.png"/></a>


