
<!--
title: "Add user to Active Directory or LDAP"
description: "Add user to the Configuration of Active Directory or LDAP authentication services"
tags: "troubleshoot authentication user role LDAP AD"
-->

If you added a user to a Microsoft Active Directory (AD) or LDAP group, but Contrast says that they can't be found during configuration, you might have added them to both the User and SuperAdmin groups in your AD or LDAP instance. (Reminder: This is not allowed.)

After you choose one group for the user and remove them from the other in your AD or LDAP instance, go back to the Contrast interface. If you chose to keep the user in the SuperAdmin group, Contrast automatically adds them as a SuperAdmin-level user in the Contrast interface but doesn't assign them to any Organization Role or Application Access Groups. If you chose to keep the user in the User group, you must go through the steps to add a user in Contrast. 

To learn more about configuring these authentication methods, go to the [Authentication page](installation-setupauth.html).