<!--
title: "Update Library Data"
description: "Overview of updating library data"
tags: "Admin EOP maintenance library data"
-->

## Non-air gapped EOP installations

Non-air gapped EOP installations can receive library data from the Contrast application. This ensures that data about newly released library versions or any CVEs that have been raised are available to Contrast. To enable the connection, complete the following steps.

1. Log in to Contrast with SuperAdmin credentials.
2. Navigate to **Super admin > System Settings > Internet Settings**. 
3. Enable Contrast Hub.

>**Note:** Access must also be allowed to https://ardy.contrastsecurity.com/production through the firewall.

>**Note:** This functionality is available from 3.6.4 release.

## Air-gapped EOP installations

For air-gapped EOP installations, EOP administrators can download a cache export of library data in the Contrast Hub. 

1. In Contrast Hub, navigate to **Downloads > TeamServer > Library Data Exports**. 
2. Click **Download** for the archive version you want to download. The **Version** is the date on which it was produced. The downloaded file is a ZIP archive containing the CSV files of data.
3. Extract the ZIP archive and place the CSV files in the *data/libraries* directory. Some files could appear hidden due to their names, so ensure all extracted files are moved to this directory. 
4. Restart Contrast. When Contrast restarts, the data is imported in the background. The CSV files are deleted from the folder as each is imported.
5. Check the *data/logs/contrast.log* file for success messages as each script completes.

>**Note:** This functionality is included in the 3.7.4 release.



