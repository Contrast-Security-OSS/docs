<!--
title: "Python Agent Installation"
description: "Installing the Python Agent"
tags: "python agent installation"
-->


To install the Contrast agent into your Python application, you must complete the following steps.  

1. Add the <i>contrast-agent-*.tar.gz</i> to the application's `requirements.txt`. (This is outlined in the <b>Setup</b> section below.) 
2. Add the *contrast_security.yaml* file to the application's *config* directory. (This is outlined in the **Configuration** section below.)
3. Run the Contrast Service as a standalone service on the same server as the application. (This is outlined in the section below to **Run the Service**.)

## Setup

The <i>contrast-agent-*.tar.gz</i> is a standard packaged Python library that you can add to the application's `requirements.txt`.

### Contrast as a Python Package

To use Contrast, add this line to your application's `requirements.txt` after downloading the agent:

``` python
-e ./path/to/contrast-agent-<version>.tar.gz
```

After editing the `requirements.txt` you can install normally with:

``` bash
pip install -r requirements.txt
```

### Manual installation

To install the Contrast agent manually, download the <i>contrast-agent-<version>.tar.gz</i> file to a local directory and run:

``` bash
pip install ./path/to/contrast-agent-<version>.tar.gz
``` 

### Middleware inclusion

To hook into incoming requests and outbound responses, a middleware needs to be added to your application. To add the middleware to your application, see the following guidance:


**Django; in your *settings.py* file:**

``` python
MIDDLEWARE = [
  # OTHER MIDDLEWARE,
  'contrast.agent.middlewares.django_middleware.DjangoMiddleware'
]
```

**Flask:**

``` python
import Flask

from contrast.agent.middlewares.flask_middleware import FlaskMiddleware as ContrastMiddleware

app = Flask(__name__)

# normal application setup

app.wsgi_app = ContrastMiddleware(app.wsgi_app)

if __name__ == '__main__':
    app.run(...)
```

**Pyramid:**

``` python
from pyramid.config import Configurator
config = Configurator()

config.add_tween('contrast.agent.middlewares.pyramid_middleware.PyramidMiddleware')
```

**WSGI:**

``` python
from contrast.agent.middlewares.wsgi_middleware import WSGIMiddleware as ContrastMiddleware

# other app code

app = get_wsgi_application()

app = ContrastMiddleware(app)
```

## Configuration

Download a standard configuration file from the Contrast application. You must place the file in the web application's *config* directory, and define the following fields, at a minimum:

``` yaml
agent:
  service:
    host: 
    port:
```
