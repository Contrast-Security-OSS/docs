<!--
title: "Crawler Micro-Service Overview"
description: "An overview of the Crawler micro-service"
tags: "crawler DOM Microservice"
-->

## Overview

Contrast has integrated a third-party crawling technology, otherwise known as *spidering*, for the purpose of exercising the automated test coverage against a Contrast-instrumented web application. This crawling technology is capable of executing automated web requests against both static and dynamic web applications with relative ease.

Web applications have changed significantly since many of the traditional crawlers were first made available. Unlike many traditional crawlers (commercial or open-source), the Contrast Crawler can interact with elements in the DOM in addition to static HREF attributes in the anchor elements of the markup.

## Nomenclature

* **States**: Unique content of the DOM
* **Click Rules**: Defines how to navigate and discover pages and states via mouse clicks
* **Page Condition**: Defines constraints on which pages to crawl
* **State Filter**: Defines filters on DOM contents

## Crawling Mechanism

As JavaScript-enabled interactions can change the content of the DOM, we track **states** for each DOM. A single DOM can have more than one state.

JavaScript allows you to build in click handlers to practically any HTML element. In addition to clicks, there are other events that can change states, such as *mouse in/out*, *drag and drop*, *keyboard press*, *double-click*, *right-click*, *touch*, *gestures*, and combinations of these events. Contrast Crawler focuses on *click* and *input* events only. This is the most effective and efficient way to discover and navigate. Crawler makes its best attempt to discover all states but it's possible to have unreachable states for the crawler. An example of a difficult state to reach is one that relies on a specific search result to drill in.

To help Crawler succeed at discovering as many states as possible, we expose various configurations for text inputs and **click rules**. One example is *login actions*. You need to provide username and password information, then specify where they go. Depending on the UI implementation, you also have to configure custom click rules in order to teach what to click to submit the login form. By default, Crawler clicks on the folowing DOM elements:

```
builder.crawlRules().click("a");
builder.crawlRules().click("button");
builder.crawlRules().click("input").withAttribute("type", "submit");
builder.crawlRules().click("input").withAttribute("type", "button");
builder.crawlRules().click("input").when(new XPathCondition("//*[contains(@onclick, '(')]"));
builder.crawlRules().click("div").when(new XPathCondition("//*[contains(@onclick, '(')]"));
builder.crawlRules().click("span").when(new XPathCondition("//*[contains(@onclick, '(')]"));
builder.crawlRules().click("image").when(new XPathCondition("//*[contains(@onclick, '(')]"));
builder.crawlRules().click("input").when(new XPathCondition("//*[contains(@ng-click, '(')]"));
builder.crawlRules().click("div").when(new XPathCondition("//*[contains(@ng-click, '(')]"));
builder.crawlRules().click("span").when(new XPathCondition("//*[contains(@ng-click, '(')]"));
builder.crawlRules().click("image").when(new XPathCondition("//*[contains(@ng-click, '(')]"));
```


## Feature Highlights

* Discovers JavaScript and AJAX-based user interactions
* Integrated into the TeamServer **Application Activity** page
* Presents visual state flow graph (navigational model) of web page connections for exploring results
* Authentication via HTML form or HTTP basic auth
* Scheduler

## Micro-Service Architecture

To isolate the resource consumption by the crawler from the TeamServer's core platform, Contrast has built the crawler component as a micro-service. This not only allows TeamServer to operate without competing for resources, but also enables the crawler to scale. Each micro-service instance polls the next crawl from TeamServer's FIFO queue one at a time. However, you can achieve concurrency via deployment of multiple crawlers. The number of concurrency maps to the number of deployed micro-services. 

>**Note:** One (virtual) machine should only run one crawler.

<a href="assets/images/KB3-g01.png" rel="lightbox" title="Micro Service Architecture"><img class="thumbnail" src="assets/images/KB3-g01.png"/></a>

## More information

* [Crawler Installation](tools-crawler.html#crawler-install)
* [How To Crawl A Web Application](user-apps.html#crawl)
* [Monitoring A Crawler Instance](tools-crawler.html#crawler-config)
