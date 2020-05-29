# Protect

Protect is a defensive control for production environments that monitors attacks and actively defends applications based on how they are vulnerable. Protect offers Runtime Application Self Protection that complies with NIST 800-53, PCI-DSS, PCI-SSS, and other industry standards. Protect operates directly inside runtimes such as Java, .NET, Node.js, Ruby, and Python, to leverage in-app intelligence without any manual tuning. Other software platforms can be defended with the [Proxy Agent](https://contrastsecurity.paligoapp.com/document/preview/2931#UUID-be10accb-cb7a-39fa-9490-fdcc4cea6a12), a layer-7 based network control.

Contrast Protect works inside software APIs to understand complete data flow rather than network traffic - rather than simply seeing incoming data, Protect sees the same data and watches its impact on underlying actions, such as complete SQL queries, command arguments, and more. By using this data flow, Protect can differentiate when an application is under attack through hostile data and when this hostile data meets vulnerable functions and methods. This analysis improves the accuracy, separating the noise of many attacks to focus on attacks that met their intended target. This insight can be shared with external systems, such as a SIEM, to focus on key attack events. 

Protect limits its impact on performance by operating with the same shared memory as the application to avoid additional loads. Contextual defense improves performance by avoiding unnecessary actions: for example NoSQL applications do not need checks against SQL Injection if the SQL APIs are never invoked.

When Protect is enabled you can set the following Protect policies:

- **Protect Rules:** Set applications to monitor for attacks.
- **Virtual Patches:** Define custom defenses against specific vulnerabilities.
- **Log Enhancers:** Provide additional instrumentation instructions.
- **IP Management:** Manage a blacklist and whitelist (trusted hosts).

## Planning ahead

Teams integrating Contrast Protect can plan ahead to understand the actions required by different roles to protect an application.

- **Development Team**
  - Installs the Contrast agent to instrument an application.
- **Security Team**
  - Clarifies policy to ensure runtime protection is defined as a method of meeting production compliance objectives.
  - Coordinates workflows among incident response, operations, and development teams to be ready to respond to attack events detected by Contrast Protect.
- **Operations Team (if applicable)**
  - For applications no longer in active development, maintains Contrast agent versions in production environments.

### Plan to Integrate Contrast

You can prepare by obtaining the following information:

- What is the primary language or software runtime used by the application. This is the Contrast agent that will be used.
  - If no language agent is available, the Proxy Agent should be used.
- The name of the application, where security results will be stored in a central console. This should be coordinated with the security or DevSecOps team.
- The ability to automate periodic upgrades of the Contrast agent, most often to coincide with application updates.

### Plan to monitor Contrast Protect defenses

Contrast Protect gives application operators a deep view into attacks happening in the systems they manage. We recommend operators collaborate with their enterprise security team so that you can best respond to incidents that may be multifaceted involving many systems.

Application operators and security teams should prepare to monitor defenses, focusing attention on software attacks that impact the application. To help with communication:

- Establish a naming convention for apps and server instances.
- Make sure both operators and security engineers have access to view attacks, ensuring defenses have been properly integrated into applications,
- Encourage communication between different development teams.

## Install Contrast

If you are an on-premises customer, you first need to install and configure Contrast. To instrument your applications and get going, you need to install an agent before you can see data in the Contrast application. Contrast agents are:

- Java
- .NET Framework
- .NET Core
- Node.js
- Python
- Ruby
- Proxy agent (for other languages)

> **IMPORTANT:** Once installed, agents will need to be upgraded.

In addition to installation there are some additional steps to take to get Contrast up and running:

- If developers at your organization would like to work with code earlier in the SDLC then you should also install the Contrast CLI.
- Once you finish installation you will need to enable Protect if you are using those products.

### Instrument an application

For Assess and Protect to work you need to instrument your applications by installing language specific agents in your application code.

Instrumenting inserts Contrast code in the application's existing methods across custom code and libraries. These sensors are hooked in based on the locations where data enters and leaves the application.  This creates real-time visibility into any data that flows through the application and allows it to detect security flaws or vulnerabilities in this code path and report them to the interface.

To instrument an application:

1. Install the agent that corresponds to your application language (Java, Ruby, Node.js, .NET Framework, .NET Core, Python).
2. Configure the agent.
3. Exercise your application: use it as you normally would in your browser, click on links, submit forms using normal data, etc. The agent sensors gather information about the application's security, architecture and libraries.

### Find the keys

To find the keys:

1. As a Contrast Administrator, log in to the Contrast web interface.
2. Click your name in the top right corner to open the user menu, then choose **Organization Settings**.
3. In the list of settings on the left, click **API**.
 Here you will find the Organization ID, the API Key, the Agent Username and the Agent Service Key.

> **Important:** Rotating agent API keys will take all agents offline. Your applications will still function, but data will not be sent to Contrast.  To begin using the new credentials, you will need to reconfigure the agents and restart your applications. Contrast recommends using a credential management system (secret vault) to coordinate this change among your systems.

### Install into containers

Contrast works inside applications via the language's instrumentation API or by wrapping functions. Since Contrast is running within the same process as the application, it does not require an additional container.  Think of Contrast as just another external dependency. You'll want to pull the agent and insert it into your application's runtime during the build process. For example, an image-based deployment make look something like:

  1. Add the Contrast agent to your app's dependencies so that the package manager downloads the agent during the build process.
  2. Add a Contrast config file to source control.
  3. Modify your deployment configuration to inject application-specific configuration values as environment variables.
  4. Modify the container entry-point to start with Contrast enabled.
  5. Rebuild and deploy the app.

### Configure the agent

When you download and install an agent, you will need to configure the agent so it works properly with your application and your agent language. To configure the agent:

1. Download the agent-specific YAML configuration file from Contrast. This file is already populated with the API configuration values needed to connect Contrast.
2. In addition to the standard configuration for your agent that appears in this file, each agent has unique properties that may need to be configured individually. For example, you can use a YAML template unique to your agent language to adapt the config file to your particular situation.
3. Be sure the config file is called ​​*contrast\_security.yaml​* and is in the proper place for your agent.

> **Important:** You can use environment variables to specify every
configuration option supported by the *​contrast\_security.yaml​​* file.

Environment variable names are derived from the YAML path by replacing
path segment delimiters (.) with double underscores (\_\_).

For example:

  | YAML path             | Environment variable        |
  | --------------------- | --------------------------- |
  | contrast.server.name  | CONTRAST\_\_SERVER\_\_NAME  |
  | contrast.api.api\_key | CONTRAST\_\_API\_\_API\_KEY |
  
> **Tip:** Since YAML is a natural superset of JSON you can configure your agent using JSON in your YAML file.

### Application Naming Conventions

Application naming conventions provide a consistent and predictable way for teams to determine where their security results will go. In the absence of an application naming convention, Contrast Protect will still function but each application will auto-determine its own name based on the running application's code. Deciding on names in advance simplifies the understanding of what that name will be as the application changes over time. There are no character limitations on the application name, but alphanumeric words are easy to type and spaces are allowed.

It is not necessary to include the environment in the application name, such as DEV, QA, or PRODUCTION. Contrast offers a separate level of control over the environment, enabling teams to promote a single build across environments and maintain a different protection configuration for the environment. This provides a level of control and testing of how Protect will operate before it is deployed into production. For example developers may want protection policies to Monitor in development, Block in QA, and Block in PRODUCTION.

When the same server name is shared among multiple instances of an application, all attack events for the application will be displayed as if the app is running on a single server. This simplifies the list of servers and improves consistency, but it also means that you will not be able to view which instance of an application is being attacked. If you need this level of granularity, use unique server names for each application instance.

Some organizations may use other identifiers within the application name, for example if the same application is used for a separate purpose, like MyApplication-Europe and MyApplication-US.

The naming and environment configuration can be controlled as follows in the contrast\_security.yaml file:

```yaml
application:
  name: agreed-upon-name
server:
  env: QA
  name: myapp-restapi-useast1-03
```

The Contrast agent is highly configurable, so check out the YAML reference configuration for all the options available to you.

## Integrations

Contrast integrates with a number of different tools to bring visibility of its analysis into your day to day work.

There are different integrations for different occasions, for example:

- **Security Incident Event Management:** Contrast Protect administrators can share security information directly into SIEM systems, decreasing the noise of alerts by adding context of if and how the application is at risk from an attack.
  - Splunk: Contrast agents communicate directly to Splunk in CEF Format over Syslog. An additional [Contrast Splunk dashboard](https://splunkbase.splunk.com/app/4140/) is available to help show Contrast information within the Splunk interface.
  - Other: Contrast agents can share data with any SIEM by exporting attack and vulnerability data in CEF format over Syslog.

- **Notifications and Chat:** Integrate with these tools so Contrast can alert you to updates or attacks (Generic Webhook, Microsoft Teams, PagerDuty, Slack, VictorOps)

To authorize and connect tools with Contrast to streamline your workflows, go to **User menu \> Organization settings \> Integrations**.

> **Note:** If on-premises customers set up a proxy in the Contrast, it will filter all integration traffic through that proxy.


> **Note:** Notification settings in your organization affects which messages you receive from your existing integrations. Read the article on notifications for more information.

## Integrating with Splunk and other SIEMs

SIEM integration enables organizations to correlate Contrast Protect data with other security intelligence systems to make more informed decisions.

SIEM integration is normally enabled at an organization level to provide visibility in all applications. When enabled, each Contrast Protect agent provides information directly to SIEMs in CEF format over syslog. Syslog messages match the format of entries written to the Contrast Agent's `security.log` file.

Administrators can also configure a syslog heartbeat so that each agent sends liveness notification to the SIEM. This helps validate connectivity between each agent and the SIEM while providing visibility into when the agent was or was not defending the application but does not offer information regarding the cause of any absence, such as routine maintenance or planned/unplanned downtime.

Splunk users can also install a custom Contrast Dashboard inside the Splunk console to view Contrast Protect information.

## Upgrade Agents

Contrast periodically releases new agents to add new features, enhancements, and fixes. Teams can update the Contrast agent along with other application-related tasks, such as deployments and planned maintenance.

You can automatically update the agent by using a package manager or through scripts as part of your configuration management system.

The agent configuration generally does not need to be changed as part of the update cycle.

Updates should be performed first in a test environment (DEVELOPMENT or QA), upgrading the PRODUCTION environment following the applications' existing testing phase. No additional testing is needed for the Contrast Agents - the focus is on the application itself.

### Automate upgrades

If you're not using a package manager, you can script agent updates.  Follow these steps to get a command line example of how to retrieve the agent from Contrast:

1. Log in to the Contrast UI
2. Click Add Agent
3. Select the appropriate agent for your application

   !['Image of Select Agent Type drop down menu'](assets/images/select-agent.png)

4. Check the "See Automation Options" box.

   !['Image of automation options displayed upon checking box'](assets/images/automation-options.png)

5. Add the automation command to your appropriate script or build step.
6. Use the same Contrast configuration as before the update.

### Verify a successful upgrade

Most Contrast updates are automated and do not require additional validation, however some application owners may check the following locations for verification:

1. During application startup on the system, Contrast will output its version in the standard contrast.log file. An example appears below, where dates and numbers will vary:
    ```text
2020-05-18 10:28:59,924 \[main m\] INFO - Agent Version: 3.7.4.14937
```

2. After connection on the Contrast, the version number will be reported alongside the server.

   !['Image of Servers list showing agent version for a server'](assets/images/server-online.png)

## Contrast performance and resource consumption

Everything running on a computer uses system resources, so you should plan for some degree of increased system load when adding Contrast to your system. How much of an impact you will see depends on the type of work the application performs and how the Contrast agent is configured.  You can minimize the impact of Contrast on servers by choosing options appropriate for your environment:

- In DEVELOPMENT environments, Contrast Assess should be enabled and Protect should be disabled because these environments are primarily used for functional testing. Functional testing environments pair best with Contrast Assess.
- In QA environments, you can choose to use one or both of Contrast Assess and Protect based on the types of tests being performed:

  - When functional tests are being performed, teams should enable Contrast Assess to find vulnerabilities as the application is used.
  - When evaluating performance, Contrast Assess should be disabled and Contrast Protect should be enabled. This mimics the production environment configuration to allow the performance tests to more accurately reflect what will be seen in the PRODUCTION environment.

- In PRODUCTION environments, Contrast Protect should be enabled and Contrast Assess should be disabled.

You can use Contrast with Application Performance Monitoring (APM) tools.

Adding an instrumentation tool (like RASP, IAST, and APM) to an application extends the application's startup time. If you are deploying to an environment that uses health checks or other probes to determine if a deployment was successful, you will need to add more time to allow for instrumentation. The amount of time will vary depending on many factors including disk I/O and complexity of the application.
