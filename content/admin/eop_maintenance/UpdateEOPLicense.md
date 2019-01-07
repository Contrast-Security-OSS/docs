<!--
title: "Update an EOP License File"
description: "Overview of the two license update options"
tags: "Admin EOP maintenance system settings license debug update"
-->

Contrast Enterprise-on-Premise (EOP) customers may occasionally need a new license file. There are two possible approaches for updating this file: A SuperAdmin can log into the application and update the license in the UI, or you can replace the license file on the local file system. If the license is expired, you must use the file system method.

## Option One: The UI

* Log in to the Contrast applications as a SuperAdmin. 

> **Example:**
 * **URL:** `http://teamserver:8080/Contrast/static/ng/admin_index.html#/superadmin/signin`
 * **Username:** *contrast_superadmin@example.com* 
 * **Password:** Provided when the trial license is originally downloaded from Hub. (Contact your account team or Support for the password.)

* Navigate to the **user menu > System Settings > Licensing tab**.
* Click the **Update This License** button at the bottom of the panel.
* Enter your Hub credentials to allow Contrast to download and apply the latest license from Hub. <br> If you don't have access to a Hub account, click the **Upload License** link and paste your license in the field provided. 

<a href="assets/images/Update-EOP-license.png" rel="lightbox" title="Update licenses in System Settings"><img class="thumbnail" src="assets/images/Update-EOP-license.png"/></a>

* Click **Update** to finish the process. 
* Restart Contrast to apply the new license changes.

## Option Two: The Contrast file system

* Obtain a new license from [Hub](https://hub.contrastsecurity.com/h/), your account manager or the technical support team.

* Rename the new license file *contrast.new.lic*.

* Stop the Contrast application service. 
  * On Windows, use the service control panel. 
  * On Linux, execute `sudo service contrast-server stop` or other appropriate command for the distribution/configuration.  Verify that all Contrast application processes have stopped by executing `ps aux | grep contrast`, and confirm there are no processes listed. If *myslqld* is still running, it may take a few minutes to terminate on its own after stopping the service. If it doesn't terminate, contact Support. **Do not kill the processes.**

> **Note**: Don't move the current *contrast.lic* file. Contrast needs both the old and new license files to upgrade the license. 

* Place the new license file in the same data directory. 
  * On Linux, confirm that the new license file has the same owner, group and permissions as other files in that directory. (Execute `ls -l` to list the directory contents with permissions and owners.) A backup of the current license called *contrast.lic.bak* will be created in the same directory when the new one is consumed during startup.

> **Note:** Execute `sudo chown contrast_service:contrast_service contrast.new.lic` to change the owner and group. Execute `sudo chmod 644 contrast.new.lic` to change the permissions.

* Start the Contrast application as normal. 
  * On Windows, use the service control panel. 
  * On Linux, execute `sudo service contrast-server start` or other appropriate command for the distribution/configuration.

* The new license automatically takes effect.

## Update Multiple Instances of Contrast

To update all instances of the Contrast application, follow the steps for the file system method described above for each application instance that's running. Contrast is currently exploring an alternative for distributed configurations that enables you to update all instances at once; however, a solution hasn't been implemented. 

