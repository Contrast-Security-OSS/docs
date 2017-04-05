<!--
  title: "TeamServer Sizing Recommendations",
  description: "AWS like sizing guidelines for TeamServer and Crawler",
  tags: "EOP sizing TS1 TS2 TS3 C1 crawler"
-->

## Overview
The Contrast Enterprise on Premise (EOP) TeamServer is designed for ease of deployment and simplicity of configuration.  The installation contains all of the embedded components that make up the configuration of the system. These components include a Tomcat servlet container, a MySQL database instance, a Cassandra NoSQL instance and an Oracle Hotspot Java Virtual Machine. All of these components are embedded within the installation binary and deployed to a single server as part of the TeamServer architecture.

<a href="assets/images/KB2-k02.png" rel="lightbox" title="Components"><img class="thumbnail" src="assets/images/KB2-k02.png"/></a>

TeamServer is designed for a scale-up architecture with an emphasis on providing more compute and memory resources upon need. Future versions of TeamServer will have greater flexibility for distributed deployment and configuration for greater scalability.

The compute (CPU) and memory resources for TeamServer can vary given the number of agents connected and application traffic communicating back to the TeamServer. There are two additional factors that will also impact performance.
The first additional factor is web traffic from consumers of the TeamServer reporting data. TeamServer is a highly transactional system that presents calculated and real-time data sets back to consumers of the data. As more users interface with the system, the greater the demand for compute and memory.

Second, TeamServer will maintain large amounts of data over extended periods of time. Customers can proactively purge data over time or choose to keep the data. With any transactional system, the larger the data set to query against, the greater the compute requirements.

The section below provides a wide selection of configurations optimized to fit different deployment scenarios for Contrast customers. These configurations are comprised of varying combinations of CPU, memory and storage capacity and give our customers the flexibility to choose the appropriate mix of resources for your applications allowing you to scale your resources to the requirements of your target workload.

## TeamServer Configuration Options

### TS1 Configuration
TS1 configurations are designed for small workloads of 1 to 3 agents communicating to TeamServer as part of the initial analysis of Contrast during a “Proof of Concept” exercise or a single application agent for a small team of end users. A small contingent of web traffic end users, possibly one to five may use the system from time to time or during specific training sessions with a sales engineer or for demonstration purposes with team members.

TS1 configurations will provide a baseline level of CPU performance, but are flexible enough to scale to increasing compute and memory requirements. They are designed for small workloads that don’t use the full CPU capacity to be handling in-bound traces constantly, or sustain large web traffic. 

| VCPUs | Clock Speed      | RAM | Storage |
|:-----:|:----------------:|:---:|:-------:|
| ~2    | 2.5GHz to 3.3GHz | 4GB |  30GB   |

---

#### Use Cases for TS1:
* Proof of concept exercises and small deployments of 1 to 3 agents with small teams consuming the results (~ 5 end-users).

### TS2 Configuration
TS2 configurations are recommended for common workloads of 3 to 30 agents communicating to TeamServer and larger web traffic of users, such as 5 to 25 end-users. Agents are typically running constantly and transporting findings to TeamServer. End users will access the system multiple times of day and actively engage in TeamServer features such as alerts, reports and integrations.

TS2 configurations will provide a suitable level of performance for most deployments fitting the workloads above. They are designed for typical workloads and scenarios within TeamServer. The greater the number of connected agents, the greater the memory requirements will be for the TeamServer to handle inflight traces. Storage will be dependent on the life of trace data and the preservation of log files by system administrators.

| VCPUs | Clock Speed      | RAM | Storage |
|:--------:|:----------------:|:---:|:-------:|
| ~4 to ~8 | 2.5GHz to 3.3GHz | 8GB to 12GB |  50GB to 100GB   |

---

#### Use Cases for TS2:
* Agent deployments between 3 and 30.
* Integrations with external systems such as Active Directory, LDAP and Issue * Tracking Systems.
* End user team traffic between 5 and 25 users.

### TS3 Configuration
TS3 configurations are intended for larger workloads of 30 to 100+ agents communicating to TeamServer and larger web traffic of users for full-scale enterprise deployments. Agents are connected at all times and transporting findings to TeamServer. End users will access the system multiple times of day and actively engage in TeamServer features such as alerts, reports and integrations.

TS3 configurations will provide a high-degree of performance and scalability for most deployments fitting the workloads above. The greater the number of connected agents and end-users, the greater the memory requirements will be for the TeamServer to handle inflight traces. Storage will be dependent on the life of trace data and the preservation of log files by system administrators. 

| VCPUs | Clock Speed      | RAM | Storage |
|:--------:|:----------------:|:---:|:-------:|
| ~8 to ~16 | 2.5GHz to 3.3GHz | 16GB to 24GB |  100GB to 500GB   |

---

#### Use Cases for TS3:
* Enterprise agent deployments greater than 30.
* Integrations with external systems such as Active Directory, LDAP and Issue Tracking Systems.
* Advanced use of the TeamServer REST API architecture for automation or data extraction purposes.
* Continuous integration of agents with large automated regression suites.
* Taking advantage of the Crawler micro-server (requires extra storage demand).

#### C1 Configuration (Crawler Micro-Service)
C1 configurations are recommended for EOP customers deploying the Crawler micro-service. The compute, resource and storage requirements are minimal for the Crawler.

Most Crawler installations are suitable to run on a single VCPU. However, crawling performance would improve with at least 2 VCPUs. Memory can be configured for the Crawler processes, which are both a Java Virtual Machine and PhantomJS process. Storage is only needed during the crawling operation. 

Once the crawling is complete, the results of the crawling exercise are transferred to the TeamServer. Note that TeamServer customers making use of the Crawler service will have more storage needs for storing Crawler results. 

EOP customers implementing Crawler are advised to run on different systems than their TeamServer. While most TeamServer deployments can support the additional compute and resource requirements, we still recommend running this service on a different server. Crawler can be configured to run on multiple servers for parallel crawling operations.

| VCPUs | Clock Speed      | RAM | Storage |
|:-----:|:----------------:|:---:|:-------:|
| ~1 to ~2 | 2.5GHz to 3.3GHz | 2GB | Less than 10GB   |

---

#### Use Cases for C1:
* Single Crawler micro-service
* Deploy multiple Crawler services for parallel crawling efforts.
