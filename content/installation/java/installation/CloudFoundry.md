<!--
title: "Running Contrast on Cloud Foundry"
description: "Agent configuration using the Contrast service broker, Contrast buildpack, and the Pivotal Tile"
tags: "java agent installation pivotal cloud foundry tile buildpack"
-->
Contrast offers a variety of Cloud Foundry integrations for your applications using the Contrast Java buildpack. You can use the buildpack on its own as a low level of integration by creating a user-provided service and binding the service to your application. The service broker is the next step towards closer integration with Contrast. The service broker allows you to define multiple service plans, and allows you to generate service instances in order to bind to applications.

For Pivotal Cloud Foundry (PCF) customers, Contrast offers a Pivotal tile. This tile automates the BOSH deployment and configuration of the Contrast service broker.

## Contrast Security Buildpack
The Contrast agent buildpack allows you to configure an application to work with a bound Contrast service.

<table>
  <tr>
    <td><strong>Detection Criterion</strong></td><td>Existence of a single bound Contrast service. The existence of an Contrast service defined by the <a href="http://docs.cloudfoundry.org/devguide/deploy-apps/environment-variable.html#VCAP-SERVICES"><code>VCAP_SERVICES</code></a> payload containing a service name, label or tag with <code>contrast-security</code> or <code>contrastsecurity</code> as a substring.
</td>
  </tr>
</table>


Tags are printed to standard output by the buildpack detect script.

### User-provided service
When binding Contrast using a user-provided service, you must give it a name or tag that includes `contrast-security` or `contrastsecurity`. The credential payload must also contain the following entries:


| Name | Description
| ---- | -----------
| `teamserver_url` | (Optional) The URL in which your user has access and the URL to which the agent will report (ex: https://app.contrastsecurity.com)
| `username` | (Required) The account name to use when downloading the agent
| `org_uuid` | (Required) The organization uuid to which to send app information; this is the organization that your bound application will appear within
| `api_key` | (Required) Your user's API key
| `service_key` | (Required) Your user's service key

---

An example of creating a user-provided service and binding it to an application:

```bash
cf create-user-provided-service contrast-security-service -p "teamserver_url,username,org_uuid,api_key,service_key"
cf bind-service spring-music contrast-security-service
cf restage spring-music
```

### Configuration
For general information on configuring the buildpack, including how to specify configuration values through environment variables, refer to [Configuration and Extension](https://github.com/Contrast-Security-OSS/java-buildpack/blob/master/README.md#configuration-and-extension).


## Contrast Service Broker

The Contrast service broker allows Cloud Foundry users to easily bind services to their application and make use of the Contrast Java agent.

### Prerequisites
Any applications that you wish to use with the service broker should employ the Contrast buildpack in order to download and run the agent.
You can find the buildpack [here](https://github.com/Contrast-Security-OSS/java-buildpack).
Run the following command to use the buildpack:


```bash
cf push YOUR_APP_NAME_GOES_HERE -b "https://github.com/Contrast-Security-OSS/java-buildpack"
```

### Set up (generic cf)

Build service broker app:
```bash
git clone https://github.com/Contrast-Security-OSS/contrast-service-broker
cd contrast-service-broker
mvn clean package spring-boot:repackage -DskipTests=true
```

Deploy service broker app:
```bash
cf push contrast-security-service-broker -p /path/to/contrast-service-broker-<version>.jar
```

The service broker now appears in your Cloud Foundry console. The service broker doesn't offer any plans by default. Plans are configurable via the ```CONTRAST_SERVICE_PLANS``` environment variable. If using Pivotal, you can also use the Pivotal Ops Manager to set the environment variables. If using Bluemix, you can click on the application, select **Runtime** and then **Environment Variables** to set the value. Please refer to the following example to set the value through the commandline:

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

If running the agent on Bluemix, you must use single quotes to set the ```CONTRAST_SERVICE_PLANS``` environment variable because Bluemix doesn't recognize double quotes. 

Example:


```
    cf set-env contrast-security-service-broker CONTRAST_SERVICE_PLANS
    " {
            'ServicePlan1': {
                 'name':'ServicePlan1',
                 'teamserver_url':'https://yourteamserverurl.com',
                 'username':'your_username',
                 'org_uuid':'00000000-1111-2222-3333-000000000000',
                 'api_key':'your_api_key',
                 'service_key':'your_service_key'
             },
             'AnotherServicePlan':{
                 'name':'AnotherServicePlan',
                 'teamserver_url':'https://yourteamserverurl.com',
                 'username':'your_username',
                 'org_uuid':'00000000-1111-2222-3333-000000000000',
                 'api_key':'your_api_key',
                 'service_key':'some_other_service_key'
                 }
             } "
```

After modifying the environment variable, restage your application.

```
cf restage contrast-security-service-broker
```

The application also requires an environment variable for a username and a password:

```bash
cf set-env contrast-security-service-broker SECURITY_USER_NAME aSecureUsername
cf set-env contrast-security-service-broker SECURITY_USER_PASSWORD aSecurePassword
```

Create a service broker instance. (At least one service plan must be defined.) You must use the username and password configured above.

```bash
cf create-service-broker contrast-security-service-broker USER_NAME PASSWORD
<URL of your application>
```

If running on Bluemix, add ```--space-scoped``` at the end of the command. 

Example:

```bash
cf create-service-broker contrast-security-service-broker USER_NAME PASSWORD
<URL of your application> --space-scoped
```

All service brokers start off as private; you need to make it public.

```bash
cf enable-service-access contrast-security-service-broker
```

Now that the service broker is working, create a service instance and bind it to the application. To create a service instance, run the following command:

```
cf create-service contrast-security-service-broker ServicePlan1 <name_of_service>
```

To bind it to your application, run the following command:

```
cf bind-service <app_name> <name_of_service>
```

You should see the agent start up with your application and also see it in your Contrast UI.

## Contrast Service Broker Tile


### Prerequisites:

 1. Pivotal Apps Manager and Ops Manager installation
 2. Active Contrast subscription
 3. Any application that needs to use Contrast must be using the latest [Contrast buildpack](https://github.com/Contrast-Security-OSS/java-buildpack)

### Details

A service broker allows Cloud Foundry applications to bind to services and consume the services easily from the App Manager UI or the command line. The Contrast service broker enables you to use one or more Contrast accounts, and is deployed as a Java application on Cloud Foundry. The broker exposes the Contrast service on the Cloud Foundry marketplace, which allows users to directly create a service instance and bind it to their applications either from the Pivotal Apps Manager Console or the command line.

Once deployed, this title creates one organization:

* **contrast-security-service-broker-org**: This organization is used for deploying the Contrast service broker application. Memory requirement = 512MB

## Use Contrast with Java Applications on PCF 
The Contrast integration with PCF allows you to easily deploy Contrast-monitored applications on the PCF platform. These instructions walk you through deploying a Java applicaton with a Contrast agent installed, and demonstrates the steps to get up and running with PCF and the Contrast Java buildpack.

### Set up an application with the Contrast build pack

To push an app that is using the Contrast buildpack to PCF, use the Cloud Foundry-provided spring music app as an example.
You can clone, build and push the sample application using the following commands:

```bash
git clone https://github.com/cloudfoundry-samples/spring-music.git
cd spring-music
./gradlew assemble
cf push spring-music -b https://github.com/Contrast-Security-OSS/java-buildpack.git
```


## Add The Contrast Service Broker Tile

### Step 1: Ops manager configuration
The first step of integrating Contrast with your PCF is installing the Contrast tile. You can find the Contrast tile on our [Github site.](https://github.com/Contrast-Security-OSS/contrast-pivotal-tile)

There are two ways to get the Pivotal tile.

**Option 1 (Download): **
Download the Contrast server broker tile for PCF from the [Pivotal Network](https://network.pivotal.io/products/contrast-security-service-broker/).

**Option 2 (Manually build tile): **

Begin with the installation:

1. [Maven](http://maven.apache.org/install.html)
2. [Tile Generator CLI](https://github.com/cf-platform-eng/tile-generator)

Once you've installed Maven and the Tile Generator CLI, clone the Contrast service broker and build it.

```bash
git clone https://github.com/Contrast-Security-OSS/contrast-service-broker.git
cd contrast-service-broker
mvn clean package spring-boot:repackage -DskipTests=true
git clone https://github.com/Contrast-Security-OSS/contrast-pivotal-tile.git
cp ~/path/to/contrast-service-broker/target/contrast-service-broker-#.#.#.jar ~/path/to/contrast-pivotal-tile/resources
cd ~/path/to/contrast-pivotal-tile
tile build
        
```

This will generate a *contrast-security-service-broker.#.#.#.pivotal* file within the product directory.

Once you've stored the file locally, navigate to your Pivotal Ops Manager instance. In the Ops Manager, click on the **Import a Product** button and select the *contrast-security-service-broker-#.#.#.pivotal* tile that you downloaded or created in the previous step.

The tile requires some configuration before we can deploy it. 

The service broker does **not** offer any service plans by default and requires that at least one service plan be configured before it will allow the tile to be deployed. To add a service plan, go to the **Service Plans** tab within the Contrast tile and click the **Add** button.

<a href="assets/images/Pivotal_Service_Plan.png" rel="lightbox" title="Adding a service plan"><img class="thumbnail" src="assets/images/Pivotal_Service_Plan.png"/></a>

You can now see six form fields.

| Parameter                    | Description                                             |
|------------------------------|---------------------------------------------------------|
| TeamServer                   | URL to your Teamserver instance                        |
| TeamServer Service Key       | Service Key found in Organization Settings             |
| TeamServer API Key           | API Key found in Organization Settings                 |
| Username                     | Contrast username                             |
| Organization UUID            | Organization UUID to onboard app to                    |
| Plan Name                    | Name of the plan as it will appear in Apps Manager     |

---

Once you're finished defining a plan, click the **Save** button. If you want some apps to belong to different organizations, define any other plans you may need.

Once you define your plans, return to the Ops Manager dashboard and select the **Apply Changes** button.
<a href="assets/images/Pivotal_Apply_Changes.png" rel="lightbox" title="Apply changes"><img class="thumbnail" src="assets/images/Pivotal_Apply_Changes.png"/></a>

This may take some time to deploy.

### Step 2: Apps manager instructions
Now that you've successfully deployed the service broker we can create services to bind the credentials to an application. Navigate to your Pivotal Apps Manager instance and go to the **Marketplace** tab, where a Contrast service broker option is present.

<a href="assets/images/Pivotal_Marketplace.png" rel="lightbox" title="Contrast Security service broker in the marketplace"><img class="thumbnail" src="assets/images/Pivotal_Marketplace.png"/></a>

Click the **Contrast service broker** option to see the available plans. These are the same plans that you entered in the Ops Manager.
Select the plan you want to bind to an application by clicking the **Select this Plan** button.

<a href="assets/images/Pivotal_Select_Plan.png" rel="lightbox" title="Selecting a plan to bind"><img class="thumbnail" src="assets/images/Pivotal_Select_Plan.png"/></a>

On the next screen, specify an instance name of the plan. (This doesn't effect the service broker, so you can name it anything you like.)
Under the **Bind to App** dropdown, select the application to which you want to bind this service.
<a href="assets/images/Pivotal_Bind_App.png" rel="lightbox" title="Binding service instance to application"><img class="thumbnail" src="assets/images/Pivotal_Bind_App.png"/></a>

Now that you bound our service instance to an application, you can restage the application. The latest Java agent will be retrieved from your Teamserver and run on your application.

### Set environment variables for Contrast
If you want to override Java agent properties, such as the application name, you can use environment variables through the Pivotal UI or the Cloud Foundry command line.

Command line example:

```bash
cf set-env APP-NAME JAVA_OPTS " -Dcontrast.appname.override=PivotalSpringApp
-Dcontrast.server=PivotalServerName "
```

Pivotal Apps Manager example:
<a href="assets/images/Pivotal_Environment_Variables.png" rel="lightbox" title="Environment variables through UI"><img class="thumbnail" src="assets/images/Pivotal_Environment_Variables.png"/></a>
