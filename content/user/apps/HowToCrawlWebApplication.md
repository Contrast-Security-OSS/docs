<!--
title: "How To Crawl A Web Application"
description: "Instructions on crawling a web application"
tags: "user TeamServer application crawler crawling"
-->

The following instructions are written in the context that you've [installed](tools-crawler.html#crawler-install) and [configured](tools-crawler.html#crawler-config) the Crawler Micro-Service.

## Basic Instructions

Complete the following steps to crawl a web application.

* Go to the **Applications** page in Contrast, and select your application. 
* Select the **Activity** tab in the application details page. 
* Click on the **+** button next to **Add a new crawl configuration** in the **Crawler** widget.
* Enter a name. (This is for the user to quickly identify configurations in the **Configuration** popup.)
* Enter the site URL. (This is where the crawl begins.)
* For non-basic authentication and form field entry, refer to the **Form Fields** section.
* For basic authentication, check the **Basic Authentication** button, and fill in the username and password.
* For custom headers, see the **Custom Header** tab to add new key-value pairs to be passed in the request to the server.
* Click the button to **Save**.
* The configuration should appear in the **Crawl Configurations** widget.
* To launch a crawl, click the **Selector** button to the right of the configuration, and click **Execute**.
* After the crawl is finished, the **History** button shows the record.

## Form Fields

If your application contains input fields that need to be populated with specific values, complete the following steps. 

* Navigate to the form field section of the **Configuration** popup by clicking on the **Form Fields** tab.
* The **Use random values in form fields** checkbox allows the Crawler to insert random data into unspecified form fields.
* Click the **Add A New Field** button to add a new specified form field.
* The field to be filled must be identified by an `id` or `name` attribute.
  * Navigate to the element in question in your browser
  * Right-click on the element, and select **Inspect Element** from the **Context** menu.
  * The field should now be highlighted. In the example below, the `id` attribute value would be `exampleInputEmail1`. You can also use the name attribute value.

    <a href="assets/images/KB3-g02.png" rel="lightbox" title="ID Attribute Value"><img class="thumbnail" src="assets/images/KB3-g02.png"/></a>

* The value is the String that will be inserted into the field. In the example above, the element with `id=exampleInputEmail1` will be populated with `webgoat`.

## Custom Headers

To add custom key-value pairs that Crawler will send in the request to the configured server, complete the following steps. 

* Navigate to the **Custom Header** tab.
* Each row is a new key-value pair. Enter an appropriate key and value.

## Click Rules

To either click or not click on a certain element, complete the following steps. 

* Click on the **Click Rules** tab to go to the **Click Rules** section of the **Configuration** popup. 
* You'll see all the default click rules. Add an additional click rule by clicking the **+** button at the top right of the popup. 
* Choose whether this rule is to **click** or **not click**.
* Select which element to which this should apply.
* Select either **No conditions**, which implies unconditional, or any number of conditions similar to the process in **Page Conditions**.

## Page Conditions

**Page Conditions** enables you to filter the pages you want to crawl. Add criteria that must exist on a page in order for the crawler to evaluate.

* Click on the **Page Conditions** tab to go to the **Click Rules** section of the **Configuration** popup.
* Add an additional click rule by clicking the **+** button at the top right of the popup.
* Select the condition type from the **Condition Type** dropdown.
* Enter an appropriate expression or value.

## Advanced Configurations

Additional configurations available as described below. 

* **Allow Any SSL**
   * Allows the Crawler to ignore any SSL certificates the server uses.
   * Sets `ignore-ssl-errors` to `true` in the PhantomJs setup.

* **Event Wait Time**
   * The amount of time to wait for an event to trigger a response.

* **Reload Wait Time**
   * The amount of time to wait for a response to load.

* **Click Elements Once**
   * If false, click elements more than once.
   * Theoretically, clicking multiple times favors *horizontal* crawling.

* **Maximum Crawl Depth**
   * Stop crawling at a certain discovered click depth.

* **Maximum Crawl States**
   * Stop crawling at a certain number of discovered states.


