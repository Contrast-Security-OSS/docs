<!--
title: "Run the Contrast Node agent on Cloud Foundry"
description: "Node agent configuration using the Contrast service broker, Contrast buildpack and the Pivotal tile"
tags: "node agent installation pivotal cloud foundry tile buildpack"
-->

Contrast offers a Cloud Foundry integration for your applications using the default Node buildpack. You can use the buildpack on its own as a low level of integration by creating a user-provided service and binding the service to your application. The service broker allows you to define multiple service plans, and allows you to generate service instances to bind to applications.

For Pivotal Cloud Foundry (PCF) customers, Contrast offers a Pivotal tile. This tile automates the BOSH deployment and configuration of the Contrast service broker.

> **Note:** The Contrast Cloud Foundry integration doesn't download the Node agent and modify your application startup. Application developers are responsible for downloading the Node agent and configuring their application to run with the agent enabled. The Contrast Cloud Foundry integration provides a central location to configure the agent (via the tile) or automatic configuration via user provided services.

## Requirements

To instrument an application in a Cloud Foundry environment, your application must use one of the following buildpacks. 

For tile support: 
* [Cloud Foundry NodeJS Buildpack](https://github.com/cloudfoundry/nodejs-buildpack) version 1.6.52+

For user-provided service support: 

* [Cloud Foundry NodeJS Buildpack](https://github.com/cloudfoundry/nodejs-buildpack) version 1.6.56+ 

If you're using a buildpack that predates (and doesn't include) Contrast Security Framework support, you can add framework support with minimal effort; however, it requires making the appropriate changes to your forked buildpack.

## Contrast Security Framework Support

The Contrast Security Framework takes care of automatically creating environment variables for the agent to use during configuration.

<table>
  <tr>
    <td><strong>Detection Criterion</strong></td><td>Existence of a single bound Contrast service. The existence of an Contrast service defined by the <a href="http://docs.cloudfoundry.org/devguide/deploy-apps/environment-variable.html#VCAP-SERVICES"><code>VCAP_SERVICES</code></a> payload containing a service name, label or tag with <code>contrast-security</code> as a substring.
</td>
  </tr>
</table>

Tags are printed to standard output by the buildpack detect script.

### User-Provided Service

When binding Contrast using a user-provided service, it must have a name or tag with `contrast-security` in it. The credential payload must contain the following entries:

| Name | Description
| ---- | -----------
| `api_key` | Your user's API key
| `service_key` | Your user's service key
| `teamserver_url` | The base URL to which your user has access and the URL to which the agent will report (e.g., *https://app.contrastsecurity.com*)
| `username` | The account name to use when downloading the agent

## Configuration Example

An example of creating a user-provided service and binding it to an application:

```bash
cf create-user-provided-service contrast-security-service -p "teamserver_url, username, api_key, service_key"
cf bind-service (application-name) contrast-security-service
cf restage (application-name)
```

Note that `teamserver_url` should be protocol and hostname only. Omit `/Contrast/` or `/Contrast/api`.

## Contrast Service Broker

The Contrast service broker allows Cloud Foundry users to easily bind services to their application and use the Contrast Node agent.

### Prerequisites

Any applications that you want to use with the service broker should employ the default Node buildpack to download and run the agent.

```bash
cf push YOUR_APP_NAME_GOES_HERE
```

### Set up generic Cloud Foundry

* Contact Contrast support for access to the service broker source code.

* Deploy the service broker application:

```bash
cf push contrast-security-service-broker 
```

The service broker now appears in your Cloud Foundry console. The service broker doesn't offer any plans by default. You can configure plans using the `CONTRAST_SERVICE_PLANS` environment variable. If using Pivotal, you can also use the Pivotal Ops Manager to set the environment variables. If using Bluemix, you can click on the application, select **Runtime** and then **Environment Variables** to set the value. 

* Refer to the following example to set the value through the command line:

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

* After modifying the environment variable, restage your application.

```
cf restage contrast-security-service-broker
```

* The application also requires an environment variable for a username and a password:

```bash
cf set-env contrast-security-service-broker SECURITY_USER_NAME aSecureUsername
cf set-env contrast-security-service-broker SECURITY_USER_PASSWORD aSecurePassword
```

* Create a service broker instance. (At least one service plan must be defined.) You must use the username and password configured above.

```bash
cf create-service-broker contrast-security-service-broker USER_NAME PASSWORD
<URL of your application>
```

* All service brokers start off as private; you need to make it public.

```bash
cf enable-service-access contrast-security-service-broker
```

* Now that the service broker is working, create a service instance and bind it to the application. To create a service instance, run the following command:

```
cf create-service contrast-security-service-broker ServicePlan1 <name_of_service>
```

* To bind it to your application, run the following command:

```
cf bind-service <app_name> <name_of_service>
```

You should now see your application Contrast UI.

## Contrast Service Broker Tile

### Prerequisites

* Pivotal Apps Manager and Ops Manager installation
* Active Contrast account
* Any application that needs to use Contrast must be using the default Node buildpack. Or, you must have copied the Contrast framework support and configuration into your custom buildpack.

### Details

A service broker allows Cloud Foundry applications to bind to services and consume the services easily from the App Manager UI or the command line. The Contrast service broker enables you to use one or more Contrast accounts, and is deployed as a Node application on Cloud Foundry. The broker exposes the Contrast service on the Cloud Foundry marketplace, which allows users to directly create a service instance and bind it to their applications either from the Pivotal Apps Manager Console or the command line. 

Once deployed, this title creates one organization, the **contrast-security-service-broker-org**. This organization is used for deploying the Contrast service broker application. The memory requirement is 512MB. 

## Use Contrast with Node Applications on PCF 

The Contrast integration with PCF allows you to easily deploy Contrast-monitored applications on the PCF platform. These instructions walk you through deploying a Node application with a Contrast agent installed, and demonstrates the steps to get up and running with PCF and the Contrast Node buildpack.

### Set up an application with the Contrast build pack

To push an application using the Contrast buildpack to PCF, use the Cloud Foundry-provided [spring music application](https://github.com/cloudfoundry-samples/spring-music) as an example. You can clone, build and push the sample application using the following commands:

```bash
git clone https://github.com/cloudfoundry-samples/spring-music.git
cd spring-music
./gradlew assemble
cf push spring-music
```

## Add The Contrast Service Broker Tile

### Step 1: Ops manager configuration

The first step of integrating Contrast with your PCF is installing the Contrast tile.

* Download the Contrast server broker tile for PCF from the [Pivotal Network](https://network.pivotal.io/products/contrast-security-service-broker/).

* Once you've stored the file locally, navigate to your Pivotal Ops Manager instance. 
* In the Ops Manager, click on the **Import a Product** button and select the *contrast-security-service-broker-#.#.#.pivotal* tile that you downloaded or created in the previous step.

> **Note:** If the file you downloaded is automatically given a .zip extension, rename it to *contrast-security-service-broker-#.#.#.pivotal*.

The tile requires some configuration before we can deploy it. 

* The service broker does **not** offer any service plans by default, and requires that at least one service plan is configured before it will allow the tile to be deployed. To add a service plan, go to the **Service Plans** tab within the Contrast tile and click the **Add** button.

* You should now see the ten form fields given in the following table.

| Parameter                    | Description                                             |
|------------------------------|---------------------------------------------------------|
| TeamServer                   | URL to your Contrast application instance                |
| TeamServer Service Key       | Service Key found in Organization Settings             |
| TeamServer API Key           | API Key found in Organization Settings                 |
| Organization UUID            | The organization to which the application will belong  |
| Username                     | Your Contrast username                                      |
| Plan Name                    | Name of the plan as it will appear in Apps Manager     |
| Proxy Host                   | The hostname of a proxy for the service broker to communicate with Contrast     |
| Proxy Port                   | The proxy port                                        |
| Proxy Username               | The proxy username if it requires authentication      |
| Plan Password                | The proxy password                                    |


* Once you're finished defining a plan, click the **Save** button. If you want some apps to belong to different organizations, define any other plans you may need.

* Once you define your plans, return to the Ops Manager dashboard and select the **Apply Changes** button.

This may take some time to deploy.

### Step 2: Apps manager instructions

Now that you've successfully deployed the service broker, you can create services to bind the credentials to an application. 

* Navigate to your Pivotal Apps Manager instance and go to the **Marketplace** tab.

<a href="assets/images/Pivotal_Marketplace.png" rel="lightbox" title="Contrast Security service broker in the marketplace"><img class="thumbnail" src="assets/images/Pivotal_Marketplace.png"/></a>

* Click the **Contrast service broker** option to see the available plans. (These are the same plans that you entered in the Ops Manager.)

* Click the the **Select this Plan** button to select the plan you want to bind to an application.

<a href="assets/images/Pivotal_Select_Plan.png" rel="lightbox" title="Select a plan to bind"><img class="thumbnail" src="assets/images/Pivotal_Select_Plan.png"/></a>

* On the next screen, specify an instance name of the plan. (This doesn't effect the service broker, so you can name it anything you like.)

* Under the **Bind to App** dropdown, select the application to which you want to bind this service.

<a href="assets/images/Pivotal_Bind_App.png" rel="lightbox" title="Bind a service instance to application"><img class="thumbnail" src="assets/images/Pivotal_Bind_App.png"/></a>

Now that you bound our service instance to an application, you can restage the application. The latest Node agent will be retrieved from Contrast and run on your application.

### Set environment variables for Contrast

If you want to override Node agent properties, such as the application name, you can use environment variables through the Pivotal UI or the Cloud Foundry command line.

* Command line example:

```bash
cf set-env APP-NAME NODE_OPTS " -Dcontrast.appname.override=PivotalSpringApp
-Dcontrast.server=PivotalServerName "
```

* Pivotal Apps Manager example:

<a href="assets/images/Pivotal-environment-variables-node.png" rel="lightbox" title="Set environment variables in Pivotal Apps Manager"><img class="thumbnail" src="assets/images/Pivotal-environment-variables-node.png"/></a>


[Contrast Security]: https://www.contrastsecurity.com
[Contrast Security Service]: https://www.contrastsecurity.com

