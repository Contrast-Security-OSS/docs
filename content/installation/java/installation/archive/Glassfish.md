<!--
title: "Installing on GlassFish"
description: "Agent installation using the GlassFish container"
tags: "java agent installation glassfish"
-->

[Back to Quick Links](user_javainstall.html#links)

## Configuring GlassFish
If you launch GlassFish yourself, you'll have to add Contrast's JVM parameter to the ***domain.xml*** file in your domain directory, i.e. ***${GLASSFISH_DIR}\domains\domain1***.

``` 
<!-- Within the your profile's "java-config" element, add the following lines: -->
<jvm-options>-javaagent:${DOWNLOADS}\contrast.jar</jvm-options>
```

Of course, you will need to substitute the path to ***contrast.jar*** and the GlassFish server for your environment.


## See Also

Running Contrast from Other GlassFish Launchers:

* [Running Contrast on GlassFish with NetBeans](user_javainstall.html#glassnetbeans)

* [Running Contrast on GlassFish with IntelliJ](user_javainstall.html#glassintellij)
