<!--
title: "Create Groups"
description: "Creating Access Control Groups within Contrast TeamServer"
tags: "Admin onboarding TeamServer groups acls access create"
-->

Contrast provides [role](admin-manageorgsroleperm.html)-based access control (RBAC) capabilities through groups. Administrators can create these groups to provide or restrict system, organization, and application access and privileges to users in Contrast. 

Contrast has two types of access control groups: **System** and **Organization**. System groups, which are only available to Enterprise-on-Premises (EOP) customers, allow for delegated system administration. Organization groups allow for cross-organization access and application access rules.

## System Administration Groups

A system group is a convenient way to manage administrative tasks across users and organizations. Users can belong to many groups; you can configure them with a single role and single organization, a single role with multiple organizations, or multiple roles with multiple organizations. 

You can also grant a user access to an organization in which they were not created. When you add a user to a System Administration group that contains one or more organizations outside their default organization, the user then has access to the System Administration UI. The **SuperAdmin** option in the user menu becomes available to them for managing the organization(s), applications, users and groups associated with the defined organization(s). 

### Add a new group

To add a new group, go to the **user menu > SuperAdmin > Groups page**. Choose the button to **Add Group** and complete the following fields in the configuration dialog.  

<a href="assets/images/Add-system-group.png" rel="lightbox" title="Create a System group"><img class="thumbnail" src="assets/images/Add-system-group.png"/></a>

* Add an unique string naming the system **Group** (i.e., "My Company"). 
* Select **System** from the **Type** menu. 
* In the **System Access** fields, choose a pairing of one or more **organizations** and one of the following **roles**: 
 * **System:** Administrative privileges in the System Administration UI.
 * **Observer:** View-only privileges in the System Administration UI.
 * **No Access:** Restricts access to an organization.

* To add another role and organization(s) pairing, select the link to **Add system access**. 
* In the **Members** field, select one or more Contrast users to assign to the group. 
* Once the group information is complete, click the **Add** button. 

The completed group will appear in the **Groups** grid.

## Default Organization Groups

Use an organization group to assign authorized users access to organizations and applications. Contrast provides four default groups within each organization to help you get started. These groups provide access to all applications in the organization with the associated role. That role grants or restricts what the user can do with the application. The four roles are:

* **View:** See an application's score, libraries and vulnerabilities, and add comments.
* **Edit:** Manage an application's vulnerabilities and basic application functions.
* **Rules Admin:** Capability of the Edit role as well as the ability to manage security rules for an application.
* **Admin:** Full access to configure an application. 

## Custom Organization Groups 

If you need more granular control, create organization groups in the System Administration interface (available only to EOP customers and System Administrators) for cross-organizational access control. As an Admin for the organization (OrgAdmin), you can also create a group in the **Organization Settings** page. Groups created in **Organization Settings** only impact the roles and permissions of the organization in which they are created. 

> **Note:** You can also choose to have **Applications onboarded to group**, which allows you to grant group access to individual applications during the onboarding process. 

### Add a new group

#### System Administration 

To add a new group as a SuperAdmin, go to the **user menu > SuperAdmin > Groups page**. Choose the button to **Add Group** and complete the following fields.  

<a href="assets/images/Add-organization-group-superadmin.png" rel="lightbox" title="Add an Organization group in the System Administration UI"><img class="thumbnail" src="assets/images/Add-organization-group-superadmin.png"/></a>

* Add a unique string for the **Group Name** (i.e., "My Test Group").
* From the **Type** menu, select **Organizational**. 

* In the **Organization** menu, select one or more organizations. These organizations will be associated with one or more roles.

* Choose an **Organization Role** from the dropdown menu. (The [Edit role](https://docs.contrastsecurity.com/admin-manageorgsroleperm.html) is appropriate for most Contrast users.)
* In the **Application Access** fields, choose a pairing of one or more  **application(s)** and one  **role**. 
 * Click **Add Access** link to define separate application and role assignment(s).
* In the **Members** field, select one or more Contrast users to assign to the group.

> **Example:** In the first line of the **Application Access** section, add access to App1 and App2 with the "Admin" role. Click the link to **Add access** to App3 and App4 with the role "Edit" on the next line. Therefore, the group provides the "Admin" role for App1 and App2, but the "Edit" role for App3 and App4, to the Contrast users that you designated in the **Members** field.

* Once the group information is complete, click the **Add** button.  

The completed group will appear in the **Groups** grid.

#### Organization Settings

To add a new group as an OrgAdmin, go to the **user menu > Organization Settings > Groups tab**. Select the button to **Add Group** and complete the following fields.

<a href="assets/images/Add-organization-group-orgadmin.png" rel="lightbox" title="Add an Organization group in Organization Settings"><img class="thumbnail" src="assets/images/Add-organization-group-orgadmin.png"/></a>

* Add a unique string for the Group Name (i.e., "My Org").
* In the **Application Access** fields, choose a pairing of one or more  **application(s)** and a **role**. (See the **Example** above.)
 * Click **Add Access** link to define separate application and role assignment(s) in a separate line.
* In the **Members** field, select one or more Contrast users to assign to the group. 
* Once the group information is complete, click the **Add** button. 

The completed group will appear in the **Groups** grid.

## Learn More

* [Create Users](admin-onboardteam.html#create-user) 
* [Manage Groups](admin-manageorgs.html#access) 
* [User Roles & Permissions](admin-manageorgsroleperm.html)

