<!--
title: "Python Agent Installation"
description: "Installing the Python Agent"
tags: "python agent installation"
-->


To install the Contrast agent into your Python application, you must complete the following steps.  

1. Add the <i>contrast-python-agent-[version].tar.gz</i> to the application's <i>requirements.txt</i>. (This is outlined in the <b>Setup</b> section below.)
2. Add the *contrast_security.yaml* file to the application's working directory. (This is outlined in the **Configuration** section below.)
3. (*Optional*) Start a standalone instance of the Contrast Service. By default, the service is started automatically by the agent when your application starts.
   For more details on running the standalone service, see the [Contrast Service documentation](installation-service.html#service-overview).


## Setup

The <i>contrast-python-agent-[version].tar.gz</i> is a Python package that can be installed using `pip`.

### Requirements

Starting with version 2.3.0 of the agent, the package installation step
requires the compilation of C extensions. This process is automatic, but it
requires certain software to be installed in the target environment.

* At a minimum, `gcc`, `make`, `automake` and `autoconf` are required. Please note that the
  package names may be different on different platforms. It may be useful to install your platform's equivalent of `build-essential`.
* On some lightweight platforms it may be necessary to install system headers.

### Contrast as a Python Package

To use Contrast, add this line to your application's `requirements.txt` (usually found at the top level of the application source tree) after downloading the agent:

``` python
./path/to/contrast-python-agent-[version].tar.gz
```

After editing the *requirements.txt* you can install normally with:

``` bash
pip install -r requirements.txt
```

### Manual installation

To install the Contrast agent manually, download the <i>contrast-python-agent-[version].tar.gz</i> file to a local directory and run:

``` bash
pip install ./path/to/contrast-python-agent-[version].tar.gz
``` 

### Middleware inclusion

Middleware is the name for a software component that is part of a web
application application and is capable of reading and modifying inbound
requests and outbound responses.

The Contrast Python Agent is implemented as a middleware for all of the
frameworks that we support. In order to use the agent, the middleware must be
configured for the framework that your application uses. Specific instructions
for each of the supported frameworks are below.

#### Django 

Django middleware is configured in the *settings.py* file. This file is not
found in the same location for all applications, but it is generally near the
top of the application source tree. Common locations include:

* `<appname>/settings.py`
* `config/settings.py`
* `app/settings.py`

>**Note:** When searching the source tree to find the *settings.py*, make sure
to exclude any directories that correspond to Python virtual environments.

Some applications have multiple *settings.py* files, which may correspond to
different configurations of the app (e.g. prod, test, etc.). In those cases,
add the Contrast Agent middleware to any/all of the configurations where it
will be used.

For Django 1.10+ and 2.0+, look for the `MIDDLEWARE` configuration variable,
which is an array. Add the Contrast Agent module to the list, like shown below:

``` python
MIDDLEWARE = [
  'contrast.agent.middlewares.django_middleware.DjangoMiddleware',
  # OTHER MIDDLEWARE,
]
```

In general, it is best for the Contrast middleware to be included as early in
the list as is possible, although modifying the order may be necessary to get
the app working in some circumstances.

Older versions of Django have a different architecture for middlewares. For
Django 1.6 to 1.9, look for the `MIDDLEWARE_CLASSES` configuration variable
in *settings.py*.

``` python
MIDDLEWARE_CLASSES = [
  'contrast.agent.middlewares.legacy_django_middleware.DjangoMiddleware',
  # OTHER MIDDLEWARE
]
```

See the [Django
documentation](https://docs.djangoproject.com/en/2.2/topics/http/middleware/)
for more details on middleware inclusion.

#### Flask 

Flask middleware is a WSGI middleware which operates by wrapping the flask application instance. The following shows an example flask application which is wrapped by the Contrast
middleware class:

``` python
import Flask

# This line imports the Contrast middleware class from the package
from contrast.agent.middlewares.flask_middleware import FlaskMiddleware as ContrastMiddleware

# This is where the example app is declared. Look for something similar in your
# application since this instance needs to be wrapped by Contrast middleware
app = Flask(__name__)

# This line wraps the application instance with the Contrast middleware
app.wsgi_app = ContrastMiddleware(app)

# Everything below this line is part of the example app. It should not be added
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(...)
```

See the [Flask
documentation](https://flask.palletsprojects.com/en/1.1.x/quickstart/#hooking-in-wsgi-middleware)
for more details on using WSGI middleware.

#### Pyramid

In Pyramid, middlewares are called "tweens". See the example below for adding
the Contrast middleware to a Pyramid app:

``` python
from pyramid.config import Configurator
config = Configurator()

config.add_tween('contrast.agent.middlewares.pyramid_middleware.PyramidMiddleware')
```

See the [Pyramid
documentation](https://docs.pylonsproject.org/projects/pyramid/en/latest/narr/environment.html#explicit-tween-configuration)
for additional details on tween configuration.

#### WSGI

WSGI middleware is implemented as a class that wraps the application instance.
(This is the basis for both Flask and Pylons middleware as well.)

``` python
# This line imports the Contrast middleware class from the package
from contrast.agent.middlewares.wsgi_middleware import WSGIMiddleware as ContrastMiddleware

# other app code

app = get_wsgi_application()

# This line wraps the application instance with the Contrast middleware
app = ContrastMiddleware(app)
```

See the [WSGI spec](https://www.python.org/dev/peps/pep-0333/#middleware-components-that-play-both-sides)
for additional details on WSGI middleware.

#### Pylons

Like Flask, Pylons middleware is WSGI middleware, which means the
middleware class is used to wrap the application instance:

``` python
from pylons.wsgiapp import PylonsApp
# This line imports the Contrast middleware class from the package
from contrast.agent.middlewares.wsgi_middleware import WSGIMiddleware as ContrastMiddleware
 
app = PylonsApp()
# This line wraps the application instance with the Contrast middleware
app = ContrastMiddleware(app)
```

## Next Steps

Once the installation process is complete, you can update the agent's [configuration](installation-pythonconfig.html) file.

## Troubleshooting

* For version 2.3.0 of the agent and earlier, when starting the bundled service using the `host`/`port` configuration, it is necessary for the `port` value to be given explicitly. A useful default is `30555`. An alternative us to use the `socket` configuration instead.

* There may be installation issues when using older versions of `pip`. It may be useful to try to update to the latest version by running `pip install --upgrade pip`.

* There may be conflicts between the versions of app dependencies and agent dependencies. In these cases, it is important to make sure that all app dependencies are installed before installing the agent.

* On Linux, the dependency `psutil` requires `linux/ethtool.h` to be installed, so it may be necessary to install the `ethtool` package for your system if this fails.
