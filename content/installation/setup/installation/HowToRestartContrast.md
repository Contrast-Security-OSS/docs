<!--
title: "How To Restart Contrast"
description: "Instructions on restarting Contrast"
tags: "installation setup TeamServer restart troubleshooting"
-->

Restart Contrast on **Linux** by running: 

```
sudo service contrast-server restart
```

Restart Contrast on **Windows** by running:

```
net stop "Contrast Server"
```

Once the service is completely shutdown on Windows, run: 

```
net start "Contrast Server"
```


