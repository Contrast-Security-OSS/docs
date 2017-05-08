<!--
title: "How Do I Update My EOP License File?"
description: "Overview of the two license update options"
tags: "Admin EOP maintenance system settings license debug update"
-->

Contrast Enterprise-On-Premise (EOP) customers may occasionally need a new license file. There are two possible approaches for updating this file. The license can be updated in the UI by logging into the application as a SuperAdmin.  Alternatively, the license file can be replaced on the local file system.

If the license is expired, then the second method (file system) below must be used.

## Updating Your License File Through The UI

1. Log in to TeamServer as a SuperAdmin, for example:

    > **URL:** ```http://teamserver:8080/Contrast/static/ng/admin_index.html#/superadmin/signin```
    > 
    > **Username:** *contrast_superadmin@example.com* (replace *example.com* with the email suffix of the user registered on Hub)
    > 
    > **Password:** Provided when the trial license is originally downloaded from Hub (refer to your account team or Support for the password)

2. Navigate to **System Settings > Licensing**.
3. Click the **Update This License** button at the bottom of the panel.
4. Enter your Hub credentials in order to allow TeamServer to download and apply the latest license from Hub. 
5. Click **Update** to finish the process and then restart TeamServer in order for the new license changes to be applied.

    <a href="assets/images/KB1-b02.png" rel="lightbox" title="License Update"><img class="thumbnail" src="assets/images/KB1-b02.png"/></a>


## Updating Your License File From The TeamServer File System

1. Obtain a new license from [Hub](https://hub.contrastsecurity.com/h/), your account manager, or the technical support team.

2. Rename the new license file *contrast.new.lic*.

3. Stop the Contrast TeamServer service (on Windows use the service control panel and on Linux execute ```sudo service contrast-server stop``` or other appropriate command for the distribution/configuration).  On Linux, verify that all TeamServer processes have stopped by executing ```ps aux | grep contrast``` and confirm there are no processes listed.  If *myslqld* is still running, note that it may take a few minutes to terminate on its own after stopping the service.  If it does not terminate, contact Support. **Do not** kill the processes. 

    > **Note**: Don't move the current ***contrast.lic*** file. Team Server needs both the old and new license files to upgrade the license. 

4. Place the new license file in the same data directory. On Linux, confirm that the new license file has the same owner, group and permissions as other files in that directory (execute ```ls -l``` to list the directory contents with permissions and owners). A backup of the current license called *contrast.lic.bak* will be created in the same directory when the new one is consumed during startup.

    > **Note:** Execute ```sudo chown contrast_service:contrast_service contrast.new.lic``` to change the owner and group. Execute ```sudo chmod 644 contrast.new.lic``` to change the permissions.

5. Start the Contrast TeamServer application as normal and the new license will automatically take effect (on Windows use the service control panel and on Linux execute ```sudo service contrast-server start``` or other appropriate command for the distribution/configuration).

## Updating Multiple Instances of TeamServer

At this time, the only way to update all instances of TeamServer is by following the steps for the File System method described above, for each instance that is running. We are currently exploring an alternative for distributed configurations where all instances may be updated at once; however, a solution has not yet been implemented. We will make sure to let you know when this option is available so stay tuned!

