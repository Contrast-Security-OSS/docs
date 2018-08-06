
# Installing Contrast Java agent via package manager

The Contrast Java agent may be installed using system package managers. Unlike
the jar download from the Contrast web dashboard's "Add Agent" wizard, the
Contrast Java agent jar installed by system package managers is not
preconfigured with connection parameters, so users must configure the Contrast
Java agent using a configuration file (see
[Configuration](./installation-javaconfig.html)

## Ubuntu based systems

To install Contrast Java agent from our Debian repository, first configure your
system to use our distribution agnostic Debian repository.

    curl https://contrastsecurity.jfrog.io/contrastsecurity/api/gpg/key/public | sudo apt-key add -
    echo "deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-staging/ all contrast" | sudo tee /etc/apt/sources.list.d/contrast-staging.list

Then install the Contrast Java agent

    sudo apt-get update && sudo apt- get install `contrast-java-agent`

Edit `/etc/contrast/contrast-java-config.yaml` to configure Contrast Java agent
to connect to the Contrast server. <!-- (See the YAML
[Configuration doc](./installation-javaconfig.html) for more info.) -->

To remove the Contrast Java agent

    apt-get remove contrast-java-agent

### Optional: install `contrast-java-agent-exec-helper`

Some system adiministrators may wish to additionally install the
`contrast-java-agent-exec-helper` package which configures the system to always
enable Contrast whenever `java` is executed. Instead of a typical Contrast
installation which requires users to configure their Java services to include
the Contrast Java agent, the Contrast Java agent Exec Helper intercepts all new
`java` processes and automatically configures the process to use Contrast. This
is ideal for some scenarios when Contrast needs to support legacy infrastructure
wherein Java application server configuration is not well understood, but in
most scenarios administrators desire more granular control over their Contrast
configurations

The Contrast Java agent Exec Helper supports Ubuntu LTS distributions trusty,
xenial, and bionic.

First, verify that you have installed the Contrast Java agent. If this package
is not installed, follow instructions to install and configure
`contrast-java-agent` first

    dpkg -s contrast-java-agent

To install the Contrast Java agent Exec Helper from our Debian repository, first
configure your system to use our repository tailored for your Ubuntu LTS
distribution

    curl https://contrastsecurity.jfrog.io/contrastsecurity/api/gpg/key/public | sudo apt-key add -
    echo "deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-staging/ $(bash -c '. /etc/lsb-release && echo $DISTRIB_CODENAME') contrast" | sudo tee /etc/apt/sources.list.d/contrast-staging.list

Then install the `contrast-java-agent`-exec-helper package

    sudo apt-get update && sudo apt-get install contrast-java-agent-exec-helper

The `contrast-java-agent-exec-helper` expects to find the Contrast Java agent at
`/opt/contrast/contrast.jar` where the `contrast-java-agent` packages installs
it. If for some reason the Contrast jar file has a different path, use
environment variable `CONTRAST_JAVA_AGENT_PATH` to configure the
`contrast-java-agent-exec-helper`.

To remove the `contrast-java-agent-exec-helper`

    apt-get remove contrast-java-agent-exec-helper

## Red Hat based systems

Includes Red Hat Enterprise Linux (RHEL) and CentOS versions 5, 6, and 7

To install Contrast Java agent from our Yum repository, first configure your
system to use our repository.

    OSREL=$(rpmquery -E "%{rhel}")
    sudo -E tee /etc/yum.repos.d/contrast.repo << EOF
    [contrast]
    name=contrast repo
    baseurl=https://contrastsecurity.jfrog.io/contrastsecurity/rpm-staging/centos-$OSREL/
    gpgcheck=0
    enabled=1
    EOF

Then install the Contrast Java agent

    yum install contrast-java-agent

Edit `/etc/contrast/contrast-java-config.yaml` to configure Contrast Java agent
to connect to the Contrast server. <!-- (see
[Configuration](./installation-javaconfig.html) -->

### Optional: install `contrast-java-agent-exec-helper`

Some system adiministrators may wish to additionally install the
`contrast-java-agent-exec-helper` package which configures the system to always
enable Contrast whenever `java` is executed. Instead of a typical Contrast
installation which requires users to configure their Java services to include
the Contrast Java agent, the Contrast Java agent Exec Helper intercepts all new
`java` processes and automatically configures the process to use Contrast. This
is ideal for some scenarios when Contrast needs to support legacy infrastructure
wherein Java application server configuration is not well understood, but in
most scenarios administrators desire more granular control over their Contrast
configurations

First, verify that you have installed the Contrast Java agent. If this package
is not installed, follow instructions to install and configure
`contrast-java-agent` first

    yum list installed contrast-java-agent

Having already configured your system to use the Contrast Yum repository when
you installed the `contrast-java-agent` package, simply install the
`contrast-java-agent-exec-helper` package

    yum install contrast-java-agent-exec-helper

The `contrast-java-agent-exec-helper` expects to find the Contrast Java agent at
`/opt/contrast/contrast.jar` where the `contrast-java-agent` packages installs
it. If for some reason the Contrast jar file has a different path, use
environment variable `CONTRAST_JAVA_AGENT_PATH` to configure the
`contrast-java-agent-exec-helper`.

To remove the `contrast-java-agent-exec-helper`

    apt-get remove contrast-java-agent-exec-helper
