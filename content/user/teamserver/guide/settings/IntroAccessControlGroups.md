<!--
title: "About Access Control Groups"
description: "Overview of access control groups"
-->

## About Access Control Groups
Administrators have the ability to define new policies for providing/restricting access and privileges to users within TeamServer. The policies are defined via an Access Control Group which controls access and capability at the System, Organization and Application level within TeamServer. There are two types of Access Control Groups: System and Organization. System groups allow for delegated system administration. Organization groups allow for cross-organization access and application access/restriction.

## Delegated System Administration Groups (EOP Only)
Enterprise On-Premise (EOP) customers have the ability to delegate user accounts to perform system administration functions across organizations. This assumes multiple organizations have been created within Contrast TeamServer as part of a multi-tenant deployment. This feature allows users to perform administrative functions across mutliple organizations such as managing users, groups, applications, API keys and security policies.

### Creating System Administration Groups
A system group is a convenient way to manage administrative tasks across users and organizations. Users can belong to many groups. They do not have to be created within an organization in order to gain access to that organization. The system group is defined by four pieces of information:

* Group Name
* Role (System, Observer and No Access)
* Organization(s)
* User(s)

Groups are highly flexible. They can be configured with a single role and single organization, a single role with multiple organizations, as well as multiple roles with multiple organizations. 

| Field           | Value                                                                                                                                                                                                                                       |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name            | Unique string defining the name of the system or organization group (ie: My Test Group)                                                                                                                                                     |
| Role            | System: Administrative privileges in the SuperAdmin interface. Observer: View only privilege in the SuperAdmin interface. No Access: Restrict access to an organization.  Note: Multiple roles can be defined for a given group of users. |
| Organization(s) | Select one or more organizations to associate with a one or more roles.                                                                                                                                                                     |
| User(s)         | Select one or more users to assign to a group.|

### Navigating to the System Administration Interface
When a user is assigned to a system administration group that contains one or more organizations outside of their default organization, a new menu item is presented to the user with the label "Admin". By selecting that item, the user has access to the SuperAdmin interface with access to manage organizations, applications, users and groups associated with the organization(s) defined in the system administration group the user is assigned to.

When a user is actively in the system administration pages, a checkmark will be presented in the drop-down menu. In addition, the word "ADMIN" will appear to the right of the user's name in the navigation bar.

## Cross-Organizational Account Access and Activity (EOP Only)
Enterprise On-Premise (EOP) customers will now have the ability to identify user accounts with permissions to perform activities across organizations beyond the user's default organization. This assumes multiple organizations have been created within Contrast TeamServer as part of a multi-tenant deployment. This feature allows users to toggle between many organizations by selecting their username and navigating the drop-down menu in the main navigation bar.

The goal of this feature is to allow users access to more than one organization. Within those organizations, a policy can be defined with regards to all, some or as few as one application. This gives customers greater control when setting-up their TeamServer to appropriately segment applications across various organizations.

A typical use case of this functionality is defining permissions for an overlay application security group that supports multiple business units.  Each business unit is setup as a separate organization, each with their own applications.  The application security team that supports all these business units will need access to all applications in all organizations.  These application security users can be assigned to a cross-organizational access group and they can switch between organizations freely using the organization toggle feature.

### Creating Cross-Organization Access Groups
Groups with cross-organizational access control policies are created within the SuperAdmin interface. Either the SuperAdmin, delegated SuperAdmin or even users assigned the the System Group with system administrative privilege are granted the ability to create, edit or delete organization groups. 

| Field           | Value                                                                                                                                                                                                                                       |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name            | Unique string defining the name of the system or organization group (ie: My Test Group)|
| Organization(s) | Select one or more organizations to associate with a one or more roles.|
| Organization Role | Define a single role per organization based on the following existing organizational roles (ADMIN, EDIT, VIEW, RULES_ADMIN and NO_ACCESS).|
| Application Role | Define a single role across all applications based on the following applications roles (ADMIN, EDIT, VIEW and RULES_ADMIN).|
| Exceptions       | Define an exception per application with an application role (ADMIN, EDIT, VIEW, RULES_ADMIN and NO_ACCESS).|
| User(s)         | Select one or more users to assign to a group.|


**Note**: Groups can be configured within the Settings page within a given organization, rather than within the system administration pages. However, when configuration occurs within the organization, the ability to grant the ability to traverse across applications no longer exists. See the section directly below about Application Controls within an Organization.

## Application Controls within an Organization (Applies to SaaS and EOP)
Groups can be defined within an organization for the purpose of providing granular control and/or access at the application level. In previous releases of TeamServer, if a user was assigned to an organization, he/she had a single role within that organization. That role restricted what he/she could do across all applications within an organization. 

Groups defined at the organization level provide organizational administrators the ability to define policies for one or more users across one or more applications. This supports the most common deployments of TeamServer in which an organization contains multiple applications with many users, however, the users associated with the organization may only require awareness of one or just a couple of the many applications within the organization. In this case, an organizational group should be defined to either provide or limit access by application.

A typical use case of restricting access to applications is allowing development teams direct access to Contrast TeamServer.  Using application level permissions, when a developer logs into TeamServer, she will see only the applications she has direct responsibility over, allow her to focus directly on what matters, rather than having to sort through information that has no direct bearing on her work.

Another example is that of a development lead, who many have edit access to application his team is responsible, but view level access to other applications in his organization for the purpose of information sharing between other development leads to develop best practices for development teams.


### Creating Groups within an Organization
Groups with application access control policies are created within the organization's settings page. A user with organizational administrative privilige can create, edit or delete groups. 

| Field           | Value                                                                                                                                                                                                                                       |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name            | Unique string defining the name of the system or organization group (ie: My Test Group)|
| Member(s)         | Select one or more users to assign to a group.|
| Organization Role | Define a single role per organization based on the following existing organizational roles (ADMIN, EDIT, VIEW, RULES_ADMIN and NO_ACCESS).|
| Application Role | Define a single role across all applications based on the following applications roles (ADMIN, EDIT, VIEW and RULES_ADMIN).|
| Exceptions       | Define an exception per application with an application role (ADMIN, EDIT, VIEW, RULES_ADMIN and NO_ACCESS).|

### Pre-Existing Organization Groups
You may notice four pre-existing groups within each organization. These organizations are often titled "Organization Name (role) (orgID)" such as "ACME Publishing admin (350)". The four pre-defined access control groups are read-only and cannot be modified by any users including SuperAdmin. When a user is created with a default organization, he or she is also given a defaul role (admin, view, edit or rules admin). The user is subsequently assigned on creation to one of these default access control groups. 
