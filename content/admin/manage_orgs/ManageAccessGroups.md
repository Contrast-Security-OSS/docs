<!--
title: "Manage Access Groups"
description: "Overview of managing access groups"
tags: "Admin manage organizations access groups"
-->

Contrast provides role-based access control (RBAC) capabilities through groups. Administrators can create these groups to provide or restrict system, organization and application access and privileges to users within Contrast. Contrast has two types of access control groups: **System** and **Organization**. System groups, which are only available to on-premises customers, allow for delegated system administration. Organization groups allow for cross-organization access and application access/restriction.

## System Administration Groups

A system group is a convenient way to manage administrative tasks across users and organizations. Users can belong to many groups. They don't have to be created within an organization in order to gain access to that organization. 

### Manage System Groups

When you add a user to a system administration group that contains one or more organizations outside their default organization, the user has access to the System Administration interface. A new **SuperAdmin** option in the user menu is be available, which allows them to managing the organization(s), applications, users and groups associated with the defined organization(s). 

Go to the **Groups** page in the System Administration interface. From there:

* Configure a new group by clicking the **Add Group** button.
* See all system-created groups by either filtering in the **Type** column or selecting any of the **System Role** quick views in the dropdown menu. 
* Click the Group name to go to the **Edit Group** configuration page, where you can view the details of the group and make any modifications. You may change System Access or Role as well as change members of the group. Make sure to **Save** changes.
* **Delete** any system-created group by clicking the trash can icon in the grid row or in the Edit Group page. Once this action is confirmed, the group is removed and any access provided by that group is revoked from all users assigned to the group.

## Organization Groups

Use an organization group to assign authorized users access to organizations and applications. An Organization Admin can create, edit and delete groups from the Organization Settings page. System administrators (EOP only) can also create [Cross-Organization Groups](admin-manageorgs.html#crossorg) to allow users access to more than one organization.

Contrast provides four default groups within each organization. These groups provide access to all applications in the organization with the associated role. That role grants or restricts what the user can do with the application. Those roles are:

* **View:** Allows users to see an application's score, libraries and vulnerabilities, and add comments.
* **Edit:** Allows users to manage an application's vulnerabilities as well as basic application management functions.
* **Rules Admin:** Allows users all the capability of the Edit role plus the ability to manage security rules for an application. 
* **Admin:** Provides full access to configure an application.

### Manage Organization Groups

Organization administrators can create custom groups within an organization for the purpose of providing granular control and/or access at the application level. This supports the most common deployments of Contrast, in which an organization contains multiple applications with many users.

A user assigned to an organization can have various roles across applications within that organization; each role grants or restricts what the user can do with the given application. However, the users associated with the organization may only require awareness of one or few of the many applications within the organization. This allows users to focus directly on what matters to them rather than sorting through information that has no bearing on their work. 

Go to the **Groups** section of the Organization Settings page. From there:

* Configure a new group by clicking the **Add Group** button.
* See all groups (both default and custom) and focus on specific details by using the group search field or quick views in the dropdown menu.  
* Click the Group name to go to the **Edit Group** configuration page, where you can view the details of the group and make any modifications. You may change the Group name, Application Access and members of the group, and then **Save** your changes. To allow applications to be added to a group during onboarding, choose **Applications onboarded to group** in the Application Access field. 

* **Delete** any group by clicking the trash can icon in the grid row or on **Edit Group** configuration page. Once this action is confirmed, the group is removed and any access provided by that group is revoked from any of the users assigned to the group.

>**Note:** The default groups provided by Contrast, indicated with a lock icon, have fixed applications and roles, and can't be deleted. You can only add or remove users from these default groups. 

#### Guest users

In some cases, a user has a Guest designation, which is indicated beside their name on the Users page in Organization Settings. This means the user received an organization role from an Organization Group created in the System Administration interface.  

An Organization Admin can add a guest user to their organization by clicking on the **Guest** link. They can then edit the user and assign them to any group. However, an Organization Admin can't manage guest users, as the system-created organization group designates the organization role and the application access for the user. Deleting a user that was once a Guest reverts that user back to a Guest role, if the user still has access to the organization from a system-created group.

#### Role collision

If you place a user into multiple groups that assigns different roles to the same application, it creates role collision. The roles, from most to least restrictive, are: No Access, View, Edit, Rules Admin and Admin. If the user has no role assigned to an application, the user won't be able to access it. For more information on each role, see the [Manage Users](admin-manageorgs.html#manage-user) article.

Contrast handles collisions by the rule of least privileges: the role that provides the most restrictive access applies.

> **Example:** If you assign a user to the Admin group and then assign that same user to the Edit group, the user has the Edit role for all applications because Edit is more restrictive than Admin.

Contrast also handles role collision by determining the specificity of the role assignment. A role assigned to a specific application overrides a role assigned to all applications, even if the application-specific role is more permissive than the role given to all applications. 

> **Example:** If you assign a user to the View group, and then assign them to a custom access group that provides the Admin role for App1, the user has the Admin role for App1 and the View role for the remaining applications.

If a user is assigned to two custom groups that provide roles for the same application, the rule of least privilege applies.

> **Example:** If you assign a user to a custom group that provides the Rules Admin role for App1, and then assign them to another group that provides the No Access role for App1, the user has No Access to App1 because both roles are specific and No Access is more restrictive than Rules Admin.

An administrator can see the level of access assigned to a user and which groups provide that access by going to the **Edit User** page. Hover over the access indicators for information about the group that provides the existing level of access. For more information, go the the [Manage Users](admin-manageorgs.html#manage-user) article.

