<!--
title: "Contrast Scoring Guide"
description: "Guide to Contrast scoring"
tags: "TeamServer application scoring guide"
-->

Contrast provides letter grades to let you know, in general, how the application is performing. The grade represents an aggregate score comprised of how much of the application has been exercised, as well as the amount and seriousness of the vulnerabilities that have been unearthed during the interactive analysis process (security).

So, it can be said that the overall score (from which Contrast obtains your grade) is the average of your **Platform Score** and your **Custom Code Score**. Here is a sample score from when we run Contrast on the [WebGoat](https://code.google.com/p/webgoat/) application, a purposefully vulnerable application maintained by [OWASP](https://www.owasp.org/index.php/Main_Page).

<a href="assets/images/KB1-d10_1.png" rel="lightbox" title="Contrast Score"><img class="thumbnail" src="assets/images/KB1-d10_1.png"/></a>

As is shown at the top of the score panel, the **Platform Score** is **60** and the **Custom Code Score** is **64**. Thus, the overall Contrast score is **62**. 

>*60 + 64 = 124
>124 / 2 = **62***


## Platform Score

The **Platform Score** is a measure of the security your application sits on. This varies for each language, but essentially it is a grade for the security in your stack. In Java, for instance, the grade refers to the Java libraries upon which your application relies. For the application used to compile the graph above, this score was calculated at **60** based on the average age and security of each imported library.


## Custom Code Score

The **Custom Code Score** starts at **100** and is deducted points for every vulnerability discovered. Vulnerabilities are weighted differently, depending on how likely they are to be exploited and how serious the effects of exploitation would be.

For instance, a SQL injection is considered **Critical**, because automated tools exist to exploit them without expertise, and an attacher can exfiltrate your entire database contents without any foreknowledge of your application or schema.

On the other hand, usage of an old, broken hashing algorithm like **SHA-1** is considered **Low**. Although it's been known to exhibit serious weaknesses, practical exploitation still requires the resources of a very skilled attacker and likely the backing of a large organization or nation state.

>**Custom Code Score** = 100 - *(No. Criticals * 20)* - *(No. Highs * 10)* - *(No. Mediums * 5)* - *(No. Lows * 1)*


## Score to Grade Mapping

<a href="assets/images/KB1-d10_2.png" rel="lightbox" title="Score To Grade Mapping"><img class="thumbnail" src="assets/images/KB1-d10_2.png"/></a>

Contrast puts a lower cap of **35** on the overall Contrast score.
