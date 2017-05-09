<!--
title: "Python SDK"
description: "Install and use Python SDK"
tags: "tools access python sdk agent installation develop"
-->


## Install
The Contrast Python module is available to install via *pip*.
```commandline
pip install contrast-security
```

### Sample usage
The SDK offers a majority of our public APIs through an instance of the ContrastSDK object.

> **Note:** The Contrast URL is optional and defaults to https://app.contrastsecurity.com.

```python
from contrast_security.contrast_sdk import ContrastSdk
contrast_sdk = ContrastSdk('username','api_key','service_key','teamserver_url')
```

An example of getting an application:

```python
org_uuid='organization_uuid'
contrast_sdk.get_application(org_uuid, 'an_app_id')
```

In some cases, you may want to filter applications, servers, traces or libraries. Any endpoint that involves filtering can use the appropriate filter object.

These methods are easily identifiable on the ContrastSDK object by looking at any methods that include the phrase `filter`.

```python
from contrast_security.filters.library_filter import LibraryFilter
library_filter = LibraryFilter()
library_filter.apps = ['app_id_1','app_id_2']
library_filter.expand = ['vulns','apps']
contrast_sdk.filter_libraries(my_org_uuid, library_filter)
```

You can easily use the responses as a Python dictionary by using the `.json()` method of the response:

```python
librariesResponse = contrast_sdk.filter_libraries(org_uuid, library_filter).json()

for index, lib in enumerate(librariesResponse['libraries']):
    print(lib['name'], lib['grade'])
```

### Developing
Use *pip* to install the projects dependencies:

```commandline
pip install -r requirements.txt
```

To run the tests, create a file in the `/tests` directory called *test-config.json* with local Contrast information. An example test configuration can be seen in `tests/test-config.json.example`.

> **Note:** The URL validation doesn't accept localhost as a Contrast URL. If you're running Contrast locally, use http://127.0.0.1:19080 as your teamserver_url.

Then run tests with `nose`:

```commandline
nosetests
```
