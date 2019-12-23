<!--
title: "Attestation Reports
description: "Overview of attestation reports"
tags: "attestation application vulnerability PDF report"
-->
 
Attestation reports provide evidence of vulnerability remediation based on the most current application information. Meet compliance and auditing requirements with each PDF report, which includes details about an application’s custom and open source code vulnerabilities, as well as assessments against compliance and security standards.

## Report Content

Attestation reports include the following content:

* Itemized list of the specific filter settings used to generate the report
* Summary of the security posture for the application
* Vulnerabilities assessment for both custom code and open source libraries
* Route coverage, as a security assessment metric
* Optionally, a compliance policy assessment, and detailed information about open vulnerabilities for the application
* Appendix that describes methodologies and terminologies

## Generate a Report

Generate an asynchronous PDF report to see the status of an application.  

To create a report, go to the Applications grid and select an application. Click the **Reports** icon located at the top of the application's page. In the dropdown list, select **Generate Attestation Report**.

<a href="assets/images/Attestation-report-menu.png" rel="lightbox" title="Save a report"><img class="thumbnail" src="assets/images/Attestation-report-menu.png"/></a> 
 
In the dialog that appears, define the **Vulnerabilities**, **Environments** and additional **Security Standards** that you want to include in the report. 

<a href="assets/images/Attestation-report-dialog.png" rel="lightbox" title="Menu of saved reports"><img class="thumbnail" src="assets/images/Attestation-report-dialog.png"/></a> 

### Filter options

Each report defaults to all vulnerabilities and environments, but you can filter them by clicking in the fields. Choose an option from Security Standards to include an additional **Security Standards** section in the generated report. Optionally, you can choose to include detailed information about open vulnerabilities.

The following table outlines the categories that you can use to create a custom report.


| Field                 | Default      | Filter Options                                                                                               |
|-----------------------|--------------|--------------------------------------------------------------------------------------------------------------|
| Vulnerabilities       | All          | Status (Reported, Suspicious, Confirmed, Not a Problem, Remediated, Fixed, Remediated - Auto-Verified) <br> Severity (Note, Low, Medium, High Critical) <br> Assess Rules |
| Vulnerability details | None         | Include vulnerability details       |
| Environments          | All          | Development <br> QA <br> Production |
| Security Standards    | None         |                                     |


Click **Generate**. Attestation reports generate asynchronously, and once generated, a download link appears in the **Notifications** panel.

Click the report link to download the PDF.

<a href="assets/images/Attestation-report-download.png" rel="lightbox" title="Menu of saved reports"><img class="thumbnail" src="assets/images/Attestation-report-download.png"/></a> 

## EOP Installation and Storage Configuration

A system administrator can configure reporting storage options by adding the following properties to the *general.properties* file: 
* **reporting.storage.mode**: Value options are `DB and` `FILE_SYS` (recommended)
* **reporting.storage.path**: Required when storage mode is set to `FILE_SYS`

The recommended setting for `reporting.storage.mode` is `FILE_SYS`. When `DB` is configured, the files are stored in the database, adding unnecessary contention on the database. 

With the `FILE_SYS` option, you must set up a file-sharing service where all Contrast nodes are able to access the file path. Provide this path as the value for `reporting.storage.path`. 

 
