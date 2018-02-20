<!--
title: "Contrast Scoring Guide"
description: "Guide to Contrast scoring"
tags: "user TeamServer application scoring guide grade"
-->

Contrast gives letter grades to your applications so that you can gauge their general performance. The grade represents an aggregate score based on the amount of the application that's been exercised as well as the amount and seriousness of the vulnerabilities that have been detected during the analysis process.

## Overall Score

The score show below is the result of running Contrast on the [WebGoat](https://code.google.com/p/webgoat/) application, a purposefully vulnerable application maintained by [OWASP](https://www.owasp.org/index.php/Main_Page).

<br/>
<a href="assets/images/KB1-d10_1.png" rel="lightbox" title="Contrast Score"><img class="thumbnail" src="assets/images/KB1-d10_1.png"/></a>
<br/>
The overall application score is the average of your application's **Library Score** and **Custom Code Score**. In this example, the **Library Score** is **85** and the **Custom Code Score** is **68**. Therefore, the overall **Contrast Score** is **77**. Scores are calculated as follows:

>**Library Score**<br/>
> *(Base Library Score)* + *(bonus for active CVE shields)* = *(final Library Score)* <br/>
> 67+18 = **85**<br/>

>**Custom Code Score**<br/>
> *(Base Custom Code Score)* + *(bonus for active Protection Rules)* = *(final Custom Code Score)*<br/>
> 56+12 = **68** <br/>

>**Overall Score**<br/>
>85+68 = 153</br>
>153/2 = **77**<br/>

The darker portion of the Library Score bar illustrates improvement attributed to active CVE Shield defenses deployed in the Production server environment. In the Custom Code Score bar, it shows improvement from active Protection Rules deployed in the Production server environment.

## Library Score

The base [Library Score](user-libraries.html#score-lib) is derived from the security on which your application sits (i.e., the frameworks and libraries that make up your application). Security factors include language, existence of known CVEs and the age of the libraries used.

## Custom Code Score

The base **Custom Code Score** is the security of the application that you've written. The score starts at 100; the number and severity of the vulnerabilities present in your application drive this score down.

Vulnerabilities are weighted differently depending on how likely they are to be exploited and how serious the effects of exploitation would be.

> **Example:** 
> An SQL injection is considered **Critical** because automated tools exist to exploit them without expertise, and an attacker can exfiltrate your entire database contents without any foreknowledge of your application or schema.

On the other hand, using an old, broken hashing algorithm like **SHA-1** is weighted as **Low**. Although it's been known to exhibit serious weaknesses, practical exploitation requires the resources of a very skilled attacker and likely the backing of a large organization or nation state.

>**Custom Code Score** = 100 - *(Number of Criticals &#8727; 20)* - *(Number of Highs &#8727; 10)* - *(Number of Mediums &#8727; 5)* - *(Number of Lows &#8727; 1)*

## Score to Grade Mapping

The bottom floor for the overall Contrast score is **35**.

<a href="assets/images/KB1-d10_2.png" rel="lightbox" title="Score To Grade Mapping"><img class="thumbnail" src="assets/images/KB1-d10_2.png"/></a>

## Score Improvement

Contrast suggest the following strategies to improve your score. 

* Enable Protection Rules and CVE Shields to remove protected vulnerabilities from the score calculation.
* Remediate critical and high vulnerabilities in your custom code.
* Address the vulnerable libraries.
* Update out-of-date libraries.


