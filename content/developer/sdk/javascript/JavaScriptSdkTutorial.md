<!--
title: "JavaScript SDK"
description: "Install and use JavaScript SDK"
tags: "javascript sdk installation develop"
-->

## Installation
The Contrast API module is available to install via `npm`.
```commandline
    npm install contrast-sdk --save
```

## Usage
The SDK offers a majority of our public APIs through an instance of the ContrastSDK. Any method of the SDK that interacts with our API returns a promise.

> **Note:** The Contrast URL is optional and defaults to https://app.contrastsecurity.com/Contrast/api.

```javascript
    var ContrastSdk = require('contrast-security');    
    var contrastSdk = new ContrastSdk('username','api_key','service_key','teamserver_url');
```

An example of getting an application:
```javascript
    var orgUuid='organization_uuid';
    contrastSdk.getApplication(orgUuid, 'an_app_id').then(function(response){
        console.log(response.application.name);
    });
```

In some cases, you may want to filter applications, servers, traces or libraries. Any endpoint that involves filtering can use the appropriate filter object. These methods are easily identifiable on the ContrastSDK object by looking at any methods that include the phrase `filter`.

```javascript
    var filter = {};
    filter.apps = ['appId1', 'appId2'];
    contrastSdk.filterLibraries(orgUuid, filter).then(function(response){
        response.libraries.forEach(function(library){
            console.log(library.file_name + ' : ' + library.grade);
        });
    });
```

## Testing 
Use `npm` to install the project dependencies:

```commandline
    npm install
    npm install -g mocha
```

To run the tests, create a file in the `/tests` directory called *config.json* with Contrast information. You can see an example test configuration in `tests/config.json.example`. Then run tests with Mocha:

```commandline
    npm run test
```
