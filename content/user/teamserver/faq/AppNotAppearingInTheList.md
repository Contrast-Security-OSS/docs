<!--
title: "An Application Is Not Appearing In The List"
description: "Explanation as to why an app may not appear in the list"
-->

There are a few reasons why this could happen:

1. The server on which the app is running hasn't had Contrast successfully installed. Check out **standard** or file a ticket with the [diagnostic log output file](user_javafaq.html#log) attached to see what's happening. If your server isn't appearing in the Contrast site, check out the [Troubleshooting](user_javafaq.html#agent) page.

2. The app is running at the root context and has no ```<display-name>``` in ***web.xml***. Contrast needs a name to uniquely identify an application, so if an app runs at the root, it requires a ```<display-name>``` to be set to provide this unique name. You can use the *contrast.rootapp* system property to specify the name of an app running at the root if a ```<display-name>``` can't be added.

3. The app has been archived, or an app with the same name and context path has been archived in the past.
