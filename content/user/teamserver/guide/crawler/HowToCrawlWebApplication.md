<!--
title: "How To Crawl A Web Application"
description: "Instructions on crawling a web application"
tags: "TeamServer application crawler crawling"
-->

## Basic Instructions

>**Note:** This assumes [installation](admin_crawlinstall.html#install) and [configuration](admin_crawlconfig.html#overview) of the Crawler Micro-Service.

To crawl a web application:

* Log in to TeamServer
* Navigate to your application
* Select the **Activity** tab in the application page
* Click on the **+** button next to **Add a new crawl configuration** in the **Crawler** widget
* Enter a name - this is for the user to quickly identify configurations in the **Configuration** popup
* Enter the site - this is where the crawl begins (must be a URL)
* For non-basic authentication and form field entry, refer to the **Form Fields** section
* For basic authentication, check the **Basic Authentication** button and fill in the username and password
* For custom headers, see the **Custom Header** tab to add new key-value pairs to be passed in the request to the server
* Click **Save**
* The configuration should appear in the **Crawl Configurations** widget
* To launch a crawl, click the **Selector** button to the right of the configuration and click **Execute**
* After the crawl is finished, the **History** button will show the record

## Form Fields

If your application contains input fields that need to be populated with specific values:

* Navigate to the form field section of the **Configuration** popup by clicking on the **Form Fields** tab
* The **Use random values in form fields** checkbox will allow Crawler to insert random data into unspecified form fields
* Click the **Add A New Field** button to add a new specified form field
* The field that will be filled in needs to be identified by either an ```id``` or ```name``` attribute
    - Navigate to the element in question in your browser
    - Right-click on the element and select **Inspect Element** from the **Context** menu
    - The field should now be highlighted. From the example above, our ```id``` attribute value would be ```exampleInputEmail1```. The name attribute value can also be used.

    <a href="assets/images/KB3-g02.png" rel="lightbox" title="ID Attribute Value"><img class="thumbnail" src="assets/images/KB3-g02.png"/></a>

* The value is the String that will be inserted into the field - in our example, the element with ```id=exampleInputEmail1``` will be populated with ```webgoat```

## Custom Headers

Allows you to add custom key-value pairs that crawler will send in the request to the configured server

* Navigate to the **Custom Header** tab
* Each row is a new key-value pair
* Enter an appropriate key and value

## Click Rules

To either click or not click on a certain element:

* Navigate to the **Click Rules** section of the **Configuration** popup by clicking on the **Click Rules** tab
* You will see all of the default click rules
* Add an additional click rule by clicking the **+** button at the top right
* Select whether this rule is to **click** or **not click**
* Select which element to apply this to
* Select either **No conditions**, which implies unconditional, or any number of conditions similar to the process in **Page Conditions** (below)
* Continue to **Step 8** in **Basic Instructions** (above)

## Page Conditions

**Page Conditions** enables you to filter the pages you want to crawl. Add criteria that must exist on a page in order for the crawler to evaluate.

* Navigate to the **Click Rules** section of the **Configuration** popup by clicking on the **Page Conditions** tab
* Add an additional click rule by clicking the **+** button at the top right
* Select the condition type from the **Condition Type** dropdown
* Enter an appropriate expression or value

## Advanced

Additional configurations available:

* **Allow Any SSL**
    - This will allow crawler to ignore any SSL certificates the server uses
    - Sets ```ignore-ssl-errors``` to ```true``` in the PhantomJs setup

* **Event Wait Time**
    - The amount of time to wait for an event to trigger a response

* **Reload Wait Time**
    - The amount of time to wait for a response to load

* **Click Elements Once**
    - If false, click elements more than once
    - Theoretically, clicking multiple times favors *horizontal* crawling

* **Maximum Crawl Depth**
    - Stop crawling at a certain discovered click depth

* **Maximum Crawl States**
    - Stop crawling at a certain number of discovered states
