<!--
title: "Creating, Managing and Deleting Access Control Groups"
description: "Creating, Managing and Deleting Access Control Groups"
-->

Access Control Groups provide a convenient way to manage a collection of users. Users can belong to many groups. Groups are used throughout TeamServer; for example, they can be used to:

* Grant users system administration privileges.
* Grant users read-only visibility to system administration information such as users, applications and groups for an organization.
* Grant users access to organizations outside of their default organization. 
* Grant users varying roles by organization.
* Grant users varying roles by application. 
* Restricted from accessing applications within an organization.

## Viewing Groups
TeamServer presently supports two types of groups: System and Organization. System groups only exist with EOP (Enterprise on Premise) installations. This type of group exists to extend system administration capabilities to named user accounts. Organization groups are available to both SaaS and EOP customers. This group exists for supporting application roles and restrictions. EOP customers may also use organization groups as a means of granting cross-organization access to a set of users.

## Creating System Groups
System groups are created from the system administration groups page by users given SuperAdmin credentials or users already granted as system administrators in a previously existing System group.

<a href="assets/images/System_Role.png" rel="lightbox" title="System Groups"><img class="thumbnail" src="assets/images/System_Role.png"/></a>

* Login to TeamServer.
* Navigate to the Admin pages via the settings menu.
* Select Groups from the top navigation menu.
* Select "Create a Group".
* Provide the required inputs.
** Group Name
** Type: Choose System
** Organization: You may choose all organizations or a single organization.
** Role: Observer, System Admin or No Access
** Group Members: Add one or more group members

*Please Note*: A single group may contain multiple organizations by selecting "Add Role". Different roles can be applied to the same group as long as different roles are not assigned to the same organization within a group.

## Creating Organization Groups (System Admin)
EOP customers may setup organization groups that enable access and control across one or more organizations. Once a multi-organization group is configured, users can [navigate across organizations]() from the settings menu. 

<a href="assets/images/Multi_Org_Role_.png" rel="lightbox" title="Multi-Organization Group"><img class="thumbnail" src="assets/images/Multi_Org_Role_.png"/></a>

* Login to TeamServer.
* Navigate to the Admin pages via the settings menu.
* Select Groups from the top navigation menu.
* Select "Create a Group".
* Provide the required inputs.
** Group Name
** Type: Choose Organizational
** Organization: You may only choose one organization at a time.
** Organization Role: Administrator, Edit, View, Rules Admin or No Access
** Application Role: Administrator, Edit, View, Rules Admin or No Access
** Exception: Optional setting to configure an application role on a per application basis within the organization. 
** Group Members: Add one or more group members.

*Please Note*: A single group can have multiple organizations configured within the group. Each organization must be configured independently within the group by selecting a new organization.

## Creating Organization Groups (Organization Admin)
EOP and SaaS customers are able to configure organization groups from within an organization. Groups are most often used in this fashion to provide application specific roles to a group of users.

<a href="assets/images/Org_Role.png" rel="lightbox" title="Organization Group"><img class="thumbnail" src="assets/images/Org_Role.png"/></a>

* Login to TeamServer
* Navigate to Organization Settings from the settings menu.
* Select Groups from the detailed settings menu on the left side of the Settings page.
* Select "Create a Group".
* Provide the required inputs.
** Group Name
** Group Members: Add one or more group members within the organization.
** Organization Role: Administrator, Edit, View, Rules Admin or No Access
** Application Role: Administrator, Edit, View, Rules Admin or No Access
** Exception: Optional setting to configure an application role on a per application basis within the organization.

## Deleting Groups
Groups can be deleted from either the system administrator's group page or the organization administrator's group page. Select the checkbox next to the group name. Select the "Delete" button to remove the group. If a user was associated with the group that was deleted, their organization role will return to their default role.
