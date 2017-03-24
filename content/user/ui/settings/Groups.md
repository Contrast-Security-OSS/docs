<!--
title: "Access Control Groups"
description: "Creating, Managing and Deleting Access Control Groups"
tags: "TeamServer groups acls"
-->

Contrast provides role based access control (RBAC) capabilities through groups. RBAC is an approach used to assign system, organization and application access to authorized users. Contrast has two types of groups: Organization Groups, which are used to assign organization and application access, and System Groups, which are used to assign system access. System Groups are only available to on-premises customers.

## Organization Groups

Contrast uses Organization Groups to assign authorized users access to organizations and applications. You can create Organization Groups in the System Admin interface as well as within a specific organization in the Organization Settings interface.

### Overview of the Organization Groups interface

The Groups interface is accessed from Organization Settings. As an Organization Administrator, you can create, edit and delete groups from this interface. In the overview, you can see all the groups that affect only the organization you are logged into, the application role provided by the group, as well as how many users and applications are managed. Hovering over the details in each group provides information about the applications, users and the roles provided to the group members.

Each organization has four default groups: View, Edit, Rules Admin and Admin. These groups provide access to all applications in the organization with the associated role. In other words, if a user is placed in the Admin group, that user has the application administrator role for all applications in the organization. Users should only be placed in one of the four default groups at a time. Users can be added or removed from these default groups, but they can’t have their applications or roles edited and they can’t be deleted.

### Creating an Organization Group from Organization Settings

Groups created from the Organization Settings interface only impact the roles and permissions of the organization in which they are created. 

> For example, let’s say that you have two organizations in Contrast: OrgA and OrgB. When you log into OrgB and create a group in OrgB, the permissions and roles that you define affect only OrgB users and OrgB applications.

To create a group, you must have an Admin role in the organization in which you want to create the group. Once you log in as an Admin, navigate to the Organization Settings interface and then to the Groups interface.

Begin creating your group by defining the level of access that you want the group to provide. Groups define access as a pairing of application(s) and role. In the applications field, select a single application, multiple applications or all applications. Then select the role you want to provide to those applications. The available roles are Admin, Rules Admin, Edit, View and No Access. 

For more information, read the article on [Roles](user_tsguideset.html#roles).

>Example: You can select App1 and App2 and the role Admin in a single line. This means the group provides users the Admin role for App1 and App2.

A single group can also provide more than one role assignment. Select **Add Access** to add another line in the Group definition, and define a separate application and role assignment. 

> From the previous example: Your group provides Admin access to App1 and App2. You can add a second access line that provides Edit access to App3 and App4.

Once you define the access that you want the group to provide, you can assign the users that you want to receive this access. You may select any user that is in your organization, other than yourself or any user that is considered a Guest user. When you’re finished, just hit **save** to create your access group.

To read more about Guest users, refer to the section under [About Access Control](user_tsguideset.html#access).

### Editing an Organization Group from Organization Settings

To edit an existing organization, go to the Edit interface by selecting the organization’s name. Within the interface, you can edit any of the fields that are available when creating a group. This includes the name of the group, the users assigned to the group and any access provided by the group. 

Default groups are the single exception here. You can add or remove users from a Default group, but you can’t edit any of the applications or the roles to which the group provides access.

> Example: If your access group has three users and provides Admin access for App1 and App2, as well as Edit access for App3 and App4, I can edit the group to:
* remove User3 and add User4 
* move App2 from the Admin access row to the Edit access row 
* remove App4 from Edit access and add App5 to Admin access. 

Once you’re done editing, just hit **save** to keep your changes.

### Deleting an Organization Group from Organization Settings

Groups can be deleted from the Groups interface by selecting the trash can icon in the row of the group that you want to delete, and then confirm the operation. Once confirmed, the group is removed and any access provided by that group is revoked from any of the users assigned to the group.

## Access Collision

If you place a user into multiple groups that provide different role access to the same application, it creates access collision. Contrast handles collisions by the rule of least privileges: the group that provides the most restrictive access applies their access to the applications involved.

> Example: Let’s say that a group provides Edit level access to App1, another group provides RulesAdmin level access to App1, and you place a user in both groups. The user’s access for App1 will be Edit because it’s more restrictive than RulesAdmin.

An administrator can see the level of access assigned to a user and which groups provide that access by editing the user and scrolling down to see the user’s organization permissions. Hovering over the access indicators provides information regarding the group that provides the existing level of access.

