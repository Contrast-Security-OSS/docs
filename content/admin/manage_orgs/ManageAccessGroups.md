<!--
title: "Manage Access Groups"
description: "Overview of managing access groups"
tags: "Admin manage organizations access groups"
-->

Contrast provides role-based access control (RBAC) capabilities through groups. Administrators have the ability to create these groups for providing or restricting system, organization and application access and privileges to users within Contrast. Contrast has two types of access control groups: **System** and **Organization**. System groups, only available to on-premises customers, allow for delegated system administration. Organization groups allow for cross-organization access and application access/restriction.

## System Administration Groups
A system group is a convenient way to manage administrative tasks across users and organizations. Users can belong to many groups. They do not have to be created within an organization in order to gain access to that organization. 

### Manage System Groups
When a user is added to a system administration group that contains one or more organizations outside their default organization, they will then have access to the System Administration interface. A new **SuperAdmin** option in the user menu will be available for them to navigate to for managing the organization(s), applications, users and groups associated with the organization(s) defined. 

Go to the **Groups** page in the System Administration interface. From there:

* Configure a new group by clicking the **Add Group** button
* See all system-created groups already added by either filtering on the **Type** column or selecting any of the **System Role** quick views alongside the group search
* **View** the details of any group by clicking the Group Name 
* **Edit** a group from the Edit Group page by also clicking the **Group Name**. Make any modifications as needed. You may change System Access or Role as well as change members of the group. Make sure to **Save** changes.
* **Delete** any system-created group by simply clicking the trash can icon on the row. This action can also be done if viewing the details of a group in the lower left corner of the Edit Group page. Once this action is confirmed, the group is removed and any access provided by that group is revoked from any of the users assigned to the group.

## Organization Groups
An organization group is used to assign authorized users access to organizations and applications. An Organization Admin can create, edit and delete groups from the Organization Settings page. System administrators (EOP only) may also create [Cross-Organization Groups](admin-manageorgs.html#crossorg) to allow users access to more than one organization.

Contrast provides four default groups within each organization. These groups provide access to all applications in the organization with the associated role. That role grants or restricts what the user can do with the application. Those roles are:

* **View:** Allows users to see an application's score, libraries and vulnerabilities, and add comments
* **Edit:** Allows users to manage an application's vulnerabilities as well as basic application management functions
* **Rules Admin:** Allows users all the capability of the Edit role plus the ability to manage security rules for an application 
* **Admin** Provides full access to configure an application  

### Manage Organization Groups
Organization administrators can create custom groups within an organization for the purpose of providing granular control and/or access at the application level. A user assigned to an organization can have various roles across applications within that organization. That role grants or restricts what he/she can do with the application. This supports the most common deployments of Contrast in which an organization contains multiple applications with many users; however, the users associated with the organization may only require awareness of one or just a couple of the many applications within the organization. This allows users to focus directly on what matters to them rather than sorting through infromation that has no bearing on their work. 

Go to the **Groups** section of the Organization Settings page. From there:

* Configure a new group by clicking the **Add Group** button
* See all groups (both default and custom) and hone in on anything specific by searching or using the quick views alongside the group search 
* **View** the details of any group by clicking the Group Name
* **Edit** a group from the Edit Group page by clicking the Group Name. Make any modifications as needed. You may change the Group Name or Application Access as well as change members of the group. Make sure to **Save** changes.
* **Delete** any group by simply clicking the trash can icon on the row. This action can also be done if viewing the details of a group in the lower left corner of the Edit Group page. Once this action is confirmed, the group is removed and any access provided by that group is revoked from any of the users assigned to the group.

>**Note:** The default groups provided by Contrast, indicated with a lock icon, cannot be modified, as far as applications and role, or deleted. You can only add or remove users from these default groups. 

#### Guest users
In some cases, a user has a GUEST designation next to their name on the **Users** page in Organization Settings. This means the user received an Organization role from an Organization Group created in the System Administration interface.  

Guest users can’t be managed by an Organization Admin. They have the organization role and the application access provided to them by the system-created organization group. An Organization Admin can add a guest user to their organization by clicking on the GUEST link. Once this has happened, that user can then be edited as well as assigned to any group. Deleting a user that was once a guest reverts that user back to a GUEST user, if they still have access to the organization from a system-created group.

#### Role Collision

If you place a user into multiple groups that assigns different roles to the same application, it creates role collision. The roles, from most to least restrictive, are Unassigned, View, Edit, Rules Admin, Admin. For more information on each role, see the [Manage Users](admin-manageorgs.html#manage-user) article.

Contrast handles collisions by the rule of least privileges: the role that provides the most restrictive access applies.

> **Example:** If you assign a user to the "Admin" group and then assign that same user to the "Edit" group, the user has the "Edit" role for all applications because "Edit" is more restrictive than "Admin".

Contrast also handles role collision by determining the specificity of the role assignment. A role assigned to a specific application overrides a role assigned to all applications, even if the application-specific role is more permissive than the role given to all applications. 

> **Example:** If you assign a user to the "View" group, and then assign them to a custom access group that provides the "Admin" role to App1, the user has the "Admin" role for App1 and the "View" role for the remaining applications.

If a user is assigned to two custom groups that provide roles to the same application, the rule of least privilege applies.

> **Example:** If you assign a user to a custom group that provides the "Rules Admin" role to App1, and then assign them to another group that provides the "No Access" role to App1, the user has "No Access" to App1 because both roles are specific and "No Access" is more restrictive than "Rules Admin".

An administrator can see the level of access assigned to a user and which groups provide that access by editing the user and scrolling down to see the user’s organization permissions. Hovering over the access indicators provides information about the group that provides the existing level of access.

