<!--title: "Contrast SDK Tutorial"
description: "Tutorial for using the Contrast Java SDK"
tags: "tools access tutorial SDK Java"-->

## Getting Started


The Contrast Java SDK requires the following:
* JDK 7 / 8
* TeamServer account

There are a few ways to make use of the Contrast Java SDK. If you are using a Maven or Gradle-based project, the easiest way to begin using the SDK is to add it as a dependency to your *pom.xml* or *build.gradle* file, respectively.

### Maven Example
```xml
<dependencies>
	<dependency>
		<groupId>com.contrastsecurity</groupId>
		<artifactId>contrast-sdk-java</artifactId>
		<version>2.1.0</version>
	</dependency>
</dependencies>
```

### Gradle Example
```groovy
repositories {
    mavenCentral()
}

dependencies {
    compile group: "com.contrastsecurity", name: "contrast-sdk-java", version:"2.1.0"
}
```

If you are not using one of the above build tools you can still make use of the Contrast Java SDK by cloning the repository from GitHub and creating the jar.  To clone the repository and generate the jar use the following command:
```
git clone https://github.com/Contrast-Security-OSS/contrast-sdk-java.git
cd /contrast-sdk-java
mvn install
```

The jar can then be located within the target directory and configured within your own project.

## Common Tasks Within Plugins

The first thing you are likely to do when creating the plugin is to create an instance of the Contrast SDK. The SDK has two constructors which require a username, apiKey, serviceKey, and (optionally) an apiUrl. Your username, apiKey and serviceKey can be found within your instance of TeamServer.

```Java
String username = "contrast_username";
String apiKey = "123456789-1234-1234-123456";
String serviceKey = "123456789-1234-1234-123456";
ContrastSDK contrastSDK = new ContrastSDK(username, apiKey, serviceKey);
```

 In order to make use of a variety of functions you will also need your organization UUID.  This is found within TeamServer by clicking your username in the upper right corner of the screen and selecting **Organization Settings** in the dropdown. Your UUID can be found on the right side of the **General Information** header bar.
 
 If you would like to retrieve a collection of your applications, the following code snippet makes use of the ContrastSDK in order to do so:
```Java
String orgUuid = "12345678-1234-1234-1234-123456789ABC";
try {
	Applications applications = contrastSDK.getApplications(orgUuid);
		for (Application application : applications.getApplications()) {
			System.out.println("App name: "  + application.getName());
			System.out.println("App id: " + application.getId());
		}
	}catch (IOException e) {
		System.out.println("Unable to retrieve the applications.");
	} catch (UnauthorizedException e) {
		System.out.println("Unable to connect to TeamServer.");
	}
}
```

A similar pattern can be used to retrieve the servers associated with your organization. When calling the ```getServers``` method of the ContrastSDK class, you need to pass along a ```ServerFilterForm``` object. In the example below, the object has not been given any specific filters so it will retrieve all servers associated with your organization.

```Java
String orgUuid = "12345678-1234-1234-1234-123456789ABC";
try {
	Server servers = contrastSDK.getServers(orgUuid, new ServerFilterForm());
	for(Server server : servers.getServers()){
		System.out.println("Server status: " + server.getStatus());
		System.out.println("Server name: " + server.getName());
	}
} catch (IOException e) {
	System.out.println("Unable to retrieve the servers");
} catch (UnauthorizedException e) {
	System.out.println("Unable to connect to TeamServer");
}
```

The ContrastSDK can also retrieve a list of your organizations and a variety of their properties, including the UUID.

```Java
try {
  	Organizations orgs =  contrastSDK.getProfileOrganizations();
  	for(Organization org : orgs.getOrganizations()){
		System.out.println("Org name: " + org.getName());
		System.out.println("Org UUID :" + org.getOrgUuid());
  	}
} catch (IOException e) {
	System.out.println("Unable to retrieve the organizations.");
} catch (UnauthorizedException e) {
	System.out.println("Unable to connect to TeamServer");
}
```

Oftentimes you will be a member of only one organization. In order to easily get a reference to that object as opposed to iterating over the collection of organizations, you can use the following snippet:

```Java
Organization myOrg = contrastSDK.getProfileDefaultOrganizations().getOrganization();
```

One of the most valuable features of the SDK is the ability to gather a list of vulnerabilities from a given application. The following code will gather all Medium, High, or Critical severity vulnerabilities that have been found for an application: 

```Java
String appId = "12345678912312313123";
String serverId = "1234";
String orgUuid = "12345678-1234-1234-1234-123456789ABC";
FilterForm form = new FilterForm();
form.setSeverities(Arrays.asList("Medium", "High", "Critical"));
Traces traces = null;

try {
	traces = contrastSDK.getTracesWithFilter(orgUuid, appId, "servers", serverId, form);
} catch (IOException e) {
	System.out.println("Unable to retrieve the traces.");
} catch (UnauthorizedException e) {
	System.out.println("Unable to connect to TeamServer.");
}

if (traces != null && traces.getCount() > 0) {
	for (Trace trace : traces.getTraces()) {
		System.out.println("Rule: " + trace.getRule());
		System.out.println("Severity: " + trace.getSeverity());
	}
}
```

## Writing Tests

The type of plugin you are building will have a lot of impact on the type of tests you will write. One key point you will probably want to cover is ensuring that invalid configuration data fails. The Contrast Gradle plugin generates an extension for use in the *build.gradle* file. One such test would be ensuring that the appropriate extension is generated and is an instance of the appropriate class. If you are creating any specific tasks or goals depending on your build tool, you should check that the appropriate tasks are actually being added to the build process. If you are developing for Gradle, it is important to be aware of task naming collisions that may occur if you choose a more generic name as opposed to a domain-specific task naming convention. 



