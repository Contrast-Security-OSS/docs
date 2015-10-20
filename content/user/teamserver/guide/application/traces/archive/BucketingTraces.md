<!--
title: "Bucketing Traces"
description: "Information on bucketing traces"
-->

During triaging, it's often helpful to group traces by some factor - for example, which developer will be in charge of fixing them, or what part of the software contains the issues. To accomplish this ad-hoc categorization, we make **Buckets**.

Buckets are user-defined groups of traces that can go under any name. At first, your application won't have any buckets defined:

<a href="assets/images/KB3-b05_1.png" rel="lightbox" title="No Buckets Defined"><img class="thumbnail" src="assets/images/KB3-b05_1.png"/></a>

Create a new bucket by dragging trace(s) into the **Buckets** area or by simply right-clicking on it. You'll be prompted for a new **Bucket name**:

<a href="assets/images/KB3-b05_2.png" rel="lightbox" title="Creating A New Bucket"><img class="thumbnail" src="assets/images/KB3-b05_2.png"/></a>

You may have multiple buckets, but a trace can only belong to one bucket at a time. Ideally, once all your traces are in a bucket and triaged properly, you can organize them by bucket and deliver them to the appropriate team as shown here:

<a href="assets/images/KB3-b05_3.png" rel="lightbox" title="Organizing Buckets"><img class="thumbnail" src="assets/images/KB3-b05_3.png"/></a>

>**Note:** Using the party responsible for fixing a bucket's issues as its identity name is only an option. Your workflow may make it easier to bucket traces by their internal risk classification, the person responsible for discovering, or something else entirely.
