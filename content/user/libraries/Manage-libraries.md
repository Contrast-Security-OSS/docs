<!--
title: "Manage Libraries"
description: "Overview of library management"
tags: "user library management"
-->

Manage libraries in the **Libraries** page, a **library's details** page, or the **Libraries** tabs in an application or server's details page. 

## Tag Libraries 

Add tags to libraries from the Libraries page, a library's overview page, or the application or server's Libraries tabs. Use the row action menu in any libraries grid to tag an individual library. Use the checkmarks to select multiple libraries, and click the **Tag Libraries** icon in the batch action menu that appears. In the dialog, enter a new tag name or choose from the existing tags that are listed. You may add one or more tags to any library. 

<a href="assets/images/Tag-libraries-dialog.png" rel="lightbox" title="Choose library tags"><img class="thumbnail" src="assets/images/Tag-libraries-dialog.png"/></a>

You can find tagged libraries by clicking the filter for the Library column. The **Tags** section displays a list of all of the tags. All tags are also displayed beside the library name in the library's details page. 

To remove tags, follow the steps to add tags in any libraries grid or batch action menu. In the dialog, click the "x" on the existing labels that you want to remove. You can also remove tags in a library's details page. 

## Delete Libraries 

To delete multiple libraries, select the checkmarks for the appropriate libraries, and click the trashcan icon in the batch action menu that appears. You can also delete an individual library by selecting the trashcan icon in the row action menu or in the library's details page.

## Track Libraries

Track vulnerable libraries by sending library details to your email address or an integrated bugtracker service that creates tickets for your developers.

### Data

 Contrast sends the following data to your email address or integrated bugtracker for each library that you choose. 

* Name
* Version
* Vulnerabilities details
* Impacted applications and servers
* Versions behind (compared to the current/latest version)
* Classes Used (**Java** and **.NET** only)
* Grade

### Bugtracker

To create a bugtracker ticket with the details of an individual library, go to the row action menu in the Libraries grid, and select the option to **Send to Bugtracker**. You can also go to a library's overview page or an application's Libraries tab, click the the **Send Libraries** icon, and select **Send to Bugtracker**. 

To create a bugtracker ticket with the details of multiple libraries, use the checkmarks to select libraries in the grid, and click the **Send Libraries** icon in the batch action menu that appears. All libraries selected must have at least one application in common. 

<a href="assets/images/Library-to-bugtracker.png" rel="lightbox" title="Send library details to a bugtracker"><img class="thumbnail" src="assets/images/Library-to-bugtracker.png"/></a>

In the dialog, use the dropdown menu to choose which **Bugtracker** you want to use. You can choose any bugtracker integration that is set up in your organization. Select the **Issue Type** of the ticket and the **Assignee**, **Reporter**, and **Priority**. Click the **Send** button to create the ticket. 

<a href="assets/images/Libraries_bugtracker_ticket.png" rel="lightbox" title="Create a bugtracker ticket from library details"><img class="thumbnail" src="assets/images/Libraries_bugtracker_ticket.png"/></a>

To learn more about using bugtrackers with Contrast, read the [Introduction to Bugtrackers](admin-orgintegrations.html#bugtracker). 

### Email 

To send library details directly from Contrast to your email address, go to the row action menu in the Libraries grid, and select **Send to Email**. You can also go to a library's overview page or an application's Libraries tab, click the the **Send Libraries** icon, and select **Send to Email**. 

To create a bugtracker ticket with the details of multiple libraries, use the checkmarks to select libraries in the grid, click the **Send Libraries** icon in the batch action menu that appears, and select **Send to Email**. 

In the dialog, enter the email address to which Contrast should send the library details, and click the button to **Send**.

## Export Findings

Export details on findings from the Libraries page, a library's overview page, or the application or server's Libraries tabs. Click the **Export** icon to choose either CSV or XML formats for the grouping of libraries that you want to include in the report. 

<a href="assets/images/Library-export.png" rel="lightbox" title="Export library details"><img class="thumbnail" src="assets/images/Library-export.png"/></a>

In the Libraries grid, select individual libraries or use the filters to focus on specific data sets. You can then choose to export data for all libraries or only the libraries you selected. 

### Data

The exported file contains the following data fields for each library:

* Library Name
* Language
* Version
* Release Date
* Latest Version
* Grade
* SHA1
* CVE Count
* Application Count
* Server Count
* Number of Classes
* Number of Used Classes

### Custom reports 

For users looking to craft custom software composition analysis reports about their applications, the library export feature might not provide sufficient information; however, Contrast offers a rich Libraries API for accessing Contrast library data. Reference the [Contrast RESTful API documentation](https://api.contrastsecurity.com/#) **> Library > Libraries section** for instructions on using the Libraries API. You may also explore additional details on your libraries using a manual method. 

> **Example:** This cURL request retrieves a list of libraries in which each library includes a list of applications that use the library. The jq tool formats the data as CSV for use in a custom report.
```
$ curl -H "Authorization: $(echo -n $username:$servicekey
base64)" -H "API-Key: $apikey" https://app.contrastsecurity.com/Contrast/api/ng/$org_id/libraries/filter?expand=apps 
jq -r '.libraries[]
{name: .file_name, app_name: .apps[].name}
[.name, .app_name] 
@csv'
```

For more information, read [About the Contrast API](tools-about.html#api-about).
