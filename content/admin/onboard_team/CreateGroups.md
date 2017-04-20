<!--
title: "Create Groups"
description: "Creating Access Control Groups within Contrast TeamServer"
tags: "Admin onboarding TeamServer groups acls access create"
-->

Contrast provides role based access control (RBAC) capabilities through groups. Administrators have the ability to create these groups for providing or restricting system, organization and application access and privileges to users within Contrast. Contrast has two types of access control groups: **System** and **Organization**. System groups, only available to on-premises customers, allow for delegated system administration. Organization groups allow for cross-organization access and application access/restriction.

## Creating System Administration Groups
A system group is a convenient way to manage administrative tasks across users and organizations. Users can belong to many groups. They do not have to be created within an organization in order to gain access to that organization. 

Groups are highly flexible. They can be configured with a single role and single organization, a single role with multiple organizations, or multiple roles with multiple organizations. 

| Field           | Value         |
|-----------------|---------------|                                             
| Name            | Unique string naming the system group (ie: "My Company")  | 
| Role            | **System:** Administrative privileges in the System Administration interface. |
|     | **Observer:** View-only privileges in the System Administration interface |
|     | **No Access:** Restrict access to an organization  |
|     | **Note:** Multiple roles can be defined for a given group of users |
| Organization(s) | Select one or more organizations to associate with one or more roles    |                                                            
| Member(s)         | Select one or more users to assign to a group |

When a user is added to a system administration group that contains one or more organizations outside their default organization, they will then have access to the System Administration interface. A new **SuperAdmin** option in the user menu will be available for them to navigate to for managing the organization(s), applications, users and groups associated with the organization(s) defined. 

## Default Organization Groups
An organization group is used to assign authorized users access to organizations and applications. Contrast provides four default groups within each organization to help you get started. These groups provide access to all applications in the organization with the associated role. That role grants or restricts what he/she can do with the application. Those roles are:

* **View:** Allows users to see an application's score, libraries and vulnerabilities, and add comments
* **Edit:** Allows users to manage an application's vulnerabilities as well as basic application management functions
* **Rules Admin:** Allows users all the capabiity of the Edit role plus the ability to manage security rules for an application 
* **Admin** Provides full access to configure an application 

## Creating Organization Groups 
If more granular control is required, you can create organization groups in the System Administration interface (EOP customers and System Administrators only) for cross-organizational access control as well as within a specific organization's Organization Settings page if you have an Admin role for that organization. Groups created from the Organization Settings page only impact the roles and permissions of the organization in which they are created. 

<a href="assets/images/Create_Group.png" rel="lightbox" title="Add Group"><img class="thumbnail" src="assets/images/Create_Group.png"/></a>

| Field           | Value                                                                                                                                                                                                                                       |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name            | Unique string naming the system or organization group (ie: My Test Group)|
| Organization(s) **SuperAdmin only** | Select one or more organizations to associate with one or more roles|
| Organization Role **SuperAdmin only** | **No Access:** The user has no access to the organization.  |
|     | **View:** The user has read-only access to an organization's findings in Contrast. |
|     | **Edit:** The user can interact with the full lifecycle of vulnerabilities as well as bring applications online and delete them. This user has no administration capabilities and can't perform any organization administration functions. This role is appropriate for the vast majority of Contrast users.  |
|     | **Rules Admin:** The user has the same privileges as an Edit user in addition to being able to edit policy and rules. |
|     | **Admin:** The user is responsible for configuration of the organization with the ability to license applications, manage user accounts and perform other advanced configuration functions. |
| Application Access | Define access as a pairing of application(s) and role. In the applications field, select a single application, multiple applications or all applications. Then select the role you want to provide to those applications. A single group can provide more than one role assignment by clicking **Add Access** to add another line in the group definition to define a separate application and role assignment.|
| Member(s)         | Select one or more users to assign to a group. See [Create Users](tbd) for more information.|

>**Example:** App1 and App2 with the role Admin on a single line. App3 and App4 with the role Edit on another line. This means the group provides users the Admin role for App1 and App2 and only Edit role for App3 and App4.

For more information, read about how to [Manage Groups](admin_manageorgs.html#access). 
