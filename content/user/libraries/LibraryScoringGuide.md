<!--
title: "Library Scoring Guide"
description: "Explanation of library scoring"
tags: "TeamServer application user library scoring guide"
-->

Contrast provides letter grades for the security of your application's libraries so that you can use them as a reference point during  analysis. Each grade is a composite score based on three factors: 

* **Time:** the age of the library
* **Status:** the number of versions that post-date the library
* **Security:** the number of known CVEs that affect the library

## Time Penalty

The age of the library is calculated based on the number of years between the release of the latest version and the version used in the application multiplied by **2.5**. 

> **Example:** <br>
 If you're using a library from **2010** and the latest version came out in **2013**, your time penalty would be: <br> 
 (2013 - 2010) x 2.5 = 3 <br> 
 3 x 2.5 = **7.5** 

## Status Penalty

The status is calculated based on the number of versions that have been released since the current library in your application, multiplied by **10**.

> **Example:** <br> 
 If you're using Version 1.1.1, but Versions 1.1.2 and 1.1.3 have been released, your penalty would be: <br> 
 2 x 10 = **20**

## Vulnerability Penalty

The CVE penalty of the library is the highest severity of all known CVEs for this library multiplied by **10**. 

> **Example:** <br> 
 If you have a library with the scores **5.5**, **2.4** and **2.2**, the penalty would be: <br> 
 5.5 x 10 = **55**

The final score of the library is calculated by subtracting each of the three penalty values from **100**. 
 
> 100 - (time) - (status) - (security) <br> 
 100 - 7.5 - 20 - 55 = **17.5**


## Score to Grade Mapping

* **A:**  90 - 100
* **B:**  80 - 89
* **C:**  70 - 79
* **D:**  60 -69
* **F:**  35 - 59

