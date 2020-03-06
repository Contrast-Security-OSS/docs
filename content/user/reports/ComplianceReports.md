<!--
title: "Compliance Reports"
description: "Overview of vulnerability PDF reports"
tags: "user reports compliance security standards PDF"
-->

Generate timestamped PDF reports of security issues that Contrast has identified while monitoring your application. Each report includes a summary of the application's security status as well as details on each vulnerability and remediation guidance. 

## Generate a Report

To create a report, go to the Applications page and select an application. Click the **Generate Security Standards Report** icon located at the top of the application's **Overview** page.

<a href="assets/images/Security-standards-report-menu.png" rel="lightbox" title="Generate a compliance report from the application Overview"><img class="thumbnail" src="assets/images/Security-standards-report-menu.png"/></a>

In the dialog that appears, choose the **Report Type**, **Vulnerability Status/Severity** and **Vulnerability Tag** that you want to include in the report, and click **Generate**. Once generated, the report will download automatically.

<a href="assets/images/Generate-security-report.png" rel="lightbox" title="Generate Report Dialog"><img class="thumbnail" src="assets/images/Generate-security-report.png"/></a> 

## Report Content

The report is comprised of information on each vulnerability that's been discovered in your application, including technical details, risk of an issue, remediation guidance and industry references. You can also find a breakdown of the application's known vulnerable libraries, architecture and security scorecard.

## DISA STIG Compliance Reports

DISA's Security Technical Implementation Guide (STIG) is the basis for evaluation of the security of all government applications. The STIG is intended to be used throughout the life cycles of these applications in order to provide security assurance for these applications. Contrast’s compliance reporting can provide a listing of the vulnerabilities found in your application that violate guidelines of multiple STIGs.

### Before You Get Started

Before DISA STIG reports can be generated, an administrator must **Enable DISA STIG Checklist reporting** for the organization. With administrator access, navigate to **Organizations** and click an organization to find this option. 

<a href="assets/images/Enable_STIG_reporting.png" rel="lightbox" title="Enable DISA STIG reporting"><img class="thumbnail" src="assets/images/Enable_STIG_reporting.png"/></a> 

An application must have an Assess license to generate a DISA STIG report.

### Generate a STIG Viewer Checklist

STIG Viewer creates custom checklists with multiple STIGs for compliance reporting. You must import your application's checklist to get the DISA STIG report on those vulnerabilities from Contrast.

To generate a STIG Viewer checklist, navigate to an application. In the application’s **Overview** page, click the reporting icon and select **Generate STIG Viewer Checklist**. 

In the dialog, import a STIG Viewer checklist (.ckl) file. This file must be a checklist exported from the STIG Viewer application. Click **Generate** to download an updated STIG Viewer checklist (.ckl) file.

<a href="assets/images/STIG_dialog.png" rel="lightbox" title="Generate a DISA STIG checklist"><img class="thumbnail" src="assets/images/STIG_dialog.png"/></a> 

### Generate a DISA STIG Report

To generate a DISA STIG report type, go to the Applications page and select an application. Click the reporting icon on an application’s **Overview** page and select **Generate Security Standards Report**. 

In the dialog, select **DISA ASD STIG** for Report Type. Select the **Vulnerability Status/Severity** and **Vulnerability Tag** that you want to include in the report, and click **Generate**. Once generated, the report will download automatically.
