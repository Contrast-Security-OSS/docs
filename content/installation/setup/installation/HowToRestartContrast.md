<!--
title: "How To Restart Contrast"
description: "Instructions on restarting Contrast"
tags: "installation setup TeamServer restart troubleshooting"
-->

## Linux

Run:

```sudo service contrast-server restart
```


## Windows

Run:

```net stop "Contrast Server"
```

Once the service is completely shutdown, run:

```net start "Contrast Server"```
