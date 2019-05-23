
For Ubuntu, in order to authenticate the Contrast repository signature
and to eliminate warnings about missing PGP key during installation of the
nginx package, it is necessary to add the key used to sign the Contrast
packages and repository to the apt program keyring. Please download this key
from our web site, and add it to the apt program keyring with the following
command:

    curl https://contrastsecurity.jfrog.io/contrastsecurity/api/gpg/key/public | sudo apt-key add -

For Ubuntu replace codename with Ubuntu distribution CODENAME and create the
file `/etc/apt/sources.list.d/contrast.list` with the following contents:

    deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-public/ CODENAME contrast

The correct codename for the system can be obtained via:

    grep VERSION_CODENAME /etc/os-release

For example, on Ubuntu 18.04, my VERSION_CODENAME is `VERSION_CODENAME=bionic`
therefore my `contrast.list` file would contain:

    # Example on Ubuntu 18.04
    deb https://contrastsecurity.jfrog.io/contrastsecurity/debian-public/ bionic contrast

Then run the following commands:

    sudo apt-get update
    sudo apt-get install contrast-java-agent

