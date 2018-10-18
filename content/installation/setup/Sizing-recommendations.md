<!--
  title: "TeamServer Sizing Recommendations",
  description: "AWS like sizing guidelines for TeamServer and Crawler",
  tags: "installation setup EOP sizing TS1 TS2 TS3 C1 crawler"
-->

## Overview

Contrast is designed for a scale-up architecture with an emphasis on providing more compute (vCPU) and memory resources for customers like you. The CPU and memory resources for Contrast can vary based on the number of agents connected and application traffic communicating back to the Contrast application. Two additional factors that also impact performance:

<a href="assets/images/KB2-k02.png" rel="lightbox" title="Components"><img class="thumbnail" src="assets/images/KB2-k02.png"/></a>

**Web traffic from consumers of Contrast reporting data.** Contrast is a highly transactional system that presents calculated and real-time data sets back to consumers of the data. As more users interface with the system, the greater the demand for compute and memory.

**Large amounts of data maintained in the application over extended periods of time.** You can proactively purge data over time or choose to keep the data. With any transactional system, the larger the data set to query against, the greater the compute requirements.

## Configuration Options

Contrast supports a wide selection of configurations, which are comprised of varying combinations of CPU, memory and storage capacity to fit different deployment scenarios. These configurations give you the flexibility to choose the appropriate mix of resources for your applications, and allows you to scale resources to the requirements of your target workload.

### TS1 configuration
TS1 configurations are designed for small workloads of one to three agents communicating to Contrast, or a single application agent for a small team of end users. A small contingent of web traffic end users - about one to five - may use the system periodically, during specific training sessions or for demonstration purposes with team members.

TS1 configurations provide a baseline level of CPU performance, but are flexible enough to scale to increasing compute and memory requirements. They are designed for small workloads that don’t use the full CPU capacity to be handling in-bound traces constantly or sustain large web traffic. 

| vCPUs | Clock Speed      | RAM | Storage |
|:-----:|:----------------:|:---:|:-------:|
| ~2    | 2.5GHz to 3.3GHz | 16GB |  100GB  |


### TS2 configuration
TS2 configurations are recommended for workloads of three to thirty agents communicating to Contrast and larger web traffic of users - about five to twenty five end users. Agents typically run constantly and transport findings to Contrast. End users access the system multiple times of day, and actively engage in Contrast features such as alerts, reports and integrations including Active Directory, LDAP and Issue Tracking Systems.

TS2 configurations provide a suitable level of performance for most deployments fitting the workloads described above. They are designed for typical workloads and scenarios within Contrast. The greater the number of connected agents, the greater the memory requirements are for Contrast to handle inflight traces. Storage depends on the life of trace data and the preservation of log files by system administrators.

| vCPUs    | Clock Speed      | RAM | Storage |
|:--------:|:----------------:|:---:|:-------:|
| ~4 to ~8 | 2.5GHz to 3.3GHz | 16GB to 24GB | 100GB to 200GB |


### TS3 configuration
TS3 configurations are intended for larger workloads of 30 to more than 100 agents communicating to Contrast and larger web traffic of users for full-scale enterprise deployments. Agents are connected at all times and transporting findings to Contrast. End users access the system multiple times of day, and actively engage in Contrast features such as alerts, reports and integrations including Active Directory, LDAP and Issue Tracking Systems.

TS3 configurations provide a high degree of performance and scalability for most deployments fitting the workloads described above. The greater the number of connected agents and end users, the greater the memory requirements for Contrast to handle inflight traces. Storage depends on the life of trace data and the preservation of log files by system administrators. Taking advantage of the Crawler microservice requires an extra storage demand. 

| vCPUs | Clock Speed      | RAM | Storage |
|:--------:|:----------------:|:---:|:-------:|
| ~8 to ~16 | 2.5GHz to 3.3GHz | 24GB to 48GB |  200GB to 500GB   |


#### Use cases for TS3:
* Advanced use of the Contrast REST API architecture for automation or data extraction purposes.
* Continuous integration of agents with large automated regression suites.
