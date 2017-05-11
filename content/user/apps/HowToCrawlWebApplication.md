<!--
title: "How To Crawl A Web Application"
description: "Instructions on crawling a web application"
tags: "user TeamServer application crawler crawling"
-->

## Basic Instructions

>**Note:** This assumes [installation](tools_crawler.html#crawler-install) and [configuration](tools_crawler.html#config) of the Crawler Micro-Service.

To crawl a web application:

1. Log in to TeamServer
2. Navigate to your application
3. Select the **Activity** tab in the application page
4. Click on the **+** button next to **Add a new crawl configuration** in the **Crawler** widget
5. Enter a name - this is for the user to quickly identify configurations in the **Configuration** popup
6. Enter the site - this is where the crawl begins (must be a URL)
7. For non-basic authentication and form field entry, refer to the **Form Fields** section
8. For basic authentication, check the **Basic Authentication** button and fill in the username and password
9. For custom headers, see the **Custom Header** tab to add new key-value pairs to be passed in the request to the server
10. Click **Save**
11. The configuration should appear in the **Crawl Configurations** widget
12. To launch a crawl, click the **Selector** button to the right of the configuration and click **Execute**
13. After the crawl is finished, the **History** button will show the record

## Form Fields

If your application contains input fields that need to be populated with specific values:

14. Navigate to the form field section of the **Configuration** popup by clicking on the **Form Fields** tab
15. The **Use random values in form fields** checkbox will allow Crawler to insert random data into unspecified form fields
16. Click the **Add A New Field** button to add a new specified form field
17. The field that will be filled in needs to be identified by either an ```id``` or ```name``` attribute
    - Navigate to the element in question in your browser
    - Right-click on the element and select **Inspect Element** from the **Context** menu
    - The field should now be highlighted. From the example above, our ```id``` attribute value would be ```exampleInputEmail1```. The name attribute value can also be used.

    <a href="assets/images/KB3-g02.png" rel="lightbox" title="ID Attribute Value"><img class="thumbnail" src="assets/images/KB3-g02.png"/></a>

18. The value is the String that will be inserted into the field - in our example, the element with ```id=exampleInputEmail1``` will be populated with ```webgoat```

## Custom Headers

Allows you to add custom key-value pairs that crawler will send in the request to the configured server

* Navigate to the **Custom Header** tab
* Each row is a new key-value pair
* Enter an appropriate key and value

## Click Rules

To either click or not click on a certain element:

1. Navigate to the **Click Rules** section of the **Configuration** popup by clicking on the **Click Rules** tab
2. You will see all of the default click rules
3. Add an additional click rule by clicking the **+** button at the top right
4. Select whether this rule is to **click** or **not click**
5. Select which element to apply this to
6. Select either **No conditions**, which implies unconditional, or any number of conditions similar to the process in **Page Conditions** (below)
7. Continue to **Step 8** in **Basic Instructions** (above)

## Page Conditions

**Page Conditions** enables you to filter the pages you want to crawl. Add criteria that must exist on a page in order for the crawler to evaluate.

1. Navigate to the **Click Rules** section of the **Configuration** popup by clicking on the **Page Conditions** tab
2. Add an additional click rule by clicking the **+** button at the top right
3. Select the condition type from the **Condition Type** dropdown
4. Enter an appropriate expression or value

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
