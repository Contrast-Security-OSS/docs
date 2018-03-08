<!--
title: "Reset the superadmin password"
description: "EOP resetting of the SuperAdmin password"
tags: "Admin EOP maintenance credentials SuperAdmin reset system"
-->

## Windows

Windows users should complete the following steps to reset the SuperAdmin password in the Contrast application. 

* Stop the Contrast Server service.
* Launch a command prompt (`cmd.exe`) as an Administrator by right-clicking on **cmd.exe** and selecting **Run As Administrator**.
* Go to the *Contrast\bin directory*. (On most systems, this is *C:\Program Files\Contrast\bin*.)
* Enter the following command to edit the JVM options.

	```
	notepad contrast-server.vmoptions
	```

* Add the following options to the file. (Replace `your.email.domain.com` with your email domain.)

	```
	-Dreset.superadmin=true
	-Dsuperadmin.username=contrast_superadmin@<your.email.domain.com>
	-Dsuperadmin.password=<password>
	```

* Save the file and exit Notepad.
* Enter the following command to start the Contrast service.

	```
	net start "Contrast Server"
	```

* Verify you are able to log in with the new password.
* Enter the following command to stop the Contrast service.

	```
	net stop "Contrast Server"
	```

* Enter the following command to edit the JVM options.

	```
	notepad contrast-server.vmoptions
	```

* Remove the options added in step five.
* Save the file and exit Notepad.
* Exit the command prompt.
* Start the Contrast Server service as normal (i.e., from the **Services** control panel applet).

## Linux

Linux users should complete the following steps to reset the SuperAdmin password in the Contrast application. 

* Shut down Contrast Server.
* Open a command prompt as `root` (or open a normal terminal/shell and use `sudo` or `su` to become root).
* Go to the *$CONTRAST_INSTALLATION* directory. (On most systems, this is */opt/Contrast*.)
* Type the following command.

	```
	export INSTALL4J_ADD_VM_PARAMS="$INSTALL4J_ADD_VM_PARAMS -Dreset.superadmin=true -Dsuperadmin.username=contrast_superadmin@<your.email.domain.com> -Dsuperadmin.password=<new password>”
	```

* Start the contrast server by running:

	```
	bin/contrast-server start
	```

When the server comes up, you should be able to use the password you specified in the command line. At this point, Contrast recommends that you stop the server (`bin/contrast-server stop`), start it up as you normally would, and then exit the shell to clear the password from the `INSTALL4J_ADD_VM_PARAMS` environment variable. 


