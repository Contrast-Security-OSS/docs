<!--
title: "Contrast Says I Have 100% Code Coverage - I Don't Think That's Right"
description: "Explanation as to why Contrast may show 100% code coverage"
-->

Did you recently **Reset** your application? If so, that's what it looks like!


## Why Would It Matter To Reset The Application?

Over time, Contrast will report which URLs within your application you are currently exercising. This score may be artificially high when Contrast first starts, as the agent can only report on the URLs that it has actually seen. Combining Contrast with a test suite or an automatic web browsing tool, such as Selenium, will make this score more reliable and highlight gaps in testing that may develop.

Some other explanations:

* You're actually getting great code coverage. Crazy, right?
* You've set your application timeout too high and nothing is being considered as unexecuted
