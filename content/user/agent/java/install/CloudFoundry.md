<!--
title: "Running Contrast on Cloud Foundry"
description: "Agent configuration using the Contrast service broker, Contrast buildpack, and the Pivotal Tile"
tags: "java agent installation pivotal cloud foundry tile buildpack"
-->
# Contrast Security Buildpack
The Contrast Security Agent buildpack allows an application to be configured to work with a bound Contrast Security Service.

<table>
  <tr>
    <td><strong>Detection Criterion</strong></td><td>Existence of a single bound Contrast Security service. The existence of an Contrast Security service defined by the <a href="http://docs.cloudfoundry.org/devguide/deploy-apps/environment-variable.html#VCAP-SERVICES"><code>VCAP_SERVICES</code></a> payload containing a service name, label or tag with <code>contrast-security</code> or <code>contrastsecurity</code> as a substring.
</td>
  </tr>
</table>
Tags are printed to standard output by the buildpack detect script

## User-Provided Service
When binding ContrastSecurity using a user-provided service, it must have name or tag with `contrast-security` or `contrastsecurity` in it. The credential payload needs to contain the following entries:

| Name | Description
| ---- | -----------
| `teamserver_url` | (Optional) The URL in which your user has access to and the URL to which the Agent will report. ex: https://app.contrastsecurity.com
| `username` | (Required) The account name to use when downloading the agent
| `org_uuid` | (Required) The org uuid to send app information to, this is the org that your bound application will appear within
| `api_key` | (Required) Your user's api key
| `service_key` | (Required) Your user's service key

An example of creating a User Provided Service and binding it to an application are as follows:
```bash
cf create-user-provided-service contrast-security-service -p "teamserver_url,username,org_uuid,api_key,service_key"
cf bind-service spring-music contrast-security-service
cf restage spring-music
```

## Configuration
For general information on configuring the buildpack, including how to specify configuration values through environment variables, refer to [Configuration and Extension][].

[Contrast Security]: https://www.contrastsecurity.com


# Contrast Security Service Broker

The Contrast Security Service Broker allows for Cloud Foundry users to easily bind services to their application to make use of the Contrast Java Agent.

## Prerequisites
Any applications that you want to make use of the Contrast Security Service Broker should use the Contrast Security
Buildpack to allow the agent to be downloaded and ran.
The buildpack can be found [here](https://github.com/Contrast-Security-OSS/java-buildpack).
You can have apps use the buildpack with the following command:

```bash
cf push YOUR_APP_NAME_GOES_HERE -b "https://github.com/Contrast-Security-OSS/java-buildpack"
```

## How To Set Up (Generic CF)

Build service broker app
```bash
    git clone https://github.com/Contrast-Security-OSS/contrast-service-broker
    cd contrast-service-broker
    mvn clean package spring-boot:repackage -DskipTests=true
```

Deploy service broker app
```bash
    cf push contrast-security-service-broker -p/path/to/servicebroker.jar
```

The service broker does not offer any plans by default. Plans are configurable within the Pivotal Ops Manager or via the CONTRAST_SERVICE_PLANS environment variable.  An example as follows:

```

    cf set-env contrast-security-service-broker CONTRAST_SERVICE_PLANS

    " {
            "ServicePlan1": {
                 "name":"ServicePlan1",
                 "teamserver_url":"https://yourteamserverurl.com",
                 "username":"your_username",
                 "org_uuid":"00000000-1111-2222-3333-000000000000",
                 "api_key":"your_api_key",
                 "service_key":"your_service_key"
             },
             "AnotherServicePlan":{
                 "name":"AnotherServicePlan",
                 "teamserver_url":"https://yourteamserverurl.com",
                 "username":"your_username",
                 "org_uuid":"00000000-1111-2222-3333-000000000001",
                 "api_key":"your_api_key",
                 "service_key":"some_other_service_key"
                 }
             } "
```

After modifying the environment variable you will need to restage your application.


The application also requires an environment variable for a username and a password:

```bash
    cf set-env contrast-security-service-broker SECURITY_USER_NAME aSecureUsername
    cf set-env contrast-security-service-broker SECURITY_USER_PASSWORD aSecurePassword
```

Create a service broker instance(must have defined at least one service plan)
**You must use the username and password configured above.**
```bash
    cf create-service-broker contrast-security-service-broker USER_NAME PASSWORD
    https://contrast-security-service-broker
    .local.pcfdev.io
```

All service brokers start off as private, we need to make it public.

```bash
    cf enable-service-access contrast-security-service-broker
```

You should now be able to create a new service instance from the Contrast Security Service Broker and bind it to your application.


# Contrast Security Service Broker Tile


## Pre-requisites:

 1. Pivotal Apps Manager and Ops Manager installation
 2. Active Contrast Security subscription
 3. Any application that needs to use Contrast must be using the latest [Contrast Security buildpack](https://github.com/Contrast-Security-OSS/java-buildpack)

## Details

A Service Broker allows Cloud Foundry applications to bind to services and consume the services easily from App Manager UI or command line. The Contrast Service Broker will enable you to use one or more Contrast Security accounts and is deployed as a Java Application on Cloud Foundry. The Broker exposes the Contrast service on the Cloud Foundry Marketplace and allows users to directly create a service instance and bind it to their applications either from the Pivotal Apps Manager Console or from the command line.

This tile once deployed, will create one organization:

 1. **contrast-security-service-broker-org**  - This org is used for deploying the Contrast Service Broker application. Memory requirement = 512MB


# Usage Walkthrough

## Using Contrast with Java Applications on Pivotal Cloud Foundry
The Contrast Security integration with Pivotal Cloud Foundry (PCF) allows you to easily deploy Contrast Security-monitored applications on the PCF platform.

This article walks you through deploying a Java applicaton with a Contrast agent installed. It demonstrates the steps to get up and running with PCF and the Contrast Java Buildpack.

### Setting up an application with the Contrast build pack

To push an app to Pivotal Cloud Foundry that is using the Contrast buildpack we will use the cloud foundry provided spring music app as an example.
The sample application can be cloned, built, and pushed using the following commands:

```bash
    git clone https://github.com/cloudfoundry-samples/spring-music.git
    cd spring-music
    ./gradlew assemble
    cf push spring-music -b https://github.com/Contrast-Security-OSS/java-buildpack.git
```


## Adding the Contrast Security Service Broker Tile

### Step 1: Ops Manager Configuration
The first step of integrating Contrast with your Pivotal Cloud Foundry is to install the Contrast Tile.
The Contrast tile can be found on our [Github site.](https://github.com/Contrast-Security-OSS/contrast-pivotal-tile)

There are 2 ways to get the pivotal tile.

**Option 1 (download): **
Within the repository root there is a file called: contrast-security-service-broker-#.#.#.pivotal, download this file.

**Option 2(manually build tile): **

    You first need to install:

    1. [Maven](http://maven.apache.org/install.html)
    2. [Tile Generator CLI](https://github.com/cf-platform-eng/tile-generator)

    Once you have installed Maven and the Tile Generator CLI, clone the Contrast Security Service Broker & build it

        ```bash
            git clone https://github.com/Contrast-Security-OSS/contrast-service-broker.git
            cd contrast-service-broker
            mvn clean package spring-boot:repackage -DskipTests=true
            git clone https://github.com/Contrast-Security-OSS/contrast-pivotal-tile.git
            cp ~/path/to/contrast-service-broker/target/contrast-service-broker-#.#.#.jar ~/path/to/contrast-pivotal-tile/resources
            cd ~/path/to/contrast-pivotal-tile
            tile build
        ```

        This will generate a contrast-security-service-broker.#.#.#.pivotal file within the product directory.

Once you have the file stored locally, navigate to your Pivotal Ops Manager instance.

In the Ops Manager click on the "Import a Product" button and select the contrast-security-service-broker-#.#.#.pivotal tile that was downloaded or created in the previous step.

The tile does require some configuration before we can deploy it.
The service broker does **not** offer any service plans by default and requires that at least one service plan be configured before it will allow the tile to be deployed.
To add a service plan go to the Service Plans tab within the Contrast Tile and click the add button.

<a href="assets/images/Pivotal_Service_Plan.png" rel="lightbox" title="Adding a service plan"><img class="thumbnail" src="assets/images/Pivotal_Service_Plan.png"/></a>

You will now be presented with 6 form fields.

| Parameter                    | Description                                             |
|------------------------------|---------------------------------------------------------|
| TeamServer                   | Url to your Teamserver instance                        |
| TeamServer Service Key       | Service Key found in Organization Settings             |
| TeamServer API Key           | API Key found in Organization Settings                 |
| Username                     | Contrast security username                             |
| Organization UUID            | Organization UUID to onboard app to                    |
| Plan Name                    | Name of the plan as it will appear in Apps Manager     |


Once you have finished defining a plan, select the Save button.

Define any other plans you may need if you want some apps to belong to different organizations.

Once you have defined your plans, return to the Ops Manager dashboard and select: "Apply Changes" button.
<a href="assets/images/Pivotal_Apply_Changes.png" rel="lightbox" title="Apply changes"><img class="thumbnail" src="assets/images/Pivotal_Apply_Changes.png"/></a>

This may take some time to deploy.

# Step 2: Apps Manager Instructions
Now that we have successfully deployed the service broker we can create services to bind the credentials to an application.
Navigate to your Pivotal Apps Manager instance.

Go to the marketplace tab.
A Contrast Security Service Broker option should now be present.
![Apps Manager Marketplace](./instructions/marketplace.png "Contrast Security Service Broker in the marketplace")
<a href="assets/images/Pivotal_Marketplace.png" rel="lightbox" title="Contrast Security service broker in the marketplace"><img class="thumbnail" src="assets/images/Pivotal_Marketplace.png"/></a>

Click the Contrast Security service broker option to see the available plans. These plans are the same that were entered in the Ops Manager.
Select the plan you want to bind to an application by clicking the "Select this Plan" button.
![Select Plan](./instructions/select_plan.png "Selecting a plan to bind")
<a href="assets/images/Pivotal_Select_Plan.png" rel="lightbox" title="Selecting a plan to bind"><img class="thumbnail" src="assets/images/Pivotal_Select_Plan.png"/></a>

On the next screen specify an instance name of the plan(this will not effect the service broker, so you may name it anything you wish)
Under the "Bind to App" dropdown, select the application you want to bind this service to.
<a href="assets/images/Pivotal_Bind_App.png" rel="lightbox" title="Binding service instance to application"><img class="thumbnail" src="assets/images/Pivotal_Bind_App.png"/></a>


Now that we have bound our service instance to an application we can restage the application and the latest Java agent will be retrieved from your Teamserver and ran on your application.

### Setting environment variables for Contrast
If you wish to override Java Agent properties (such as the applications name you can set these through the use of environment variables either through the Pivotal UI or the cf command line.

Command line example:

```bash
    cf set-env APP-NAME JAVA_OPTS " -Dcontrast.appname.override=PivotalSpringApp
  -Dcontrast.server=PivotalServerName "
```

Pivotal Apps Manager example:
<a href="assets/images/Pivotal_Environment_Variables.png" rel="lightbox" title="Environment variables through ui"><img class="thumbnail" src="assets/images/Pivotal_Environment_Variables.png"/></a>
