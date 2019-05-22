
<!--
title: "Contrast .NET Core Agent Profiler Chaining"
description: "Contrast .NET Core agent instructions for profiler chaining"
tags: "installation agent .NET Core windows profiler chaining"
-->

## About Contrast Profiler Chaining 

Contrast profiler chaining allows the .NET Core agent to run alongside another .NET Core APM profiler, such as the ones provided by AppDynamics or New Relic. 

To achieve profiler chaining, you should replace the CORECLR environment variables for the APM with CONTRAST_CCC_CORECLR versions. Any of the following environment variable names that exist should be transformed: 

- `CORECLR_PROFILER` -> `CONTRAST_CCC_CORECLR_PROFILER`
- `CORECLR_PROFILER_PATH` -> `CONTRAST_CCC_CORECLR_PROFILER_PATH`
- `CORECLR_PROFILER_PATH_32` -> `CONTRAST_CCC_CORECLR_PROFILER_PATH_32`
- `CORECLR_PROFILER_PATH_64` -> `CONTRAST_CCC_CORECLR_PROFILER_PATH_64`

Use the following sets of instructions, which include the changes described above, to set up profiler chaining with [New Relic](#new-relic) or [AppDynamics](#appdynamics). 

## New Relic

Complete the following steps to install the .NET Core agent alongside the New Relic agent.

* [Install the New Relic agent](https://docs.newrelic.com/docs/agents/net-agent/installation/install-net-core-agent).

* Change the environment variable keys as follows:

    - `CORECLR_PROFILER` -> `CONTRAST_CCC_CORECLR_PROFILER`
    - `CORECLR_PROFILER_PATH` -> `CONTRAST_CCC_CORECLR_PROFILER_PATH`

    * The New Relic environment should should be similar to:

    ``` shell
    CORECLR_ENABLE_PROFILING=1
    CONTRAST_CCC_CORECLR_PROFILER={36032161-FFC0-4B61-B559-F6C5D41BAE5A}
    CORECLR_NEWRELIC_HOME=PATH\TO\INSTALL
    CONTRAST_CCC_CORECLR_PROFILER_PATH=%CORECLR_NEWRELIC_HOME%\NewRelic.Profiler.dll
    NEW_RELIC_LICENSE_KEY=YOUR_LICENSE_KEY
    NEW_RELIC_APP_NAME=YOUR_APP_NAME
    ```

* Follow the directions to [install the Contrast .NET Core agent](installation-netcoreinstall.html#netcore-windows).

 * The application environment with Contrast and New Relic should look like:

    ``` shell
    CORECLR_ENABLE_PROFILING=1
    CONTRAST_CCC_CORECLR_PROFILER={36032161-FFC0-4B61-B559-F6C5D41BAE5A}
    CORECLR_NEWRELIC_HOME=PATH\TO\INSTALL
    CONTRAST_CCC_CORECLR_PROFILER_PATH=%CORECLR_NEWRELIC_HOME%\NewRelic.Profiler.dll
    NEW_RELIC_LICENSE_KEY=YOUR_LICENSE_KEY
    NEW_RELIC_APP_NAME=YOUR_APP_NAME
    CORECLR_PROFILER_PATH_64=<CONTRAST_CORE_CLR_HOME>\runtimes\win-x64\native\ContrastProfiler.dll
    CORECLR_PROFILER_PATH_32=<CONTRAST_CORE_CLR_HOME>\runtimes\win-x86\native\ContrastProfiler.dll
    CORECLR_PROFILER={8B2CE134-0948-48CA-A4B2-80DDAD9F5791}
    CONTRAST_CONFIG_PATH=<CONTRAST_CORE_CLR_CONFIG_PATH>\contrast_security.yaml
    ```

## AppDynamics

Complete the following steps to install the .NET Core agent alongside the AppDynamics agent.

* [Install the AppDynamics agent](https://docs.appdynamics.com/display/PRO45/Install+the+.NET+Core+Microservices+Agent+for+Windows).

* Change the environment variable keys as follows:

    - `CORECLR_PROFILER` -> `CONTRAST_CCC_CORECLR_PROFILER`
    - `CORECLR_PROFILER_PATH_32` -> `CONTRAST_CCC_CORECLR_PROFILER_PATH_32`
    - `CORECLR_PROFILER_PATH_64` -> `CONTRAST_CCC_CORECLR_PROFILER_PATH_64`

    * The AppDynamics environment should be similar to:

     ``` shell
     CORECLR_ENABLE_PROFILING=1
     CONTRAST_CCC_CORECLR_PROFILER={39AEABC1-56A5-405F-B8E7-C3668490DB4A}
     CONTRAST_CCC_CORECLR_PROFILER_PATH_32=<actual_path>\AppDynamics.Profiler_x86.dll
     CONTRAST_CCC_CORECLR_PROFILER_PATH_64=<actual_path>\AppDynamics.Profiler_x64.dll
     ```

* Follow the directions to [install the Contrast .NET Core agent](installation-netcoreinstall.html#netcore-windows).

  * The application environment with Contrast and AppDynamics should look like:

    ``` shell
    CORECLR_ENABLE_PROFILING=1
    CONTRAST_CCC_CORECLR_PROFILER={39AEABC1-56A5-405F-B8E7-C3668490DB4A}
    CONTRAST_CCC_CORECLR_PROFILER_PATH_32=<actual_path>\AppDynamics.Profiler_x86.dll
    CONTRAST_CCC_CORECLR_PROFILER_PATH_64=<actual_path>\AppDynamics.Profiler_x64.dll
    CORECLR_PROFILER_PATH_64=<CONTRAST_CORE_CLR_HOME>\runtimes\win-x64\native\ContrastProfiler.dll
    CORECLR_PROFILER_PATH_32=<CONTRAST_CORE_CLR_HOME>\runtimes\win-x86\native\ContrastProfiler.dll
    CORECLR_PROFILER={8B2CE134-0948-48CA-A4B2-80DDAD9F5791}
    CONTRAST_CONFIG_PATH=<CONTRAST_CORE_CLR_CONFIG_PATH>\contrast_security.yaml
    ```

## Next Steps

* [Use the Contrast .NET Core agent](installation-netcoreusage.html)  
* [Customize .NET Core agent configuration](installation-netcoreconfig.html)  
