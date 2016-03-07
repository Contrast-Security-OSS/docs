<!--
title: "Paging And Filtering"
description: "Information on paging and filtering"
tags: "API v2 filtering paging"
-->

The following parameters can be used for **paging and filtering** results on GET calls that return multiple results.

Parameter | Description
--------- | -----------
***count*** | The number of results to return (default *-1* to return all results)
***start_index*** | The index within the collection to return as the first result of the page
***sort_by*** | The field on which to sort within the returned result (Only *Strings*, *Numbers* or *Timestamps*)
***sort_order*** | The direction in which to sort the collection (*asc* or *desc*)

---

```
curl -HAccept:application/json -HAuthorization:test -HAPI-Key:test https://app.contrastsecurity.com/Contrast/api/applications/?count=10&start_index=11&sort_by=name&sort_order=desc
```

---

Additionally, there are also pre-generated filters for filtering data in useful ways. This list will continue to grow as we add more filters based on user feedback and client need.

Resource Type | Filter | Description
------------- | ------ | -----------
***Libraries*** | withCVE | Filter out libraries that do not have any CVE's associated with them.

---

To use a filter on a request, simply add the filter parameter and any parameters required by that filter to the URL.


```
curl -HAccept:application/json -HAuthorization:test -HAPI-Key:test https://app.contrastsecurity.com/Contrast/api/applications/{app-id}/libraries/?filter=withCVE
```
