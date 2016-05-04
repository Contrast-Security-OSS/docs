<!--
title: "How Do I Update My EOP License File?"
description: "Overview of the two license update options"
tags: "license debug EOP update"
-->

Contrast Enterprise-On-Premise (EOP) customers may occasionally need a new license file. There are two possible approaches for updating this file. The license can be updated by logging into the application using the SuperAdmin account.  Alternatively, the license file can be replaced on the local file system.

If the license is expired, then the second method (file system) below must be used.

## Updating Your License File Through The UI

1. Obtain a new license from [Hub](https://hub.contrastsecurity.com/h/), your account manager, or the technical support team
2. Login to TeamServer with the SuperAdmin account:

    > **URL:** ```http://teamserver:8080/Contrast/static/ng/admin_index.html#/superadmin/signin```
    > 
    > **Username:** *contrast_superadmin@example.com* (replace *example.com* with the email suffix of the user registered on Hub)
    > 
    > **Password:** Provided when the trial license is originally downloaded from Hub (refer to your account team or Support for the password)

3. Navigate to **Settings > License Settings**
4. Using a text editor such as Notepad or TextEdit, open the new license file to copy the contents of the license

5. Paste the contents into the text box
6. Click **Update**, which will then inform you that TeamServer will be restarted

    <a href="assets/images/KB1-b02.png" rel="lightbox" title="License Update"><img class="thumbnail" src="assets/images/KB1-b02.png"/></a>


## Updating Your License File From The TeamServer File System

1. Obtain a new license from [Hub](https://hub.contrastsecurity.com/h/), your account manager, or the technical support team

2. Rename the new license file ***contrast.new.lic***

3. Stop the Contrast TeamServer service (on Windows use the service control panel, on Linux execute ```sudo service contrast-server stop``` or other appropriate command for the distribution/configuration).  On Linux, verify that all TeamServer processes have stopped by executing ```ps aux | grep contrast``` and confirm there are no processes listed.  If *myslqld* is still running, note that it may take a few minutes to terminate on its own after stopping the service.  If it does not terminate, contact Support. **Do not** kill the processes. 

    > **Note**: Don't move the current ***contrast.lic*** file. As the Team Server needs both the old and new license file to upgrade the license. 

4. Place the new license file in the same data directory. On Linux, confirm the new license file has the same owner, group and permissions as other files in that directory (execute ```ls -l``` to list the directory contents with permissions and owners). A backup of the current license called ***contrast.lic.bak*** will be created in the same directory when the new one is consumed during startup.

    > **Note:** Execute ```sudo chown contrast_service:contrast_service contrast.new.lic``` to change the owner and group. Execute ```sudo chmod 644 contrast.new.lic``` to change the permissions.

5. Start the Contrast TeamServer application as normal and the new license will automatically take effect (on Windows use the service control panel, on Linux execute ```sudo service contrast-server start``` or other appropriate command for the distribution/configuration).

