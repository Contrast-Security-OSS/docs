<!--
title: "Duplicate Traces And Diffing Traces"
description: "Information on duplicate traces and using the Diff tool"
-->

Contrast may discover the same vulnerability in several applications, or even multiple times in the same application. This may happen over a long period of time or within seconds. When the engine generates a trace for a vulnerability that has already been discovered, we call it a **Duplicate**.

Sometimes, determining when a trace is a duplicate and when it isn't can be tricky. Obviously, if the entire stack trace for every event in the trace is identical, we can be sure the issues are duplicates. Unfortunately, we've frequently found that the same vulnerability in an application is reached via multiple paths. Considering that, we built Contrast to have a more flexible approach for identifying and eliminating duplicates.

Essentially, we only want to focus on the part of the stack that involves the **source** (start event) and the **trigger** (end event). Perhaps this code is reachable through ```doGet()```, ```doPost()```, or ```doFilter()``` methods, but that is all really irrelevant. Another issue is that the vulnerable code might invoke the same source, but on different classes. For example, the vulnerable code might invoke ```HttpServletRequest.getParameter()```, ```HttpServletRequestWrapper.getParameter()```, or any subclass of those classes. The same issue can occur with the trigger.

Therefore, the current duplication matching algorithm in both the engine and the TeamServer is as follows:

* They have the same **source** (meaning method name and line of code)
* They have the same **trigger** (meaning method name and line of code)
* They have the exact same **stack trace** between the source and trigger

In the JVM Plugin, there is a cache of traces that are retained for a period of time (e.g. **30 seconds**). Each time a new trace is generated, it is compared to what is in the cache and duplicates are discarded before they reach the Contrast site. The TeamServer stores all traces it receives in the database. Each time a new trace arrives, it is compared to any existing traces for that application and duplicates are discarded.


## Diff Tool

If you want to compare two traces, (maybe because they seem similar), there is a built-in **diff tool** in TeamServer. In the **Trace Explorer** tree, click on the title of one finding, then **Ctrl-Click** on the other title. Next, right-click on one of the titles and select **Compare**.

<a href="assets/images/KB3-b06_1.png" rel="lightbox" title="Comparing Traces With The Diff Tool"><img class="thumbnail" src="assets/images/KB3-b06_1.png"/></a>

This will take you to a **diff viewer** with **Summary**, **Event Details**, and **HTTP Info** for each trace. The **Event Details** tab shows you differences between stack traces, which makes finding the real differences in a trace very easy:

<a href="assets/images/KB3-b06_2.png" rel="lightbox" title="Event Details"><img class="thumbnail" src="assets/images/KB3-b06_2.png"/></a>
