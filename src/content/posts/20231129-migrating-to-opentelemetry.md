---
title: "Migrating to OpenTelemetry"
date: 2023-11-29T10:25:46-06:00
---

I came across [this writeup on migrating to OpenTelemetry](https://www.airplane.dev/blog/migrating-to-opentelemetry) for application performance analytics. Adopting OpenTelemetry replaces vendor-provided agents, allowing you to transition between services like Datadog and New Relic with far greater ease.

Another detail that caught my eye was the cost reduction:

> OTel has allowed us to save a significant amount of money on our Datadog bill! Because we now use a centralized collector instead of per-node Datadog agents, the number of hosts that Datadog sees is significantly reduced. At $15 / host / month, we’ve been able to shave thousands off of our monthly Datadog charges.
