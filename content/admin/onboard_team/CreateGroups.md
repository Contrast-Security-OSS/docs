<!--
title: "Create Groups"
description: "Creating Access Control Groups within Contrast TeamServer"
tags: "Admin onboarding TeamServer groups acls access create"
-->

Contrast provides role-based access control (RBAC) capabilities through groups. Administrators can create these groups to provide or restrict system, organization and application access and privileges to users in Contrast. Contrast has two types of access control groups: **System** and **Organization**. System groups, which are only available to on-premises customers, allow for delegated system administration. Organization groups allow for cross-organization access and application access/restriction.

## Create System Administration Groups

A system group is a convenient way to manage administrative tasks across users and organizations. Users can belong to many groups. You don't have to create the user within an organization in order for the user to gain access to that organization. 

Groups are highly flexible. You can configure them with a single role and single organization, a single role with multiple organizations, or multiple roles with multiple organizations. 

* In the **Name** field, add an unique string naming the system group (ie: "My Company"). 

* In the **Role** field, choose from one of the following:
 * **System:** Administrative privileges in the System Administration interface.
 * **Observer:** View-only privileges in the System Administration interface.
 * **No Access:** Restrict access to an organization.
 * **Note:** You can define multiple roles for a given group of users.
 
* In the **Organization(s)** field, select one or more organizations to associate with one or more roles.

* In the **Member(s)** field, select one or more users to assign to a group. 

When you add a user to a System Administration group that contains one or more organizations outside their default organization, the user then has access to the System Administration interface. A **SuperAdmin** option in the user menu becomes available to them for managing the organization(s), applications, users and groups associated with the defined organization(s). 

## Default Organization Groups

Use an organization group to assign authorized users access to organizations and applications. Contrast provides four default groups within each organization to help you get started. These groups provide access to all applications in the organization with the associated role. That role grants or restricts what the user can do with the application. The four roles are:

* **View:** Allows users to see an application's score, libraries and vulnerabilities, and add comments.
* **Edit:** Allows users to manage an application's vulnerabilities and basic application functions.
* **Rules Admin:** Allows users the capability of the Edit role as well as the ability to manage security rules for an application.
* **Admin** Provides full access to configure an application. 

## Create Organization Groups 

If you need more granular control, create organization groups in the System Administration interface (available only to EOP customers and System Administrators) for cross-organizational access control. As an Admin for the organization, you can also create a group in the Organization Settings page. Groups created from the Organization Settings page only impact the roles and permissions of the organization in which they are created. 

<a href="assets/images/Create_Group.png" rel="lightbox" title="Add Group"><img class="thumbnail" src="assets/images/Create_Group.png"/></a>

* In the **Group Name** field, add a unique string naming the system or organization group (i.e., My Test Group).

* In the **Organization(s)** field (available only to SuperAdmins), select one or more organizations to associate with one or more roles.

* In the **Organization Role** field (available only to SuperAdmins), choose from the following:

 * **No Access:** The user has no access to the organization.
 * **View:** The user has read-only access to an organization's findings in Contrast. 
 *  **Edit:** The user can interact with the full lifecycle of vulnerabilities as well as bring applications online and delete them. This user has no administration capabilities and can't perform any organization administration functions. This role is appropriate for most Contrast users. 
 * **Rules Admin:** The user has the same privileges as an Edit user as well as the ability to edit policy and rules. 
 * **Admin:** The user is responsible for configuration of the organization with the ability to license applications, manage user accounts and perform other advanced configuration functions. 

* In the **Application Access** field, define access as a pairing of application(s) and role. In the applications field, select a single application, multiple applications or all applications. Then select the role you want to provide to those applications. A single group can provide more than one role assignment by clicking **Add Access** to add another line in the group definition to define a separate application and role assignment.

* In the **Member(s)** field, select one or more users to assign to a group. See the article to [Create Users](admin-onboardteam.html#create-user) for more information.

>**Example:** Add user access to App1 and App2 with the Admin role on one line. Click the link to **Add access** to App3 and App4 with the role Edit on the next line. Therefore, the group provides the Admin role for App1 and App2 but the Edit role for App3 and App4 to the selected users.

For more information, read about how to [Manage Groups](admin-manageorgs.html#access). 
