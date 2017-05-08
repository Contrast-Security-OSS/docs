<!--
title: "About Access Control"
description: "Overview of access control groups"
tags: "Admin onboard TeamServer access groups"
-->

## About Access Control
Administrators have the ability to define new policies for providing or restricting access and privileges to users within Contrast. The policies are defined via groups which control access and capability at the system, organization and application levels. There are two types of access control groups: **System** and **Organization**. System groups allow for delegated system administration. Organization groups allow for cross-organization access and application access/restriction.

## Delegating System Administration Access (EOP Only)
Enterprise On-Premises (EOP) customers have the ability to delegate user accounts to perform system administration functions across organizations. This assumes multiple organizations have been created within Contrast as part of a multi-tenant deployment. This role allows users to perform administrative functions such as managing users, groups, applications, licenses, API keys and security policies.

### Creating System Administration Groups
A System group is a convenient way to manage administrative tasks across users and organizations. Users can belong to many groups. They do not have to be created within an organization in order to gain access to that organization. The System group is defined by four pieces of information:

* Group Name
* Role (System, Observer and No Access)
* Organization(s)
* User(s) 

Groups are highly flexible. They can be configured with a single role and single organization, a single role with multiple organizations, or multiple roles with multiple organizations. 

| Field           | Value         |
|-----------------|---------------|                                             
| Name            | Unique string naming the system group (ie: "My Company")  | 
| Role            | **System:** Administrative privileges in the SuperAdmin interface. |
|     | **Observer:** View-only privileges in the SuperAdmin interface |
|     | **No Access:** Restrict access to an organization  |
|     | **Note:** Multiple roles can be defined for a given group of users |
| Organization(s) | Select one or more organizations to associate with one or more roles    |                                                            
| Member(s)         | Select one or more users to assign to a group |

### Navigating To The System Administration Interface
When a user is assigned to a system administration group that contains one or more organizations outside of their default organization, a new menu item is presented to the user with the label **Admin**. By selecting that item, the user can use the SuperAdmin interface to manage the organizations, applications, users and groups associated with the organization(s) defined in the system administration group that the user is assigned to.

When a user is actively in the system administration pages, a checkmark will be presented in the drop-down menu to indicate how Contrast is currently being used. In addition, the word "ADMIN" will appear to the right of the user's name in the navigation bar.

### Guest users

In some cases, a user has a Guest designation next to their name in the Users interface in Organization Settings. This designation means that the user received an Organization role from an Organization Group created in the System Administration interface.  

For example, as a System Admin in the System Administration interface, you can create a group that provides a View Organization role and then add UserA to OrgA. In the Users screen in OrgA, UserA appears with “Guest” next to their name.

Guest users can’t be managed by an Organization Admin. They have the Organization role and the Application access provided to them by the system-created Organization group. An Organization Admin can add a Guest user to their organization by clicking on the **GUEST** link. Once this has happened, they can edit the user as well as assign them to any group. Deleting a user that was once a Guest reverts that user to a Guest user, if they still have access to the organization from a system-created group.

### Creating Cross-Organization Groups
Groups with cross-organizational access control policies are created within the SuperAdmin interface. Either the SuperAdmin, delegated SuperAdmin, or even users assigned to a system group with system administrative privileges are granted the ability to create, edit or delete organization groups. 

| Field           | Value                                                                                                                                                                                                                                       |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name            | Unique string naming the organization group (ie: My Test Group)|
| Organization(s) | Select one or more organizations to associate with one or more roles|
| Organization Role | Define a single role per organization based on the following existing organizational roles (No Access, View, Edit, Rules Admin, and Admin)|
| Application Role | Define a single role across all applications based on the following applications roles (No Access, View, Edit, Rules Admin, and Admin)|
| Exceptions       | Define an exception per application with an application role (No Access, View, Edit, Rules Admin, and Admin)|
| Member(s)         | Select one or more users to assign to a group|


>**Note**: Groups can also be configured within the Organization Settings page of a given organization. However, when configuration is done this way, the functionality to grant the option to traverse across applications no longer exists. See the section directly below about Application Controls within an Organization.

## Application Access Within An Organization (SaaS and EOP)
Organization administrators can use groups within an organization for the purpose of providing granular control and/or access at the application level. A user assigned to an organization can have various roles across applications within that organization. That role grants or restricts what he/she can do with the application. This supports the most common deployments of Contrast in which an organization contains multiple applications with many users; however, the users associated with the organization may only require awareness of one or just a couple of the many applications within the organization. An organizational group can provide or limit the access accordingly.

A typical use case of restricting access to applications is allowing development teams direct access to Contrast. When a developer logs into Contrast using application level permissions, they will see only the applications they have direct responsibility over, allowing them to focus directly on what matters rather than having to sort through information that has no direct bearing on their work.

Another example is that of a development lead. This user would typically have Edit level access to all applications for which his team is responsible, but View level access to other applications in his organization. This is for the purpose of information sharing between other development leads in order to develop best practices for development teams.

### Default Organization Groups
Contrast provides four default groups within each organization. These pre-defined access groups, which cannot be modified, provide users access to all applications within an organization along with an assigned role. Those roles are:

* **View:** Allows users to see an application's score, libraries and vulnerabilities, and add comments
* **Edit:** Allows users to manage an application's vulnerabilities as well as basic application management functions
* **Rules Admin:** Allows users all the capabiity of the Edit role plus the ability to manage security rules for an application 
* **Admin** Provides full access to configure an application 

### Creating Organization Groups
For organizations that require more granular access control, groups can be created from the **Organization Settings** page to define application access policies. A user with organizational administrative privileges can create, edit or delete groups. 

| Field           | Value                                                                                                                                                                                                                                       |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name            | Unique string naming the system or organization group (ie: My Test Group)|
| Member(s)         | Select one or more users to assign to a group|
| Organization Role | Define a single role per organization based on the following existing organizational roles (View, Edit, Rules Admin, Admin)|
| Application Role | Define a single role across all applications based on the following applications roles (No Access, View, Edit, Rules Admin, Admin)|
| Exceptions       | Define an exception per application with an application role (No Access, View, Edit, Rules Admin, Admin)|

