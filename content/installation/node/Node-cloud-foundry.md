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
* [Cloud Foundry NodeJS Buildpack](https://github.com/cloudfoundry/java-buildpack/) version 1.6.52+

For user-provided service support: 

* [Cloud Foundry NodeJS Buildpack](https://github.com/cloudfoundry/java-buildpack/) version 1.6.56+ 

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

See [Contrast Service Broker Tile](https://docs.contrastsecurity.com/installation-javaserver.html#cloud) in the Java configuration documentation.

